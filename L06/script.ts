/* Emisionsvariablen deklarieren*/
    var emission_18:number = 0;
    var emission_08: number =0;
    var emission_18_welt:number=0;
    var growth_p: number=0;
    var growth_a: number=0;

/* Eingabe aller Variablen*/
    /* Variabeln Africa */
    var africa_08: number = 1028;
    var africa_18: number = 1235.5;

    /* Variabeln South America */
    var s_america_08: number = 1132.6;
    var s_america_18: number = 1261.5;

    /* Variabeln Europa */
    var europa_08: number = 4965.7;
    var europa_18: number = 4209.3;

    /* Variabeln North America */
    var n_america_08: number = 6600.4;
    var n_america_18: number = 6035.6;

    /* Variabeln Asia */
    var asia_08: number = 12954.7;
    var asia_18: number = 16274.1;

    /* Variabeln Australia */
    var australia_08: number = 1993;
    var australia_18: number = 2100.5;

/*Klick auf Europa*/
    function KontinentClicked1 (emission18=europa_18, emission08=europa_08){
        /* Überschrift anpassen*/
            document.querySelector(".kontinent1").innerHTML=("Europe");
            document.querySelector(".kontinent2").innerHTML=("Europe");

        /* Images anpassen*/
            document.querySelector(".europe").style.opacity="100%";
            document.querySelector(".asia").style.opacity="50%";
            document.querySelector(".africa").style.opacity="50%";
            document.querySelector(".northamerica").style.opacity="50%";
            document.querySelector(".southamerica").style.opacity="50%";
            document.querySelector(".australia").style.opacity="50%";
            
        /* Werte anpassen*/
            var emission_18: number = europa_18;
            var emission_08: number = europa_08;

        /* Berechnung Emissionen*/
            var welt_18: number = africa_18 + europa_18 + s_america_18 + n_america_18 + asia_18 + australia_18
            var emission_18_welt: number = emission_18 / welt_18 * 100;
            var growth_p: number = (emission_18 / emission_08 - 1) * 100;
            var growth_a: number = emission_18 - emission_08;
        
        /* Ausgabe der Werte*/
            document.querySelector(".emission2018").innerHTML=(emission_18.toFixed(2) +"kg CO2");
            document.querySelector(".emission_world").innerHTML=emission_18_welt.toFixed(2) +"%";
            document.querySelector(".growth_p").innerHTML=(growth_p.toFixed(2) + "%");
            document.querySelector(".growth_a").innerHTML=(growth_a).toFixed(2) +"kg CO2";

        /* Balkendiagram*/
            document.querySelector(".chart").style.height=emission_18/130+"px";
            }
    /* Klick Event*/
    window.addEventListener("load",function() {
        document.querySelector(".europe").addEventListener("click", KontinentClicked1);
    })

    /*Klick auf Asien*/
    function KontinentClicked2 (emission18=asia_18, emission08=asia_08){
        /* Überschrift anpassen*/
            document.querySelector(".kontinent1").innerHTML=("Asia");
            document.querySelector(".kontinent2").innerHTML=("Asia");

        /* Images anpassen*/
        document.querySelector(".europe").style.opacity="50%";
        document.querySelector(".asia").style.opacity="100%";
        document.querySelector(".africa").style.opacity="50%";
        document.querySelector(".northamerica").style.opacity="50%";
        document.querySelector(".southamerica").style.opacity="50%";
        document.querySelector(".australia").style.opacity="50%";
            
        /* Werte anpassen*/
            var emission_18: number = asia_18;
            var emission_08: number = asia_08;

        /* Berechnung Emissionen*/
            var welt_18: number = africa_18 + europa_18 + s_america_18 + n_america_18 + asia_18 + australia_18
            var emission_18_welt: number = emission_18 / welt_18 * 100;
            var growth_p: number = (emission_18 / emission_08 - 1) * 100;
            var growth_a: number = emission_18 - emission_08;
        
        /* Ausgabe der Werte*/
            document.querySelector(".emission2018").innerHTML=(emission_18.toFixed(2) +"kg CO2");
            document.querySelector(".emission_world").innerHTML=emission_18_welt.toFixed(2) +"%";
            document.querySelector(".growth_p").innerHTML=(growth_p.toFixed(2) + "%");
            document.querySelector(".growth_a").innerHTML=(growth_a).toFixed(2) +"kg CO2";

        /* Balkendiagram*/
            document.querySelector(".chart").style.height=emission_18/130+"px";
            }

    /* Klick Event*/
    window.addEventListener("load",function() {
        document.querySelector(".asia").addEventListener("click", KontinentClicked2);
    })

    /*Klick auf Afrika*/
    function KontinentClicked3 (emission18=africa_18, emission08=africa_08){
        /* Überschrift anpassen*/
            document.querySelector(".kontinent1").innerHTML=("Africa");
            document.querySelector(".kontinent2").innerHTML=("Africa");

        /* Images anpassen*/
        document.querySelector(".europe").style.opacity="50%";
        document.querySelector(".asia").style.opacity="50%";
        document.querySelector(".africa").style.opacity="100%";
        document.querySelector(".northamerica").style.opacity="50%";
        document.querySelector(".southamerica").style.opacity="50%";
        document.querySelector(".australia").style.opacity="50%";
            
        /* Werte anpassen*/
            var emission_18: number = africa_18;
            var emission_08: number = africa_08;

        /* Berechnung Emissionen*/
            var welt_18: number = africa_18 + europa_18 + s_america_18 + n_america_18 + asia_18 + australia_18
            var emission_18_welt: number = emission_18 / welt_18 * 100;
            var growth_p: number = (emission_18 / emission_08 - 1) * 100;
            var growth_a: number = emission_18 - emission_08;
        
        /* Ausgabe der Werte*/
            document.querySelector(".emission2018").innerHTML=(emission_18.toFixed(2) +"kg CO2");
            document.querySelector(".emission_world").innerHTML=emission_18_welt.toFixed(2) +"%";
            document.querySelector(".growth_p").innerHTML=(growth_p.toFixed(2) + "%");
            document.querySelector(".growth_a").innerHTML=(growth_a).toFixed(2) +"kg CO2";

        /* Balkendiagram*/
            document.querySelector(".chart").style.height=emission_18/130+"px";
            }

    /* Klick Event*/
    window.addEventListener("load",function() {
        document.querySelector(".africa").addEventListener("click", KontinentClicked3);
    })

    /*Klick auf Nord Amerika*/
    function KontinentClicked4 (emission18=n_america_18, emission08=n_america_08){
        /* Überschrift anpassen*/
            document.querySelector(".kontinent1").innerHTML=("Nord America");
            document.querySelector(".kontinent2").innerHTML=("Nord America");
            
        /* Images anpassen*/
        document.querySelector(".europe").style.opacity="50%";
        document.querySelector(".asia").style.opacity="50%";
        document.querySelector(".africa").style.opacity="50%";
        document.querySelector(".northamerica").style.opacity="100%";
        document.querySelector(".southamerica").style.opacity="50%";
        document.querySelector(".australia").style.opacity="50%";
            
        /* Werte anpassen*/
            var emission_18: number = n_america_18;
            var emission_08: number = n_america_08;

        /* Berechnung Emissionen*/
            var welt_18: number = africa_18 + europa_18 + s_america_18 + n_america_18 + asia_18 + australia_18
            var emission_18_welt: number = emission_18 / welt_18 * 100;
            var growth_p: number = (emission_18 / emission_08 - 1) * 100;
            var growth_a: number = emission_18 - emission_08;
        
        /* Ausgabe der Werte*/
            document.querySelector(".emission2018").innerHTML=(emission_18.toFixed(2) +"kg CO2");
            document.querySelector(".emission_world").innerHTML=emission_18_welt.toFixed(2) +"%";
            document.querySelector(".growth_p").innerHTML=(growth_p.toFixed(2) + "%");
            document.querySelector(".growth_a").innerHTML=(growth_a).toFixed(2) +"kg CO2";

        /* Balkendiagram*/
            document.querySelector(".chart").style.height=emission_18/130+"px";
            }

    /* Klick Event*/
    window.addEventListener("load",function() {
        document.querySelector(".northamerica").addEventListener("click", KontinentClicked4);
    })

    /*Klick auf Süd Amerika*/
    function KontinentClicked5 (emission18=s_america_18, emission08=s_america_08){
        /* Überschrift anpassen*/
            document.querySelector(".kontinent1").innerHTML=("South America");
            document.querySelector(".kontinent2").innerHTML=("South America");
            
        /* Images anpassen*/
        document.querySelector(".europe").style.opacity="50%";
        document.querySelector(".asia").style.opacity="50%";
        document.querySelector(".africa").style.opacity="50%";
        document.querySelector(".northamerica").style.opacity="50%";
        document.querySelector(".southamerica").style.opacity="100%";
        document.querySelector(".australia").style.opacity="50%";
            
        /* Werte anpassen*/
            var emission_18: number = s_america_18;
            var emission_08: number = s_america_08;

        /* Berechnung Emissionen*/
            var welt_18: number = africa_18 + europa_18 + s_america_18 + n_america_18 + asia_18 + australia_18
            var emission_18_welt: number = emission_18 / welt_18 * 100;
            var growth_p: number = (emission_18 / emission_08 - 1) * 100;
            var growth_a: number = emission_18 - emission_08;
        
        /* Ausgabe der Werte*/
            document.querySelector(".emission2018").innerHTML=(emission_18.toFixed(2) +"kg CO2");
            document.querySelector(".emission_world").innerHTML=emission_18_welt.toFixed(2) +"%";
            document.querySelector(".growth_p").innerHTML=(growth_p.toFixed(2) + "%");
            document.querySelector(".growth_a").innerHTML=(growth_a).toFixed(2) +"kg CO2";

        /* Balkendiagram*/
            document.querySelector(".chart").style.height=emission_18/130+"px";
            }

    /* Klick Event*/
    window.addEventListener("load",function() {
        document.querySelector(".southamerica").addEventListener("click", KontinentClicked5);
    })

/*Klick auf Australien*/
function KontinentClicked6 (emission18=australia_18, emission08=australia_08){
    /* Überschrift anpassen*/
        document.querySelector(".kontinent1").innerHTML=("Australia");
        document.querySelector(".kontinent2").innerHTML=("Australia");

    /* Images anpassen*/
        document.querySelector(".europe").style.opacity="50%";
        document.querySelector(".asia").style.opacity="50%";
        document.querySelector(".africa").style.opacity="50%";
        document.querySelector(".northamerica").style.opacity="50%";
        document.querySelector(".southamerica").style.opacity="50%";
        document.querySelector(".australia").style.opacity="100%";
        
    /* Werte anpassen*/
        var emission_18: number = australia_18;
        var emission_08: number = australia_08;

    /* Berechnung Emissionen*/
        var welt_18: number = africa_18 + europa_18 + s_america_18 + n_america_18 + asia_18 + australia_18
        var emission_18_welt: number = emission_18 / welt_18 * 100;
        var growth_p: number = (emission_18 / emission_08 - 1) * 100;
        var growth_a: number = emission_18 - emission_08;
    
    /* Ausgabe der Werte*/
        document.querySelector(".emission2018").innerHTML=(emission_18.toFixed(2) +"kg CO2");
        document.querySelector(".emission_world").innerHTML=emission_18_welt.toFixed(2) +"%";
        document.querySelector(".growth_p").innerHTML=(growth_p.toFixed(2) + "%");
        document.querySelector(".growth_a").innerHTML=(growth_a).toFixed(2) +"kg CO2";

    /* Balkendiagram*/
        document.querySelector(".chart").style.height=emission_18/130+"px";
        }

/* Klick Event*/
window.addEventListener("load",function() {
    document.querySelector(".australia").addEventListener("click", KontinentClicked6);
})