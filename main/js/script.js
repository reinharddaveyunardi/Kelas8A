//Menu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu').
onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
    
};


//Search


const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}


//klik luar element

const menu = document.querySelector('#menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

//sb

document.addEventListener('click', function(e){
    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
});

