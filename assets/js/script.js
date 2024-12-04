// btn fungsi
function landingbtn() {
    window.location.href = "artikel.html";
}

// date-artikel
const tanggal = new Date();
const opsiTanggal = { day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('artikelTanggal').innerText = tanggal.toLocaleDateString('id-ID', opsiTanggal);
document.getElementById('artikelTanggal').setAttribute('datetime', tanggal.toISOString().split('T')[0]);

const tanggal2 = new Date();
const opsiTanggal2 = { day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('artikelTanggalKe2').innerText = tanggal.toLocaleDateString('id-ID', opsiTanggal);
document.getElementById('artikelTanggalKe2').setAttribute('datetime', tanggal.toISOString().split('T')[0]);

// Fungsi untuk scroll ke atas
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Menunjukkan tombol ketika menggulir
window.onscroll = function() {
    var topButton = document.getElementById("topButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block"; // Menampilkan tombol
    } else {
        topButton.style.display = "none"; // Menyembunyikan tombol
    }
};

// accordation