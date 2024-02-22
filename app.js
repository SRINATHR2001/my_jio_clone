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
    const sections = [
        { container: document.querySelector(".car-slide"), leftBtn: document.querySelector(".nav-button-left button"), rightBtn: document.querySelector(".nav-button-right button") },
        { container: document.querySelector(".hot-pick"), leftBtn: document.querySelector(".hot-left button"), rightBtn: document.querySelector(".hot-right button") },
        { container: document.querySelector(".lang-pick"), leftBtn: document.querySelector(".lang-left button"), rightBtn: document.querySelector(".lang-right button") },
        { container: document.querySelector(".top-rate-pick"), leftBtn: document.querySelector(".top-rate-left button"), rightBtn: document.querySelector(".top-rate-right button") },
        { container: document.querySelector(".top-pop-pick"), leftBtn: document.querySelector(".top-pop-left button"), rightBtn: document.querySelector(".top-pop-right button") },
        { container: document.querySelector(".spt-pick"), leftBtn: document.querySelector(".spt-left button"), rightBtn: document.querySelector(".spt-right button") },
        { container: document.querySelector(".pet-pick"), leftBtn: document.querySelector(".pet-left button"), rightBtn: document.querySelector(".pet-right button") },
        { container: document.querySelector(".tata-pick"), leftBtn: document.querySelector(".tata-left button"), rightBtn: document.querySelector(".tata-right button") },
    ];

    sections.forEach(({ container, leftBtn, rightBtn }) => {
        const containerWidth = container.clientWidth;
        leftBtn.addEventListener("click", function () {
            container.scrollTo({
                left: container.scrollLeft - containerWidth,
                behavior: "smooth"
            });
        });

        rightBtn.addEventListener("click", function () {
            container.scrollTo({
                left: container.scrollLeft + containerWidth,
                behavior: "smooth"
            });
        });

        container.addEventListener("scroll", function () {
            leftBtn.style.display = container.scrollLeft === 0 ? "none" : "block";
            rightBtn.style.display = container.scrollLeft + container.clientWidth === container.scrollWidth ? "none" : "block";
        });
    });
});

function hideModal() {
    var options = document.getElementById('bg-blacker');
    options.style.display = 'none';
    
}


function hideavtModal() {
    var options = document.getElementById('bg-avt');
    options.style.display = 'none';
    
}

function showModal() {
    hideavtModal();
    var options = document.getElementById('bg-blacker');
    options.style.display = 'block';
    
}
function showavtModal() {
    hideModal();
    var options = document.getElementById('bg-avt');
    options.style.display = 'block';
    
}