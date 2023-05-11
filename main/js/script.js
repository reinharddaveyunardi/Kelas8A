$(document.querySelector).ready();

//Menu
$(navbarNav = document.querySelector('.navbar-nav'));
document.querySelector('#menu').
onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
    
};


//Search

$(searchForm = document.querySelector('.search-form'));
$(searchBox = document.querySelector('#search-box'));

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}


//klik di luar element
$(menu = document.querySelector('#menu'));
$(sb = document.querySelector('#search-button'));

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

//Search box

document.addEventListener('click', function(e){
    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
});


