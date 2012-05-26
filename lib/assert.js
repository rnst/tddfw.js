function assertTrue(expr) {
    if (!expr) {
        throw new Error("not true");
    }
}

function assertFalse(expr) {
    if (expr) {
        throw new Error("not false");
    }
}

function assertUndefined(x) {
    if (typeof x !== "undefined") {
        throw new Error("not undefined");
    }
}

function assertObject(x) {
    if (typeof x !== "object") {
        throw new Error("not object");
    }
}

function assertNumber(x) {
    if (typeof x !== "number") {
        throw new Error("not number");
    }
}

function assertString(x) {
    if (typeof x !== "string") {
        throw new Error("not string");
    }
}

function assertFunction(x) {
    if (typeof x !== "function") {
        throw new Error("not function");
    }
}

function assertEquals(a,b) {
    if (a != b) {
        throw new Error("not equals");
    }
}

function assertNotEquals(a,b) {
    if (a == b) {
        throw new Error("equals");
    }
}
