// Cargar el módulo assert
var assert = require('assert' );

// Cargar el módulo con las funciones para testear
var func = require('../Ejercicio.js');

// Test
it('comprobar función ejercicio', function() {
	assert.equal(func.MiNombre("Juan\nPedro\nDavid\nErnesto"), "David, tu nombre se encuentra en la tercera línea");
	assert.equal(func.MiNombre("Juan\nPedro\nAlfonso\nErnesto"), "David, tu nombre no se encuentra en la tercera línea");
	assert.equal(func.MiNombre("Juan\nPedro\nRoberto\nErnesto"), "David, tu nombre se encuentra en la tercera línea");
});
