
//post data len api
function postData(url,data){
    let option={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
    fetch(url,option)
    .then(function(reply){
        return reply.json();
    })
    .then(function(){
        showToasts(".toast--green","Thành công","Đã đăng ký thành công !")
        
    })
    .catch(function(){
        showToasts(".toast--red","Thất bại","Xảy ra lỗi hệ thống !")
       })
        }
            
//chạy kiểm tra các mục đăng ký nếu ok thì post len api
//xử lý đăng ký
var registerHandle=function(selector){
    var registerBtn=document.querySelector(selector);
    registerBtn.addEventListener("click",function(){
        let check=true;
        this.parentElement.parentElement.querySelectorAll("input").forEach(function(x){
            if(x.parentElement.querySelector("span[class=msgError]").textContent!=false) {check=false;
            }
        });
        
        if (check==true){
            postData("http://localhost:3000/comments",{
                userName:document.querySelector("[name=username]").value,
                email:document.querySelector("[name=email").value,
                password:document.querySelector("[name=password").value
            });}
        if (check==false){
             showToasts(".toast--yellow","Cảnh báo","Vui lòng hoàn thành các mục !")    
            }
     

    });
}
//xử lý đăng nhập
var loginHandle=function(selector){
    var loginBtn=document.querySelector(selector);          
    loginBtn.addEventListener("click",function(){
        let check=true;
        let emailValue=this.parentElement.parentElement.querySelector("input[name=email]").value;
        let passWordValue=this.parentElement.parentElement.querySelector("input[name=password]").value;
        
        this.parentElement.parentElement.querySelectorAll("input").forEach(function(x){
            if(x.parentElement.querySelector("span[class=msgError]").textContent!=false) {check=false;
            }
        });
        
        if (check==true){
            fetch("http://localhost:3000/comments")
                .then(function(dat){
                    return dat.json();
                })
                .then(function(users){
                    let kt=false;
                    users.forEach(function(user){
                        if ((user.email===emailValue)&&(passWordValue===user.password)){
                                kt=true;
                                        showToasts(".toast--green","Thành công","Đã đăng nhập thành công !")
                                return;
                            }
                        })
                    if (kt==false){
                        showToasts(".toast--yellow","Cảnh báo","Đăng nhập chưa thành công,xin kiểm tra lại !")
                    }    
                    
                })
               /*  .catch(function(){
                    showToasts(".toast--red","Thất bại","Xảy ra lỗi hệ thống !")
                }) */
        }
        /* if (check==false){
            showToasts(".toast--yellow","Cảnh báo","Vui lòng hoàn thành các mục !")
               
           } */
    }); 
    }
var eyes=document.querySelectorAll(".eye") 
    eyes.forEach(function(x){
        x.onclick=function(){
            this.parentElement.classList.toggle("user_check")
            if (this.parentElement.querySelector("input").getAttribute("type")==="password") { 
                this.parentElement.querySelector("input").removeAttribute("type","password")
                this.parentElement.querySelector("input").setAttribute("type","text")
            }
            else {
                this.parentElement.querySelector("input").removeAttribute("type","text")
                this.parentElement.querySelector("input").setAttribute("type","password")
        }
            
        }
    })
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

