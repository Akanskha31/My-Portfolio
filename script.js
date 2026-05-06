 console.log("Jai Siya Ram")
const menuIcon=document.querySelector('#menu-icon');
const navlinks=document.querySelector('.nav-links');
menuIcon.addEventListener("click",()=>{
    navlinks.classList.toggle('active');
});
