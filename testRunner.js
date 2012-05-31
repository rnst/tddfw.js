var statusColor = {
    "pass": "0c0",
    "fail": "c00",
    "header": "000"
};

function output(text, color) {
    var p = document.createElement("p");
    p.innerHTML = text;
    p.style.color = "#" + color;
    document.body.appendChild(p);
}

function testCase(name, tests) {
    var successful = 0;
    var testCount = 0;
    
    output("<strong>" + name + "</strong>", statusColor.header);

    for (var test in tests) {
        if (!/^test/.test(test)) {
            continue;
        }

        testCount++;

        try {
            tests[test]();
            output(test, statusColor.pass);
            successful++;
        } catch(e) {
            output(test + " failed: " + e.message, statusColor.fail);
        }
    }

    output("<strong>" + testCount + " tests, " + (testCount - successful) +
        " failures</strong>", 
        successful === testCount ? statusColor.pass : statusColor.fail);
}
