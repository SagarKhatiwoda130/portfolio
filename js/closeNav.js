const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const mainContent = document.querySelector('body');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');

    menuToggle.textContent = nav.classList.contains('open') ? '✖' : '☰';
    
    if (nav.classList.contains('open')) {
        document.querySelectorAll('body > *:not(header)').forEach(el => {
            el.classList.add('blur');
        });
    } else {
        document.querySelectorAll('body > *:not(header)').forEach(el => {
            el.classList.remove('blur');
        });
    }
});

document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('open');
        menuToggle.textContent = '☰';
    
        document.querySelectorAll('body > *:not(header)').forEach(el => {
            el.classList.remove('blur');
        });
    }
});

const links = document.querySelectorAll("#navbar a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

const locationIcon = document.getElementById('location');
const mapContainer = document.getElementById('map-container');
const closeMapBtn = document.getElementById('close-map');

if(locationIcon && mapContainer && closeMapBtn){
    locationIcon.addEventListener('click', (event) => {
        mapContainer.style.display =
            mapContainer.style.display === "block" ? "none" : "block";
        event.stopPropagation();
    });

    closeMapBtn.addEventListener('click', () => {
        mapContainer.style.display = "none";
    });

    document.addEventListener('click', (event) => {
        if (!mapContainer.contains(event.target) && !locationIcon.contains(event.target)) {
            mapContainer.style.display = "none";
        }
    });
}
