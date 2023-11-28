const main = document.getElementById('app');

const externalHTML = `
<section id="header">
<div class="header wrap">
<span class="header left-side">
<a class="site home" href="/">
<span class="site name">Twibbon Generator<span class="blinker">_</span></span>
</a>
</span>
<span class="header right-side"></span>
</div>
</section>

<section id="content">
<div class="article-container">
<section class="article header">
<h1 class="article title h4">Twibbon Abdidaya Ormawa 2023 Jember</h1>
<p class="article date"></p>
</section>

<article class="article markdown-body">
<section>



<p>Silahkan unggah gambar dan klik pratinjau lalu unduh, aplikasi ini akan otomatis menggabungkan unggahan gambar yang Anda pilih.</p><br>

<p>
<form>
<input id="image_input" type="file" accept="image/png, image/jpeg" />
</form>
</p>
<p><strong>PNG atau JPEG</strong></p><br>

<p style="text-align:center;color:red;" id="danger" class=""></p><br>

<p>

<div class="">
<button class="btn btn-md btn-primary modal-link" onclick="generate()">Pratinjau</button>
<button class="btn btn-md btn-success crop" onclick="cropImage()">Edit Foto</button>
</div>
</p><br>

</section>
</article>



<div id="custom-modal" class="custom-modal">
<div class="custom-modal-dialog">
<div class="custom-modal-content">
<!--<span class="close-modal"></span>-->
<div class="custom-modal-body">
<div class="custom-modal-inner">
<h4 style="text-align:center;color:red;" id="warning"></h4>
<p style="text-align:center;color:red;" id="danger"></p>
<p><canvas id="canvas"></canvas></p><br>
<p>
<div class="buttons-ctr">
<button class="wink" onclick="download()" id="download" disabled>Unduh</button>
<button class="wink" id="cancel" onclick="location.reload()">Kembali</button>
</div>
</p>
</div>
</div>
</div>
</div>
</div>

<section id="footer">
<div class="footer-wrap">
<p class="copyright text-white">Dikelola oleh Seksi Publikasi dan Teknologi Informasi <a href="https://abdidaya.unej.ac.id"> Abdidaya Ormawa 2023 </a> Jember.</p>

</section>`;
// shows the alert
main.innerHTML = externalHTML;
