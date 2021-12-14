window.addEventListener("load", function () {
    // Variablen
    var i = 0;
    // Liste Aufgaben auswählen
    var liste = document.getElementById("aufgaben");
    // Aufgabe hinzufügen
    function hinzufuegenAufgabe() {
        // Wenn nichts eingegeben wird Aufforderung 
        if (!document.getElementById("input").value) {
            alert("Bitte Aufgabe eintragen");
        }
        else {
            //neue Aufgabe als Listenelement erstellen
            var neueAufgabe = document.createElement("li");
            //Eingabe als Text für neue Aufgabe verwenden
            var textAufgabe = document.querySelector("#input").value;
            //neueAufgabe.innerHTML = textAufgabe;        
            neueAufgabe.innerHTML = textAufgabe;
            //neue Aufgabe in Liste Aufgaben hinzufügen
            liste.appendChild(neueAufgabe);
            // Counter hochzälen
            var counter = liste.getElementsByTagName("li").length;
            document.getElementById("zahl").innerHTML = "" + counter;
            //Eingabefeld leeren
            document.getElementById("input").value = "";
            //Löschbutton hinzufügen
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            neueAufgabe.appendChild(span);
            span.classList.add("delete");
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                };
            }
            // löschen durch klicken auf Lösch-Button
            var loeschen = document.getElementsByClassName("delete");
            for (i = 0; i < loeschen.length; i++) {
                loeschen[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                    // Counter runterzählen
                    counter = counter - 1;
                    document.getElementById("zahl").innerHTML = "" + counter;
                };
            }
        }
    }
    // Plus Button
    document.querySelector(".neu").addEventListener("click", function () { hinzufuegenAufgabe(); });
    // Aufgabe hinzufügen durch Enter
    var input = this.document.getElementById("input");
    input.addEventListener("keydown", (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode == 13) {
            hinzufuegenAufgabe();
        }
    });
    // Aufgaben durch Klick abhaken
    var list = document.querySelector("ul");
    list.addEventListener("click", function (ev) {
        ev.target.classList.toggle("checked");
    });
    // Aufgaben zählen 
    //var counter: number = liste.getElementsByTagName("li").length;
    var erledigt = liste.getElementsByClassName("checked").length;
    var offen = counter - erledigt;
    // Counter ausgeben im HTML
    document.getElementById("offen").innerHTML = "" + offen;
    document.getElementById("erledigt").innerHTML = "" + erledigt;
});
//# sourceMappingURL=script.js.map