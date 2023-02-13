var login = true;
var log_in = document.getElementById("log_in");
var sign_up = document.getElementById("sign_up");
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
    Change(login)
}

function Change(login){
    if(login){
        document.getElementById("Log_in").innerHTML = "<i class='bi bi-box-arrow-in-left'></i> Sign up";
    }
    else{
        document.getElementById("Log_in").innerHTML = "<i class='bi bi-box-arrow-in-left'></i> Log in";
    }
}
//<i class="bi bi-pencil-square"></i>
//<p>Ti sei già registrato? <a href='index.php'>Sign in</a></p></div>
//<p>Non ti sei ancora registrato? <button id='submit' class='button'>SIGN UP</button></p></div>