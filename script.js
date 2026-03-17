function copyQuranText() {
  // Collect all ayah text from the page
  const ayahs = pageAyahs.map(a => `${a.text} ﴿${toArabicNum(a.numberInSurah)}﴾`).join(' ');
  
  navigator.clipboard.writeText(ayahs).then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.textContent = '✅ تم النسخ!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '📋 نسخ النص';
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    alert('⚠️ تعذّر النسخ. حاول مجدداً.');
  });
}
