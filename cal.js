function done6() {
    // input
    var first = document.getElementById("firstnumber").value;
    var second = document.getElementById("secondnumber").value;
    var to_tal = first * (100 - second) / 100;
    document.getElementById("firstnumber").innerHTML = first;
    document.getElementById("secondnumber").innerHTML = second;
    document.getElementById("total6").innerHTML = to_tal;
}
done6();

function remove6() {
    document.getElementById("myForm6").reset();
    total6.remove();
    const tot = document.createElement('h3');
    tot.id = "total6";
    document.getElementById("final6").appendChild(tot);
}