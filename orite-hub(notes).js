(function () {
    // پاکسازی پنل یا صفحه قبلی در صورت باز بودن
    const existingScreen = document.getElementById('orite-3d-diary-overlay');
    if (existingScreen) existingScreen.remove();

    // ۱. دیکشنری ۱۷ زبانه
    const dict = {
        en: { title: "Orite 3D Smart Diary", langLabel: "Language", addBtn: "➕ Add Note", saveBtn: "💾 Save", deleteBtn: "🗑️ Delete", prevBtn: "◀ Prev Page", nextBtn: "▶ Next Page", placeholder: "Write your thoughts in 3D...", empty: "No notes on this page", charTitle: "Orite Smart Diary", backBtn: "❌ Close Diary" },
        fa: { title: "دفترچه خاطرات سه‌بعدی اوریت", langLabel: "زبان", addBtn: "➕ افزودن یادداشت", saveBtn: "💾 ذخیره", deleteBtn: "🗑️ حذف", prevBtn: "◀ صفحه قبل", nextBtn: "صفحه بعد ▶", placeholder: "افکار خود را به صورت سه‌بعدی بنویسید...", empty: "یادداشتی در این صفحه وجود ندارد", charTitle: "دفترچه خاطرات هوشمند اوریت", backBtn: "❌ بستن دفترچه" },
        hy: { title: "Orite 3D խելացի օրագիր", langLabel: "Լեզու", addBtn: "➕ Ավելացնել գրառում", saveBtn: "💾 Պահپанел", deleteBtn: "🗑️ ջնջел", prevBtn: "◀ Նախорд", nextBtn: "Հаջорд ▶", placeholder: "Гրեք ձеր мտقерн 3D формаовтом...", empty: "Айс еջум грар умнер чкан", charTitle: "Orite खेлаци оражир", backBtn: "❌ Փакел орагиро" },
        ar: { title: "يوميات أوريت الذكية ثلاثية الأبعاد", langLabel: "لغة", addBtn: "➕ إضافة ملاحظة", saveBtn: "💾 حفظ", deleteBtn: "🗑️ حذف", prevBtn: "◀ الصفحة السابقة", nextBtn: "الصفحة التالية ▶", placeholder: "اكتب أفكارك بشكل ثلاثي الأبعاد...", empty: "لا توجد ملاحظات في هذه الصفحة", charTitle: "يوميات أوريت الذكية", backBtn: "❌ إغلاق اليوميات" },
        tr: { title: "Orite 3D Akıllı Günlük", langLabel: "Dil", addBtn: "➕ Not Ekle", saveBtn: "💾 Kaydet", deleteBtn: "🗑️ Sil", prevBtn: "◀ Önceki Sayfa", nextBtn: "Sonraki Sayfa ▶", placeholder: "Düşüncelerinizi 3D olarak yazın...", empty: "Bu sayfada not yok", charTitle: "Orite Akıllı Günlük", backBtn: "❌ Günlüğü Kapat" },
        ckb: { title: "نامیلکەی یادگاری هوشمەندی سێ ڕەهەندی ئۆریت", langLabel: "زمان", addBtn: "➕ زیادکردنی تێبینی", saveBtn: "💾 پاشەکەوتکردن", deleteBtn: "🗑️ سڕینەوە", prevBtn: "◀ لاپەڕەی پێشوو", nextBtn: "لاپەڕەی دواتر ▶", placeholder: "بیرکردنەوەکانت بە شێوازی سێ ڕەهەندی بنووسە...", empty: "هیچ تێبینییەک لەم لاپەڕەیەدا نییە", charTitle: "نامیلکەی یادگاری ئۆریت", backBtn: "❌ داخستنی نامیلکە" },
        zh: { title: "Orite 3D 智能日记", langLabel: "语言", addBtn: "➕ 添加笔记", saveBtn: "💾 保存", deleteBtn: "🗑️ 删除", prevBtn: "◀ 上一页", nextBtn: "下一页 ▶", placeholder: "以3D形式写下你的想法...", empty: "此页无笔记", charTitle: "Orite 智能日记", backBtn: "❌ 关闭日记" },
        ko: { title: "Orite 3D 스마트 다이어리", langLabel: "언어", addBtn: "➕ 메모 추가", saveBtn: "💾 저장", deleteBtn: "🗑️ 삭제", prevBtn: "◀ 이전 페이지", nextBtn: "다음 페이지 ▶", placeholder: "3D로 생각을 적어보세요...", empty: "이 페이지에 메모가 없습니다", charTitle: "Orite 스마트 다이어리", backBtn: "❌ 다이어리 닫기" },
        es: { title: "Diario Inteligente Orite 3D", langLabel: "Idioma", addBtn: "➕ Añadir nota", saveBtn: "💾 Guardar", deleteBtn: "🗑️ Eliminar", prevBtn: "◀ Pág. Anterior", nextBtn: "Pág. Siguiente ▶", placeholder: "Escribe tus pensamientos en 3D...", empty: "No hay notas en esta página", charTitle: "Diario Inteligente Orite", backBtn: "❌ Cerrar Diario" },
        it: { title: "Diario Intelligente Orite 3D", langLabel: "Lingua", addBtn: "➕ Aggiungi nota", saveBtn: "💾 Salva", deleteBtn: "🗑️ Elimina", prevBtn: "◀ Pagina prec.", nextBtn: "Pagina succ. ▶", placeholder: "Scrivi i tuoi pensieri in 3D...", empty: "Nessuna nota in questa pagina", charTitle: "Diario Intelligente Orite", backBtn: "❌ Chiudi diario" },
        fr: { title: "Journal Intelligent Orite 3D", langLabel: "Langue", addBtn: "➕ Ajouter une note", saveBtn: "💾 Enregistrer", deleteBtn: "🗑️ Supprimer", prevBtn: "◀ Page préc.", nextBtn: "Page suiv. ▶", placeholder: "Écrivez vos pensées en 3D...", empty: "Aucune note sur cette page", charTitle: "Journal Intelligent Orite", backBtn: "❌ Fermer le journal" },
        ru: { title: "Умный 3D-дневник Orite", langLabel: "Язык", addBtn: "➕ Добавить заметку", saveBtn: "💾 Сохранить", deleteBtn: "🗑️ Удалить", prevBtn: "◀ Пред. страница", nextBtn: "След. страница ▶", placeholder: "Записывайте свои мысли в 3D...", empty: "На этой странице нет заметок", charTitle: "Умный дневник Orite", backBtn: "❌ Закрыть дневник" },
        he: { title: "יומן חכם Orite תלת מימד", langLabel: "שפה", addBtn: "➕ הוסף הערה", saveBtn: "💾 שמור", deleteBtn: "🗑️ מחיקה", prevBtn: "◀ עמוד קודם", nextBtn: "עמוד הבא ▶", placeholder: "כתוב את המחשבות שלך בתלת מימד...", empty: "אין הערות בעמוד זה", charTitle: "יומן חכם Orite", backBtn: "❌ סגור יומן" },
        ja: { title: "Orite 3D スマート日記", langLabel: "言語", addBtn: "➕ メモを追加", saveBtn: "💾 保存", deleteBtn: "🗑️ 削除", prevBtn: "◀ 前のページ", nextBtn: "次のページ ▶", placeholder: "3Dで考えを書き留めよう...", empty: "このページにメモはありません", charTitle: "Orite スマート日記", backBtn: "❌ 日記を閉じる" },
        tg: { title: "Рӯзномаи интеллектуалии Orite 3D", langLabel: "Забон", addBtn: "➕ Қайд илова кунед", saveBtn: "💾 Захира", deleteBtn: "🗑️ Нест кардан", prevBtn: "◀ Саҳифаи қаблӣ", nextBtn: "Саҳифаи баъдӣ ▶", placeholder: "Афкори худро бо формати 3D нависед...", empty: "Дар ин саҳифа қайдҳо нестанд", charTitle: "Рӯзномаи интеллектуалии Orite", backBtn: "❌ Пӯшидани рӯзнома" },
        ms: { title: "Diari Pintar Orite 3D", langLabel: "Bahasa", addBtn: "➕ Tambah Nota", saveBtn: "💾 Simpan", deleteBtn: "🗑️ Padam", prevBtn: "◀ Halaman Prev", nextBtn: "Halaman Next ▶", placeholder: "Tulis fikiran anda dalam bentuk 3D...", empty: "Tiada nota pada halaman ini", charTitle: "Diari Pintar Orite", backBtn: "❌ Tutup Diari" },
        hr: { title: "Orite 3D pametni dnevnik", langLabel: "Jezik", addBtn: "➕ Dodaj bilješku", saveBtn: "💾 Spremi", deleteBtn: "🗑️ Izbriši", prevBtn: "◀ Prethodna", nextBtn: "Sljedeća ▶", placeholder: "Zapišite svoje misli u 3D...", empty: "Nema bilješki na ovoj stranici", charTitle: "Orite pametni dnevnik", backBtn: "❌ Zatvori dnevnik" }
    };

    let currentLang = localStorage.getItem('orite_hub_lang') || 'fa';
    let diaryColor = localStorage.getItem('orite_diary_color') || 'pink';
    let pages = JSON.parse(localStorage.getItem('orite_diary_pages') || '[""]');
    let currentPageIndex = 0;

    // ایجاد لایه اصلی
    const overlay = document.createElement('div');
    overlay.id = 'orite-3d-diary-overlay';
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 9999999; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        overflow: hidden; transition: opacity 0.8s ease;
        background: radial-gradient(circle, rgba(2,132,199,0.4) 0%, rgba(15,23,42,0.85) 100%);
        backdrop-filter: blur(8px);
    `;

    // استایل‌های انیمیشن
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes oriteDriftingCloud1 {
            0% { transform: translate(-10%, -20%) scale(1); opacity: 0.3; }
            50% { transform: translate(110%, 120%) scale(1.2); opacity: 0.5; }
            100% { transform: translate(-10%, -20%) scale(1); opacity: 0.3; }
        }
        @keyframes oriteDriftingCloud2 {
            0% { transform: translate(120%, 110%) scale(1.1); opacity: 0.4; }
            50% { transform: translate(-20%, -10%) scale(0.9); opacity: 0.2; }
            100% { transform: translate(120%, 110%) scale(1.1); opacity: 0.4; }
        }
        .orite-cloud-anim1 {
            position: absolute; width: 400px; height: 200px; background: rgba(255,255,255,0.18);
            border-radius: 50%; filter: blur(40px); animation: oriteDriftingCloud1 22s infinite linear;
            top: -10%; left: -10%; pointer-events: none;
        }
        .orite-cloud-anim2 {
            position: absolute; width: 500px; height: 250px; background: rgba(224,242,254,0.15);
            border-radius: 45%; filter: blur(50px); animation: oriteDriftingCloud2 28s infinite linear;
            bottom: -10%; right: -10%; pointer-events: none;
        }
        @keyframes oriteTechGlow {
            0% { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ea5e9; }
            50% { text-shadow: 0 0 20px #fff, 0 0 40px #38bdf8, 0 0 60px #0284c7; }
            100% { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ea5e9; }
        }
        .orite-tech-text { animation: oriteTechGlow 3s infinite alternate; }
        @keyframes lightningStrike {
            0%, 100% { filter: drop-shadow(0 0 0px transparent); }
            50% { filter: drop-shadow(0 0 15px #fbbf24); }
        }
        .orite-lightning-hit { animation: lightningStrike 0.2s ease-in-out 3; }
        @keyframes catBounce {
            0% { transform: translateY(0) rotate(-3deg); }
            100% { transform: translateY(-8px) rotate(3deg); }
        }
    `;
    document.head.appendChild(styleSheet);

    overlay.innerHTML = `
        <div class="orite-cloud-anim1"></div>
        <div class="orite-cloud-anim2"></div>
    `;

    // کانتینر متن بزرگ بالایی
    const techTextContainer = document.createElement('div');
    techTextContainer.style.cssText = "position:absolute; top:20px; text-align:center; z-index:10; width:100%;";

    // کاراکتر گربه (برای شب)
    const catWrapper = document.createElement('div');
    catWrapper.style.cssText = "display:none; justify-content:center; margin-bottom:-10px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5));";
    catWrapper.innerHTML = `<div style="font-size:45px; transform-origin: center; animation: catBounce 2s infinite alternate;">🐱<span style="font-size:20px; position:absolute; top:-5px; right:40%;">✨</span></div>`;

    const heading3D = document.createElement('h1');
    heading3D.className = "orite-tech-text";
    heading3D.style.cssText = "font-size:32px; font-weight:900; color:#ffffff; margin:0; perspective: 500px; transform-style: preserve-3d; transition: all 0.5s ease;";

    techTextContainer.appendChild(catWrapper);
    techTextContainer.appendChild(heading3D);
    overlay.appendChild(techTextContainer);

    // پنل کنترل خارجی
    const externalControlPanel = document.createElement('div');
    externalControlPanel.style.cssText = `
        display: flex; gap: 20px; align-items: center; margin-bottom: 20px; z-index: 10;
        background: rgba(15, 23, 42, 0.4); padding: 12px 24px; border-radius: 50px;
        border: 1px solid rgba(255,255,255,0.15); backdrop-filter: blur(15px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    `;

    // انتخاب زبان
    const langBox = document.createElement('div');
    langBox.style.cssText = "display:flex; align-items:center; gap:8px; color:#fff; font-size:13px; font-weight:600; text-transform:uppercase;";
    langBox.innerHTML = `
        <span id="orite-lang-label">Language:</span>
        <select id="orite-diary-lang" style="
            background: linear-gradient(135deg, #0f172a, #1e293b); color: #fff;
            padding: 8px 16px; border-radius: 20px; border: 1px solid #38bdf8;
            cursor: pointer; font-weight: bold; font-size: 13px; outline: none;
            box-shadow: 0 4px 12px rgba(56,189,248,0.2); transition: all 0.3s;
        ">
            <option value="fa">فارسی (FA)</option>
            <option value="en">English (EN)</option>
            <option value="hy">Հայերեն (HY)</option>
            <option value="ar">العربية (AR)</option>
            <option value="tr">Türkçe (TR)</option>
            <option value="ckb">کوردی (CKB)</option>
            <option value="zh">中文 (ZH)</option>
            <option value="ko">한국어 (KO)</option>
            <option value="es">Español (ES)</option>
            <option value="it">Italiano (IT)</option>
            <option value="fr">Français (FR)</option>
            <option value="ru">Русский (RU)</option>
            <option value="he">עברית (HE)</option>
            <option value="ja">日本語 (JA)</option>
            <option value="tg">Тоҷикӣ (TG)</option>
            <option value="ms">Bahasa Melayu (MS)</option>
            <option value="hr">Hrvatski (HR)</option>
        </select>
    `;

    const langSelect = langBox.querySelector('#orite-diary-lang');
    langSelect.value = currentLang;

    langSelect.onmouseover = () => {
        langSelect.style.boxShadow = "0 0 20px #38bdf8, 0 0 30px #0284c7";
        langSelect.style.borderColor = "#bae6fd";
    };
    langSelect.onmouseout = () => {
        langSelect.style.boxShadow = "0 4px 12px rgba(56,189,248,0.2)";
        langSelect.style.borderColor = "#38bdf8";
    };
    langSelect.onchange = (e) => {
        currentLang = e.target.value;
        localStorage.setItem('orite_hub_lang', currentLang);

        // افکت رعد و برق هنگام انتخاب زبان
        langSelect.classList.add("orite-lightning-hit");
        langSelect.style.background = "#fbbf24";
        langSelect.style.color = "#000";
        setTimeout(() => {
            langSelect.classList.remove("orite-lightning-hit");
            langSelect.style.background = "linear-gradient(135deg, #0f172a, #1e293b)";
            langSelect.style.color = "#fff";
            langSelect.style.boxShadow = "0 4px 12px rgba(56,189,248,0.2)";
            langSelect.style.borderColor = "#38bdf8";
        }, 600);

        applyLanguageTexts();
        updateTopTextStatus(); // به‌روزرسانی متن هدر هنگام تغییر زبان
    };
    externalControlPanel.appendChild(langBox);

    // انتخابگر رنگ دفترچه
    const colorPickerWrapper = document.createElement('div');
    colorPickerWrapper.style.cssText = "display:flex; gap:8px; align-items:center;";
    colorPickerWrapper.innerHTML = `
        <div style="color:#94a3b8; font-size:11px; font-weight:bold;" id="orite-color-lbl">Color:</div>
        <button class="color-picker-btn" data-color="pink" style="width:26px; height:26px; border-radius:50%; background:#f472b6; border:2px solid ${diaryColor === 'pink' ? '#fff' : 'transparent'}; cursor:pointer; box-shadow:0 0 8px #f472b688; transition:0.2s;"></button>
        <button class="color-picker-btn" data-color="blue" style="width:26px; height:26px; border-radius:50%; background:#38bdf8; border:2px solid ${diaryColor === 'blue' ? '#fff' : 'transparent'}; cursor:pointer; box-shadow:0 0 8px #38bdf888; transition:0.2s;"></button>
        <button class="color-picker-btn" data-color="green" style="width:26px; height:26px; border-radius:50%; background:#4ade80; border:2px solid ${diaryColor === 'green' ? '#fff' : 'transparent'}; cursor:pointer; box-shadow:0 0 8px #4ade8088; transition:0.2s;"></button>
    `;

    // کانتینر دفترچه
    const diaryBook = document.createElement('div');
    diaryBook.style.cssText = `
        width: 460px; height: 350px; border-radius: 20px; padding: 35px;
        box-shadow: 0 25px 60px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.2);
        display: flex; flex-direction: column; justify-content: space-between; z-index: 10;
        transform: rotateX(10deg) rotateY(-5deg); transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        border: 2px solid rgba(255,255,255,0.2);
    `;

    // textarea باید قبل از updateDiaryStyle تعریف شود
    const diaryTextarea = document.createElement('textarea');
    diaryTextarea.style.cssText = `
        width: 90%; height: 170px; border-radius: 12px; padding: 15px; resize: none;
        font-size: 14px; font-family: inherit; font-weight: 500;
        outline: none; box-shadow: inset 0 2px 8px rgba(0,0,0,0.05);
        border: 1px solid; transition: all 0.3s ease;
    `;
    diaryTextarea.onfocus = () => diaryTextarea.style.boxShadow = "0 0 12px rgba(0,0,0,0.1), inset 0 2px 8px rgba(0,0,0,0.05)";
    diaryTextarea.onblur = () => diaryTextarea.style.boxShadow = "inset 0 2px 8px rgba(0,0,0,0.05)";

    // FIX: تابع updateDiaryStyle اکنون بعد از تعریف diaryTextarea قرار دارد
    function updateDiaryStyle(colorKey) {
        diaryColor = colorKey;
        localStorage.setItem('orite_diary_color', colorKey);

        let bgStyle = "";
        const textCol = "#1e293b";
        const inputBg = "rgba(255,255,255,0.7)";
        const borderCol = "rgba(0,0,0,0.1)";

        if (colorKey === 'green') {
            bgStyle = "linear-gradient(135deg, #dcfce7, #a7f3d0)";
        } else if (colorKey === 'blue') {
            bgStyle = "linear-gradient(135deg, #e0f2fe, #bae6fd)";
        } else {
            bgStyle = "linear-gradient(135deg, #fce7f3, #fbcfe8)";
        }

        diaryBook.style.background = bgStyle;
        diaryBook.style.color = textCol;

        colorPickerWrapper.querySelectorAll('.color-picker-btn').forEach(btn => {
            if (btn.getAttribute('data-color') === colorKey) {
                btn.style.border = "2px solid #ffffff";
                btn.style.transform = "scale(1.15)";
            } else {
                btn.style.border = "2px solid transparent";
                btn.style.transform = "scale(1)";
            }
        });

        diaryTextarea.style.background = inputBg;
        diaryTextarea.style.borderColor = borderCol;
        diaryTextarea.style.color = textCol;
    }

    colorPickerWrapper.querySelectorAll('.color-picker-btn').forEach(btn => {
        btn.onclick = (e) => updateDiaryStyle(e.target.getAttribute('data-color'));
    });
    externalControlPanel.appendChild(colorPickerWrapper);

    // دکمه بستن
    const closeDiaryBtn = document.createElement('button');
    closeDiaryBtn.id = "orite-close-diary-btn";
    closeDiaryBtn.style.cssText = `
        background: linear-gradient(135deg, #e11d48, #be123c); color: #fff;
        border: none; border-radius: 20px; padding: 8px 18px; font-size: 12px;
        font-weight: bold; cursor: pointer; box-shadow: 0 4px 12px rgba(225,29,72,0.3);
        transition: all 0.2s;
    `;
    closeDiaryBtn.onmouseover = () => closeDiaryBtn.style.transform = "scale(1.05) translateY(-2px)";
    closeDiaryBtn.onmouseout = () => closeDiaryBtn.style.transform = "scale(1) translateY(0)";
    closeDiaryBtn.onclick = () => {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.remove(), 800);
    };
    externalControlPanel.appendChild(closeDiaryBtn);

    overlay.appendChild(externalControlPanel);

    // محتویات داخل دفترچه
    const diaryHeader = document.createElement('div');
    diaryHeader.style.cssText = "display:flex; justify-content:space-between; align-items:center; border-bottom:2px dashed rgba(0,0,0,0.15); padding-bottom:8px;";
    diaryHeader.innerHTML = `
        <h3 id="orite-diary-title" style="margin:0; font-size:18px; font-weight:800; display:flex; align-items:center; gap:6px;">📖 <span></span></h3>
        <span style="font-size: 24px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));">🤖✨</span>
    `;

    const diaryFooter = document.createElement('div');
    diaryFooter.style.cssText = "display:flex; justify-content:space-between; align-items:center; gap:8px;";

    const pageNavWrapper = document.createElement('div');
    pageNavWrapper.style.cssText = "display:flex; gap:6px;";

    const prevPageBtn = document.createElement('button');
    prevPageBtn.id = "orite-diary-prev";
    prevPageBtn.style.cssText = "background:rgba(0,0,0,0.1); border:none; border-radius:8px; padding:6px 12px; font-size:11px; font-weight:bold; cursor:pointer; color:#334155; transition:0.2s;";
    prevPageBtn.onmouseover = () => prevPageBtn.style.background = "rgba(0,0,0,0.2)";
    prevPageBtn.onmouseout = () => prevPageBtn.style.background = "rgba(0,0,0,0.1)";
    prevPageBtn.onclick = () => {
        if (currentPageIndex > 0) {
            saveCurrentPage();
            currentPageIndex--;
            loadPage();
        }
    };

    const nextPageBtn = document.createElement('button');
    nextPageBtn.id = "orite-diary-next";
    nextPageBtn.style.cssText = "background:rgba(0,0,0,0.1); border:none; border-radius:8px; padding:6px 12px; font-size:11px; font-weight:bold; cursor:pointer; color:#334155; transition:0.2s;";
    nextPageBtn.onmouseover = () => nextPageBtn.style.background = "rgba(0,0,0,0.2)";
    nextPageBtn.onmouseout = () => nextPageBtn.style.background = "rgba(0,0,0,0.1)";
    nextPageBtn.onclick = () => {
        saveCurrentPage();
        if (currentPageIndex === pages.length - 1) {
            pages.push("");
        }
        currentPageIndex++;
        loadPage();
    };

    pageNavWrapper.appendChild(prevPageBtn);
    pageNavWrapper.appendChild(nextPageBtn);

    const addNoteBtn = document.createElement('button');
    addNoteBtn.id = "orite-diary-add";
    addNoteBtn.style.cssText = `
        background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: #fff;
        border: none; border-radius: 10px; padding: 8px 14px; font-size: 12px;
        font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(59,130,246,0.2);
        transition: 0.2s;
    `;
    addNoteBtn.onmouseover = () => addNoteBtn.style.transform = "translateY(-2px)";
    addNoteBtn.onmouseout = () => addNoteBtn.style.transform = "translateY(0)";
    addNoteBtn.onclick = () => {
        saveCurrentPage();
        const d = dict[currentLang] || dict['fa'];
        alert("✨ " + (d.saveBtn || "ذخیره شد"));
    };

    const pageIndicator = document.createElement('span');
    pageIndicator.style.cssText = "font-size:12px; font-weight:bold; color:#64748b;";

    diaryFooter.appendChild(pageNavWrapper);
    diaryFooter.appendChild(addNoteBtn);

    diaryBook.appendChild(diaryHeader);
    diaryBook.appendChild(diaryTextarea);
    diaryBook.appendChild(pageIndicator);
    diaryBook.appendChild(diaryFooter);

    overlay.appendChild(diaryBook);

    // FIX: تابع saveCurrentPage
    function saveCurrentPage() {
        pages[currentPageIndex] = diaryTextarea.value;
        localStorage.setItem('orite_diary_pages', JSON.stringify(pages));
    }

    // FIX: تابع loadPage
    function loadPage() {
        diaryTextarea.value = pages[currentPageIndex] || "";
        pageIndicator.innerText = `📄 ${currentPageIndex + 1} / ${pages.length}`;
        prevPageBtn.disabled = (currentPageIndex === 0);
    }

    // FIX: تابع applyLanguageTexts کامل شد - تمام متون UI رو به‌روز می‌کنه
    function applyLanguageTexts() {
        const d = dict[currentLang] || dict['fa'];

        // عنوان دفترچه
        const titleSpan = document.querySelector('#orite-diary-title span');
        if (titleSpan) titleSpan.innerText = d.title;

        // placeholder
        if (diaryTextarea) diaryTextarea.placeholder = d.placeholder;

        // دکمه‌ها
        if (prevPageBtn) prevPageBtn.innerText = d.prevBtn;
        if (nextPageBtn) nextPageBtn.innerText = d.nextBtn;
        if (addNoteBtn) addNoteBtn.innerText = d.addBtn;
        if (closeDiaryBtn) closeDiaryBtn.innerText = d.backBtn;

        // برچسب زبان
        const langLabel = document.getElementById('orite-lang-label');
        if (langLabel) langLabel.innerText = d.langLabel + ":";
    }

    // FIX: تابع updateTopTextStatus - متغیر hour و d اکنون درون تابع تعریف شده‌اند
    function updateTopTextStatus() {
        const d = dict[currentLang] || dict['fa'];
        const hour = new Date().getHours();
        let headerState = "";

        // نمایش یا پنهان کردن گربه در شب
        if (hour >= 20 || hour < 6) {
            catWrapper.style.display = "flex";
        } else {
            catWrapper.style.display = "none";
        }

        // سناریوهای زمانی
        if (hour >= 6 && hour < 9) {
            headerState = (currentLang === 'fa' ? "☀️ بیدار شدن از خواب! صبح بخیر..." : (currentLang === 'hy' ? "☀️ Արthնанал! Бари луйс..." : "☀️ Waking up! Good morning..."));
        } else if (hour >= 9 && hour < 12) {
            headerState = (currentLang === 'fa' ? "☕ قهوه خوردن و آماده‌سازی برای یک روز عالی" : (currentLang === 'hy' ? "☕ Сурч хмел ев патраствел" : "☕ Drinking coffee, preparing for a great day"));
        } else if (hour >= 12 && hour < 14) {
            headerState = (currentLang === 'fa' ? "🍔 خوردن همبرگر خوشمزه" : (currentLang === 'hy' ? "🍔 Համеղ햄бургер утел" : "🍔 Eating a delicious burger"));
        } else if (hour >= 14 && hour < 17) {
            headerState = (currentLang === 'fa' ? "📱 در حال کار کردن با گوشی" : (currentLang === 'hy' ? "📱 헤ракхосов ашхател" : "📱 Working with the phone"));
        } else if (hour >= 17 && hour < 20) {
            headerState = (currentLang === 'fa' ? "🥳 شادی کردن بعد از یک روز کاری" : (currentLang === 'hy' ? "🥳 Урахanал ашхатанкаин оривниц хето" : "🥳 Joyful after a workday"));
        } else {
            headerState = (currentLang === 'fa' ? "🤔 فکر کردن به ایده‌های جدید در شب" : (currentLang === 'hy' ? "🤔 Нор гагафарнери масин мтадзел гишерын" : "🤔 Thinking about new ideas at night"));
        }

        heading3D.innerHTML = `
            ${headerState}
            <div style="font-size: 14px; color: #38bdf8; font-weight: normal; margin-top: 4px; font-style: italic;">
                ${d.charTitle}
            </div>
        `;
    }

    // چرخه تغییر حالت‌های متن هدر (هر ۱۰ ثانیه)
    const statesList = [
        "🔥 آتیش گرفتن (محاسبه و پردازش سریع)", "⚡ رعد برق زدن (تحلیل هوش مصنوعی)",
        "☁️ ابری شدن (در حال ارتباط با سرور)", "🌧️ بارانی شدن (ذخیره اطلاعات)",
        "❄️ برفی شدن (اسکن امنیتی حافظه)", "🌵 خشک شدن (صرفه‌جویی در مصرف باتری)",
        "😲 تعجب کردن از خلاقیت شما", "🤯 حرکات عجیب در آوردن",
        "📴 بدون اینترنت بودن (آفلاین)", "📸 عکس گرفتن از صفحه"
    ];

    let stateIndex = 0;
    setInterval(() => {
        const stateText = statesList[stateIndex];
        const baseMsg = (currentLang === 'fa'
            ? "دفترچه خاطرات هوشمند سه بعدی می‌خوای؟ فقط اوریت! راستی، سلام من اوریک سیستم، هوش مصنوعی اوریت هستم."
            : (currentLang === 'ckb'
                ? "نامیلکەی یادگاری هوشمەندی سێ ڕەهەندی دەوێت؟ تەنها ئۆریت! بەخێر بێیت، من ئۆریک سیستم، هۆشی دەستکردی ئۆریتم."
                : "Want 3D smart diary? Just Orite! By the way, hello, I am Oric system, Orite's AI."));

        heading3D.innerHTML = `
            <div style="font-size: 24px; color: #facc15;" class="orite-lightning-hit">${stateText}</div>
            <div style="font-size: 14px; font-weight: normal; color: #f1f5f9; margin-top: 6px;">${baseMsg}</div>
        `;

        stateIndex = (stateIndex + 1) % statesList.length;
    }, 10000);

    // مقداردهی اولیه
    updateDiaryStyle(diaryColor);
    loadPage();
    applyLanguageTexts();
    updateTopTextStatus(); // FIX: اکنون بعد از تعریف فراخوانی می‌شود

    document.body.appendChild(overlay);
})();