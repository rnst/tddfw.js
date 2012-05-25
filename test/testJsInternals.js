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
    }
});