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

var title = document.getElementById("titolo")
var search_box = document.getElementById("search_box");
var next_post = document.getElementById("Next");
var back_post = document.getElementById("Back");

var menu = document.getElementById("menu");
var main = document.getElementById("main");

var r1 = document.getElementById("r1");
var r2 = document.getElementById("r2");
var r3 = document.getElementById("r3");

var div_post = document.getElementById("div_post");
var PostModal = document.getElementById("PostModal");

div_post.style.width="450px";
div_post.style.left="0px";
menu.style.width = "200px";
search_box.style.left="-100px";
title.style.left="0px";

var sea = false;
var next = false;

Home.onclick = () => {
    if(sea)document.getElementById("Search").click();
    home.style.display="block";
    post.style.display="none";
}

Search.onclick = () => {
    post.style.display="none";

    if(!sea){
        document.getElementById('p_home').innerHTML ='';
        document.getElementById('p_search').innerHTML='';
        document.getElementById('p_message').innerHTML='';
        document.getElementById('p_cart').innerHTML='';
        document.getElementById('p_post').innerHTML='';
        document.getElementById('p_profile').innerHTML='';

        document.getElementById("list").classList.replace("list", "list_search")
        Home.classList.replace('btn_list', 'btn_list_search');
        Search.classList.replace('btn_list', 'btn_list_search');
        Message.classList.replace('btn_list', 'btn_list_search');
        Cart.classList.replace('btn_list', 'btn_list_search');
        Post.classList.replace('btn_list', 'btn_list_search');
        Profile.classList.replace('btn_list', 'btn_list_search');

        search_box.style.display="block";

        Move();

    }
    else{
        document.getElementById('p_home').innerHTML ='Home';
        document.getElementById('p_search').innerHTML='Search';
        document.getElementById('p_message').innerHTML='Message';
        document.getElementById('p_cart').innerHTML='Cart';
        document.getElementById('p_post').innerHTML='Post';
        document.getElementById('p_profile').innerHTML='Profile';

        document.getElementById("list").classList.replace("list_search", "list")
        Home.classList.replace('btn_list_search', 'btn_list');
        Search.classList.replace('btn_list_search', 'btn_list');
        Message.classList.replace('btn_list_search', 'btn_list');
        Cart.classList.replace('btn_list_search', 'btn_list');
        Post.classList.replace('btn_list_search', 'btn_list');
        Profile.classList.replace('btn_list_search', 'btn_list');

        search_box.style.display="none";

        Radio1.checked=false;
        Radio2.checked=false;
        Radio3.checked=false;
        r1.style.display="none";
        r2.style.display="none";
        r3.style.display="none";

        Move();
    }
}

Message.onclick = () => {
    if(sea)document.getElementById("Search").click();
    post.style.display="none";
}

Cart.onclick = () => {
    if(sea)document.getElementById("Search").click();
    post.style.display="none";
}

Post.onclick = () => {
    if(sea)document.getElementById("Search").click();
    post.style.display="block";

}

Profile.onclick = () => {
    if(sea)document.getElementById("Search").click();
    post.style.display="none";
}

/*document.getElementById("like").onclick = () => {
    
}
document.getElementById("prefer").onclick = () => {
    if(document.getElementById("prefer").innerHTML != '<i class="bi bi-star-fill g"></i>') document.getElementById("prefer").innerHTML = '<i class="bi bi-star-fill g"></i>';
    else document.getElementById("prefer").innerHTML = '<i class="bi bi-star g"></i>';
}*/
function Move(){
    if(!sea){
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
    }
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

PostModal.onblur = () => {
    //quando esci
}

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const list = document.getElementsByClassName('btn_list')
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        
        menu.style.background = "#D30000"
        body.style.background = 'white';
        body.style.color = '#17202A';
        body.style.transition = '2s';
        menu.style.transition = '2s';
        for(var i = 0; i < list.length; i++) {
            list[i].style.background = "#D30000"
            list[i].style.transition = '2s';
        }
    }else{
        menu.style.background = "#17202A"
        body.style.background = '#1C2833';
        body.style.color = 'white';
        body.style.transition = '2s';
        menu.style.transition = '2s';
        for(var i = 0; i < list.length; i++) {
            list[i].style.background = "#17202A"
            list[i].style.transition = '2s';
        }
    }
});