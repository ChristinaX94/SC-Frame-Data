var currentTheme = "night";

window.onload = function () {

    var settings = localStorage.getItem("settingsJSON");
    var data = JSON.parse(settings);
    if(data!=null){
        currentTheme = data.currentTheme;
    }
    else{
        settings = {"currentTheme":currentTheme};
        settingsJSON = JSON.stringify(settings);
        localStorage.setItem("settingsJSON", settingsJSON);
    }
    init.initialize();
};

var init = {
    initialize: function() {
        document.getElementById("drop").addEventListener("click", this.openMenu);
        document.getElementById("settings").addEventListener("click", this.setAppearance);
        document.getElementById("credits").addEventListener("click", this.showCredits);
        document.getElementById("exit").addEventListener("click", this.exitApp);

        for(var i=0;i<2;i++){
            document.getElementsByClassName("sc")[i].addEventListener("click",this.openCharacterList);
        }

        this.setChosenValues();
    },

    openCharacterList: function(){

        var urlSettings = {"id":"index","game":this.id};
        var urlJSON = JSON.stringify(urlSettings);
        localStorage.setItem("urlJSON", urlJSON);

        document.location.href = "../characterList/characterList.html";//?ID=index&game="+game+"&name=0&currentTheme="+currentTheme+"&currentNotation="+currentNotation;
    },

    setChosenValues: function(){
        if(currentTheme=="night"){
            document.getElementsByClassName("app")[0].classList.add("backgroundNight");
            for(var i=0;i<document.getElementsByClassName("banner").length;i++){
                document.getElementsByClassName("banner")[i].classList.add("borderNight");
            }
            for(var i=0;i<document.getElementsByClassName("text").length;i++){
                document.getElementsByClassName("text")[i].classList.add("textNight");
            }
            for(var i=0;i<document.getElementsByClassName("sc").length;i++){
                document.getElementsByClassName("sc")[i].classList.add("borderNight");
            }

        }
        else{
            document.getElementsByClassName("app")[0].classList.add("backgroundLight");
            for(var i=0;i<document.getElementsByClassName("banner").length;i++){
                document.getElementsByClassName("banner")[i].classList.add("borderLight");
            }
            for(var i=0;i<document.getElementsByClassName("text").length;i++){
                document.getElementsByClassName("text")[i].classList.add("textLight");
            }
            for(var i=0;i<document.getElementsByClassName("sc").length;i++){
                document.getElementsByClassName("sc")[i].classList.add("borderLight");
            }
        }
    },

    openMenu: function(){
        document.getElementById("myDropdown").classList.toggle("show");
        //document.location.href = "../frameData/frameData.html";
    },

    setAppearance: function(){
        var urlSettings = {"id":"index"};
        var urlJSON = JSON.stringify(urlSettings);
        localStorage.setItem("urlJSON", urlJSON);
        document.location.href = "../settings/settings.html";//?ID=index&game=0&character=0&currentTheme="+currentTheme+"&currentNotation="+currentNotation;
    },

    showCredits: function(){
        alert("Soul Calibur is made by Namco.");
    },

    exitApp: function(){
        localStorage.clear();
        navigator.app.exitApp();
    }
};


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
