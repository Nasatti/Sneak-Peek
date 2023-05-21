var login = true;
var log_in = document.getElementById("log_in");
var sign_up = document.getElementById("sign_up");
var button_login = document.getElementById("button_login");
const psw = document.getElementById("psw");
const btn_psw = document.getElementById("btn_psw");
var Scrollbar = document.getElementById("scrollbar")

var Home = document.getElementById("Home")
var Search = document.getElementById("Search")
var Message = document.getElementById("Message")
var Cart = document.getElementById("Cart")
var Post = document.getElementById("Post")
var Profile = document.getElementById("Profile")

Scrollbar.style.height = window.innerHeight - 150 + 'px'
Scrollbar.style.minHeight = window.innerHeight - 150 + 'px'
Show_Home()

Home.onclick = () => {
    button_login.click()
}
Search.onclick = () => {
    button_login.click()
}
Message.onclick = () => {
    button_login.click()
}
Cart.onclick = () => {
    button_login.click()
}
Post.onclick = () => {
    button_login.click()
}
Profile.onclick = () => {
    button_login.click()
}

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

function Show_Home(){
    $.ajax({
        type: "POST",
        url: "./ajax/watch.php",
        dataType: "json",
        //processData: false,
        success: function (response) {
            var jsonData = response
            console.log(jsonData)
            for (let i = 0; i < response.length; i++) {
                var id = jsonData[i]['id']
                var usern = jsonData[i]['username']
                var img = jsonData[i]['foto']
                var modello = jsonData[i]['marca']
                var data = jsonData[i]['data']
                var descrizione = jsonData[i]['descrizione']
                var hashtag = jsonData[i]['hashtag']
                var vendita = jsonData[i]['vendita']

                var img = document.createElement("img")
                var div = document.createElement("div")
                var div_action = document.createElement("div")
                var div_info = document.createElement("div")
                var div_descr = document.createElement("div")
                var descr = document.createElement("p")
                var mod = document.createElement("p")
                var data_post = document.createElement('p')
                var a = document.createElement("button")
                var button_heart = document.createElement("button")
                var button_prefer = document.createElement("button")
                var button_chat = document.createElement("button")
                var button_report = document.createElement("button")

                div_action.appendChild(button_heart)
                if(vendita == '1')div_action.appendChild(button_prefer)
                div_action.appendChild(button_chat)
                div_action.appendChild(button_report)
                div_info.appendChild(a)
                div_info.appendChild(mod)
                div_info.appendChild(data_post)
                div_descr.appendChild(descr)
                div.appendChild(div_info)
                div.appendChild(img)
                div.appendChild(div_action)
                div.appendChild(div_descr)
                
                document.getElementById("contents").appendChild(div)

                div.className = "image_post"
                div_info.className = 'div_info'
                div_descr.className = 'div_descr'
                img.className = "img_post"
                img.id="img" + i
                descr.id = "descr" + i
                mod.id = 'mod' + i
                a.className = "us_post"
                a.className += ' info_left'
                mod.className = 'info_center'
                data_post.className = 'info_right'
                div_action.className = "action"
                button_heart.id = "like" + i
                if(vendita == '1')button_prefer.id = "prefer" + i
                button_chat.id = "chat" + i
                button_report.id = "report" + i
                button_chat.setAttribute('data-bs-toggle', 'modal');
                button_chat.setAttribute('data-bs-target', '#EmailModal');
                div.id = "post_user" + id
                div_action.id = "action" + i
                a.id="Profile_users" + i
                a.value=usern
                button_chat.value = usern
                a.textContent = usern

                img.src = jsonData[i]['foto']
                button_heart.innerHTML = "<i class='bi bi-heart r'></i>"
                if(vendita == '1')button_prefer.innerHTML = "<i class='bi bi-star g'></i>"
                button_chat.innerHTML = '<i class="bi bi-chat b"></i>'
                button_report.innerHTML = '<i class="bi bi-flag z"></i>'
                descr.innerHTML = '<a href="users/"' + usern + '><b>' + usern + ': </b></a><span>' + descrizione + '<b>' + hashtag + '</b></span>'
                mod.innerHTML = '<b>' + modello + '</b>'
                data_post.innerHTML = data
                
                
                document.getElementById("post_user" + id).innerHTML += "<i class='fa-solid fa-heart heart'></i>"
                document.getElementById("contents").innerHTML += "<hr class='border border-danger border-2 opacity-75'>"
                $(document).ready(function(){
                    $('#img' + i).dblclick(function(e){
                        button_login.click()
                    });
                });
                $(document).ready(function(){
                    $('#like' + i).click(function(){
                        button_login.click()
                    });
                });
                if(vendita == '1'){
                    $(document).ready(function(){
                        $('#prefer' + i).click(function(){
                            button_login.click()
                        });
                    });
                }
                $(document).ready(function(){
                    $('#chat' + i).click(function(){
                        button_login.click()
                    });
                });
                
                $(document).ready(function(){
                    $('#report' + i).click(function(){
                        button_login.click()
                        
                    });
                });
                $(document).ready(function(){
                    $('#Profile_users' + i).click(function(){
                        button_login.click()
                    });
                });
            }
        },
        error: function (response) {
            console.log(response)
            console.log("error")
        }
    });
}