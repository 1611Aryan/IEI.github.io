const about = document.getElementById('about');
const pageHeight = window.innerHeight;
const navHome = document.getElementById('nav-element__home');
const navEvent = document.getElementById('nav-element__events');
const navTeam = document.getElementById('nav-element__team');
const navContact = document.getElementById('nav-element__contact');
//?Nav Management
const nav_close = document.getElementById('close');
const nav_open = document.getElementById('open');
const nav = document.getElementById('nav');
nav_close.addEventListener('click', () => {
    nav_close.style.display = 'none';
    nav_open.style.display = 'block';
    nav.style.display = 'none';
});
nav_close.addEventListener('touch', () => {
    nav_close.style.display = 'none';
    nav_open.style.display = 'block';
    nav.style.display = 'none';
});
nav_open.addEventListener('click', () => {
    nav_open.style.display = 'none';
    nav_close.style.display = 'block';
    nav.style.display = 'flex';
});
nav_open.addEventListener('touch', () => {
    nav_open.style.display = 'none';
    nav_close.style.display = 'block';
    nav.style.display = 'flex';
});
//?/
//?Nav elements change position and color  when different section of pages are scrolled to
const order_nav = (i, j, k, l) => {
    navHome.parentElement.style.order = i;
    navEvent.parentElement.style.order = j;
    navTeam.parentElement.style.order = k;
    navContact.parentElement.style.order = l;
    if (i == '1') {
        navHome.classList.add('active');
        navEvent.classList.remove('active');
        navTeam.classList.remove('active');
        navContact.classList.remove('active');
    }
    if (j == '1') {
        navHome.classList.remove('active');
        navEvent.classList.add('active');
        navTeam.classList.remove('active');
        navContact.classList.remove('active');
    }
    if (k == '1') {
        navHome.classList.remove('active');
        navEvent.classList.remove('active');
        navTeam.classList.add('active');
        navContact.classList.remove('active');
    }
    if (l == '1') {
        navHome.classList.remove('active');
        navEvent.classList.remove('active');
        navTeam.classList.remove('active');
        navContact.classList.add('active');
    }
};
window.addEventListener('scroll', () => {
    if (pageYOffset < 1.7 * pageHeight) {
        order_nav('1', '2', '3', '4');
        if (pageYOffset > 0.45 * pageHeight) {
            //?About us Animation loads when certain scroll position is reached
            about.classList.add('revealio');
        }
    }
    if (pageYOffset >= 1.7 * pageHeight) {
        order_nav('2', '1', '3', '4');
        if (pageYOffset >= 2.9 * pageHeight) {
            document.querySelector('.top-heading').classList.add('alohomora');
        }
        if (pageYOffset >= 4 * pageHeight) {
            order_nav('2', '3', '1', '4');
        }
        if (pageYOffset >= 5 * pageHeight) {
            order_nav('2', '3', '4', '1');
        }
    }
});
//?
/*
const sections = document.querySelectorAll('section');
const options = {
    rootMargin: '250px'
}
const section_observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        console.log(entry.target.classList[0]);
        if (entry.target.classList[0] == 'events') {
            alert('Hi');
        }
    })

}, options);
sections.forEach((section) => {
    section_observer.observe(section);
})
*/
//?home image transition
const hero = document.getElementById('hero');
const home = document.querySelector('.home');
const homeId = document.getElementById('home');
homeId.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 765) {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        hero.style.transition = 'all 0.15s ease';
        hero.style.transform = 'translateX(' + xAxis + 'px) translateY(' + yAxis + 'px)';
    }
});
//?reset upon leaving
home.addEventListener('mouseleave', (e) => {
    hero.style.transition = 'all 0.5s ease';
    hero.style.transform = 'translateX(0px) translateY(0px)';
});
//?Circular cursor
homeId.addEventListener('mousemove', e => {
    if (window.innerWidth > 765) {
        let xAxis = e.pageX;
        let yAxis = e.pageY;
        document.getElementById('cursor_circle_home').style.transition = "all 0.1s";
        document.getElementById('cursor_circle_home').style.clipPath = "circle(5% at " + xAxis + "px " + yAxis + "px)";
    }
});
homeId.addEventListener('mouseleave', e => {
    if (window.innerWidth > 765) {
        let xAxis = e.pageX;
        let yAxis = e.pageY;
        document.getElementById('cursor_circle_home').style.transition = "all 0.5s";
        document.getElementById('cursor_circle_home').style.clipPath = "circle(0% at  center)";
    }
});
//?
//?The bubble appears when mouse is moved over About section
const about_parent = document.getElementById('about_parent');
const cursor_circle = document.getElementById('cursor_circle');
about_parent.addEventListener('mousemove', e => {
    if (window.innerWidth > 765) {
        let xAxis = e.pageX;
        let yAxis = e.pageY - window.innerHeight;
        cursor_circle.style.transition = "all 0.1s";
        cursor_circle.style.clipPath = "circle(5% at " + xAxis + "px " + yAxis + "px)";
    }
});
about_parent.addEventListener('mouseleave', e => {
    if (window.innerWidth > 765) {
        let xAxis = e.pageX;
        let yAxis = e.pageY - window.innerHeight;
        cursor_circle.style.transition = "all 0.5s";
        cursor_circle.style.clipPath = "circle(0% at center)";
    }
});
//?
//?The bubble appears when mouse is moved over events section
document.getElementById('events').addEventListener('mousemove', e => {
    if (window.innerWidth > 765) {
        let xAxis = e.pageX;
        let yAxis = e.pageY - window.innerHeight * 2.;
        document.getElementById('cursor_circle_events').style.transition = "all 0.1s";
        document.getElementById('cursor_circle_events').style.clipPath = "circle(5% at " + xAxis + "px " + yAxis + "px)";
    }
});
document.getElementById('events').addEventListener('mouseleave', e => {
    if (window.innerWidth > 765) {
        let xAxis = e.pageX;
        let yAxis = e.pageY - window.innerHeight * 2;
        document.getElementById('cursor_circle_events').style.transition = "all 0.5s";
        document.getElementById('cursor_circle_events').style.clipPath = "circle(0% at center)";
    }
});
//?
//?The bubble appears when mouse is moved over past events section
document.getElementById('pastEvents').addEventListener('mousemove', e => {
    if (window.innerWidth > 765) {
        let xAxis = e.pageX;
        let yAxis = e.pageY - window.innerHeight * 3.5;
        document.getElementById('cursor_circle_pastevents').style.transition = "all 0.1s";
        document.getElementById('cursor_circle_pastevents').style.clipPath = "circle(5% at " + xAxis + "px " + yAxis + "px)";
    }
});
document.getElementById('pastEvents').addEventListener('mouseleave', e => {
    document.getElementById('cursor_circle_pastevents').style.transition = "all 0.5s";
    document.getElementById('cursor_circle_pastevents').style.clipPath = "circle(0% at  center)";
});
document.getElementById('cursor_image_carousel').addEventListener('mouseenter', e => {
    if (window.innerWidth > 765) {
        let xAxis = e.pageX;
        let yAxis = e.pageY - window.innerHeight * 3.5;
        document.getElementById('cursor_circle_pastevents').style.transition = "all 0.1s";
        document.getElementById('cursor_circle_pastevents').style.clipPath = "circle(2% at " + xAxis + "px " + yAxis + "px)";
    }
});
document.getElementById('cursor_image_carousel').addEventListener('mousemove', e => {
    if (window.innerWidth > 765) {
        let xAxis = e.pageX;
        let yAxis = e.pageY - window.innerHeight * 3.5;
        document.getElementById('cursor_circle_pastevents').style.transition = "all 0.1s";
        document.getElementById('cursor_circle_pastevents').style.clipPath = "circle(2% at " + xAxis + "px " + yAxis + "px)";
    }
});
//?
//?Cursor on team section
document.getElementById('team').addEventListener('mousemove', e => {
    if (window.innerWidth > 765) {
        let xAxis = e.pageX;
        let yAxis = e.pageY - window.innerHeight * 4.5;
        document.getElementById('cursor_circle_team').style.transition = "all 0.1s";
        document.getElementById('cursor_circle_team').style.clipPath = "circle(5% at " + xAxis + "px " + yAxis + "px)";
    }
});
document.getElementById('team').addEventListener('mouseleave', e => {
    if (window.innerWidth > 765) {
        document.getElementById('cursor_circle_team').style.transition = "all 0.5s";
        document.getElementById('cursor_circle_team').style.clipPath = "circle(0% at center)";
    }
});
//?
const prevBtn = document.getElementById('prevEvents_prevButton');
const nextBtn = document.getElementById('prevEvents_nextButton');
let position = 0;
const noOfImages = document.querySelectorAll('.pastEvent_image').length;
const images = document.getElementById('pastEvents_allimages');
let moveImageBy = 0;
const imageRight = () => {
    position -= moveImageBy;
    if (position < -1 * (noOfImages - 1) * moveImageBy) {
        position = 0;
    }
    images.style.transform = `translateX(${position}px)`;
};
const imageLeft = () => {
    position += moveImageBy;
    if (position > 0) {
        position = -1 * (noOfImages - 1) * moveImageBy;
    }
    images.style.transform = `translateX(${position}px)`;
};
function handleGesture() {
    if (touchendX < touchstartX) {
        imageRight();
    }
    if (touchendX > touchstartX) {
        imageLeft();
    }
}
//?Checks if prev button is not empty then adds the event listener of click
//?Adding responsiveness
if (window.innerWidth > 765) {
    moveImageBy = (window.innerWidth * 75 / 100) * 70 / 100;
}
else {
    moveImageBy = (window.innerWidth * 90 / 100) * 95 / 100;
}
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        imageLeft();
    });
}
//?Checks if next button is not empty then adds the event listener of click
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        imageRight();
    });
}
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;
images.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);
images.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);
