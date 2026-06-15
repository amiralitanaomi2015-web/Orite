(function() {
    // ۱. پاکسازی پنل‌های قبلی
    const existing = document.getElementById('settings-panel');
    if (existing) existing.remove();

    // ۲. دیکشنری ۷ زبان
    const ui = {
        fa: { title: "تنظیمات", lang: "زبان:", alarm: "آلارم", save: "ذخیره", reg: "ثبت‌نام (بزودی)", dev: "مدیر: LuoLaf Studio" },
        en: { title: "Settings", lang: "Language:", alarm: "Alarm", save: "Storage", reg: "Register (Soon)", dev: "Manager: LuoLaf Studio" },
        tr: { title: "Ayarlar", lang: "Dil:", alarm: "Alarm", save: "Depolama", reg: "Kayıt (Yakında)", dev: "Yönetici: LuoLaf Studio" },
        ar: { title: "الإعدادات", lang: "اللغة:", alarm: "المنبه", save: "التخزين", reg: "التسجيل (قريباً)", dev: "المدير: LuoLaf Studio" },
        zh: { title: "设置", lang: "语言:", alarm: "闹钟", save: "存储", reg: "注册 (即将推出)", dev: "管理者: LuoLaf Studio" },
        ko: { title: "설정", lang: "언어:", alarm: "알람", save: "저장", reg: "등록 (곧)", dev: "관리자: LuoLaf Studio" },
        ku: { title: "Sazkarî", lang: "Ziman:", alarm: "Alarma", save: "Embarkirin", reg: "Qeydkirin (Zû de)", dev: "Rêveber: LuoLaf Studio" }
    };

    let lang = 'fa';

    // ۳. ساخت پنل
    const panel = document.createElement('div');
    panel.id = 'settings-panel';
    
    // استایلِ ثابت: سمت راست پایین (تغییر top به bottom برای جدا شدن از آلارم که احتمالا بالاست)
    panel.style.cssText = `
        position: fixed !important;
        bottom: 20px !important; 
        right: 20px !important;
        width: 350px !important;
        background: #ffffff !important;
        padding: 20px !important;
        border-radius: 15px !important;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3) !important;
        z-index: 1000 !important; 
        border: 1px solid #ddd !important;
    `;

    function render() {
        const u = ui[lang];
        panel.innerHTML = `
            <h3 style="margin-top:0;">${u.title}</h3>
            <select id="lang-sel" style="width:100%; padding:5px; margin-bottom:15px;">
                ${Object.keys(ui).map(l => `<option value="${l}" ${l===lang?'selected':''}>${l.toUpperCase()}</option>`).join('')}
            </select>
            <div>
                <label><input type="checkbox" checked> ${u.alarm}</label><br>
                <label><input type="checkbox" checked> ${u.save}</label>
            </div>
            <p style="font-size:11px; color:#777; margin-top:15px;">${u.reg}</p>
            <div style="font-size:9px; color:#bbb; text-align:center;">${u.dev}</div>
        `;
        panel.querySelector('#lang-sel').onchange = (e) => { lang = e.target.value; render(); };
    }

    document.body.appendChild(panel);
    render();
})();