var cnt=0;
var y='tıkla';
var colors=["red","blue","green","yellow","white","orange"];
document.getElementById('my_button').innerHTML=y;
document.getElementById('my_text').innerHTML=cnt;
console.log(colors[0]);
document.getElementById('red').addEventListener('click',function(){
    document.getElementById('my_button').style.backgroundColor="red";
});
document.getElementById('blue').addEventListener('click',function(){
    document.getElementById('my_button').style.backgroundColor="blue";
});
document.getElementById('green').addEventListener('click',function(){
    document.getElementById('my_button').style.backgroundColor="green";
});
document.getElementById('yellow').addEventListener('click',function(){
    document.getElementById('my_button').style.backgroundColor="yellow";
});
document.getElementById('white').addEventListener('click',function(){
    document.getElementById('my_button').style.backgroundColor="white";
});
document.getElementById('orange').addEventListener('click',function(){
    document.getElementById('my_button').style.backgroundColor="orange";
});
document.getElementById('my_button').addEventListener('click',function(){
    cnt++;
    document.getElementById('my_text').textContent=cnt;
});
document.getElementById('reset_button').addEventListener('click',function(){
    cnt=0;
    document.getElementById('my_text').textContent=cnt;
});