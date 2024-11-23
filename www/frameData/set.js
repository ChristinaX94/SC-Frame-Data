
var characterTable = ["Assassin","Astaroth","Berserker","Cassandra","Cervantes","Ivy","Kilik","Link","Lizardman","Maxi","Mitsurugi","Necrid",
                       "Nightmare","Raphael","Seung-Mina","Sophitia","Taki","Talim","Voldo","Xianghua","Yoshimitsu",
                       "Yunsung"];

var characterChoose = [Assassin,"Astaroth","Berserker","Cassandra","Cervantes","Ivy","Kilik","Link","Lizardman","Maxi","Mitsurugi","Necrid",
                       "Nightmare",Raphael,"Seung-Mina","Sophitia","Taki","Talim","Voldo","Xianghua","Yoshimitsu",
                       "Yunsung"];

var settings = localStorage.getItem("settingsJSON");
var data = JSON.parse(settings);
var currentTheme = data.currentTheme;

var urlSettings = localStorage.getItem("urlJSON");
var data = JSON.parse(urlSettings);
var game = data.game;
var character = data.character;
var mode = data.mode;

var tmenu = 0;
var tpanel = 0;
var tfilters = 0;


var position = characterTable.indexOf(character);
character = characterChoose[position];

$(document).ready(function(){
    var xPos = 0;

    document.getElementById("headTitle").innerHTML="SC"+game+" - " + data.character;

    document.getElementById("ge").addEventListener("click", function(){
        unfreeze();
    });

    document.getElementById("menub").addEventListener("click", function(){
        openMenu();
    });

    document.getElementById("home").addEventListener("click", function(){
        document.location.href = "../index/index.html";
    });

    document.getElementById("settings").addEventListener("click",function(){
        var urlSettings = {"id":"frameData","game": game,"character":data.character,"mode":mode};
        var urlJSON = JSON.stringify(urlSettings);
        localStorage.setItem("urlJSON", urlJSON);
        document.location.href = "../settings/settings.html";
    });

    document.getElementById("exit").addEventListener("click",function(){
         localStorage.clear();
         navigator.app.exitApp();
    });

    document.getElementById("credits").addEventListener("click",function(){
        alert("Soul Calibur is made by Namco.");
     });


    $(document).on('touchstart', 'body', function(e) {
            xPos = e.originalEvent.touches[0].pageX;
     });

    $("#app").swipe( {
       //Generic swipe handler for all directions
            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                 if(xPos<50 && tmenu == 0 && tpanel == 0 && tfilters == 0){
                    openMenu();
                 }
            }
    });

});

window.onclick = function(event) {
    if (!event.target.matches("#mySidebar") && !event.target.matches("#menub")) {
        unfreeze();
    }
};

function unfreeze(){
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("be").style.opacity = "1";
    document.getElementById("frameTable").style.opacity = "1";
    document.getElementById("he").style.opacity = "1";
    document.getElementById("app").classList.remove("freezeScreen");
    tmenu = 0;
};

function openMenu(){
    document.getElementById("be").style.opacity = "0.3";
    document.getElementById("frameTable").style.opacity = "0.3";
    document.getElementById("he").style.opacity = "0.3";

    document.getElementById("mySidebar").style.display = "block";

    var y = document.getElementById("app").scrollTop;
    document.getElementById("mySidebar").style.top = y;

    document.getElementById("app").classList.add("freezeScreen");
    tmenu = 1;
};

