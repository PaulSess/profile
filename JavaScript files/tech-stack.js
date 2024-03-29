document.addEventListener("mousemove", parallax);
function parallax(e){
  document.querySelectorAll(".object").forEach(function(move){

    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

    // const pyramids = document.querySelector(".pyramids");
    // const palace = document.querySelector(".palace");

    // //reveal elements on page loading
    // window.addEventListener("load", () => {
    //   pyramids.style.transform = "translateX(0)";
    //   palace.style.transform = "translateX(0)";

    //   setTimeout(() => {
    //     info.style.transform = "translateY(0)";
    //     info.style.opacity = "1";
    //   }, 500);
    // });

    // //scrolling effects on website elements
    // window.addEventListener("scroll", () => {
    //   const scrollVal = window.scrollY;

    //   pyramids.style.left = scrollVal * -0.25 + "px";
    //   palace.style.left = scrollVal * 0.25 + "px";

    //   pyramids.style.transition = "0s";
    //   palace.style.transition = "0s";
    // });





    // //hide and display home info on scrolldown and up
    // window.onscroll = function(){
    //   if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    //     info.style.opacity = "0";
    //     info.style.transition = "0.6s";
    //   }
    //   else{
    //     info.style.opacity = "1";
    //     info.style.transition = "0.6s";
    //   }
    // }

      //flying in by scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements1 = document.querySelectorAll('.hiddenleft')
    const hiddenElements2 = document.querySelectorAll('.hiddenright')
    hiddenElements1.forEach((el) => observer.observe(el));
    hiddenElements2.forEach((el) => observer.observe(el));
