  const hero = document.querySelector('.hero');
  const slider = document.querySelector('.slider');
  const logo = document.querySelector('#logo');
  const hello = document.querySelector('#hello-h1');
  const Iam = document.querySelector('#webdev-h2');

  const paul = document.querySelector('#paul');

  const tl = new TimelineMax();

  tl.fromTo(hero,1,    { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut}, "-=1.2")
    .fromTo(hello, 0.5, { opacity: 0, x: 30 }, {opacity: 1, x: 0 }, "-=0.5")
    .fromTo(Iam, 0.5, { opacity: 0, x: 30 }, {opacity: 1, x: 0 }, "-=0.1");


    // document.addEventListener("mouseover", function(){
    //   paul.classList.add("d-block");
    //   paul.classList.remove("d-none");
    // });
    const blob = document.querySelector('#blob');
    const me = document.querySelector('#me');

    paul.addEventListener("mouseover", function(event) {
      const firstdelay = 50;
      const seconddelay = 150;
      setTimeout(function() {
        blob.style.display = "block";
      }, firstdelay);
      setTimeout(function() {
        me.style.display = "block";
      }, seconddelay);

    });
    paul.addEventListener("mouseout", function(event) {
      me.style.display = "none";
      blob.style.display = "none";

    });
