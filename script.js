function dis(val) {
    document.getElementById("result").value+=val
}

function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

function clr () {
    document.getElementById("result").value = "" 
}

function del() {
    let p = document.getElementById("result").value;
    let r = p.toString().slice(0, -1);
    document.getElementById("result").value = r;
}