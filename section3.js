// clears field of default value - This NOT used here; not conditional
function clearfield(field) {
    field.value = ''
}

// clears field of default value - This is used here; conditional
function clear_field(field) {
    if (field.value == field.defaultValue) {
        field.value = ''
    }
}

function CalcPerm() {
    var n = NPRNCRform.Nval.value;
    var r = NPRNCRform.Rval.value;
    if (n == "" || r == "") {
        alert("Please enter legitimate values");
        NPRNCRform.noPerm.value = "";
    }
    else {

        // NPR
        var f = 1;
        for (var i = 1; i <= n; i++) {
            f = f * i;
        }

        var r1 = n - r;
        var res = 1;

        for (i = 1; i <= r1; i++) {
            res = res * i;
        }
        var res1 = f / res;
        NPRNCRform.noPerm.value = Math.round(res1 * Math.pow(10, 2)) / Math.pow(10, 2);

        // NCR
        f = 1;
        for (i = 1; i <= n; i++) {
            f = f * i;
        }

        r1 = n - r;
        var f1 = 1;
        for (i = 1; i <= r; i++) {
            f1 = f1 * i;
        }
        var f2 = 1;
        for (i = 1; i <= r1; i++) {
            f2 = f2 * i;
        }
        res = f1 * f2;
        res1 = f / res;
        NPRNCRform.noComb.value = Math.round(res1 * Math.pow(10, 2)) / Math.pow(10, 2);

    }

}

function TestInt() {
    var ValidChars = "0123456789"; // test for integers
    //   var ValidChars = "0123456789."; // test for numeric input of any value
    var IsIntNumber = true;
    var Char;

    for (i = 0; i < (NPRNCRform.Nval.value).length && IsIntNumber == true; i++) {
        Char = (NPRNCRform.Nval.value).charAt(i);
        if (ValidChars.indexOf(Char) == -1) {
            alert("This value is not a valid number or not an integer");
            NPRNCRform.Nval.value = "";
            IsIntNumber = false;
        }
    }
    return IsIntNumber;

}

function TestInt1() {
    var ValidChars = "0123456789"; // test for integers
    //   var ValidChars = "0123456789."; // test for numeric input of any value
    var IsIntNumber = true;
    var Char;

    for (i = 0; i < (NPRNCRform.Rval.value).length && IsIntNumber == true; i++) {
        Char = (NPRNCRform.Rval.value).charAt(i);
        if (ValidChars.indexOf(Char) == -1) {
            alert("This value is not a valid number or not an integer");
            NPRNCRform.Rval.value = "";
            IsIntNumber = false;
        }
    }
    return IsIntNumber;
}