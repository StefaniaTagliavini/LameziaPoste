let plus = document.querySelector('#plus');
let socialList = document.querySelector('.social-list');

plus.onclick = () =>{
    plus.classList.toggle('active');
    socialList.classList.toggle('active');
}


// open navmenu // 

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close navmenu// 

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display="none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)