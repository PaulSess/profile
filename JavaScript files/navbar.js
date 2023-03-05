const navbar = document.getElementById("navbar");

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else if (currentScrollPos > 100) {
    navbar.style.top = "-82px"; 
  }
  prevScrollpos = currentScrollPos;
}
