const menuToggle = document.getElementById("hamburgerIcon");
const mobileLinks = document.getElementById("mobile-nav-items");
console.log(mobileLinks);

menuToggle.addEventListener('click', () => {
    mobileLinks.classList.add('active');    
});