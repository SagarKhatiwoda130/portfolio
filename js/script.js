const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll("#navbar li a");
const overlay = document.getElementById("menu-overlay");

function toggleMenu() {
  const isOpen = nav.classList.toggle("show");
  overlay.classList.toggle("show", isOpen);
  menuToggle.textContent = isOpen ? "✖" : "☰";
  navLinks.forEach((link, index) => {
    if (isOpen) {
      link.style.transitionDelay = `${index * 0.1}s`;
      link.style.opacity = "1";
      link.style.transform = "translateX(0)";
    } else {
      link.style.transitionDelay = "0s";
      link.style.opacity = "0";
      link.style.transform = "translateX(20px)";
    }
  });
}

menuToggle.addEventListener("click", toggleMenu);
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    if (nav.classList.contains("show")) toggleMenu();
  })
);
overlay.addEventListener("click", () => {
  if (nav.classList.contains("show")) toggleMenu();
});

// Highlight active link
const currentPage = window.location.pathname.split("/").pop();
navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (
    linkPage === currentPage ||
    (linkPage === "index.html" && currentPage === "")
  ) {
    link.classList.add("active");
  }
});

// Back to top
const backBtn = document.getElementById("backBtn");
window.onscroll = () => {
  backBtn.style.display =
    document.body.scrollTop > 10 || document.documentElement.scrollTop > 10
      ? "block"
      : "none";
};
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Breadcrumb
document.addEventListener("DOMContentLoaded", () => {
    const breadcrumbList = document.getElementById("breadcrumb-list");

    // Get full page title
    const fullTitle = document.title || "Current Page";

    // Extract page name before "|"
    const currentPage = fullTitle.split("|")[0].trim();

    // Create current page breadcrumb
    const li = document.createElement("li");
    li.textContent = currentPage;
    li.classList.add("current");

    breadcrumbList.appendChild(li);
});

// Map popup functionality

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