(function() {
    // ۱. پاکسازی پنل‌های قبلی
    const existing = document.getElementById('orite-chronometer');
    if (existing) existing.remove();

    // ۲. تعریفِ کاملِ دیکشنری ۸ زبانه
    const dict = {
        fa: { title: "کرنومتر", start: "شروع", stop: "توقف", save: "ذخیره", reset: "صفر", placeholder: "توضیحات...", desc: "زمان‌سنجی اوریت" },
        en: { title: "Chronometer", start: "Start", stop: "Stop", save: "Save", reset: "Reset", placeholder: "Description...", desc: "Orite timer" },
        tr: { title: "Kronometre", start: "Başlat", stop: "Durdur", save: "Kaydet", reset: "Sıfırla", placeholder: "Açıklama...", desc: "Orite zamanlayıcı" },
        ar: { title: "كرونومتر", start: "ابدأ", stop: "توقف", save: "حفظ", reset: "إعادة", placeholder: "الوصف...", desc: "مؤقت Orite" },
        ku: { title: "Demjimêr", start: "Destpêk", stop: "Rawestan", save: "Tomarkirin", reset: "Sifirkirin", placeholder: "Şirove...", desc: "Demjimêra Orite" },
        zh: { title: "秒表", start: "开始", stop: "停止", save: "保存", reset: "重置", placeholder: "描述...", desc: "Orite 计时器" },
        ko: { title: "스톱워치", start: "시작", stop: "정지", save: "저장", reset: "재설정", placeholder: "설명...", desc: "Orite 타이머" },
        fr: { title: "Chronomètre", start: "Démarrer", stop: "Arrêter", save: "Enregistrer", reset: "Réinitialiser", placeholder: "Description...", desc: "Minuteur Orite" }
    };

    let seconds = 0, timer = null, lang = 'fa';

    // ۳. تابعِ اصلی ساخت پنل
    function render() {
        const d = dict[lang];
        const chrono = document.createElement('div');
        chrono.id = 'orite-chronometer';
        // استایل مدرن و مرتب
        chrono.style.cssText = "position:fixed !important; bottom:20px !important; right:1151px !important; width:300px !important; background:#ffffff !important; padding:15px !important; border-radius:15px !important; box-shadow:0 4px 12px rgba(0,0,0,0.15) !important; z-index:999999 !important; border:1px solid #e0e0e0 !important; font-family:sans-serif !important; color:#333 !important;";

        chrono.innerHTML = `
            <select id="lang-sel" style="width:100%; padding:5px; margin-bottom:10px; border-radius:5px;">
                ${Object.keys(dict).map(l => `<option value="${l}" ${l===lang?'selected':''}>${l.toUpperCase()}</option>`).join('')}
            </select>
            <h3 style="margin:0 0 5px 0;">${d.title}</h3>
            <p style="font-size:12px; color:#666; margin:0 0 10px 0;">${d.desc}</p>
            <div id="time-display" style="font-size:28px; font-weight:bold; text-align:center; margin-bottom:10px;">00:00</div>
            <input type="text" id="desc-input" placeholder="${d.placeholder}" style="width:94%; padding:8px; margin-bottom:10px; border:1px solid #ddd; border-radius:5px;">
            <div style="display:flex; gap:5px;">
                <button id="s-btn" style="flex:1; padding:8px; cursor:pointer;">${d.start}</button>
                <button id="r-btn" style="flex:1; padding:8px; cursor:pointer;">${d.reset}</button>
            </div>
            <button id="save-btn" style="width:100%; margin-top:5px; padding:8px; cursor:pointer; background:#007bff; color:white; border:none; border-radius:5px;">${d.save}</button>
            <div id="logs" style="margin-top:15px; max-height:100px; overflow-y:auto; font-size:11px; border-top:1px solid #eee; padding-top:5px;"></div>
        `;

        // مدیریت رویدادها
        chrono.querySelector('#lang-sel').onchange = (e) => { lang = e.target.value; document.body.removeChild(chrono); render(); };
        
        chrono.querySelector('#s-btn').onclick = function() {
            if (timer) { clearInterval(timer); timer = null; this.innerText = d.start; }
            else {
                this.innerText = d.stop;
                timer = setInterval(() => {
                    seconds++;
                    chrono.querySelector('#time-display').innerText = Math.floor(seconds/60).toString().padStart(2,'0') + ":" + (seconds%60).toString().padStart(2,'0');
                }, 1000);
            }
        };

        chrono.querySelector('#r-btn').onclick = () => { seconds=0; chrono.querySelector('#time-display').innerText="00:00"; clearInterval(timer); timer=null; chrono.querySelector('#s-btn').innerText=d.start; };

        chrono.querySelector('#save-btn').onclick = () => {
            const time = chrono.querySelector('#time-display').innerText;
            const desc = chrono.querySelector('#desc-input').value || "---";
            const now = new Date().toLocaleString(lang);
            const logItem = document.createElement('div');
            logItem.style.marginBottom = "5px";
            logItem.innerHTML = `<b>${time}</b> | ${desc} <br><span style="color:#888;">${now}</span> <button style="color:red; cursor:pointer;">${d.reset !== 'Sıfırla' ? 'حذف' : 'Sil'}</button>`;
            logItem.querySelector('button').onclick = () => logItem.remove();
            chrono.querySelector('#logs').appendChild(logItem);
        };

        document.body.appendChild(chrono);
    }

    render();
})();