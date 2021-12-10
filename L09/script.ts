// tslint:disable: typedef
// tslint:disable: no-any
window.addEventListener("load", function () {

// Variablen
    var i: number = 0;
    var counter: number = 0;
    // Liste Aufgaben auswählen
    var liste: any = document.getElementById("aufgaben");

// Aufgabe hinzufügen
    function hinzufuegenAufgabe() {

        // Wenn nichts eingegeben wird Aufforderung 
        if (!document.getElementById("input").value) {
            alert("Bitte Aufgabe eintragen");
        }
        else {
            //neue Aufgabe als Listenelement erstellen
            var neueAufgabe: HTMLLIElement = document.createElement("li");
        
            //Eingabe als Text für neue Aufgabe verwenden
            var textAufgabe: any = (<HTMLInputElement>document.querySelector("#input")).value;
            //neueAufgabe.innerHTML = textAufgabe;        
            neueAufgabe.innerHTML = textAufgabe;

            //neue Aufgabe in Liste Aufgaben hinzufügen
            liste.appendChild(neueAufgabe);
            
            //hoch zählen
            counter = counter + 1;

            //Eingabefeld leeren
            document.getElementById("input").value = "";
            
            //Löschbutton hinzufügen
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            neueAufgabe.appendChild(span);

            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
                };
            }
        }
    }

// Plus Button
    document.querySelector(".neu").addEventListener("click", function() {hinzufuegenAufgabe(); });

// Aufgabe hinzufügen durch Enter
    var input: HTMLElement = this.document.getElementById("input");
    input.addEventListener("keydown", (event) => {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode == 13) {
                hinzufuegenAufgabe();
            }
        });

// Aufgaben durch Klick abhaken
    var list: any = document.querySelector("ul");
    list.addEventListener("click", function(ev) {
        ev.target.classList.toggle("checked");
    });

// Lösch-Button hinzufügen   
    var aufgaben: any = document.getElementsByTagName("LI");
    for (i = 0; i < aufgaben.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "delete";
      span.appendChild(txt);
      aufgaben[i].appendChild(span);
    }

// löschen durch klicken auf Lösch-Button
    var loeschen: any = document.getElementsByClassName("delete");
    for (i = 0; i < loeschen.length; i++) {
        loeschen[i].onclick = function() {
            var div: any = this.parentElement;
            div.style.display = "none";
            //runter zählen
            counter = counter - 1;
        };
    }

// Aufgaben zählen in Counter
    document.getElementById("zahl").innerHTML = "= " + counter;
});






/*
// Lösch-Button hinzufügen   
    var aufgaben: any = document.getElementsByTagName("LI");
    for (i = 0; i < aufgaben.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "delete";
      span.appendChild(txt);
      aufgaben[i].appendChild(span);
    }

// löschen durch klicken auf Lösch-Button
    var loeschen: any = document.getElementsByClassName("delete");
    for (i = 0; i < loeschen.length; i++) {
        loeschen[i].onclick = function() {
            var div: any = this.parentElement;
            div.style.display = "none";
            //runter zählen
            counter = counter - 1;
        };
    }
*/