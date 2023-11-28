// js

const genBtn = document.querySelector(".gen-btn");
const qrCodeBox = document.querySelector(".qr-code");
const input = document.querySelector("input");
const image = document.querySelector(".qr");
document.getElementById('warning').textContent = "";

genBtn.addEventListener("click", () => {
  let inputValue = input.value;
  if (!inputValue) {
    return document.getElementById('warning').textContent = "Harap masukkan teks atau URL!"; //alert("Harap masukkan teks atau URL!");
  }
  genBtn.innerHTML = 'Converting <i class="fa-solid fa-sync fa-spin"></i>';
  image.src = `https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=350x350&chl=${inputValue}`;
  image.addEventListener("load", () => {
    qrCodeBox.classList.remove("hidden");
    genBtn.innerText = "Buat QR Code";
  });
  input.addEventListener("keyup", () => {
    if (!input.value) {
      qrCodeBox.classList.add("hidden");
      saveBtn.classList.add("hidden");
    }
  });
});

