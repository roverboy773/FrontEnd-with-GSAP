const menu=document.querySelector('#mobile-menu');
const menulink=document.querySelector('.navbar-menu');
const navlogo=document.querySelector('#navbar-logo');
const body=document.querySelector('body');

const mobilemenu=()=>{
    menu.classList.toggle('is-active');
    menulink.classList.toggle('active');
    body.classList.toggle('active');

}

menu.addEventListener('click',mobilemenu);

gsap.registerPlugin(ScrollTrigger)
gsap.from('.animate-hero',{
    duration:.6,
    opacity:0,
    y:-150,
    stagger:.5,
    delay:.5
});

gsap.from('.animate-services',{
    scrollTrigger:'.animate-services',
    duration:.5,
    opacity:1,
    x:-150,
    stagger:.12
});

gsap.from('.animate-img',{
    scrollTrigger:'.animate-services',
    duration:1.2,
    opacity:0,
    x:200,
    stagger:.52,
    delay:.5
});

gsap.from('.animate-membership',{
    scrollTrigger:'.animate-membership',
    duration:1,
    opacity:0,
    y:-150,
    stagger:.3,
    delay:1
});


gsap.from('.animate-card',{
    scrollTrigger:'.animate-card',
    duration:1,
    opacity:0,
    y:-150,
    stagger:.1,
    delay:1
});

gsap.from('.animate-team',{
    scrollTrigger:'.animate-team',
    duration:1,
    opacity:0,
    y:-150,
    stagger:.3,
    delay:.3
});

gsap.from('.animate-email',{
    scrollTrigger:'.animate-email',
    duration:.6,
    opacity:0,
   x:150,
    stagger:.4,
    delay:.5
});