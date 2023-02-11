//Hàm Validate form @_@

function validation(options){
var form=document.querySelector(options.form)
var ruleList={}
var inputList=form.querySelectorAll('input')

//tạo object bao gồm các key là các selector và các rule tương ứng
options.rules.forEach(function(rule){ 
    var index=rule.selector
     if(Array.isArray(ruleList[index])) {
      ruleList[index].push(rule.test)
      
    } else {
        ruleList[rule.selector]=[rule.test]
    }
})
    //Xử lí event ,check kiểm tra đã hợp lệ hết hay chưa
    inputList.forEach(function(x){
    const errorIcon="<i class=\"fa-solid fa-triangle-exclamation\"></i>"
    var error=x.parentElement.querySelector(options.errorMessage)
    x.onblur=function(){
           let select=(`#${this.id}`)
           let check=true
           ruleList[select].forEach(function(xx){
                !xx()==false ? check=false:{}
                if (!xx()==false) {
                    error.innerHTML=errorIcon+"  "+xx()
                    x.classList.add("error_border")
                }
            })
            if (check==true){
                error.innerHTML=""
                x.classList.remove("error_border")
            }
        }
        x.oninput=function(){
            error.innerHTML=""
            x.classList.remove("error_border")
     }
})
    // hàm validate submit kiểm tra đã hợp lệ hết chưa
    var submit=form.querySelector(options.submitButton)
    submit.addEventListener("click",function(){
        inputList.forEach(function(xxx){
            xxx.onblur()
        })
    })
    


}



//list các hàm kiểm tra,trả về 1 object có 1 key là selector 1 key là hàm test trả về message
validation.isRequire=function(selector,message){
    var username=document.querySelector(selector)
    return {
        selector:selector,
        test:function(){
            return username.value ? undefined :message || "Đây là trường bắt buộc !"
        }
    }
}
validation.isEmail=function(selector,message){
    var email=document.querySelector(selector)
    var emailregex=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return  {
        selector:selector,
        test:function(){
            return emailregex.test(email.value) ? undefined :message || "Đây phải là email !"
            
        }
    }
    
}
validation.isMin=function(selector,min,message){
    let pass=document.querySelector(selector)
    return  {
        selector:selector,
                test:function(){
                    return  (pass.value.length>=min) ? undefined : message || `Mật khẩu phải tối thiểu có  ${min} ký tự !`              
                }
            }
}
validation.isMax=function(selector,max,message){
    let pass=document.querySelector(selector)
    return  {
                selector:selector,
                test:function(){
                    return  (pass.value.length<=max) ? undefined : message || `Mật khẩu tối đa có  ${max} ký tự !`              
                }
            }
        }
validation.isConfirmPassword=function(selector,getValue,message){
    var confirmPwd=document.querySelector(selector)
    return  {  
        selector:selector,
        test:function(){
            return  confirmPwd.value===getValue() ? undefined :message || `Mật khẩu phải giống nhau !`
        }
    }
}

//Thực thi hàm
