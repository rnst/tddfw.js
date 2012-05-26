testCase ("js internals test", {
    "test new var is undefined": function() {
        var foo;
        assertUndefined(foo);
    },
    "test empty brackets is object": function() {
        assertObject({});
    },
    "test digit is number": function() {
        assertNumber(2);
    },
    "test digit.digit is number": function() {
        assertNumber(0.5);
    },
    "test quoted text is string": function() {
        assertString("foo");
    },
    "test empty annonimous function is function": function() {
        assertFunction(function() {});
    },
    "test empty named function is function": function() {
        assertFunction(function foo() {});
    },
    "test invoking empty annonymous function is undefined": function() {
        assertUndefined(function() {}());
    },
    "test invoking empty named function is undefined": function() {
        assertUndefined(function foo() {}());
    },
    "test invoking empty annonymous function wrapped in brackets is undefined":
    function() {
        assertUndefined((function() {}()));
    },
    "test invoking function which returns number is number": function() {
        assertNumber(function() {return 2;}());
    },
    
    // vamos a hacer unos tests para demostrar las diferencias entre los
    // operadores logicos (devuelven true o false) !== y !=
    "test == da true para mismo valor y mismo tipo": function() {
        assertTrue(3 == 3);
    },
    "test == da true para mismo valor y diferente tipo": function() {
        assertTrue(3 == "3");
    },
    "test === da true para mismo valor y mismo tipo": function() {
        assertTrue(3 === 3);
    },
    "test === da false para mismo valor y diferente tipo": function() {
        assertFalse(3 === "3");
    },
    
    /**
     * probar como funcionan los operadores de incremento:
     * - existe el incremento como prefijo?
     * - existe el incremento como postfijo?
     * - tienen diferencias como en c?
     */
    "test pre-incremento incrementa antes" : function() {
        var a = 0;
        assertEquals(1, ++a); 
    },
    "test post-incremento no incrementa antes" : function() {
        var a = 0;
        assertNotEquals(1, a++);
    },
    "test post-incremento incrementa después" : function() {
        var a = 0;
        a++;
        assertEquals(1, a);
    }
});
