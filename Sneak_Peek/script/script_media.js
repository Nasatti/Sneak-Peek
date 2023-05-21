var menu_footer = document.getElementById("menu_footer")
var title = document.getElementById("titolo")
var scrollbar = document.getElementById("scrollbar")
var width = window.innerWidth
var height = window.innerHeight

if(width < 767){
    menu_footer.style.width = width + 'px'
    menu.hidden=true
    menu_footer.hidden = false
    main.style.left = 0 + "px"
    scrollbar.style.width = width - 150 + 'px'
    setWidthHeightFooter();
}
else{
        main.style.left = 200 + "px"
        menu.hidden = false;
        menu_footer.hidden = true
        setWidthHeight();
}

menu_footer.style.height = 70 + 'px'
menu_footer.style.left = 0 + 'px'

window.addEventListener('resize', function(){
    width = window.innerWidth
    height = window.innerHeight
    if(width < 767){
        menu.hidden=true
        menu_footer.hidden = false
        main.style.left = 0 + "px"
        
        setWidthHeightFooter();
    }
    else {
        main.style.left = 200 + "px"
        menu.hidden = false;
        menu_footer.hidden = true
        setWidthHeight()
    }
    
});
function setWidthHeightFooter(){
        menu_footer.style.width = width + 'px'
        menu.style.height = height + "px"
        main.style.width = width + 'px'
        main.style.height = height - 79 + 'px'
        div_post.style.height=height + "px"
        scrollbar.style.height = height - 100 + "px"
        scrollbar.style.minHeight = height - 250 + "px"
        scrollbar.style.width = width + 'px'
        menu_footer.style.top = window.innerHeight - 79 + "px"
}
function setWidthHeight(){
    menu.style.height = height + "px"
    div_post.style.height=height + "px"
    main.style.width = '85%'
    scrollbar.style.height = height - 1 + "px"
    scrollbar.style.minHeight = '99%'
    scrollbar.style.width = '99%'
}