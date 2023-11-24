const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
cpassword.addEventListener('blur', function() {
    if(password.value !== cpassword.value){
        cpassword.classList.add('error');
    } else{
        cpassword.classList.remove('error');
    }
});