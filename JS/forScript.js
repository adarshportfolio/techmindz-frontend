function fortable(value) {
    let table = "";
    let val= "";
    for(var i=1; i<=10; i++){
        val =value * i;
        table += val+"<br>"
    }
    document.getElementById("paratable").innerHTML=table;
}