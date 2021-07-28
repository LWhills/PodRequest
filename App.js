
function emailVerification(){
let email = document.querySelector('.input-email').value;
let submit = document.querySelector('.input-submit');
let text = document.querySelector('.email-validation')
let template = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(template)){
      text.innerHTML = "Your E-mail is valid"
      text.style.color ="green";
  }
  else if (email == ""){
      text.innerHTML = "It's empty, fill up your E-mail adress please."
      text.style.color ="red";
  }
  else{
      console.log("NotOk")
      text.innerHTML = "Oops! please check your E-mail"
      text.style.color ="red";
  }
}
  
