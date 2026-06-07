// Header shadow

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){
        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.08)";
    } else {
        header.style.boxShadow = "none";
    }

});


// Image Modal

const modal =
document.getElementById("imageModal");

const modalImg =
document.getElementById("modalImage");

const images =
document.querySelectorAll(".gallery-image");

const closeBtn =
document.querySelector(".close-modal");


images.forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = img.src;

        modalImg.alt = img.alt;

    });

});


closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});


modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});
