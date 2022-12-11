// const { describe } = require('yargs');
const suma = require('../calc.js')


describe('Prueba de sumas',() => {
    test('Suma de dos numeros, ',() =>{
        expect(suma(1,2)).toBe(3); 
    })
    
    test('Suma de ceros, ',() =>{
        expect(suma(0,0)).toBe(0); 
    })
});

