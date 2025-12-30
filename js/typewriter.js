/*********************************
 TYPEWRITER 1 (ROTATING JOB TITLES)
**********************************/
const jobTitles = [
    "Web Developer",
    "Creative Designer",
    "Wordpress Developer"
];

let titleIndex = 0;
let charIndex = 0;
let isDeletingTitle = false;

const typingSpeed1 = 120;
const deletingSpeed1 = 80;
const pauseAfterType = 1500;

function typeWriter1() {
    const typeWriter1El = document.getElementById("typeWriter1");
    const currentTitle = jobTitles[titleIndex];

    if (!isDeletingTitle) {
        // Typing
        typeWriter1El.innerHTML = currentTitle.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentTitle.length) {
            setTimeout(() => (isDeletingTitle = true), pauseAfterType);
        }
    } else {
        // Deleting
        typeWriter1El.innerHTML = currentTitle.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeletingTitle = false;
            titleIndex = (titleIndex + 1) % jobTitles.length;
        }
    }

    setTimeout(
        typeWriter1,
        isDeletingTitle ? deletingSpeed1 : typingSpeed1
    );
}

// Start rotating titles on page load
window.addEventListener("load", typeWriter1);


/****************************
 TYPEWRITER 2 (BUTTON CLICK)
*****************************/
let j = 0;
const txt =
    "I'm Sagar Khatiwoda, a 21-year-old creative professional passionate about crafting user-friendly websites, stunning visuals, and engaging contents. I believe in continuous learning and am always seeking opportunities to improve my skills and grow as a developer.";
const speed = 120;
const eraseSpeed = 80;
const pauseBeforeErase = 2000;
let isTyping = false;

function updateText(showCursor = true) {
    const typeWriter2 = document.getElementById("typeWriter2");
    const cursor = showCursor ? '<span id="cursor">|</span>' : "";
    typeWriter2.innerHTML = txt.substring(0, j) + cursor;
}

function typeWriter() {
    if (j < txt.length) {
        j++;
        updateText();
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseWriter, pauseBeforeErase);
    }
}

function eraseWriter() {
    if (j > 0) {
        j--;
        updateText();
        setTimeout(eraseWriter, eraseSpeed);
    } else {
        updateText(false);
        isTyping = false;
    }
}

function startTypeWriter() {
    if (!isTyping) {
        isTyping = true;
        j = 0;
        updateText();
        typeWriter();
    }
}

document.querySelector(".btn").addEventListener("click", startTypeWriter);


/***********************
 CURSOR BLINK (TYPEWRITER 2)
***********************/
setInterval(() => {
    const cursor = document.getElementById("cursor");
    if (cursor) {
        cursor.style.visibility =
            cursor.style.visibility === "hidden" ? "visible" : "hidden";
    }
}, 500);
