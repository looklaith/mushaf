const SURAHS = [
  {n:1,  name:"الفاتحة",     eng:"Al-Fatiha",    ayat:7,   page:1,   type:"مكية"},
  {n:2,  name:"البقرة",      eng:"Al-Baqarah",   ayat:286, page:2,   type:"مدنية"},
  {n:3,  name:"آل عمران",    eng:"Al-Imran",     ayat:200, page:50,  type:"مدنية"},
  {n:4,  name:"النساء",      eng:"An-Nisa",      ayat:176, page:77,  type:"مدنية"},
  {n:5,  name:"المائدة",     eng:"Al-Ma'idah",   ayat:120, page:106, type:"مدنية"},
  {n:6,  name:"الأنعام",     eng:"Al-An'am",     ayat:165, page:128, type:"مكية"},
  {n:7,  name:"الأعراف",     eng:"Al-A'raf",     ayat:206, page:151, type:"مكية"},
  {n:8,  name:"الأنفال",     eng:"Al-Anfal",     ayat:75,  page:177, type:"مدنية"},
  {n:9,  name:"التوبة",      eng:"At-Tawbah",    ayat:129, page:187, type:"مدنية"},
  {n:10, name:"يونس",        eng:"Yunus",        ayat:109, page:208, type:"مكية"},
  {n:11, name:"هود",         eng:"Hud",          ayat:123, page:221, type:"مكية"},
  {n:12, name:"يوسف",        eng:"Yusuf",        ayat:111, page:235, type:"مكية"},
  {n:13, name:"الرعد",       eng:"Ar-Ra'd",      ayat:43,  page:249, type:"مدنية"},
  {n:14, name:"إبراهيم",     eng:"Ibrahim",      ayat:52,  page:255, type:"مكية"},
  {n:15, name:"الحجر",       eng:"Al-Hijr",      ayat:99,  page:262, type:"مكية"},
  {n:16, name:"النحل",       eng:"An-Nahl",      ayat:128, page:267, type:"مكية"},
  {n:17, name:"الإسراء",     eng:"Al-Isra",      ayat:111, page:282, type:"مكية"},
  {n:18, name:"الكهف",       eng:"Al-Kahf",      ayat:110, page:293, type:"مكية"},
  {n:19, name:"مريم",        eng:"Maryam",       ayat:98,  page:305, type:"مكية"},
  {n:20, name:"طه",          eng:"Ta-Ha",        ayat:135, page:312, type:"مكية"},
  {n:21, name:"الأنبياء",    eng:"Al-Anbiya",    ayat:112, page:322, type:"مكية"},
  {n:22, name:"الحج",        eng:"Al-Hajj",      ayat:78,  page:332, type:"مدنية"},
  {n:23, name:"المؤمنون",    eng:"Al-Mu'minun",  ayat:118, page:342, type:"مكية"},
  {n:24, name:"النور",       eng:"An-Nur",       ayat:64,  page:350, type:"مدنية"},
  {n:25, name:"الفرقان",     eng:"Al-Furqan",    ayat:77,  page:359, type:"مكية"},
  {n:26, name:"الشعراء",     eng:"Ash-Shu'ara",  ayat:227, page:367, type:"مكية"},
  {n:27, name:"النمل",       eng:"An-Naml",      ayat:93,  page:377, type:"مكية"},
  {n:28, name:"القصص",       eng:"Al-Qasas",     ayat:88,  page:385, type:"مكية"},
  {n:29, name:"العنكبوت",    eng:"Al-Ankabut",   ayat:69,  page:396, type:"مكية"},
  {n:30, name:"الروم",       eng:"Ar-Rum",       ayat:60,  page:404, type:"مكية"},
  {n:31, name:"لقمان",       eng:"Luqman",       ayat:34,  page:411, type:"مكية"},
  {n:32, name:"السجدة",      eng:"As-Sajdah",    ayat:30,  page:415, type:"مكية"},
  {n:33, name:"الأحزاب",     eng:"Al-Ahzab",     ayat:73,  page:418, type:"مدنية"},
  {n:34, name:"سبأ",         eng:"Saba",         ayat:54,  page:428, type:"مكية"},
  {n:35, name:"فاطر",        eng:"Fatir",        ayat:45,  page:434, type:"مكية"},
  {n:36, name:"يس",          eng:"Ya-Sin",       ayat:83,  page:440, type:"مكية"},
  {n:37, name:"الصافات",     eng:"As-Saffat",    ayat:182, page:446, type:"مكية"},
  {n:38, name:"ص",           eng:"Sad",          ayat:88,  page:453, type:"مكية"},
  {n:39, name:"الزمر",       eng:"Az-Zumar",     ayat:75,  page:458, type:"مكية"},
  {n:40, name:"غافر",        eng:"Ghafir",       ayat:85,  page:467, type:"مكية"},
  {n:41, name:"فصلت",        eng:"Fussilat",     ayat:54,  page:477, type:"مكية"},
  {n:42, name:"الشورى",      eng:"Ash-Shura",    ayat:53,  page:483, type:"مكية"},
  {n:43, name:"الزخرف",      eng:"Az-Zukhruf",   ayat:89,  page:489, type:"مكية"},
  {n:44, name:"الدخان",      eng:"Ad-Dukhan",    ayat:59,  page:496, type:"مكية"},
  {n:45, name:"الجاثية",     eng:"Al-Jathiyah",  ayat:37,  page:499, type:"مكية"},
  {n:46, name:"الأحقاف",     eng:"Al-Ahqaf",     ayat:35,  page:502, type:"مكية"},
  {n:47, name:"محمد",        eng:"Muhammad",     ayat:38,  page:507, type:"مدنية"},
  {n:48, name:"الفتح",       eng:"Al-Fath",      ayat:29,  page:511, type:"مدنية"},
  {n:49, name:"الحجرات",     eng:"Al-Hujurat",   ayat:18,  page:515, type:"مدنية"},
  {n:50, name:"ق",           eng:"Qaf",          ayat:45,  page:518, type:"مكية"},
  {n:51, name:"الذاريات",    eng:"Adh-Dhariyat", ayat:60,  page:520, type:"مكية"},
  {n:52, name:"الطور",       eng:"At-Tur",       ayat:49,  page:523, type:"مكية"},
  {n:53, name:"النجم",       eng:"An-Najm",      ayat:62,  page:526, type:"مكية"},
  {n:54, name:"القمر",       eng:"Al-Qamar",     ayat:55,  page:528, type:"مكية"},
  {n:55, name:"الرحمن",      eng:"Ar-Rahman",    ayat:78,  page:531, type:"مدنية"},
  {n:56, name:"الواقعة",     eng:"Al-Waqi'ah",   ayat:96,  page:534, type:"مكية"},
  {n:57, name:"الحديد",      eng:"Al-Hadid",     ayat:29,  page:537, type:"مدنية"},
  {n:58, name:"المجادلة",    eng:"Al-Mujadila",  ayat:22,  page:542, type:"مدنية"},
  {n:59, name:"الحشر",       eng:"Al-Hashr",     ayat:24,  page:545, type:"مدنية"},
  {n:60, name:"الممتحنة",    eng:"Al-Mumtahanah", ayat:13, page:549, type:"مدنية"},
  {n:61, name:"الصف",        eng:"As-Saf",       ayat:14,  page:551, type:"مدنية"},
  {n:62, name:"الجمعة",      eng:"Al-Jumu'ah",   ayat:11,  page:553, type:"مدنية"},
  {n:63, name:"المنافقون",   eng:"Al-Munafiqun", ayat:11,  page:554, type:"مدنية"},
  {n:64, name:"التغابن",     eng:"At-Taghabun",  ayat:18,  page:556, type:"مدنية"},
  {n:65, name:"الطلاق",      eng:"At-Talaq",     ayat:12,  page:558, type:"مدنية"},
  {n:66, name:"التحريم",     eng:"At-Tahrim",    ayat:12,  page:560, type:"مدنية"},
  {n:67, name:"الملك",       eng:"Al-Mulk",      ayat:30,  page:562, type:"مكية"},
  {n:68, name:"القلم",       eng:"Al-Qalam",     ayat:52,  page:564, type:"مكية"},
  {n:69, name:"الحاقة",      eng:"Al-Haqqah",    ayat:52,  page:566, type:"مكية"},
  {n:70, name:"المعارج",     eng:"Al-Ma'arij",   ayat:44,  page:568, type:"مكية"},
  {n:71, name:"نوح",         eng:"Nuh",          ayat:28,  page:570, type:"مكية"},
  {n:72, name:"الجن",        eng:"Al-Jinn",      ayat:28,  page:572, type:"مكية"},
  {n:73, name:"المزمل",      eng:"Al-Muzzammil", ayat:20,  page:574, type:"مكية"},
  {n:74, name:"المدثر",      eng:"Al-Muddaththir", ayat:56, page:575, type:"مكية"},
  {n:75, name:"القيامة",     eng:"Al-Qiyamah",   ayat:40,  page:577, type:"مكية"},
  {n:76, name:"الإنسان",     eng:"Al-Insan",     ayat:31,  page:578, type:"مدنية"},
  {n:77, name:"المرسلات",    eng:"Al-Mursalat",  ayat:50,  page:580, type:"مكية"},
  {n:78, name:"النبأ",       eng:"An-Naba",      ayat:40,  page:582, type:"مكية"},
  {n:79, name:"النازعات",    eng:"An-Nazi'at",   ayat:46,  page:583, type:"مكية"},
  {n:80, name:"عبس",         eng:"Abasa",        ayat:42,  page:585, type:"مكية"},
  {n:81, name:"التكوير",     eng:"At-Takwir",    ayat:29,  page:586, type:"مكية"},
  {n:82, name:"الانفطار",    eng:"Al-Infitar",   ayat:19,  page:587, type:"مكية"},
  {n:83, name:"المطففين",    eng:"Al-Mutaffifin", ayat:36, page:587, type:"مكية"},
  {n:84, name:"الانشقاق",    eng:"Al-Inshiqaq",  ayat:25,  page:589, type:"مكية"},
  {n:85, name:"البروج",      eng:"Al-Buruj",     ayat:22,  page:590, type:"مكية"},
  {n:86, name:"الطارق",      eng:"At-Tariq",     ayat:17,  page:591, type:"مكية"},
  {n:87, name:"الأعلى",      eng:"Al-A'la",      ayat:19,  page:591, type:"مكية"},
  {n:88, name:"الغاشية",     eng:"Al-Ghashiyah", ayat:26,  page:592, type:"مكية"},
  {n:89, name:"الفجر",       eng:"Al-Fajr",      ayat:30,  page:593, type:"مكية"},
  {n:90, name:"البلد",       eng:"Al-Balad",     ayat:20,  page:594, type:"مكية"},
  {n:91, name:"الشمس",       eng:"Ash-Shams",    ayat:15,  page:595, type:"مكية"},
  {n:92, name:"الليل",       eng:"Al-Layl",      ayat:21,  page:595, type:"مكية"},
  {n:93, name:"الضحى",       eng:"Ad-Duha",      ayat:11,  page:596, type:"مكية"},
  {n:94, name:"الشرح",       eng:"Ash-Sharh",    ayat:8,   page:596, type:"مكية"},
  {n:95, name:"التين",       eng:"At-Tin",       ayat:8,   page:597, type:"مكية"},
  {n:96, name:"العلق",       eng:"Al-Alaq",      ayat:19,  page:597, type:"مكية"},
  {n:97, name:"القدر",       eng:"Al-Qadr",      ayat:5,   page:598, type:"مكية"},
  {n:98, name:"البينة",      eng:"Al-Bayyinah",  ayat:8,   page:598, type:"مدنية"},
  {n:99, name:"الزلزلة",     eng:"Az-Zalzalah",  ayat:8,   page:599, type:"مدنية"},
  {n:100,name:"العاديات",    eng:"Al-Adiyat",    ayat:11,  page:599, type:"مكية"},
  {n:101,name:"القارعة",     eng:"Al-Qari'ah",   ayat:11,  page:600, type:"مكية"},
  {n:102,name:"التكاثر",     eng:"At-Takathur",  ayat:8,   page:601, type:"مكية"},
  {n:103,name:"العصر",       eng:"Al-Asr",       ayat:3,   page:601, type:"مكية"},
  {n:104,name:"الهمزة",      eng:"Al-Humazah",   ayat:9,   page:601, type:"مكية"},
  {n:105,name:"الفيل",       eng:"Al-Fil",       ayat:5,   page:602, type:"مكية"},
  {n:106,name:"قريش",        eng:"Quraysh",      ayat:4,   page:602, type:"مكية"},
  {n:107,name:"الماعون",     eng:"Al-Ma'un",     ayat:7,   page:602, type:"مكية"},
  {n:108,name:"الكوثر",      eng:"Al-Kawthar",   ayat:3,   page:603, type:"مكية"},
  {n:109,name:"الكافرون",    eng:"Al-Kafirun",   ayat:6,   page:603, type:"مكية"},
  {n:110,name:"النصر",       eng:"An-Nasr",      ayat:3,   page:603, type:"مدنية"},
  {n:111,name:"المسد",       eng:"Al-Masad",     ayat:5,   page:604, type:"مكية"},
  {n:112,name:"الإخلاص",     eng:"Al-Ikhlas",    ayat:4,   page:604, type:"مكية"},
  {n:113,name:"الفلق",       eng:"Al-Falaq",     ayat:5,   page:604, type:"مكية"},
  {n:114,name:"الناس",       eng:"An-Nas",       ayat:6,   page:604, type:"مكية"}
];

const JUZ_START_PAGES = [
  1, 22, 42, 62, 82, 102, 122, 142, 162, 182,
  202, 222, 242, 262, 282, 302, 322, 342, 362, 382,
  402, 422, 442, 462, 482, 502, 522, 542, 562, 582
];

let currentPage = Number(localStorage.getItem('quran_lastPage') || 1);
let currentSurah = 1;
let fontSize = Number(localStorage.getItem('quran_fontSize') || 1.9);
let bookmarks = JSON.parse(localStorage.getItem('quran_bookmarks') || '[]');
let pageAyahs = [];

document.addEventListener('DOMContentLoaded', () => {
  restoreSavedTheme();
  document.getElementById('fontVal').textContent = fontSize.toFixed(1);
  buildSurahList();
  renderBookmarks();

  if (window.innerWidth < 900) {
    document.getElementById('sidebar').classList.add('closed');
    document.getElementById('main').classList.add('full');
  }

  bindSwipe();
  bindAyahClick();
  loadPage(currentPage);
});

function buildSurahList(filter = '') {
  const list = document.getElementById('surahList');
  list.innerHTML = '';

  const normalizedFilter = filter.trim().toLowerCase();

  const filtered = SURAHS.filter(s =>
    s.name.includes(filter) ||
    s.eng.toLowerCase().includes(normalizedFilter) ||
    String(s.n).includes(filter)
  );

  filtered.forEach(s => {
    const li = document.createElement('li');
    li.className = 'surah-item' + (s.n === currentSurah ? ' active' : '');
    li.dataset.surah = s.n;

    li.innerHTML = `
      <div class="surah-num">${s.n}</div>
      <div class="surah-info">
        <div class="surah-name">${s.name}</div>
        <div class="surah-meta">${s.eng} · ${s.type}</div>
      </div>
      <div class="surah-ayas">${s.ayat} آية</div>
    `;

    li.onclick = () => goToSurah(s.n);
    list.appendChild(li);
  });
}

function filterSurahs() {
  buildSurahList(document.getElementById('surahSearch').value);
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');

  if (window.innerWidth < 900) {
    sidebar.classList.toggle('open');
    sidebar.classList.toggle('closed');
  } else {
    sidebar.classList.toggle('closed');
    main.classList.toggle('full');
  }
}

function getJuzFromPage(page) {
  let juz = 1;
  for (let i = 0; i < JUZ_START_PAGES.length; i++) {
    if (page >= JUZ_START_PAGES[i]) juz = i + 1;
  }
  return juz;
}

async function loadPage(pageNum) {
  currentPage = Math.max(1, Math.min(604, pageNum));
  localStorage.setItem('quran_lastPage', currentPage);

  document.getElementById('pageLabel').textContent = `صفحة ${currentPage} من 604`;
  document.getElementById('pageJumpInput').value = currentPage;

  const surah = SURAHS.filter(s => s.page <= currentPage).pop();
  const bismillahEl = document.getElementById('bismillah');
  const quranTextEl = document.getElementById('quranText');

  if (surah) {
    currentSurah = surah.n;
    document.getElementById('surahLabel').textContent = `سورة ${surah.name}`;
  }

  const isStartOfSurah = surah && surah.page === currentPage;

  if (bismillahEl) {
    if (isStartOfSurah && surah.n !== 9) {
      bismillahEl.textContent = 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ';
    } else {
      bismillahEl.textContent = '';
    }
  }

  const juz = getJuzFromPage(currentPage);
  document.getElementById('juzLabel').textContent = `الجزء ${juz}`;

  highlightActiveSurah();

  quranTextEl.innerHTML = '<div class="loading">جارٍ التحميل...</div>';

  try {
    const res = await fetch(`https://api.alquran.cloud/v1/page/${currentPage}/quran-uthmani`);
    const data = await res.json();

    if (data.status !== 'OK') throw new Error('Load failed');

    pageAyahs = data.data.ayahs || [];

    let html = '';

    pageAyahs.forEach((ayah, index) => {
      if (index === 0 && ayah.text.includes('بِسْمِ')) return;

      html += `
        <span class="ayah" data-index="${index}">
          ${ayah.text}
          <span class="ayah-num">﴿${toArabicNum(ayah.numberInSurah)}﴾</span>
        </span>
      `;
    });

    quranTextEl.innerHTML = html;
    quranTextEl.style.fontSize = fontSize + 'rem';
  } catch (e) {
    quranTextEl.innerHTML =
      '<div class="loading">تعذّر تحميل الصفحة. تأكد من الإنترنت أو من عمل الـ API.</div>';
  }
}

function highlightActiveSurah() {
  document.querySelectorAll('.surah-item').forEach(item => {
    item.classList.toggle('active', Number(item.dataset.surah) === currentSurah);
  });
}

function changePage(dir) {
  const card = document.getElementById('quranCard');
  if (card) {
    card.classList.add('flipping');
    setTimeout(() => {
      loadPage(currentPage + dir);
      card.classList.remove('flipping');
    }, 180);
  } else {
    loadPage(currentPage + dir);
  }
}

function jumpToPage() {
  const val = parseInt(document.getElementById('pageJumpInput').value, 10);
  if (!isNaN(val) && val >= 1 && val <= 604) {
    loadPage(val);
  }
}

function goToSurah(n) {
  const s = SURAHS.find(x => x.n === n);
  if (!s) return;

  loadPage(s.page);

  if (window.innerWidth < 900) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar').classList.add('closed');
  }
}

function showView(name) {
  document.getElementById('view-read').style.display = name === 'read' ? '' : 'none';
  document.getElementById('view-bookmarks').style.display = name === 'bookmarks' ? '' : 'none';

  document.getElementById('btn-read').classList.toggle('active', name === 'read');
  document.getElementById('btn-bookmarks').classList.toggle('active', name === 'bookmarks');
}

function setTheme(theme, btn) {
  document.body.className = theme === 'light' ? '' : theme;
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  localStorage.setItem('quran_theme', theme);
}

function restoreSavedTheme() {
  const savedTheme = localStorage.getItem('quran_theme') || 'light';
  document.body.className = savedTheme === 'light' ? '' : savedTheme;

  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === savedTheme);
  });
}

function changeFont(delta) {
  fontSize = Math.max(1.0, Math.min(3.5, +(fontSize + delta).toFixed(1)));
  document.getElementById('fontVal').textContent = fontSize.toFixed(1);
  document.getElementById('quranText').style.fontSize = fontSize + 'rem';
  localStorage.setItem('quran_fontSize', fontSize);
}

function addBookmark() {
  const surah = SURAHS.find(s => s.n === currentSurah);
  const bm = {
    page: currentPage,
    surah: surah ? surah.name : '',
    time: new Date().toLocaleDateString('ar')
  };

  const alreadyExists = bookmarks.some(b => b.page === currentPage);
  if (alreadyExists) return;

  bookmarks.unshift(bm);
  if (bookmarks.length > 20) bookmarks.pop();

  localStorage.setItem('quran_bookmarks', JSON.stringify(bookmarks));
  renderBookmarks();
}

function renderBookmarks() {
  const el = document.getElementById('bookmarksList');

  if (!bookmarks.length) {
    el.innerHTML = '<p style="opacity:0.6">لا توجد علامات بعد.</p>';
    return;
  }

  el.innerHTML = bookmarks.map((b, i) => `
    <div class="bookmark-item">
      <span>صفحة ${b.page} — سورة ${b.surah} <small>(${b.time})</small></span>
      <div>
        <button class="btn-go" onclick="loadPage(${b.page});showView('read')">اذهب</button>
        <button class="btn-del" onclick="deleteBookmark(${i})">حذف</button>
      </div>
    </div>
  `).join('');
}

function deleteBookmark(i) {
  bookmarks.splice(i, 1);
  localStorage.setItem('quran_bookmarks', JSON.stringify(bookmarks));
  renderBookmarks();
}

function toArabicNum(n) {
  return String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
}

function bindAyahClick() {
  const quranText = document.getElementById('quranText');
  if (!quranText) return;

  quranText.addEventListener('click', (e) => {
    const ayah = e.target.closest('.ayah');
    if (!ayah) return;

    document.querySelectorAll('.ayah').forEach(a => a.classList.remove('active-ayah'));
    ayah.classList.add('active-ayah');
  });
}

function bindSwipe() {
  const quranCard = document.getElementById('quranCard');
  if (!quranCard) return;

  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;
  let mouseDown = false;

  quranCard.addEventListener('mousedown', (e) => {
    mouseDown = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  quranCard.addEventListener('mouseup', (e) => {
    if (!mouseDown) return;
    mouseDown = false;
    endX = e.clientX;
    endY = e.clientY;
    handleSwipe(startX, endX, startY, endY);
  });

  quranCard.addEventListener('mouseleave', () => {
    mouseDown = false;
  });

  quranCard.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  quranCard.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    handleSwipe(startX, endX, startY, endY);
  }, { passive: true });

  quranCard.addEventListener('click', (e) => {
    const rect = quranCard.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX < rect.width * 0.3) {
      changePage(-1);
    } else if (clickX > rect.width * 0.7) {
      changePage(1);
    }
  });
}

function handleSwipe(startX, endX, startY, endY) {
  const diffX = startX - endX;
  const diffY = Math.abs(startY - endY);

  if (Math.abs(diffX) < 60) return;
  if (diffY > 80) return;

  if (diffX > 0) {
    changePage(1);
  } else {
    changePage(-1);
  }
}