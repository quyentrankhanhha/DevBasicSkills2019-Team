function calculate() {
    var selectInput = document.getElementById("type1");
    var resultInput = document.getElementById("type2");
    var n = document.getElementById("n").value;
    var baseNumber;
    if (selectInput.options[selectInput.selectedIndex].value == "binary") {
        baseNumber = 2;
    }
    else if (selectInput.options[selectInput.selectedIndex].value == "decimal") {
        baseNumber = 10;
    }
    else if (selectInput.options[selectInput.selectedIndex].value == "octal") {
        baseNumber = 8;
    }
    else if (selectInput.options[selectInput.selectedIndex].value == "hexadecimal") {
        baseNumber = 16;
    }
    else {
        //error
    }
    var digitDecimal = parseInt(n, baseNumber);
    var digitFinal;
    if (resultInput.options[resultInput.selectedIndex].value == "binary") {
        digitFinal = digitDecimal.toString(2);
    }
    else if (resultInput.options[resultInput.selectedIndex].value == "octal") {
        digitFinal = digitDecimal.toString(8);
    }
    else if (resultInput.options[resultInput.selectedIndex].value == "hexadecimal") {
        digitFinal = digitDecimal.toString(16);
    }
    else {
        digitFinal = digitDecimal;
    }
    document.getElementById("result").innerHTML = digitFinal;

    var digitDecimal = parseInt(n, baseNumber);
    var digitFinal;

    if (!isNaN(digitDecimal)) {

    }
    else {
        alert("Your number does not belong to  " + selectInput.options[selectInput.selectedIndex].value + " numbers ");
    }
}