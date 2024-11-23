var moveTypes=["A-MOVES","B-MOVES","K-MOVES","SIMULTANEOUS PRESS","SPECIAL STANCES","THROWS"];
var moveSpecialTypes=["STANDARD","DIRECTIONALS","8WAYRUN","WR/WL/FC/BT"];
var titles=["Attack","Level","DMG","IMP","GRD","HIT","CH","SC"];

var tabsOpen=0;
var highlighted;
var character;
var stances = ["0"];

var init = {
    initialize: function() {
        //character = CHARACTER;
        if(character["SPECIAL STANCES"]!=null){
            stances = Object.keys(character["SPECIAL STANCES"]);
        }
        document.getElementById("search").addEventListener("click",this.searchMove);
        this.addTypes();
        filters.selectChar();
        filters.createFiltersWindow();
        document.getElementById("filterButton").addEventListener("click",filters.addWindow);
        document.getElementById("tabs").addEventListener("click",this.openTabs);
        document.getElementById("notabs").addEventListener("click",this.closeTabs);


        if(currentTheme == "light"){
            document.getElementById("app").style.background="blue";
        }
        else{
            document.getElementById("app").style.background="black";
        }

        document.getElementById("searchBar").addEventListener("search",this.unHighlight);

    },


    unHighlight: function(){
        if(document.getElementsByClassName("highlight").length>0){
            var highlighted = document.getElementsByClassName("highlight")[0].id;
            highlighted = highlighted.substring(0, highlighted.length - 1);
            for(var i=0;i<titles.length;i++){
                document.getElementById(highlighted+i).classList.remove("highlight");
            }
        }
    },




    openTabs: function(){
        for(var i=0;i<moveTypes.length;i++){

            var s=1;
            if(i==4 && stances[0]!="0"){
                s=stances.length;
            }

            for(var k=0;k<s;k++){
                for(var j=0;j<moveSpecialTypes.length;j++){
                    var stanceID = moveTypes[i]+":0";
                    if(i==4 && stances[0]!="0"){
                        stanceID = moveTypes[i]+":"+stances[k];

                        var el1 = document.getElementById(stanceID);
                        if(el1 == null){
                            continue;
                        }
                        if(!el1.classList.contains("show")){
                            el1.classList.toggle("show");
                        }
                    }
                    var el = document.getElementById(stanceID+":"+moveSpecialTypes[j]);
                    if(el == null){
                        continue;
                    }

                    if(!el.classList.contains("show")){
                        el.classList.toggle("show");
                    }

                    var element = document.getElementById(stanceID+":"+moveSpecialTypes[j]+":data");

                    if(!element.classList.contains("show")){
                        element.classList.toggle("show");
                        if(tabsOpen==0){
                            document.getElementById("frameTable").classList.toggle("on");
                        }
                        tabsOpen++;
                    }
                }
            }
        }
    },

    closeTabs: function(){
        for(var i=0;i<moveTypes.length;i++){

            var s=1;
            if(i==4 && stances[0]!="0"){
                s=stances.length;
            }

            for(var k=0;k<s;k++){
                for(var j=0;j<moveSpecialTypes.length;j++){
                    var stanceID = moveTypes[i]+":0";
                    if(i==4 && stances[0]!="0"){
                        stanceID = moveTypes[i]+":"+stances[k];

                        var el1 = document.getElementById(stanceID);
                        if(el1 == null){
                            continue;
                        }
                        if(el1.classList.contains("show")){
                            el1.classList.toggle("show");
                        }
                    }
                    var el = document.getElementById(stanceID+":"+moveSpecialTypes[j]);
                    if(el == null){
                        continue;
                    }

                    if(el.classList.contains("show")){
                        el.classList.toggle("show");
                    }

                    var element = document.getElementById(stanceID+":"+moveSpecialTypes[j]+":data");

                    if(element.classList.contains("show")){
                        element.classList.toggle("show");
                        tabsOpen--;
                        if(tabsOpen==0){
                            document.getElementById("frameTable").classList.toggle("on");
                        }
                    }
                }
            }
        }
    },


    searchMove:function(){
        var move = document.getElementById("searchBar").value;
        var subCategory = "Doesn't exist";
        var stanceCategory = "0";
        var mainCategory = "Doesn't exist";
        findCategory();


        var tableBody = mainCategory+":"+stanceCategory+":"+subCategory+":main";
        //alert(tableBody);
        tableBody = document.getElementById(tableBody).children.length;
        var tableBodyData= mainCategory+":"+stanceCategory+":"+subCategory+":data:";
        for(var i=0;i<tableBody;i++){
            var tableMove = document.getElementById(tableBodyData+i+":0").textContent;
            if(tableMove == document.getElementById("searchBar").value){
                highlightRow(tableBodyData+i);
                //highlightRow("A-MOVES:STANDARD:data:2");

                openSpecificTab(mainCategory,stanceCategory,subCategory);

                var anchor = document.getElementById(mainCategory+":"+stanceCategory+":"+subCategory);
                anchor.scrollIntoView();
                return;
            }
        }
        alert("unlucky :(");

        function openSpecificTab(i,s,z){

            for(var j=0;j<moveSpecialTypes.length;j++){

                if (i=="SPECIAL STANCES"){
                    for(var k=0;k<stances.length;k++){
                        var stanceID = i+":"+stances[k];

                        var el1 = document.getElementById(stanceID);
                        if(!el1.classList.contains("show")){
                            el1.classList.toggle("show");
                        }
                    }

                }

                var el = document.getElementById(i+":"+s+":"+moveSpecialTypes[j]);
                if(el == null){
                    continue;
                }
                if(!el.classList.contains("show")){
                    el.classList.toggle("show");
                }
            }
            var element = document.getElementById(i+":"+stanceCategory+":"+z+":data");


            if(!element.classList.contains("show")){
                element.classList.toggle("show");
                if(tabsOpen==0){
                    document.getElementById("frameTable").classList.toggle("on");
                }
                tabsOpen++;
            }

        };

        function findCategory(){

            var i = 0;
            while(move[i]=="["||move[i]=="]"||move[i]=="_"||move[i]=="~"||move[i].toUpperCase()=="G"||move[i]==" "||move[i]=="5"){
                i++;
                if(i>=move.length){
                    //alert(mainCategory);
                    //alert(subCategory);
                    return;
                }
            }
            var x = move.split(" ");
            if(x.length==2){
                if(x[0]=="WR"||x[0]=="WL"||x[0]=="FC"||x[0]=="BT"){
                }
                else if(stances.indexOf(x[0])>-1){
                    stanceCategory = x[0];
                    mainCategory = "SPECIAL STANCES";
                    move = x[1];
                }
                else{
                    stanceCategory = "Doesn't exist";
                    return;
                }

            }

            if(move.toUpperCase().includes("LEFT")||move.toUpperCase().includes("RIGHT")||move.toUpperCase().includes("BACK")){
                i=i+4;
                if(move.toUpperCase().includes("RIGHT")){
                    i++;
                }
                while(move[i]=="["||move[i]=="]"||move[i]=="_"||move[i]=="~"||move[i].toUpperCase()=="G"||move[i]==" "||move[i]=="5"){
                    i++;
                }
            }
            

            if(move[i].toUpperCase()=="A"||move[i].toUpperCase()=="B"||move[i].toUpperCase()=="K"){
                subCategory = "STANDARD";

                if(mainCategory !="SPECIAL STANCES"){
                    mainCategory = move[i].toUpperCase()+"-MOVES";
                }

                i++;
                if(i>=move.length){
                    //alert(mainCategory);
                    //alert(subCategory);
                    return;
                }
            }
            else if(!isNaN(parseInt(move[i]))){
                if(move[i+1]!=null && move[i+1]==move[i]){
                    subCategory = "8WAYRUN";
                    i=i+2;
                }
                else{
                    subCategory = "DIRECTIONALS";
                    i++;
                }
            }
            else if((move[i]+move[i+1]).toUpperCase()=="WR"||(move[i]+move[i+1]).toUpperCase()=="WL"||(move[i]+move[i+1]).toUpperCase()=="FC"||(move[i]+move[i+1]).toUpperCase()=="BT"){
                i = i+2;
                subCategory = "WR/WL/FC/BT";
            }
            //alert(subCategory);


            
            while(move[i]=="["||move[i]=="]"||move[i]=="_"||move[i]=="~"||move[i].toUpperCase()=="G"||move[i]==" "||!isNaN(move[i])){
                i++;
                if(i>=move.length){
                    //alert(mainCategory);
                    return;
                }
            }
            

            if(move.toUpperCase().includes("LEFT")||move.toUpperCase().includes("RIGHT")||move.toUpperCase().includes("BACK")){
                if(mainCategory !="SPECIAL STANCES"){
                    mainCategory = "THROWS";
                }

            }
            else if(subCategory=="Doesn't exist"){
                //alert(mainCategory);
                return;
            }
            else if(subCategory=="STANDARD"){
                if(move[i]=="+" && mainCategory !="SPECIAL STANCES"){
                    if(move[i+1].toUpperCase()=="G"){
                        mainCategory ="THROWS";
                    }
                    else{
                        mainCategory ="SIMULTANEOUS PRESS";
                    }
                }
            }
            else{

                if(mainCategory !="SPECIAL STANCES"){
                    if(move[i].toUpperCase()=="A"||move[i].toUpperCase()=="B"||move[i].toUpperCase()=="K"){
                        mainCategory = move[i].toUpperCase()+"-MOVES";
                        i++;
                    }

                    if(move[i]=="+"){
                        if(move[i+1].toUpperCase()=="G"){
                            mainCategory ="THROWS";
                        }
                        else{
                            mainCategory ="SIMULTANEOUS PRESS";
                        }
                    }
                }
            }
            //alert(mainCategory);

        };



        function highlightRow(caller){

            if(document.getElementsByClassName("highlight").length>0){
                var highlighted = document.getElementsByClassName("highlight")[0].id;
                highlighted = highlighted.substring(0, highlighted.length - 1);
                if(caller!=highlighted){
                    for(var i=0;i<titles.length;i++){
                        document.getElementById(highlighted+i).classList.remove("highlight");
                    }
                }
            }
            //alert(document.getElementById(caller).id);
            for(var i=0;i<titles.length;i++){
                document.getElementById(caller+":"+i).classList.toggle("highlight");
            }
        };
    },

    openSub: function(){
        for(var i=0;i<moveSpecialTypes.length;i++){
            var caller = this.id;
            if(!caller.includes("SPECIAL STANCES")){
                var receiver = caller.replace('title',"0:"+moveSpecialTypes[i]);
            }
            else{
                var receiver = caller.replace('title',moveSpecialTypes[i]);
            }
            if(document.getElementById(receiver) == null){
                continue;
            }
            document.getElementById(receiver).classList.toggle("show");
        }
    },

    openStance: function(){
        for(var i=0;i<stances.length;i++){
            var caller = this.id;
            var receiver = caller.replace('title',stances[i]);
            if(document.getElementById(receiver) == null){
                continue;
            }
            document.getElementById(receiver).classList.toggle("show");
        }
    },



    openData: function(){
        var caller = this.id;
        var receiver = caller.replace('title','data');
        var element = document.getElementById(receiver);
        element.classList.toggle("show");

        if(element.classList.contains("show")){
            if(tabsOpen==0){
                document.getElementById("frameTable").classList.toggle("on");
            }
            tabsOpen++;
        }
        else{
            tabsOpen--;
            if(tabsOpen==0){
                document.getElementById("frameTable").classList.toggle("on");
            }
        }
    },

    filters:null,

    addTypes: function(filters){
        this.filters=filters;
        var frameTable = document.getElementById("frameTable");
        while (frameTable.firstChild) {
            frameTable.removeChild(frameTable.firstChild);
        }
        for(var i=0;i<moveTypes.length;i++){

            if(character[moveTypes[i]]==null){
                continue;
            }



            if(this.filters!=null){

                if(this.filters[0][i]==""&&this.filters[0][this.filters[0].length-1]!="Any"){
                   continue;
                }
                //a,b,k,sm,ss,t,Any
                //0,1,2,3 ,4 ,5
            }

            var category = document.createElement("div");
            category.classList.add("category");
            category.id=moveTypes[i];

            var title = document.createElement("div");
            title.classList.add("title");
            title.classList.add("red");
            title.id=moveTypes[i]+":title";

            var p = document.createElement("p");
            var text = document.createTextNode(moveTypes[i]);
            p.appendChild(text);
            title.appendChild(p);

            category.appendChild(title);

            if(i==4 && stances[0]!="0"){

                for (var k=0;k<stances.length;k++){

                    if(this.filters!=null){

                        if(this.filters[1][this.filters[1].length-1]!="Any"&&this.filters[1][k]==""){
                            continue;
                        }
                    }

                    var stanceCategory = document.createElement("div");
                    stanceCategory.classList.add("category");
                    stanceCategory.classList.add("hidden");
                    stanceCategory.id=moveTypes[i]+":"+stances[k];

                    var stanceTitle = document.createElement("div");
                    stanceTitle.classList.add("title");
                    stanceTitle.classList.add("blue");
                    stanceTitle.id=moveTypes[i]+":"+stances[k]+":title";

                    var stanceP = document.createElement("p");
                    var stanceText = document.createTextNode(stances[k]);
                    stanceP.appendChild(stanceText);
                    stanceTitle.appendChild(stanceP);


                    stanceCategory.appendChild(stanceTitle);


                    for(var j=0;j<moveSpecialTypes.length;j++){
                        if(character[moveTypes[i]][stances[k]][moveSpecialTypes[j]]==null){
                            continue;
                        }


                        var child = this.addSpecialTypes(i,j,moveTypes[i]+":"+stances[k]+":"+moveSpecialTypes[j], stances[k]);
                        if(child!=0){
                            stanceCategory.appendChild(child);
                        }
                    }
                    if(stanceCategory.childElementCount>1){
                        stanceTitle.addEventListener("click", this.openSub);
                        category.appendChild(stanceCategory);
                    }
                }

                if(category.childElementCount>1){
                    title.addEventListener("click", this.openStance);
                    frameTable.appendChild(category);
                }


            }
            else{
                var help=0;
                if(stances[0]!="0"){
                    help=1;
                }
                for(var j=0;j<moveSpecialTypes.length;j++){
                    if(character[moveTypes[i]][moveSpecialTypes[j]]==null){
                        continue;
                    }
                    if(this.filters!=null){

                        if(this.filters[1+help][this.filters[1+help].length-1]!="Any"&&this.filters[1+help][j]==""){
                            continue;
                        }
                    }

                    var child = this.addSpecialTypes(i,j,moveTypes[i]+":0:"+moveSpecialTypes[j],0);
                    if(child!=0){
                        category.appendChild(child);
                    }

                }
                if(category.childElementCount>1){
                    title.addEventListener("click", this.openSub);
                    frameTable.appendChild(category);
                }
            }

        }

        if(frameTable.childElementCount==0){
            alert("FILTERS");
        }
    },

    addSpecialTypes: function(type,specialType,id, stance){

        var category = document.createElement("div");
        category.classList.add("category");
        category.classList.add("hidden");
        category.id=id;

        var title = document.createElement("div");
        title.classList.add("title");
        title.classList.add("smallSize");
        title.classList.add("green");
        title.id=id+":title";

        var p = document.createElement("p");
        var text = document.createTextNode(moveSpecialTypes[specialType]);
        p.appendChild(text);
        title.appendChild(p);

        category.appendChild(title);

        var data = document.createElement("div");
        data.classList.add("data");
        data.classList.add("hidden");
        data.id=id+":data";

        var child = this.addMoves(data.id,type,specialType, stance);
        if(child!=0){
            data.appendChild(child);
            title.addEventListener("click", this.openData);
            category.appendChild(data);
            return category;
        }
        return 0;
    },

    addMoves: function(dataID,type,specialType,stance){
        var container =  document.createElement("div");
        container.classList.add("smallSize");
        var table = document.createElement("table");
        table.id=dataID.replace("data","list");
        //alert(table.id);
        var thead = document.createElement("thead");
        thead.appendChild(this.createTitleRow(dataID));
        table.appendChild(thead);

        var tbody = document.createElement("tbody");
        tbody.id=dataID.replace("data","main");
        var color = 0;

        if(stance ==0){
            for(var i=0;i<Object.keys(character[moveTypes[type]][moveSpecialTypes[specialType]]).length;i++){
                if(this.forceFilter(type,stance,specialType,i)){
                    tbody = this.createDataRow(tbody,i,dataID,type,specialType,color,0);
                    color++;
                }
            }
        }

        else{
            for(var i=0;i<Object.keys(character[moveTypes[type]][stance][moveSpecialTypes[specialType]]).length;i++){
                if(this.forceFilter(type,stance,specialType,i)){
                    tbody = this.createDataRow(tbody,i,dataID,type,specialType,color,stance);
                    color++;
                }
            }

        }



        if(color==0){
            return 0;
        }

        table.appendChild(tbody);

        container.appendChild(table);
        return container;
    },

    forceFilter: function(type,stance,specialType,row){
        if(this.filters!=null){
            //levels
            var help =0;
            if(stances[0]!="0"){
                help=1;
            }
            var level;
            if (type==4 && stances[0]!="0"){
                level = character[moveTypes[type]][stance][moveSpecialTypes[specialType]][row][titles[1]];
            }
            else{
                level = character[moveTypes[type]][moveSpecialTypes[specialType]][row][titles[1]];
            }

            //alert("l: "+level);
            //alert("l0: "+level[0]);
            //alert("f2: "+this.filters[2]);
            if(this.filters[2+help][this.filters[2+help].length-1]!="Any"&&this.filters[2+help]!=""){
                if(!this.filters[2+help].includes(level)&&!this.filters[2+help].includes(level[0])){
                    return false;
                }
            }

            //impact
            var impact;
            if (type==4 && stances[0]!="0"){
                impact =  parseInt(character[moveTypes[type]][stance][moveSpecialTypes[specialType]][row][titles[3]]);
            }
            else{
                impact =  parseInt(character[moveTypes[type]][moveSpecialTypes[specialType]][row][titles[3]]);
            }

            if(this.filters[3+help][this.filters[3+help].length-1]!="Any"&&this.filters[3+help]!=""){
                //faster than
                if(this.filters[3+help][0]=="Faster than"){

                    if(isNaN(this.filters[3+help][1])||impact>=this.filters[3+help][1]){
                        return false;
                    }
                }
                else if(this.filters[3+help][1]=="Slower than"){
                    if(isNaN(this.filters[3+help][2])||impact<=this.filters[3+help][2]){
                        return false;
                    }
                }
                else if(this.filters[3+help][2]=="At"){
                    if(isNaN(this.filters[3+help][3])||impact!=this.filters[3+help][3]){
                        return false;
                    }

                }

            }

            var block;
            if (type==4 && stances[0]!="0"){
                block =  parseInt(character[moveTypes[type]][stance][moveSpecialTypes[specialType]][row][titles[4]]);
            }
            else{
                block =  parseInt(character[moveTypes[type]][moveSpecialTypes[specialType]][row][titles[4]]);
            }

            if(this.filters[4+help][this.filters[4+help].length-1]!="Any"&&this.filters[4+help]!=""){
                //faster than
                if(this.filters[4+help][0]=="Safer than"){
                    if(isNaN(this.filters[4+help][1])||block<=this.filters[4+help][1]){
                        return false;
                    }

                }
                else if(this.filters[4+help][1]=="Unsafer than"){
                    if(isNaN(this.filters[4+help][2])||block>=this.filters[4+help][2]){
                        return false;
                    }

                }
                else if(this.filters[4+help][2]=="At"){
                    /*if(isNaN(this.filters[4][3])||block!=this.filters[4][3]){
                        return false;
                    }*/
                    if(isNaN(block)){

                        if (type==4 && stances[0]!="0"){
                            block = character[moveTypes[type]][stance][moveSpecialTypes[specialType]][row][titles[4]];
                        }
                        else{
                            block = character[moveTypes[type]][moveSpecialTypes[specialType]][row][titles[4]];
                        }
                    }
                    if(block!=this.filters[4+help][3]){
                        return false;
                    }
                }

            }

            var hit;
            if (type==4 && stances[0]!="0"){
                hit =  parseInt(character[moveTypes[type]][stance][moveSpecialTypes[specialType]][row][titles[5]]);
            }
            else{
                hit =  parseInt(character[moveTypes[type]][moveSpecialTypes[specialType]][row][titles[5]]);
            }

            if(this.filters[5+help][this.filters[5+help].length-1]!="Any"&&this.filters[5+help]!=""){
                //faster than
                if(this.filters[5+help][0]=="More rewarding than"){

                    if(isNaN(hit)||isNaN(this.filters[5+help][1])||hit<=this.filters[5+help][1]){
                        return false;
                    }

                }
                else if(this.filters[5+help][1]=="Less rewarding than"){
                    if(isNaN(hit)||isNaN(this.filters[5+help][2])||hit>=this.filters[5+help][2]){
                        return false;
                    }

                }
                else if(this.filters[5+help][2]=="At"){
                    if(isNaN(hit)){

                        if (type==4 && stances[0]!="0"){
                            hit = character[moveTypes[type]][stance][moveSpecialTypes[specialType]][row][titles[5]];
                        }
                        else{
                            hit = character[moveTypes[type]][moveSpecialTypes[specialType]][row][titles[5]];
                        }
                    }
                    if(hit!=this.filters[5+help][3]){
                        return false;
                    }

                }
            }

            var chit;
            if (type==4 && stances[0]!="0"){
                chit = parseInt(character[moveTypes[type]][stance][moveSpecialTypes[specialType]][row][titles[6]]);
            }
            else{
                chit =  parseInt(character[moveTypes[type]][moveSpecialTypes[specialType]][row][titles[6]]);
            }

            if(this.filters[6+help][this.filters[6+help].length-1]!="Any"&&this.filters[6+help]!=""){
                //faster than
                if(this.filters[6+help][0]=="More rewarding than"){
                    if(isNaN(chit)||isNaN(this.filters[6+help][1])||chit<=this.filters[6+help][1]){
                        return false;
                    }
                }
                else if(this.filters[6+help][1]=="Less rewarding than"){
                    if(isNaN(chit)||isNaN(this.filters[6+help][2])||chit>=this.filters[6+help][2]){
                        return false;
                    }
                }
                else if(this.filters[6+help][2]=="At"){
                    if(isNaN(chit)){

                        if (type==4 && stances[0]!="0"){
                            chit = character[moveTypes[type]][stance][moveSpecialTypes[specialType]][row][titles[6]];
                        }
                        else{
                            chit = character[moveTypes[type]][moveSpecialTypes[specialType]][row][titles[6]];
                        }
                    }
                    if(chit!=this.filters[6+help][3]){
                        return false;
                    }
                }
            }

            if(this.filters[7+help][this.filters[7+help].length-1]!="Any"&&this.filters[7+help]!=""){

                var notes;
                if (type==4 && stances[0]!="0"){
                    notes = character[moveTypes[type]][stance][moveSpecialTypes[specialType]][row]["Notes"];
                }
                else{
                    notes = character[moveTypes[type]][moveSpecialTypes[specialType]][row]["Notes"];
                }
                //alert("Notes: "+notes);
                //if(notes==""){
                  //  return false;
                //}

                var helper = [];
                var chosenFilters = [];
                for(var i =0;i<this.filters[7+help].length-1;i++){
                    if(this.filters[7+help][i]!=""){
                        chosenFilters.push(this.filters[7+help][i]);
                        helper.push(0);
                    }
                }
                var indicators = notes.split(",");
                var notations=[];

                for (var i=0;i<indicators.length;i++){
                    var properties = indicators[i].split(":");
                    if(properties.length==2){
                        notations.push(properties[0]);
                    }
                }
                //if(notations.length==0){
                //    return false;
                //}

                for(var i=0;i<notations.length;i++){
                    for(var j=0;j<chosenFilters.length;j++){
                        if(notations[i]==chosenFilters[j]){
                            helper[j]=1;
                        }
                    }
                }
                //alert("Attack: "+Assassin[moveTypes[type]][moveSpecialTypes[specialType]][row]["Attack"]);
                //alert(chosenFilters);
                //alert(chosenFilters.indexOf("SC"));
                //alert(Assassin[moveTypes[type]][moveSpecialTypes[specialType]][row]["SC"]);
                if (type==4 && stances[0]!="0"){
                    if(chosenFilters.indexOf("SC")>-1 && character[moveTypes[type]][stance][moveSpecialTypes[specialType]][row]["SC"]!=null){
                        helper[chosenFilters.indexOf("SC")]=1;
                    }
                }
                else{
                    if(chosenFilters.indexOf("SC")>-1 && character[moveTypes[type]][moveSpecialTypes[specialType]][row]["SC"]!=null){
                        helper[chosenFilters.indexOf("SC")]=1;
                    }
                }
                if(helper.includes(0)){
                    return false;
                }
            }
        }
        return true;
    },

    createTitleRow: function(dataID){
        var tr = document.createElement("tr");
        tr.classList.add("letterSize");
        tr.id=dataID+":titles";
        for(var i=0;i<titles.length;i++){
            var td = document.createElement("td");
            td.classList.add("top");
            var text = document.createTextNode(titles[i]);
            if(i==titles.length-1){
                text = document.createTextNode("Notes");
            }
            td.appendChild(text);
            td.id=dataID+":"+titles[i];

            td.addEventListener("click", this.sortBy);

            tr.appendChild(td);
        }

        return tr;
    },

    sortBy: function(){
        var sort = this.id;
        var rankByTitle = sort.split(":")[4];
        var titleIndex = titles.indexOf(rankByTitle);
        var sortType = 0;
        var rowId = sort.replace(rankByTitle, "");
        var body = rowId.replace("data:", "main");
        var lines = document.getElementById(body).children.length;

        if(titleIndex<2){
            sortById();
            return;
        }

        checkIfSorted();
        var color = 0;
        for(var i=0;i<lines;i++){
            document.getElementById(body).childNodes[i].classList.remove("tr0","tr1");
            document.getElementById(body).childNodes[i].classList.add("tr"+color%2);
            color++;
        }

        function checkIfSorted(){
            if((!checkIfAscending() && !checkIfDescending())||(!checkIfAscending() && checkIfDescending())){
                sortType = 0;
                quicksort(0,lines-1);
            }
            else if(checkIfAscending() && !checkIfDescending()){
                sortType = 1;
                quicksort(0,lines-1);
            }
        };

        function checkIfAscending(){
            for (var i=0;i<lines-1;i++){
                var left = getValue(document.getElementById(body).childNodes[i].childNodes[titleIndex].textContent);
                var right = getValue(document.getElementById(body).childNodes[i+1].childNodes[titleIndex].textContent);
                if(left>right){
                    return false;
                }
            }
            return true;
        };

        function checkIfDescending(){
            for (var i=0;i<lines-1;i++){
                var left = getValue(document.getElementById(body).childNodes[i].childNodes[titleIndex].textContent);
                var right = getValue(document.getElementById(body).childNodes[i+1].childNodes[titleIndex].textContent);
                if(left<right){
                    return false;
                }
            }
            return true;
        };


        function quicksort(left,right){
            if(left<right){
                var p = partition(left,right);
                quicksort(left,p -1);
                quicksort(p +1,right);
            }
        };

        function getValue(examine){
            //var value = document.getElementById(body).childNodes[right].childNodes[titleIndex].textContent;
            var value;
            if(examine == "KND"){
                value = 100;
            }
            else if(examine == "STUN"){
                value = 101;
            }
            else if(examine == "LNC"){
                value = 102;
            }
            else if(examine == "SLNC"){
                value = 103;
            }
            else if(examine == "UB"){
                value = 104;
            }
            else if(examine == "-")
            {
                value = -100;
            }
            //else if(examine.indexOf(",")>-1)//old SC column
            else if(examine == '\u2714')
            {
                value = 105;
            }
            else
            {
                value = parseInt(examine);
            }
            return value;
        };
        

        function partition(left,right){
            
            //var pivot = parseInt(document.getElementById(body).childNodes[right].childNodes[titleIndex].textContent);
            var pivot = getValue(document.getElementById(body).childNodes[right].childNodes[titleIndex].textContent);
            var i = left - 1;
            for(var j=left;j<right;j++){
                if(getSort(j,pivot)){
                    i = i+1;
                    swapLines(i,j);
                }
            }
            i = i+1;
            swapLines(i,right);
            return i;
        };

        function getSort(j,pivot){
            if(sortType==0){
                return getValue(document.getElementById(body).childNodes[j].childNodes[titleIndex].textContent)<pivot;
            }
            else{
                return getValue(document.getElementById(body).childNodes[j].childNodes[titleIndex].textContent)>=pivot;
            }
            return false;
        };

        function swapLines(a,b){
            var lineA = document.getElementById(body).childNodes[a];
            var lineB = document.getElementById(body).childNodes[b];
            document.getElementById(body).removeChild(document.getElementById(body).childNodes[a]);    
            document.getElementById(body).insertBefore(lineB, document.getElementById(body).childNodes[a]);
            document.getElementById(body).insertBefore(lineA, document.getElementById(body).childNodes[b]);
        };

        function sortById(){
            var color = 0;
            for(var i=0;i<lines;i++){
                var correct = document.getElementById(rowId+i);
                correct.classList.remove("tr0","tr1");
                correct.classList.add("tr"+color%2);
                //var correctIndex = correct.id.split(":")[correct.id.split(":").length-1];
                var current = document.getElementById(body).childNodes[i];
                var currentIndex = current.id.split(":")[correct.id.split(":").length-1]

                document.getElementById(body).removeChild(document.getElementById(body).childNodes[i]);    
                document.getElementById(body).insertBefore(correct, document.getElementById(body).childNodes[i]);
                document.getElementById(body).insertBefore(current, document.getElementById(body).childNodes[currentIndex]);
                color++;
            }
        };

    },

    createDataRow: function(tbody,i,dataID,type,specialType,color,stance){
        var tr = document.createElement("tr");
        tr.classList.add("letterSize");
        tr.classList.add("tr"+color%2);
        tr.id=dataID+":"+i;

        for(var j=0;j<titles.length;j++){
            var td = document.createElement("td");
            if(stance ==0){
                var text = character[moveTypes[type]][moveSpecialTypes[specialType]][i][titles[j]];
            }
            else{
                var text = character[moveTypes[type]][stance][moveSpecialTypes[specialType]][i][titles[j]];

            }
            if(text == null){
                text = "-";
            }
            //alert(Assassin[moveTypes[type]][moveSpecialTypes[specialType]][titles[j]]);
            if(j==2){
                text = text+'';
                var array = text.split(",");
                text=0;
                for(var z=0;z<array.length;z++){
                    text = text+parseInt(array[z]);
                }
            }
            if(j==titles.length-1){//notes
                if(text == "-"){
                    if(stance ==0){
                        var text = character[moveTypes[type]][moveSpecialTypes[specialType]][i]["Notes"];
                    }
                    else{
                        var text = character[moveTypes[type]][stance][moveSpecialTypes[specialType]][i]["Notes"];
                    }
                    if(text == null || text == ""){
                        text = "-";
                    }
                    else{
                        text = '\u2714';
                    }
                }
                else{
                    text = '\u2714';
                }
                //text = text.split(":")[0];
            }
            text = document.createTextNode(text);
            td.appendChild(text);
            td.classList.add("down");
            td.id=dataID+":"+i+":"+j;

            tr.appendChild(td);
            tr.addEventListener("click", this.openNoteWindow);
            tbody.appendChild(tr);
        }

        return tbody;
    },

    openNoteWindow: function(){
        panel.addWindow(this.id);
    },

};

init.initialize();

