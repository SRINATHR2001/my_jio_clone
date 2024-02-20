document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".mini-nav-item");
    const scrollLeftButton = document.querySelector(".L-button button");
    const scrollRightButton = document.querySelector(".R-button button");
    const scrollAmount = 200; 
    scrollLeftButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft - scrollAmount,
            behavior: "smooth"
        });
    });
    scrollRightButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft + scrollAmount,
            behavior: "smooth"
        });
    });
    scrollContainer.addEventListener("scroll", function () {
        if (scrollContainer.scrollLeft === 0) {
            scrollLeftButton.style.visibility = "hidden";
        } else {
            scrollLeftButton.style.visibility = "visible";
        }

        if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
            scrollRightButton.style.visibility = "hidden";
        } else {
            scrollRightButton.style.visibility = "visible";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".car-slide");
    const scrollLeftButton = document.querySelector(".nav-button-left button");
    const scrollRightButton = document.querySelector(".nav-button-right button");
    const scrollAmount = 400; 
    scrollLeftButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft - scrollAmount,
            behavior: "smooth"
        });
    });
    scrollRightButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft + scrollAmount,
            behavior: "smooth"
        });
    });
    scrollContainer.addEventListener("scroll", function () {
        if (scrollContainer.scrollLeft === 0) {
            scrollLeftButton.style.display = "none";
        } else {
            scrollLeftButton.style.display = "block";
        }

        if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
            scrollRightButton.style.display = "none";
        } else {
            scrollRightButton.style.display = "block";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".hot-pick");
    const scrollLeftButton = document.querySelector(".hot-left button");
    const scrollRightButton = document.querySelector(".hot-right button");
    const scrollAmount = 400; 
    scrollLeftButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft - scrollAmount,
            behavior: "smooth"
        });
    });
    scrollRightButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft + scrollAmount,
            behavior: "smooth"
        });
    });
    scrollContainer.addEventListener("scroll", function () {
        if (scrollContainer.scrollLeft === 0) {
            scrollLeftButton.style.display = "none";
        } else {
            scrollLeftButton.style.display = "block";
        }

        if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
            scrollRightButton.style.display = "none";
        } else {
            scrollRightButton.style.display = "block";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".lang-pick");
    const scrollLeftButton = document.querySelector(".lang-left button");
    const scrollRightButton = document.querySelector(".lang-right button");
    const scrollAmount = 400; 
    scrollLeftButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft - scrollAmount,
            behavior: "smooth"
        });
    });
    scrollRightButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft + scrollAmount,
            behavior: "smooth"
        });
    });
    scrollContainer.addEventListener("scroll", function () {
        if (scrollContainer.scrollLeft === 0) {
            scrollLeftButton.style.display = "none";
        } else {
            scrollLeftButton.style.display = "block";
        }

        if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
            scrollRightButton.style.display = "none";
        } else {
            scrollRightButton.style.display = "block";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".top-rate-pick");
    const scrollLeftButton = document.querySelector(".top-rate-left button");
    const scrollRightButton = document.querySelector(".top-rate-right button");
    const scrollAmount = 400; 
    scrollLeftButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft - scrollAmount,
            behavior: "smooth"
        });
    });
    scrollRightButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft + scrollAmount,
            behavior: "smooth"
        });
    });
    scrollContainer.addEventListener("scroll", function () {
        if (scrollContainer.scrollLeft === 0) {
            scrollLeftButton.style.display = "none";
        } else {
            scrollLeftButton.style.display = "block";
        }

        if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
            scrollRightButton.style.display = "none";
        } else {
            scrollRightButton.style.display = "block";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".top-pop-pick");
    const scrollLeftButton = document.querySelector(".top-pop-left button");
    const scrollRightButton = document.querySelector(".top-pop-right button");
    const scrollAmount = 400; 
    scrollLeftButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft - scrollAmount,
            behavior: "smooth"
        });
    });
    scrollRightButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft + scrollAmount,
            behavior: "smooth"
        });
    });
    scrollContainer.addEventListener("scroll", function () {
        if (scrollContainer.scrollLeft === 0) {
            scrollLeftButton.style.display = "none";
        } else {
            scrollLeftButton.style.display = "block";
        }

        if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
            scrollRightButton.style.display = "none";
        } else {
            scrollRightButton.style.display = "block";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".spt-pick");
    const scrollLeftButton = document.querySelector(".spt-left button");
    const scrollRightButton = document.querySelector(".spt-right button");
    const scrollAmount = 400; 
    scrollLeftButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft - scrollAmount,
            behavior: "smooth"
        });
    });
    scrollRightButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft + scrollAmount,
            behavior: "smooth"
        });
    });
    scrollContainer.addEventListener("scroll", function () {
        if (scrollContainer.scrollLeft === 0) {
            scrollLeftButton.style.display = "none";
        } else {
            scrollLeftButton.style.display = "block";
        }

        if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
            scrollRightButton.style.display = "none";
        } else {
            scrollRightButton.style.display = "block";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".pet-pick");
    const scrollLeftButton = document.querySelector(".pet-left button");
    const scrollRightButton = document.querySelector(".pet-right button");
    const scrollAmount = 400; 
    scrollLeftButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft - scrollAmount,
            behavior: "smooth"
        });
    });
    scrollRightButton.addEventListener("click", function () {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft + scrollAmount,
            behavior: "smooth"
        });
    });
    scrollContainer.addEventListener("scroll", function () {
        if (scrollContainer.scrollLeft === 0) {
            scrollLeftButton.style.display = "none";
        } else {
            scrollLeftButton.style.display = "block";
        }

        if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
            scrollRightButton.style.display = "none";
        } else {
            scrollRightButton.style.display = "block";
        }
    });
});