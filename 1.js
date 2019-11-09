//作业1
let nav = document.getElementsByClassName('nav')[0];
let item = document.getElementsByClassName('item');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
console.log(nav);
li1.innerHTML='首页';
nav.insertBefore(li1,item[0]);
li2.innerHTML = '关于';
nav.appendChild(li2);
item[2].innerHTML = '文章';
nav.removeChild(item[1]);

// 作业2
// 1 
function demo(){
document.getElementsByClassName('button1')[0].style.opacity='0.5';
 console.log('我的透明度从0.8变为0.5了')
 } 


// 2

let button2 = document.getElementsByClassName('button1')[1];
button2.onclick=function (){
      button2.style.opacity='0.5'
      console.log('我的透明度从0.8变为0.5了')
}

//作业3
  let cont = document.getElementById("container").children;
  const listArr = ['list1','list2','list3','list4','list5'];
  for(let i = 0; i < listArr.length; i++){
    cont[i].addEventListener("click", function(){
    cont[i].innerHTML=listArr[i]
    },false)
  }
    


  //作业4
  let int = document.getElementsByClassName('int')[0];
  let btn = document.getElementsByClassName('btn')
  let ul1 = document.getElementsByClassName('ul1')[0];
    btn[0].onclick=function(){
    let lim = document.createElement('li');
    lim.innerHTML = int.value; 
    ul1.appendChild(lim)
  }
  btn[1].onclick=function(){
  ul1.removeChild(ul1.children[0])}

  btn[2].onclick=function(){
    let lim = document.createElement('li');
    lim.innerHTML = int.value; 
  ul1.replaceChild(lim,ul1.children[0])}