let a=document.getElementById("p1");
a.onmouseover=function () {
    a.style.color="red";
}
a.onmouseout=function(){
    a.style.color="black";
}
let b=document.getElementById("b1");
b.onmouseover=function(){
    b.innerHTML="changed";
}
b.onmouseout=function(){
    b.innerHTML="unchanged";
}
function content() {
    var p=document.getElementById("p1");
    var i=document.getElementById("i1");
    p.innerHTML=i.value;
}

function h1(li){
    var l=document.getElementById(li);
    l.style.color="red" ;
    l.style.fontWeight="Bold";
}
function h2(li){
    var u=document.getElementById(li);
    u.style.color="black";
    u.style.fontWeight="normal";
}