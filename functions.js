

let showbtn=document.getElementById("showbtn");
let password=document.getElementById("paswrd");

showbtn.onclick=function(){
if(password.type =="password"){
  password.type="text";
  password.style.border="0";
  password.style.outline="0";
  password.style.fontSize="18px";
  password.style.overflow="hidden";
  password.style.flex="1";
  password.style.background="transparent";
  password.style.marginLeft="10px";
  showbtn.innerHTML="Hide";
}else{
  password.type="password";
  showbtn.innerHTML="Show";
}
}
