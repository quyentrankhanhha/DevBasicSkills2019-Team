function done5() {
    var min = document.getElementById("min").value;
    var min = parseInt(Math.floor(min, 10));
    var max = document.getElementById("max").value;
    var max = parseInt(Math.floor(max, 10));
    var random = document.getElementById("numb").value;
    var random = parseInt(Math.floor(random, 10));
    if (min >= max)
        document.getElementById("total5").innerHTML = "Try another number!"
    else {
        for (var i = 0; i < random; i++) {
            var n = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(n);
            var node = document.createElement("h3");
            var textnode = document.createTextNode(n);
            node.appendChild(textnode);
            document.getElementById("total5").appendChild(node);
        }
    }
}
done5();

function remove5() {
    document.getElementById("myForm5").reset();
    total5.remove();
    const tot = document.createElement('h3');
    tot.id = "total5";
    document.getElementById("final5").appendChild(tot);
}





