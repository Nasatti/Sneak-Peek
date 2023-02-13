var home = document.getElementById("home");
var search = document.getElementById("search");
var message = document.getElementById("message");
var cart = document.getElementById("cart");
var post = document.getElementById("post");
var profile = document.getElementById("profile");
var sea = false;

document.getElementById("Home").onclick = () => {
    if(sea)document.getElementById("Search").click();
    home.style.display="block";
}

document.getElementById("Search").onclick = () => {
    sea=!sea
}

document.getElementById("Message").onclick = () => {
    if(sea)document.getElementById("Search").click();
}

document.getElementById("Cart").onclick = () => {
    if(sea)document.getElementById("Search").click();
}

document.getElementById("Post").onclick = () => {
    if(sea)document.getElementById("Search").click();
}

document.getElementById("Profile").onclick = () => {
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