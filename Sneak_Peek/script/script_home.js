var search = document.getElementById("search")
var message = document.getElementById("message")
var cart = document.getElementById("cart")
var post = document.getElementById("post")
var profile = document.getElementById("profile")
var content = document.getElementById("contents")

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
var next_post = document.getElementById("Next")
var back_post = document.getElementById("Back")

var menu = document.getElementById("menu")
var main = document.getElementById("main")

var r1 = document.getElementById("r1")
var r2 = document.getElementById("r2")
var r3 = document.getElementById("r3")

var div_post = document.getElementById("div_post")
var PostModal = document.getElementById("PostModal")
var Scrollbar = document.getElementById("scrollbar")
var header = document.getElementById("header")

Scrollbar.style.height = window.innerHeight - 1 + 'px'
Scrollbar.style.minHeight = window.innerHeight - 1 + 'px'
console.log(Scrollbar.style.height)
div_post.style.width="450px"
div_post.style.left="0px"
menu.style.width = "200px"
search_box.style.left="-100px"
title.style.left="0px"

var sea = false;
var next = false;

Home.onclick = () => {
    header.style.display="grid"
    if(sea)document.getElementById("Search").click()
    content.style.display="block"
    post.style.display="none"
    message.style.display="none"
    profile.style.display="none"
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

        Radio1.checked=false
        Radio2.checked=false
        Radio3.checked=false
        r1.style.display="none"
        r2.style.display="none"
        r3.style.display="none"

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
}

Cart.onclick = () => {
    header.style.display="grid"
    if(sea)document.getElementById("Search").click();
    post.style.display="none"
    profile.style.display="none"
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
}
document.getElementById('a_profile').addEventListener('click', function () {
    Profile.click()
})
/*document.getElementById("like").onclick = () => {
    
}
document.getElementById("prefer").onclick = () => {
    if(document.getElementById("prefer").innerHTML != '<i class="bi bi-star-fill g"></i>') document.getElementById("prefer").innerHTML = '<i class="bi bi-star-fill g"></i>';
    else document.getElementById("prefer").innerHTML = '<i class="bi bi-star g"></i>';
}*/
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
    /*if(!sea){
        if(parseInt(menu.style.width) < 350){
            menu.style.width = parseInt(menu.style.width) + 10 + "px";
            search_box.style.left=parseInt(search_box.style.left) + 10 + "px";
            title.style.left=parseInt(title.style.left) + 5 + "px";
            timer=setTimeout(Move,5);
        }
        else{
            clearInterval(timer);
            sea = !sea;
        }
    }
    else{
        if(parseInt(menu.style.width) > 200){
            menu.style.width = parseInt(menu.style.width) - 10 + "px";
            search_box.style.left=parseInt(search_box.style.left) - 10 + "px";
            title.style.left=parseInt(title.style.left) - 5 + "px";
            timer=setTimeout(Move,5);
        }
        else{
            clearInterval(timer);
            sea = !sea;
        }
    }*/
}
Radio1.onclick = () => {
    r1.style.display="block";
    r2.style.display="none";
    r3.style.display="none";
}
Radio2.onclick = () => {
    r2.style.display="block";
    r1.style.display="none";
    r3.style.display="none";
}
Radio3.onclick = () => {
    r3.style.display="block";
    r1.style.display="none";
    r2.style.display="none";
}

const ra1 = document.getElementById("ra1");
const slideValue1 = document.getElementById("span1");
slideValue1.style.left="0px";
ra1.oninput = () => {
  let value = ra1.value;
  slideValue1.textContent = value;
  slideValue1.style.left = ((value%36)*185/11) + 10 + "px";
  slideValue1.classList.add("show");
  
};
ra1.onblur = () => {
  slideValue1.classList.remove("show");
};

const ra2 = document.getElementById("ra2");
const slideValue2 = document.getElementById("span2");
slideValue2.style.left="0px";
ra2.oninput = () => {
  let value = ra2.value;
  slideValue2.textContent = value;
  slideValue2.style.left = ((value%36)*185/11) + 10 + "px";
  slideValue2.classList.add("show");
};
ra2.onblur = () => {
  slideValue2.classList.remove("show");
};

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