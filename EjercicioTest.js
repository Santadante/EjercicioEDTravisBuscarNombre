// Cargar el módulo assert
var assert = require('assert' );

// Cargar el módulo con las funciones para testear
var func = require('Ejercicio.js');

// Test
it('comprobar función ejercicio', function() {
	assert.equal(func.ejercicio(), "David, tu nombre se encuentra en la tercera línea");
});