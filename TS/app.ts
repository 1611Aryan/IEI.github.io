const hero = document.getElementById('hero');
const home = document.querySelector('.home');
const headClipImg = document.getElementById('home-about-heading');
const headClipSVG = document.getElementById('home-about-svg');
const about = document.getElementById('about');
const pageHeight = window.innerHeight;
const navHome = document.getElementById('nav-element__home');
const navEvent = document.getElementById('nav-element__events');
const navTeam = document.getElementById('nav-element__team');
const navContact = document.getElementById('nav-element__contact');
const prevBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const eventImage = document.getElementById('eventImage');
const imgArray = ['IMG/Events/1.jpg',
    'IMG/Events/2.jpg',
    'IMG/Events/3.jpg',
    'IMG/Events/4.jpg',
    'IMG/Events/5.jpg',
    'IMG/Events/6.jpg',
    'IMG/Events/7.jpg',
    'IMG/Events/8.jpg',
];

//?hero image transition
(<HTMLImageElement>home).addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    hero.style.transition = 'none';
    hero.style.transform = 'translateX(' + xAxis + 'px) translateY(' + yAxis + 'px)';
});
//?reset upon leaving
(<HTMLImageElement>home).addEventListener('mouseleave', (e) => {
    hero.style.transition = 'all 0.5s ease';
    hero.style.transform = 'translateX(0px) translateY(0px)';

});

//?about heading and border animation
headClipImg.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    headClipImg.style.transition = 'none';
    headClipSVG.style.transition = "none";
    headClipImg.style.backgroundPositionX = xAxis + 'px';
    headClipImg.style.backgroundPositionY = yAxis + 'px';
    headClipSVG.style.backgroundPositionX = xAxis / 3 + 'px';
    headClipSVG.style.backgroundPositionY = yAxis / 3 + 'px';
});

//?reset upon leaving
headClipImg.addEventListener('mouseleave', () => {
    headClipImg.style.transition = "0.5s all ease";
    headClipSVG.style.transition = "0.5s all ease";
    headClipImg.style.backgroundPositionX = '0px';
    headClipImg.style.backgroundPositionY = '0px';
    headClipSVG.style.backgroundPositionX = '0px';
    headClipSVG.style.backgroundPositionY = '0px';
})

//?Nav elements change position and color  when different section of pages are scrolled to
window.addEventListener('scroll', () => {
    if (pageYOffset < 1.7 * pageHeight) {
        navHome.classList.add('active');
        navEvent.classList.remove('active');
        navTeam.classList.remove('active');
        navContact.classList.remove('active');
        if (pageYOffset > 0.45 * pageHeight) {
            //?About us Animation loads when certain scroll position is reached
            about.classList.add('revealio');
        }
    }
    if (pageYOffset >= 1.7 * pageHeight) {
        navHome.classList.remove('active');
        navEvent.classList.add('active');
        navTeam.classList.remove('active');
        navContact.classList.remove('active');
    }
});

let i = 1;
let j = 0;
prevBtn.addEventListener('click', () => {
    i--;
    if (j == 0) {
        i = 7;
        j++;
        (<HTMLImageElement>eventImage).src = imgArray[i];
    }
    else if (i < 0) {
        i = 7;
        (<HTMLImageElement>eventImage).src = imgArray[i];
    }

    else {
        (<HTMLImageElement>eventImage).src = imgArray[i];
    }

});


nextBtn.addEventListener('click', () => {
    i++;
    if (j == 0) {
        i = 1;
        (<HTMLImageElement>eventImage).src = imgArray[i];
        j++;
    }
    else if (i > 7) {
        i = 0;
        (<HTMLImageElement>eventImage).src = imgArray[i];
        j++;
    }
    else
        (<HTMLImageElement>eventImage).src = imgArray[i];
    j++;
}
   
});