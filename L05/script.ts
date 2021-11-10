/* Variabeln Africa */
var africa_08 = 1028;
var africa_18 = 1235.5;

/* Variabeln South America */
var s_america_08 = 1132.6;
var s_america_18 = 1261.5;

/* Variabeln Europa */
var europa_08 = 4965.7;
var europa_18 = 4209.3;

/* Variabeln North America */
var n_america_08 = 6600.4;
var n_america_18 = 6035.6;

/* Variabeln Asia */
var asia_08 = 12954.7;
var asia_18 = 416274.1;

/* Variabeln Australia */
var australia_08 = 1993;
var australia_18 = 2100.5;

/* Rechnung Welt */
var welt_18 = africa_18 + europa_18 + s_america_18 + n_america_18 + asia_18 + australia_18

/* Rechnung Africa */
var africa_welt = africa_18 / welt_18 * 100;
var africa_africa = (africa_18 / africa_08 - 1) * 100;
var africa_africa_co2 = africa_18 - africa_08;

/* Rechnung South America */
var s_america_welt = s_america_18 / welt_18 * 100;
var s_america_s_america = (s_america_18 / s_america_08 - 1) * 100;
var s_america_s_america_co2 = s_america_18 - s_america_08;

/* Rechnung Europa */
var europa_welt = europa_18 / welt_18 * 100;
var europa_europa = (europa_18 / europa_08 - 1) * 100;
var europa_europa_co2 = europa_18 - europa_08;

/* Rechnung North America */
var n_america_welt = n_america_18 / welt_18 * 100;
var n_america_n_america = (n_america_18 / n_america_08 - 1) * 100;
var n_america_n_america_co2 = n_america_18 - n_america_08;

/* Rechnung Asia */
var asia_welt = asia_18 / welt_18 * 100;
var asia_asia = (asia_18 / asia_08 - 1) * 100;
var asia_asia_co2 = asia_18 - asia_08;

/* Rechnung Australia */
var australia_welt = australia_18 / welt_18 * 100;
var australia_australia = (australia_18 / australia_08 - 1) * 100;
var australia_australia_co2 = australia_18 - australia_08;

/* Ausgabe Africa */
console.log('Die Esission von Afrika ist:' + africa_18 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit' + africa_welt + '%');
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + africa_africa + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + africa_africa_co2 + 'kg CO2');

/* Ausgabe South America */
console.log('Die Esission von Süd Amerika ist:' + s_america_18 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit' + s_america_welt + '%');
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + s_america_s_america + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + s_america_s_america_co2 + 'kg CO2');

/* Ausgabe Europa */
console.log('Die Esission von Europa ist:' + europa_18 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit' + europa_welt + '%');
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + europa_europa + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + europa_europa_co2 + 'kg CO2');

/* Ausgabe North America */
console.log('Die Esission von Nord Amerika ist:' + n_america_18 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Nord Amerika damit' + n_america_welt + '%');
console.log('Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + n_america_n_america + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + n_america_n_america_co2 + 'kg CO2');

/* Ausgabe Asia */
console.log('Die Esission von Asien ist:' + asia_18 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit' + asia_welt + '%');
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + asia_asia + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + asia_asia_co2 + 'kg CO2');

/* Ausgabe Australia */
console.log('Die Esission von Australien ist:' + australia_18 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit' + australia_welt + '%');
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + australia_australia + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + australia_australia_co2 + 'kg CO2');