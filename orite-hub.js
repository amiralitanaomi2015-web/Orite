(function() {
    // ۱. جلوگیری از تکرار و پاکسازی پنل‌های هاب قبلی
    const existingHub = document.getElementById('orite-smart-hub');
    if (existingHub) existingHub.remove();

    // ۲. دیکشنری جامع ۱۵ زبانه
    const dict = {
        en: { title: "Orite Smart Hub", close: "✖", sections: "Hub Sections", tabGame: "Temp Quiz Game", tabNotes: "Sticky Notes", tabTools: "AI Tools", langSelect: "Select Language" },
        fa: { title: "هاب هوشمند اوریت", close: "✖", sections: "بخش‌های هاب", tabGame: "مینی‌گیم حدس دما", tabNotes: "یادداشت‌های سریع", tabTools: "ابزارهای هوش مصنوعی", tabSelect: "انتخاب زبان" },
        ar: { title: "مركز أوريت الذكي", close: "✖", sections: "أقسام المركز", tabGame: "لعبة تخمين الحرارة", tabNotes: "ملاحظات لاصقة", tabTools: "أدوات الذكاء الاصطناعي", tabSelect: "اختر اللغة" },
        tr: { title: "Orite Akıllı Hub", close: "✖", sections: "Hub Bölümleri", tabGame: "Sıcaklık Tahmin Oyunu", tabNotes: "Yapışkan Notlar", tabTools: "Yapay Zeka Araçları", tabSelect: "Dil Seçin" },
        ku: { title: "Navenda Smart Orite", close: "✖", sections: "Beşên Navendê", tabGame: "Lîstika Texmîna Germahiyê", tabNotes: "Nîşeyên Zeliqok", tabTools: "Amûrên AI-ê", tabSelect: "Ziman Hilbijêre" },
        zh: { title: "Orite 智能中心", close: "✖", sections: "中心模块", tabGame: "温度竞猜游戏", tabNotes: "即时贴", tabTools: "人工智能工具", tabSelect: "选择语言" },
        ko: { title: "Orite 스마트 허브", close: "✖", sections: "허브 섹션", tabGame: "온도 추측 게임", tabNotes: "스티커 메모", tabTools: "AI 도구", tabSelect: "언어 선택" },
        es: { title: "Centro Inteligente Orite", close: "✖", sections: "Secciones", tabGame: "Juego de Adivinar Temperatura", tabNotes: "Notas Adhesivas", tabTools: "Herramientas de IA", tabSelect: "Seleccionar idioma" },
        it: { title: "Orite Smart Hub", close: "✖", sections: "Sezioni Hub", tabGame: "Gioco a Quiz sulla Temperatura", tabNotes: "Note Adesive", tabTools: "Strumenti AI", tabSelect: "Seleziona lingua" },
        fr: { title: "Orite Smart Hub", close: "✖", sections: "Sections du Hub", tabGame: "Jeu de Quiz sur la Température", tabNotes: "Notes Adhesives", tabTools: "Outils IA", tabSelect: "Sélectionner la langue" },
        ru: { title: "Умный хаб Orite", close: "✖", sections: "Разделы хаба", tabGame: "Игра на угадывание температуры", tabNotes: "Стикеры", tabTools: "Инструменты ИИ", tabSelect: "Выбрать язык" },
        he: { title: "Orite Smart Hub", close: "✖", sections: "קטעי הרכזת", tabGame: "משחק ניחוש טמפרטורה", tabNotes: "פתקיות דביקות", tabTools: "כלי בינה מלאכותית", tabSelect: "בחר שפה" },
        ja: { title: "Orite スマートハブ", close: "✖", sections: "ハブセクション", tabGame: "温度当てクイズゲーム", tabNotes: "付箋", tabTools: "AIツール", tabSelect: "言語を選択" },
        tg: { title: "Маркази интеллектуалии Orite", close: "✖", sections: "Қисмҳои марказ", tabGame: "Бозии тахмини ҳарорат", tabNotes: "Қайдҳои часпанда", tabTools: "Абзорҳои AI", tabSelect: "Забонро интихоб кунед" },
        ms: { title: "Hab Pintar Orite", close: "✖", sections: "Bahagian Hab", tabGame: "Permainan Teka Suhu", tabNotes: "Nota Lekit", tabTools: "Alat AI", tabSelect: "Pilih Bahasa" },
        hr: { title: "Orite Smart Hub", close: "✖", sections: "Sekcije Huba", tabGame: "Igra pogađanja temperature", tabNotes: "Ljepljive bilješke", tabTools: "AI alati", tabSelect: "Odaberi jezik" }
    };

    let lang = 'fa';

    // ۳. ایجاد پنل هاب
    const smartHub = document.createElement('div');
    smartHub.id = 'orite-smart-hub';
    smartHub.style.cssText = "background:#ffffff !important; padding:15px !important; border-radius:15px !important; box-shadow:0 4px 15px rgba(0,0,0,0.15) !important; border:1px solid #e0e0e0 !important; font-family:Tahoma, Arial, sans-serif !important; color:#333 !important; width:481px !important; margin-top:20px !important;";

    function renderHub() {
        const d = dict[lang] || dict['fa'];
        smartHub.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; border-bottom:2px solid rgba(148,163,184,0.2); padding-bottom:12px;">
                <h2 style="margin:0; font-size:18px; color:#0f172a; text-shadow:0 1px 0 #fff; display:flex; align-items:center; gap:8px;">
                    <span style="background:#0284c7; color:#fff; width:32px; height:32px; border-radius:10px; display:inline-flex; align-items:center; justify-content:center; font-size:16px; box-shadow:0 4px 10px rgba(2,132,199,0.3);">🤖</span> 
                    ${d.title}
                </h2>
                
                <div style="display:flex; gap:6px;">
                    <select id="orite-hub-lang" style="padding:5px 8px; border-radius:8px; border:1px solid #cbd5e1; background:#fff; font-size:11px; font-weight:bold; cursor:pointer; box-shadow:inset 0 1px 3px rgba(0,0,0,0.05); outline:none;">
                        ${Object.keys(dict).map(l => `<option value="${l}" ${l===lang?'selected':''}>${l.toUpperCase()}</option>`).join('')}
                    </select>
                    <button id="orite-hub-close" style="background:#e2e8f0; border:none; border-radius:8px; width:28px; height:28px; cursor:pointer; font-weight:bold; color:#475569; box-shadow:0 2px 5px rgba(0,0,0,0.1); transition:all 0.2s;">${d.close}</button>
                </div>
            </div>

            <div style="margin-bottom:10px; font-size:12px; font-weight:bold; color:#475569; margin-left:4px;">${d.sections}:</div>
            <div style="display:flex; flex-direction:column; gap:12px;">
                <button class="orite-hub-tab" id="orite-tab-game" style="background:#fff; border:none; border-radius:14px; padding:14px; width:100%; text-align:left; font-size:13px; font-weight:bold; color:#0f172a; cursor:pointer; display:flex; align-items:center; justify-content:space-between; box-shadow: 0 4px 10px rgba(0,0,0,0.03), inset 0 1px 0 #fff; border: 1px solid #e2e8f0; transition:all 0.2s;">
                    <span>🎮 ${d.tabGame}</span>
                    <span style="color:#0284c7; font-size:14px;">➔</span>
                </button>

                <button class="orite-hub-tab" id="orite-tab-notes" style="background:#fff; border:none; border-radius:14px; padding:14px; width:100%; text-align:left; font-size:13px; font-weight:bold; color:#0f172a; cursor:pointer; display:flex; align-items:center; justify-content:space-between; box-shadow: 0 4px 10px rgba(0,0,0,0.03), inset 0 1px 0 #fff; border: 1px solid #e2e8f0; transition:all 0.2s;">
                    <span>📝 ${d.tabNotes}</span>
                    <span style="color:#059669; font-size:14px;">➔</span>
                </button>

                <button class="orite-hub-tab" id="orite-tab-tools" style="background:#fff; border:none; border-radius:14px; padding:14px; width:100%; text-align:left; font-size:13px; font-weight:bold; color:#0f172a; cursor:pointer; display:flex; align-items:center; justify-content:space-between; box-shadow: 0 4px 10px rgba(0,0,0,0.03), inset 0 1px 0 #fff; border: 1px solid #e2e8f0; transition:all 0.2s;">
                    <span>🤖 ${d.tabTools}</span>
                    <span style="color:#7c3aed; font-size:14px;">➔</span>
                </button>
            </div>
        `;

        // تغییر زبان
        const langSelectElem = smartHub.querySelector('#orite-hub-lang');
        if (langSelectElem) {
            langSelectElem.onchange = (e) => {
                lang = e.target.value;
                renderHub();
            };
        }

        // بستن هاب
        const closeBtn = smartHub.querySelector('#orite-hub-close');
        if (closeBtn) {
            closeBtn.onclick = () => {
                smartHub.style.transform = "scale(0.85) translateY(-20px)";
                smartHub.style.opacity = "0";
                setTimeout(() => smartHub.remove(), 300);
            };
        }

        // اتصال کلیک مینی‌گیم
        const gameTab = smartHub.querySelector('#orite-tab-game');
        const gameTabLocal = smartHub.querySelector('#orite-tab-game');
        if (gameTabLocal) {
            gameTabLocal.onclick = () => {
                loadExternalScript('orite-hub-game(mini).js');
            };
        }

        // 📝 اتصال کلیک یادداشت‌ها دقیقاً مشابه مینی‌گیم
        const notesTab = smartHub.querySelector('#orite-tab-notes');
        if (notesTab) {
            notesTab.onclick = () => {
                loadExternalScript('orite-hub(notes).js');
            };
        }

        // 🤖 اتصال کلیک ابزارهای هوش مصنوعی به فایل orite-hub-tools(ai).js
        const toolsTab = smartHub.querySelector('#orite-tab-tools');
        if (toolsTab) {
            toolsTab.onclick = () => {
                loadExternalScript('orite-hub-tools(ai).js');
            };
        }

        HubTabs();
    }

    function HubTabs() {
        const items = smartHub.querySelectorAll('.orite-hub-tab');
        items.forEach(tab => {
            tab.onmousedown = () => tab.style.transform = "translateY(2px) scale(0.98)";
            tab.onmouseup = () => tab.style.transform = "translateY(0px) scale(1)";
            tab.onmouseleave = () => tab.style.transform = "translateY(0px) scale(1)";
        });
    }

    // ۴. تابع امن بارگذاری اسکریپت‌های جانبی (جلوگیری از ایجاد تگ تکراری)
    function loadExternalScript(filename) {
        let scriptTag = document.getElementById('orite-script-' + filename);
        if (scriptTag) {
            // اگر اسکریپت قبلاً وجود داشته باشد، نیازی به لود مجدد و تکرار رویداد onload نیست
            console.log(filename + " is already loaded.");
            if (filename === 'orite-hub(notes).js' && typeof initNotes === 'function') {
                initNotes();
            }
            return;
        }
        
        const scr = document.createElement('script');
        scr.id = 'orite-script-' + filename;
        scr.src = filename;
        scr.type = 'text/javascript';
        
        scr.onload = () => {
            console.log(filename + " loaded successfully.");
            if (filename === 'orite-hub(notes).js' && typeof initNotes === 'function') {
                initNotes();
            } else if (filename === 'orite-hub-tools(ai).js' && typeof initAITools === 'function') {
                initAITools();
            }
        };
        
        scr.onerror = () => alert("Module file (" + filename + ") not found! Please make sure the file exists in your directory.");
        
        document.body.appendChild(scr);
    }

    document.body.appendChild(smartHub);
    renderHub();
})();