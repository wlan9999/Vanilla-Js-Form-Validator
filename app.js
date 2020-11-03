var form = document.querySelector("#form");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var password2 = document.querySelector("#password2");

// showing error
function showError(input, message) {
  const fomrControl = input.parentElement;
  fomrControl.className = "form-control error";
  const small = fomrControl.querySelector("small");
  small.innerHTML = message;
}

// shwng success
function showSuccess(input) {
  const fomrControl = input.parentElement;
  fomrControl.className = "form-control success";
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value.length === 0){
        checkRequired([input]);
    }else
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input, "Email is not valid");
    }
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getInputField(input)} is required`);
        } else{
            showSuccess(input)
        }
    })
}

function checkLength(input, min, max){
    if(input.value.length === 0){
        checkRequired([input]);
    }
    else if(input.value.length > 0 &&  input.value.length < min){
        showError(input, `${getInputField(input)} must include ${min} characters`);
    }
    else if(input.value.length > max){
        showError(input, `${getInputField(input)} ${max}ta belgidan ortiq bolish mumkin emas`);
    }
    else{
        showSuccess(input);
    }
}

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords don't match");
    }
}

function getInputField(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//form.addEventListener("submit", function (e) {
//  e.preventDefault();
//
//    checkRequired([username, email, password, password2]);
//    checkLength(username, 3, 25);
//    checkLength(password, 6, 15);
//    checkEmail(email);
//    checkPasswordsMatch(password, password2);
//});


form.addEventListener("blur", function (e){
  e.preventDefault();
    
    checkRequired([document.querySelector(`#${e.target.id}`)]);
//    e.target.value.length > 0 && checkLength(username, 3, 25);
//    e.target.value.length > 1 && checkLength(password, 6, 15);
//    if(e.target.id==='username'){
//        console.log('gggg')
//    }
//  
 e.target.id === 'username' && checkLength(username, 3, 25);
   e.target.id === 'password' && checkLength(password, 6, 15);
    e.target.id === 'email' && checkEmail(email);
    
    
    
}, true)
