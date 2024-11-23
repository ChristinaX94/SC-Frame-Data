var menuTable = ["Frame Data","Punishment List","Compare Frames","Match - Up Tips","Combos","Misc Tips"];
var menuId = ["frameData","punishmentList","compareFrames","matchUpTips","Combos","miscTips"];

var currentTheme;
var game;
var character;

window.onload = function () {
    /*data = document.location.href.split('?')[1];
    id = data.split("&")[0].split("=")[1];
    game = data.split("&")[1].split("=")[1];
    character = data.split("&")[2].split("=")[1];
    currentTheme = data.split("&")[3].split("=")[1];
    currentNotation = data.split("&")[4].split("=")[1];*/

    var settings = localStorage.getItem("settingsJSON");
    var data = JSON.parse(settings);
    currentTheme = data.currentTheme;

    var urlSettings = localStorage.getItem("urlJSON");
    data = JSON.parse(urlSettings);
    game = data.game;
    character = data.character;


    init.initialize();
};

var init = {
    initialize: function() {

        this.addMenu();
        document.getElementById("drop").addEventListener("click", this.openMenu);
        document.getElementById("settings").addEventListener("click", this.setAppearance);
        document.getElementById("credits").addEventListener("click", this.showCredits);
        document.getElementById("exit").addEventListener("click", this.exitApp);
        document.getElementsByClassName("home")[0].addEventListener("click",this.showHome);

        for(var i=0;i<menuTable.length;i++){
            document.getElementById(menuId[i]).addEventListener("click", this.chosenMode);
        }
        document.getElementById("gameTitle").innerHTML="SC"+game+" -&nbsp";
        document.getElementById("characterName").innerHTML=character;
        this.setChosenValues();
    },

    addMenu:function(){

        for(var i=0;i<menuTable.length;i++){

            var menu = document.createElement("p");
            var text = document.createTextNode(menuTable[i]);
            menu.appendChild(text);
            menu.classList.add("text");
            menu.classList.add("mode");

            var div = document.createElement("div");
            div.id=menuId[i];
            div.appendChild(menu);

            var element = document.getElementsByClassName("modeList")[0];
            element.appendChild(div);
        }

    },

    showHome: function(){
        document.location.href = "../index/index.html";
    },

    chosenMode: function(){
        var mode = this.id;
        var urlSettings = {"id":"characterList","game": game, "character":character, "mode":mode};
        var urlJSON = JSON.stringify(urlSettings);
        localStorage.setItem("urlJSON", urlJSON);

        document.location.href = "../"+mode+"/"+mode+".html";
        //?ID=characterMenu&game="+game+"&character="+character+"&currentTheme="+currentTheme+"&currentNotation="+currentNotation;
    },

    setChosenValues: function(){
        if(currentTheme=="night"){
            document.getElementsByClassName("app")[0].classList.add("backgroundNight");
            for(var i=0;i<document.getElementsByClassName("dropdown").length;i++){
                document.getElementsByClassName("dropdown")[i].classList.add("borderNight");
            }
            for(var i=0;i<document.getElementsByClassName("text").length;i++){
                document.getElementsByClassName("text")[i].classList.add("textNight");
            }
            for(var i=0;i<document.getElementsByClassName("mode").length;i++){
                document.getElementsByClassName("mode")[i].classList.add("borderNight");
            }

        }
        else{
            document.getElementsByClassName("app")[0].classList.add("backgroundLight");
            for(var i=0;i<document.getElementsByClassName("dropdown").length;i++){
                document.getElementsByClassName("dropdown")[i].classList.add("borderLight");
            }
            for(var i=0;i<document.getElementsByClassName("text").length;i++){
                document.getElementsByClassName("text")[i].classList.add("textLight");
            }
            for(var i=0;i<document.getElementsByClassName("mode").length;i++){
                document.getElementsByClassName("mode")[i].classList.add("borderLight");
            }
        }
    },

    openMenu: function(){
        document.getElementById("myDropdown").classList.toggle("show");
    },

    setAppearance: function(){
        var urlSettings = {"id":"characterMenu","game": game,"character":character};
        var urlJSON = JSON.stringify(urlSettings);
        localStorage.setItem("urlJSON", urlJSON);
        document.location.href = "../settings/settings.html";
        //?ID=characterMenu&game="+game+"&character="+character+"&currentTheme="+currentTheme+"&currentNotation="+currentNotation;
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
