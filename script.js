function validate(){
    let name = document.getElementById("names").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.querySelector(".error_message");

    error_message.style.padding = "10px";
    // error_message.style.border = "1px solid red";

    let text;
    const pattern1 = /\+380\(\d{2}\)\d{3}-\d{2}-\d{2}/
    const pattern2 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if(name.length<5){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length<10){
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }
    if(phone.match(pattern1)==null){
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if(email.match(pattern2)==null || email.length<6){
        text = "Please Enter valid E-mail";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length<=100){
        text = "Please Enter More than 100 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}