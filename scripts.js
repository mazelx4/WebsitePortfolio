function openTab(evt, tabName) {
    // Get all elements with class="tab-content" and hide them
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}

// Carousel functionality
let currentSlide = 0;
const carouselImages = document.querySelector('.carousel-images');
const totalSlides = carouselImages.children.length;

function moveCarousel(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('theme-button').addEventListener('click', function() {
    console.log('Button clicked'); // Check if this logs to the console
    const themeOptions = document.getElementById('theme-options');
    
    if (themeOptions.classList.contains('hidden')) {
        themeOptions.classList.remove('hidden');
        themeOptions.classList.add('show');
        console.log('Showing options'); // Check if this logs when showing
    } else {
        themeOptions.classList.remove('show');
        themeOptions.classList.add('hidden');
        console.log('Hiding options'); // Check if this logs when hiding
    }
});


