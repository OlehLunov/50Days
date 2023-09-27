const progress = document.getElementById("step__progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let active = 1;

next.addEventListener('click', ()=>{
    active++;

    if(active > circles.length) {
        active = circles.length;
    }
    move();
});

prev.addEventListener('click', () => {
    active--;

    if(active < 1) {
        active = 1;
    }

    move();
} )

function move (){
    circles.forEach((circle,index) =>{
        if (index < active){
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })

    const actives = document.querySelectorAll('.active')

    step__progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (active === 1 ){
        prev.disabled = true;
    } else if (active === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

