// Scrollytelling Animation
window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.element');
    elements.forEach(function(element) {
        var rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('fadeOut');
        } else {
            element.classList.remove('fadeOut');
        }
    });
});

// Responsive Image Carousel
let currentIndex = 0;

function moveCarousel(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-images img').length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    carouselImages.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Tab Navigation
function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tab-link');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(tabName).style.display = 'flex';
    event.currentTarget.className += ' active';
}
