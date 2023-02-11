
const urlParams = new URLSearchParams(window.location.search);
const address = urlParams.get("address");
var $=document.querySelector.bind(document)
var $$=document.querySelectorAll.bind(document)
import {getRandomArray,popularPostRender} from "./renderpost.js";
  fetch("https://my-json-server.typicode.com/vuakechuyen/t1/posts")
  .then(res=>res.json())
  .then(data=>{
    popularPostRender(data)
    $('.post_name').innerText=data[address].name
    $('.post_title').innerText=data[address].title.toUpperCase()
    $('.post_time').innerText=data[address].time
    $('.img_detail').setAttribute("src",data[address].img)
    $('.extra_detail').innerText=data[address].extra
    $('.content_post').innerText=data[address].content
   /*  html=`
    <h2>${}</h2>
    <span>${data[address].title}</span><br>
    <span>${data[address].time}</span><br>
    <img class="img_post " src="${data[address].img}"></img>
    <p>${data[address].content}</p>
    <p>${data[address].extra}</p>`
    $('#post_blog').innerHTML=html
    console.log(data[address]) */
  })
  /* function getRandomArray(max, quantity) {
    let array = [];
    while (array.length < quantity) {
      let randomNum = Math.floor(Math.random() * max);
      if (!array.includes(randomNum)) {
        array.push(randomNum);
      }
    }
    return array;
  }
function popularPostRender(x){
    let popularPostElement=$$('.popular_post')
    let randomArr=getRandomArray(x.length,popularPostElement.length)
    popularPostElement.forEach((element,index)=>{
        
        element.setAttribute("data-address",x[randomArr[index]].id)
        element.querySelector('.popular_post-img').setAttribute("src",`${x[randomArr[index]].img}`)
        element.querySelector('.popular_post-name').innerText=x[randomArr[index]].name
        element.querySelector('.post_time').innerText=x[randomArr[index]].time

    })
}  */
