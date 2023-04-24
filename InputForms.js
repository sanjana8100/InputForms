const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
    textError.textContent="";
    else textError.textContent="name is incorrect"
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let emailRegex = RegExp('^[0-9a-zA-Z]+([+.-]([a-z0-9A-Z]+))*[@][a-zA-Z0-9]+[.][a-z]{2,4}[,]?([.][a-z]{2,4})?$');
    if(emailRegex.test(email.value))
    emailError.textContent="";
    else emailError.textContent="Not a valid Email"
})

const number = document.querySelector('#number')
const numberError = document.querySelector('.number-error')
number.addEventListener('input',function(){
    let numberRegex = RegExp('^[0-9]{2,}[0-9]{10,}$')
    if(numberRegex.test(number.value))
    numberError.textContent="";
    else numberError.textContent="Check your phone number"
})

const pwd = document.querySelector('#pwd');
const pwdError = document.querySelector('.pwd-error');
pwd.addEventListener('input', function() {
let pass = RegExp('^[A-Z a-z]{8}$')
if (pass.test(pwd.value))
    pwdError.textContent = "";
  else
    pwdError.textContent = "Wrong password";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;
});