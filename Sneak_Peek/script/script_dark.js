const toggle = document.getElementById('toggleDark')
const body = document.querySelector('body')
const list = document.getElementsByClassName('btn_list')
const list_us = document.getElementsByClassName('us_post')
const name_user = document.getElementById('a_profile')
const scroll = document.getElementById("scrollbar")
const action = document.getElementsByClassName('action')
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon')
    if(this.classList.toggle('bi-brightness-high-fill')){
        
        menu.style.background = "#D30000"
        body.style.background = 'white'
        body.style.color = "white"
        body.style.color = '#17202A'
        name_user.style.color = "black"
        scroll.classList.replace("scrollbar-danger-night", "scrollbar-danger")
        body.style.transition = '2s'
        menu.style.transition = '2s'
        scroll.style.transition = '2s'
        name_user.style.transition = '2s'
        for(var i = 0; i < list.length; i++) {
            list[i].style.background = "#D30000"
            list[i].style.transition = '2s'
        }
        for(var i = 0; i < list_us.length; i++) {
            list_us[i].style.color = "black"
            list_us[i].style.transition = '2s'
            button = action[i].getElementsByTagName("button");
            button[0].style.color = "black"
            button[0].style.transition = '2s'
            button[1].style.color = "black"
            button[1].style.transition = '2s'
            button[2].style.color = "black"
            button[2].style.transition = '2s'
        }
    }else{
        menu.style.background = "#17202A"
        body.style.background = '#1C2833'
        body.style.color = 'white'
        name_user.style.color = "white"
        scroll.classList.replace("scrollbar-danger", "scrollbar-danger-night")
        body.style.transition = '2s'
        menu.style.transition = '2s'
        scroll.style.transition = '2s'
        name_user.style.transition = '2s'
        for(var i = 0; i < list.length; i++) {
            list[i].style.background = "#17202A"
            list[i].style.transition = '2s'
        }
        for(var i = 0; i < list_us.length; i++) {
            list_us[i].style.color = "white"
            list_us[i].style.transition = '2s'
            button = action[i].getElementsByTagName("button");
            button[0].style.color = "white"
            button[0].style.transition = '2s'
            button[1].style.color = "white"
            button[1].style.transition = '2s'
            button[2].style.color = "white"
            button[2].style.transition = '2s'
        }
    }
    body.classList.toggle('dark')
});