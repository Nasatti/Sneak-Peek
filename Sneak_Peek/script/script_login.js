var login = true;
var log_in = document.getElementById("log_in");
var sign_up = document.getElementById("sign_up");

const psw = document.getElementById("psw");
const btn_psw = document.getElementById("btn_psw");
/*if(login) document.getElementById("form").innerHTML = log_in;
else document.getElementById("form").innerHTML = sign_up;*/
document.getElementById('Log_in').onclick = () => {
    if (login){
        login = false; 
        log_in.style.display = "none";
        sign_up.style.display = "block";
    }
    else{
        login = true
        log_in.style.display = "block";
        sign_up.style.display = "none";
    } 
}
document.getElementById('Sign_up').onclick = () => {
    if (login){
        login = false; 
        log_in.style.display = "none";
        sign_up.style.display = "block";
    }
    else{
        login = true
        log_in.style.display = "block";
        sign_up.style.display = "none";
    } 
}

btn_psw.addEventListener("click", function () {
    if (psw.type === 'password') {
      psw.type = 'text';
      btn_psw.innerHTML = '<i class="bi bi-eye"></i>';
    } else {
      psw.type = 'password';
      btn_psw.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
});
