/**
 * ============================================================
 * PHILOSOPHIA — script.js
 * Fitur: Dark/Light Mode | Navbar Scroll | Hamburger
 *        Data Tulisan | Render Cards | Search | Filter
 *        Modal Preview PDF | Form Submit
 * ============================================================
 */

/* ── Data Tulisan Anggota ──────────────────────────────────── */
/**
 * Untuk menambah tulisan baru, cukup tambahkan objek baru
 * di array TULISAN di bawah ini, lalu letakkan file PDF
 * di dalam folder /pdf/ dengan nama yang sesuai.
 */
const TULISAN = [
  {
    id: 1,
    judul: 'Pengorbanan Berarti',
    penulis: 'Justicia',
    kategori: 'agama',
    deskripsi: 'Tulisan bernuansa keislaman dari antologi Philosophia, berisi ajakan untuk membaca hidup melalui ilmu, adab, dan iman.',
    pdf: 'pdf/pengorbanan-berarti.pdf',
  },
  {
    id: 2,
    judul: 'Memburu Iblis Kebebasan',
    penulis: 'Mawar Jingga',
    kategori: 'agama',
    deskripsi: 'Tulisan bernuansa keislaman dari antologi Philosophia, berisi ajakan untuk membaca hidup melalui ilmu, adab, dan iman.',
    pdf: 'pdf/memburu-iblis-kebebasan.pdf',
  },
  {
    id: 3,
    judul: 'Isra Miraj Ilmiah?',
    penulis: 'Mawar Jingga',
    kategori: 'agama',
    deskripsi: 'Tulisan bernuansa keislaman dari antologi Philosophia, berisi ajakan untuk membaca hidup melalui ilmu, adab, dan iman.',
    pdf: 'pdf/isra-miraj-ilmiah.pdf',
  },
  {
    id: 4,
    judul: 'Bahagia: Antara Stoa Dan Agama',
    penulis: 'Justicia',
    kategori: 'filsafat',
    deskripsi: 'Tulisan reflektif dari antologi Philosophia yang mengajak pembaca menimbang gagasan, makna, dan cara berpikir.',
    pdf: 'pdf/bahagia-antara-stoa-dan-agama.pdf',
  },
  {
    id: 5,
    judul: 'Take a Chance: An Epilogue',
    penulis: 'Justicia',
    kategori: 'filsafat',
    deskripsi: 'Tulisan reflektif dari antologi Philosophia yang mengajak pembaca menimbang gagasan, makna, dan cara berpikir.',
    pdf: 'pdf/take-a-chance-an-epilogue.pdf',
  },
  {
    id: 6,
    judul: 'Prolog Sebelum Dermaga',
    penulis: 'Mawar Jingga',
    kategori: 'filsafat',
    deskripsi: 'Tulisan reflektif dari antologi Philosophia yang mengajak pembaca menimbang gagasan, makna, dan cara berpikir.',
    pdf: 'pdf/prolog-sebelum-dermaga.pdf',
  },
  {
    id: 7,
    judul: 'Narasi dari Pesisir',
    penulis: 'Mawar Jingga',
    kategori: 'sosial',
    deskripsi: 'Tulisan sosial dari antologi Philosophia yang menyoroti manusia, pendidikan, bangsa, dan persoalan di sekitar kita.',
    pdf: 'pdf/narasi-dari-pesisir.pdf',
  },
  {
    id: 8,
    judul: 'Dunia Distopia',
    penulis: 'Mawar Jingga',
    kategori: 'sosial',
    deskripsi: 'Tulisan sosial dari antologi Philosophia yang menyoroti manusia, pendidikan, bangsa, dan persoalan di sekitar kita.',
    pdf: 'pdf/dunia-distopia.pdf',
  },
  {
    id: 9,
    judul: 'Sang Pemegang Tanggung Jawab',
    penulis: 'Nahkoda Bintang',
    kategori: 'sosial',
    deskripsi: 'Tulisan sosial dari antologi Philosophia yang menyoroti manusia, pendidikan, bangsa, dan persoalan di sekitar kita.',
    pdf: 'pdf/sang-pemegang-tanggung-jawab.pdf',
  },
  {
    id: 10,
    judul: 'Perubahan, 45, 50, 65, 98??',
    penulis: 'Mawar Jingga',
    kategori: 'sejarah',
    deskripsi: 'Tulisan dari antologi Philosophia yang membaca peristiwa, tokoh, dan perubahan melalui sudut pandang literasi.',
    pdf: 'pdf/perubahan-45-50-65-98.pdf',
  },
  {
    id: 11,
    judul: 'Seni Renaissance',
    penulis: 'Pena Hijau',
    kategori: 'sejarah',
    deskripsi: 'Tulisan dari antologi Philosophia yang membaca peristiwa, tokoh, dan perubahan melalui sudut pandang literasi.',
    pdf: 'pdf/seni-renaissance.pdf',
  },
  {
    id: 12,
    judul: 'Biografi Singkat Mohammad Hatta',
    penulis: 'Saturn',
    kategori: 'sejarah',
    deskripsi: 'Tulisan dari antologi Philosophia yang membaca peristiwa, tokoh, dan perubahan melalui sudut pandang literasi.',
    pdf: 'pdf/biografi-singkat-mohammad-hatta.pdf',
  },
  {
    id: 13,
    judul: 'Relung Jemari',
    penulis: 'Justicia',
    kategori: 'puisi',
    deskripsi: 'Puisi dari rubrik Philo Poem; ringkas, personal, dan ditulis sebagai ruang ekspresi anggota Philosophia.',
    pdf: 'pdf/relung-jemari.pdf',
  },
  {
    id: 14,
    judul: 'Tak Bernilai Tanpa Angka',
    penulis: 'Mawar Jingga',
    kategori: 'puisi',
    deskripsi: 'Puisi dari rubrik Philo Poem; ringkas, personal, dan ditulis sebagai ruang ekspresi anggota Philosophia.',
    pdf: 'pdf/tak-bernilai-tanpa-angka.pdf',
  },
  {
    id: 15,
    judul: 'Raja dan Rakyat',
    penulis: 'Aurisstela',
    kategori: 'puisi',
    deskripsi: 'Puisi dari rubrik Philo Poem; ringkas, personal, dan ditulis sebagai ruang ekspresi anggota Philosophia.',
    pdf: 'pdf/raja-dan-rakyat.pdf',
  },
];

/* ─────────────────────────────────────────────────────────────
   STATE APLIKASI
───────────────────────────────────────────────────────────── */
let activeFilter = "semua"; // filter kategori aktif
let searchQuery  = "";      // kata kunci pencarian

/* ─────────────────────────────────────────────────────────────
   1. DARK / LIGHT MODE
───────────────────────────────────────────────────────────── */
const html         = document.documentElement;
const themeToggle  = document.getElementById("themeToggle");

/**
 * Terapkan tema (dark | light) dan simpan ke localStorage
 * agar pilihan bertahan saat halaman di-refresh.
 */
function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("phi-theme", theme);
}

// Inisialisasi tema: prioritas localStorage → prefers-color-scheme → dark
(function initTheme() {
  const saved   = localStorage.getItem("phi-theme");
  const prefers = window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
  applyTheme(saved || prefers);
})();

// Toggle saat tombol diklik
themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

/* ─────────────────────────────────────────────────────────────
   2. NAVBAR — Efek scroll & hamburger mobile
───────────────────────────────────────────────────────────── */
const navbar     = document.getElementById("navbar");
const hamburger  = document.getElementById("hamburger");
const navLinks   = document.getElementById("navLinks");

// Tambah class .scrolled saat halaman digulir
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// Toggle menu mobile
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Tutup menu mobile saat link diklik
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Tutup menu jika klik di luar navbar
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove("open");
  }
});

/* ─────────────────────────────────────────────────────────────
   3. RENDER TULISAN (Cards)
───────────────────────────────────────────────────────────── */
const tulisanGrid  = document.getElementById("tulisanGrid");
const emptyState   = document.getElementById("emptyState");

/**
 * Kembalikan label kategori yang ramah untuk ditampilkan.
 */
function labelKategori(slug) {
  const map = {
    filsafat: "Filsafat",
    agama:   "Agama",
    sosial:  "Sosial",
    sejarah: "Sejarah",
    puisi:   "Puisi",
  };
  return map[slug] || slug;
}

/**
 * Filter array TULISAN berdasarkan kategori aktif dan query pencarian.
 */
function getFilteredTulisan() {
  return TULISAN.filter((t) => {
    const matchKategori =
      activeFilter === "semua" || t.kategori === activeFilter;
    const matchSearch =
      t.judul.toLowerCase().includes(searchQuery) ||
      t.penulis.toLowerCase().includes(searchQuery);
    return matchKategori && matchSearch;
  });
}

/**
 * Buat elemen HTML untuk satu card tulisan dan kembalikan elemennya.
 */
function buatTulisanCard(tulisan, index) {
  const card = document.createElement("div");
  card.className = "tulisan-card";
  card.style.animationDelay = `${index * 0.06}s`;

  card.innerHTML = `
    <span class="tulisan-kategori">${labelKategori(tulisan.kategori)}</span>
    <h3 class="tulisan-judul">${tulisan.judul}</h3>
    <p class="tulisan-penulis">oleh ${tulisan.penulis}</p>
    <p class="tulisan-desc">${tulisan.deskripsi}</p>
    <div class="tulisan-action">
      <button class="btn-pdf" data-pdf="${tulisan.pdf}" data-judul="${tulisan.judul}">
        Preview PDF
      </button>
    </div>
  `;

  // Delegasi event ke tombol "Buka PDF"
  card.querySelector(".btn-pdf").addEventListener("click", (e) => {
    bukaModal(e.currentTarget.dataset.pdf, e.currentTarget.dataset.judul);
  });

  return card;
}

/**
 * Render ulang grid tulisan berdasarkan filter & pencarian aktif.
 */
function renderTulisan() {
  const filtered = getFilteredTulisan();

  // Kosongkan grid
  tulisanGrid.innerHTML = "";

  if (filtered.length === 0) {
    // Tampilkan empty state
    tulisanGrid.style.display = "none";
    emptyState.style.display  = "block";
    return;
  }

  // Sembunyikan empty state, tampilkan grid
  tulisanGrid.style.display = "";
  emptyState.style.display  = "none";

  filtered.forEach((tulisan, i) => {
    tulisanGrid.appendChild(buatTulisanCard(tulisan, i));
  });
}

// Render pertama kali saat halaman dimuat
renderTulisan();

/* ─────────────────────────────────────────────────────────────
   4. SEARCH
───────────────────────────────────────────────────────────── */
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderTulisan();
});

/* ─────────────────────────────────────────────────────────────
   5. FILTER KATEGORI
───────────────────────────────────────────────────────────── */
const filterButtons = document.getElementById("filterButtons");

filterButtons.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  // Update state
  activeFilter = btn.dataset.filter;

  // Update tombol aktif
  filterButtons.querySelectorAll(".filter-btn").forEach((b) =>
    b.classList.toggle("active", b === btn)
  );

  // Re-render
  renderTulisan();
});

/* ─────────────────────────────────────────────────────────────
   6. MODAL PREVIEW PDF
───────────────────────────────────────────────────────────── */
const modalOverlay  = document.getElementById("modalOverlay");
const modalTitle    = document.getElementById("modalTitle");
const pdfFrame      = document.getElementById("pdfFrame");
const pdfDownload   = document.getElementById("pdfDownload");
const modalClose    = document.getElementById("modalClose");

/**
 * Buka modal dan muat PDF di dalam iframe.
 * @param {string} pdfSrc  - Path ke file PDF (relatif terhadap index.html)
 * @param {string} judul   - Judul tulisan untuk ditampilkan di header modal
 */
function bukaModal(pdfSrc, judul) {
  modalTitle.textContent = judul;
  pdfFrame.src           = pdfSrc;
  pdfDownload.href       = pdfSrc;
  modalOverlay.style.display = "";
  document.body.style.overflow = "hidden"; // cegah scroll background
}

/** Tutup modal dan reset iframe agar tidak memakan memori. */
function tutupModal() {
  modalOverlay.style.display = "none";
  pdfFrame.src               = "";
  document.body.style.overflow = "";
}

// Event listeners penutupan modal
modalClose.addEventListener("click", tutupModal);

// Klik di luar modal box → tutup
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) tutupModal();
});

// Tekan Escape → tutup
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.style.display !== "none") {
    tutupModal();
  }
});

/* ─────────────────────────────────────────────────────────────
   7. FORM KONTAK (tampilan saja — tanpa backend)
───────────────────────────────────────────────────────────── */
const submitForm  = document.getElementById("submitForm");
const formSuccess = document.getElementById("formSuccess");
const namaInput   = document.getElementById("namaInput");
const emailInput  = document.getElementById("emailInput");
const alasanInput = document.getElementById("alasanInput");

submitForm.addEventListener("click", () => {
  const nama   = namaInput.value.trim();
  const email  = emailInput.value.trim();
  const alasan = alasanInput.value.trim();

  // Validasi sederhana
  if (!nama || !email || !alasan) {
    alert("Mohon isi semua kolom sebelum mengirim.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Masukkan alamat email yang valid.");
    return;
  }

  // Karena website ini statis dan dipublish di GitHub Pages,
  // data form dikirim melalui draft email (mailto), bukan backend/server.
  const adminEmail = "alwafymatahari@gmail.com";
  const subject = `Perkenalan Anggota Philosophia - ${nama}`;
  const body = [
    "Halo Philosophia,",
    "",
    "Saya ingin bergabung dengan komunitas Philosophia.",
    "",
    `Nama: ${nama}`,
    `Email: ${email}`,
    "",
    "Alasan bergabung:",
    alasan,
    "",
    "Terima kasih."
  ].join("\n");

  const mailtoLink = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  formSuccess.style.display = "block";
  submitForm.textContent = "Buka Draft Email Lagi";

  // Membuka aplikasi email pengguna dengan pesan yang sudah terisi.
  window.location.href = mailtoLink;
});

/* ─────────────────────────────────────────────────────────────
   8. SMOOTH SCROLL untuk semua anchor link internal
───────────────────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const offset = 80; // tinggi navbar
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

/* ─────────────────────────────────────────────────────────────
   9. INTERSECTION OBSERVER — Animasi masuk saat scroll
   (Untuk browser yang mendukung)
───────────────────────────────────────────────────────────── */
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity  = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // hanya animasi sekali
        }
      });
    },
    { threshold: 0.12 }
  );

  // Observasi semua glass-card dan section header
  document.querySelectorAll(".glass-card, .section-header").forEach((el) => {
    // Set state awal
    el.style.opacity   = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}


/* ─────────────────────────────────────────────────────────────
   10. INTERACTIVE BACKGROUND SPOTLIGHT
   Efek cahaya mengikuti pointer agar background terasa hidup.
───────────────────────────────────────────────────────────── */
window.addEventListener("pointermove", (e) => {
  document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
  document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
});
