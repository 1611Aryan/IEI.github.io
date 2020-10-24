const hero = document.getElementById('hero');
const home = document.querySelector('.home');
home.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    hero.style.transition = 'none';
    hero.style.transform = 'translateX(' + xAxis + 'px) translateY(' + yAxis + 'px)';
});
home.addEventListener('mouseleave', (e) => {
    hero.style.transition = 'all 0.5s ease';
    hero.style.transform = 'translateX(0px) translateY(0px)';
});
