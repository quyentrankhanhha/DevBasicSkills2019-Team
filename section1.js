var regexps = {
    2: /^([-+]?)([01]*)(\.[01]*)?$/,
    8: /^([-+]?)([0-7]*)(\.[0-7]*)?$/,
    10: /^([-+]?)(\d*)(\.\d*)?$/,
    16: /^([-+]?)([0-9a-f]*)(\.[0-9a-f]*)?$/i
};

function numberOnInput(input) {
    var base = parseInt(input.name.substr(4));
    var s = input.value;
    // Allow 0x in front of hex numbers
    if (base == 16 && s.substr(0, 2) == '0x') {
        s = s.substr(2);
    }
    s = s.replace(/^ +| +$/g, '');

    var n;
    var matches = s.match(regexps[base]);
    if (!matches) {
        n = NaN;
    }
    else {
        n = parseInt(matches[1] + '0' + matches[2], base);
        if (matches[3] && matches[3].length >= 2) {
            n += (matches[1] == '-' ? -1 : +1) * parseInt(matches[3].substr(1), base) / Math.pow(base, matches[3].length - 1);
        }
    }
    // FIXME: check for invalid characters, that are silently ignored by parseInt()
    var bases = [2, 8, 10, 16];
    for (var i = 0; i < bases.length; i++) {
        if (bases[i] != base) {
            var output;
            if (isNaN(n)) {
                output = '';
            } else if (16.25.toString(16) == '10.4') {
                // Opera 9 does not support toString() for floats with base != 10
                output = n.toString(bases[i]);
            } else {
                output = (n > 0 ? Math.floor(n) : Math.ceil(n)).toString(bases[i]);
                if (n % 1) {
                    output += '.' + Math.round((Math.abs(n) % 1) * Math.pow(bases[i], 8)).toString(bases[i]);
                    output = output.replace(/0+$/, '');
                }
            }
            document.getElementById('base' + bases[i]).value = output.toUpperCase();
        }
    }
}

window.onload = function () {
    var base10 = document.getElementById('base10');
    base10.value = 100;
    numberOnInput(base10);
}

function alarm1() {
    var none = document.getElementById("base 10").value;
    var flag = false;
    while (none != 0) {
        var a = none % 10;
        none = parseInt(none / 10);
        if ((a == 1) && (a == 2) && (a == 3) && (a == 4) && (a == 5) && (a == 6) && (a == 7) && (a == 8) && (a == 9))
            flag = false;
        else
            flag = true;
    }
    if (flag == true)
        document.getElementById("done1").innerHTML = "You can only use numbers 0..9!"
}
alarm1();

function alarm3() {
    var none = document.getElementById("base8").value;
    var flag = false;
    while (none != 0) {
        var a = none % 10;
        none = parseInt(none / 10);
        if ((a == 1) && (a == 2) && (a == 3) && (a == 4) && (a == 5) && (a == 6) && (a == 7))
            flag = false;
        else
            flag = true;
    }
    if (flag == true)
        document.getElementById("done3").innerHTML = "You can only use numbers 0..7!";
    else
        document.getElementById("done3").innerHTML = "";
}
alarm3();

function alarm4() {
    var none = document.getElementById("base2").value;
    var flag = false;
    while (none != 0) {
        var a = none % 10;
        none = parseInt(none / 10);
        if ((a != 0) || (a != 1))
            flag = true;
        else
            flag = false;
    }
    if (flag == true)
        document.getElementById("done4").innerHTML = "You can only use numbers 0 and 1!";
    else
        document.getElementById("done4").innerHTML = "";
}
alarm4();