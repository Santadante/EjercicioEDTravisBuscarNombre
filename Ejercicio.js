'use strict'
let MiNombre = function MiNombre(texto)
{
    let contador = 0;
    let palabras = "";
    let nombre = "David"
    let error = "tu nombre no se encuentra en la tercera línea";
    let correcto = "tu nombre se encuentra en la tercera línea"
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "\n")
            contador++;
        if (contador == 2 && texto[i] != "\n")
            palabras += texto[i];
        if (contador == 3 && texto == nombre)
        {
            return palabras + ", " + correcto;
        }
        if(contador == 3 && texto != nombre)
        {
            return error;
        }
    }
}
module.exports = {
	MiNombre(texto)
}
