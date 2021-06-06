const toggleElement = document.getElementsByClassName('opener')[0];
const navBar = document.getElementsByClassName('lg-nav')[0];
toggleElement.addEventListener('click', ()=>{
    navBar.classList.toggle('active')
})