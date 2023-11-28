// app.js

let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
let filename = "twibbon-by-ferry-ayunda";
let btnDownload = document.getElementById('download');
let reader = new FileReader();
let target = new Image();
let target2 = new Image();
let image = document.getElementById('image_input');
document.getElementById('warning').textContent = "";

c.canvas.width = 1024;
c.canvas.height = 1024;

let download = function () {
    link = document.createElement('a');
    link.download = filename + '.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
}

let destroyInterval = () => {
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
}

let load = () => {
    c.clearRect(0, 0, c.canvas.width, c.canvas.height);
    draw();
}

let draw = () => {
    // Set ukuran canvas
    c.canvas.width = 2048;
    c.canvas.height = 2048;

    let targetWidth = 1025;
    let targetHeight = 1040;

    // Hitung posisi tengah untuk gambar target
    let centerX = (c.canvas.width - targetWidth) / 2;
    let centerY = (c.canvas.height - targetHeight) / 1.5;

    // Clear canvas
    c.clearRect(0, 0, c.canvas.width, c.canvas.height);

    // Gambar target di tengah
    c.drawImage(target, centerX, centerY, targetWidth, targetHeight);

    // Gambar target2 menutupi seluruh canvas
    c.drawImage(target2, 0, 0, c.canvas.width, c.canvas.height);
}


let enableButton = () => {
    let
}

let init = () => {
    run = setInterval(function () {
        load();
    }, 1000);
}

let setTwibbon = () => {
    target2.src = 'images/twbz.png';
}

let imageReaderOnLoad = () => {
    reader.onload = (res) => {
        target.src = res.target.result.replace(/ +/g, "");
    }
}

let enableBtnDownload = () => {
    btnDownload.removeAttribute('disabled');
}

let generate = () => {
    
    if(image.files[0] === undefined) 
     //  alert('Gambar tidak boleh kosong!');
         document.getElementById('warning').textContent = "Gambar tidak boleh kosong!";

    else{
        destroyInterval();                               
        imageReaderOnLoad();
        setTwibbon();
        enableBtnDownload();
        reader.readAsDataURL(image.files[0]);
        init();
    }
}
