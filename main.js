/*========== SHOW MENU ==========*/
const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");



/*========== SHOW MENU ==========*/
/*========== Validate if constant exists ==========*/
if (toggle) {
    toggle.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
/*========== DARK MODE EFFECTS==========*/
var icon = document.getElementById ("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark__mode");
    if(document.body.classList.contains("dark__mode")){
        icon.src = "images/sun.png"
    }else{
        icon.src = "images/moon.png";
    }
}


/*========== Validate if constant exists ==========*/
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
    strings : ["a Web Developer."],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
})

/* -- IMAGE EFFECTS -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- SMOOTH SCROLL -- */
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar a");
  
    for (const link of links) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    }
  });
  
