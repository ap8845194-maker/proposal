
/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 1500);

});


/* =========================
   TYPING EFFECT
========================= */

const text =
    "You are the person I want beside me for the rest of my life... ❤️";

let index = 0;

function typeText() {

    const typing = document.getElementById("typing");

    if (index < text.length) {

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 55);

    }

}

setTimeout(typeText, 1800);


/* =========================
   START JOURNEY
========================= */

function startJourney() {

    document.querySelector(".story").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   MUSIC
========================= */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicBtn.innerHTML = "🔊";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵";

        playing = false;

    }

});


/* =========================
   LETTER
========================= */

function openLetter() {

    const envelope = document.getElementById("envelope");

    envelope.classList.toggle("open");

}


/* =========================
   NO BUTTON
========================= */

const noBtn = document.getElementById("noBtn");

const noTexts = [
    "Are you sure? 🥺",
    "Think again 😭",
    "Please? ❤️",
    "Don't do this 😭",
    "Wrong button 😂",
    "Try YES ❤️"
];

let noIndex = 0;

function moveNoButton() {

    const maxX = window.innerWidth - 160;
    const maxY = window.innerHeight - 100;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noBtn.innerText = noTexts[noIndex];

    noIndex++;

    if (noIndex >= noTexts.length) {
        noIndex = 0;
    }

}

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", (e) => {

    e.preventDefault();

    moveNoButton();

});


/* =========================
   YES
========================= */

function sayYes() {

    const screen = document.getElementById("yesScreen");

    screen.style.display = "flex";

    document.body.style.overflow = "hidden";

    createHearts();

    startConfetti();

}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize =
            (15 + Math.random() * 35) + "px";

        heart.style.zIndex = "2";

        heart.style.transition =
            (3 + Math.random() * 4) + "s linear";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.top =
                -100 + "px";

            heart.style.transform =
                `translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 7000);

    }

}


/* =========================
   CONFETTI
========================= */

function startConfetti() {

    const canvas = document.getElementById("confetti");

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];

    for (let i = 0; i < 250; i++) {

        pieces.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height -
                canvas.height,

            size: Math.random() * 8 + 3,

            speed: Math.random() * 4 + 2,

            rotation: Math.random() * 360,

            rotationSpeed:
                Math.random() * 8 - 4,

            color:
                `hsl(${Math.random() * 360}, 90%, 65%)`

        });

    }


    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        pieces.forEach(piece => {

            piece.y += piece.speed;

            piece.rotation +=
                piece.rotationSpeed;


            if (piece.y > canvas.height) {

                piece.y = -10;

                piece.x =
                    Math.random() * canvas.width;

            }


            ctx.save();

            ctx.translate(
                piece.x,
                piece.y
            );

            ctx.rotate(
                piece.rotation * Math.PI / 180
            );

            ctx.fillStyle =
                piece.color;

            ctx.fillRect(
                -piece.size / 2,
                -piece.size / 2,
                piece.size,
                piece.size
            );

            ctx.restore();

        });


        requestAnimationFrame(animate);

    }

    animate();

}


/* =========================
   SCROLL REVEAL
========================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: .15
        }
    );


document
    .querySelectorAll(".timeline-card, .photo-card")
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "1s ease";

        observer.observe(element);

    });


/* =========================
   WINDOW RESIZE
========================= */

window.addEventListener("resize", () => {

    const canvas =
        document.getElementById("confetti");

    if (canvas) {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }

});
