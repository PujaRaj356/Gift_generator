const gifts = [
  "🌸 A flower you can pick for yourself",
  "🍫 A piece of chocolate",
  "💌 A handwritten note",
  "🎶 A song recommendation",
  "🧸 A tiny teddy keychain",
  "✨ A compliment: You're amazing!",
  "☕ A warm cup of coffee",
  "📚 A cute bookmark",
  "🌈 A little positivity for your day",
  "😄 A reason to smile today"
];

// Image list
const images = [
  "images/img.jpg",
  
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg"
];

function generateGift() {
  // random gift text
  const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
  document.getElementById("gift").textContent = randomGift;

  // random image (automatically changes)
  const randomIndex = Math.floor(Math.random() * images.length);
  document.getElementById("giftImage").src = images[randomIndex];

  // effects
  playSound();
  dropHearts();
  animateCharacter();
}

function playSound() {
  const sound = document.getElementById("popSound");
  sound.currentTime = 0;
  sound.play();
}

function dropHearts() {
  const hearts = document.getElementById("hearts");

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.background = `hsl(${Math.random() * 360}, 80%, 70%)`;
    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

function animateCharacter() {
  const character = document.getElementById("character");
  character.style.transform = "scale(1.15)";
  character.style.transition = "0.2s ease";

  setTimeout(() => {
    character.style.transform = "scale(1)";
  }, 300);
}
const flyingCats = [
  "images/cat3.gif"
  
];

function spawnFlyingCat() {
  const cat = document.createElement("img");
  cat.src = flyingCats[Math.floor(Math.random() * flyingCats.length)];
  cat.classList.add("flying-cat");

  cat.style.setProperty("--startY", Math.random() * 70 + "vh");
  cat.style.setProperty("--endY", Math.random() * 70 + "vh");

  document.body.appendChild(cat);

  setTimeout(() => cat.remove(), 8000);
}

// A new flying cat every 3 seconds  
setInterval(spawnFlyingCat, 3000);
