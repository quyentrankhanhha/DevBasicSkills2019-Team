var n = 102;
while (n != 0) {
    var flag = false;
    var a = n % 10;
    n = parseInt(n / 10);
    if ((a != 0) || (a != 1))
        flag = true;
    else
        flag = false;
}
console.log(flag);
