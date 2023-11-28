const main = document.getElementById('app');

const externalHTML = `
<section id="header">
<div class="header wrap">
<span class="header left-side">
<a class="site home" href="/">
<span class="site name">LUHSIAPA.TK<span class="blinker">_</span></span>
</a>
</span>
<span class="header right-side"></span>
</div>
</section>

<section id="content">
<div class="article-container">
<section class="article header">
<h1 class="article title">Twibbon Generator</h1>
<p class="article date"></p>
</section>

<article class="article markdown-body">
<section>
<!-- <a href="https://susebershop.com/wp-content/uploads/2015/10/SEKOLAH-TINGGI-TEKNOLOGI-DUTA-BANGSA.jpg" target="_blank"><img class=lozad data-src="https://susebershop.com/wp-content/uploads/2015/10/SEKOLAH-TINGGI-TEKNOLOGI-DUTA-BANGSA.jpg" rel="noopener noreferrer"/></a>Sekolah Tinggi Teknologi Duta Bangsa-->

<p>Ini adalah situs web tempats Anda dapat menambahkan foto ke bingkai.</p><br>

<p>Silahkan unggahs gambar dan bingkai kemudian klik pratinjau lalu unduh, aplikasi ini akan otomatis menggabungkan unggahan gambar dan bingkai yang Anda pilih.</p><br>

<p><strong>Unggah Gambar</strong></p>
<p>
<form>
<input type="file" accept="image/png, image/jpeg" onchange="loadFile(event)" />
</form>
<img style="display: none" id="img1" alt="Unggah Gambar">
</p>

<p><strong>Unggah Bingkai</strong></p>
<p>
<form>
<input type="file" accept="image/png, image/jpeg" onchange="loadTemplate(event)" />
</form>
<img style="display: none" id="gambartemplate" src="#" alt="Unggah Bingkai">
</p>

<!--<p style="text-align:center;color:red;" id="warning" class=""></p><br>-->
<!-- <p style="text-align:center;"><strong>Png or Jpeg, max 1024x1024</strong></p><br> -->
<p id="info"></p><br>

<p>
<div class="buttons-ctr">
<button class="wink modal-link" onclick="gen()">Pratinjau</button>
</div>
</p><br>

<!--<p><canvas id="canvas"></canvas></p><br>-->

</section>
</article>

<section class="article labels">
<a class="category" href="#">Twibbon</a>
<a class="category" href="$">Generator</a>
</section>
</div>

<div class="article bottom">
<section class="article navigation">
<p><a class="link" href="/twibbon"><span class="iconfont icon-article"></span>Twibbon Generator v.2</a></p>
<p><a class="link" href="/qrcode"><span class="iconfont icon-article"></span>QR Code Generator</a></p>
</section>
</div>
</section>

<div id="custom-modal" class="custom-modal">
<div class="custom-modal-dialog">
<div class="custom-modal-content">
<!--<span class="close-modal"></span>-->
<div class="custom-modal-body">
<div class="custom-modal-inner">
<!-- Contetn here -->
<h4 style="text-align:center;color:red;" id="warning"></h4>
<p><canvas id="canvas"></canvas></p><br>
<p>
<div class="buttons-ctr">
<button class="wink" id="btndownload">Unduh</button>
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
<p class="copyright">© 2023 </p>
<p class="powerby">
<span>Powered&nbsp;by&nbsp;</span>
<a href="https://www.facebook.com/bungferry.wa" target="_blank" rel="noopener noreferrer">Ferry Ayunda</a>
<span>&nbsp;&amp;&nbsp;</span>
<a href="https://saweria.co/bungferry" target="_blank" rel="noopener noreferrer">Secangkir Kopi</a></p>
</div>
</section>`;
// shows the alert
main.innerHTML = externalHTML;
