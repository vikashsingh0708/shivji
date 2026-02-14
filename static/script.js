function sendName() {

    let name = document.getElementById("username").value;

    fetch('/generate', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(data => {

        let msg = new SpeechSynthesisUtterance(data.message);
        msg.lang = "hi-IN";
        msg.rate = 0.9;

        speechSynthesis.speak(msg);

        msg.onend = function() {

            document.getElementById("divineSection").classList.remove("hidden");

            let song = document.getElementById("bgSong");
            song.volume = 0.5;
            song.play();

            startSlideshow();
            startFlowerRain();
        };
    });
}

function startSlideshow() {

    let images = [
        "/static/shiv1.jpg",
        "/static/shiv2.jpg",
        "/static/shiv3.jpg",
        "/static/shiv4.jpg",
        "/static/shiv5.jpg"
    ];

    let index = 0;
    let slideshow = document.getElementById("slideshow");

    slideshow.style.opacity = 1;

    setInterval(() => {

        slideshow.style.opacity = 0;

        setTimeout(() => {
            slideshow.src = images[index];
            slideshow.style.opacity = 1;
            index = (index + 1) % images.length;
        }, 2000);

    }, 6000);
}

function startFlowerRain() {

    const container = document.getElementById("flower-container");
    const flowers = ["🌸", "🌺", "🌼", "🌷"];

    setInterval(() => {

        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = (3 + Math.random() * 3) + "s";
        flower.style.fontSize = (20 + Math.random() * 20) + "px";

        container.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 6000);

    }, 300);
}
