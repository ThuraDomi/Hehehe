
const space = document.getElementById("space");
const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const flowerLayer = document.getElementById("flowerLayer");
const mailScene = document.getElementById("mailScene");
const surpriseScene = document.getElementById("surpriseScene");

const flowerEmojis = [
  "🌸","🌼","🌺","🌷","🌻","💐","🌹","🪻","🌸","🌼","🌺","🌷"
];

function makeStars() {
  const total = Math.min(170, Math.floor(window.innerWidth / 6));

  for (let i = 0; i < total; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = (Math.random() * 2.1 + 0.8) + "px";
    star.style.width = size;
    star.style.height = size;
    star.style.setProperty("--speed", (1.5 + Math.random() * 3.5) + "s");

    space.appendChild(star);
  }
}

function createFlowerBurst() {
  const count = window.innerWidth < 430 ? 90 : window.innerWidth < 768 ? 120 : 170;

  for (let i = 0; i < count; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.textContent =
      flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];

    const angle = Math.random() * Math.PI * 2;

    const horizontalReach =
      Math.max(window.innerWidth * 0.62, 420) * (0.25 + Math.random() * 0.9);

    const verticalReach =
      Math.max(window.innerHeight * 0.7, 420) * (0.25 + Math.random() * 0.95);

    const x = Math.cos(angle) * horizontalReach;
    const y = Math.sin(angle) * verticalReach;

    const size = 32 + Math.random() * 62;
    const rotation = (Math.random() * 540 - 270) + "deg";
    const duration = (1.8 + Math.random() * 1.8) + "s";
    const delay = Math.random() * 0.85;

    flower.style.setProperty("--x", x + "px");
    flower.style.setProperty("--y", y + "px");
    flower.style.setProperty("--size", size + "px");
    flower.style.setProperty("--rot", rotation);
    flower.style.setProperty("--duration", duration);
    flower.style.animationDelay = delay + "s";

    flowerLayer.appendChild(flower);
  }
}

function revealSurprise() {
  mailScene.classList.add("fade-away");

  setTimeout(() => {
    flowerLayer.innerHTML = "";
    surpriseScene.classList.add("show");
  }, 1000);
}

openBtn.addEventListener("click", () => {
  openBtn.classList.add("hide");
  envelope.classList.add("open");

  setTimeout(() => {
    createFlowerBurst();
  }, 650);

  setTimeout(() => {
    revealSurprise();
  }, 4500);
});

makeStars();
