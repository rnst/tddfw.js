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
     * vamos ha probar algunas propiedades de los objetos
     * el acceso a traves de dot notation: objeto.propiedad
     * el acceso a traves de corchetes: objeto[propiedad]
    **/
    "test object with property": function() {
        var foo = {"name": "john doe"};
        assertObject(foo);
    },
    "test accessing object property by dot notation": function() {
        var name = "john doe";
        var foo = {"name": name};
        assertEquals(name, foo.name);
    },
    "test accessing object property by corcheting" : function() {
        var name = "john doe";
        var foo = {"name" : name};
        assertEquals(name, foo["name"]);
    },
    "test accessing object property by corcheting with var" : function() {
        var x = "name";
        var foo = {"name" : "john doe"};
        assertEquals(foo[x], foo["name"]);
    },
    "test accessing object property with string var": function() {
        var objName = "john doe";
        var objAge = 22;
        var obj = {
            "name": objName,
            "age": objAge
        };
        assertEquals(obj["name"], "john doe");
    },
    "test accessing object property with var": function() {
        var objName = "john doe";
        var objAge = 22;
        var obj = {
            "name": objName,
            "age": objAge
        };
        var name = "age";
        assertEquals(obj[name], objAge);
    },
    
    //Uso de caracteres unicode como variables
    "test var ASCII como variable" : function() {
        var obj = {"€": 22};
        assertEquals(obj["€"], 22);
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
    },
    
    /**
     * he leido que si se comparan dos objetos iguales con === da false
     * voy a hacer varios tests para comprobar este comportamiento
     * y buscar informacion para descubrir porque
     * tambien estaria bien linkar al post de stackoverflow donde lo lei
     */
     
     "test dos objetos vacios no son estrictamente iguales": function () {
        assertNotSame({}, {});
     },
     "test dos objectos vacios no son iguales": function () {
        assertNotEquals({}, {});
     },
     "test dos objetos vacios copiados por variable son estrictamente iguales":
     function () {
        var a = {};
        var b = a;
        assertSame(a, b);
     },
     "test dos objetos vacios en variables no son iguales": function () {
        var a = {};
        var b = {};
        assertNotEquals(a, b);
     }
});
