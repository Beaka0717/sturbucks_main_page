const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function (){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function (){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.screenY);
    if(window,scrollY > 500){
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        // top btn 나타나기
        gsap.to('#to-top', .2,{
            x: 0
        } )
    }else{
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // top btn 숨기기
        gsap.to('#to-top', .2,{
            x: 100
        } )
    }
}, 300));
// _.throttle(함수, 시간)s

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    })
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
 gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * .7, // 1 dehi ni 0.7 sec daraa 2 dahi ni 1.4sec daraa gh met
 });
});

// ScrollMagic animation

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,
        triggerHook: .8
     })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})
