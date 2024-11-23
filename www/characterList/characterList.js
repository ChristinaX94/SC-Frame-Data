var characterTable = ["Assassin","Astaroth","Berserker","Cassandra","Cervantes","Ivy","Kilik","Link","Lizardman","Maxi","Mitsurugi","Necrid",
                       "Nightmare","Raphael","Seung-Mina","Sophitia","Taki","Talim","Voldo","Xianghua","Yoshimitsu",
                       "Yunsung"];
var currentTheme;
var game;

window.onload = function () {

    var settings = localStorage.getItem("settingsJSON");
    var data = JSON.parse(settings);
    currentTheme = data.currentTheme;

    var urlSettings = localStorage.getItem("urlJSON");
    data = JSON.parse(urlSettings);
    game = data.game;

    /*data = document.location.href.split('?')[1];
    id = data.split("&")[0].split("=")[1];
    game = data.split("&")[1].split("=")[1];
    character = data.split("&")[2].split("=")[1];
    currentTheme = data.split("&")[3].split("=")[1];
    currentNotation = data.split("&")[4].split("=")[1];*/
    init.initialize();
};

var init = {
    initialize: function() {
        this.addCharacters();

        document.getElementById("drop").addEventListener("click", this.openMenu);
        document.getElementById("settings").addEventListener("click", this.setAppearance);
        document.getElementById("credits").addEventListener("click", this.showCredits);
        document.getElementById("exit").addEventListener("click", this.exitApp);
        document.getElementsByClassName("home")[0].addEventListener("click",this.showHome);

        for(var i=0;i<characterTable.length;i++){
            document.getElementsByClassName("character")[i].addEventListener("click", this.characterMenu);
        }

        document.getElementById("gameTitle").innerHTML="SC"+game+" -&nbsp"; //whitespace

        this.setChosenValues();
    },

    showHome: function(){
        document.location.href = "../index/index.html";
    },

    addCharacters: function(){
        for(var i=0;i<characterTable.length;i++){
            var image = document.createElement("img");
            image.classList.add("character");
            image.setAttribute("id",characterTable[i]);
            image.setAttribute("src","../img/"+characterTable[i]+".jpg");

            var character = document.createElement("p");
            var text = document.createTextNode(characterTable[i]);
            character.appendChild(text);
            character.classList.add("text");
            character.classList.add("name");

            var div = document.createElement("div");
            div.appendChild(image);
            div.appendChild(character);

            var element = document.getElementById("list");
            element.appendChild(div);
        }
    },

    characterMenu: function(){

        var urlSettings = {"id":"characterList","game": game, "character":this.id};
        var urlJSON = JSON.stringify(urlSettings);
        localStorage.setItem("urlJSON", urlJSON);

        document.location.href = "../characterMenu/characterMenu.html";//?ID=characterList&game="+game+"&character="+character+"&currentTheme="+currentTheme+"&currentNotation="+currentNotation;
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
            for(var i=0;i<document.getElementsByClassName("character").length;i++){
                document.getElementsByClassName("character")[i].classList.add("borderNight");
                document.getElementsByClassName("name")[i].classList.add("borderNight");
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
            for(var i=0;i<document.getElementsByClassName("character").length;i++){
                document.getElementsByClassName("character")[i].classList.add("borderLight");
                document.getElementsByClassName("name")[i].classList.add("borderLight");
            }
        }
    },

    openMenu: function(){
        document.getElementById("myDropdown").classList.toggle("show");
    },

    setAppearance: function(){
        var urlSettings = {"id":"characterList","game": game};
        var urlJSON = JSON.stringify(urlSettings);
        localStorage.setItem("urlJSON", urlJSON);
        document.location.href = "../settings/settings.html";//?ID=characterList&game="+game+"&character=0&currentTheme="+currentTheme+"&currentNotation="+currentNotation;
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
