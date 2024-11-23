var currentTheme;
var id;

function setColor(chosen, unchosen){
    document.getElementById(chosen).setAttribute("class", "chosen");
    document.getElementById(chosen).childNodes[1].setAttribute("class","text2");
    document.getElementById(unchosen).setAttribute("class", "unchosen");
    document.getElementById(unchosen).childNodes[1].setAttribute("class","text");
    currentTheme = chosen;

};

window.onload = function () {

    var settings = localStorage.getItem("settingsJSON");
    var data = JSON.parse(settings);
    currentTheme = data.currentTheme;

    var urlSettings = localStorage.getItem("urlJSON");
    data = JSON.parse(urlSettings);
    id = data.id;

    init.initialize();
};


var init = {

    initialize: function() {

        if(currentTheme=="night"){
            this.setNight();
        }
        else{
            this.setDay();
        }

        document.getElementById("night").addEventListener("click",this.setNight);
        document.getElementById("light").addEventListener("click",this.setDay);

        document.getElementsByClassName("footer")[0].addEventListener("click",this.applySettings);
    },

    applySettings: function(){
        settings = {"currentTheme":currentTheme};
        settingsJSON = JSON.stringify(settings);
        localStorage.setItem("settingsJSON", settingsJSON);

        document.location.href = "../"+id+"/"+id+".html";
    },

    setNight: function(){
        setColor("night","light");
    },

    setDay: function(){
        setColor("light","night");
    }
};