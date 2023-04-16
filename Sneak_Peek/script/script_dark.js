const toggle = document.getElementById('toggleDark')
const body = document.querySelector('body')
const list = document.getElementsByClassName('btn_list')
const list_footer = document.getElementsByClassName('btn_list_footer')
const list_us = document.getElementsByClassName('us_post')
const list_msg = document.getElementsByClassName('chat')
const name_user = document.getElementById('a_profile')
const scroll = document.getElementById("scrollbar")
const action = document.getElementsByClassName('action')
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon')
    if(this.classList.toggle('bi-brightness-high-fill')){
        
        menu.style.background = "#D30000"
        menu_footer.style.background = "#D30000"
        body.style.background = 'white'
        body.style.color = "white"
        body.style.color = '#17202A'
        name_user.style.color = "black"
        scroll.classList.replace("scrollbar-danger-night", "scrollbar-danger")
        body.style.transition = '2s'
        menu.style.transition = '2s'
        menu_footer.style.transition = '2s'
        scroll.style.transition = '2s'
        name_user.style.transition = '2s'
        for(var i = 0; i < list.length; i++) {
            list[i].style.background = "#D30000"
            list[i].style.transition = '2s'
        }
        for(var i = 0; i < list_footer.length; i++) {
            list_footer[i].style.background = "#D30000"
            list_footer[i].style.transition = '2s'
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
            console.log(button[1])
            console.log(button[2])
            console.log(button[3])
        }
        for(var i = 0; i < list_msg.length; i++){
            var buttons = list_msg[i].querySelectorAll('button');
            buttons[i].style.color = "black"
            buttons[i].style.transition = '2s'
        }
    }else{
        menu.style.background = "#17202A"
        menu_footer.style.background = "#17202A"
        body.style.background = '#1C2833'
        body.style.color = 'white'
        name_user.style.color = "white"
        scroll.classList.replace("scrollbar-danger", "scrollbar-danger-night")
        body.style.transition = '2s'
        menu.style.transition = '2s'
        menu_footer.style.transition = '2s'
        scroll.style.transition = '2s'
        name_user.style.transition = '2s'
        for(var i = 0; i < list.length; i++) {
            list[i].style.background = "#17202A"
            list[i].style.transition = '2s'
        }
        for(var i = 0; i < list_footer.length; i++) {
            list_footer[i].style.background = "#17202A"
            list_footer[i].style.transition = '2s'
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
        for(var i = 0; i < list_msg.length; i++){
            var buttons = list_msg[i].querySelectorAll('button');
            buttons[i].style.color = "white"
            buttons[i].style.transition = '2s'
        }
    }
    body.classList.toggle('dark')

    setTimeout("Clear()",2000)
});
function Clear(){
    for(var i = 0; i < list_us.length; i++) {
        list_us[i].style.transition = '0s'
        button = action[i].getElementsByTagName("button");
        button[0].style.transition = '0.05s'
        button[1].style.transition = '0.05s'
        button[2].style.transition = '0.05s'
    }
    for(var i = 0; i < list.length; i++) {
        list[i].style.transition = '0.5s'
    }
}