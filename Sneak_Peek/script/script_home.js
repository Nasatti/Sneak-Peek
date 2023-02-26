var home = document.getElementById("home");
var search = document.getElementById("search");
var message = document.getElementById("message");
var cart = document.getElementById("cart");
var post = document.getElementById("post");
var profile = document.getElementById("profile");

var Home = document.getElementById("Home");
var Search = document.getElementById("Search");
var Message = document.getElementById("Message");
var Cart = document.getElementById("Cart");
var Post = document.getElementById("Post");
var Profile = document.getElementById("Profile");
var Logout = document.getElementById("Logout");

var search_box = document.getElementById("search_box");

var menu = document.getElementById("menu");
var main = document.getElementById("main");
menu.style.width = "200px";
search_box.style.left="-100px";
var sea = false;

Home.onclick = () => {
    if(sea)document.getElementById("Search").click();
    home.style.display="block";
}

Search.onclick = () => {
    if(!sea){
        Home.innerHTML='<i class="bi bi-house"></i>';
        Search.innerHTML='<i class="bi bi-binoculars"></i>';
        Message.innerHTML='<i class="bi bi-chat"></i>';
        Cart.innerHTML='<i class="bi bi-cart"></i>';
        Post.innerHTML='<i class="bi bi-plus-square"></i>';
        Profile.innerHTML='<i class="bi bi-person"></i>';
        Logout.innerHTML='<i class="bi bi-box-arrow-in-left"></i>';

        Home.classList.replace('btn_list', 'btn_list_search');
        Search.classList.replace('btn_list', 'btn_list_search');
        Message.classList.replace('btn_list', 'btn_list_search');
        Cart.classList.replace('btn_list', 'btn_list_search');
        Post.classList.replace('btn_list', 'btn_list_search');
        Profile.classList.replace('btn_list', 'btn_list_search');
        Logout.classList.replace('btn_list', 'btn_list_search');

        search_box.style.display="block";

        Move();

    }
    else{
        Home.innerHTML='<i class="bi bi-house"></i>  Home';
        Search.innerHTML='<i class="bi bi-binoculars"></i> Search';
        Message.innerHTML='<i class="bi bi-chat"></i>  Message';
        Cart.innerHTML='<i class="bi bi-cart"></i>  Cart';
        Post.innerHTML='<i class="bi bi-plus-square"></i>  Post';
        Profile.innerHTML='<i class="bi bi-person"></i>  Profile';
        Logout.innerHTML='<i class="bi bi-box-arrow-in-left"></i>  Logout';

        Home.classList.replace('btn_list_search', 'btn_list');
        Search.classList.replace('btn_list_search', 'btn_list');
        Message.classList.replace('btn_list_search', 'btn_list');
        Cart.classList.replace('btn_list_search', 'btn_list');
        Post.classList.replace('btn_list_search', 'btn_list');
        Profile.classList.replace('btn_list_search', 'btn_list');
        Logout.classList.replace('btn_list_search', 'btn_list');

        search_box.style.display="none";

        Move();
    }
}

Message.onclick = () => {
    if(sea)document.getElementById("Search").click();
}

Cart.onclick = () => {
    if(sea)document.getElementById("Search").click();
}

Post.onclick = () => {
    if(sea)document.getElementById("Search").click();
}

Profile.onclick = () => {
    if(sea)document.getElementById("Search").click();
}

document.getElementById("like").onclick = () => {
    
    if(document.getElementById("like").innerHTML != '<i class="bi bi-heart-fill r"></i>')document.getElementById("like").innerHTML = '<i class="bi bi-heart-fill r"></i>';
    else document.getElementById("like").innerHTML = '<i class="bi bi-heart r"></i>'
}
document.getElementById("prefer").onclick = () => {
    if(document.getElementById("prefer").innerHTML != '<i class="bi bi-star-fill g"></i>') document.getElementById("prefer").innerHTML = '<i class="bi bi-star-fill g"></i>';
    else document.getElementById("prefer").innerHTML = '<i class="bi bi-star g"></i>';
}
function Move(){
    if(!sea){
        if(parseInt(menu.style.width) < 350){
            menu.style.width = parseInt(menu.style.width) + 10 + "px";
            search_box.style.left=parseInt(search_box.style.left) + 10 + "px";
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
            timer=setTimeout(Move,5);
        }
        else{
            clearInterval(timer);
            sea = !sea;
        }
    }
}