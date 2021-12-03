window.addEventListener("load",function() {
// Sounds einfügen
    var kick:HTMLAudioElement = new Audio('assets/kick.mp3');
    var hihat:HTMLAudioElement = new Audio('assets/hihat.mp3');
    var snare:HTMLAudioElement = new Audio('assets/snare.mp3');
    var A:HTMLAudioElement = new Audio('assets/A.mp3');
    var C:HTMLAudioElement = new Audio('assets/C.mp3');
    var F:HTMLAudioElement = new Audio('assets/F.mp3');
    var G:HTMLAudioElement = new Audio('assets/G.mp3');
    var laugh1:HTMLAudioElement = new Audio('assets/laugh-1.mp3');
    var laugh2:HTMLAudioElement = new Audio('assets/laugh-2.mp3');

    var sound:HTMLAudioElement []= [kick, hihat, snare, A, C, F, G, laugh1, laugh2];

    var p:string="off";
    var beat:number;
    var remix:number;

// Funktion Sounds abspielen
    function playSample (sound): void{
        sound.play();
    }

//Funktion Beat
    function playBeat (){
        for(var i:number=0; i<3; i++){
            playSample(sound[i]);
        };
    };

// Funktion Play geklickt
    function clickPlay() {

    //Button wechselns
    switch (p) { 
        case "off": beat=setInterval(playBeat, 300);
                    document.querySelector("#play").style.opacity="0%";
                    document.querySelector("#pause").style.opacity="100%";
                    p="on"; break;
        case "on":  clearInterval(beat)
                    document.querySelector("#play").style.opacity="100%";
                    document.querySelector("#pause").style.opacity="0%";
                    p="off"; 
                    break;
    }
};


// Funktion Remix
    function clickRemix() {
        remix=setInterval(playRemix, 300);
        function playRemix(){
            for(var a:number=0; a<4; a++){
                const b: number = Math.floor(Math.random() * 6);
                playSample (sound[b]); 
            };
        };
    };


// Funktion Delete
    function clickDelete() {
        sound.length=0;
    };
    

// Event Button klick
    document.querySelector("#pad1").addEventListener("click", function() {playSample(sound[0]);});
    document.querySelector("#pad2").addEventListener("click", function() {playSample(sound[1]);});
    document.querySelector("#pad3").addEventListener("click", function() {playSample(sound[2]);});
    document.querySelector("#pad4").addEventListener("click", function() {playSample(sound[3]);});
    document.querySelector("#pad5").addEventListener("click", function() {playSample(sound[4]);});
    document.querySelector("#pad6").addEventListener("click", function() {playSample(sound[5]);});
    document.querySelector("#pad7").addEventListener("click", function() {playSample(sound[6]);});
    document.querySelector("#pad8").addEventListener("click", function() {playSample(sound[7]);});
    document.querySelector("#pad9").addEventListener("click", function() {playSample(sound[8]);});
    document.querySelector("#play").addEventListener("click", function() {clickPlay();});
    document.querySelector("#remix").addEventListener("click", function() {clickRemix();});
    document.querySelector("#delete").addEventListener("click", function() {clickDelete();});
});



    /* Beat loop
    function beat (sound): void {
        for(var i = 0; i=0;){
            var a =0;
            a++
            if (a=3){
                a=0
            }
            playSample(sound[a]);
            alert(a)
        }
    }
    */
    