(function() {
    // ۱. دیتابیس ترجمه‌ها
    const translations = {
        fa: { title: "تنظیمات آلارم", save: "ذخیره آلارم", date: "تاریخ", delete: "حذف", alert: "زمان آلارم فرا رسید!" },
        en: { title: "Alarm Settings", save: "Save Alarm", date: "Date", delete: "Delete", alert: "Time is up!" },
        tr: { title: "Alarm Ayarları", save: "Kaydet", date: "Tarih", delete: "Sil", alert: "Alarm zamanı!" },
        ar: { title: "إعدادات المنبه", save: "حفظ", date: "التاريخ", delete: "حذف", alert: "حان وقت المنبه!" },
        zh: { title: "闹钟设置", save: "保存", date: "日期", delete: "删除", alert: "闹钟时间到了！" },
        ko: { title: "알람 설정", save: "저장", date: "날짜", delete: "삭제", alert: "알람 시간입니다!" }
    };

    let currentLang = 'fa';

    // ۲. ایجاد پنل در DOM
    const panel = document.createElement('div');
    panel.style.cssText = "position:fixed; top:50px; right:20px; background:#fff; color:#0056b3; padding:20px; border-radius:12px; z-index:999999; border:2px solid #0056b3; box-shadow:0 4px 15px rgba(0,0,0,0.3); width:320px; font-family:sans-serif;";

    function renderPanel() {
        const t = translations[currentLang];
        panel.innerHTML = `
            <h3 style="margin-top:0">${t.title}</h3>
            <label>${t.date}:</label><input type="date" id="alarm-date" style="width:100%; margin-bottom:5px;">
            <label>Time:</label><input type="time" id="alarm-time" style="width:100%; margin-bottom:5px;">
            <select id="lang-select" style="width:100%; margin-bottom:10px;">
                ${Object.keys(translations).map(l => `<option value="${l}" ${l===currentLang?'selected':''}>${l.toUpperCase()}</option>`).join('')}
            </select>
            <button id="save-alarm" style="width:100%; background:#0056b3; color:white; border:none; padding:8px; cursor:pointer;">${t.save}</button>
            <div id="alarm-list" style="margin-top:15px; border-top:1px solid #ccc; max-height:200px; overflow-y:auto;"></div>
        `;
        
        panel.querySelector('#lang-select').onchange = (e) => { currentLang = e.target.value; renderPanel(); renderList(); };
        panel.querySelector('#save-alarm').onclick = addAlarm;
        renderList();
    }

    // ۳. توابع مدیریت آلارم
    function addAlarm() {
        const date = document.getElementById('alarm-date').value;
        const time = document.getElementById('alarm-time').value;
        if (!date || !time) return alert("لطفا تاریخ و زمان را انتخاب کنید");
        
        const alarms = JSON.parse(localStorage.getItem('orite_alarms') || '[]');
        alarms.push({ id: Date.now(), date, time });
        localStorage.setItem('orite_alarms', JSON.stringify(alarms));
        renderList();
    }

    function deleteAlarm(id) {
        let alarms = JSON.parse(localStorage.getItem('orite_alarms') || '[]');
        alarms = alarms.filter(a => a.id !== id);
        localStorage.setItem('orite_alarms', JSON.stringify(alarms));
        renderList();
    }

    function renderList() {
        const alarms = JSON.parse(localStorage.getItem('orite_alarms') || '[]');
        const container = document.getElementById('alarm-list');
        container.innerHTML = '';
        alarms.forEach(a => {
            const div = document.createElement('div');
            div.style.cssText = "display:flex; justify-content:space-between; margin:5px 0; border-bottom:1px solid #eee; padding-bottom:3px;";
            div.innerHTML = `<span>${a.date} ${a.time}</span>`;
            
            const btn = document.createElement('button');
            btn.innerText = translations[currentLang].delete;
            btn.style.color = "red"; btn.style.border = "none"; btn.style.background = "none"; btn.style.cursor = "pointer";
            btn.onclick = () => deleteAlarm(a.id);
            div.appendChild(btn);
            container.appendChild(div);
        });
    }

    document.body.appendChild(panel);
    renderPanel();

    // ۴. موتور هوشمند بررسی زمان (هر ۳۰ ثانیه)
    setInterval(() => {
        const alarms = JSON.parse(localStorage.getItem('orite_alarms') || '[]');
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const timeStr = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
        
        alarms.forEach(a => {
            if (a.date === dateStr && a.time === timeStr) {
                alert(translations[currentLang].alert);
                deleteAlarm(a.id); // پاک کردن بعد از هشدار
            }
        });
    }, 30000);
})();