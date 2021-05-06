function getpara () {
    var inputs= []
    for (var i=1;i<=6;i++) {
        inputs.push(document.getElementById ("t"+i).value)
        document.getElementById ("para").innerHTML=inputs.join(".")

    }

}