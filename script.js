const TOTAL_PAGES = 604;
let currentPage = 1;

const pageImage = document.getElementById("quranPage");
const pageInfo = document.getElementById("pageInfo");
const surahBadge = document.getElementById("surahBadge");
const pageFlip = document.getElementById("pageFlip");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const surahStartPages = [
  { name: "سورة الفاتحة", page: 1 },
  { name: "سورة البقرة", page: 2 },
  { name: "سورة آل عمران", page: 50 },
  { name: "سورة النساء", page: 77 },
  { name: "سورة المائدة", page: 106 },
  { name: "سورة الأنعام", page: 128 },
  { name: "سورة الأعراف", page: 151 },
  { name: "سورة الأنفال", page: 177 },
  { name: "سورة التوبة", page: 187 },
  { name: "سورة يونس", page: 208 },
  { name: "سورة هود", page: 221 },
  { name: "سورة يوسف", page: 235 },
  { name: "سورة الرعد", page: 249 },
  { name: "سورة إبراهيم", page: 255 },
  { name: "سورة الحجر", page: 262 },
  { name: "سورة النحل", page: 267 },
  { name: "سورة الإسراء", page: 282 },
  { name: "سورة الكهف", page: 293 },
  { name: "سورة مريم", page: 305 },
  { name: "سورة طه", page: 312 },
  { name: "سورة الأنبياء", page: 322 },
  { name: "سورة الحج", page: 332 },
  { name: "سورة المؤمنون", page: 342 },
  { name: "سورة النور", page: 350 },
  { name: "سورة الفرقان", page: 359 },
  { name: "سورة الشعراء", page: 367 },
  { name: "سورة النمل", page: 377 },
  { name: "سورة القصص", page: 385 },
  { name: "سورة العنكبوت", page: 396 },
  { name: "سورة الروم", page: 404 },
  { name: "سورة لقمان", page: 411 },
  { name: "سورة السجدة", page: 415 },
  { name: "سورة الأحزاب", page: 418 },
  { name: "سورة سبأ", page: 428 },
  { name: "سورة فاطر", page: 434 },
  { name: "سورة يس", page: 440 },
  { name: "سورة الصافات", page: 446 },
  { name: "سورة ص", page: 453 },
  { name: "سورة الزمر", page: 458 },
  { name: "سورة غافر", page: 467 },
  { name: "سورة فصلت", page: 477 },
  { name: "سورة الشورى", page: 483 },
  { name: "سورة الزخرف", page: 489 },
  { name: "سورة الدخان", page: 496 },
  { name: "سورة الجاثية", page: 499 },
  { name: "سورة الأحقاف", page: 502 },
  { name: "سورة محمد", page: 507 },
  { name: "سورة الفتح", page: 511 },
  { name: "سورة الحجرات", page: 515 },
  { name: "سورة ق", page: 518 },
  { name: "سورة الذاريات", page: 520 },
  { name: "سورة الطور", page: 523 },
  { name: "سورة النجم", page: 526 },
  { name: "سورة القمر", page: 528 },
  { name: "سورة الرحمن", page: 531 },
  { name: "سورة الواقعة", page: 534 },
  { name: "سورة الحديد", page: 537 },
  { name: "سورة المجادلة", page: 542 },
  { name: "سورة الحشر", page: 545 },
  { name: "سورة الممتحنة", page: 549 },
  { name: "سورة الصف", page: 551 },
  { name: "سورة الجمعة", page: 553 },
  { name: "سورة المنافقون", page: 554 },
  { name: "سورة التغابن", page: 556 },
  { name: "سورة الطلاق", page: 558 },
  { name: "سورة التحريم", page: 560 },
  { name: "سورة الملك", page: 562 },
  { name: "سورة القلم", page: 564 },
  { name: "سورة الحاقة", page: 566 },
  { name: "سورة المعارج", page: 568 },
  { name: "سورة نوح", page: 570 },
  { name: "سورة الجن", page: 572 },
  { name: "سورة المزمل", page: 574 },
  { name: "سورة المدثر", page: 575 },
  { name: "سورة القيامة", page: 577 },
  { name: "سورة الإنسان", page: 578 },
  { name: "سورة المرسلات", page: 580 },
  { name: "سورة النبأ", page: 582 },
  { name: "سورة النازعات", page: 583 },
  { name: "سورة عبس", page: 585 },
  { name: "سورة التكوير", page: 586 },
  { name: "سورة الانفطار", page: 587 },
  { name: "سورة المطففين", page: 587 },
  { name: "سورة الانشقاق", page: 589 },
  { name: "سورة البروج", page: 590 },
  { name: "سورة الطارق", page: 591 },
  { name: "سورة الأعلى", page: 591 },
  { name: "سورة الغاشية", page: 592 },
  { name: "سورة الفجر", page: 593 },
  { name: "سورة البلد", page: 594 },
  { name: "سورة الشمس", page: 595 },
  { name: "سورة الليل", page: 595 },
  { name: "سورة الضحى", page: 596 },
  { name: "سورة الشرح", page: 596 },
  { name: "سورة التين", page: 597 },
  { name: "سورة العلق", page: 597 },
  { name: "سورة القدر", page: 598 },
  { name: "سورة البينة", page: 598 },
  { name: "سورة الزلزلة", page: 599 },
  { name: "سورة العاديات", page: 599 },
  { name: "سورة القارعة", page: 600 },
  { name: "سورة التكاثر", page: 600 },
  { name: "سورة العصر", page: 601 },
  { name: "سورة الهمزة", page: 601 },
  { name: "سورة الفيل", page: 601 },
  { name: "سورة قريش", page: 602 },
  { name: "سورة الماعون", page: 602 },
  { name: "سورة الكوثر", page: 602 },
  { name: "سورة الكافرون", page: 603 },
  { name: "سورة النصر", page: 603 },
  { name: "سورة المسد", page: 603 },
  { name: "سورة الإخلاص", page: 604 },
  { name: "سورة الفلق", page: 604 },
  { name: "سورة الناس", page: 604 }
];

function getSurahNameByPage(page) {
  let currentSurah = surahStartPages[0].name;

  for (const surah of surahStartPages) {
    if (page >= surah.page) {
      currentSurah = surah.name;
    } else {
      break;
    }
  }

  return currentSurah;
}

function animateFlip(direction) {
  pageFlip.classList.remove("flipping-next", "flipping-prev");
  void pageFlip.offsetWidth;

  if (direction === "next") {
    pageFlip.classList.add("flipping-next");
  } else {
    pageFlip.classList.add("flipping-prev");
  }

  setTimeout(() => {
    pageFlip.classList.remove("flipping-next", "flipping-prev");
  }, 550);
}

function updatePage() {
  pageImage.src = `pages/${currentPage}.jpg`;
  pageInfo.textContent = `صفحة ${currentPage} من ${TOTAL_PAGES}`;
  surahBadge.textContent = getSurahNameByPage(currentPage);
}

function goNext() {
  if (currentPage < TOTAL_PAGES) {
    currentPage += 1;
    animateFlip("next");
    updatePage();
  }
}

function goPrev() {
  if (currentPage > 1) {
    currentPage -= 1;
    animateFlip("prev");
    updatePage();
  }
}

nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    goNext();
  } else if (e.key === "ArrowRight") {
    goPrev();
  }
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchEndX - touchStartX;

  if (Math.abs(diff) > 50) {
    if (diff < 0) {
      goNext();
    } else {
      goPrev();
    }
  }
});

pageImage.addEventListener("error", () => {
  pageInfo.textContent = `الصورة غير موجودة: pages/${currentPage}.jpg`;
});

updatePage();