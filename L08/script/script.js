window.addEventListener("load", function () {
    // Sounds einfügen
    var kick = new Audio('assets/kick.mp3');
    var hihat = new Audio('assets/hihat.mp3');
    var snare = new Audio('assets/snare.mp3');
    var A = new Audio('assets/A.mp3');
    var C = new Audio('assets/C.mp3');
    var F = new Audio('assets/F.mp3');
    var G = new Audio('assets/G.mp3');
    var laugh1 = new Audio('assets/laugh-1.mp3');
    var laugh2 = new Audio('assets/laugh-2.mp3');
    var sound = [kick, hihat, snare, A, C, F, G, laugh1, laugh2];
    var loop = [sound[1], sound[2], sound[1], sound[3]];
    var p = "off";
    var beat;
    var remix;
    // Funktion Sounds abspielen
    function playSample(sound) {
        sound.play();
    }
    // Funktion Beat
    function playBeat() {
        for (var i = 0; i < 4; i++) {
            function timeoutID() { setTimeout(playSample, 1000); }
            ;
            playSample(loop[i]);
            timeoutID;
        }
        ;
    }
    ;
    // Funktion Play geklickt
    function clickPlay() {
        //Button wechselns und Beat abspielen/stoppen
        switch (p) {
            case "off":
                beat = setInterval(playBeat, 1000);
                document.querySelector("#play").style.opacity = "0%";
                document.querySelector("#pause").style.opacity = "100%";
                p = "on";
                break;
            case "on":
                clearInterval(beat);
                document.querySelector("#play").style.opacity = "100%";
                document.querySelector("#pause").style.opacity = "0%";
                p = "off";
                break;
        }
    }
    ;
    // Funktion Remix
    function clickRemix() {
        remix = setInterval(playRemix, 1000);
        function playRemix() {
            for (var a = 0; a < 4; a++) {
                const b = Math.floor(Math.random() * 6);
                playSample(sound[b]);
            }
            ;
        }
        ;
    }
    ;
    // Funktion Delete
    function clickDelete() {
        loop.length = 0;
    }
    ;
    // Event Button klick
    document.querySelector("#pad1").addEventListener("click", function () { playSample(sound[0]); });
    document.querySelector("#pad2").addEventListener("click", function () { playSample(sound[1]); });
    document.querySelector("#pad3").addEventListener("click", function () { playSample(sound[2]); });
    document.querySelector("#pad4").addEventListener("click", function () { playSample(sound[3]); });
    document.querySelector("#pad5").addEventListener("click", function () { playSample(sound[4]); });
    document.querySelector("#pad6").addEventListener("click", function () { playSample(sound[5]); });
    document.querySelector("#pad7").addEventListener("click", function () { playSample(sound[6]); });
    document.querySelector("#pad8").addEventListener("click", function () { playSample(sound[7]); });
    document.querySelector("#pad9").addEventListener("click", function () { playSample(sound[8]); });
    document.querySelector("#play").addEventListener("click", function () { clickPlay(); });
    document.querySelector("#remix").addEventListener("click", function () { clickRemix(); });
    document.querySelector("#delete").addEventListener("click", function () { clickDelete(); });
});
//# sourceMappingURL=script.js.map