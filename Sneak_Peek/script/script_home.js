var search = document.getElementById("search")
var message = document.getElementById("message")
var cart = document.getElementById("cart")
var post = document.getElementById("post")
var profile = document.getElementById("profile")
var content = document.getElementById("contents")
var profile_users = document.getElementById("profile_users")

var Home = document.getElementById("Home")
var Search = document.getElementById("Search")
var Message = document.getElementById("Message")
var Cart = document.getElementById("Cart")
var Post = document.getElementById("Post")
var Profile = document.getElementById("Profile")

var viewpost = document.getElementById('profile_viewpost')
var profile_like = document.getElementById('profile_like')

var title = document.getElementById("titolo")
var search_box = document.getElementById("search_box")
var inputElement = document.getElementById('searchbar')
var next_post = document.getElementById("Next")
var back_post = document.getElementById("Back")

var menu = document.getElementById("menu")
var main = document.getElementById("main")


var div_post = document.getElementById("div_post")
var PostModal = document.getElementById("PostModal")
var Scrollbar = document.getElementById("scrollbar")
var header = document.getElementById("header")

var modifica = document.getElementById("Modifica")

var scelta = 1

Scrollbar.style.height = window.innerHeight - 1 + 'px'
Scrollbar.style.minHeight = window.innerHeight - 1 + 'px'
console.log(Scrollbar.style.height)
div_post.style.width="450px"
div_post.style.left="0px"
menu.style.width = "200px"
search_box.style.left="-100px"
title.style.left="0px"
Show_Home()

var sea = false;
var next = false;

Home.onclick = () => {
    cart.style.display="none"
    header.style.display="grid"
    if(sea)document.getElementById("Search").click()
    content.style.display="block"
    post.style.display="none"
    message.style.display="none"
    profile.style.display="none"
    profile_users.style.display="none"
    Show_Home()
}

function Show_Home(){
    document.getElementById("contents").innerHTML = ""
    $.ajax({
        type: "POST",
        url: "./ajax/watch.php",
        dataType: "json",
        //processData: false,
        success: function (response) {
            var jsonData = response
            for (let i = 0; i < response.length; i++) {
                var id = jsonData[i]['id']
                var usern = jsonData[i]['username']
                var img = jsonData[i]['foto']
                var like = jsonData[i]['piace']
                var prefer = jsonData[i]['prefer']
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

                div_action.appendChild(button_heart)
                div_action.appendChild(button_prefer)
                div_action.appendChild(button_chat)
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
                button_prefer.id = "prefer" + i
                button_chat.id = "chat" + i
                //button_chat.setAttribute('data-bs-toggle', 'modal');
                //button_chat.setAttribute('data-bs-target', '#ChatModal');
                div.id = "post_user" + id
                div_action.id = "action" + i
                a.id="Profile_users" + i
                a.value=usern
                a.textContent = usern

                img.src = jsonData[i]['foto']
                button_heart.innerHTML = "<i class='bi bi-heart r'></i>"
                button_prefer.innerHTML = "<i class='bi bi-star g'></i>"
                button_chat.innerHTML = '<i class="bi bi-chat b"></i>'
                descr.innerHTML = '<a href="users/"' + usern + '><b>' + usern + ': </b></a><span>' + descrizione + '<b>' + hashtag + '</b></span>'
                mod.innerHTML = '<b>' + modello + '</b>'
                data_post.innerHTML = data
                
                $.ajax({
                    type: "POST",
                    url: "ajax/check_like.php",
                    data: {
                        id: id,
                        username: username
                    },
                    dataType: "json",
                    success: function (response) {
                        if (response == false){
                            document.getElementById("like" + i).innerHTML = '<i class="bi bi-heart r"></i>';
                            document.getElementById("like" + i).style.color = "black";
                            inc = false
                        }
                        else{
                            document.getElementById("like" + i).innerHTML = '<i class="bi bi-heart-fill r"></i>';
                            document.getElementById("like" + i).style.color = "red";
                            inc = true
                        }
                    },
                    error: function (response) {
                        console.log(response)
                    }
                });
                $.ajax({
                    type: "POST",
                    url: "ajax/check_prefer.php",
                    data: {
                        id: id,
                        username: username
                    },
                    dataType: "json",
                    success: function (response) {
                        if (response == false){
                            document.getElementById("prefer" + i).innerHTML = '<i class="bi bi-star g"></i>';
                            document.getElementById("prefer" + i).style.color = "black";
                            inc = false
                        }
                        else{
                            document.getElementById("prefer" + i).innerHTML = '<i class="bi bi-star-fill g"></i>';
                            document.getElementById("prefer" + i).style.color = "#CCB48B";
                            inc = true;
                        }
                    },
                    error: function (response) {
                        console.log(response)
                    }
                });

                document.getElementById("post_user" + id).innerHTML += "<i class='fa-solid fa-heart heart'></i>"
                document.getElementById("contents").innerHTML += "<hr class='border border-danger border-2 opacity-75'>"
                $(document).ready(function(){
                    $('#img' + i).dblclick(function(e){
                        
                        // Calculate the x and y position of the double-click event
                        const centerX = e.target.offsetLeft + e.target.width / 2
                        const centerY = (e.target.offsetTop + e.target.height / 2)
                        heart = document.querySelector(".heart")
                        id_post = this.parentNode.id
                        document.getElementById(id_post).appendChild(heart)
                        // Set the position of the heart element using the x and y values
                        heart.style.left = `${centerX}px`
                        heart.style.top = `${centerY}px`
                                       
                        // Add the active class to the heart element to animate it
                        heart.classList.add("active")
                        document.getElementById("like" + i).click()
                        // Remove the active class after 1 second
                        setTimeout(() => {
                          heart.classList.remove("active");
                        }, 1000);
                    });
                });
                $(document).ready(function(){
                    $('#like' + i).click(function(){
                        var inc = true
                        n = this.id.split("like")[1]
                        temp_div = document.getElementById('action' + n)
                        id = temp_div.parentNode.id.split("post_user")[1]
                        if(document.getElementById("like" + i).innerHTML == '<i class="bi bi-heart-fill r"></i>'){
                            document.getElementById("like" + i).innerHTML = '<i class="bi bi-heart r"></i>';
                            document.getElementById("like" + i).style.color = "black";
                            inc = false
                        }
                        else{
                            document.getElementById("like" + i).innerHTML = '<i class="bi bi-heart-fill r"></i>';
                            document.getElementById("like" + i).style.color = "red";
                            inc = true
                        }
                        $.ajax({
                            type: "Post",
                            url: "./ajax/action.php",
                            data: {
                                "action": "like",
                                "id": id,
                                "inc": inc,
                                "username": username
                            },
                            dataType: "json",
                            success: function (response) {
                                console.log(response)
                            },
                            error: function(response){
                                console.log(response)
                            } 
                        });
                        
                    });
                });
                $(document).ready(function(){
                    $('#prefer' + i).click(function(){
                        var inc = true
                        n = this.id.split("prefer")[1]
                        temp_div = document.getElementById('action' + n)
                        id = temp_div.parentNode.id.split("post_user")[1]
                        if(document.getElementById("prefer" + i).innerHTML == '<i class="bi bi-star-fill g"></i>'){
                            document.getElementById("prefer" + i).innerHTML = '<i class="bi bi-star g"></i>';
                            document.getElementById("prefer" + i).style.color = "black";
                            inc = false
                        }
                        else{
                            document.getElementById("prefer" + i).innerHTML = '<i class="bi bi-star-fill g"></i>';
                            document.getElementById("prefer" + i).style.color = "#CCB48B";
                            inc = true;
                        }
                        $.ajax({
                            type: "Post",
                            url: "./ajax/action.php",
                            data: {
                                "action": "prefer",
                                "id": id,
                                "inc": inc,
                                "username": username,
                            },
                            dataType: "json",
                            success: function (response) {
                                console.log(response)
                            },
                            error: function(response){
                                console.log(response)
                            } 
                        });
                    });
                });
                $(document).ready(function(){
                    $('#chat' + i).click(function(){
                        contents.style.display="none"
                        message.style.display="block"
                    });
                });
                $(document).ready(function(){
                    $('#Profile_users' + i).click(function(){
                        username_profile = this.value
                        if(username != username_profile){
                            post.style.display="none"
                            message.style.display="none"
                            header.style.display="none"
                            profile.style.display="none"
                            content.style.display="none"
                            profile_users.style.display="block"
                            
                            $.ajax({//vede se seguivo già l'utente
                                type: "POST",
                                url: "./ajax/profile.php",
                                data: {
                                    "username": username_profile
                                },
                                success: function (response) {
                                    document.getElementById('profile_name_users').innerHTML = username_profile
                                    document.getElementById('profile_img_users').src = response
                                    console.log(username_profile)
                                    $.ajax({
                                        type: "POST",
                                        url: "ajax/check_follow.php",
                                        data: {
                                            follower : username,
                                            followed : username_profile,
                                        },
                                        dataType: "json",
                                        success: function (response) {
                                            if(response=="follow"){
                                                document.getElementById('segui_btn').innerHTML = "Segui già"
                                            }
                                            else{
                                                document.getElementById('segui_btn').innerHTML = "Segui"
                                            }
                                        },
                                        error: function(response){
                                            console.log(response)
                                        }
                                    });


                                    $.ajax({//mostra i post dell'utente
                                        type: "POST",
                                        url: "./ajax/profile_post.php",
                                        data: {
                                            "username": username_profile,
                                            "view": "post",
                                        },
                                        dataType: "json",
                                        success: function (response) {
                                            var foto_profilo = response
                                            var prof_view = document.getElementById('table_user')
                                            prof_view.innerHTML = ""
                                            var table = document.createElement("table")
                                            for (let i = 0; i < foto_profilo.length; i++) {
                                                if(i==0 || i%3==0)var tr = document.createElement("tr")
                                                var td = document.createElement("td")
                                                var button = document.createElement("button")
                                                button.setAttribute("data-bs-toggle", "modal");
                                                button.setAttribute("data-bs-target", "#Profile_post_Modal");
                                                var img = document.createElement("img")
                                                img.src = foto_profilo[i]['foto']
                                                button.appendChild(img)
                                                button.id="pro_b_u" + i
                                                td.appendChild(button)
                                                tr.appendChild(td)
                                                table.appendChild(tr)
                                                table.classList.add("post_profile")
                                                prof_view.appendChild(table)
                                                $(document).ready(function(){
                                                    $('#pro_b_u' + i).click(function(){
                                                        var foto_view = foto_profilo[i]['foto']
                                                        var descrizione_view = foto_profilo[i]['descrizione']
                                                        var data_view = foto_profilo[i]['data']
                                                        var like_view = foto_profilo[i]['piace']
                                                        var prefer_view = foto_profilo[i]['prefer']
                                                        var modello_view = foto_profilo[i]['marca']
                                                        var hashtag_view = foto_profilo[i]['hashtag']
                                                        var vendita_view = foto_profilo[i]['vendita']
                                                    
                                                        var view_header = document.getElementById("view_header");
                                                        var view_body = document.getElementById("view_body");
                                                        var view_descr = document.getElementById("view_descr");
                                                        var view_like_prefer = document.getElementById("view_like_prefer");
                                                        var view_data = document.getElementById("view_data");
                                                    
                                                        view_header.innerHTML = modello_view
                                                        view_data.innerHTML = data_view
                                                        view_body.innerHTML = "<img src='" + foto_view + "' height='400px' width='400px' style='object-fit: cover;'>"
                                                        view_like_prefer.innerHTML = "<p>" + descrizione_view + "<b>" + hashtag_view + "</b>" + "</p>"
                                                        if(vendita_view == 0)view_descr.innerHTML = "<br><p>Like:" + like_view + "</p><p>Prefer:" + prefer_view + "</p>"
                                                        else view_descr.innerHTML = "<br><p>Like:" + like_view + "</p><p>Prefer:" + prefer_view + "</p><button>Compra!</button>"
                                                    });
                                                });
                                            }
                                        },
                                        error: function (response) {
                                            console.log(response)
                                        }
                                    });
                                }
                            });
                        }
                        else{
                            document.getElementById("Profile").click()
                        }
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
Search.onclick = () => {
    post.style.display="none"
    if(!sea){
        document.getElementById('p_home').innerHTML =''
        document.getElementById('p_search').innerHTML=''
        document.getElementById('p_message').innerHTML=''
        document.getElementById('p_cart').innerHTML=''
        document.getElementById('p_post').innerHTML=''
        document.getElementById('p_profile').innerHTML=''

        document.getElementById("list").classList.replace("list", "list_search")
        Home.classList.replace('btn_list', 'btn_list_search')
        Search.classList.replace('btn_list', 'btn_list_search')
        Message.classList.replace('btn_list', 'btn_list_search')
        Cart.classList.replace('btn_list', 'btn_list_search')
        Post.classList.replace('btn_list', 'btn_list_search')
        Profile.classList.replace('btn_list', 'btn_list_search')

        search_box.style.display="flex"

        Move()

    }
    else{
        document.getElementById('p_home').innerHTML ='Home'
        document.getElementById('p_search').innerHTML='Search'
        document.getElementById('p_message').innerHTML='Message'
        document.getElementById('p_cart').innerHTML='Cart'
        document.getElementById('p_post').innerHTML='Post'
        document.getElementById('p_profile').innerHTML='Profile'

        document.getElementById("list").classList.replace("list_search", "list")
        Home.classList.replace('btn_list_search', 'btn_list')
        Search.classList.replace('btn_list_search', 'btn_list')
        Message.classList.replace('btn_list_search', 'btn_list')
        Cart.classList.replace('btn_list_search', 'btn_list')
        Post.classList.replace('btn_list_search', 'btn_list')
        Profile.classList.replace('btn_list_search', 'btn_list')

        search_box.style.display="none"

        Radio1.checked=true
        Radio2.checked=false
        Radio3.checked=false
        Move();
    }
}

Message.onclick = () => {
    header.style.display="grid"
    if(sea)document.getElementById("Search").click();
    post.style.display="none"
    content.style.display="none"
    message.style.display="block"
    profile.style.display="none"
    profile_users.style.display="none"
    cart.style.display="none"
    Show_Message()
}

function Show_Message(){
    document.getElementById("message").innerHTML = ""
    $.ajax({
        type: "POST",
        url: "./ajax/view_chat.php",
        data: {
            "username": username,
        },
        dataType: "json",
        success: function (response) {
            var jsonData = response
            for (let i = 0; i < response.length; i++) {
                var id = jsonData[i]['id']
                var us_mit = jsonData[i]['us_mit']
                var us_dest = jsonData[i]['us_dest']
                var msg = jsonData[i]['msg']
                var data = jsonData[i]['data']

                var div = document.createElement("div")
                var img = document.createElement('img')
                var b_us = document.createElement('button')
                
                div.className = "chat"
                div.id = "chat" + id
                b_us.id = "b_us" + i
                b_us.setAttribute("data-bs-toggle", "modal");
                b_us.setAttribute("data-bs-target", "#chatModal");
                document.getElementById("message").appendChild(div)
                div.appendChild(b_us)
                $.ajax({
                        type: "POST",
                        url: "./ajax/profile.php",
                        data: {
                            "username": us_dest
                        },
                        success: function (response) {
                            // console.log(response)
                            var a1 = document.getElementById("b_us"+i)
                            text = response.split("/")
                            us = text[2]
                            a1.innerHTML="<img class='prof_img' src="+response+" height='50px' width='50px'>" + "<b>" + us + "</b><span>" + msg+"</span>"
                            a1.href = "./users/" + us
                        }
                    });
                
            }
        },
        error: function (response) {
            console.log(response);
        }
    });
}
Cart.onclick = () => {
    header.style.display="grid"
    if(sea)document.getElementById("Search").click();
    post.style.display="none"
    content.style.display="none"
    profile.style.display="none"
    profile_users.style.display="none"
    cart.style.display="block"
    message.style.display="none"
    Show_Cart()
}

function Show_Cart(){
    $.ajax({//mostra i post dell'utente
        type: "POST",
        url: "./ajax/profile_post.php",
        data: {
            "username": username,
            "view": "prefer",
        },
        dataType: "json",
        success: function (response) {
            console.log(response)
            var foto_profilo = response
            var prof_view = document.getElementById('table_cart')
            prof_view.innerHTML = ""
            var table = document.createElement("table")
            for (let i = 0; i < foto_profilo.length; i++) {
                var tr = document.createElement("tr")
                var td1 = document.createElement("td")
                var td2 = document.createElement("td")
                var td3 = document.createElement("td")
                var button_user = document.createElement("button")
                var button = document.createElement("button")
                var button_buy = document.createElement("button")
                var button_remove = document.createElement("button")
                button.setAttribute("data-bs-toggle", "modal");
                button.setAttribute("data-bs-target", "#Profile_post_Modal");
                var img = document.createElement("img")
                img.src = foto_profilo[i]['foto']
                button_user.textContent = foto_profilo[i]['username']
                button_buy.textContent = "Compra!"
                button_remove.textContent = "Rimuovi"
                button_user.classList.add("btn_classic")
                button_buy.classList.add("btn_classic")
                button_remove.classList.add("btn_classic")
                button.appendChild(img)
                button.id="pro_b_u" + i
                button_buy.id="buy" + i
                button_remove.id="remove" + i
                button_user.id="b_user_cart" + i
                button_user.value = foto_profilo[i]['username']
                td1.appendChild(button_user)
                td2.appendChild(button)
                td3.appendChild(button_buy)
                td3.appendChild(button_remove)
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                table.appendChild(tr)
                table.classList.add("post_profile")
                prof_view.appendChild(table)
                $(document).ready(function(){
                    $('#pro_b_u' + i).click(function(){
                        var foto_view = foto_profilo[i]['foto']
                        var descrizione_view = foto_profilo[i]['descrizione']
                        var data_view = foto_profilo[i]['data']
                        var like_view = foto_profilo[i]['piace']
                        var prefer_view = foto_profilo[i]['prefer']
                        var modello_view = foto_profilo[i]['marca']
                        var hashtag_view = foto_profilo[i]['hashtag']
                        var vendita_view = foto_profilo[i]['vendita']
                    
                        var view_header = document.getElementById("view_header");
                        var view_body = document.getElementById("view_body");
                        var view_descr = document.getElementById("view_descr");
                        var view_like_prefer = document.getElementById("view_like_prefer");
                        var view_data = document.getElementById("view_data");
                    
                        view_header.innerHTML = modello_view
                        view_data.innerHTML = data_view
                        view_body.innerHTML = "<img src='" + foto_view + "' height='400px' width='400px' style='object-fit: cover;'>"
                        view_like_prefer.innerHTML = "<p>" + descrizione_view + "<b>" + hashtag_view + "</b>" + "</p>"
                        if(vendita_view == 0)view_descr.innerHTML = "<br><p>Like:" + like_view + "</p><p>Prefer:" + prefer_view + "</p>"
                        else view_descr.innerHTML = "<br><p>Like:" + like_view + "</p><p>Prefer:" + prefer_view + "</p><button>Compra!</button>"
                    });
                });
                $(document).ready(function(){
                    $('#buy' + i).click(function(){

                    });
                });
                $(document).ready(function(){
                    $('#remove' + i).click(function(){
                        var id_foto = foto_profilo[i]['id']
                        console.log(id_foto)
                        $.ajax({
                            type: "POST",
                            url: "ajax/remove_cart.php",
                            data: {
                                "username": username,
                                "id": id_foto,
                            },
                            dataType: "json",
                            success: function (response) {
                                console.log(response)
                                document.getElementById("Cart").click()
                            },
                            error: function (response) {
                                console.log(response)
                            }
                        });
                    });
                });
                $(document).ready(function(){
                    $('#b_user_cart' + i).click(function(){
                        cart.style.display="none"
                        username_profile = this.value
                        if(username != username_profile){
                            post.style.display="none"
                            message.style.display="none"
                            header.style.display="none"
                            profile.style.display="none"
                            content.style.display="none"
                            profile_users.style.display="block"
                            
                            $.ajax({//vede se seguivo già l'utente
                                type: "POST",
                                url: "./ajax/profile.php",
                                data: {
                                    "username": username_profile
                                },
                                success: function (response) {
                                    document.getElementById('profile_name_users').innerHTML = username_profile
                                    document.getElementById('profile_img_users').src = response
                                    console.log(username_profile)
                                    $.ajax({
                                        type: "POST",
                                        url: "ajax/check_follow.php",
                                        data: {
                                            follower : username,
                                            followed : username_profile,
                                        },
                                        dataType: "json",
                                        success: function (response) {
                                            if(response=="follow"){
                                                document.getElementById('segui_btn').innerHTML = "Segui già"
                                            }
                                            else{
                                                document.getElementById('segui_btn').innerHTML = "Segui"
                                            }
                                        },
                                        error: function(response){
                                            console.log(response)
                                        }
                                    });


                                    $.ajax({//mostra i post dell'utente
                                        type: "POST",
                                        url: "./ajax/profile_post.php",
                                        data: {
                                            "username": username_profile,
                                            "view": "post",
                                        },
                                        dataType: "json",
                                        success: function (response) {
                                            var foto_profilo = response
                                            var prof_view = document.getElementById('table_user')
                                            prof_view.innerHTML = ""
                                            var table = document.createElement("table")
                                            for (let i = 0; i < foto_profilo.length; i++) {
                                                if(i==0 || i%3==0)var tr = document.createElement("tr")
                                                var td = document.createElement("td")
                                                var button = document.createElement("button")
                                                button.setAttribute("data-bs-toggle", "modal");
                                                button.setAttribute("data-bs-target", "#Profile_post_Modal");
                                                var img = document.createElement("img")
                                                img.src = foto_profilo[i]['foto']
                                                button.appendChild(img)
                                                button.id="pro_b_u" + i
                                                td.appendChild(button)
                                                tr.appendChild(td)
                                                table.appendChild(tr)
                                                table.classList.add("post_profile")
                                                prof_view.appendChild(table)
                                                $(document).ready(function(){
                                                    $('#pro_b_u' + i).click(function(){
                                                        var foto_view = foto_profilo[i]['foto']
                                                        var descrizione_view = foto_profilo[i]['descrizione']
                                                        var data_view = foto_profilo[i]['data']
                                                        var like_view = foto_profilo[i]['piace']
                                                        var prefer_view = foto_profilo[i]['prefer']
                                                        var modello_view = foto_profilo[i]['marca']
                                                        var hashtag_view = foto_profilo[i]['hashtag']
                                                        var vendita_view = foto_profilo[i]['vendita']
                                                    
                                                        var view_header = document.getElementById("view_header");
                                                        var view_body = document.getElementById("view_body");
                                                        var view_descr = document.getElementById("view_descr");
                                                        var view_like_prefer = document.getElementById("view_like_prefer");
                                                        var view_data = document.getElementById("view_data");
                                                    
                                                        view_header.innerHTML = modello_view
                                                        view_data.innerHTML = data_view
                                                        view_body.innerHTML = "<img src='" + foto_view + "' height='400px' width='400px' style='object-fit: cover;'>"
                                                        view_like_prefer.innerHTML = "<p>" + descrizione_view + "<b>" + hashtag_view + "</b>" + "</p>"
                                                        if(vendita_view == 0)view_descr.innerHTML = "<br><p>Like:" + like_view + "</p><p>Prefer:" + prefer_view + "</p>"
                                                        else view_descr.innerHTML = "<br><p>Like:" + like_view + "</p><p>Prefer:" + prefer_view + "</p><button>Compra!</button>"
                                                    });
                                                });
                                            }
                                        },
                                        error: function (response) {
                                            console.log(response)
                                        }
                                    });
                                }
                            });
                        }
                        else{
                            document.getElementById("Profile").click()
                        }
                    });
                });
            }
        },
        error: function (response) {
            console.log(response)
        }
    });
}

Post.onclick = () => {
    if(sea)document.getElementById("Search").click();
    post.style.display="block"

}

Profile.onclick = () => {
    if(sea)document.getElementById("Search").click();
    post.style.display="none"
    message.style.display="none"
    header.style.display="none"
    profile.style.display="block"
    content.style.display="none"
    profile_users.style.display="none"
    cart.style.display="none"
}
document.getElementById('a_profile').addEventListener('click', function () {
    Profile.click()
})
function Move(){
    if(!sea){
        menu.style.width = 350 + "px"
        search_box.style.left = 50 + "px"
        title.style.left = 75 + "px"
        menu.style.transition = "0.3s"
        search_box.style.transition = "0.5s"
        title.style.transition = "0.5s"
        sea = !sea;
    }
    else{
        menu.style.width = 200 + "px"
        search_box.style.left = 200 + "px"
        title.style.left = 0 + "px"
        menu.style.transition = "0.5s"
        search_box.style.transition = "0.5s"
        title.style.transition = "0.5s"
        sea = !sea;
    }
}

Back = document.getElementById("Back"); 
Back.onclick = () => {
    document.getElementById("div_upload").style.display="flex";
    document.getElementById("div_post").style.display="none";
    document.getElementById("div_descr").style.display="none"; 
    fileInput.value=null;
    div_post.style.width="450px";
    document.getElementById("Next_in").hidden=true;
    next_post.display="flex";
    var r = confirm("Are you sure you want to delete this Image?")
    if(r == true)
    {
        $.ajax({
          url: 'ajax/delete.php',
          data: {'file' : "../" + temp_path },
          success: function (response) {
             console.log("delete")
          },
          error: function (response) {
            console.log("error" + response)
          }
        });
    }
}

next_post.onclick = () => {
    document.getElementById("div_descr").style.display="block";
    document.getElementById("Next_in").hidden=false;
    next_post.style.display="none";
        move_div();
}
inputElement.addEventListener('input', function() {
    var search_result = document.getElementById("search_result"); 
    if(inputElement.value.length > 0){
        $.ajax({
          url: "ajax/DynamicSearch.php",
          type: "POST",
          dataType: "json",
          data: {
            search: inputElement.value,
            scelta: scelta,
          },
          success: function(data){
            search_result.innerHTML = ""
            console.log(data);
            var jsonData = data
            for (let i = 0; i < data.length; i++) {
                if(scelta == 1){
                    var usern_search = jsonData[i]
                }
                else if(scelta == 2 || scelta == 3){
                    var usern_search = jsonData[i]['username']
                    var model_search = jsonData[i]['marca']
                    var id_search = jsonData[i]['id']
                }
                search_result.innerHTML += "<button value='"+usern_search+"' style='background-color:transparent;margin:10px;border:none' onclick='search_results(this.value)'>" + usern_search + "</button><br>"
            }
          },
          error: function (data) {
            console.log(data)
          }
        })
    }
    else{
        search_result.innerHTML = ""
    }
    }
);
Radio1.onclick = () => {
    scelta=1
}
Radio2.onclick = () => {
    scelta=2
}
Radio3.onclick = () => {
    scelta=3
}
function search_results(value){
    username_profile = value
    if(username != username_profile){
        post.style.display="none"
        message.style.display="none"
        header.style.display="none"
        profile.style.display="none"
        content.style.display="none"
        profile_users.style.display="block"
        
        $.ajax({
            type: "POST",
            url: "./ajax/profile.php",
            data: {
                "username": username_profile
            },
            success: function (response) {
                document.getElementById('profile_name_users').innerHTML = username_profile
                document.getElementById('profile_img_users').src = response
                $.ajax({
                    type: "POST",
                    url: "./ajax/profile_post.php",
                    data: {
                        "username": username_profile,
                        "view": "post",
                    },
                    dataType: "json",
                    success: function (response) {
                        var foto_profilo = response
                        var prof_view = document.getElementById('table_user')
                        prof_view.innerHTML = ""
                        var table = document.createElement("table")
                        for (let i = 0; i < foto_profilo.length; i++) {
                            if(i==0 || i%3==0)var tr = document.createElement("tr")
                            var td = document.createElement("td")
                            var button = document.createElement("button")
                            button.setAttribute("data-bs-toggle", "modal");
                            button.setAttribute("data-bs-target", "#Profile_post_Modal");
                            var img = document.createElement("img")
                            img.src = foto_profilo[i]['foto']
                            button.appendChild(img)
                            button.id="pro_b" + i
                            td.appendChild(button)
                            tr.appendChild(td)
                            table.appendChild(tr)
                            table.classList.add("post_profile")
                            prof_view.appendChild(table)
                            $(document).ready(function(){
                                $('#pro_b' + i).click(function(){
                                    var foto_view = foto_profilo[i]['foto']
                                    var descrizione_view = foto_profilo[i]['descrizione']
                                    var data_view = foto_profilo[i]['data']
                                    var like_view = foto_profilo[i]['piace']
                                    var prefer_view = foto_profilo[i]['prefer']
                                    var modello_view = foto_profilo[i]['marca']
                                    var hashtag_view = foto_profilo[i]['hashtag']
                                    var vendita_view = foto_profilo[i]['vendita']
                                    console.log(modello_view)
                                
                                    var view_header = document.getElementById("view_header");
                                    var view_body = document.getElementById("view_body");
                                    var view_descr = document.getElementById("view_descr");
                                    var view_like_prefer = document.getElementById("view_like_prefer");
                                    var view_data = document.getElementById("view_data");
                                
                                    view_header.innerHTML = modello_view
                                    view_data.innerHTML = data_view
                                    view_body.innerHTML = "<img src='" + foto_view + "' height='400px' width='400px' style='object-fit: cover;'>"
                                    view_like_prefer.innerHTML = "<p>" + descrizione_view + "<b>" + hashtag_view + "</b>" + "</p>"
                                    view_descr.innerHTML = "<br><p>Like:" + like_view + "</p><p>Prefer:" + prefer_view + "</p><p>" + vendita_view + "</p>"
                                });
                            });
                        }
                    },
                    error: function (response) {
                        console.log(response)
                    }
                });
            }
        });
    }
    else{
        document.getElementById("Profile").click()
    }
}

function move_div(){
    if(!next){
        if(parseInt(div_post.style.width) < 800 || parseInt(div_post.style.width) < screenLeft.width){
            div_post.style.width = parseInt(div_post.style.width) + 20 + "px";
            div_post.style.left = parseInt(div_post.style.left) - 7 + "px";
            time=setTimeout(move_div,5);
        }
        else{
            clearInterval(time);
            next = !next
        }
    }
}

viewpost.addEventListener('click', function () {
    viewpost.style.textDecoration = 'underline red'
    profile_like.style.textDecoration = 'none'
    $.ajax({
        type: "POST",
        url: "./ajax/profile_post.php",
        data: {
            "username": username,
            "view": "post",
        },
        dataType: "json",
        success: function (response) {
            var foto_profilo = response
            var prof_view = document.getElementById('table')
            prof_view.innerHTML = ""
            var view_footer = document.getElementById("view_footer");
            view_footer.innerHTML = '<div id="view_like_prefer"></div><div id="view_descr"></div>'
            var table = document.createElement("table")
            for (let i = 0; i < foto_profilo.length; i++) {
                if(i==0 || i%3==0)var tr = document.createElement("tr")
                var td = document.createElement("td")
                var button = document.createElement("button")
                button.setAttribute("data-bs-toggle", "modal");
                button.setAttribute("data-bs-target", "#Profile_post_Modal");
                var img = document.createElement("img")
                img.src = foto_profilo[i]['foto']
                button.appendChild(img)
                button.id="pro_b" + i
                td.appendChild(button)
                tr.appendChild(td)
                table.appendChild(tr)
                table.classList.add("post_profile")
                prof_view.appendChild(table)
                $(document).ready(function(){
                    $('#pro_b' + i).click(function(){
                        var foto_view = foto_profilo[i]['foto']
                        var descrizione_view = foto_profilo[i]['descrizione']
                        var data_view = foto_profilo[i]['data']
                        var like_view = foto_profilo[i]['piace']
                        var prefer_view = foto_profilo[i]['prefer']
                        var modello_view = foto_profilo[i]['marca']
                        var hashtag_view = foto_profilo[i]['hashtag']
                        var vendita_view = foto_profilo[i]['vendita']
                        console.log(modello_view)

                        var view_header = document.getElementById("view_header");
                        var view_body = document.getElementById("view_body");
                        var view_like_prefer = document.getElementById("view_like_prefer");
                        var view_descr = document.getElementById("view_descr");
                        var view_data = document.getElementById("view_data");

                        view_header.innerHTML = modello_view
                        view_data.innerHTML = data_view
                        view_body.innerHTML = "<img src='" + foto_view + "' height='400px' width='400px' style='object-fit: cover;'>"
                        view_like_prefer.innerHTML = "<p>" + descrizione_view + "<b>" + hashtag_view + "</b>" + "</p>"
                        view_descr.innerHTML = "<br><p>Like:" + like_view + "</p><p>Prefer:" + prefer_view + "</p><p>" + vendita_view + "</p>"
                    });
                });
            }
        },
        error: function (response) {
            console.log(response)
        }
    });
})
profile_like.addEventListener('click', function () {
    viewpost.style.textDecoration = 'none'
    profile_like.style.textDecoration = 'underline red'
    $.ajax({
        type: "POST",
        url: "./ajax/profile_post.php",
        data: {
            "username": username,
            "view": "like",
        },
        dataType: "json",
        success: function (response) {
            var foto_profilo = response
            var prof_view = document.getElementById('table')
            prof_view.innerHTML = ""
            var table = document.createElement("table")
            for (let i = 0; i < foto_profilo.length; i++) {
                if(i==0 || i%3==0)var tr = document.createElement("tr")
                var td = document.createElement("td")
                var button = document.createElement("button")
                button.setAttribute("data-bs-toggle", "modal");
                button.setAttribute("data-bs-target", "#Profile_post_Modal");
                var img = document.createElement("img")
                img.src = foto_profilo[i]['foto']
                button.appendChild(img)
                button.id="pro_b" + i
                td.appendChild(button)
                tr.appendChild(td)
                table.appendChild(tr)
                table.classList.add("post_profile")
                prof_view.appendChild(table)
                $(document).ready(function(){
                    $('#pro_b' + i).click(function(){
                        var foto_view = foto_profilo[i]['foto']
                        var descrizione_view = foto_profilo[i]['descrizione']
                        var data_view = foto_profilo[i]['data']
                        var like_view = foto_profilo[i]['piace']
                        var prefer_view = foto_profilo[i]['prefer']
                        var modello_view = foto_profilo[i]['marca']
                        var hashtag_view = foto_profilo[i]['hashtag']
                        var vendita_view = foto_profilo[i]['vendita']
                        console.log(modello_view)

                        var view_header = document.getElementById("view_header");
                        var view_body = document.getElementById("view_body");
                        var view_like_prefer = document.getElementById("view_like_prefer");
                        var view_descr = document.getElementById("view_descr");
                        var view_data = document.getElementById("view_data");

                        view_header.innerHTML = modello_view
                        view_data.innerHTML = data_view
                        view_body.innerHTML = "<img src='" + foto_view + "' height='400px' width='400px' style='object-fit: cover;'>"
                        view_like_prefer.innerHTML = "<p>" + descrizione_view + "<b>" + hashtag_view + "</b>" + "</p>"
                        view_descr.innerHTML = "<br><p>Like:" + like_view + "</p><p>Prefer:" + prefer_view + "</p><p>" + vendita_view + "</p>"
                    });
                });
            }
        },
        error: function (response) {
            console.log(response)
        }
    });
})

function logout(){
    $.ajax({
        type: "POST",
        url: "./ajax/logout.php",
        success: function (response) {
            window.location.href = "./index.html";
        },
        error: function (response) {
            console.log(response)
        }
    });
}

