const navBar = document.querySelector('.bar');
const ul = document.querySelector('.ul');

navBar.addEventListener('click', function(){
    
navBar.classList.toggle("active");
ul.classList.toggle("active");

})