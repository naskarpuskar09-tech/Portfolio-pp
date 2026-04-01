

/* SCROLL REVEAL */
window.addEventListener("scroll", function() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});

/* LOADER */
window.addEventListener("load", () => {
    document.querySelector(".loader").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
    }, 500);
});

/* CURSOR */
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

/* 3D PARALLAX (mouse move) */
document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.clientX) / 25;
    let y = (window.innerHeight / 2 - e.clientY) / 25;

    document.querySelectorAll(".parallax").forEach(el => {
        el.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
});





