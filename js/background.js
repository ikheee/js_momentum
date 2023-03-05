const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.style.background = `url(${bgImage.src}) no-repeat center/cover`;
document.body.style.height = '100vh';
document.body.style.overflow = 'hidden';