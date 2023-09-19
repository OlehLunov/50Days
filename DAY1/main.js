const panels = document.querySelectorAll(".panel");

function removeClass(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}

panels.forEach(panel => {
        panel.addEventListener("click", () => {
            removeClass();
            panel.classList.add("active");
        })
})