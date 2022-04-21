const navBar = document.querySelector('.bar');
const ul = document.querySelector('.ul');
const header = document.querySelector('.header')
const ulHeight = ul.getBoundingClientRect();
const fixedHeader = document.querySelector('.header');


navBar.addEventListener('click', function(){
    // console.log(ulHeight);
navBar.classList.toggle("active");
ul.classList.toggle("active");

})

ul.addEventListener('click', function(){
    ul.classList.toggle("active");
    navBar.classList.toggle("active");
})


window.addEventListener('scroll', function(){
    // console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = fixedHeader.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        fixedHeader.classList.add('fixed-header')   
    }
    else{
        fixedHeader.classList.remove('fixed-header') 
    }
})
