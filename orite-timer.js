(function() {
    // ۱. پاکسازی پنل تایمر قبلی (جلوگیری از تکرار)
    const existing = document.getElementById('orite-timer-panel');
    if (existing) existing.remove();

    // ۲. دیکشنری ۹ زبانه (شامل آلمانی)
    const dict = {
        fa: { title: "تایمر", start: "شروع", stop: "توقف", save: "ذخیره", reset: "ریست", desc: "شمارش معکوس زمان", done: "زمان به پایان رسید!", min: "دقیقه", sec: "ثانیه", logTitle: "رکورد ذخیره شده" },
        en: { title: "Timer", start: "Start", stop: "Stop", save: "Save", reset: "Reset", desc: "Countdown timer", done: "Time is up!", min: "Min", sec: "Sec", logTitle: "Saved record" },
        tr: { title: "Zamanlayıcı", start: "Başlat", stop: "Durdur", save: "Kaydet", reset: "Sıfırla", desc: "Geri sayım sayacı", done: "Süre bitti!", min: "Dk", sec: "Sn", logTitle: "Kaydedilen kayıt" },
        ar: { title: "المؤقت", start: "ابدأ", stop: "توقف", save: "حفظ", reset: "إعادة", desc: "عداد تنازلي", done: "انتهى الوقت!", min: "دقيقة", sec: "ثانية", logTitle: "سجل محفوظ" },
        ku: { title: "Demjimêr", start: "Destpêk", stop: "Rawestan", save: "Tomarkirin", reset: "Sifirkirin", desc: "Jimartina paşve", done: "Dem qediya!", min: "Deqe", sec: "Saniye", logTitle: "Tomara tomarkirî" },
        zh: { title: "定时器", start: "开始", stop: "停止", save: "保存", reset: "重置", desc: "倒计时器", done: "时间到！", min: "分", sec: "秒", logTitle: "保存的记录" },
        ko: { title: "타이머", start: "시작", stop: "정지", save: "저장", reset: "재설정", desc: "카운트다운 타이머", done: "시간이 다 되었습니다!", min: "분", sec: "초", logTitle: "저장된 기록" },
        fr: { title: "Minuteur", start: "Démarrer", stop: "Arrêter", save: "Enregistrer", reset: "Réinitialiser", desc: "Minuteur à rebours", done: "Le temps est écoulé !", min: "Min", sec: "Sec", logTitle: "Enregistrement" },
        de: { title: "Timer", start: "Starten", stop: "Stoppen", save: "Speichern", reset: "Zurücksetzen", desc: "Countdown-Timer", done: "Die Zeit ist um!", min: "Min", sec: "Sek", logTitle: "Gespeicherter Datensatz" }
    };

    let lang = 'fa', timer = null, totalSeconds = 0;

    // ۳. ساخت المان پنل تایمر
    const timerPanel = document.createElement('div');
    timerPanel.id = 'orite-timer-panel';
    timerPanel.style.cssText = "background:#ffffff !important; padding:15px !important; border-radius:15px !important; box-shadow:0 4px 15px rgba(0,0,0,0.15) !important; border:1px solid #e0e0e0 !important; font-family:Tahoma, Arial, sans-serif !important; color:#333 !important; width:481px !important; margin-top:20px !important;";

    function render() {
        const d = dict[lang];
        timerPanel.innerHTML = `
            <select id="lang-sel-timer" style="width:100%; padding:5px; margin-bottom:10px; border-radius:5px;">
                ${Object.keys(dict).map(l => `<option value="${l}" ${l===lang?'selected':''}>${l.toUpperCase()}</option>`).join('')}
            </select>
            <h3 style="margin:0 0 5px 0;">${d.title}</h3>
            <p style="font-size:12px; color:#666; margin:0 0 10px 0;">${d.desc}</p>
            
            <div id="setup-section">
                <div style="display:flex; gap:10px; margin-bottom:10px; align-items:center;">
                    <input type="number" id="min-input" placeholder="${d.min}" min="0" style="width:50%; padding:8px; border:1px solid #ddd; border-radius:5px;">
                    <span>:</span>
                    <input type="number" id="sec-input" placeholder="${d.sec}" min="0" max="59" style="width:50%; padding:8px; border:1px solid #ddd; border-radius:5px;">
                </div>
                <button id="set-time-btn" style="width:100%; padding:8px; cursor:pointer; background:#28a745; color:white; border:none; border-radius:5px; margin-bottom:10px;">تنظیم زمان</button>
            </div>

            <div id="timer-display" style="font-size:32px; font-weight:bold; text-align:center; margin-bottom:10px; display:none;">00:00</div>

            <div style="display:flex; gap:5px;">
                <button id="start-t-btn" style="flex:1; padding:8px; cursor:pointer; display:none;" disabled>${d.start}</button>
                <button id="reset-t-btn" style="flex:1; padding:8px; cursor:pointer; display:none;">${d.reset}</button>
            </div>
            
            <input type="text" id="desc-input" placeholder="توضیحات تایمر..." style="width:94%; padding:8px; margin-top:10px; border:1px solid #ddd; border-radius:5px; display:none;">
            <button id="save-t-btn" style="width:100%; margin-top:5px; padding:8px; cursor:pointer; background:#007bff; color:white; border:none; border-radius:5px; display:none;">${d.save}</button>
            
            <div id="logs-t" style="margin-top:15px; max-height:100px; overflow-y:auto; font-size:11px; border-top:1px solid #eee; padding-top:5px;"></div>
        `;

        // تغییر زبان
        timerPanel.querySelector('#lang-sel-timer').onchange = (e) => {
            lang = e.target.value;
            render();
        };

        // تنظیم زمان اولیه
        timerPanel.querySelector('#set-time-btn').onclick = () => {
            const min = parseInt(timerPanel.querySelector('#min-input').value) || 0;
            const sec = parseInt(timerPanel.querySelector('#sec-input').value) || 0;
            
            if (min === 0 && sec === 0) return;
            
            totalSeconds = (min * 60) + sec;
            updateDisplay(totalSeconds);
            
            // مخفی کردن بخش تنظیم و نمایش تایمر و دکمه‌ها
            timerPanel.querySelector('#setup-section').style.display = 'none';
            timerPanel.querySelector('#timer-display').style.display = 'block';
            timerPanel.querySelector('#start-t-btn').style.display = 'block';
            timerPanel.querySelector('#reset-t-btn').style.display = 'block';
            timerPanel.querySelector('#desc-input').style.display = 'block';
            timerPanel.querySelector('#save-t-btn').style.display = 'block';
            
            timerPanel.querySelector('#start-t-btn').removeAttribute('disabled');
        };

        // دکمه شروع / توقف
        timerPanel.querySelector('#start-t-btn').onclick = function() {
            if (timer) {
                clearInterval(timer);
                timer = null;
                this.innerText = dict[lang].start;
            } else {
                this.innerText = dict[lang].stop;
                timer = setInterval(() => {
                    if (totalSeconds > 0) {
                        totalSeconds--;
                        updateDisplay(totalSeconds);
                    } else {
                        clearInterval(timer);
                        timer = null;
                        alert(dict[lang].done);
                        this.innerText = dict[lang].start;
                    }
                }, 1000);
            }
        };

        // دکمه ریست
        timerPanel.querySelector('#reset-t-btn').onclick = () => {
            clearInterval(timer);
            timer = null;
            totalSeconds = 0;
            
            // بازگشت به حالت تنظیمات اولیه
            timerPanel.querySelector('#setup-section').style.display = 'block';
            timerPanel.querySelector('#min-input').value = '';
            timerPanel.querySelector('#sec-input').value = '';
            
            timerPanel.querySelector('#timer-display').style.display = 'none';
            timerPanel.querySelector('#start-t-btn').style.display = 'none';
            timerPanel.querySelector('#reset-t-btn').style.display = 'none';
            timerPanel.querySelector('#desc-input').style.display = 'none';
            timerPanel.querySelector('#save-t-btn').style.display = 'none';
        };

        // ذخیره رکورد (زمان + تاریخ + ساعت + توضیحات)
        timerPanel.querySelector('#save-t-btn').onclick = () => {
            const displayTime = timerPanel.querySelector('#timer-display').innerText;
            const desc = timerPanel.querySelector('#desc-input').value || "---";
            const now = new Date().toLocaleString(lang);
            
            const logItem = document.createElement('div');
            logItem.style.marginBottom = "5px";
            logItem.innerHTML = `<b>${dict[lang].logTitle}:</b> ${displayTime} | ${desc} <br><span style="color:#888;">${now}</span> <button style="color:red; cursor:pointer; border:none; background:none;">حذف</button>`;
            
            logItem.querySelector('button').onclick = () => logItem.remove();
            timerPanel.querySelector('#logs-t').appendChild(logItem);
        };
    }

    function updateDisplay(seconds) {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        timerPanel.querySelector('#timer-display').innerText = `${m}:${s}`;
    }

    document.body.appendChild(timerPanel);
    render();
})();