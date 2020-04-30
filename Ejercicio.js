'use strict'
let ejercicio = function MiNombre()
{
    let contador = 0;
    let palabras = "";
    let nombre = "David"
    let error = "tu nombre no se encuentra en la tercera línea";
    let correcto = "tu nombre se encuentra en la tercera línea"
    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i] == "\n")
            contador++;
        if (contador == 2 && nombres[i] != "\n")
            palabras += nombres[i];
        if (contador == 3 && palabras == nombre)
        {
            return palabras + ", " + correcto;
        }
        if(contador == 3 && palabras != nombre)
        {
            return error;
        }
    }
}
let nombres = "Juan\nPedro\nDavid\nErnesto";
module.exports = {
	ejercicio
}