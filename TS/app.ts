const hero = document.getElementById('hero');
const home = document.querySelector('.home');
const homeId = document.getElementById('home');
const headClipImg = document.getElementById('home-about-heading');
const headClipSVG = document.getElementById('home-about-svg');
const about = document.getElementById('about');
const about_parent = document.getElementById('about_parent');
const cursor_circle = document.getElementById('cursor_circle');
const pageHeight = window.innerHeight;
const navHome = document.getElementById('nav-element__home');
const navEvent = document.getElementById('nav-element__events');
const navTeam = document.getElementById('nav-element__team');
const navContact = document.getElementById('nav-element__contact');
const prevBtn = document.getElementById('previous_btn');
const nextBtn = document.getElementById('next_btn');
const eventImage = document.getElementById('eventImage');
const imgArray = [
    'IMG/Events/1.jpg',
    'IMG/Events/2.jpg',
    'IMG/Events/3.jpg',
    'IMG/Events/4.jpg',
    'IMG/Events/5.jpg',
    'IMG/Events/6.jpg',
    'IMG/Events/7.jpg',
    'IMG/Events/8.jpg',
];

//?hero image transition
homeId.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    hero.style.transition = 'all 0.15s ease';
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
});

//?The bubble appears when mouse is moved over About section


about_parent.addEventListener('mousemove', e => {
    let xAxis = e.pageX;
    let yAxis = e.pageY - window.innerHeight;
    cursor_circle.style.transition = "all 0.1s";
    cursor_circle.style.clipPath = "circle(10% at " + xAxis + "px " + yAxis + "px)";
});

about_parent.addEventListener('mouseleave', e => {
    let xAxis = e.pageX;
    let yAxis = e.pageY - window.innerHeight;
    cursor_circle.style.transition = "all 0.5s";
    cursor_circle.style.clipPath = "circle(0% at " + xAxis + "px " + yAxis + "px)";

});
//?The bubble appears when mouse is moved over events section
document.getElementById('events').addEventListener('mousemove', e => {
    let xAxis = e.pageX;
    let yAxis = e.pageY - window.innerHeight * 2.;
    document.getElementById('cursor_circle_events').style.transition = "all 0.1s";
    document.getElementById('cursor_circle_events').style.clipPath = "circle(5% at " + xAxis + "px " + yAxis + "px)";
    console.log(yAxis);
});

document.getElementById('events').addEventListener('mouseleave', e => {
    let xAxis = e.pageX;
    let yAxis = e.pageY - window.innerHeight;
    document.getElementById('cursor_circle_events').style.transition = "all 0.5s";
    document.getElementById('cursor_circle_events').style.clipPath = "circle(0% at " + xAxis + "px " + yAxis + "px)";
});

//?Nav elements change position and color  when different section of pages are scrolled to
window.addEventListener('scroll', () => {
    if (pageYOffset < 1.7 * pageHeight) {
        navHome.classList.add('active');
        navEvent.classList.remove('active');
        navTeam.classList.remove('active');
        navTeam.style.marginRight = '0px';
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
        navTeam.style.marginRight = '0px';
        navContact.classList.remove('active');

        if (pageYOffset >= 2.9 * pageHeight) {
            document.querySelector('.nowYouSeeMe').classList.add('alohomora');
        }
        if (pageYOffset >= 4 * pageHeight) {
            navHome.classList.remove('active');
            navEvent.classList.remove('active');
            navTeam.classList.add('active');
            navTeam.style.marginRight = '20px';
            navContact.classList.remove('active');
        }
    }
});


//?Counters Don't Mess
let i = 1;
let j = 0;
//?Checks if prev button is not empty then adds the event listener of click
if (prevBtn) {
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

    prevBtn.addEventListener('touch', () => {
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
}
//?Checks if next button is not empty then adds the event listener of click
if (nextBtn) {
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
        else {
            (<HTMLImageElement>eventImage).src = imgArray[i];
            j++;
        }

    });

    nextBtn.addEventListener('touch', () => {
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
        else {
            (<HTMLImageElement>eventImage).src = imgArray[i];
            j++;
        }

    });
}

//?Changing team cards based on radio
const radio1 = document.getElementById('card_list_one');
const radio2 = document.getElementById('card_list_two');
const radio3 = document.getElementById('card_list_three');
const name1 = document.getElementById('name_card_one');
const name2 = document.getElementById('name_card_two');
const name3 = document.getElementById('name_card_three');
const img1 = document.getElementById('card_image_one');
const img2 = document.getElementById('card_image_two');
const img3 = document.getElementById('card_image_three');
const designation1 = document.getElementById('card_designation_one');
const designation2 = document.getElementById('card_designation_two');
const designation3 = document.getElementById('card_designation_three');
const about1 = document.getElementById('card_about_one');
const about2 = document.getElementById('card_about_two');
const about3 = document.getElementById('card_about_three');
const card_credentials = [
    ['Harry Potter', 'IMG/Team/potter.jpg', 'Auror', 'The Boy who Lived. The Boy who cheated death twice. The master of Deathly Hallows.'],
    ['Ron Weasley', 'IMG/Team/weasley.jpg', 'Auror', 'The Boy who Lived. The Boy who cheated death twice. The master of Deathly Hallows.'],
    ['Hermoine Granger', 'IMG/Team/hermione.jpg', 'Minister Of Magic', 'The brightest witch of her age. The founder of S.P.E.W'],
    ['Harry Potter', 'IMG/Team/potter.jpg', 'Auror', 'The Boy who Lived. The Boy who cheated death twice. The master of Deathly Hallows.'],
    ['Ron Weasley', 'IMG/Team/weasley.jpg', 'Auror', 'The Boy who Lived. The Boy who cheated death twice. The master of Deathly Hallows.']
]


const render_card = (i = 0) => {
    //?Changes the  name of all three cards
    name1.innerHTML = card_credentials[i][0];
    name2.innerHTML = card_credentials[i + 1][0];
    name3.innerHTML = card_credentials[i + 2][0];
    //?Changes the image of three cards 
    (<HTMLImageElement>img1).src = card_credentials[i][1];
    (<HTMLImageElement>img2).src = card_credentials[i + 1][1];
    (<HTMLImageElement>img3).src = card_credentials[i + 2][1];
    //?changes the designation of three cards
    designation1.innerHTML = card_credentials[i][2];
    designation2.innerHTML = card_credentials[i + 1][2];
    designation3.innerHTML = card_credentials[i + 2][2];
    //?Changes the about section of cards
    about1.innerHTML = card_credentials[i][3];
    about2.innerHTML = card_credentials[i + 1][3];
    about3.innerHTML = card_credentials[i + 2][3];
}

radio1.addEventListener('click', () => {
    render_card(0);
});

radio2.addEventListener('click', () => {
    render_card(1);
});

radio3.addEventListener('click', () => {
    render_card(2);
});
