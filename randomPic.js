const body = document.querySelector("body");

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function getRandom() {
    const number = Math.floor(Math.random()*4);
    return number;
}

paintImage(getRandom());