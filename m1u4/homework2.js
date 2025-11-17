const distancia = 33000

if (distancia >= 0 && distancia <= 1000) {
    console.log(`Por la cantidad de ${distancia}mts, la mejor opción de tranporte es: pie`);
} else if (distancia > 1000 && distancia <= 10000) {
    console.log(`Por la cantidad de ${distancia}mts, la mejor opción de tranporte es: bicicleta`);
} else if (distancia > 10000 && distancia <= 30000) {
    console.log(`Por la cantidad de ${distancia}mts, la mejor opción de tranporte es: colectivo`);
} else if (distancia > 30000 && distancia <= 100000) {
    console.log(`Por la cantidad de ${distancia}mts, la mejor opción de tranporte es: auto`);
} else {
    console.log(`Por la cantidad de ${distancia}mts, la mejor opción de tranporte es: avión`);
}

