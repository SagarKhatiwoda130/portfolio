
const box = document.getElementById("skillsBox");
const spans = Array.from(box.querySelectorAll("span"));
const total = spans.length;
const angleStep = 360 / total;
let rotation = 0;
let paused = false;

function updatePositions() {
  const boxWidth = box.offsetWidth;
  const screenWidth = window.innerWidth;
  let radius = screenWidth > 1024 ? boxWidth * 1.4 : screenWidth > 768 ? boxWidth * 1.5 : screenWidth > 480 ? boxWidth * 1.4 : boxWidth * 1.3;

  spans.forEach((span, i) => {
    const angle = i * angleStep + rotation;
    const rad = angle * (Math.PI / 180);
    const x = Math.sin(rad) * radius;
    const z = Math.cos(rad) * radius;
    span.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${angle}deg)`;
  });
}

function updateProgressBars() {
  spans.forEach(span => {
    const progressContainer = span.querySelector(".progress-container");
    const description = span.querySelector("p");
    const progressBar = span.querySelector(".progress-bar");
    const percentage = span.querySelector(".percentage");

    progressContainer.style.display = "block";
    description.style.display = "block";
    const targetWidth = parseInt(progressBar.getAttribute("data-width"));
    progressBar.style.width = targetWidth + "%";
    percentage.textContent = targetWidth + "%";
    percentage.style.left = targetWidth + "%";
  });
}

function animateCube() {
  function rotate() {
    if(!paused) rotation += 0.06;
    updatePositions();
    updateProgressBars();
    requestAnimationFrame(rotate);
  }
  rotate();
}

box.addEventListener("mouseenter", () => paused = true);
box.addEventListener("mouseleave", () => paused = false);

updatePositions();
updateProgressBars();
animateCube();
window.addEventListener("resize", updatePositions);