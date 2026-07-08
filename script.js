const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

let count = Number(localStorage.getItem("scanCount")) || 0;

const currentImage = count % images.length;

document.getElementById("displayImage").src = images[currentImage];

document.getElementById("scanText").innerText =
"Scan Number: " + (count + 1);

count++;

localStorage.setItem("scanCount", count);
