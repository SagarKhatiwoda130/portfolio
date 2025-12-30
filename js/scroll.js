window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    const navbar = document.getElementById("navbar");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const myButton = document.getElementById("backBtn");

    if (scrollTop > 110) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky"); 
    }

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = "block";
    }
    else{
        myButton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}