window.addEventListener("load",function() {
    /* Sounds einfügen*/
        var sound:HTMLAudioElement;

        var kick:HTMLAudioElement = new Audio('assets/kick.mp3');
        var hihat:HTMLAudioElement = new Audio('assets/hihat.mp3');
        var snare:HTMLAudioElement = new Audio('assets/snare.mp3');
        var A:HTMLAudioElement = new Audio('assets/A.mp3');
        var C:HTMLAudioElement = new Audio('assets/C.mp3');
        var F:HTMLAudioElement = new Audio('assets/F.mp3');
        var G:HTMLAudioElement = new Audio('assets/G.mp3');
        var laugh1:HTMLAudioElement = new Audio('assets/laugh-1.mp3');
        var laugh2:HTMLAudioElement = new Audio('assets/laugh-2.mp3');

        var beat:HTMLAudioElement []=[kick, hihat, snare, hihat];
        var i = 0;

    /* Funktion Sounds abspielen*/
        function playSample (sound): void{
            sound.play();
        }
    /* Funktion Beat abspielen*/
        function playBeat() {
            setInterval(function() {
                beat[0].play ();
            }, 3000);
            setInterval(function() {
                beat[1].play ();
            }, 2000);
            setInterval(function() {
                beat[2].play ();
            }, 1000);
            setInterval(function() {
                beat[3].play ();
            }, 500);
            }

    /* Event Button klick*/
        document.querySelector("#pad1").addEventListener("click", function() {playSample(kick);});
        document.querySelector("#pad2").addEventListener("click", function() {playSample(hihat);});
        document.querySelector("#pad3").addEventListener("click", function() {playSample(snare);});
        document.querySelector("#pad4").addEventListener("click", function() {playSample(A);});
        document.querySelector("#pad5").addEventListener("click", function() {playSample(C);});
        document.querySelector("#pad6").addEventListener("click", function() {playSample(F);});
        document.querySelector("#pad7").addEventListener("click", function() {playSample(G);});
        document.querySelector("#pad8").addEventListener("click", function() {playSample(laugh1);});
        document.querySelector("#pad9").addEventListener("click", function() {playSample(laugh2);});
        document.querySelector("#play").addEventListener("click", function() {playBeat(beat);});
});