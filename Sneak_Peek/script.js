login = true;
log_in ="<div class=center_form><form method='POST' action='index.php'><h1  style='font-family: Impact, Charcoal, sans-serif;'>LOG IN</h1><label style='font-family: Impact, Charcoal, sans-serif; font-size:20px;' for='email'>Email</label><input type='email' name='em' placeholder='email' required ><label style='font-family: Impact, Charcoal, sans-serif; font-size:20px;' for='password'>Password</label><input type='password' name='psw' placeholder='password' required><input type='submit' style='font-family: Impact, Charcoal, sans-serif; font-size:20px;' class='sign_up' value='Log in'></form>";
sign_up ="<div class=center_form><form method='POST' action='index.php'><h1 style='font-family: Impact, Charcoal, sans-serif;'>SIGN UP</h1><div class='wrapper'><div class='item1'><label style='font-family: Impact, Charcoal, sans-serif; font-size:20px;' for='nome'>Nome</label><input type='text' name='nome' placeholder='nome' required autocomplete='off'></div><div class='item2'><label style='font-family: Impact, Charcoal, sans-serif; font-size:20px;' for='cognome'>Cognome</label><input type='text' name='cognome' placeholder='cognome' required autocomplete='off'></div><div class='item3'><label style='font-family: Impact, Charcoal, sans-serif; font-size:20px;' for='email'>Email</label><input type='email' name='email' placeholder='email' autocomplete='off' required></div><div class='item4'><label style='font-family: Impact, Charcoal, sans-serif; font-size:20px;' for='password'>Password</label><input type='password' name='password' placeholder='password' required autocomplete='off'></div><div class='item5' ><label style='font-family: Impact, Charcoal, sans-serif; font-size:20px;' for='username'>Username</label><input type='text' name='text' placeholder='text' required autocomplete='off'></div><div class='item6'><label style='font-family: Impact, Charcoal, sans-serif; font-size:20px;' for='data'>Data di nascita</label><input type='date' name='data' placeholder='data di nascita' required autocomplete='off'></div><div class='item7'><input type='submit' style='font-family: Impact, Charcoal, sans-serif; font-size:20px;' class='sign_up' value='Sign up'></div></div></form>";

b_signup="";
b_signin="";

if(login) document.getElementById("form").innerHTML = log_in;
else document.getElementById("form").innerHTML = sign_up;

document.getElementById('Log_in').onclick = () => {
    if (login) login = false 
    else login = true
    Change(login)
}

function Change(login){
    if(login){
        document.getElementById('form').innerHTML = log_in;
        document.getElementById("Log_in").innerHTML = "<i class='bi bi-box-arrow-in-left'></i> Login in";
    }
    else{
        document.getElementById("form").innerHTML = sign_up;
        document.getElementById("Log_in").innerHTML = "<i class='bi bi-box-arrow-in-left'></i> Sign up";
    }
}
//<i class="bi bi-pencil-square"></i>
//<p>Ti sei già registrato? <a href='index.php'>Sign in</a></p></div>
//<p>Non ti sei ancora registrato? <button id='submit' class='button'>SIGN UP</button></p></div>