const WORKER_URL = 'https://orite-hub-tools-ai.amiralitanaomi2015.workers.dev';

function initAITools() {
    const existing = document.getElementById('orite-ai-tools-panel');
    if (existing) existing.remove();

    const dict = {
        fa: { dir: 'rtl', font: 'Vazirmatn', title: 'ابزارهای هوش مصنوعی', close: '✖', tabs: { translate: '🌐 ترجمه‌گر', code: '💻 کد نویس', law: '⚖️ حقوق‌دان', chat: '💬 دستیار', geo: '🗺️ جغرافیا' }, run: 'اجرا ▶', aiName: 'دستیار هوشمند Orite', aiStatus: 'آنلاین', aiPlaceholder: 'پیام بنویسید...', aiWelcome: 'سلام! چطور می‌توانم کمک کنم؟ 😊', placeholder: { translate: 'متن برای ترجمه...', code: 'مشکل یا کد خود را بنویسید...', law: 'سوال حقوقی خود را بنویسید...', chat: 'سوال خود را بنویسید...', geo: 'سوال جغرافیایی...' }, fromLangs: ['تشخیص خودکار','فارسی','انگلیسی','عربی','ترکی','فرانسوی','آلمانی','اسپانیایی','چینی','ژاپنی','روسی'], toLangs: ['انگلیسی','فارسی','عربی','ترکی','فرانسوی','آلمانی','اسپانیایی','چینی','ژاپنی','روسی'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['ایران','بین‌المللی','آمریکا','اروپا','ترکیه'] },
        en: { dir: 'ltr', font: 'Inter', title: 'AI Tools', close: '✖', tabs: { translate: '🌐 Translator', code: '💻 Coder', law: '⚖️ Legal', chat: '💬 Assistant', geo: '🗺️ Geography' }, run: 'Run ▶', aiName: 'Orite AI Assistant', aiStatus: 'Online', aiPlaceholder: 'Type a message...', aiWelcome: 'Hello! How can I help you? 😊', placeholder: { translate: 'Text to translate...', code: 'Describe your coding problem...', law: 'Write your legal question...', chat: 'Ask anything...', geo: 'Ask a geography question...' }, fromLangs: ['Auto Detect','Persian','English','Arabic','Turkish','French','German','Spanish','Chinese','Japanese','Russian'], toLangs: ['English','Persian','Arabic','Turkish','French','German','Spanish','Chinese','Japanese','Russian'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['Iran','International','USA','Europe','Turkey'] },
        ar: { dir: 'rtl', font: 'Tahoma', title: 'أدوات الذكاء الاصطناعي', close: '✖', tabs: { translate: '🌐 مترجم', code: '💻 مبرمج', law: '⚖️ محامي', chat: '💬 مساعد', geo: '🗺️ جغرافيا' }, run: 'تشغيل ▶', aiName: 'مساعد Orite الذكي', aiStatus: 'متصل', aiPlaceholder: 'اكتب رسالة...', aiWelcome: 'مرحباً! كيف يمكنني مساعدتك؟ 😊', placeholder: { translate: 'نص للترجمة...', code: 'اكتب مشكلتك البرمجية...', law: 'اكتب سؤالك القانوني...', chat: 'اسأل أي شيء...', geo: 'سؤال جغرافي...' }, fromLangs: ['تلقائي','العربية','الإنجليزية','الفارسية','التركية','الفرنسية','الألمانية','الإسبانية','الصينية','اليابانية','الروسية'], toLangs: ['الإنجليزية','العربية','الفارسية','التركية','الفرنسية','الألمانية','الإسبانية','الصينية','اليابانية','الروسية'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['إيران','دولي','أمريكا','أوروبا','تركيا'] },
        tr: { dir: 'ltr', font: 'Tahoma', title: 'Yapay Zeka Araçları', close: '✖', tabs: { translate: '🌐 Çevirmen', code: '💻 Kodlayıcı', law: '⚖️ Hukuk', chat: '💬 Asistan', geo: '🗺️ Coğrafya' }, run: 'Çalıştır ▶', aiName: 'Orite AI Asistanı', aiStatus: 'Çevrimiçi', aiPlaceholder: 'Mesaj yazın...', aiWelcome: 'Merhaba! Size nasıl yardımcı olabilirim? 😊', placeholder: { translate: 'Çevrilecek metin...', code: 'Kodlama probleminizi yazın...', law: 'Hukuki sorunuzu yazın...', chat: 'Herhangi bir şey sorun...', geo: 'Coğrafya sorusu...' }, fromLangs: ['Otomatik','Türkçe','İngilizce','Farsça','Arapça','Fransızca','Almanca','İspanyolca','Çince','Japonca','Rusça'], toLangs: ['İngilizce','Türkçe','Farsça','Arapça','Fransızca','Almanca','İspanyolca','Çince','Japonca','Rusça'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['İran','Uluslararası','ABD','Avrupa','Türkiye'] },
        fr: { dir: 'ltr', font: 'Tahoma', title: 'Outils IA', close: '✖', tabs: { translate: '🌐 Traducteur', code: '💻 Codeur', law: '⚖️ Juridique', chat: '💬 Assistant', geo: '🗺️ Géographie' }, run: 'Exécuter ▶', aiName: 'Assistant IA Orite', aiStatus: 'En ligne', aiPlaceholder: 'Tapez un message...', aiWelcome: 'Bonjour! Comment puis-je vous aider? 😊', placeholder: { translate: 'Texte à traduire...', code: 'Décrivez votre problème...', law: 'Votre question juridique...', chat: 'Posez une question...', geo: 'Question géographique...' }, fromLangs: ['Auto','Français','Anglais','Persan','Arabe','Turc','Allemand','Espagnol','Chinois','Japonais','Russe'], toLangs: ['Anglais','Français','Persan','Arabe','Turc','Allemand','Espagnol','Chinois','Japonais','Russe'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['Iran','International','USA','Europe','Turquie'] },
        ru: { dir: 'ltr', font: 'Tahoma', title: 'Инструменты ИИ', close: '✖', tabs: { translate: '🌐 Переводчик', code: '💻 Программист', law: '⚖️ Юрист', chat: '💬 Ассистент', geo: '🗺️ География' }, run: 'Запустить ▶', aiName: 'ИИ-ассистент Orite', aiStatus: 'Онлайн', aiPlaceholder: 'Введите сообщение...', aiWelcome: 'Привет! Чем могу помочь? 😊', placeholder: { translate: 'Текст для перевода...', code: 'Опишите задачу...', law: 'Ваш юридический вопрос...', chat: 'Задайте вопрос...', geo: 'Географический вопрос...' }, fromLangs: ['Авто','Русский','Английский','Персидский','Арабский','Турецкий','Французский','Немецкий','Испанский','Китайский','Японский'], toLangs: ['Английский','Русский','Персидский','Арабский','Турецкий','Французский','Немецкий','Испанский','Китайский','Японский'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['Иран','Международный','США','Европа','Турция'] },
        zh: { dir: 'ltr', font: 'Tahoma', title: 'AI工具', close: '✖', tabs: { translate: '🌐 翻译', code: '💻 编程', law: '⚖️ 法律', chat: '💬 助手', geo: '🗺️ 地理' }, run: '运行 ▶', aiName: 'Orite AI助手', aiStatus: '在线', aiPlaceholder: '输入消息...', aiWelcome: '你好！有什么可以帮您？😊', placeholder: { translate: '输入要翻译的文本...', code: '描述您的编程问题...', law: '写下您的法律问题...', chat: '问任何问题...', geo: '地理问题...' }, fromLangs: ['自动','中文','英语','波斯语','阿拉伯语','土耳其语','法语','德语','西班牙语','日语','俄语'], toLangs: ['英语','中文','波斯语','阿拉伯语','土耳其语','法语','德语','西班牙语','日语','俄语'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['伊朗','国际','美国','欧洲','土耳其'] },
        ja: { dir: 'ltr', font: 'Tahoma', title: 'AIツール', close: '✖', tabs: { translate: '🌐 翻訳', code: '💻 コーダー', law: '⚖️ 法律', chat: '💬 アシスタント', geo: '🗺️ 地理' }, run: '実行 ▶', aiName: 'Orite AIアシスタント', aiStatus: 'オンライン', aiPlaceholder: 'メッセージを入力...', aiWelcome: 'こんにちは！何かお手伝いできますか？😊', placeholder: { translate: '翻訳するテキスト...', code: 'コーディングの問題を説明...', law: '法律の質問を書いてください...', chat: '何でも聞いてください...', geo: '地理の質問...' }, fromLangs: ['自動','日本語','英語','ペルシャ語','アラビア語','トルコ語','フランス語','ドイツ語','スペイン語','中国語','ロシア語'], toLangs: ['英語','日本語','ペルシャ語','アラビア語','トルコ語','フランス語','ドイツ語','スペイン語','中国語','ロシア語'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['イラン','国際','アメリカ','ヨーロッパ','トルコ'] },
        ko: { dir: 'ltr', font: 'Tahoma', title: 'AI 도구', close: '✖', tabs: { translate: '🌐 번역기', code: '💻 코딩', law: '⚖️ 법률', chat: '💬 어시스턴트', geo: '🗺️ 지리' }, run: '실행 ▶', aiName: 'Orite AI 어시스턴트', aiStatus: '온라인', aiPlaceholder: '메시지 입력...', aiWelcome: '안녕하세요! 어떻게 도와드릴까요? 😊', placeholder: { translate: '번역할 텍스트...', code: '코딩 문제를 설명하세요...', law: '법률 질문을 입력하세요...', chat: '무엇이든 물어보세요...', geo: '지리 질문...' }, fromLangs: ['자동','한국어','영어','페르시아어','아랍어','터키어','프랑스어','독일어','스페인어','중국어','일본어'], toLangs: ['영어','한국어','페르시아어','아랍어','터키어','프랑스어','독일어','스페인어','중국어','일본어'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['이란','국제','미국','유럽','터키'] },
        es: { dir: 'ltr', font: 'Tahoma', title: 'Herramientas IA', close: '✖', tabs: { translate: '🌐 Traductor', code: '💻 Programador', law: '⚖️ Legal', chat: '💬 Asistente', geo: '🗺️ Geografía' }, run: 'Ejecutar ▶', aiName: 'Asistente IA Orite', aiStatus: 'En línea', aiPlaceholder: 'Escriba un mensaje...', aiWelcome: '¡Hola! ¿Cómo puedo ayudarle? 😊', placeholder: { translate: 'Texto a traducir...', code: 'Describa su problema...', law: 'Su pregunta legal...', chat: 'Pregunte algo...', geo: 'Pregunta geográfica...' }, fromLangs: ['Auto','Español','Inglés','Persa','Árabe','Turco','Francés','Alemán','Chino','Japonés','Ruso'], toLangs: ['Inglés','Español','Persa','Árabe','Turco','Francés','Alemán','Chino','Japonés','Ruso'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['Irán','Internacional','EE.UU.','Europa','Turquía'] },
        it: { dir: 'ltr', font: 'Tahoma', title: 'Strumenti IA', close: '✖', tabs: { translate: '🌐 Traduttore', code: '💻 Programmatore', law: '⚖️ Legale', chat: '💬 Assistente', geo: '🗺️ Geografia' }, run: 'Esegui ▶', aiName: 'Assistente IA Orite', aiStatus: 'Online', aiPlaceholder: 'Digita un messaggio...', aiWelcome: 'Ciao! Come posso aiutarti? 😊', placeholder: { translate: 'Testo da tradurre...', code: 'Descrivi il tuo problema...', law: 'La tua domanda legale...', chat: 'Chiedi qualcosa...', geo: 'Domanda geografica...' }, fromLangs: ['Auto','Italiano','Inglese','Persiano','Arabo','Turco','Francese','Tedesco','Spagnolo','Cinese','Giapponese'], toLangs: ['Inglese','Italiano','Persiano','Arabo','Turco','Francese','Tedesco','Spagnolo','Cinese','Giapponese'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['Iran','Internazionale','USA','Europa','Turchia'] },
        he: { dir: 'rtl', font: 'Tahoma', title: 'כלי בינה מלאכותית', close: '✖', tabs: { translate: '🌐 מתרגם', code: '💻 מתכנת', law: '⚖️ משפטי', chat: '💬 עוזר', geo: '🗺️ גיאוגרפיה' }, run: 'הפעל ▶', aiName: 'עוזר AI של Orite', aiStatus: 'מקוון', aiPlaceholder: 'הקלד הודעה...', aiWelcome: 'שלום! איך אוכל לעזור לך? 😊', placeholder: { translate: 'טקסט לתרגום...', code: 'תאר את הבעיה שלך...', law: 'שאלתך המשפטית...', chat: 'שאל משהו...', geo: 'שאלה גיאוגרפית...' }, fromLangs: ['אוטו','עברית','אנגלית','פרסית','ערבית','טורקית','צרפתית','גרמנית','ספרדית','סינית','יפנית'], toLangs: ['אנגלית','עברית','פרסית','ערבית','טורקית','צרפתית','גרמנית','ספרדית','סינית','יפנית'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['איראן','בינלאומי','ארה"ב','אירופה','טורקיה'] },
        tg: { dir: 'ltr', font: 'Tahoma', title: 'Абзорҳои AI', close: '✖', tabs: { translate: '🌐 Тарҷумон', code: '💻 Барномасоз', law: '⚖️ Ҳуқуқшинос', chat: '💬 Ёрдамчи', geo: '🗺️ Ҷуғрофиё' }, run: 'Иҷро ▶', aiName: 'Ёрдамчии AI-и Orite', aiStatus: 'Онлайн', aiPlaceholder: 'Паём нависед...', aiWelcome: 'Салом! Чӣ тавр метавонам кӯмак кунам? 😊', placeholder: { translate: 'Матн барои тарҷума...', code: 'Мушкилатро тавсиф кунед...', law: 'Савол ҳуқуқии шумо...', chat: 'Ҳар чизеро бипурсед...', geo: 'Савол ҷуғрофиявӣ...' }, fromLangs: ['Авто','Тоҷикӣ','Англисӣ','Форсӣ','Арабӣ','Туркӣ','Фаронсавӣ','Олмонӣ','Испанӣ','Чинӣ','Русӣ'], toLangs: ['Англисӣ','Тоҷикӣ','Форсӣ','Арабӣ','Туркӣ','Фаронсавӣ','Олмонӣ','Испанӣ','Чинӣ','Русӣ'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['Эрон','Байналмилал','ИМА','Аврупо','Туркия'] },
        ms: { dir: 'ltr', font: 'Tahoma', title: 'Alat AI', close: '✖', tabs: { translate: '🌐 Penterjemah', code: '💻 Pengekod', law: '⚖️ Undang-undang', chat: '💬 Pembantu', geo: '🗺️ Geografi' }, run: 'Jalankan ▶', aiName: 'Pembantu AI Orite', aiStatus: 'Dalam Talian', aiPlaceholder: 'Taip mesej...', aiWelcome: 'Helo! Bagaimana saya boleh membantu? 😊', placeholder: { translate: 'Teks untuk diterjemahkan...', code: 'Huraikan masalah anda...', law: 'Soalan undang-undang anda...', chat: 'Tanya apa sahaja...', geo: 'Soalan geografi...' }, fromLangs: ['Auto','Melayu','Inggeris','Parsi','Arab','Turki','Perancis','Jerman','Sepanyol','Cina','Jepun'], toLangs: ['Inggeris','Melayu','Parsi','Arab','Turki','Perancis','Jerman','Sepanyol','Cina','Jepun'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['Iran','Antarabangsa','AS','Eropah','Turki'] },
        hr: { dir: 'ltr', font: 'Tahoma', title: 'AI alati', close: '✖', tabs: { translate: '🌐 Prevoditelj', code: '💻 Programer', law: '⚖️ Pravni', chat: '💬 Pomoćnik', geo: '🗺️ Geografija' }, run: 'Pokreni ▶', aiName: 'Orite AI Pomoćnik', aiStatus: 'Online', aiPlaceholder: 'Upišite poruku...', aiWelcome: 'Pozdrav! Kako vam mogu pomoći? 😊', placeholder: { translate: 'Tekst za prijevod...', code: 'Opišite vaš problem...', law: 'Vaše pravno pitanje...', chat: 'Pitajte nešto...', geo: 'Geografsko pitanje...' }, fromLangs: ['Auto','Hrvatski','Engleski','Perzijski','Arapski','Turski','Francuski','Njemački','Španjolski','Kineski','Japanski'], toLangs: ['Engleski','Hrvatski','Perzijski','Arapski','Turski','Francuski','Njemački','Španjolski','Kineski','Japanski'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['Iran','Međunarodni','SAD','Europa','Turska'] },
        ku: { dir: 'rtl', font: 'Tahoma', title: 'Amûrên AI-ê', close: '✖', tabs: { translate: '🌐 وەرگێڕ', code: '💻 کۆدنووس', law: '⚖️ یاسادان', chat: '💬 یاریدەدەر', geo: '🗺️ جوگرافیا' }, run: 'جێبەجێبکە ▶', aiName: 'یاریدەرە زیرەکی Orite', aiStatus: 'ئەینلاین', aiPlaceholder: 'نامە بنووسە...', aiWelcome: 'سڵاو! چۆن دەتوانم یارمەتیت بدەم؟ 😊', placeholder: { translate: 'دەق بۆ وەرگێڕان...', code: 'کێشەکەت شی بکەرەوە...', law: 'پرسیاری یاسایییەکەت بنووسە...', chat: 'هەرشتێک بپرسە...', geo: 'پرسیاری جوگرافیایی...' }, fromLangs: ['ئۆتۆ','کوردی','ئینگلیزی','فارسی','عەرەبی','تورکی','فەرەنسی','ئەڵمانی','ئیسپانی','چینی','ژاپۆنی'], toLangs: ['ئینگلیزی','کوردی','فارسی','عەرەبی','تورکی','فەرەنسی','ئەڵمانی','ئیسپانی','چینی','ژاپۆنی'], codeLangs: ['Python','JavaScript','TypeScript','React','HTML/CSS','Java','C++','Go','Rust','PHP'], lawRegions: ['ئێران','نێودەوڵەتی','ئەمریکا','ئەوروپا','تورکیا'] }
    };

    let curLang = 'fa';
    let curTool = 'translate';
    let aiHistory = [];

    // تشخیص زبان فعلی هاب
    const hubLangEl = document.getElementById('orite-hub-lang');
    if (hubLangEl && dict[hubLangEl.value]) curLang = hubLangEl.value;

    const style = document.createElement('style');
    style.id = 'orite-ai-tools-style';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap');
        #orite-ai-tools-panel { animation: oriteAIFadeIn 0.4s cubic-bezier(0.4,0,0.2,1); }
        @keyframes oriteAIFadeIn { from { opacity:0; transform:translateY(16px) scale(0.97); } to { opacity:1; transform:translateY(0) scale(1); } }
        .orite-ai-tab-btn.active { background: linear-gradient(135deg,#5b6af0,#7c3aed) !important; color:#fff !important; border-color:transparent !important; box-shadow:0 4px 14px rgba(91,106,240,0.35) !important; }
        .orite-ai-tab-btn:hover:not(.active) { border-color:#5b6af0 !important; color:#5b6af0 !important; }
        .orite-ai-run-btn:hover { transform:translateY(-2px) !important; box-shadow:0 8px 24px rgba(91,106,240,0.4) !important; }
        .orite-ai-run-btn:disabled { opacity:0.6 !important; cursor:not-allowed !important; transform:none !important; }
        .orite-ai-textarea:focus { border-color:#5b6af0 !important; box-shadow:0 0 0 3px rgba(91,106,240,0.15) !important; }
        .orite-ai-select:focus { border-color:#5b6af0 !important; }
        .orite-msg-in { animation: oriteMsgIn 0.3s ease; }
        @keyframes oriteMsgIn { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }
        .orite-dots span { animation: oriteDot 1.2s ease-in-out infinite; }
        .orite-dots span:nth-child(2){animation-delay:0.15s}
        .orite-dots span:nth-child(3){animation-delay:0.3s}
        @keyframes oriteDot{0%,80%,100%{opacity:0.3;transform:scale(0.7)}40%{opacity:1;transform:scale(1)}}
        #orite-ai-tools-panel::-webkit-scrollbar{width:5px}
        #orite-ai-tools-panel::-webkit-scrollbar-thumb{background:rgba(91,106,240,0.3);border-radius:6px}
        #orite-ai-msgs::-webkit-scrollbar{width:4px}
        #orite-ai-msgs::-webkit-scrollbar-thumb{background:rgba(91,106,240,0.2);border-radius:4px}
    `;
    document.head.appendChild(style);

    const panel = document.createElement('div');
    panel.id = 'orite-ai-tools-panel';

    function getD() { return dict[curLang] || dict['fa']; }
    function isRTL() { return getD().dir === 'rtl'; }

    function renderPanel() {
        const d = getD();
        const rtl = isRTL();
        panel.style.cssText = `
            background:#f8f9ff;
            border:1px solid rgba(91,106,240,0.2);
            border-radius:18px;
            padding:18px;
            margin-top:14px;
            font-family:'${d.font}',Tahoma,Arial,sans-serif;
            direction:${d.dir};
            color:#1a1a2e;
            max-height:700px;
            overflow-y:auto;
        `;

        panel.innerHTML = `
            <!-- HEADER -->
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid rgba(91,106,240,0.15);">
                <div style="display:flex;align-items:center;gap:8px;">
                    <div style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#5b6af0,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:17px;box-shadow:0 4px 12px rgba(91,106,240,0.3);">🤖</div>
                    <div>
                        <div style="font-size:15px;font-weight:700;color:#1a1a2e;">${d.title}</div>
                        <div style="font-size:10px;color:#9090b0;">LuoLaf Studio — Orite</div>
                    </div>
                </div>
                <div style="display:flex;align-items:center;gap:6px;">
                    <select id="orite-ai-lang-sel" class="orite-ai-select" style="background:#fff;border:1px solid rgba(91,106,240,0.25);border-radius:8px;padding:5px 8px;font-size:11px;color:#4a4a6a;cursor:pointer;outline:none;">
                        ${Object.keys(dict).map(l=>`<option value="${l}" ${l===curLang?'selected':''}>${l.toUpperCase()}</option>`).join('')}
                    </select>
                    <button id="orite-ai-close" style="width:30px;height:30px;border-radius:8px;background:#f0f0f8;border:1px solid rgba(91,106,240,0.15);cursor:pointer;font-size:13px;color:#6b6b9a;font-weight:bold;display:flex;align-items:center;justify-content:center;">✖</button>
                </div>
            </div>

            <!-- TOOL TABS -->
            <div style="display:flex;gap:6px;margin-bottom:14px;overflow-x:auto;padding-bottom:2px;flex-wrap:wrap;">
                ${['translate','code','law','chat','geo'].map(t=>`
                    <button class="orite-ai-tab-btn ${t===curTool?'active':''}" data-tool="${t}" style="padding:7px 13px;border-radius:10px;background:#fff;border:1px solid rgba(91,106,240,0.2);color:#4a4a6a;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.25s;white-space:nowrap;font-family:'${d.font}',Tahoma,Arial,sans-serif;">
                        ${d.tabs[t]}
                    </button>
                `).join('')}
            </div>

            <!-- MAIN GRID -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">

                <!-- TOOL AREA -->
                <div id="orite-ai-tool-area" style="background:#fff;border:1px solid rgba(91,106,240,0.15);border-radius:14px;padding:16px;min-height:280px;">
                    <!-- content rendered by renderToolArea() -->
                </div>

                <!-- AI CHAT -->
                <div style="background:#fff;border:1px solid rgba(91,106,240,0.2);border-radius:14px;overflow:hidden;display:flex;flex-direction:column;">
                    <div style="padding:12px 14px;background:linear-gradient(135deg,#5b6af0,#7c3aed);display:flex;align-items:center;gap:8px;">
                        <div style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:17px;">🤖</div>
                        <div>
                            <div id="orite-ai-chat-name" style="color:#fff;font-weight:600;font-size:13px;">${d.aiName}</div>
                            <div style="font-size:10px;color:rgba(255,255,255,0.75);">${d.aiStatus}</div>
                        </div>
                        <div style="width:8px;height:8px;border-radius:50%;background:#4ade80;margin-${rtl?'right':'left'}:auto;box-shadow:0 0 0 3px rgba(74,222,128,0.3);"></div>
                    </div>
                    <div id="orite-ai-msgs" style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;min-height:180px;max-height:240px;">
                        <div class="orite-msg-in" style="max-width:88%;padding:9px 12px;border-radius:12px;font-size:12px;line-height:1.6;background:#f4f6ff;border:1px solid rgba(91,106,240,0.12);color:#1a1a2e;align-self:${rtl?'flex-end':'flex-start'};border-bottom-${rtl?'right':'left'}-radius:3px;">
                            ${d.aiWelcome}
                        </div>
                    </div>
                    <div style="display:flex;gap:6px;padding:10px;border-top:1px solid rgba(91,106,240,0.1);">
                        <input type="text" id="orite-ai-chat-inp" placeholder="${d.aiPlaceholder}" style="flex:1;background:#f4f6ff;border:1px solid rgba(91,106,240,0.2);border-radius:10px;padding:8px 12px;font-size:12px;color:#1a1a2e;outline:none;font-family:'${d.font}',Tahoma,Arial,sans-serif;" />
                        <button id="orite-ai-chat-send" style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#5b6af0,#7c3aed);color:#fff;border:none;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all 0.2s;">➤</button>
                    </div>
                </div>

            </div>

            <!-- FOOTER -->
            <div style="margin-top:12px;padding-top:10px;border-top:1px solid rgba(91,106,240,0.1);display:flex;align-items:center;justify-content:space-between;">
                <div style="font-size:10px;color:#9090b0;">مدیر پروژه: LuoLaf.Studio</div>
                <div style="font-size:10px;color:#9090b0;">© 2025 Orite AI Tools v2.0</div>
            </div>
        `;

        renderToolArea();
        bindEvents();
    }

    function renderToolArea() {
        const d = getD();
        const area = document.getElementById('orite-ai-tool-area');
        if (!area) return;
        const icons = { translate:'🌐', code:'💻', law:'⚖️', chat:'💬', geo:'🗺️' };
        const titles = { translate: d.tabs.translate, code: d.tabs.code, law: d.tabs.law, chat: d.tabs.chat, geo: d.tabs.geo };

        let extra = '';
        if (curTool === 'translate') {
            extra = `
                <div style="display:flex;gap:6px;align-items:center;margin-bottom:8px;">
                    <select id="orite-from-lang" class="orite-ai-select" style="flex:1;background:#f8f9ff;border:1px solid rgba(91,106,240,0.2);border-radius:8px;padding:6px 8px;font-size:11px;color:#4a4a6a;outline:none;font-family:'${d.font}',Tahoma,Arial,sans-serif;">
                        ${d.fromLangs.map(l=>`<option>${l}</option>`).join('')}
                    </select>
                    <button id="orite-swap-lang" style="width:30px;height:30px;border-radius:8px;background:#f0f0f8;border:1px solid rgba(91,106,240,0.2);cursor:pointer;font-size:14px;color:#5b6af0;">⇄</button>
                    <select id="orite-to-lang" class="orite-ai-select" style="flex:1;background:#f8f9ff;border:1px solid rgba(91,106,240,0.2);border-radius:8px;padding:6px 8px;font-size:11px;color:#4a4a6a;outline:none;font-family:'${d.font}',Tahoma,Arial,sans-serif;">
                        ${d.toLangs.map(l=>`<option>${l}</option>`).join('')}
                    </select>
                </div>`;
        } else if (curTool === 'code') {
            extra = `<select id="orite-code-lang" class="orite-ai-select" style="width:100%;background:#f8f9ff;border:1px solid rgba(91,106,240,0.2);border-radius:8px;padding:6px 10px;font-size:11px;color:#4a4a6a;outline:none;margin-bottom:8px;">
                ${d.codeLangs.map(l=>`<option>${l}</option>`).join('')}
            </select>`;
        } else if (curTool === 'law') {
            extra = `<select id="orite-law-region" class="orite-ai-select" style="width:100%;background:#f8f9ff;border:1px solid rgba(91,106,240,0.2);border-radius:8px;padding:6px 10px;font-size:11px;color:#4a4a6a;outline:none;margin-bottom:8px;">
                ${d.lawRegions.map(l=>`<option>${l}</option>`).join('')}
            </select>`;
        }

        const isCodeTool = curTool === 'code';
        area.innerHTML = `
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid rgba(91,106,240,0.1);">
                <div style="width:32px;height:32px;border-radius:9px;background:linear-gradient(135deg,rgba(91,106,240,0.1),rgba(124,58,237,0.1));border:1px solid rgba(91,106,240,0.2);display:flex;align-items:center;justify-content:center;font-size:17px;">${icons[curTool]}</div>
                <div style="font-size:13px;font-weight:600;color:#1a1a2e;">${titles[curTool]}</div>
            </div>
            ${extra}
            <textarea id="orite-ai-inp" class="orite-ai-textarea" placeholder="${d.placeholder[curTool]}" rows="5" style="width:100%;border-radius:10px;background:${isCodeTool?'#0d1117':'#f8f9ff'};border:1px solid rgba(91,106,240,0.2);color:${isCodeTool?'#c9d1d9':'#1a1a2e'};padding:10px 12px;font-size:${isCodeTool?'12':'13'}px;font-family:${isCodeTool?'monospace':'\''+d.font+'\',Tahoma,Arial,sans-serif'};resize:vertical;outline:none;transition:all 0.3s;line-height:1.6;box-sizing:border-box;"></textarea>
            <button id="orite-ai-run" class="orite-ai-run-btn" style="margin-top:10px;padding:10px 20px;background:linear-gradient(135deg,#5b6af0,#7c3aed);color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;transition:all 0.3s;font-family:'${d.font}',Tahoma,Arial,sans-serif;display:inline-flex;align-items:center;gap:6px;">${d.run}</button>
            <div id="orite-ai-result" style="margin-top:10px;padding:12px;background:${isCodeTool?'#0d1117':'#f4f6ff'};border:1px solid rgba(91,106,240,0.15);border-radius:10px;font-size:${isCodeTool?'12':'13'}px;color:${isCodeTool?'#c9d1d9':'#4a4a6a'};line-height:1.7;white-space:pre-wrap;word-break:break-word;max-height:200px;overflow-y:auto;display:none;font-family:${isCodeTool?'monospace':'\''+d.font+'\',Tahoma,Arial,sans-serif'};"></div>
        `;

        document.getElementById('orite-ai-run').onclick = runTool;
        const swapBtn = document.getElementById('orite-swap-lang');
        if (swapBtn) swapBtn.onclick = () => {
            const f = document.getElementById('orite-from-lang');
            const t = document.getElementById('orite-to-lang');
            const tmp = f.value; f.value = t.value; t.value = tmp;
        };
    }

    function bindEvents() {
        document.getElementById('orite-ai-close').onclick = () => {
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(10px)';
            setTimeout(() => panel.remove(), 300);
            const s = document.getElementById('orite-ai-tools-style');
            if (s) s.remove();
        };

        document.getElementById('orite-ai-lang-sel').onchange = (e) => {
            curLang = e.target.value;
            renderPanel();
        };

        panel.querySelectorAll('.orite-ai-tab-btn').forEach(btn => {
            btn.onclick = () => {
                curTool = btn.dataset.tool;
                panel.querySelectorAll('.orite-ai-tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderToolArea();
                document.getElementById('orite-ai-run').onclick = runTool;
                const swapBtn = document.getElementById('orite-swap-lang');
                if (swapBtn) swapBtn.onclick = () => {
                    const f = document.getElementById('orite-from-lang');
                    const t = document.getElementById('orite-to-lang');
                    const tmp = f.value; f.value = t.value; t.value = tmp;
                };
            };
        });

        const chatInp = document.getElementById('orite-ai-chat-inp');
        const chatSend = document.getElementById('orite-ai-chat-send');
        chatInp.onkeydown = (e) => { if (e.key === 'Enter') sendAI(); };
        chatSend.onclick = sendAI;
    }

    async function callWorker(body) {
        const r = await fetch(WORKER_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        if (!r.ok) throw new Error('Server error: ' + r.status);
        const d = await r.json();
        if (d.error) throw new Error(d.error.message || 'API Error');
        return d.content?.[0]?.text || '';
    }

    async function runTool() {
        const inp = document.getElementById('orite-ai-inp');
        const res = document.getElementById('orite-ai-result');
        const btn = document.getElementById('orite-ai-run');
        const text = inp ? inp.value.trim() : '';
        if (!text) return;

        btn.disabled = true;
        btn.innerHTML = '<span class="orite-dots" style="display:inline-flex;gap:3px;"><span style="width:5px;height:5px;border-radius:50%;background:#fff;display:inline-block;"></span><span style="width:5px;height:5px;border-radius:50%;background:#fff;display:inline-block;"></span><span style="width:5px;height:5px;border-radius:50%;background:#fff;display:inline-block;"></span></span>';
        res.style.display = 'none';

        const prompts = {
            translate: () => {
                const from = document.getElementById('orite-from-lang')?.value || 'auto';
                const to = document.getElementById('orite-to-lang')?.value || 'English';
                return {
                    system: 'You are a professional translator. Return ONLY the translation, nothing else.',
                    user: `Translate from ${from === 'auto' || from === 'تشخیص خودکار' || from === 'Auto Detect' || from === 'Otomatik' || from === 'Auto' || from === 'Авто' || from === 'ئۆتۆ' || from === '自动' || from === 'אוטו' ? 'detected language' : from} to ${to}:\n\n${text}`
                };
            },
            code: () => {
                const lang = document.getElementById('orite-code-lang')?.value || 'Python';
                return { system: `You are an expert ${lang} developer. Write clean, well-commented, production-ready code.`, user: text };
            },
            law: () => {
                const region = document.getElementById('orite-law-region')?.value || 'International';
                return { system: `You are a knowledgeable legal advisor for ${region} law. Provide clear, helpful legal information. Note: this is general information, not official legal advice. Respond in the same language as the user.`, user: text };
            },
            chat: () => ({
                system: 'You are a helpful, friendly AI assistant for Orite Hub by LuoLaf Studio. Be concise and helpful. Respond in the same language as the user.',
                user: text
            }),
            geo: () => ({
                system: 'You are an expert geographer and world knowledge assistant. Answer geography, climate, location, cultural and geopolitical questions accurately. Respond in the same language as the user.',
                user: text
            })
        };

        try {
            const p = prompts[curTool]();
            const result = await callWorker({ model: 'claude-sonnet-4-6', max_tokens: 1500, system: p.system, messages: [{ role: 'user', content: p.user }] });
            res.textContent = result;
            res.style.display = 'block';
            res.style.animation = 'oriteAIFadeIn 0.3s ease';
        } catch (e) {
            res.textContent = '⚠️ ' + e.message;
            res.style.display = 'block';
        }

        btn.disabled = false;
        btn.textContent = getD().run;
    }

    async function sendAI() {
        const inp = document.getElementById('orite-ai-chat-inp');
        const msg = inp ? inp.value.trim() : '';
        if (!msg) return;
        inp.value = '';
        const msgs = document.getElementById('orite-ai-msgs');
        const rtl = isRTL();

        const uDiv = document.createElement('div');
        uDiv.className = 'orite-msg-in';
        uDiv.style.cssText = `max-width:88%;padding:9px 12px;border-radius:12px;font-size:12px;line-height:1.6;background:linear-gradient(135deg,#5b6af0,#7c3aed);color:#fff;align-self:${rtl?'flex-start':'flex-end'};border-bottom-${rtl?'left':'right'}-radius:3px;`;
        uDiv.textContent = msg;
        msgs.appendChild(uDiv);
        aiHistory.push({ role: 'user', content: msg });

        const bDiv = document.createElement('div');
        bDiv.className = 'orite-msg-in';
        bDiv.style.cssText = `max-width:88%;padding:9px 12px;border-radius:12px;font-size:12px;line-height:1.6;background:#f4f6ff;border:1px solid rgba(91,106,240,0.12);color:#1a1a2e;align-self:${rtl?'flex-end':'flex-start'};border-bottom-${rtl?'right':'left'}-radius:3px;`;
        bDiv.innerHTML = '<span class="orite-dots" style="display:inline-flex;gap:3px;align-items:center;"><span style="width:5px;height:5px;border-radius:50%;background:#5b6af0;display:inline-block;"></span><span style="width:5px;height:5px;border-radius:50%;background:#5b6af0;display:inline-block;"></span><span style="width:5px;height:5px;border-radius:50%;background:#5b6af0;display:inline-block;"></span></span>';
        msgs.appendChild(bDiv);
        msgs.scrollTop = msgs.scrollHeight;

        try {
            const result = await callWorker({
                model: 'claude-sonnet-4-6', max_tokens: 1200,
                system: 'You are a helpful AI assistant for Orite Hub by LuoLaf Studio. Be friendly and concise. Respond in the same language as the user.',
                messages: aiHistory.slice(-12)
            });
            bDiv.textContent = result;
            aiHistory.push({ role: 'assistant', content: result });
        } catch (e) {
            bDiv.textContent = '⚠️ ' + e.message;
        }
        msgs.scrollTop = msgs.scrollHeight;
    }

    const hubPanel = document.getElementById('orite-smart-hub');
    if (hubPanel) {
        hubPanel.appendChild(panel);
    } else {
        document.body.appendChild(panel);
    }

    renderPanel();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAITools);
} else {
    initAITools();
}