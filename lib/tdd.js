/** code from tddjs.com **/

function output(text, color) {
    var p = document.createElement("p");
    p.innerHTML = text;
    p.style.color = "#" + color;
    document.body.appendChild(p);
}

function testCase(name, tests) {
    var successful = 0;
    var testCount = 0;

    for (var test in tests) {
        if (!/^test/.test(test)) {
            continue;
        }

        testCount++;

        try {
            tests[test]();
            output(test, "0c0");
            successful++;
        } catch(e) {
            output(test + " failed: " + e.message, "c00");
        }
    }

    var color = successful === testCount ? "0c0" : "c00";

    output("<strong>" + testCount + " tests, " + (testCount - successful) +
        " failures</strong>", color);
}
