const myForm = document.getElementById('myform');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequired([username,email,password,password2])
  checkLength(username,3,16);
  checkLength(password,6,25)
  checkLength(password2,6,25)
  checkEmail(email)
  checkSamePassword(password,password2);
})
function checkSamePassword(password,password2){
  if(password.value != password2.value){
   showError(password2,'password is not equal!')
  }
}
function checkLength(input,min,max){
  if(input.value.length < max && input.value.length > min) {
    showSuccess(input)
  }else if(input.value.length != 0){
    showError(input,'Lengh must be beetwen ' + min +  ' and ' + max);
  }
}
function checkRequired(inputArray) {
  for(let i=0;i<inputArray.length;i++) {
    if(inputArray[i].value === ''){
      showError(inputArray[i],`${getFieldName(inputArray[i].id)} is required!!`)
    }else{
      showSuccess(inputArray[i]);
    }
  }
}

function getFieldName(input) {
  return input[0].toUpperCase() + input.slice(1);
}
function showError(input, error) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error'
  const msg = formControl.querySelector('small');
  msg.innerText = error;
}

function checkEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(String(email.value).toLowerCase())){
    showSuccess(email);
  }else{
    showError(email,'Email is not valid');
  }
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}