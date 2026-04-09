const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menuIcon");

// OPEN SIDEBAR
menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");

    menuIcon.classList.remove("ri-menu-line");
    menuIcon.classList.add("ri-close-line");
});

// CLOSE SIDEBAR
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");

    menuIcon.classList.remove("ri-close-line");
    menuIcon.classList.add("ri-menu-line");
});

// ACTIVE MENU
const links = document.querySelectorAll(".menu a");

links.forEach(link=>{
    link.addEventListener("click",()=>{
        links.forEach(l=>l.classList.remove("active"));
        link.classList.add("active");
    });
});

function go404(){
  window.location.href = "dashboard-404.html";
}