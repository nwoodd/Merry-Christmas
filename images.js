function generatePhoto() {
    const photos = [
    "images/photo1.jpeg",
    "images/photo2.jpeg",
    "images/photo3.jpeg",
    "images/photo4.jpeg",
    "images/photo5.jpeg",
    "images/photo6.jpeg",
    "images/photo7.jpeg",
    "images/photo8.jpeg",
    "images/photo9.jpeg",
    "images/photo10.jpeg",
    "images/photo11.jpeg",
    "images/photo12.jpeg",
    "images/photo13.jpeg",
    "images/photo14.jpeg",
    "images/photo15.jpeg",
    "images/photo16.jpeg",
    "images/photo17.jpeg",
    "images/photo18.jpeg",
    "images/photo19.jpeg",
    "images/photo20.jpeg",
    "images/photo21.jpeg",
    "images/photo22.jpeg",
    "images/photo23.jpeg",
    "images/photo24.jpeg",
    "images/photo25.jpeg",
    "images/photo26.jpeg",
    "images/photo27.jpeg",
    "images/photo28.jpeg",
    "images/photo29.jpeg",
    "images/photo30.jpeg"
    ];
    const img = document.getElementById("photoDisplay");
    const randomIndex = Math.floor(Math.random() * photos.length);
    document.getElementById("photoDisplay").src = photos[randomIndex];

    img.src = photos[randomIndex];
    img.style.display = "block";
}
