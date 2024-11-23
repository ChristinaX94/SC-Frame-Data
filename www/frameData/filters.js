var categories = ["TYPE:","SPECIAL STANCES:","SPECIAL TYPE:","HIT LEVEL:","IMPACT:","ON BLOCK:","ON HIT:","ON COUNTER HIT:",
                    "SPECIAL PROPERTIES:"];

var types = ["A Attacks","B Attacks","K Attacks","Simultaneous Press","Special Stances","Throws","Any"];
var specialTypes = ["Standard","Directionals","8WayRun","WR/WL/FC/BT","Any"];
var hitLevel = ["High","Mid","Special Mid","Low","Any"];
var impact = ["Faster than","Slower than","At","Any"];
var block = ["Safer than", "Unsafer than","At","Any"];
var hit = ["More rewarding than","Less rewarding than","At","Any"];
var counterHit = ["More rewarding than","Less rewarding than","At","Any"];
/*var specialProperties = ["Tech Crouch","Tech Jump","Super Launcher","Soul Charge","Full Crouch","Guard Break",
                    "Tech Step","Forces Crouch","Forces BT","KND","AGI","UB","Launcher","Natural Combo",
                    "Natural Counter Combo","Any"];*/

var specialProperties = ["TC","TJ","SC","FC","GB","TS","BT","AGI","UB","NC","NCC",
                        "~8WR","OBTH","OBTC","iBT","OCB","Any"];
var categoriesVar;

var spStances = ["0"];


var specialHit = ["KND","STUN","LNC","SLNC"];
var filterCollection;

var radio = null;
var radioGroup = null;





var filters = {
    element: "",


    selectChar: function(){
        //var character= CHARACTER;
        if(character["SPECIAL STANCES"]!=null){
            spStances = Object.keys(character["SPECIAL STANCES"]);
            spStances.push("Any");
            categoriesVar = [types,spStances,specialTypes,hitLevel,impact,block,hit,counterHit,specialProperties];
        }
        else{
            categories.splice(categories.indexOf("SPECIAL STANCES:"),1);
            categoriesVar = [types,specialTypes,hitLevel,impact,block,hit,counterHit,specialProperties];
            types.splice(types.indexOf("Special Stances"),1);
        }
    },

    addWindow: function(){
        tfilters = 1;
        element = document.getElementById("filters");
        element.style.width = "100%";
        element.style.paddingLeft = "0px";
        document.getElementById("app").classList.add("freezeScreen");
    },

    createFiltersWindow: function(){
        element = document.getElementById("filters");
        this.createTopHeader();
        this.createTable();
        this.applyButton();
    },

    applyButton: function(){
        var h3 = document.createElement("button");
        h3.type="button";
        h3.id = "applyFilters";
        h3.classList.add("applyNotes");
        var x = document.createTextNode("Apply Filters");
        h3.appendChild(x);
        h3.addEventListener("click",this.applyFilters);
        element.appendChild(h3);
    },

    createTopHeader: function(){
        var h3 = document.createElement("button");
        h3.type="button";
        h3.id = "closeFilters";
        h3.classList.add("closeNotes");
        var x = document.createTextNode("X");
        h3.appendChild(x);
        h3.addEventListener("click",this.closeFilters);
        element.appendChild(h3);

        var h2 = document.createElement("h2");
        var title = document.createTextNode("FILTERS");
        h2.appendChild(title);
        h2.classList.add("new-h2");
        element.appendChild(h2);

        var h3 = document.createElement("button");
        h3.type="button";
        h3.id = "clearFilters";
        h3.classList.add("clearNotes");
        var x = document.createTextNode("Clear all");
        h3.appendChild(x);
        h3.addEventListener("click",this.clearFilters);
        element.appendChild(h3);

    },

    createTable: function(){
        var table = document.createElement("table");
        table.classList.add("new-table-style");
        var help=0;
        if(categories.includes("SPECIAL STANCES:")){
            help=1;
        }
        for(var i =0;i<3+help;i++){
            /*if(i==1 && spStances[0]=="0"){
                continue;
            }*/
            var tr = document.createElement("tr");
            var th = document.createElement("th");
            th.rowSpan = categoriesVar[i].length;
            th.classList.add("row-title");
            th.classList.add("purple-border-right");
            var title = document.createTextNode(categories[i]);
            th.appendChild(title);
            tr.appendChild(th);

            tr.appendChild(this.createTD(i,0,2,"checkbox"));
            table.appendChild(tr);

            for(var j=1;j<categoriesVar[i].length;j++){
                var trRest = document.createElement("tr");
                trRest.classList.add("purple-border-top");
                trRest.appendChild(this.createTD(i,j,2,"checkbox"));
                table.appendChild(trRest);
            }
            table.appendChild(this.createSpace());
        }

        for(var i=3+help;i<categories.length-1;i++){
            var tr = document.createElement("tr");
            var th = document.createElement("th");
            th.rowSpan = categoriesVar[i].length;
            th.classList.add("row-title");
            th.classList.add("purple-border-right");
            var title = document.createTextNode(categories[i]);
            th.appendChild(title);
            tr.appendChild(th);

            tr.appendChild(this.createTD(i,0,1,"radio"));

            tr.appendChild(this.createSpecialTD(categoriesVar[i].length,categories[i]));

            table.appendChild(tr);

            for(var j=1;j<categoriesVar[i].length;j++){
                var trRest = document.createElement("tr");
                trRest.classList.add("purple-border-top");
                trRest.appendChild(this.createTD(i,j,1,"radio"));
                table.appendChild(trRest);
            }

            table.appendChild(this.createSpace());
        }


        var i = categoriesVar.length-1;
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.rowSpan = categoriesVar[i].length;
        th.classList.add("row-title");
        th.classList.add("purple-border-right");
        var title = document.createTextNode(categories[i]);
        th.appendChild(title);
        tr.appendChild(th);

        tr.appendChild(this.createTD(i,0,1,"checkbox"));

        tr.appendChild(this.createTD(i,1,1,"checkbox"));

        table.appendChild(tr);

        var len = categoriesVar[i].length;
        if(categoriesVar[i].length%2==1){
            len = len-1;
        }
        for(var j=2;j<len;j+=2){
            var trRest = document.createElement("tr");
            trRest.classList.add("purple-border");
            trRest.appendChild(this.createTD(i,j,1,"checkbox"));
            trRest.appendChild(this.createTD(i,j+1,1,"checkbox"));
            table.appendChild(trRest);
        }
        if(categoriesVar[i].length%2==1){
            var trRest = document.createElement("tr");
            trRest.classList.add("purple-border");
            trRest.appendChild(this.createTD(i,categoriesVar[i].length-1,2,"checkbox"));
            trRest.style = "text-align:center;";
            table.appendChild(trRest);
        }

        element.appendChild(table);

        var br = document.createElement("br");
        element.appendChild(br);

    },

    createSpecialTD: function(rows,id){
        var td = document.createElement("td");
        td.rowSpan = rows;
        td.classList.add("row-title");
        td.classList.add("purple-border-left");

        var input= document.createElement("input");
        input.type = "search";
        input.name = id+"Bar";

        input.placeholder = "Frames";
        input.style = "width:65px;";

        td.appendChild(input);
        return td;
    },



    createTD: function(i,j,columns,type){
        var td = document.createElement("td");
        td.colSpan = columns;
        td.classList.add("purple-border-right");
        var input = document.createElement("input");
        input.type = type;
        input.name = categories[i];
        input.value = categoriesVar[i][j];
        input.classList.add("red-text");

        /*input.onclick = function() {

            alert("prev: "+ radioGroup+" "+radio + " === now: "+ input.name+" "+input.value);

            if(radio == input.value && radioGroup == input.name){
                this.checked = false;
                radio = null;
                radioGroup = null;
            }

            else if(radio != input.value){
                this.checked = true;
                radio = input.value;
                radioGroup = input.name;
            }
        }*/


        var text = document.createTextNode(categoriesVar[i][j]);
        td.appendChild(input);
        td.appendChild(text);
        return td;
    },

    createSpace: function(){
        var trSpace = document.createElement("tr");
        var thSpace = document.createElement("th");
        thSpace.classList.add("purple");
        var tdSpace1 = document.createElement("td");
        tdSpace1.classList.add("purple");
        var tdSpace2 = document.createElement("td");
        tdSpace2.classList.add("purple");
        trSpace.appendChild(thSpace);
        trSpace.appendChild(tdSpace1);
        trSpace.appendChild(tdSpace2);
        return trSpace;
    },



    applyFilters: function(){
        this.filterCollection=[];
        var help=0;
        if(categories.includes("SPECIAL STANCES:")){
            help=1;

        }
        for(var i=0;i<categories.length;i++){

            var fields = document.getElementsByName(categories[i]);
            var innerFields=[];
            var x=false;
            for(var j=0;j<fields.length;j++){
                if(fields[j].checked){
                    if(i!=2+help){
                        innerFields.push(fields[j].value);
                    }

                    //alert("field "+i+", "+j+" : "+fields[j].value);
                    if(i==2+help){

                        var textBar = document.getElementsByName(categories[i])[j].value[0];
                        if(textBar=="S"){
                            textBar="sM";//+document.getElementsByName(categories[i])[j].value.split(/\s+/)[1][0];
                        }
                        else if(textBar=="A"){
                            textBar="Any";
                        }
                        //alert("t: "+textBar);
                        innerFields.push(textBar);

                    }
                    if(i>=3+help && i<=6+help){
                        var textBar = document.getElementsByName(categories[i]+"Bar")[0].value;

                        if(isNaN(parseInt(textBar))){
                            if((i==5+help||i==6+help) && specialHit.includes(textBar.toUpperCase())){
                                innerFields.push(textBar.toUpperCase());
                            }
                            else if(i==4+help && textBar.toUpperCase()=="UB"){
                                innerFields.push("UB");
                            }
                            else{
                                innerFields.push(parseInt(textBar));
                            }
                        }
                        else{
                            innerFields.push(parseInt(textBar));
                        }

                    }
                    x=true;
                }
                else{

                    if(x==false&&j==fields.length-1){
                        innerFields.push("Any");
                    }
                    else{
                        innerFields.push("");
                    }

                }
            }
            //alert(innerFields);
            this.filterCollection.push(innerFields);
        }
        for(var i =0;i<categories.length;i++){
            for(var j=0;j<this.filterCollection[i].length;j++){
                //alert(i+", "+j+" : "+this.filterCollection[i]);
            }
        }
        init.addTypes(this.filterCollection);

        document.getElementById("filters").style.width = "0";
        document.getElementById("filters").style.paddingTop = "0";
        document.getElementById("app").classList.remove("freezeScreen");
        tfilters = 0;
    },

    clearFilters: function(){
        for(var i=0;i<categories.length;i++){
            var fields = document.getElementsByName(categories[i]);
            for(var j=0;j<fields.length;j++){
                if(fields[j].checked){
                    fields[j].checked = false;
                }
            }
        }
    },

    closeFilters: function(){
        for(var i=0;i<categories.length;i++){
            var fields = document.getElementsByName(categories[i]);
            for(var j=0;j<fields.length;j++){
                if(fields[j].checked){
                    fields[j].checked = false;
                }
            }
        }
        document.getElementById("filters").style.width = "0";
        document.getElementById("filters").style.paddingTop = "0";
        document.getElementById("app").classList.remove("freezeScreen");
        tfilters = 0;
    }


};