const sideMenu = document.getElementById("sideMenu");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menuLinks = document.querySelectorAll("#sideMenu a");

// فتح المنيو
menuBtn.addEventListener("click", () => {
  sideMenu.style.width = "250px";
});

// قفل المنيو بزرار X
closeBtn.addEventListener("click", () => {
  sideMenu.style.width = "0";
});

// قفل المنيو لما تدوس على أي لينك جوهها


// قفل المنيو لما تدوس برة عليها
document.addEventListener("click", (e) => {
  if (
    sideMenu.style.width === "250px" &&
    !sideMenu.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    sideMenu.style.width = "0";
  }
});

// قفل المنيو بزرار Esc من الكيبورد
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sideMenu.style.width === "250px") {
    sideMenu.style.width = "0";
  }
});
const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  //const navLinks=
  //document.querySelectorAll('ul li a');
  //const section=
  //document.querySelectorAll('section');
  //window.addEventListener('scroll',()=>{
  //let current='';
  //sections.forEach(section =>{
  //const sectionTop = section.offsetTop;
  //const sectionHeight = section.clientHeight;
  //if (window.scrollY>= sectionTop - 60){
  //current =section.getAttribute('id');}
  //});
//navLinks.forEach(link =>{
  //link.classList.remove('active');
  //if(link.grtetAttribute('href')==='#'+ current){
    //link.classList.add('active');
  //}
//});
  //});
  //__________________________________
  