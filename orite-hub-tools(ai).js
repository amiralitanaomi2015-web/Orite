// ایجاد و اعمال تگ استایل (CSS) به سند
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap');

  *{box-sizing:border-box;margin:0;padding:0}
  :root{
    --bg:#ffffff;--bg2:#f5f6fa;--bg3:#eef0f8;
    --card:#ffffff;--card2:#f8f9ff;
    --text:#1a1a2e;--text2:#4a4a6a;--text3:#8888aa;
    --accent:#5b6af0;--accent2:#7c3aed;--accent3:#06b6d4;
    --border:rgba(91,106,240,0.15);--border2:rgba(91,106,240,0.3);
    --shadow:0 4px 24px rgba(91,106,240,0.10);
    --shadow2:0 8px 40px rgba(91,106,240,0.18);
    --glow:0 0 0 3px rgba(91,106,240,0.18);
    --radius:16px;--radius2:24px;
    --trans:all 0.35s cubic-bezier(0.4,0,0.2,1);
    --font-main:'Inter',sans-serif;
    --font-rtl:'Vazirmatn',sans-serif;
  }
  body.dark{
    --bg:#0d0f1e;--bg2:#131526;--bg3:#1a1d35;
    --card:#161929;--card2:#1e2240;
    --text:#e8eaf6;--text2:#9fa8c4;--text3:#6b7499;
    --border:rgba(91,106,240,0.2);--border2:rgba(91,106,240,0.4);
    --shadow:0 4px 24px rgba(0,0,0,0.4);
    --shadow2:0 8px 40px rgba(0,0,0,0.6);
  }
  body{
    font-family:var(--font-main);
    background:transparent;
    color:var(--text);
    min-height:600px;
    padding:0;
    overflow-x:hidden;
  }
  #panel{
    background:var(--bg);
    border-radius:var(--radius2);
    border:1px solid var(--border2);
    box-shadow:var(--shadow2);
    overflow:hidden;
    position:relative;
    min-height:600px;
    animation:panelIn 0.7s cubic-bezier(0.4,0,0.2,1);
  }
  @keyframes panelIn{
    from{opacity:0;transform:scale(0.96) translateY(12px)}
    to{opacity:1;transform:scale(1) translateY(0)}
  }
  #cloud-canvas{
    position:absolute;top:0;left:0;width:100%;height:180px;
    pointer-events:none;z-index:0;
    border-radius:var(--radius2) var(--radius2) 0 0;
    overflow:hidden;
  }
  #topbar{
    position:relative;z-index:2;
    display:flex;align-items:center;justify-content:space-between;
    padding:18px 24px 0;
    flex-wrap:wrap;gap:10px;
  }
  .logo{
    display:flex;align-items:center;gap:10px;
    font-size:17px;font-weight:700;
    color:var(--accent);letter-spacing:-0.3px;
  }
  .logo-dot{
    width:10px;height:10px;border-radius:50%;
    background:linear-gradient(135deg,var(--accent),var(--accent2));
    animation:pulse 2s ease-in-out infinite;
  }
  @keyframes pulse{
    0%,100%{box-shadow:0 0 0 0 rgba(91,106,240,0.5)}
    50%{box-shadow:0 0 0 6px rgba(91,106,240,0)}
  }
  .topbar-right{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
  select#langSelect{
    background:var(--card2);border:1px solid var(--border2);
    border-radius:10px;padding:6px 10px;
    font-size:13px;color:var(--text);cursor:pointer;
    outline:none;transition:var(--trans);
  }
  select#langSelect:hover{border-color:var(--accent);}
  .btn-icon{
    width:36px;height:36px;border-radius:10px;
    background:var(--card2);border:1px solid var(--border);
    color:var(--text2);cursor:pointer;
    display:flex;align-items:center;justify-content:center;
    font-size:16px;transition:var(--trans);
  }
  .btn-icon:hover{background:var(--accent);color:#fff;border-color:var(--accent);}
  #info-bar{
    position:relative;z-index:2;
    display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));
    gap:10px;padding:16px 24px;
  }
  .info-card{
    background:var(--card2);border:1px solid var(--border);
    border-radius:12px;padding:10px 14px;
    display:flex;flex-direction:column;gap:2px;
    transition:var(--trans);
  }
  .info-card:hover{border-color:var(--accent);transform:translateY(-1px);box-shadow:var(--shadow);}
  .info-label{font-size:10px;color:var(--text3);font-weight:500;text-transform:uppercase;letter-spacing:0.5px;}
  .info-value{font-size:13px;font-weight:600;color:var(--text);font-family:'Inter',monospace;}
  #tools-row{
    display:flex;gap:8px;padding:0 24px 12px;
    overflow-x:auto;flex-wrap:wrap;
  }
  .tool-btn{
    display:flex;align-items:center;gap:7px;
    padding:8px 16px;border-radius:10px;
    background:var(--card2);border:1px solid var(--border);
    color:var(--text2);font-size:13px;font-weight:500;
    cursor:pointer;transition:var(--trans);white-space:nowrap;
    font-family:inherit;
  }
  .tool-btn:hover,.tool-btn.active{
    background:var(--accent);color:#fff;
    border-color:var(--accent);
    box-shadow:0 2px 12px rgba(91,106,240,0.3);
    transform:translateY(-1px);
  }
  .tool-icon{font-size:15px;}
  #main-area{
    display:grid;grid-template-columns:1fr 340px;
    gap:16px;padding:0 24px 16px;
    align-items:start;
  }
  @media(max-width:680px){#main-area{grid-template-columns:1fr;}}
  #tool-panel{
    background:var(--card2);border:1px solid var(--border);
    border-radius:var(--radius);padding:20px;
    min-height:260px;transition:var(--trans);
  }
  .tool-title{
    font-size:15px;font-weight:600;color:var(--text);
    margin-bottom:14px;display:flex;align-items:center;gap:8px;
  }
  textarea.tool-input{
    width:100%;border-radius:10px;
    background:var(--bg);border:1px solid var(--border2);
    color:var(--text);padding:10px 14px;
    font-size:13px;font-family:inherit;
    resize:vertical;min-height:80px;outline:none;
    transition:var(--trans);
  }
  textarea.tool-input:focus{border-color:var(--accent);box-shadow:var(--glow);}
  .tool-run{
    margin-top:10px;padding:9px 20px;
    background:var(--accent);color:#fff;border:none;
    border-radius:10px;font-size:13px;font-weight:600;
    cursor:pointer;transition:var(--trans);font-family:inherit;
  }
  .tool-run:hover{background:var(--accent2);transform:translateY(-1px);}
  .tool-result{
    margin-top:12px;padding:12px;
    background:var(--bg);border:1px solid var(--border);
    border-radius:10px;font-size:13px;color:var(--text2);
    min-height:40px;line-height:1.6;
    white-space:pre-wrap;word-break:break-word;
    max-height:200px;overflow-y:auto;
  }
  #ai-window{
    background:var(--card);border:1px solid var(--border2);
    border-radius:var(--radius);overflow:hidden;
    display:flex;flex-direction:column;
    box-shadow:var(--shadow);
    max-height:420px;
  }
  #ai-header{
    background:linear-gradient(135deg,var(--accent),var(--accent2));
    padding:14px 18px;display:flex;align-items:center;gap:10px;
  }
  .ai-avatar{
    width:34px;height:34px;border-radius:50%;
    background:rgba(255,255,255,0.2);
    display:flex;align-items:center;justify-content:center;
    font-size:17px;
  }
  .ai-name{color:#fff;font-weight:600;font-size:14px;}
  .ai-status{font-size:11px;color:rgba(255,255,255,0.7);}
  .ai-indicator{
    width:8px;height:8px;border-radius:50%;background:#4ade80;
    margin-left:auto;animation:blink 1.5s ease-in-out infinite;
  }
  @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
  #ai-messages{
    flex:1;overflow-y:auto;padding:14px;
    display:flex;flex-direction:column;gap:10px;
    max-height:240px;
  }
  .msg{
    max-width:85%;padding:9px 13px;border-radius:12px;
    font-size:13px;line-height:1.5;
  }
  .msg.bot{
    background:var(--bg3);color:var(--text);
    align-self:flex-start;border-bottom-left-radius:4px;
  }
  .msg.user{
    background:var(--accent);color:#fff;
    align-self:flex-end;border-bottom-right-radius:4px;
    text-align:right;
  }
  #ai-input-row{
    display:flex;gap:8px;padding:12px;
    border-top:1px solid var(--border);
  }
  #ai-input{
    flex:1;background:var(--bg2);border:1px solid var(--border2);
    border-radius:10px;padding:8px 12px;
    font-size:13px;color:var(--text);outline:none;
    transition:var(--trans);font-family:inherit;
  }
  #ai-input:focus{border-color:var(--accent);box-shadow:var(--glow);}
  #ai-send{
    width:36px;height:36px;border-radius:10px;
    background:var(--accent);color:#fff;border:none;
    cursor:pointer;font-size:16px;transition:var(--trans);
  }
  #ai-send:hover{background:var(--accent2);transform:scale(1.05);}
  .typing-dots{display:inline-flex;gap:3px;align-items:center;padding:2px 0;}
  .typing-dots span{
    width:5px;height:5px;border-radius:50%;background:var(--accent);
    animation:dot 1.2s ease-in-out infinite;
  }
  .typing-dots span:nth-child(2){animation-delay:0.2s}
  .typing-dots span:nth-child(3){animation-delay:0.4s}
  @keyframes dot{0%,80%,100%{transform:scale(0.6);opacity:0.4}40%{transform:scale(1);opacity:1}}
  #footer{
    padding:12px 24px;border-top:1px solid var(--border);
    display:flex;align-items:center;justify-content:space-between;
    font-size:11px;color:var(--text3);flex-wrap:wrap;gap:6px;
  }
  .footer-logo{
    font-weight:700;font-size:12px;
    background:linear-gradient(135deg,var(--accent),var(--accent2));
    -webkit-background-clip:text;-webkit-text-fill-color:transparent;
    background-clip:text;
  }
  #datetime-bar{
    display:flex;align-items:center;gap:16px;
    padding:0 24px 12px;flex-wrap:wrap;
  }
  .dt-item{
    display:flex;align-items:center;gap:6px;
    font-size:13px;color:var(--text2);
    background:var(--card2);border:1px solid var(--border);
    border-radius:8px;padding:5px 12px;
  }
  .weather-badge{
    display:flex;align-items:center;gap:6px;
    padding:5px 12px;border-radius:8px;
    background:var(--card2);border:1px solid var(--border);
    font-size:13px;color:var(--text2);
    font-weight:500;
    cursor:default;transition:var(--trans);
  }
  .weather-icon{font-size:18px;}
  .rtl{direction:rtl;text-align:right;font-family:var(--font-rtl)!important;}
  .rtl .tool-btn,.rtl .info-label,.rtl .info-value{font-family:var(--font-rtl)!important;}
  select{appearance:none;}
  ::-webkit-scrollbar{width:5px;height:5px}
  ::-webkit-scrollbar-track{background:transparent}
  ::-webkit-scrollbar-thumb{background:var(--border2);border-radius:10px}
  #loading-overlay{
    position:absolute;inset:0;background:var(--bg);
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    z-index:100;border-radius:var(--radius2);
    transition:opacity 0.5s ease;
  }
  .loader-ring{
    width:48px;height:48px;border-radius:50%;
    border:3px solid var(--border2);
    border-top-color:var(--accent);
    animation:spin 0.8s linear infinite;
  }
  @keyframes spin{to{transform:rotate(360deg)}}
  #lang-overlay{display:none;}
`;
document.head.appendChild(styleSheet);

// ایجاد ساختار HTML پنل به صورت المان‌های جاوا اسکریپت
const panel = document.createElement("div");
panel.id = "panel";
panel.innerHTML = `
  <div id="loading-overlay">
    <div class="loader-ring"></div>
    <div style="margin-top:14px;font-size:13px;color:var(--text3);" id="loadText">در حال بارگذاری...</div>
  </div>

  <canvas id="cloud-canvas"></canvas>

  <div id="topbar">
    <div class="logo">
      <div class="logo-dot"></div>
      <span id="logoText">LuoLaf Studio</span>
    </div>
    <div class="topbar-right">
      <div class="weather-badge" id="weatherBadge">
        <span class="weather-icon" id="weatherIcon">☁️</span>
        <span id="weatherText">-</span>
      </div>
      <select id="langSelect" onchange="setLang(this.value)">
        <option value="fa">🇮🇷 فارسی</option>
        <option value="en">🇺🇸 English</option>
        <option value="tr">🇹🇷 Türkçe</option>
        <option value="ar">🇸🇦 العربية</option>
        <option value="ku">🏴 کوردی</option>
        <option value="zh">🇨🇳 中文</option>
        <option value="ko">🇰🇷 한국어</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="es">🇪🇸 Español</option>
        <option value="de">🇩🇪 Deutsch</option>
        <option value="it">🇮🇹 Italiano</option>
        <option value="he">🇮🇱 עברית</option>
        <option value="ru">🇷🇺 Русский</option>
        <option value="ja">🇯🇵 日本語</option>
        <option value="tg">🇹🇯 Тоҷикӣ</option>
        <option value="hy">🇦🇲 Հայերեն</option>
        <option value="hr">🇭🇷 Hrvatski</option>
        <option value="ms">🇲🇾 Melayu</option>
        <option value="hi">🇮🇳 हिन्दी</option>
      </select>
      <div class="btn-icon" onclick="toggleDark()" title="Dark Mode">🌙</div>
    </div>
  </div>

  <div id="datetime-bar">
    <div class="dt-item">🕐 <span id="clockEl">--:--:--</span></div>
    <div class="dt-item">📅 <span id="dateEl">---</span></div>
    <div class="dt-item">🌍 <span id="tzEl">---</span></div>
  </div>

  <div id="info-bar">
    <div class="info-card">
      <div class="info-label" id="l-ip">آدرس IP</div>
      <div class="info-value" id="userIP">در حال دریافت...</div>
    </div>
    <div class="info-card">
      <div class="info-label" id="l-speed">سرعت اینترنت</div>
      <div class="info-value" id="netSpeed">در حال تست...</div>
    </div>
    <div class="info-card">
      <div class="info-label" id="l-uid">شناسه کاربر</div>
      <div class="info-value" id="userId" style="font-size:11px">---</div>
    </div>
    <div class="info-card">
      <div class="info-label" id="l-browser">مرورگر</div>
      <div class="info-value" id="browserInfo" style="font-size:11px">---</div>
    </div>
    <div class="info-card">
      <div class="info-label" id="l-os">سیستم عامل</div>
      <div class="info-value" id="osInfo" style="font-size:11px">---</div>
    </div>
    <div class="info-card">
      <div class="info-label" id="l-screen">صفحه نمایش</div>
      <div class="info-value" id="screenInfo">---</div>
    </div>
  </div>

  <div id="tools-row">
    <button class="tool-btn active" onclick="showTool('translate')" id="btn-translate">
      <span class="tool-icon">🌐</span><span id="tl-translate">ترجمه‌گر</span>
    </button>
    <button class="tool-btn" onclick="showTool('code')" id="btn-code">
      <span class="tool-icon">💻</span><span id="tl-code">کد نویس</span>
    </button>
    <button class="tool-btn" onclick="showTool('law')" id="btn-law">
      <span class="tool-icon">⚖️</span><span id="tl-law">حقوق‌دان</span>
    </button>
    <button class="tool-btn" onclick="showTool('chat')" id="btn-chat">
      <span class="tool-icon">💬</span><span id="tl-chat">دستیار</span>
    </button>
    <button class="tool-btn" onclick="showTool('geo')" id="btn-geo">
      <span class="tool-icon">🗺️</span><span id="tl-geo">جغرافیا</span>
    </button>
  </div>

  <div id="main-area">
    <div id="tool-panel">
      <div class="tool-title">
        <span id="tool-icon-main">🌐</span>
        <span id="tool-name-main">ترجمه‌گر هوشمند</span>
      </div>
      <select id="tool-lang-sel" style="background:var(--bg);border:1px solid var(--border2);border-radius:8px;padding:6px 10px;font-size:13px;color:var(--text);margin-bottom:10px;outline:none;width:100%;display:none">
        <option value="Persian">فارسی</option><option value="English">انگلیسی</option>
        <option value="Turkish">ترکی</option><option value="Arabic">عربی</option>
        <option value="French">فرانسوی</option><option value="Spanish">اسپانیایی</option>
        <option value="German">آلمانی</option><option value="Chinese">چینی</option>
        <option value="Japanese">ژاپنی</option><option value="Russian">روسی</option>
      </select>
      <textarea class="tool-input" id="toolInput" placeholder="متن یا سوال خود را اینجا بنویسید..." rows="4"></textarea>
      <button class="tool-run" onclick="runTool()" id="runBtn">اجرا ▶</button>
      <div class="tool-result" id="toolResult" style="display:none"></div>
    </div>

    <div id="ai-window">
      <div id="ai-header">
        <div class="ai-avatar">🤖</div>
        <div>
          <div class="ai-name" id="ai-name-txt">دستیار هوش مصنوعی</div>
          <div class="ai-status" id="ai-status-txt">آنلاین</div>
        </div>
        <div class="ai-indicator"></div>
      </div>
      <div id="ai-messages">
        <div class="msg bot" id="ai-welcome">سلام! من دستیار هوشمند LuoLaf Studio هستم. چطور می‌توانم کمکتان کنم؟ 😊</div>
      </div>
      <div id="ai-input-row">
        <input type="text" id="ai-input" placeholder="پیام بنویسید..." onkeydown="if(event.key==='Enter')sendAI()">
        <button id="ai-send" onclick="sendAI()">➤</button>
      </div>
    </div>
  </div>

  <div id="footer">
    <div style="color:var(--text3);font-size:11px;" id="footerLeft">پنل هوشمند — نسخه ۱.۰</div>
    <div class="footer-logo">مدیر پروژه: LuoLaf.Studio</div>
    <div style="color:var(--text3);font-size:11px;" id="footerRight">© 2025</div>
  </div>
`;

// الحاق پنل به بدنه صفحه
document.body.appendChild(panel);

// انتقال و اجرای منطق جاوا اسکریپت
const T = {
  fa:{dir:'rtl',font:'Vazirmatn',ip:'آدرس IP',speed:'سرعت اینترنت',uid:'شناسه کاربر',browser:'مرورگر',os:'سیستم عامل',screen:'صفحه نمایش',translate:'ترجمه‌گر',code:'کد نویس',law:'حقوق‌دان',chat:'دستیار',geo:'جغرافیا',runBtn:'اجرا ▶',toolTitle:{'translate':'ترجمه‌گر هوشمند','code':'کد نویس قوی','law':'حقوق‌دان هوشمند','chat':'دستیار چت‌بات','geo':'جغرافی‌دان هوشمند'},placeholder:{'translate':'متن مورد نظر برای ترجمه...','code':'کد یا مشکل برنامه‌نویسی...','law':'سوال حقوقی خود را بنویسید...','chat':'سوال خود را بنویسید...','geo':'سوال جغرافیایی...'},aiName:'دستیار هوش مصنوعی',aiStatus:'آنلاین',aiPlaceholder:'پیام بنویسید...',aiWelcome:'سلام! من دستیار هوشمند LuoLaf Studio هستم. چطور می‌توانم کمکتان کنم؟ 😊',footerLeft:'پنل هوشمند — نسخه ۱.۰',load:'در حال بارگذاری...'},
  en:{dir:'ltr',font:'Inter',ip:'IP Address',speed:'Internet Speed',uid:'User ID',browser:'Browser',os:'OS',screen:'Screen',translate:'Translator',code:'Coder',law:'Legal',chat:'Assistant',geo:'Geography',runBtn:'Run ▶',toolTitle:{'translate':'AI Translator','code':'Smart Coder','law':'Legal Advisor','chat':'Chatbot','geo':'Geographer'},placeholder:{'translate':'Enter text to translate...','code':'Enter code or problem...','law':'Write your legal question...','chat':'Ask anything...','geo':'Ask a geography question...'},aiName:'AI Assistant',aiStatus:'Online',aiPlaceholder:'Type a message...',aiWelcome:'Hello! I am the LuoLaf Studio AI Assistant. How can I help you? 😊',footerLeft:'Smart Panel — v1.0',load:'Loading...'},
  tr:{dir:'ltr',font:'Inter',ip:'IP Adresi',speed:'İnternet Hızı',uid:'Kullanıcı ID',browser:'Tarayıcı',os:'İşletim Sistemi',screen:'Ekran',translate:'Çevirmen',code:'Kodlayıcı',law:'Hukuk',chat:'Asistan',geo:'Coğrafya',runBtn:'Çalıştır ▶',toolTitle:{'translate':'AI Çevirmen','code':'Akıllı Kodlayıcı','law':'Hukuk Danışmanı','chat':'Sohbet Botu','geo':'Coğrafyacı'},placeholder:{'translate':'Çevrilecek metni girin...','code':'Kod veya problemi girin...','law':'Hukuki sorunuzu yazın...','chat':'Bir şey sorun...','geo':'Coğrafya sorusu sorun...'},aiName:'AI Asistanı',aiStatus:'Çevrimiçi',aiPlaceholder:'Mesaj yazın...',aiWelcome:'Merhaba! Ben LuoLaf Studio AI Asistanıyım. Size nasıl yardımcı olabilirim? 😊',footerLeft:'Akıllı Panel — v1.0',load:'Yükleniyor...'},
  ar:{dir:'rtl',font:'Vazirmatn',ip:'عنوان IP',speed:'سرعة الإنترنت',uid:'معرف المستخدم',browser:'المتصفح',os:'نظام التشغيل',screen:'الشاشة',translate:'مترجم',code:'مبرمج',law:'محامي',chat:'مساعد',geo:'جغرافيا',runBtn:'تشغيل ▶',toolTitle:{'translate':'مترجم ذكي','code':'مبرمج ذكي','law':'مستشار قانوني','chat':'روبوت محادثة','geo':'جغرافي ذكي'},placeholder:{'translate':'أدخل النص للترجمة...','code':'أدخل الكود أو المشكلة...','law':'اكتب سؤالك القانوني...','chat':'اسأل أي شيء...','geo':'اسأل سؤالاً جغرافياً...'},aiName:'المساعد الذكي',aiStatus:'متصل',aiPlaceholder:'اكتب رسالة...',aiWelcome:'مرحباً! أنا مساعد LuoLaf Studio الذكي. كيف يمكنني مساعدتك؟ 😊',footerLeft:'لوحة ذكية — الإصدار ١.٠',load:'جار التحميل...'},
  ku:{dir:'rtl',font:'Vazirmatn',ip:'ناونیشانی IP',speed:'خێرایی ئینتەرنێت',uid:'ناسنامەی بەکارهێنەر',browser:'وێبگەڕ',os:'سیستەمی کارپێکردن',screen:'شاشە',translate:'وەرگێڕ',code:'کۆدنووس',law:'یاسادان',chat:'یاریدەدەر',geo:'جوگرافیا',runBtn:'جێبەجێبکە ▶',toolTitle:{'translate':'وەرگێڕی زیرەک','code':'کۆدنووسی بەهێز','law':'ڕاوێژکاری یاسایی','chat':'بۆتی گفتوگۆ','geo':'جوگرافیادان'},placeholder:{'translate':'دەقی وەرگێڕانەکەت بنووسە...','code':'کۆد یان کێشە بنووسە...','law':'پرسیاری یاسایییەکەت بنووسە...','chat':'هەرشتێک بپرسە...','geo':'پرسیاری جوگرافیایی بپرسە...'},aiName:'یاریدەرە زیرەکەکە',aiStatus:'ئەینلاین',aiPlaceholder:'نامە بنووسە...',aiWelcome:'سڵاو! من یاریدەرە زیرەکی LuoLaf Studio ی. چۆن دەتوانم یارمەتیت بدەم؟ 😊',footerLeft:'پانێلی زیرەک — وەشان ١.٠',load:'بارکردن...'},
  zh:{dir:'ltr',font:'Inter',ip:'IP地址',speed:'网速',uid:'用户ID',browser:'浏览器',os:'操作系统',screen:'屏幕',translate:'翻译',code:'编程',law:'法律',chat:'助手',geo:'地理',runBtn:'运行 ▶',toolTitle:{'translate':'AI翻译器','code':'智能编程助手','law':'法律顾问','chat':'聊天机器人','geo':'地理学家'},placeholder:{'translate':'输入要翻译的文本...','code':'输入代码或问题...','law':'下您的法律问题...','chat':'问任何问题...','geo':'问一个地理问题...'},aiName:'AI助手',aiStatus:'在线',aiPlaceholder:'输入消息...',aiWelcome:'你好！我是LuoLaf Studio AI助手。有什么可以帮您？😊',footerLeft:'智能面板 — v1.0',load:'加载中...'},
  ko:{dir:'ltr',font:'Inter',ip:'IP 주소',speed:'인터넷 속도',uid:'사용자 ID',browser:'브라우저',os:'운영 체제',screen:'화면',translate:'번역기',code:'코딩',law:'법률',chat:'어시스턴트',geo:'지리',runBtn:'실행 ▶',toolTitle:{'translate':'AI 번역기','code':'스마트 코더','law':'법률 상담','chat':'챗봇','geo':'지리학자'},placeholder:{'translate':'번역할 텍스트 입력...','code':'코드 또는 문제 입력...','law':'법률 질문을 입력하세요...','chat':'무엇이든 물어보세요...','geo':'지리 질문을 입력하세요...'},aiName:'AI 어시스턴트',aiStatus:'온라인',aiPlaceholder:'메시지 입력...',aiWelcome:'안녕하세요! 저는 LuoLaf Studio AI 어시스턴트입니다. 어떻게 도와드릴까요? 😊',footerLeft:'스마트 패널 — v1.0',load:'로딩 중...'},
  fr:{dir:'ltr',font:'Inter',ip:'Adresse IP',speed:'Vitesse Internet',uid:'ID Utilisateur',browser:'Navigateur',os:'Système d\'exploitation',screen:'Écran',translate:'Traducteur',code:'Codeur',law:'Juridique',chat:'Assistant',geo:'Géographie',runBtn:'Exécuter ▶',toolTitle:{'translate':'Traducteur IA','code':'Codeur Intelligent','law':'Conseiller Juridique','chat':'Chatbot','geo':'Géographe'},placeholder:{'translate':'Entrez le texte à traduire...','code':'Entrez le code ou le problème...','law':'Écrivez votre question juridique...','chat':'Posez n\'importe quelle question...','geo':'Posez une question de géographie...'},aiName:'Assistant IA',aiStatus:'En ligne',aiPlaceholder:'Tapez un message...',aiWelcome:'Bonjour! Je suis l\'assistant IA de LuoLaf Studio. Comment puis-je vous aider? 😊',footerLeft:'Panneau Intelligent — v1.0',load:'Chargement...'},
  es:{dir:'ltr',font:'Inter',ip:'Dirección IP',speed:'Velocidad Internet',uid:'ID Usuario',browser:'Navegador',os:'Sistema Operativo',screen:'Pantalla',traductor:'Traductor',code:'Programador',law:'Legal',chat:'Asistente',geo:'Geografía',runBtn:'Ejecutar ▶',toolTitle:{'translate':'Traductor IA','code':'Programador Inteligente','law':'Asesor Legal','chat':'Chatbot','geo':'Geógrafo'},placeholder:{'translate':'Ingrese texto para traducir...','code':'Ingrese código o problema...','law':'Escriba su pregunta legal...','chat':'Pregunte cualquier cosa...','geo':'Haga una pregunta geográfica...'},aiName:'Asistente IA',aiStatus:'En línea',aiPlaceholder:'Escriba un mensaje...',aiWelcome:'¡Hola! Soy el asistente IA de LuoLaf Studio. ¿Cómo puedo ayudarle? 😊',footerLeft:'Panel Inteligente — v1.0',load:'Cargando...'},
  de:{dir:'ltr',font:'Inter',ip:'IP-Adresse',speed:'Internet-Geschwindigkeit',uid:'Benutzer-ID',browser:'Browser',os:'Betriebssystem',screen:'Bildschirm',translate:'Übersetzer',code:'Programmierer',law:'Rechtlich',chat:'Assistent',geo:'Geographie',runBtn:'Ausführen ▶',toolTitle:{'translate':'KI-Übersetzer','code':'Intelligenter Coder','law':'Rechtsberater','chat':'Chatbot','geo':'Geograph'},placeholder:{'translate':'Text zum Übersetzen eingeben...','code':'Code oder Problem eingeben...','law':'Ihre Rechtsfrage eingeben...','chat':'Beliebige Frage stellen...','geo':'Geografische Frage stellen...'},aiName:'KI-Assistent',aiStatus:'Online',aiPlaceholder:'Nachricht eingeben...',aiWelcome:'Hallo! Ich bin der KI-Assistent von LuoLaf Studio. Wie kann ich Ihnen helfen? 😊',footerLeft:'Intelligentes Panel — v1.0',load:'Lädt...'},
  it:{dir:'ltr',font:'Inter',ip:'Indirizzo IP',speed:'Velocità Internet',uid:'ID Utente',browser:'Browser',os:'Sistema Operativo',screen:'Schermo',translate:'Traduttore',code:'Programmatore',law:'Legale',chat:'Assistente',geo:'Geografia',runBtn:'Esegui ▶',toolTitle:{'translate':'Traduttore IA','code':'Programmatore Intelligente','law':'Consulente Legale','chat':'Chatbot','geo':'Geografo'},placeholder:{'translate':'Inserisci testo da tradurre...','code':'Inserisci codice o problema...','law':'Scrivi la tua domanda legale...','chat':'Chiedi qualsiasi cosa...','geo':'Fai una domanda geografica...'},aiName:'Assistente IA',aiStatus:'Online',aiPlaceholder:'Digita un messaggio...',aiWelcome:'Ciao! Sono l\'assistente IA di LuoLaf Studio. Come posso aiutarti? 😊',footerLeft:'Pannello Intelligente — v1.0',load:'Caricamento...'},
  he:{dir:'rtl',font:'Vazirmatn',ip:'כתובת IP',speed:'מהירות אינטרנט',uid:'מזהה משתמש',browser:'דפדפן',os:'מערכת הפעלה',screen:'מסך',translate:'מתרגם',code:'מתכנת',law:'משפטי',chat:'עוזר',geo:'גיאוגרפיה',runBtn:'הפעל ▶',toolTitle:{'translate':'מתרגם AI','code':'מתכנת חכם','law':'יועץ משפטי','chat':'צ\'אטבוט','geo':'גיאוגרף'},placeholder:{'translate':'הזן טקסט לתרגום...','code':'הזן קוד או בעיה...','law':'כתוב את שאלתך המשפטית...','chat':'שאל כל דבר...','geo':'שאל שאלה גיאוגרפית...'},aiName:'עוזר AI',aiStatus:'מקוון',aiPlaceholder:'הקלד הודעה...',aiWelcome:'שלום! אני עוזר ה-AI של LuoLaf Studio. איך אוכל לעזור לך? 😊',footerLeft:'פאנל חכם — v1.0',load:'טוען...'},
  ru:{dir:'ltr',font:'Inter',ip:'IP-адрес',speed:'Скорость интернета',uid:'ID пользователя',browser:'Браузер',os:'ОС',screen:'Экран',translate:'Переводчик',code:'Программист',law:'Юридический',chat:'Ассистент',geo:'География',runBtn:'Запустить ▶',toolTitle:{'translate':'ИИ-переводчик','code':'Умный программист','law':'Юридический советник','chat':'Чат-бот','geo':'Географ'},placeholder:{'translate':'Введите текст для перевода...','code':'Введите код или задачу...','law':'Напишите ваш юридический вопрос...','chat':'Задайте любой вопрос...','geo':'Задайте географический вопрос...'},aiName:'ИИ-ассистент',aiStatus:'В сети',aiPlaceholder:'Введите сообщение...',aiWelcome:'Здравствуйте! Я ИИ-ассистент LuoLaf Studio. Чем могу помочь? 😊',footerLeft:'Умная панель — v1.0',load:'Загрузка...'},
  ja:{dir:'ltr',font:'Inter',ip:'IPアドレス',speed:'インターネット速度',uid:'ユーザーID',browser:'ブラウザ',os:'OS',screen:'画面',translate:'翻訳者',code:'プログラマー',law:'法律',chat:'アシスタント',geo:'地理',runBtn:'実行 ▶',toolTitle:{'translate':'AI翻訳者','code':'スマートコーダー','law':'法律アドバイザー','chat':'チャットボット','geo':'地理学者'},placeholder:{'translate':'翻訳するテキストを入力...','code':'コードまたは問題を入力...','law':'法律の質問を書いてください...','chat':'何でも聞いてください...','geo':'地理の質問をしてください...'},aiName:'AIアシスタント',aiStatus:'オンライン',aiPlaceholder:'메시지 입력...',aiWelcome:'こんにちは！私はLuoLaf StudioのAIアシスタントです。何かお手伝いできますか？😊',footerLeft:'スマートパネル — v1.0',load:'読み込み中...'},
  tg:{dir:'ltr',font:'Inter',ip:'Суроғаи IP',speed:'Суръати Интернет',uid:'ID Корбар',browser:'Браузер',os:'Системаи Корбар',screen:'Экран',translate:'Тарҷумон',code:'Барномасоз',law:'Ҳуқуқшинос',chat:'Ёрдамчи',geo:'Ҷуғрофиё',runBtn:'Иҷро ▶',toolTitle:{'translate':'Тарҷумони зиракона','code':'Барномасози ақлӣ','law':'Маслиҳатчии ҳуқуқӣ','chat':'Чатбот','geo':'Ҷуғрофиёшинос'},placeholder:{'translate':'Матни тарҷумаро ворид кунед...','code':'Код ё мушкилотро ворид кунед...','law':'Савол ҳуқуқии худро нависед...','chat':'Ҳар чизеро бипурсед...','geo':'Савол ҷуғрофиявӣ бипурсед...'},aiName:'Ёрдамчии AI',aiStatus:'Онлайн',aiPlaceholder:'Паём нависед...',aiWelcome:'Салом! Ман ёрдамчии AI-и LuoLaf Studio ҳастам. Чӣ тавр метавонам кӯмак кунам? 😊',footerLeft:'Панели зиракона — v1.0',load:'Боргузорӣ...'},
  hy:{dir:'ltr',font:'Inter',ip:'IP հասցե',speed:'Ինտերնետ արագություն',uid:'Օգտատիրוջ ID',browser:'Դիտարկիչ',os:'Օպ. համակարգ',screen:'Էկրան',translate:'Թարգմանիչ',code:'Ծրագրավոր',law:'Իրավաբան',chat:'Օգնական',geo:'Աշխ. ատ.',runBtn:'Գործարկել ▶',toolTitle:{'translate':'AI Թարգմանիչ','code':'Խելացի ծրագրավոր','law':'Իրավական Խորհրդատու','chat':'Չաթ-Բոտ','geo':'Աշխարհագրագետ'},placeholder:{'translate':'Մուտքագրեք թարգմանելու տեքստ...','code':'Մուտքագրեք կոդ կամ խնդիր...','law':'Գրեք ձեր իրավական հարցը...','chat':'Հարցրեք ցանկացած բան...','geo':'Տվեք աշխ. ատ. հարց...'},aiName:'AI Օգնական',aiStatus:'Առցանց',aiPlaceholder:'Գրեք հաղորդագրություն...',aiWelcome:'Բարև! Ես LuoLaf Studio-ի AI օգնականն եմ: Ինչպե՞ս կարող եմ օգնել: 😊',footerLeft:'Խելացի Panel — v1.0',load:'Բեռնում...'},
  hr:{dir:'ltr',font:'Inter',ip:'IP Adresa',speed:'Brzina Interneta',uid:'Korisnički ID',browser:'Preglednik',os:'Operativni Sustav',screen:'Zaslon',translate:'Prevoditelj',code:'Programer',law:'Pravni',chat:'Pomoćnik',geo:'Geografija',runBtn:'Pokreni ▶',toolTitle:{'translate':'AI Prevoditelj','code':'Pametni Programer','law':'Pravni Savjetnik','chat':'Chatbot','geo':'Geograf'},placeholder:{'translate':'Unesite tekst za prijevod...','code':'Unesite kod ili problem...','law':'Napišite pravno pitanje...','chat':'Pitajte bilo što...','geo':'Postavite geografsko pitanje...'},aiName:'AI Pomoćnik',aiStatus:'Online',aiPlaceholder:'Upišite poruku...',aiWelcome:'Pozdrav! Ja sam AI pomoćnik LuoLaf Studija. Kako vam mogu pomoći? 😊',footerLeft:'Pametna Ploča — v1.0',load:'Učitavanje...'},
  ms:{dir:'ltr',font:'Inter',ip:'Alamat IP',speed:'Kelajuan Internet',uid:'ID Pengguna',browser:'Pelayar',os:'Sistem Pengendalian',screen:'Skrin',translate:'Penterjemah',code:'Pengekod',law:'Undang-undang',chat:'Pembantu',geo:'Geografi',runBtn:'Jalankan ▶',toolTitle:{'translate':'Penterjemah AI','code':'Pengekod Pintar','law':'Penasihat Undang-undang','chat':'Chatbot','geo':'Ahli Geografi'},placeholder:{'translate':'Masukkan teks untuk diterjemahkan...','code':'Masukkan kod atau masalah...','law':'Tulis soalan undang-undang anda...','chat':'Tanya apa sahaja...','geo':'Tanya soalan geografi...'},aiName:'Pembantu AI',aiStatus:'Dalam Talian',aiPlaceholder:'Taip mesej...',aiWelcome:'Helo! Saya pembantu AI LuoLaf Studio. Bagaimana saya boleh membantu anda? 😊',footerLeft:'Panel Pintar — v1.0',load:'Memuatkan...'},
  hi:{dir:'ltr',font:'Inter',ip:'IP पता',speed:'इंटरनेट गति',uid:'उपयोगकर्ता ID',browser:'ब्राउज़र',os:'ऑपरेटिंग सिस्टम',screen:'स्क्रीन',translate:'अनुवादक',code:'कोडर',law:'कानूनी',chat:'सहायक',geo:'भूगोल',runBtn:'चलाएं ▶',toolTitle:{'translate':'AI अनुवादक','code':'स्मार्ट कोडर','law':'कानूनी सलाहकार','chat':'चैटबॉट','geo':'भूगोलवेत्ता'},placeholder:{'translate':'अनुवाद के लिए टेक्स्ट दर्ज करें...','code':'कोड या समस्या दर्ज करें...','law':'अपना कानूनी प्रश्न लिखें...','chat':'कुछ भी पूछें...','geo':'भूगोल प्रश्न पूछें...'},aiName:'AI सहायक',aiStatus:'ऑनलाइन',aiPlaceholder:'संदेश टाइप करें...',aiWelcome:'नमस्ते! मैं LuoLaf Studio का AI सहायक हूं। मैं आपकी कैसे मदद कर सकता हूं? 😊',footerLeft:'स्मार्ट पैनल — v1.0',load:'लोड हो रहा है...'}
};

let curLang='fa',curTool='translate',isDark=false;

window.setLang = function(l) {
  curLang=l;
  const t=T[l];
  const isRtl=t.dir==='rtl';
  document.getElementById('panel').style.direction=t.dir;
  document.getElementById('panel').style.fontFamily=t.font+',sans-serif';
  ['l-ip','l-speed','l-uid','l-browser','l-os','l-screen'].forEach((id,i)=>{
    const keys=['ip','speed','uid','browser','os','screen'];
    document.getElementById(id).textContent=t[keys[i]];
  });
  ['translate','code','law','chat','geo'].forEach(k=>{
    document.getElementById('tl-'+k).textContent=t[k];
  });
  document.getElementById('runBtn').textContent=t.runBtn;
  document.getElementById('tool-name-main').textContent=t.toolTitle[curTool];
  document.getElementById('toolInput').placeholder=t.placeholder[curTool];
  document.getElementById('ai-name-txt').textContent=t.aiName;
  document.getElementById('ai-status-txt').textContent=t.aiStatus;
  document.getElementById('ai-input').placeholder=t.aiPlaceholder;
  document.getElementById('ai-welcome').textContent=t.aiWelcome;
  document.getElementById('footerLeft').textContent=t.footerLeft;
  document.getElementById('loadText').textContent=t.load;
  const d=document.getElementById('tool-lang-sel');
  if(curTool==='translate')d.style.display='block'; else d.style.display='none';
};

window.toggleDark = function() {
  isDark=!isDark;
  document.body.classList.toggle('dark',isDark);
  document.querySelector('.btn-icon').textContent=isDark?'☀️':'🌙';
  if (typeof window.drawClouds === 'function') drawClouds();
};

window.showTool = function(t) {
  curTool = t;
  const langData = T[curLang];
  document.getElementById('tool-name-main').textContent = langData.toolTitle[t];
  document.getElementById('toolInput').placeholder = langData.placeholder[t];
  
  const d = document.getElementById('tool-lang-sel');
  if(t === 'translate') d.style.display = 'block'; 
  else d.style.display = 'none';

  const buttons = document.querySelectorAll('.tool-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  const activeBtnId = 'btn-' + t;
  const activeBtn = document.getElementById(activeBtnId);
  if(activeBtn) activeBtn.classList.add('active');

  const icons = {
    translate: '🌐',
    code: '💻',
    law: '⚖️',
    chat: '💬',
    geo: '🗺️'
  };
  document.getElementById('tool-icon-main').textContent = icons[t] || '🌐';
};

// مخفی کردن صفحه لودینگ اولیه پس از بارگذاری کامل
window.addEventListener('load', () => {
  const loader = document.getElementById('loading-overlay');
  if(loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 500);
  }
});