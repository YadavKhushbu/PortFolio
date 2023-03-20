function show() {
    document.getElementById('scritta').className = 'visiblediv';
    document.getElementById('p1').className = 'hiddendiv';
}

function hide() {
    document.getElementById('scritta').className = 'hiddendiv';
    document.getElementById('p1').className = 'visiblediv';
}
var p1 = document.getElementById("p1");
p1.onclick = show;
var p2 = document.getElementById("p2");
p2.onclick = hide;