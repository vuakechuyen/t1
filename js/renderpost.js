/* "use strict"; */
var postContainers=document.querySelectorAll(".post_container")
/* var x=postContainers[0].querySelector(".details_post"); */
var $=document.querySelector.bind(document)
var $$=document.querySelectorAll.bind(document)

//render posts
fetch("http://localhost:3000/posts")
.then(function(x1){
    return x1.json();
})
.then(function(posts){
    let index=posts.length-1;
    postContainers.forEach(function(x){
        x.setAttribute("data-address",posts[index].id)
        let imgPost=x.querySelector(".img_post")
        let detailPost=x.querySelector(".details_post")
        let titlePost=x.querySelector(".post_title")
        let namePost=x.querySelector(".post_name")
        let timePost=x.querySelector(".post_time")
        let extraPost=x.querySelector(".post_extra")
        imgPost.src=posts[index].img
        titlePost.innerText=posts[index].title.toUpperCase();
        namePost.innerText=posts[index].name[0].toUpperCase()+posts[index].name.slice(1)
        timePost.innerText=posts[index].time
        extraPost.innerText=posts[index].extra
        index--;
    })
    return posts;
})
.then(res=>{
    callback(res)
    popularPostRender(res)
})


export function getRandomArray(max, quantity) {
    let array = [];
    while (array.length < quantity) {
      let randomNum = Math.floor(Math.random() * max);
      if (!array.includes(randomNum)) {
        array.push(randomNum);
      }
    }
    return array;
  }
export function popularPostRender(x){
    let popularPostElement=$$('.popular_post')
    let randomArr=getRandomArray(x.length,popularPostElement.length)
    popularPostElement.forEach((element,index)=>{
        
        element.setAttribute("data-address",x[randomArr[index]].id)
        element.querySelector('.popular_post-img').setAttribute("src",`${x[randomArr[index]].img}`)
        element.querySelector('.popular_post-name').innerText=x[randomArr[index]].name
        element.querySelector('.post_time').innerText=x[randomArr[index]].time

    })
} 
/* export default {getRandomArray,popularPostRender} */
//render slides
var slides=document.querySelectorAll(".slide")
function renderSlide(who,start,postsPackage){
    let index=start
    let slideList=who.querySelectorAll(".slide_container")
    slideList.forEach(function(x){
        x.setAttribute("data-address",postsPackage[index].id)
        x.querySelector("img").src=postsPackage[index].img
        x.querySelector(".post_title").innerText=postsPackage[index].title.toUpperCase()
        x.querySelector(".slide_name").innerText=(postsPackage[index].name[0].toUpperCase()+postsPackage[index].name.slice(1))
        x.querySelector(".post_time").innerText=postsPackage[index].time
        index--
    })
        
}
function callback(xx){
    renderSlide(slides[0],xx.length-1,xx)
    renderSlide(slides[1],xx.length-2,xx)
    renderSlide(slides[2],xx.length-3,xx)
}



/* $$('post_container') */
postContainers.forEach(function(c){
    c.addEventListener("click",function(){
        const address=this.getAttribute("data-address")
        window.location.href = `detail.html?address=${address}`; 
    })
})
$$('.slide_container').forEach(function(c){
    c.addEventListener("click",function(e){
        const address=this.getAttribute("data-address")
        window.location.href = `detail.html?address=${address}`; 
    })
})
$$('.popular_post').forEach(function(c){
    c.addEventListener("click",function(){
        const address=this.getAttribute("data-address")
        window.location.href = `detail.html?address=${address}`; 
    })
})



