let int = document.getElementsByClassName('int')[0];
let bnt = document.getElementsByClassName('bnt');
let div2 = document.getElementsByClassName('div2')[0];
const arr = [];
function cir(){
    document.getElementsByClassName("div2")[0].innerHTML = ""
    for(i = 0; i < arr.length; i++) {
        var div = document.createElement('div');
        div.style.height =arr[i] + "px" ;
        div.style.width = "50px";
        div.style.marginLeft = "20px";
        div.style.textAlign = "center"
        div.style.background="#CC9933"
        div.innerHTML= arr[i];
        div2.appendChild(div);
    }   
}
 bnt[0].onclick = function(){
    arr.unshift(int.value)
    cir();
}
bnt[1].onclick = function(){ 
    arr.push(int.value)
    cir();
}
bnt[2].onclick = function(){
    arr.shift()
    cir()
}
bnt[3].onclick = function(){
    arr.pop()
    cir()
}
bnt[4].onclick = function () {
     var len = arr.length;
     for (var i = 0; i < len-1; i++) {
       for (var j = 0; j < len - 1 - i; j++) {
           if (arr[j] > arr[j + 1]) {
               var temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
           }
       }
     }cir()
   }
bnt[5].onclick = function(){
     document.getElementsByClassName("div2")[0].innerHTML =""
}
bnt[6].onclick = function(){arr.push(Math.floor(Math.random()*91+10))
cir()}