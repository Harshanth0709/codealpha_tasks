// ==========================
// SELECT ELEMENTS
// ==========================

const galleryItems = document.querySelectorAll(".gallery-item");
const filterButtons = document.querySelectorAll(".filter-btn");

const searchInput = document.getElementById("searchInput");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const themeToggle = document.getElementById("themeToggle");

const downloadBtn = document.getElementById("downloadBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

let currentIndex = 0;

// ==========================
// FILTER IMAGES
// ==========================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});

// ==========================
// SEARCH IMAGES
// ==========================

searchInput.addEventListener("keyup", () => {

    const searchValue =
        searchInput.value.toLowerCase();

    galleryItems.forEach(item => {

        const title =
            item.querySelector("h3")
            .textContent
            .toLowerCase();

        if (
            title.includes(searchValue)
        ) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

});

// ==========================
// LIGHTBOX
// ==========================

const images =
document.querySelectorAll(".gallery-item img");

images.forEach((img,index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.classList.add("active");

    });

});

function showImage()
{
    lightboxImg.src =
    images[currentIndex].src;
}

// ==========================
// CLOSE LIGHTBOX
// ==========================

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// ==========================
// NEXT IMAGE
// ==========================

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= images.length)
    {
        currentIndex = 0;
    }

    showImage();

});

// ==========================
// PREVIOUS IMAGE
// ==========================

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0)
    {
        currentIndex =
        images.length - 1;
    }

    showImage();

});

// ==========================
// CLICK OUTSIDE TO CLOSE
// ==========================

lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox)
    {
        lightbox.classList.remove("active");
    }

});

// ==========================
// KEYBOARD CONTROLS
// ==========================

document.addEventListener("keydown",(e)=>{

    if(
        !lightbox.classList.contains("active")
    )
    {
        return;
    }

    if(e.key === "ArrowRight")
    {
        nextBtn.click();
    }

    if(e.key === "ArrowLeft")
    {
        prevBtn.click();
    }

    if(e.key === "Escape")
    {
        lightbox.classList.remove("active");
    }

});

// ==========================
// DARK MODE
// ==========================

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(
        document.body.classList.contains("dark")
    )
    {
        themeToggle.innerHTML =
        "☀ Light Mode";
    }
    else
    {
        themeToggle.innerHTML =
        "🌙 Dark Mode";
    }

});

// ==========================
// DOWNLOAD IMAGE
// ==========================

downloadBtn.addEventListener("click",()=>{

    const link =
    document.createElement("a");

    link.href = lightboxImg.src;

    link.download = "gallery-image";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

});

// ==========================
// FULLSCREEN IMAGE
// ==========================

fullscreenBtn.addEventListener("click",()=>{

    if(lightboxImg.requestFullscreen)
    {
        lightboxImg.requestFullscreen();
    }
    else if(lightboxImg.webkitRequestFullscreen)
    {
        lightboxImg.webkitRequestFullscreen();
    }
    else if(lightboxImg.msRequestFullscreen)
    {
        lightboxImg.msRequestFullscreen();
    }

});

// ==========================
// IMAGE HOVER ANIMATION
// ==========================

galleryItems.forEach(item => {

    item.addEventListener("mouseenter",()=>{

        item.style.transform =
        "translateY(-10px) scale(1.02)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform =
        "translateY(0px) scale(1)";

    });

});

// ==========================
// PAGE LOAD ANIMATION
// ==========================

window.addEventListener("load",()=>{

    galleryItems.forEach((item,index)=>{

        setTimeout(()=>{

            item.style.opacity = "1";
            item.style.transform =
            "translateY(0px)";

        },index * 100);

    });

});

// ==========================
// INITIAL STYLE
// ==========================

galleryItems.forEach(item=>{

    item.style.opacity = "0";
    item.style.transform =
    "translateY(30px)";
    item.style.transition =
    "all 0.5s ease";

});

// ==========================
// IMAGE COUNTER
// ==========================

const counter =
document.createElement("div");

counter.style.position = "fixed";
counter.style.bottom = "20px";
counter.style.right = "20px";
counter.style.background = "#ff6b6b";
counter.style.color = "white";
counter.style.padding = "10px 20px";
counter.style.borderRadius = "30px";
counter.style.fontWeight = "bold";

counter.innerHTML =
`Total Images: ${images.length}`;

document.body.appendChild(counter);