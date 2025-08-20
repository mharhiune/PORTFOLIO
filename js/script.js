let hamburger = document.querySelector(".js-hamburger")
let close_button = document.querySelector(".close-button")
let menu_list = document.querySelector(".menu-list")
let is_clicked = false

hamburger.addEventListener('click', () => {
    if(!is_clicked){
        is_clicked = true
        menu_list.classList.toggle("links")
        close_button.classList.remove("closed-menu")
        console.log("open")
    }else{
        is_clicked = false
        close_button.classList.add("closed-menu")
    }
})

close_button.addEventListener('click', () => {
    if(is_clicked){
        is_clicked = false
        close_button.classList.add("closed-menu")
        menu_list.classList.toggle("links")
        console.log("close")
    }else{
        is_clicked = true
        close_button.classList.remove("closed-menu")
    }
})