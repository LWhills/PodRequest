function valid(){
    let email = document.querySelector(".input-email").value;
    let form = document.querySelector("form");
    let text  = document.querySelector(".text-confirmation");
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    

    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML =("Email Valid");
        text.style.color = "green";
    }
    else if(email == ""){
        form.classList.remove("invalid");
        form.classList.remove("valid");
        text.innerHTML = ("It's empty. Please fill up your e-mail adress.");
        text.style.color = "red";
    }
    else{
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML = ("Oops ! Please check your email");
        text.style.color = "red";
    }
}
function fillup(){
    let text  = document.querySelector(".text-confirmation");
    text.innerHTML =("");
}
