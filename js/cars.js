document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".cars-list-tab-button");
    const tabPanel = document.querySelectorAll(".tab-right-panel");

    tabButtons.forEach((button, index) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();


            tabButtons.forEach(btn => btn.classList.remove("current-tab"));
            button.classList.add("current-tab");


            tabPanel.forEach(pane => pane.classList.remove("tab-right-panel-active"));
            tabPanel[index].classList.add("tab-right-panel-active");
        });
    });
});



const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex =[...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})
