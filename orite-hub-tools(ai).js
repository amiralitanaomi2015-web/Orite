(function() {
    // ایجاد تگ استایل برای CSS
    const style = document.createElement('style');
    style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&family=Inter:wght@300;400;500;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#ffffff;--bg2:#f5f5f7;--bg3:#eaeaec;--card:#ffffff;--border:#e0e0e4;--text:#1a1a2e;--text2:#6b6b80;--text3:#9b9baa;--accent:#6c63ff;--accent2:#a78bfa;--accent3:#c4b5fd;--glow:rgba(108,99,255,0.15);--shadow:0 4px 24px rgba(108,99,255,0.1)}
[data-dark="1"]{--bg:#0f0f1a;--bg2:#1a1a2e;--bg3:#252540;--card:#1e1e35;--border:#2d2d50;--text:#e8e8ff;--text2:#9b9bcc;--text3:#6b6b90;--glow:rgba(167,139,250,0.2);--shadow:0 4px 24px rgba(0,0,0,0.4)}
body{font-family:'Inter','Vazirmatn',sans-serif;background:transparent}
#root{min-height:100vh;background:var(--bg);position:relative;overflow:hidden;transition:background .4s}
#cloud-canvas{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}
#panel{position:relative;z-index:1;max-width:1100px;margin:0 auto;padding:16px;animation:panelIn .8s cubic-bezier(.4,0,.2,1) both}
@keyframes panelIn{from{opacity:0;transform:scale(.95) translateY(20px)}to{opacity:1;transform:none}}
.glass{background:rgba(255,255,255,0.88);backdrop-filter:blur(20px);border:1px solid rgba(108,99,255,0.15);border-radius:20px;box-shadow:var(--shadow)}
[data-dark="1"] .glass{background:rgba(15,15,26,0.9)}
.header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--border);flex-wrap:wrap;gap:10px}
.logo{font-size:18px;font-weight:700;background:linear-gradient(135deg,#6c63ff,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.header-right{display:flex;gap:8px;align-items:center}
.btn-icon{width:36px;height:36px;border-radius:10px;border:1px solid var(--border);background:var(--bg2);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;transition:.2s;color:var(--text)}
.btn-icon:hover{background:var(--glow);border-color:var(--accent)}
.lang-btn{padding:6px 12px;border-radius:10px;border:1px solid var(--border);background:var(--bg2);cursor:pointer;font-size:12px;color:var(--text2);transition:.2s}
.lang-btn:hover{border-color:var(--accent);color:var(--accent)}
.info-bar{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;padding:12px 20px;border-bottom:1px solid var(--border)}
.info-card{background:var(--bg2);border-radius:12px;padding:10px 14px;border:1px solid var(--border);transition:.2s}
.info-card:hover{border-color:var(--accent3);transform:translateY(-1px)}
.info-label{font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.05em;margin-bottom:3px}
.info-val{font-size:12px;font-weight:600;color:var(--text);font-family:'Inter',monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.main{display:grid;grid-template-columns:1fr 340px;gap:12px;padding:12px 20px}
.tools-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.tool-card{background:var(--bg2);border-radius:16px;border:1px solid var(--border);padding:16px;cursor:pointer;transition:.25s;position:relative;overflow:hidden}
.tool-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--accent2));opacity:0;transition:.25s}
.tool-card:hover{border-color:var(--accent3);transform:translateY(-3px);box-shadow:0 8px 30px var(--glow)}
.tool-card:hover::before,.tool-card.active::before{opacity:1}
.tool-card.active{border-color:var(--accent);background:linear-gradient(135deg,rgba(108,99,255,.08),rgba(167,139,250,.05))}
.tool-icon{font-size:26px;margin-bottom:8px}
.tool-name{font-size:13px;font-weight:600;color:var(--text)}
.tool-desc{font-size:11px;color:var(--text3);margin-top:3px}
.ai-panel{background:var(--bg2);border-radius:16px;border:1px solid var(--border);display:flex;flex-direction:column;height:500px}
.ai-header{padding:12px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px}
.ai-dot{width:8px;height:8px;border-radius:50%;background:#22c55e;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(1.3)}}
.ai-title{font-size:13px;font-weight:600;color:var(--text)}
.ai-status{margin-right:auto;font-size:10px;color:#22c55e;font-weight:500}
.ai-messages{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;scrollbar-width:thin;scrollbar-color:var(--border) transparent}
.msg{max-width:88%;padding:10px 14px;border-radius:14px;font-size:12px;line-height:1.7;animation:msgIn .3s ease}
@keyframes msgIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.msg.ai{background:linear-gradient(135deg,#6c63ff,#a78bfa);color:#fff;align-self:flex-start;border-bottom-left-radius:4px;white-space:pre-wrap;word-break:break-word}
.msg.user{background:var(--bg3);color:var(--text);align-self:flex-end;border-bottom-right-radius:4px}
.msg.err{background:rgba(239,68,68,0.1);color:#ef4444;border:1px solid rgba(239,68,68,0.2);align-self:flex-start}
.ai-input-area{padding:10px;border-top:1px solid var(--border);display:flex;gap:6px}
.ai-input{flex:1;background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:8px 12px;font-size:12px;color:var(--text);outline:none;transition:.2s;font-family:'Inter','Vazirmatn',sans-serif}
.ai-input:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--glow)}
.ai-send{width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#6c63ff,#a78bfa);border:none;cursor:pointer;color:#fff;font-size:15px;display:flex;align-items:center;justify-content:center;transition:.2s;flex-shrink:0}
.ai-send:hover{transform:scale(1.05)}
.ai-send:disabled{opacity:.5;cursor:not-allowed;transform:none}
.tool-workspace{background:var(--bg2);border-radius:16px;border:1px solid var(--border);padding:16px;min-height:180px;margin-top:10px}
.ws-title{font-size:12px;font-weight:600;color:var(--text2);margin-bottom:10px;display:flex;align-items:center;gap:6px}
.ws-textarea{width:100%;background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:10px;font-size:12px;color:var(--text);font-family:'Inter','Vazirmatn',sans-serif;resize:vertical;min-height:80px;outline:none}
.ws-textarea:focus{border-color:var(--accent)}
.ws-btn{padding:7px 16px;border-radius:9px;background:linear-gradient(135deg,#6c63ff,#a78bfa);border:none;color:#fff;font-size:12px;font-weight:500;cursor:pointer;transition:.2s;margin-top:8px}
.ws-btn:hover{opacity:.85;transform:translateY(-1px)}
.ws-btn:disabled{opacity:.5;cursor:not-allowed;transform:none}
.ws-result{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:10px;font-size:12px;color:var(--text);margin-top:8px;min-height:50px;line-height:1.7;white-space:pre-wrap;word-break:break-word;display:none}
.weather-badge{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:20px;background:var(--bg3);border:1px solid var(--border);font-size:11px;color:var(--text2)}
.footer{text-align:center;padding:10px;font-size:11px;color:var(--text3);border-top:1px solid var(--border)}
.lang-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:999;align-items:center;justify-content:center}
.lang-modal.show{display:flex}
.lang-box{background:var(--card);border-radius:20px;padding:20px;width:340px;max-height:80vh;overflow-y:auto;border:1px solid var(--border)}
.lang-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}
.lang-item{padding:8px 12px;border-radius:10px;border:1px solid var(--border);cursor:pointer;font-size:12px;color:var(--text);text-align:center;transition:.2s}
.lang-item:hover,.lang-item.sel{background:var(--glow);border-color:var(--accent);color:var(--accent)}
.typing{display:flex;gap:4px;padding:10px 14px;background:linear-gradient(135deg,#6c63ff,#a78bfa);border-radius:14px;border-bottom-left-radius:4px;width:fit-content;align-self:flex-start}
.typing span{width:6px;height:6px;border-radius:50%;background:#fff;animation:bounce 1.2s infinite}
.typing span:nth-child(2){animation-delay:.2s}.typing span:nth-child(3){animation-delay:.4s}
@keyframes bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}
@media(max-width:700px){.main{grid-template-columns:1fr}.tools-grid{grid-template-columns:1fr 1fr}}
`;
    document.head.appendChild(style);

    // ساخت بدنه HTML
    const canvas = document.createElement('canvas');
    canvas.id = 'cloud-canvas';

    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';

    const panel = document.createElement('div');
    panel.id = 'panel';

    const glass = document.createElement('div');
    glass.className = 'glass';

    const header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = `
  <span class="logo">✦ LuoLaf Studio</span>
  <div class="header-right">
    <div class="weather-badge">⛅ <span id="weather-txt">...</span></div>
    <button class="btn-icon" onclick="toggleDark()" id="dark-btn">🌙</button>
    <button class="lang-btn" onclick="document.querySelector('.lang-modal').classList.add('show')">🌐 <span id="lang-label">فارسی</span></button>
  </div>
`;

    const infoBar = document.createElement('div');
    infoBar.className = 'info-bar';
    infoBar.innerHTML = `
  <div class="info-card"><div class="info-label" data-i18n="time">زمان</div><div class="info-val" id="clock">--:--:--</div></div>
  <div class="info-card"><div class="info-label" data-i18n="date">تاریخ</div><div class="info-val" id="date-val">---</div></div>
  <div class="info-card"><div class="info-label" data-i18n="ip">آدرس IP</div><div class="info-val" id="ip-val">بارگذاری...</div></div>
  <div class="info-card"><div class="info-label" data-i18n="speed">سرعت</div><div class="info-val" id="speed-val">اندازه‌گیری...</div></div>
  <div class="info-card"><div class="info-label" data-i18n="user_id">شناسه کاربر</div><div class="info-val" id="uid-val">---</div></div>
  <div class="info-card"><div class="info-label" data-i18n="os">سیستم</div><div class="info-val" id="os-val">---</div></div>
  <div class="info-card"><div class="info-label" data-i18n="browser">مرورگر</div><div class="info-val" id="browser-val">---</div></div>
`;

    const main = document.createElement('div');
    main.className = 'main';

    const leftCol = document.createElement('div');
    leftCol.innerHTML = `
    <div class="tools-grid" id="tools-grid">
      <div class="tool-card" onclick="setTool('translate')" id="t-translate"><div class="tool-icon">🌐</div><div class="tool-name" data-i18n="tool_translate">مترجم هوشمند</div><div class="tool-desc" data-i18n="tool_translate_d">ترجمه در ۲۰+ زبان</div></div>
      <div class="tool-card" onclick="setTool('code')" id="t-code"><div class="tool-icon">💻</div><div class="tool-name" data-i18n="tool_code">کدنویس قوی</div><div class="tool-desc" data-i18n="tool_code_d">تولید و اصلاح کد</div></div>
      <div class="tool-card" onclick="setTool('legal')" id="t-legal"><div class="tool-icon">⚖️</div><div class="tool-name" data-i18n="tool_legal">مشاور حقوقی</div><div class="tool-desc" data-i18n="tool_legal_d">راهنمایی قانونی</div></div>
      <div class="tool-card" onclick="setTool('chat')" id="t-chat"><div class="tool-icon">🤖</div><div class="tool-name" data-i18n="tool_chat">دستیار هوشمند</div><div class="tool-desc" data-i18n="tool_chat_d">چت‌بات کمکی</div></div>
      <div class="tool-card" onclick="setTool('geo')" id="t-geo" style="grid-column:span 2"><div class="tool-icon">🌍</div><div class="tool-name" data-i18n="tool_geo">جغرافیادان</div><div class="tool-desc" data-i18n="tool_geo_d">اطلاعات جغرافیایی</div></div>
    </div>
    <div class="tool-workspace" id="workspace">
      <div class="ws-title">⚡ <span id="ws-title-txt">یک ابزار انتخاب کنید</span></div>
      <div id="ws-inner"><div style="color:var(--text3);font-size:12px">برای شروع روی یک ابزار کلیک کنید</div></div>
    </div>
`;

    const aiPanel = document.createElement('div');
    aiPanel.className = 'ai-panel';
    aiPanel.innerHTML = `
    <div class="ai-header">
      <div class="ai-dot"></div>
      <div class="ai-title" data-i18n="ai_assistant">دستیار هوش مصنوعی</div>
      <div class="ai-status" data-i18n="ai_online">● آنلاین</div>
    </div>
    <div class="ai-messages" id="ai-messages">
      <div class="msg ai" id="ai-welcome">سلام! من دستیار هوش مصنوعی LuoLaf Studio هستم. چطور می‌توانم کمک کنم؟ 🌟</div>
    </div>
    <div class="ai-input-area">
      <input class="ai-input" id="ai-input" placeholder="پیام بنویسید..." onkeydown="if(event.key==='Enter'&&!event.shiftKey)sendAI()"/>
      <button class="ai-send" onclick="sendAI()" id="ai-send-btn">➤</button>
    </div>
`;

    main.appendChild(leftCol);
    main.appendChild(aiPanel);

    const footer = document.createElement('div');
    footer.className = 'footer';
    footer.innerHTML = 'مدیر پروژه: <strong>LuoLaf.Studio</strong>';

    glass.appendChild(header);
    glass.appendChild(infoBar);
    glass.appendChild(main);
    glass.appendChild(footer);

    panel.appendChild(glass);
    rootDiv.appendChild(panel);

    document.body.appendChild(canvas);
    document.body.appendChild(rootDiv);

    const langModal = document.createElement('div');
    langModal.className = 'lang-modal';
    langModal.onclick = function(event) {
        if (event.target === this) this.classList.remove('show');
    };
    langModal.innerHTML = `
<div class="lang-box">
<div style="font-size:15px;font-weight:600;color:var(--text)">انتخاب زبان</div>
<div class="lang-grid" id="lang-grid"></div>
</div>
`;
    document.body.appendChild(langModal);

    // افزودن منطق جاوا اسکریپت
    const LANGS = {
        fa: { name: 'فارسی', dir: 'rtl', t: { time: 'زمان', date: 'تاریخ', ip: 'آدرس IP', speed: 'سرعت', user_id: 'شناسه کاربر', os: 'سیستم', browser: 'مرورگر', tool_translate: 'مترجم هوشمند', tool_translate_d: 'ترجمه در ۲۰+ زبان', tool_code: 'کدنویس قوی', tool_code_d: 'تولید و اصلاح کد', tool_legal: 'مشاور حقوقی', tool_legal_d: 'راهنمایی قانونی', tool_chat: 'دستیار هوشمند', tool_chat_d: 'چت‌بات کمکی', tool_geo: 'جغرافیادان', tool_geo_d: 'اطلاعات جغرافیایی', ai_assistant: 'دستیار هوش مصنوعی', ai_online: '● آنلاین', ai_welcome: 'سلام! من دستیار هوش مصنوعی LuoLaf Studio هستم 🌟', ai_ph: 'پیام بنویسید...' } },
        en: { name: 'English', dir: 'ltr', t: { time: 'Time', date: 'Date', ip: 'IP Address', speed: 'Speed', user_id: 'User ID', os: 'System', browser: 'Browser', tool_translate: 'Translator', tool_translate_d: 'Translate 20+ languages', tool_code: 'Code Expert', tool_code_d: 'Generate & fix code', tool_legal: 'Legal Advisor', tool_legal_d: 'Legal guidance', tool_chat: 'AI Assistant', tool_chat_d: 'Smart chatbot', tool_geo: 'Geographer', tool_geo_d: 'Geographic info', ai_assistant: 'AI Assistant', ai_online: '● Online', ai_welcome: 'Hello! I am the LuoLaf Studio AI assistant 🌟', ai_ph: 'Type a message...' } },
        tr: { name: 'Türkçe', dir: 'ltr', t: { time: 'Saat', date: 'Tarih', ip: 'IP Adresi', speed: 'Hız', user_id: 'Kullanıcı ID', os: 'Sistem', browser: 'Tarayıcı', tool_translate: 'Çevirmen', tool_translate_d: '20+ dil desteği', tool_code: 'Kod Uzmanı', tool_code_d: 'Kod oluştur ve düzelt', tool_legal: 'Hukuk Danışmanı', tool_legal_d: 'Hukuki rehberlik', tool_chat: 'AI Asistan', tool_chat_d: 'Akıllı sohbet botu', tool_geo: 'Coğrafyacı', tool_geo_d: 'Coğrafi bilgi', ai_assistant: 'AI Asistanı', ai_online: '● Çevrimiçi', ai_welcome: 'Merhaba! LuoLaf Studio AI asistanıyım 🌟', ai_ph: 'Mesaj yazın...' } },
        ar: { name: 'العربية', dir: 'rtl', t: { time: 'الوقت', date: 'التاريخ', ip: 'IP', speed: 'السرعة', user_id: 'معرف المستخدم', os: 'النظام', browser: 'المتصفح', tool_translate:'المترجم', tool_translate_d: 'ترجمة بأكثر من 20 لغة', tool_code: 'خبير البرمجة', tool_code_d: 'توليد وإصلاح الكود', tool_legal: 'المستشار القانوني', tool_legal_d: 'الإرشاد القانوني', tool_chat: 'المساعد الذكي', tool_chat_d: 'روبوت دردشة ذكي', tool_geo: 'الجغرافي', tool_geo_d: 'معلومات جغرافية', ai_assistant: 'مساعد AI', ai_online: '● متصل', ai_welcome: 'مرحباً! أنا مساعد LuoLaf Studio الذكي 🌟', ai_ph: 'اكتب رسالة...' } },
        ku: { name: 'کوردی', dir: 'rtl', t: { time: 'کات', date: 'بەروار', ip: 'IP', speed: 'خێرایی', user_id: 'ناسنامە',os: 'سیستەم', browser: 'گەڕۆک', tool_translate: 'وەرگێڕ', tool_translate_d: 'وەرگێڕان بە +20 زمان', tool_code: 'شارەزای کۆد', tool_code_d: 'دروستکردنی کۆد', tool_legal: 'ئەنجوومەنی یاسایی', tool_legal_d: 'ڕێنمایی یاسایی', tool_chat: 'یارمەتیدەری زیرەک', tool_chat_d: 'چاتبۆتی زیرەک', tool_geo: 'جوگرافیناس', tool_geo_d: 'زانیاری جوگرافی', ai_assistant: 'یارمەتیدەری AI', ai_online: '● ئۆنلاین', ai_welcome: 'سڵاو! من یارمەتیدەری AI ی LuoLaf Studio م 🌟', ai_ph: 'نامە بنووسە...' } },
        zh: { name: '中文', dir: 'ltr', t: { time: '时间', date: '日期', ip: 'IP地址', speed: '速度', user_id: '用户ID', os: '系统', browser: '浏览器', tool_translate: '翻译器', tool_translate_d: '支持20+种语言', tool_code: '代码专家', tool_code_d: '生成和修复代码', tool_legal: '法律顾问', tool_legal_d: '法律指导', tool_chat: 'AI助手', tool_chat_d: '智能聊天机器人', tool_geo: '地理学家', tool_geo_d: '地理信息查询', ai_assistant: 'AI助手', ai_online: '● 在线', ai_welcome: '您好！我是LuoLaf Studio的AI助手 🌟', ai_ph: '输入消息...' } },
        ko: { name: '한국어', dir: 'ltr', t: { time: '시간', date: '날짜', ip: 'IP', speed: '속도', user_id: '사용자 ID', os: '시스템', browser: '브라우저', tool_translate: '번역기', tool_translate_d: '20개+ 언어 번역', tool_code: '코딩 전문가', tool_code_d: '코드 생성 및 수정', tool_legal: '법률 고문', tool_legal_d: '법적 안내', tool_chat: 'AI 어시스턴트', tool_chat_d: '스마트 챗봇', tool_geo: '지리학자', tool_geo_d: '지리 정보', ai_assistant: 'AI 어시스턴트', ai_online: '● 온라인', ai_welcome: '안녕하세요! LuoLaf Studio AI 어시스턴트입니다 🌟', ai_ph: '메시지 입력...' } },
        fr: { name: 'Français', dir: 'ltr', t: { time: 'Heure', date: 'Date', ip: 'IP', speed: 'Vitesse', user_id: 'ID Utilisateur', os: 'Système', browser: 'Navigateur', tool_translate: 'Traducteur', tool_translate_d: 'Traduit en 20+ langues', tool_code: 'Expert Code', tool_code_d: 'Générer et corriger du code', tool_legal: 'Conseiller Juridique', tool_legal_d: 'Guidance juridique', tool_chat: 'Assistant IA', tool_chat_d: 'Chatbot intelligent', tool_geo: 'Géographe', tool_geo_d: 'Informations géographiques', ai_assistant: 'Assistant IA', ai_online: '● En ligne', ai_welcome: "Bonjour! Je suis l'assistant IA de LuoLaf Studio 🌟", ai_ph: 'Écrivez un message...' } },
        es: { name: 'Español', dir: 'ltr', t: { time: 'Hora', date: 'Fecha', ip: 'IP', speed: 'Velocidad', user_id: 'ID Usuario', os: 'Sistema', browser: 'Navegador', tool_translate: 'Traductor', tool_translate_d: 'Traduce en 20+ idiomas', tool_code: 'Experto en Código', tool_code_d: 'Generar y corregir código', tool_legal: 'Asesor Legal', tool_legal_d: 'Orientación legal', tool_chat: 'Asistente IA', tool_chat_d: 'Chatbot inteligente', tool_geo: 'Geógrafo', tool_geo_d: 'Información geográfica', ai_assistant: 'Asistente IA', ai_online: '● En línea', ai_welcome: '¡Hola! Soy el asistente IA de LuoLaf Studio 🌟', ai_ph: 'Escribe un mensaje...' } },
        de: { name: 'Deutsch', dir: 'ltr', t: { time: 'Zeit', date: 'Datum', ip: 'IP', speed: 'Geschwindigkeit', user_id: 'Benutzer-ID', os: 'System', browser: 'Browser', tool_translate: 'Übersetzer', tool_translate_d: 'In 20+ Sprachen übersetzen', tool_code: 'Code-Experte', tool_code_d: 'Code generieren', tool_legal: 'Rechtsberater', tool_legal_d: 'Rechtliche Beratung', tool_chat: 'KI-Assistent', tool_chat_d: 'Intelligenter Chatbot', tool_geo: 'Geograph', tool_geo_d: 'Geografische Informationen', ai_assistant: 'KI-Assistent', ai_online: '● Online', ai_welcome: 'Hallo! Ich bin der KI-Assistent von LuoLaf Studio 🌟', ai_ph: 'Nachricht schreiben...' } },
        it: { name: 'Italiano', dir: 'ltr', t: { time: 'Ora', date: 'Data', ip: 'IP', speed: 'Velocità', user_id: 'ID Utente', os: 'Sistema', browser: 'Browser', tool_translate: 'Traduttore', tool_translate_d: 'Traduci in 20+ lingue', tool_code: 'Esperto di Codice', tool_code_d: 'Genera e correggi codice', tool_legal: 'Consulente Legale', tool_legal_d: 'Orientamento legale', tool_chat: 'Assistente IA', tool_chat_d: 'Chatbot intelligente', tool_geo: 'Geografo', tool_geo_d: 'Informazioni geografiche', ai_assistant: 'Assistente IA', ai_online: '● Online', ai_welcome: "Ciao! Sono l'assistente IA di LuoLaf Studio 🌟", ai_ph: 'Scrivi un messaggio...' } },
        he: { name: 'עברית', dir: 'rtl', t: { time: 'שעה', date: 'תאריך', ip: 'IP', speed: 'מהירות', user_id: 'מזהה', os: 'מערכת', browser: 'דפדפן', tool_translate: 'מתרגם', tool_translate_d: 'תרגם ל-20+ שפות', tool_code: 'מומחה קוד', tool_code_d: 'יצור ותיקון קוד', tool_legal: 'יועץ משפטי', tool_legal_d: 'הדרכה משפטית', tool_chat: 'עוזר AI', tool_chat_d: 'צ׳אטבוט חכם', tool_geo: 'גיאוגרף', tool_geo_d: 'מידע גיאוגרפי', ai_assistant: 'עוזר AI', ai_online: '● מחובר', ai_welcome: 'שלום! אני עוזר ה-AI של LuoLaf Studio 🌟', ai_ph: 'כתוב הודעה...' } },
        ru: { name: 'Русский', dir: 'ltr', t: { time: 'Время', date: 'Дата', ip: 'IP', speed: 'Скорость', user_id: 'ID', os: 'Система', browser: 'Браузер', tool_translate: 'Переводчик', tool_translate_d: 'Перевод на 20+ языков', tool_code: 'Эксперт по коду', tool_code_d: 'Генерация кода', tool_legal: 'Юрист', tool_legal_d: 'Юридическая консультация', tool_chat: 'ИИ Помощник', tool_chat_d: 'Умный чат-бот', tool_geo: 'Географ', tool_geo_d: 'Географическая информация', ai_assistant: 'ИИ Помощник', ai_online: '● Онлайн', ai_welcome: 'Привет! Я ИИ-помощник LuoLaf Studio 🌟', ai_ph: 'Введите сообщение...' } },
        ja: { name: '日本語', dir: 'ltr', t: { time: '時刻', date: '日付', ip: 'IP', speed: '速度', user_id: 'ユーザーID', os: 'システム', browser: 'ブラウザ', tool_translate: '翻訳機', tool_translate_d: '20以上の言語に翻訳', tool_code: 'コード専門家', tool_code_d: 'コードの生成・修正', tool_legal: '法律アドバイザー', tool_legal_d: '法的ガイダンス', tool_chat: 'AIアシスタント', tool_chat_d: 'スマートチャットボット', tool_geo: '地理学者', tool_geo_d: '地理情報', ai_assistant: 'AIアシスタント', ai_online: '● オンライン', ai_welcome: 'こんにちは！LuoLaf StudioのAIアシスタントです 🌟', ai_ph: 'メッセージを入力...' } },
        tg: { name: 'Тоҷикӣ', dir: 'ltr', t: { time: 'Вақт', date: 'Сана', ip: 'IP', speed: 'Суръат', user_id: 'ID', os: 'Система', browser: 'Браузер', tool_translate: 'Тарҷумон', tool_translate_d: 'Тарҷума ба 20+ забон', tool_code: 'Коршиноси код', tool_code_d: 'Эҷод ва ислоҳи код', tool_legal: 'Маслиҳатчии ҳуқуқӣ', tool_legal_d: 'Роҳнамоии ҳуқуқӣ', tool_chat: 'Дастёри AI', tool_chat_d: 'Чатботи зирак', tool_geo: 'Ҷуғрофиядон', tool_geo_d: 'Маълумоти ҷуғрофӣ', ai_assistant: 'Дастёри AI', ai_online: '● Онлайн', ai_welcome: 'Салом! Ман дастёри AI-и LuoLaf Studio ҳастам 🌟', ai_ph: 'Паёмро нависед...' } },
        hy: { name: 'Հայերեն', dir: 'ltr', t: { time: 'Ժամ', date: 'Ամսաթիվ', ip: 'IP', speed: 'Արագություն', user_id: 'ID', os: 'Համակարգ', browser: 'Դիտարկիչ', tool_translate: 'Թարգմանիչ', tool_translate_d: 'Թարգմանիր 20+ լեզվով', tool_code: 'Կոդ փորձագետ', tool_code_d: 'Կոդ ստեղծիր', tool_legal: 'Իրավաբան', tool_legal_d: 'Իրավական ուղղորդում', tool_chat: 'AI Օգնական', tool_chat_d: 'Խելացի chatbot', tool_geo: 'Աշխարհագետ', tool_geo_d: 'Աշխարհագրական տվյալ', ai_assistant: 'AI Օգնական', ai_online: '● Առցանց', ai_welcome: 'Բարև! Ես LuoLaf Studio-ի AI Օգնականն եմ 🌟', ai_ph: 'Գրիր հաղորդագրություն...' } },
        hr: { name: 'Hrvatski', dir: 'ltr', t: { time: 'Vrijeme', date: 'Datum', ip: 'IP', speed: 'Brzina', user_id: 'ID', os: 'Sustav', browser: 'Preglednik', tool_translate: 'Prevoditelj', tool_translate_d: 'Prevedi na 20+ jezika', tool_code: 'Stručnjak za kod', tool_code_d: 'Generirati i popraviti kod', tool_legal: 'Pravni savjetnik', tool_legal_d: 'Pravno vodstvo', tool_chat: 'AI asistent', tool_chat_d: 'Pametni chatbot', tool_geo: 'Geograf', tool_geo_d: 'Geografske informacije', ai_assistant: 'AI asistent', ai_online: '● Online', ai_welcome: 'Pozdrav! Ja sam AI asistent LuoLaf Studija 🌟', ai_ph: 'Upišite poruku...' } },
        ms: { name: 'Melayu', dir: 'ltr', t: { time: 'Masa', date: 'Tarikh', ip: 'IP', speed: 'Kelajuan', user_id: 'ID', os: 'Sistem', browser: 'Pelayar', tool_translate: 'Penterjemah', tool_translate_d: 'Terjemah dalam 20+ bahasa', tool_code: 'Pakar Kod', tool_code_d: 'Jana dan baiki kod', tool_legal: 'Penasihat Undang-undang', tool_legal_d: 'Panduan undang-undang', tool_chat: 'Pembantu AI', tool_chat_d: 'Chatbot pintar', tool_geo: 'Ahli Geografi', tool_geo_d: 'Maklumat geografi', ai_assistant: 'Pembantu AI', ai_online: '● Dalam talian', ai_welcome: 'Helo! Saya pembantu AI LuoLaf Studio 🌟', ai_ph: 'Taip mesej...' } },
        hi: { name: 'हिन्दी', dir: 'ltr', t: { time: 'समय', date: 'तारीख', ip: 'IP', speed: 'गति', user_id: 'ID', os: 'सिस्टम', browser: 'ब्राउज़र', tool_translate: 'अनुवादक', tool_translate_d: '20+ भाषाओं में अनुवाद', tool_code: 'कोड विशेषज्ञ', tool_code_d: 'कोड बनाएं और ठीक करें', tool_legal: 'कानूनी सलाहकार', tool_legal_d: 'कानूनी मार्गदर्शन', tool_chat: 'AI सहायक', tool_chat_d: 'स्मार्ट चैटबॉट', tool_geo: 'भूगोलविद', tool_geo_d: 'भौगोलिक जानकारी', ai_assistant: 'AI सहायक', ai_online: '● ऑनलाइन', ai_welcome: 'नमस्ते! मैं LuoLaf Studio का AI सहायक हूं 🌟', ai_ph: 'संदेश लिखें...' } }
    };

    let lang = 'fa', dark = 0, curTool = 'chat';
    const uid = 'USR-' + Math.random().toString(36).substr(2, 8).toUpperCase();
    document.getElementById('uid-val').textContent = uid;

    window.detectOS = function detectOS() {
        const u = navigator.userAgent;
        if (/Windows/.test(u)) return 'Windows';
        if (/Mac/.test(u)) return 'macOS';
        if (/Android/.test(u)) return 'Android';
        if (/iPhone|iPad/.test(u)) return 'iOS';
        if (/Linux/.test(u)) return 'Linux';
        return 'Unknown';
    }

    window.detectBrowser = function detectBrowser() {
        const u = navigator.userAgent;
        if (/Edg/.test(u)) return 'Edge';
        if (/Chrome/.test(u)) return 'Chrome';
        if (/Firefox/.test(u)) return 'Firefox';
        if (/Safari/.test(u)) return 'Safari';
        return 'Unknown';
    }

    document.getElementById('os-val').textContent = detectOS();
    document.getElementById('browser-val').textContent = detectBrowser();

    window.updateClock = function updateClock() {
        const n = new Date();
        const locales = { fa: 'fa-IR', ar: 'ar-SA', ku: 'ar', zh: 'zh-CN', ko: 'ko-KR', ja: 'ja-JP', ru: 'ru-RU', he: 'he-IL', hi: 'hi-IN' };
        const lc = locales[lang] || 'en-US';
        document.getElementById('clock').textContent = n.toLocaleTimeString(lc);
        document.getElementById('date-val').textContent = n.toLocaleDateString(lc, { year: 'numeric', month: 'short', day: 'numeric' });
    }
    setInterval(updateClock, 1000); updateClock();

    fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => { document.getElementById('ip-val').textContent = d.ip }).catch(() => { document.getElementById('ip-val').textContent = 'N/A' });

    (async () => {
        const el = document.getElementById('speed-val');
        try {
            const t0 = performance.now();
            await fetch('https://www.google.com/favicon.ico?r=' + Date.now(), { cache: 'no-store' });
            const ms = performance.now() - t0;
            el.textContent = ms < 200 ? 'عالی ✓' : ms < 500 ? 'خوب' : ms < 1000 ? 'متوسط' : 'ضعیف';
        } catch { el.textContent = 'N/A' }
    })();

    const hour = new Date().getHours();
    const weathers = ['normal', 'rain', 'thunder', 'hail', 'electric'];
    const w = weathers[Math.floor(Math.random() * weathers.length)];
    const wEmoji = { normal: hour >= 6 && hour < 20 ? '☀️ روشن' : '🌙 شب', rain: '🌧️ بارانی', thunder: '⛈️ رعد و برق', hail: '🌨️ تگرگ', electric: '⚡ طوفان' };
    document.getElementById('weather-txt').textContent = wEmoji[w];

    window.toggleDark = function toggleDark() {
        dark = dark ? 0 : 1;
        document.getElementById('root').setAttribute('data-dark', dark);
        document.getElementById('dark-btn').textContent = dark ? '☀️' : '🌙';
    }

    window.applyLang = function applyLang(l) {
        lang = l; const L = LANGS[l];
        document.getElementById('root').style.direction = L.dir;
        document.getElementById('root').style.fontFamily = (l === 'fa' || l === 'ar' || l === 'ku') ? 'Vazirmatn,Inter,sans-serif' : 'Inter,Vazirmatn,sans-serif';
        document.getElementById('lang-label').textContent = L.name;
        document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.getAttribute('data-i18n'); if (L.t[k]) el.textContent = L.t[k] });
        document.getElementById('ai-input').placeholder = L.t.ai_ph || '...';
        const wel = document.getElementById('ai-welcome'); if (wel) wel.textContent = L.t.ai_welcome;
        document.querySelectorAll('.lang-item').forEach(it => it.classList.remove('sel'));
        const s = document.querySelector(`.lang-item[data-l="${l}"]`); if (s) s.classList.add('sel');
        document.querySelector('.lang-modal').classList.remove('show');
        updateClock();
    }

    const lg = document.getElementById('lang-grid');
    Object.entries(LANGS).forEach(([k, v]) => {
        const d = document.createElement('div');
        d.className = 'lang-item' + (k === lang ? ' sel' : '');
        d.setAttribute('data-l', k); d.textContent = v.name;
        d.onclick = () => applyLang(k); lg.appendChild(d);
    });

    const TOOL_PROMPTS = {
        translate: 'You are a professional translator. The user will give you text. Translate it to at least 5 languages (English, Arabic, French, Spanish, German) and show clearly labeled results. Be concise.',
        code: 'You are an expert programmer. Help with code questions clearly. Provide working code with brief explanations.',
        legal: 'You are a legal advisor. Answer legal questions clearly, note that you provide general information not legal advice, and suggest consulting a lawyer for specific cases.',
        chat: 'You are a friendly and helpful AI assistant. Answer questions clearly and helpfully.',
        geo: 'You are a geography expert. Answer geographical questions with accurate information about locations, countries, capitals, landmarks, etc.'
    };

    window.setTool = function setTool(t) {
        curTool = t;
        document.querySelectorAll('.tool-card').forEach(c => c.classList.remove('active'));
        document.getElementById('t-' + t).classList.add('active');
        const L = LANGS[lang].t;
        const nm = { translate: L.tool_translate, code: L.tool_code, legal: L.tool_legal, chat: L.tool_chat, geo: L.tool_geo };
        document.getElementById('ws-title-txt').textContent = nm[t] || t;
        const phs = { translate: 'متنی که می‌خواهید ترجمه شود...', code: 'کد یا مشکل خود را بنویسید...', legal: 'سوال حقوقی خود را بپرسید...', chat: 'سوال خود را بپرسید...', geo: 'مکان یا سوال جغرافیایی...' };
        document.getElementById('ws-inner').innerHTML = `<textarea class="ws-textarea" id="ws-ta" placeholder="${phs[t] || '...'}"></textarea><button class="ws-btn" id="ws-run" onclick="runTool()">▶ اجرا</button><div class="ws-result" id="ws-res"></div>`;
    }

    window.runTool = async function runTool() {
        const ta = document.getElementById('ws-ta');
        const res = document.getElementById('ws-res');
        const btn = document.getElementById('ws-run');
        if (!ta || !ta.value.trim()) return;
        res.style.display = 'block'; res.textContent = '⏳ در حال پردازش...'; btn.disabled = true;
        try {
            const r = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: 1000, system: TOOL_PROMPTS[curTool] || TOOL_PROMPTS.chat, messages: [{ role: 'user', content: ta.value }] }) });
            if (!r.ok) throw new Error('HTTP ' + r.status);
            const d = await r.json();
            res.textContent = d.content && d.content[0] ? d.content[0].text : 'خطا در دریافت پاسخ';
        } catch (e) { res.textContent = '⚠️ خطا: ' + e.message }
        btn.disabled = false;
    }

    const AI_HIST = [];
    window.sendAI = async function sendAI() {
        const inp = document.getElementById('ai-input');
        const msgs = document.getElementById('ai-messages');
        const btn = document.getElementById('ai-send-btn');
        const txt = inp.value.trim();
        if (!txt || btn.disabled) return;
        const um = document.createElement('div'); um.className = 'msg user'; um.textContent = txt; msgs.appendChild(um);
        inp.value = ''; btn.disabled = true;
        const ty = document.createElement('div'); ty.className = 'typing'; ty.innerHTML = '<span></span><span></span><span></span>'; msgs.appendChild(ty);
        msgs.scrollTop = msgs.scrollHeight;
        AI_HIST.push({ role: 'user', content: txt });
        try {
            const r = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: 1000, system: 'You are the LuoLaf Studio AI assistant — helpful, friendly, and concise. Always reply in the same language the user writes in.', messages: AI_HIST.slice(-10) }) });
            if (!r.ok) {
                const err = await r.json().catch(() => ({}));
                throw new Error(err.error?.message || 'HTTP ' + r.status);
            }
            const d = await r.json();
            ty.remove();
            const am = document.createElement('div'); am.className = 'msg ai';
            const reply = d.content && d.content[0] ? d.content[0].text : 'پاسخی دریافت نشد';
            am.textContent = reply; msgs.appendChild(am);
            AI_HIST.push({ role: 'assistant', content: reply });
        } catch (e) {
            ty.remove();
            const em = document.createElement('div'); em.className = 'msg err';
            em.textContent = '⚠️ ' + e.message; msgs.appendChild(em);
            AI_HIST.pop();
        }
        btn.disabled = false; msgs.scrollTop = msgs.scrollHeight;
    }

    const canvasEl = document.getElementById('cloud-canvas');
    const ctx = canvasEl.getContext('2d');
    function resize() { canvasEl.width = window.innerWidth; canvasEl.height = window.innerHeight }
    resize(); window.addEventListener('resize', resize);

    const clouds = Array.from({ length: 8 }, (_, i) => ({ x: Math.random() * window.innerWidth, y: 30 + Math.random() * 220, w: 150 + Math.random() * 200, h: 60 + Math.random() * 90, spd: .1 + Math.random() * .25, op: .5 + Math.random() * .4, bumps: Array.from({ length: 6 }, () => ({ dx: Math.random(), dy: Math.random(), r: 18 + Math.random() * 40 })) }));
    const drops = [];
    let fr = 0;

    function animate() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height); fr++;
        if (fr % 3 === 0) {
            if (w === 'rain' || w === 'thunder') for (let i = 0; i < 4; i++) drops.push({ x: Math.random() * canvasEl.width, y: -5, spd: 9 + Math.random() * 7, len: 14 + Math.random() * 10, a: .25 + Math.random() * .35 });
        }
        clouds.forEach(c => {
            c.x += c.spd; if (c.x > canvasEl.width + 250) c.x = -250;
            const col = dark ? 'rgba(40,50,90,' : 'rgba(210,230,255,';
            c.bumps.forEach(b => { ctx.beginPath(); ctx.arc(c.x + b.dx * c.w, c.y + b.dy * c.h * .6, b.r, 0, Math.PI * 2); ctx.fillStyle = col + (c.op * .85) + ')'; ctx.fill() });
            ctx.beginPath(); ctx.ellipse(c.x + c.w * .5, c.y + c.h * .75, c.w * .48, c.h * .32, 0, 0, Math.PI * 2); ctx.fillStyle = col + (c.op * .6) + ')'; ctx.fill();
        });
        for (let i = drops.length - 1; i >= 0; i--) {
            const d = drops[i]; ctx.save(); ctx.globalAlpha = d.a; ctx.strokeStyle = dark ? '#5577aa' : '#7799cc'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x - 2, d.y + d.len); ctx.stroke(); ctx.restore(); d.y += d.spd; if (d.y > canvasEl.height) drops.splice(i, 1);
        }
        requestAnimationFrame(animate);
    }
    animate();
    
    // مقداردهی اولیه ابزار چت
    setTool('chat');
})();