// oliv.js : BAGIAN 1 - manipulasi tampilan (beranda & hasil)
(function () {
    "use strict";

    const DEBUG = true; // ganti false kalau debug sudah selesai
    const TAG = "[oliv.js]";

    function log(...args) {
        if (DEBUG) console.log(TAG, ...args);
    }

    window.addEventListener("error", function (e) {
        console.error(TAG + " ERROR di " + e.filename + ":" + e.lineno + " -> " + e.message);
    });

    log("File berhasil dimuat. Halaman:", window.location.pathname);

    const judul = document.getElementById("judul");
    const deskripsi = document.getElementById("deskripsi");
    const infoHalaman = document.getElementById("info-halaman");

    // manipulasi 1 : mengubah teks
    if (judul && deskripsi) {
        // halaman beranda
        judul.textContent = "Bunila Resto - Menu Hari Ini";
        deskripsi.textContent = "informasi tentang kami";
        log("Manipulasi 1 (beranda) selesai");
    } else if (judul) {
        // halaman hasil
        judul.textContent = "Bunila Resto - Hasil Ulasan";
        log("Manipulasi 1 (hasil) selesai");
    }

    // manipulasi 2 : perhitungan sederhana
    if (infoHalaman) {
        if (deskripsi) {
            const jumlah = document.querySelectorAll(".hero, .tentang").length;
            infoHalaman.textContent =
                "Tersedia " + jumlah + " bagian informasi di Bunila Resto";
            log("Manipulasi 2 (beranda): bagian =", jumlah);
        } else {
            const jumlah = document.querySelectorAll("nav a").length;
            infoHalaman.textContent =
                "Terima kasih! Tersedia " + jumlah + " menu di Bunila Resto";
            log("Manipulasi 2 (hasil): menu =", jumlah);
        }
    }

    // cek apakah CSS terbaca
    const header = document.querySelector("header");
    if (header && DEBUG) {
        const warna = getComputedStyle(header).backgroundColor;
        if (warna === "rgba(0, 0, 0, 0)" || warna === "transparent") {
            console.error(TAG + " CSS TIDAK TERBACA! Cek nama file di <link>.");
        } else {
            log("CSS terbaca. Warna header:", warna);
        }
    }
})();
