var $=document.querySelector.bind(document)
var $$=document.querySelectorAll.bind(document)
var postBtn=$('#post_btn')
var cancelBtn=$('#cancel_btn')

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
postBtn.addEventListener('click',()=>{
    console.log($('#in_content').value)
    postData("http://localhost:3000/posts",{
        content:$('#in_content').value,
        name:$('input[name=name]').value,
        title:$('select[name=title]').value,
        img:$('input[name=image]').value,
        time:$('input[name=time]').value,
        extra:$('input[name=extra]').value    
    })

})
/* var appId="902633510885859";
var appSecret="560f782cee1995082069877624ae3fa2";
var token="";

fetch(`https://graph.facebook.com/v10.0/oauth/access_token?client_id=${appId}&client_secret=${appSecret}&grant_type=client_credentials`)
  .then(response => response.json())
  .then(data => {
    const accessToken = data.access_token;
    cb(accessToken)
  })
  .catch(error => {
    console.error(error);
  });

  function cb(x){
    console.log(x)
   fetch(`https://graph.facebook.com/lemaihoanguser?fields=id,name,about,picture&access_token=${x}`)
  .then(response => response.json())
  .then(data => console.log(data))
  }
 */
function log(x,l="log"){
    console[l](x)
}
log(2,"warn")