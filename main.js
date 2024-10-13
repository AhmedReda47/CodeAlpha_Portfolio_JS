// Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
    }
}

// Start Button (scroll to top)
const mainBtn = document.querySelector('.main-btn');

window.onscroll = function () {
    if (this.scrollY >= 150) {
        mainBtn.classList.add("show");
    } else {
        mainBtn.classList.remove("show");
    }
}

mainBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Start Active class toggle for nav links
const navLinkItems = document.querySelectorAll('.nav-link'); 

navLinkItems.forEach((navLink) => {
    navLink.addEventListener("click", function () {
        document.querySelector(".nav-link.active")?.classList.remove("active"); 
        navLink.classList.add("active"); 
    });
});







