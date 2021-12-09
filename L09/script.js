window.addEventListener("load", function () {
    // Zählervariable
    var i = 0;
    var counter = 0;
    // Aufgabe hinzufügen
    function neueAufgabe() {
        alert('hallo');
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        }
        else {
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            };
        }
    }
    ;
    // Plus Button
    document.querySelector(".neu").addEventListener("click", function () { neueAufgabe(); });
    // Aufgaben durch Klick abhaken
    var list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        ev.target.classList.toggle('checked');
    });
    // Lösch-Button hinzufügen   
    var aufgaben = document.getElementsByTagName("LI");
    for (i = 0; i < aufgaben.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "delete";
        span.appendChild(txt);
        aufgaben[i].appendChild(span);
    }
    ;
    // löschen durch klicken auf Lösch-Button
    var loeschen = document.getElementsByClassName("delete");
    for (i = 0; i < loeschen.length; i++) {
        loeschen[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
    ;
    //Aufgaben zählen
    document.getElementById("zahl").innerHTML = "= " + counter;
});
//# sourceMappingURL=script.js.map