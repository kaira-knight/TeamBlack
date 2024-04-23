let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let slide = document.querySelectorAll('.slide-lined');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function() {
        itemActive = itemActive + 1;
        if (itemActive >= countItem) {
            itemActive = 0;
        }
        showSlider();
    }
    //event prev click
prev.onclick = function() {
        itemActive = itemActive - 1;
        if (itemActive < 0) {
            itemActive = countItem - 1;
        }
        showSlider();
    }
    // auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)

function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    let slideActiveOld = document.querySelector('.slide-lined.colored');
    let sliderActiveOld = document.querySelector('.slide-lined.colored');
    slideActiveOld.classList.remove('colored');
    sliderActiveOld.classList.remove('colored');

    // active new item

    slide[itemActive].classList.add('colored');
    slider[itemActive].classList.add('colored');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


// watch history

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".box-card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
    isAutoPlay = true,
    startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
}



carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));


// watch histry end/


// video title start 

const wrapper_d = document.querySelector(".wrapper_d");
const carousel1 = document.querySelector(".carousel");
const firstCardWidth1 = carousel.querySelector(".card").offsetWidth;
const arrowBtns1 = document.querySelectorAll(".wrapper_d i");
const carouselChildrens1 = [...carousel.children];

let isDragging1 = false,
    isAutoPlay1 = true,
    startX1, startScrollLeft1, timeoutId1;

// Get the number of cards that can fit in the carousel at once
let cardPerView1 = Math.round(carousel1.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView1).reverse().forEach(card => {
    carousel1.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens1.slice(0, cardPerView1).forEach(card => {
    carousel1.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel1.classList.add("no-transition");
carousel1.scrollLeft1 = carousel1.offsetWidth;
carousel1.classList.remove("no-transition");

const dragStart1 = (e) => {
    isDragging = true;
    carousel1.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX1 = e.pageX1;
    startScrollLeft1 = carousel1.scrollLeft1;
}

const dragging1 = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel1.scrollLeft = startScrollLeft1 - (e.pageX1 - startX1);
}

const dragStop1 = () => {
    isDragging = false;
    carousel1.classList.remove("dragging");
}

const infiniteScroll1 = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel1.scrollLeft === 0) {
        carousel1.classList.add("no-transition");
        carousel1.scrollLeft1 = carousel1.scrollWidth - (2 * carousel1.offsetWidth);
        carousel1.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(carousel1.scrollLeft1) === carousel1.scrollWidth - carousel1.offsetWidth) {
        carousel1.classList.add("no-transition");
        carousel1.scrollLeft1 = carousel.offsetWidth;
        carousel1.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId1);
    if (!wrapper_d.matches(":hover")) autoPlay();
}



carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("mousemove", dragging1);
document.addEventListener("mouseup", dragStop1);
carousel1.addEventListener("scroll", infiniteScroll1);
wrapper_d.addEventListener("mouseenter", () => clearTimeout(timeoutId1));

// video title end