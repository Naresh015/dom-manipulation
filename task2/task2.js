function h1(val){
    document.getElementById("in1").value +=val;
}
function func(event){
    if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5' 
    || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' || event.key == '+' || event.key == '-'
    || event.key == '*' || event.key == '/'){
    document.getElementById("in1").value +=event.key;  } 
}
function solve() {
    let x = document.getElementById("in1").value;
    let y = math.evaluate(x);
    document.getElementById("in1").value = y;
}
function clear() {
    document.getElementById("in1").value = "";
}