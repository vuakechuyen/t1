function showToasts(messageColor,messageType,messageContent){
    const toast=document.querySelector(messageColor)
    toast.style.display="block"
    toast.querySelector(".toast__type").innerText=messageType
    toast.querySelector(".toast__message").innerText=messageContent
    toast.parentElement.classList.add("trans")
    setTimeout(()=>{
    toast.parentElement.classList.remove("trans")
    toast.style.display="none"
    },3000)
    
}
   