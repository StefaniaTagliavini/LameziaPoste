let plus = document.querySelector('#plus');
let socialList = document.querySelector('.social-list');

plus.onclick = () =>{
    plus.classList.toggle('active');
    socialList.classList.toggle('active');
}

