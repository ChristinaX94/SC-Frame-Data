var panel = {
    caller:"",
    notes: document.getElementById("notes"),

    addWindow: function(id){
        tpanel = 1;
        var x = id.split(":");
        if(stances[0]!="0" && x[0]=="SPECIAL STANCES"){
            caller = character[x[0]][x[1]][x[2]][x[4]];
        }
        else{
            caller = character[x[0]][x[2]][x[4]];
        }


        //caller = id;
        this.createTopHeader();
        this.createNotesWindow();
        notes.style.height = "100%";
        notes.style.paddingTop = "10px";
        document.getElementById("app").classList.add("freezeScreen");
    },

    createTopHeader: function(){
        var h3 = document.createElement("button");
        h3.type="button";
        h3.id = "closeNotes";
        h3.classList.add("closeNotes");
        var x = document.createTextNode("X");
        h3.appendChild(x);
        h3.addEventListener("click",this.closeNotes);
        notes.appendChild(h3);

        var h2 = document.createElement("h2");
        var ex = document.createTextNode("NOTES");
        h2.appendChild(ex);
        notes.appendChild(h2);
    },


    createNotesWindow:function()
    {
        this.createHeader(caller[titles[0]]);
        this.createSummary();
        this.createSpace();

        this.createProperties();

        if(caller[titles[titles.length-1]]!=null){
            this.createHeader("SCProperties");
            this.createSCProperties();
            this.createSpace();
        }

        this.createExtraNotes();
    },

    createSpace: function(){
        for(var i=0;i<2;i++){
            var br = document.createElement("br");
            notes.appendChild(br);
        }
    },

    createHeader: function(title){
        var header = document.createElement("div");
        header.classList.add("widowHeader");
        var text = document.createTextNode(title);
        header.appendChild(text);
        notes.appendChild(header);
    },

    createTD: function(text,classList){
        var td = document.createElement("td");
        for(var i=0;i<classList.length;i++){
            td.classList.add(classList[i]);
        }
        var text = document.createTextNode(text);
        td.appendChild(text);
        return td;
    },

    createSummary: function(){
        var table = document.createElement("table");
        table.classList.add("summaryTable");

        for(var i=0;i<2;i++){
            var trheader = document.createElement("tr");
            trheader.classList.add("red");
            var tr = document.createElement("tr");
            for(var j=0;j<3;j++){
                trheader.appendChild(this.createTD(titles[(i*3)+(j+1)],["trNew"]));
                var value = caller[titles[((i*3)+(j+1))]];
                if(value == null){
                    value = "-";
                }
                tr.appendChild(this.createTD(value,["trNew"]));
            }
            table.appendChild(trheader);
            table.appendChild(tr);
        }
        notes.appendChild(table);
    },

    createProperties: function(){
        var available = false;
        var table = document.createElement("table");
        table.classList.add("summaryTable");
        var properties = caller["Notes"];
        properties = properties.split(",");//notes
        for(var i =0;i<properties.length;i++){
            var value = properties[i].split(":");
            if(value.length>1){
                var tr = document.createElement("tr");
                tr.appendChild(this.createTD(value[0],["trNew","blue"]));
                tr.appendChild(this.createTD(value[1],["trNew2"]));
                table.appendChild(tr);
                available = true;
            }
        }
        if(available==true){
            this.createHeader("Properties");
            notes.appendChild(table);
            this.createSpace();
        }
    },

    createSCProperties: function() {
        var table = document.createElement("table");
        table.classList.add("summaryTable");

        var tr = document.createElement("tr");
        tr.appendChild(this.createTD("LVL1",["brown","trNew"]));
        tr.appendChild(this.createTD("LVL2",["green","trNew"]));
        tr.appendChild(this.createTD("LVL3",["blue","trNew"]));

        table.appendChild(tr);

        var sc = caller["SC"].split(":");

        for (var i=0;i<2;i++){
            var level = sc[i].split(",");
            var trHeader = document.createElement("tr");
            trHeader.classList.add("red");
            trHeader.appendChild(this.createTD("",[]));
            if(i==0){
                trHeader.appendChild(this.createTD("Properties",[]));
            }
            else{
                trHeader.appendChild(this.createTD("Block Advantage",[]));
            }
            trHeader.appendChild(this.createTD("",[]));

            table.appendChild(trHeader);

            var tr = document.createElement("tr");
            tr.appendChild(this.createTD(level[0],["trNew","orangeLight"]));
            tr.appendChild(this.createTD(level[1],["trNew","greenLight"]));
            tr.appendChild(this.createTD(level[2],["trNew","blueLight"]));

            table.appendChild(tr);
        }
        notes.appendChild(table);
    },

    createExtraNotes: function(){
        var available = false;
        var table = document.createElement("table");
        table.classList.add("summaryTable");

        var properties = caller["Notes"];
        properties = properties.split(",");//notes
        for(var i =0;i<properties.length;i++){
            var value = properties[i].split(":");
            if(value.length==1 && value!=""){
                var tr = document.createElement("tr");
                tr.appendChild(this.createTD(value,["trNew2"]));
                table.appendChild(tr);
                available = true;
            }
        }
        if(available==true){
            this.createHeader("Extra Notes");
            notes.appendChild(table);
            this.createSpace();
        }
    },


    closeNotes: function(){
        document.getElementById("notes").style.height = "0";
        document.getElementById("notes").style.paddingTop = "0";
        document.getElementById("app").classList.remove("freezeScreen");
        var notes = document.getElementById("notes");
        while (notes.firstChild) {
            notes.removeChild(notes.firstChild);
        }
        tpanel = 0;
    },

};