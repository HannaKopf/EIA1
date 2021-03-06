declare var Artyom: any;

window.addEventListener("load", function () {
    
    //Variable Liste der Aufgaben
    var liste: HTMLUListElement = document.getElementById("aufgaben");
    
    //Zähler für Aufgaben
    var alle: number = 0;
    var offen: number = 0;
    var erledigt: number = 0;

    //Eingabe als Text für neue Aufgabe verwenden
    var textAufgabe: string = (<HTMLInputElement>document.querySelector("#input")).value;
    
    // eine neue Aufgabe hinzufügen
    function hinzufuegenAufgabe(textAufgabe: string): void {
        // Wenn nichts eingegeben wird Aufforderung 
        if (!document.getElementById("input").value) {
            alert("Bitte Aufgabe eintragen");
        }
        else {
            //neue Aufgabe als Listenelement erstellen
            var neueAufgabe: HTMLLIElement = document.createElement("li");

            //Eingabe als Text für neue Aufgabe verwenden
            var textAufgabe: string = (<HTMLInputElement>document.querySelector("#input")).value;

            //neueAufgabe.innerHTML = textAufgabe;        
            neueAufgabe.innerHTML = textAufgabe;

            //neue Aufgabe in Liste Aufgaben hinzufügen
            liste.appendChild(neueAufgabe);
            
            //neue Aufgabe bekommt Klasse offen
            neueAufgabe.classList.add ("offen");
            
            //alle neuen Aufgaben zählen
            alle = alle + 1;
            document.getElementById ("alle").innerHTML = "" + alle;

            //offenen neuen Aufgaben zählen
            offen = offen + 1;
            document.getElementById ("offen").innerHTML = "" + offen;

            //Eingabefeld leeren
            document.getElementById("input").value = "";
            
            //Haken hinzufügen
            var haken: HTMLElement = document.createElement ("div");
            var txt: HTMLElement = document.createTextNode("");
            haken.className = "haken";
            haken.appendChild(txt);
            neueAufgabe.appendChild(haken);
            haken.classList.add("check");

            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                var div: HTMLElement = this.parentElement;
                div.style.display = "none";
                };
            }

            //abhaken und aufhaken durch klicken auf Haken
            var abhaken: any = document.getElementsByClassName("check");
            var aufgabe: HTMLLIElement = document.getElementsByName("li");
            for (i = 0; i < abhaken.length; i++) {
                abhaken[i].onclick = function(ev) {
                    var div: HTMLElement = this.parentElement;
                    if (div.classList == "checked") {
                        div.className = "offen";
                        //offene hochzählen
                        offen = offen + 1;
                        document.getElementById ("offen").innerHTML = "" + offen;
                        //erledigte runterzählen
                        erledigt = erledigt - 1;
                        document.getElementById ("erledigt").innerHTML = "" + erledigt;
                    }
                    else {
                        div.className = "checked";
                        //offene runterzählen
                        offen = offen - 1;
                        document.getElementById ("offen").innerHTML = "" + offen;
                        //erledigte hochzählen
                        erledigt = erledigt + 1;
                        document.getElementById ("erledigt").innerHTML = "" + erledigt;

                    }
                };
            }
            
            //Löschbutton hinzufügen
            var loeschbutton: HTMLElement = document.createElement ("div");
            var txt: HTMLElement = document.createTextNode("\u00D7");
            loeschbutton.className = "loeschbutton";
            loeschbutton.appendChild(txt);
            neueAufgabe.appendChild(loeschbutton);
            loeschbutton.classList.add("delete");

            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                var div: HTMLElement = this.parentElement;
                div.style.display = "none";
                };
            }

            // löschen durch klicken auf Lösch-Button
            var loeschen: any = document.getElementsByClassName("delete");
            var div: HTMLElement = this.parentElement;
            for (i = 0; i < loeschen.length; i++) {
                loeschen[i].onclick = function() {
                    var div: HTMLElement = this.parentElement;
                    div.style.display = "none";
                    // alle Aufgaben zählen
                    alle = alle - 1;
                    document.getElementById ("alle").innerHTML = "" + alle;
                    if (div.classList == "checked") {
                        //erledigte runterzählen
                        erledigt = erledigt - 1;
                        document.getElementById ("erledigt").innerHTML = "" + erledigt;
                    }
                    if (div.classList == "offen") {
                        //erledigte runterzählen
                        offen = offen - 1;
                        document.getElementById ("offen").innerHTML = "" + offen;
                    }
                };
            }
        }
    }

   // neue Aufgabe durch Spracheingabe
    const artyom: any = new Artyom();
        
    artyom.addCommands({
       indexes: ["erstelle Aufgabe *"],
       smart: true,
       action: function(i: any, wildcard: string): void {
           //neue Aufgabe als Listenelement erstellen
           var neueAufgabe: HTMLLIElement = document.createElement("li");

           //neueAufgabe.innerHTML = textAufgabe;        
           neueAufgabe.innerHTML = wildcard;

           //neue Aufgabe in Liste Aufgaben hinzufügen
           liste.appendChild(neueAufgabe);
           //neue Aufgabe bekommt Klasse offen
           neueAufgabe.className = "offen";

           //alle neuen Aufgaben zählen
           alle = alle + 1;
           document.getElementById ("alle").innerHTML = "" + alle;

           //offenen neuen Aufgaben zählen
           offen = offen + 1;
           document.getElementById ("offen").innerHTML = "" + offen;

           //Eingabefeld leeren
           document.getElementById("input").value = "";

           //Haken hinzufügen
           var haken: HTMLElement = document.createElement ("div");
           var txt: HTMLElement = document.createTextNode("");
           haken.className = "haken";
           haken.appendChild(txt);
           neueAufgabe.appendChild(haken);
           haken.classList.add("check");

           for (i = 0; i < close.length; i++) {
               close[i].onclick = function() {
               var div: HTMLElement = this.parentElement;
               div.style.display = "none";
               };
           }

           //abhaken und aufhaken durch klicken auf Haken
           var abhaken: any = document.getElementsByClassName("check");
           var aufgabe: HTMLLIElement = document.getElementsByName("li");
           for (i = 0; i < abhaken.length; i++) {
               abhaken[i].onclick = function(ev) {
                   var div: HTMLElement = this.parentElement;
                   if (div.classList == "checked") {
                       div.className = "offen";
                       //offene hochzählen
                       offen = offen + 1;
                       document.getElementById ("offen").innerHTML = "" + offen;
                       //erledigte runterzählen
                       erledigt = erledigt - 1;
                       document.getElementById ("erledigt").innerHTML = "" + erledigt;
                   }
                   else {
                       div.className = "checked";
                       //offene runterzählen
                       offen = offen - 1;
                       document.getElementById ("offen").innerHTML = "" + offen;
                       //erledigte hochzählen
                       erledigt = erledigt + 1;
                       document.getElementById ("erledigt").innerHTML = "" + erledigt;

                   }
               };
           }

           //Löschbutton hinzufügen
           var loeschbutton: HTMLElement = document.createElement ("div");
           var txt: HTMLElement = document.createTextNode("\u00D7");
           loeschbutton.className = "loeschbutton";
           loeschbutton.appendChild(txt);
           neueAufgabe.appendChild(loeschbutton);
           loeschbutton.classList.add("delete");

           for (i = 0; i < close.length; i++) {
               close[i].onclick = function() {
               var div: HTMLElement = this.parentElement;
               div.style.display = "none";
               };
           }

           // löschen durch klicken auf Lösch-Button
           var loeschen: any = document.getElementsByClassName("delete");
           var div: HTMLElement = this.parentElement;
           for (i = 0; i < loeschen.length; i++) {
               loeschen[i].onclick = function() {
                   var div: HTMLElement = this.parentElement;
                   div.style.display = "none";
                   // alle Aufgaben zählen
                   alle = alle - 1;
                   document.getElementById ("alle").innerHTML = "" + alle;
                   if (div.classList == "checked") {
                       //erledigte runterzählen
                       erledigt = erledigt - 1;
                       document.getElementById ("erledigt").innerHTML = "" + erledigt;
                   }
                   if (div.classList == "offen") {
                       //erledigte runterzählen
                       offen = offen - 1;
                       document.getElementById ("offen").innerHTML = "" + offen;
                   }
               };
           }
       }
   });
       
    function startContinuousArtyom(): void {
       artyom.fatality();
   
       setTimeout(
           function(): void {
               artyom.initialize({
                   lang: "de-DE",
                   continuous: true,
                   listen: true,
                   interimResults: true,
                   debug: true
               }).then(function(): void {
                   console.log("Ready!");
               });
           }, 
           250);
   }
       
    startContinuousArtyom();

    // Plus Button
    document.querySelector(".neu").addEventListener("click", function() {hinzufuegenAufgabe(textAufgabe); });

    // Aufgabe hinzufügen durch Enter
    var input: HTMLElement = this.document.getElementById("input");
    input.addEventListener("keydown", (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode == 13) {
            hinzufuegenAufgabe(textAufgabe);
        }
    });

});