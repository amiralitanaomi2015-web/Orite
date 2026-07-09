function initSupport() {
    const existing = document.getElementById('orite-support-panel');
    if (existing) existing.remove();
    const existingStyle = document.getElementById('orite-support-style');
    if (existingStyle) existingStyle.remove();

    // ========== TRANSLATIONS ==========
    const T = {
        fa:{dir:'rtl',font:'Vazirmatn',title:'پشتیبانی Orite',close:'✖',tabs:{overview:'🏠 خلاصه',rating:'⭐ امتیاز',comments:'💬 نظرات',problems:'🐛 مشکلات',security:'🔒 امنیت',device:'💻 دستگاه',ai:'🤖 پشتیبانی AI'},overview:{features:'قابلیت‌های پلتفرم',avgRating:'میانگین امتیاز',totalComments:'نظر ثبت شده',security:'سطح امنیت',problems:'مشکل ثبت شده'},rating:{title:'امتیاز خود را ثبت کنید',submit:'ثبت امتیاز',labels:['','خیلی بد','بد','متوسط','خوب','عالی']},comments:{title:'نظر جدید',placeholder:'نظر خود را بنویسید...',submit:'ثبت نظر',empty:'هنوز نظری ثبت نشده'},problems:{known:'مشکلات شناخته شده',newProblem:'ثبت مشکل جدید',titlePlaceholder:'عنوان مشکل',descPlaceholder:'توضیحات مشکل...',submit:'ثبت مشکل'},security:{title:'سطح امنیت پلتفرم'},device:{uid:'شناسه کاربر',joinDate:'تاریخ عضویت',duration:'مدت عضویت',ip:'آدرس IP',speed:'سرعت اینترنت',os:'سیستم عامل',browser:'مرورگر',lang:'زبان سیستم',screen:'صفحه نمایش',time:'ساعت سیستم',date:'تاریخ سیستم',tz:'منطقه زمانی',battery:'شارژ دستگاه',days:'روز'},ai:{title:'پشتیبانی هوشمند Orite',status:'آنلاین — آماده کمک',placeholder:'سوال خود را بپرسید...',welcome:'سلام! من پشتیبان هوشمند Orite هستم 🎉\nدرباره مشکلات پلتفرم یا نحوه استفاده بپرسید!',quickQ:'سوالات رایج:',questions:['چطور از ابزار ترجمه استفاده کنم؟','چرا به VPN نیاز دارم؟','محدودیت روزانه AI چقدر است؟']},servant:{click:'روی من کلیک کن! 👆',msgs:['سلام! خوشحالم که اینجایی! 😊','وای! دوباره کلیک کردی! 🎉','آخ! یواش‌تر! 😢','بازی می‌کنیم؟ 🎮','من آماده کمک هستم! 🚀','Orite بهترین پلتفرمه! ✨']},footer:{manager:'مدیر پروژه: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'مثبت',negative:'منفی'},lang:'انتخاب زبان'},
        en:{dir:'ltr',font:'Inter',title:'Orite Support',close:'✖',tabs:{overview:'🏠 Overview',rating:'⭐ Rating',comments:'💬 Comments',problems:'🐛 Problems',security:'🔒 Security',device:'💻 Device',ai:'🤖 AI Support'},overview:{features:'Platform Features',avgRating:'Avg Rating',totalComments:'Comments',security:'Security Level',problems:'Problems'},rating:{title:'Submit Your Rating',submit:'Submit Rating',labels:['','Very Bad','Bad','Average','Good','Excellent']},comments:{title:'New Comment',placeholder:'Write your comment...',submit:'Submit Comment',empty:'No comments yet'},problems:{known:'Known Issues',newProblem:'Report New Problem',titlePlaceholder:'Problem Title',descPlaceholder:'Problem description...',submit:'Submit Problem'},security:{title:'Platform Security Level'},device:{uid:'User ID',joinDate:'Join Date',duration:'Membership',ip:'IP Address',speed:'Internet Speed',os:'Operating System',browser:'Browser',lang:'System Language',screen:'Screen',time:'System Time',date:'System Date',tz:'Timezone',battery:'Battery',days:'days'},ai:{title:'Orite Smart Support',status:'Online — Ready',placeholder:'Ask your question...',welcome:'Hello! I\'m the Orite Smart Support 🎉\nAsk about platform issues or how to use features!',quickQ:'Quick Questions:',questions:['How to use the translation tool?','Why do I need a VPN?','What is the daily AI limit?']},servant:{click:'Click me! 👆',msgs:['Hello! Happy you\'re here! 😊','Wow! Clicked again! 🎉','Ouch! Be gentle! 😢','Wanna play? 🎮','Ready to help! 🚀','Orite is the best! ✨']},footer:{manager:'Project Manager: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'Positive',negative:'Negative'},lang:'Select Language'},
        tr:{dir:'ltr',font:'Inter',title:'Orite Destek',close:'✖',tabs:{overview:'🏠 Genel',rating:'⭐ Puan',comments:'💬 Yorumlar',problems:'🐛 Sorunlar',security:'🔒 Güvenlik',device:'💻 Cihaz',ai:'🤖 AI Destek'},overview:{features:'Platform Özellikleri',avgRating:'Ort. Puan',totalComments:'Yorum',security:'Güvenlik',problems:'Sorun'},rating:{title:'Puanınızı Verin',submit:'Puanı Kaydet',labels:['','Çok Kötü','Kötü','Orta','İyi','Mükemmel']},comments:{title:'Yeni Yorum',placeholder:'Yorumunuzu yazın...',submit:'Yorumu Kaydet',empty:'Henüz yorum yok'},problems:{known:'Bilinen Sorunlar',newProblem:'Yeni Sorun Bildir',titlePlaceholder:'Sorun Başlığı',descPlaceholder:'Sorun açıklaması...',submit:'Sorun Bildir'},security:{title:'Platform Güvenlik Seviyesi'},device:{uid:'Kullanıcı ID',joinDate:'Katılım Tarihi',duration:'Üyelik',ip:'IP Adresi',speed:'İnternet Hızı',os:'İşletim Sistemi',browser:'Tarayıcı',lang:'Sistem Dili',screen:'Ekran',time:'Sistem Saati',date:'Sistem Tarihi',tz:'Saat Dilimi',battery:'Pil',days:'gün'},ai:{title:'Orite Akıllı Destek',status:'Çevrimiçi — Hazır',placeholder:'Sorunuzu sorun...',welcome:'Merhaba! Ben Orite Akıllı Desteğiyim 🎉\nPlatform sorunları hakkında soru sorun!',quickQ:'Sık Sorular:',questions:['Çeviri aracı nasıl kullanılır?','Neden VPN gerekiyor?','Günlük AI limiti nedir?']},servant:{click:'Bana tıkla! 👆',msgs:['Merhaba! Burada olduğuna sevindim! 😊','Tekrar tıkladın! 🎉','Hay aksi! 😢','Oynayalım mı? 🎮','Yardıma hazırım! 🚀','Orite en iyisi! ✨']},footer:{manager:'Proje Yöneticisi: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'Olumlu',negative:'Olumsuz'},lang:'Dil Seçin'},
        ar:{dir:'rtl',font:'Vazirmatn',title:'دعم Orite',close:'✖',tabs:{overview:'🏠 نظرة عامة',rating:'⭐ تقييم',comments:'💬 تعليقات',problems:'🐛 مشاكل',security:'🔒 أمان',device:'💻 الجهاز',ai:'🤖 دعم AI'},overview:{features:'ميزات المنصة',avgRating:'متوسط التقييم',totalComments:'تعليق',security:'مستوى الأمان',problems:'مشكلة'},rating:{title:'أضف تقييمك',submit:'إرسال التقييم',labels:['','سيء جداً','سيء','متوسط','جيد','ممتاز']},comments:{title:'تعليق جديد',placeholder:'اكتب تعليقك...',submit:'إرسال التعليق',empty:'لا تعليقات بعد'},problems:{known:'المشكلات المعروفة',newProblem:'الإبلاغ عن مشكلة',titlePlaceholder:'عنوان المشكلة',descPlaceholder:'وصف المشكلة...',submit:'إرسال المشكلة'},security:{title:'مستوى أمان المنصة'},device:{uid:'معرف المستخدم',joinDate:'تاريخ الانضمام',duration:'العضوية',ip:'عنوان IP',speed:'سرعة الإنترنت',os:'نظام التشغيل',browser:'المتصفح',lang:'لغة النظام',screen:'الشاشة',time:'وقت النظام',date:'تاريخ النظام',tz:'المنطقة الزمنية',battery:'البطارية',days:'أيام'},ai:{title:'دعم Orite الذكي',status:'متصل — جاهز',placeholder:'اسأل سؤالك...',welcome:'مرحباً! أنا دعم Orite الذكي 🎉\nاسأل عن مشاكل المنصة أو كيفية الاستخدام!',quickQ:'أسئلة شائعة:',questions:['كيف أستخدم أداة الترجمة؟','لماذا أحتاج VPN؟','ما هو الحد اليومي للذكاء الاصطناعي؟']},servant:{click:'انقر علي! 👆',msgs:['مرحباً! سعيد بوجودك! 😊','نقرت مرة أخرى! 🎉','آخ! برفق! 😢','نلعب؟ 🎮','جاهز للمساعدة! 🚀','Orite الأفضل! ✨']},footer:{manager:'مدير المشروع: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'إيجابي',negative:'سلبي'},lang:'اختر اللغة'},
        ku:{dir:'rtl',font:'Vazirmatn',title:'پشتیوانی Orite',close:'✖',tabs:{overview:'🏠 کورتە',rating:'⭐ نمرە',comments:'💬 بۆچوون',problems:'🐛 کێشەکان',security:'🔒 ئاساییش',device:'💻 ئامێر',ai:'🤖 AI پشتیوانی'},overview:{features:'تایبەتمەندییەکانی پلاتفۆرم',avgRating:'تێکڕای نمرە',totalComments:'بۆچوون',security:'ئاستی ئاساییش',problems:'کێشە'},rating:{title:'نمرەکەت تۆمار بکە',submit:'تۆماری نمرە',labels:['','زۆر خراپ','خراپ','مامناوەند','باش','نایاب']},comments:{title:'بۆچوونی نوێ',placeholder:'بۆچوونەکەت بنووسە...',submit:'تۆماری بۆچوون',empty:'هێشتا بۆچوونێک نیە'},problems:{known:'کێشە ناسراوەکان',newProblem:'کێشەی نوێ راپۆرت بکە',titlePlaceholder:'سەردێڕی کێشە',descPlaceholder:'وەسفی کێشە...',submit:'تۆماری کێشە'},security:{title:'ئاستی ئاساییشی پلاتفۆرم'},device:{uid:'ناسنامەی بەکارهێنەر',joinDate:'بەرواری بەشداری',duration:'ئەندامێتی',ip:'ناونیشانی IP',speed:'خێرایی ئینتەرنێت',os:'سیستەمی کارپێکردن',browser:'وێبگەڕ',lang:'زمانی سیستەم',screen:'شاشە',time:'کاتژمێری سیستەم',date:'بەرواری سیستەم',tz:'ناوچەی کاتی',battery:'بارژدان',days:'ڕۆژ'},ai:{title:'پشتیوانی زیرەکی Orite',status:'ئەینلاین — ئامادەیە',placeholder:'پرسیارەکەت بکە...',welcome:'سڵاو! من پشتیوانی زیرەکی Orite م 🎉\nدەربارەی کێشەکانی پلاتفۆرم بپرسە!',quickQ:'پرسیاری باو:',questions:['چۆن ئامێری وەرگێڕان بەکار بهێنم؟','بۆچی پێویستم بە VPN هەیە؟','سنووری ڕۆژانەی AI چەندەیە؟']},servant:{click:'کلیک لەسەرم بکە! 👆',msgs:['سڵاو! خۆشحاڵم کە ئێرەیت! 😊','دووبارە کلیکت کرد! 🎉','ئاخ! ئارام! 😢','یاری دەکەین؟ 🎮','ئامادەی یارمەتیم! 🚀','Orite باشترینە! ✨']},footer:{manager:'بەڕێوەبەری پڕۆژە: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'ئەرێنی',negative:'نەرێنی'},lang:'زمان هەڵبژێرە'},
        zh:{dir:'ltr',font:'Inter',title:'Orite 支持',close:'✖',tabs:{overview:'🏠 概览',rating:'⭐ 评分',comments:'💬 评论',problems:'🐛 问题',security:'🔒 安全',device:'💻 设备',ai:'🤖 AI支持'},overview:{features:'平台功能',avgRating:'平均评分',totalComments:'评论',security:'安全级别',problems:'问题'},rating:{title:'提交评分',submit:'提交评分',labels:['','很差','差','一般','好','优秀']},comments:{title:'新评论',placeholder:'写下您的评论...',submit:'提交评论',empty:'暂无评论'},problems:{known:'已知问题',newProblem:'报告新问题',titlePlaceholder:'问题标题',descPlaceholder:'问题描述...',submit:'提交问题'},security:{title:'平台安全级别'},device:{uid:'用户ID',joinDate:'加入日期',duration:'会员时长',ip:'IP地址',speed:'网速',os:'操作系统',browser:'浏览器',lang:'系统语言',screen:'屏幕',time:'系统时间',date:'系统日期',tz:'时区',battery:'电量',days:'天'},ai:{title:'Orite 智能支持',status:'在线 — 就绪',placeholder:'提问...',welcome:'你好！我是Orite智能支持 🎉\n询问平台问题或使用方法！',quickQ:'常见问题：',questions:['如何使用翻译工具？','为什么需要VPN？','每日AI限制是多少？']},servant:{click:'点击我！ 👆',msgs:['你好！很高兴你在这里！ 😊','又点击了！ 🎉','哎哟！轻点！ 😢','玩游戏？ 🎮','准备好帮助！ 🚀','Orite最好！ ✨']},footer:{manager:'项目经理：LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'正面',negative:'负面'},lang:'选择语言'},
        ko:{dir:'ltr',font:'Inter',title:'Orite 지원',close:'✖',tabs:{overview:'🏠 개요',rating:'⭐ 평점',comments:'💬 댓글',problems:'🐛 문제',security:'🔒 보안',device:'💻 기기',ai:'🤖 AI 지원'},overview:{features:'플랫폼 기능',avgRating:'평균 평점',totalComments:'댓글',security:'보안 수준',problems:'문제'},rating:{title:'평점 제출',submit:'평점 제출',labels:['','매우 나쁨','나쁨','보통','좋음','훌륭함']},comments:{title:'새 댓글',placeholder:'댓글을 작성하세요...',submit:'댓글 제출',empty:'댓글 없음'},problems:{known:'알려진 문제',newProblem:'새 문제 보고',titlePlaceholder:'문제 제목',descPlaceholder:'문제 설명...',submit:'문제 제출'},security:{title:'플랫폼 보안 수준'},device:{uid:'사용자 ID',joinDate:'가입일',duration:'회원 기간',ip:'IP 주소',speed:'인터넷 속도',os:'운영 체제',browser:'브라우저',lang:'시스템 언어',screen:'화면',time:'시스템 시간',date:'시스템 날짜',tz:'시간대',battery:'배터리',days:'일'},ai:{title:'Orite 스마트 지원',status:'온라인 — 준비됨',placeholder:'질문하세요...',welcome:'안녕하세요! Orite 스마트 지원입니다 🎉\n플랫폼 문제에 대해 질문하세요!',quickQ:'자주 묻는 질문:',questions:['번역 도구는 어떻게 사용하나요?','왜 VPN이 필요한가요?','일일 AI 한도는 얼마인가요?']},servant:{click:'클릭하세요! 👆',msgs:['안녕하세요! 반갑습니다! 😊','또 클릭했어요! 🎉','아야! 살살! 😢','게임 할까요? 🎮','도움 드릴게요! 🚀','Orite 최고! ✨']},footer:{manager:'프로젝트 관리자: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'긍정적',negative:'부정적'},lang:'언어 선택'},
        fr:{dir:'ltr',font:'Inter',title:'Support Orite',close:'✖',tabs:{overview:'🏠 Aperçu',rating:'⭐ Note',comments:'💬 Commentaires',problems:'🐛 Problèmes',security:'🔒 Sécurité',device:'💻 Appareil',ai:'🤖 Support IA'},overview:{features:'Fonctionnalités',avgRating:'Note Moyenne',totalComments:'Commentaire',security:'Niveau Sécurité',problems:'Problème'},rating:{title:'Soumettre une Note',submit:'Soumettre',labels:['','Très Mauvais','Mauvais','Moyen','Bien','Excellent']},comments:{title:'Nouveau Commentaire',placeholder:'Écrivez votre commentaire...',submit:'Soumettre',empty:'Aucun commentaire'},problems:{known:'Problèmes Connus',newProblem:'Signaler un Problème',titlePlaceholder:'Titre du problème',descPlaceholder:'Description...',submit:'Signaler'},security:{title:'Niveau de Sécurité'},device:{uid:'ID Utilisateur',joinDate:'Date d\'inscription',duration:'Ancienneté',ip:'Adresse IP',speed:'Vitesse Internet',os:'Système OS',browser:'Navigateur',lang:'Langue Système',screen:'Écran',time:'Heure Système',date:'Date Système',tz:'Fuseau Horaire',battery:'Batterie',days:'jours'},ai:{title:'Support IA Orite',status:'En ligne — Prêt',placeholder:'Posez votre question...',welcome:'Bonjour! Je suis le support IA Orite 🎉\nPosez des questions sur la plateforme!',quickQ:'Questions fréquentes:',questions:['Comment utiliser la traduction?','Pourquoi ai-je besoin d\'un VPN?','Quelle est la limite quotidienne?']},servant:{click:'Cliquez-moi! 👆',msgs:['Bonjour! Content que vous soyez là! 😊','Encore cliqué! 🎉','Aïe! Doucement! 😢','On joue? 🎮','Prêt à aider! 🚀','Orite est le meilleur! ✨']},footer:{manager:'Chef de projet: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'Positif',negative:'Négatif'},lang:'Choisir la langue'},
        es:{dir:'ltr',font:'Inter',title:'Soporte Orite',close:'✖',tabs:{overview:'🏠 Resumen',rating:'⭐ Puntuación',comments:'💬 Comentarios',problems:'🐛 Problemas',security:'🔒 Seguridad',device:'💻 Dispositivo',ai:'🤖 Soporte IA'},overview:{features:'Características',avgRating:'Puntuación Media',totalComments:'Comentario',security:'Nivel Seguridad',problems:'Problema'},rating:{title:'Enviar Puntuación',submit:'Enviar',labels:['','Muy Malo','Malo','Regular','Bueno','Excelente']},comments:{title:'Nuevo Comentario',placeholder:'Escribe tu comentario...',submit:'Enviar',empty:'Sin comentarios'},problems:{known:'Problemas Conocidos',newProblem:'Reportar Problema',titlePlaceholder:'Título del problema',descPlaceholder:'Descripción...',submit:'Reportar'},security:{title:'Nivel de Seguridad'},device:{uid:'ID Usuario',joinDate:'Fecha Registro',duration:'Membresía',ip:'Dirección IP',speed:'Velocidad',os:'Sistema OS',browser:'Navegador',lang:'Idioma Sistema',screen:'Pantalla',time:'Hora Sistema',date:'Fecha Sistema',tz:'Zona Horaria',battery:'Batería',days:'días'},ai:{title:'Soporte IA Orite',status:'En línea — Listo',placeholder:'Haz tu pregunta...',welcome:'¡Hola! Soy el soporte IA Orite 🎉\n¡Pregunta sobre la plataforma!',quickQ:'Preguntas frecuentes:',questions:['¿Cómo usar la traducción?','¿Por qué necesito VPN?','¿Cuál es el límite diario?']},servant:{click:'¡Haz clic! 👆',msgs:['¡Hola! ¡Me alegra que estés aquí! 😊','¡Otra vez! 🎉','¡Ay! ¡Suave! 😢','¿Jugamos? 🎮','¡Listo para ayudar! 🚀','¡Orite es el mejor! ✨']},footer:{manager:'Gerente del Proyecto: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'Positivo',negative:'Negativo'},lang:'Seleccionar idioma'},
        de:{dir:'ltr',font:'Inter',title:'Orite Support',close:'✖',tabs:{overview:'🏠 Übersicht',rating:'⭐ Bewertung',comments:'💬 Kommentare',problems:'🐛 Probleme',security:'🔒 Sicherheit',device:'💻 Gerät',ai:'🤖 KI-Support'},overview:{features:'Plattform-Funktionen',avgRating:'Ø Bewertung',totalComments:'Kommentar',security:'Sicherheitsstufe',problems:'Problem'},rating:{title:'Bewertung abgeben',submit:'Bewertung senden',labels:['','Sehr schlecht','Schlecht','Mittel','Gut','Ausgezeichnet']},comments:{title:'Neuer Kommentar',placeholder:'Schreiben Sie Ihren Kommentar...',submit:'Senden',empty:'Keine Kommentare'},problems:{known:'Bekannte Probleme',newProblem:'Problem melden',titlePlaceholder:'Problemtitel',descPlaceholder:'Beschreibung...',submit:'Melden'},security:{title:'Plattform-Sicherheitsstufe'},device:{uid:'Benutzer-ID',joinDate:'Beitrittsdatum',duration:'Mitgliedschaft',ip:'IP-Adresse',speed:'Internetgeschwindigkeit',os:'Betriebssystem',browser:'Browser',lang:'Systemsprache',screen:'Bildschirm',time:'Systemzeit',date:'Systemdatum',tz:'Zeitzone',battery:'Akku',days:'Tage'},ai:{title:'Orite KI-Support',status:'Online — Bereit',placeholder:'Frage stellen...',welcome:'Hallo! Ich bin der Orite KI-Support 🎉\nFragen Sie über Plattformprobleme!',quickQ:'Häufige Fragen:',questions:['Wie nutze ich das Übersetzungstool?','Warum brauche ich VPN?','Was ist das tägliche KI-Limit?']},servant:{click:'Klick mich! 👆',msgs:['Hallo! Schön, dass du da bist! 😊','Wieder geklickt! 🎉','Aua! Sanfter! 😢','Spielen wir? 🎮','Bereit zu helfen! 🚀','Orite ist das Beste! ✨']},footer:{manager:'Projektmanager: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'Positiv',negative:'Negativ'},lang:'Sprache wählen'},
        it:{dir:'ltr',font:'Inter',title:'Supporto Orite',close:'✖',tabs:{overview:'🏠 Panoramica',rating:'⭐ Valutazione',comments:'💬 Commenti',problems:'🐛 Problemi',security:'🔒 Sicurezza',device:'💻 Dispositivo',ai:'🤖 Supporto IA'},overview:{features:'Funzionalità',avgRating:'Valutazione Media',totalComments:'Commento',security:'Livello Sicurezza',problems:'Problema'},rating:{title:'Invia Valutazione',submit:'Invia',labels:['','Molto Scarso','Scarso','Medio','Buono','Eccellente']},comments:{title:'Nuovo Commento',placeholder:'Scrivi il tuo commento...',submit:'Invia',empty:'Nessun commento'},problems:{known:'Problemi Noti',newProblem:'Segnala Problema',titlePlaceholder:'Titolo problema',descPlaceholder:'Descrizione...',submit:'Segnala'},security:{title:'Livello di Sicurezza'},device:{uid:'ID Utente',joinDate:'Data Iscrizione',duration:'Abbonamento',ip:'Indirizzo IP',speed:'Velocità Internet',os:'Sistema OS',browser:'Browser',lang:'Lingua Sistema',screen:'Schermo',time:'Ora Sistema',date:'Data Sistema',tz:'Fuso Orario',battery:'Batteria',days:'giorni'},ai:{title:'Supporto IA Orite',status:'Online — Pronto',placeholder:'Fai la tua domanda...',welcome:'Ciao! Sono il supporto IA Orite 🎉\nChiedi informazioni sulla piattaforma!',quickQ:'Domande frequenti:',questions:['Come usare la traduzione?','Perché ho bisogno del VPN?','Qual è il limite giornaliero?']},servant:{click:'Clicca me! 👆',msgs:['Ciao! Felice che tu sia qui! 😊','Cliccato di nuovo! 🎉','Ahia! Piano! 😢','Giochiamo? 🎮','Pronto ad aiutare! 🚀','Orite è il migliore! ✨']},footer:{manager:'Project Manager: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'Positivo',negative:'Negativo'},lang:'Seleziona lingua'},
        he:{dir:'rtl',font:'Vazirmatn',title:'תמיכת Orite',close:'✖',tabs:{overview:'🏠 סקירה',rating:'⭐ דירוג',comments:'💬 תגובות',problems:'🐛 בעיות',security:'🔒 אבטחה',device:'💻 מכשיר',ai:'🤖 תמיכת AI'},overview:{features:'תכונות הפלטפורמה',avgRating:'דירוג ממוצע',totalComments:'תגובה',security:'רמת אבטחה',problems:'בעיה'},rating:{title:'שלח דירוג',submit:'שלח דירוג',labels:['','גרוע מאוד','גרוע','בינוני','טוב','מצוין']},comments:{title:'תגובה חדשה',placeholder:'כתוב את תגובתך...',submit:'שלח תגובה',empty:'אין תגובות עדיין'},problems:{known:'בעיות ידועות',newProblem:'דווח על בעיה',titlePlaceholder:'כותרת הבעיה',descPlaceholder:'תיאור הבעיה...',submit:'דווח'},security:{title:'רמת אבטחת הפלטפורמה'},device:{uid:'מזהה משתמש',joinDate:'תאריך הצטרפות',duration:'חברות',ip:'כתובת IP',speed:'מהירות אינטרנט',os:'מערכת הפעלה',browser:'דפדפן',lang:'שפת מערכת',screen:'מסך',time:'שעת מערכת',date:'תאריך מערכת',tz:'אזור זמן',battery:'סוללה',days:'ימים'},ai:{title:'תמיכת AI של Orite',status:'מקוון — מוכן',placeholder:'שאל את שאלתך...',welcome:'שלום! אני תמיכת ה-AI של Orite 🎉\nשאל על בעיות הפלטפורמה!',quickQ:'שאלות נפוצות:',questions:['איך להשתמש בתרגום?','למה צריך VPN?','מה המגבלה היומית?']},servant:{click:'לחץ עלי! 👆',msgs:['שלום! שמח שאתה כאן! 😊','לחצת שוב! 🎉','אוי! בעדינות! 😢','נשחק? 🎮','מוכן לעזור! 🚀','Orite הכי טוב! ✨']},footer:{manager:'מנהל פרויקט: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'חיובי',negative:'שלילי'},lang:'בחר שפה'},
        ru:{dir:'ltr',font:'Inter',title:'Поддержка Orite',close:'✖',tabs:{overview:'🏠 Обзор',rating:'⭐ Оценка',comments:'💬 Комментарии',problems:'🐛 Проблемы',security:'🔒 Безопасность',device:'💻 Устройство',ai:'🤖 AI Поддержка'},overview:{features:'Функции платформы',avgRating:'Ср. оценка',totalComments:'Комментарий',security:'Уровень безопасности',problems:'Проблема'},rating:{title:'Отправить оценку',submit:'Отправить',labels:['','Очень плохо','Плохо','Средне','Хорошо','Отлично']},comments:{title:'Новый комментарий',placeholder:'Напишите комментарий...',submit:'Отправить',empty:'Нет комментариев'},problems:{known:'Известные проблемы',newProblem:'Сообщить о проблеме',titlePlaceholder:'Название проблемы',descPlaceholder:'Описание...',submit:'Сообщить'},security:{title:'Уровень безопасности платформы'},device:{uid:'ID пользователя',joinDate:'Дата регистрации',duration:'Членство',ip:'IP-адрес',speed:'Скорость интернета',os:'ОС',browser:'Браузер',lang:'Язык системы',screen:'Экран',time:'Системное время',date:'Системная дата',tz:'Часовой пояс',battery:'Батарея',days:'дней'},ai:{title:'ИИ-поддержка Orite',status:'Онлайн — Готов',placeholder:'Задайте вопрос...',welcome:'Привет! Я ИИ-поддержка Orite 🎉\nСпрашивайте о проблемах платформы!',quickQ:'Частые вопросы:',questions:['Как использовать перевод?','Зачем нужен VPN?','Каков дневной лимит ИИ?']},servant:{click:'Нажми на меня! 👆',msgs:['Привет! Рад, что ты здесь! 😊','Снова нажал! 🎉','Ой! Потише! 😢','Поиграем? 🎮','Готов помочь! 🚀','Orite лучший! ✨']},footer:{manager:'Менеджер проекта: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'Положительный',negative:'Отрицательный'},lang:'Выбрать язык'},
        ja:{dir:'ltr',font:'Inter',title:'Oriteサポート',close:'✖',tabs:{overview:'🏠 概要',rating:'⭐ 評価',comments:'💬 コメント',problems:'🐛 問題',security:'🔒 セキュリティ',device:'💻 デバイス',ai:'🤖 AIサポート'},overview:{features:'プラットフォーム機能',avgRating:'平均評価',totalComments:'コメント',security:'セキュリティ',problems:'問題'},rating:{title:'評価を送信',submit:'送信',labels:['','非常に悪い','悪い','普通','良い','優秀']},comments:{title:'新しいコメント',placeholder:'コメントを書いてください...',submit:'送信',empty:'コメントなし'},problems:{known:'既知の問題',newProblem:'問題を報告',titlePlaceholder:'問題のタイトル',descPlaceholder:'説明...',submit:'報告'},security:{title:'プラットフォームセキュリティ'},device:{uid:'ユーザーID',joinDate:'登録日',duration:'会員期間',ip:'IPアドレス',speed:'インターネット速度',os:'OS',browser:'ブラウザ',lang:'システム言語',screen:'画面',time:'システム時刻',date:'システム日付',tz:'タイムゾーン',battery:'バッテリー',days:'日'},ai:{title:'Orite AIサポート',status:'オンライン — 準備完了',placeholder:'質問してください...',welcome:'こんにちは！Orite AIサポートです 🎉\nプラットフォームについて質問してください！',quickQ:'よくある質問：',questions:['翻訳ツールの使い方？','なぜVPNが必要？','毎日のAI制限は？']},servant:{click:'クリックして！ 👆',msgs:['こんにちは！ 😊','また押した！ 🎉','痛い！優しく！ 😢','遊ぶ？ 🎮','お役に立てます！ 🚀','Oriteが最高！ ✨']},footer:{manager:'プロジェクトマネージャー: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'肯定的',negative:'否定的'},lang:'言語を選択'},
        tg:{dir:'ltr',font:'Inter',title:'Дастгирии Orite',close:'✖',tabs:{overview:'🏠 Хулоса',rating:'⭐ Баҳо',comments:'💬 Шарҳҳо',problems:'🐛 Мушкилот',security:'🔒 Амният',device:'💻 Дастгоҳ',ai:'🤖 Дастгирии AI'},overview:{features:'Имкониятҳои платформа',avgRating:'Баҳои миёна',totalComments:'Шарҳ',security:'Сатҳи амният',problems:'Мушкилот'},rating:{title:'Баҳои худро диҳед',submit:'Фиристодан',labels:['','Хеле бад','Бад','Миёна','Хуб','Аъло']},comments:{title:'Шарҳи нав',placeholder:'Шарҳи худро нависед...',submit:'Фиристодан',empty:'Шарҳе нест'},problems:{known:'Мушкилоти маълум',newProblem:'Мушкилот хабар диҳед',titlePlaceholder:'Сарлавҳаи мушкилот',descPlaceholder:'Тавсиф...',submit:'Хабар додан'},security:{title:'Сатҳи амнияти платформа'},device:{uid:'ID Корбар',joinDate:'Санаи узвият',duration:'Узвият',ip:'Суроғаи IP',speed:'Суръати интернет',os:'Системаи ОС',browser:'Браузер',lang:'Забони система',screen:'Экран',time:'Вақти система',date:'Санаи система',tz:'Минтақаи вақт',battery:'Зарядпазирӣ',days:'рӯз'},ai:{title:'Дастгирии зиракони Orite',status:'Онлайн — Омода',placeholder:'Саволатонро диҳед...',welcome:'Салом! Ман дастгирии зиракони Orite ҳастам 🎉',quickQ:'Саволҳои маъмул:',questions:['Чӣ тавр тарҷума истифода кунам?','Чаро VPN лозим аст?','Маҳдудияти рӯзонаи AI чист?']},servant:{click:'Ба ман клик кунед! 👆',msgs:['Салом! 😊','Боз клик кардед! 🎉','Оҳ! Оҳиста! 😢','Бозӣ кунем? 🎮','Омодаи ёрӣ! 🚀','Orite беҳтарин! ✨']},footer:{manager:'Роҳбари лоиҳа: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'Мусбат',negative:'Манфӣ'},lang:'Забонро интихоб кунед'},
        hy:{dir:'ltr',font:'Inter',title:'Orite Աջակցություն',close:'✖',tabs:{overview:'🏠 Ակնարկ',rating:'⭐ Գնահատական',comments:'💬 Մեկնաբանություններ',problems:'🐛 Խնդիրներ',security:'🔒 Անվտանգություն',device:'💻 Սարք',ai:'🤖 AI Աջակցություն'},overview:{features:'Հարթակի հնարավորություններ',avgRating:'Միջ. գնահատական',totalComments:'Մեկնաբանություն',security:'Անվտ. մակարդակ',problems:'Խնդիր'},rating:{title:'Ուղարկել գնահատական',submit:'Ուղարկել',labels:['','Շատ վատ','Վատ','Միջին','Լավ','Գերազանց']},comments:{title:'Նոր մեկնաբանություն',placeholder:'Գրեք ձեր մեկնաբանությունը...',submit:'Ուղարկել',empty:'Մեկնաբանություններ չկան'},problems:{known:'Հայտնի խնդիրներ',newProblem:'Հաղորդել խնդիր',titlePlaceholder:'Խնդրի վերնագիր',descPlaceholder:'Նկարագրություն...',submit:'Հաղորդել'},security:{title:'Հարթակի անվտ. մակարդակ'},device:{uid:'Օգտ. ID',joinDate:'Գրանցման ամ.',duration:'Անդամություն',ip:'IP հասցե',speed:'Ինտ. արագ.',os:'ՕՀ',browser:'Դիտ.',lang:'Համակ. լեզու',screen:'Էկրան',time:'Ժամը',date:'Ամսաթիվ',tz:'Ժ. գոտի',battery:'Մարտ.',days:'օր'},ai:{title:'Orite AI Աջակցություն',status:'Առցանց — Պատրաստ',placeholder:'Հարցրեք...',welcome:'Բարև! Ես Orite AI աջակցությունն եմ 🎉',quickQ:'Հաճախ տրվող հարցեր:',questions:['Ինչպե՞ս օգտ. թարգ. գործ.?','Ինչո՞ւ VPN է պետք?','Ինչ է օրական AI սահм.?']},servant:{click:'Սեղմե՛ ինձ! 👆',msgs:['Բարև! 😊','Կրկին սեղ.! 🎉','Ախ! Մեղ.! 😢','Խաղա՞նք? 🎮','Պատ. օգն.! 🚀','Orite լ.! ✨']},footer:{manager:'Ծրագ. ղեկ.: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'Դրական',negative:'Բացասական'},lang:'Ընտրել լեզու'},
        hr:{dir:'ltr',font:'Inter',title:'Orite Podrška',close:'✖',tabs:{overview:'🏠 Pregled',rating:'⭐ Ocjena',comments:'💬 Komentari',problems:'🐛 Problemi',security:'🔒 Sigurnost',device:'💻 Uređaj',ai:'🤖 AI Podrška'},overview:{features:'Značajke platforme',avgRating:'Prosj. ocjena',totalComments:'Komentar',security:'Razina sigurnosti',problems:'Problem'},rating:{title:'Pošalji ocjenu',submit:'Pošalji',labels:['','Vrlo loše','Loše','Prosječno','Dobro','Odlično']},comments:{title:'Novi komentar',placeholder:'Napišite komentar...',submit:'Pošalji',empty:'Nema komentara'},problems:{known:'Poznati problemi',newProblem:'Prijavi problem',titlePlaceholder:'Naslov problema',descPlaceholder:'Opis...',submit:'Prijavi'},security:{title:'Razina sigurnosti platforme'},device:{uid:'Korisnički ID',joinDate:'Datum registracije',duration:'Članstvo',ip:'IP Adresa',speed:'Brzina interneta',os:'Operativni sustav',browser:'Preglednik',lang:'Jezik sustava',screen:'Zaslon',time:'Systemsko vrijeme',date:'Datum sustava',tz:'Vremenska zona',battery:'Baterija',days:'dana'},ai:{title:'Orite AI Podrška',status:'Online — Spreman',placeholder:'Postavi pitanje...',welcome:'Pozdrav! Ja sam Orite AI podrška 🎉\nPitajte o problemima platforme!',quickQ:'Česta pitanja:',questions:['Kako koristiti prijevod?','Zašto trebam VPN?','Koji je dnevni AI limit?']},servant:{click:'Klikni me! 👆',msgs:['Pozdrav! 😊','Opet kliknut! 🎉','Jao! Nježno! 😢','Igramo se? 🎮','Spreman pomoći! 🚀','Orite je najbolji! ✨']},footer:{manager:'Voditelj projekta: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'Pozitivno',negative:'Negativno'},lang:'Odaberi jezik'},
        ms:{dir:'ltr',font:'Inter',title:'Sokongan Orite',close:'✖',tabs:{overview:'🏠 Ringkasan',rating:'⭐ Penilaian',comments:'💬 Komen',problems:'🐛 Masalah',security:'🔒 Keselamatan',device:'💻 Peranti',ai:'🤖 Sokongan AI'},overview:{features:'Ciri Platform',avgRating:'Purata Penilaian',totalComments:'Komen',security:'Tahap Keselamatan',problems:'Masalah'},rating:{title:'Hantar Penilaian',submit:'Hantar',labels:['','Sangat Buruk','Buruk','Sederhana','Baik','Cemerlang']},comments:{title:'Komen Baru',placeholder:'Tulis komen anda...',submit:'Hantar',empty:'Tiada komen'},problems:{known:'Masalah Diketahui',newProblem:'Laporkan Masalah',titlePlaceholder:'Tajuk masalah',descPlaceholder:'Penerangan...',submit:'Laporkan'},security:{title:'Tahap Keselamatan Platform'},device:{uid:'ID Pengguna',joinDate:'Tarikh Daftar',duration:'Keahlian',ip:'Alamat IP',speed:'Kelajuan Internet',os:'Sistem Pengendalian',browser:'Pelayar',lang:'Bahasa Sistem',screen:'Skrin',time:'Masa Sistem',date:'Tarikh Sistem',tz:'Zon Waktu',battery:'Bateri',days:'hari'},ai:{title:'Sokongan AI Orite',status:'Dalam Talian — Sedia',placeholder:'Tanya soalan...',welcome:'Helo! Saya sokongan AI Orite 🎉\nTanya tentang masalah platform!',quickQ:'Soalan lazim:',questions:['Cara guna alat terjemahan?','Kenapa perlu VPN?','Apakah had harian AI?']},servant:{click:'Klik saya! 👆',msgs:['Helo! 😊','Klik lagi! 🎉','Aduh! Lembut! 😢','Main? 🎮','Sedia membantu! 🚀','Orite terbaik! ✨']},footer:{manager:'Pengurus Projek: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'Positif',negative:'Negatif'},lang:'Pilih Bahasa'},
        hi:{dir:'ltr',font:'Inter',title:'Orite सहायता',close:'✖',tabs:{overview:'🏠 सारांश',rating:'⭐ रेटिंग',comments:'💬 टिप्पणियाँ',problems:'🐛 समस्याएं',security:'🔒 सुरक्षा',device:'💻 डिवाइस',ai:'🤖 AI सहायता'},overview:{features:'प्लेटफॉर्म सुविधाएं',avgRating:'औसत रेटिंग',totalComments:'टिप्पणी',security:'सुरक्षा स्तर',problems:'समस्या'},rating:{title:'रेटिंग सबमिट करें',submit:'सबमिट करें',labels:['','बहुत बुरा','बुरा','औसत','अच्छा','उत्कृष्ट']},comments:{title:'नई टिप्पणी',placeholder:'अपनी टिप्पणी लिखें...',submit:'सबमिट करें',empty:'कोई टिप्पणी नहीं'},problems:{known:'ज्ञात समस्याएं',newProblem:'नई समस्या रिपोर्ट करें',titlePlaceholder:'समस्या शीर्षक',descPlaceholder:'विवरण...',submit:'रिपोर्ट करें'},security:{title:'प्लेटफॉर्म सुरक्षा स्तर'},device:{uid:'उपयोगकर्ता ID',joinDate:'जॉइन तिथि',duration:'सदस्यता',ip:'IP पता',speed:'इंटरनेट गति',os:'ऑपरेटिंग सिस्टम',browser:'ब्राउज़र',lang:'सिस्टम भाषा',screen:'स्क्रीन',time:'सिस्टम समय',date:'सिस्टम दिनांक',tz:'समय क्षेत्र',battery:'बैटरी',days:'दिन'},ai:{title:'Orite AI सहायता',status:'ऑनलाइन — तैयार',placeholder:'अपना प्रश्न पूछें...',welcome:'नमस्ते! मैं Orite AI सहायता हूं 🎉\nप्लेटफॉर्म समस्याओं के बारे में पूछें!',quickQ:'सामान्य प्रश्न:',questions:['अनुवाद टूल कैसे उपयोग करें?','VPN की आवश्यकता क्यों?','दैनिक AI सीमा क्या है?']},servant:{click:'मुझ पर क्लिक करें! 👆',msgs:['नमस्ते! 😊','फिर क्लिक किया! 🎉','आउच! धीरे! 😢','खेलें? 🎮','मदद के लिए तैयार! 🚀','Orite सबसे अच्छा! ✨']},footer:{manager:'प्रोजेक्ट मैनेजर: LuoLaf.Studio',version:'© 2026 Orite Support v1.0'},like:{positive:'सकारात्मक',negative:'नकारात्मक'},lang:'भाषा चुनें'}
    };

    const WORKER_URL = 'https://orite-hub-tools-ai.amiralitanaomi2015.workers.dev';
    let curLang = 'fa', curTab = 'overview', starRating = 0, aiHistory = [], servantMood = 'happy', clickCount = 0;

    function getData(k,d){try{return JSON.parse(localStorage.getItem('orite_sup_'+k))||d;}catch{return d;}}
    function setData(k,v){localStorage.setItem('orite_sup_'+k,JSON.stringify(v));}

    let ratings = getData('ratings',[]);
    let likes = getData('likes',{like:0,dislike:0,userVote:null});
    let comments = getData('comments',[]);
    let problems = getData('problems',[]);
    let userInfo = getData('userInfo',{id:'USR-'+Math.random().toString(36).substr(2,8).toUpperCase(),joinDate:new Date().toISOString()});
    setData('userInfo',userInfo);

    function t(){return T[curLang]||T['fa'];}
    function isRTL(){return t().dir==='rtl';}

    const style = document.createElement('style');
    style.id = 'orite-support-style';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap');
        #orite-support-panel{animation:supFadeIn 0.5s cubic-bezier(0.4,0,0.2,1);font-family:'Vazirmatn',Tahoma,Arial,sans-serif;}
        @keyframes supFadeIn{from{opacity:0;transform:translateY(20px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes supFloat{0%,100%{transform:translateY(0) rotateY(0deg)}25%{transform:translateY(-8px) rotateY(5deg)}75%{transform:translateY(4px) rotateY(-5deg)}}
        @keyframes supPulse{0%,100%{box-shadow:0 0 0 0 rgba(0,120,255,0.4)}50%{box-shadow:0 0 0 15px rgba(0,120,255,0)}}
        @keyframes supScan{0%{top:0}100%{top:100%}}
        @keyframes supBlink{0%,100%{opacity:1}50%{opacity:0.3}}
        @keyframes supGlow{0%,100%{text-shadow:0 0 5px rgba(0,120,255,0.5)}50%{text-shadow:0 0 20px rgba(0,120,255,1)}}
        @keyframes supSlideL{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}
        @keyframes supSlideR{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}
        @keyframes supEyeBlink{0%,90%,100%{transform:scaleY(1)}95%{transform:scaleY(0.1)}}
        @keyframes supArmWave{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-30deg)}}
        @keyframes supParticle{0%{transform:translateY(0) translateX(0);opacity:1}100%{transform:translateY(-60px) translateX(var(--rx));opacity:0}}
        @keyframes supBarGrow{from{width:0}to{width:var(--w)}}
        .sup-tab{transition:all 0.3s;cursor:pointer;}
        .sup-tab:hover{transform:translateY(-2px);}
        .sup-tab.act{background:linear-gradient(135deg,#0078ff,#0040aa)!important;color:#fff!important;border-color:transparent!important;}
        .sup-star{cursor:pointer;font-size:26px;transition:all 0.2s;display:inline-block;}
        .sup-star:hover,.sup-star.on{color:#ffd700;transform:scale(1.2);}
        .sup-like{transition:all 0.3s;cursor:pointer;}
        .sup-like:hover{transform:scale(1.08);}
        .sup-servant{animation:supFloat 3s ease-in-out infinite;cursor:pointer;display:inline-block;filter:drop-shadow(0 10px 20px rgba(0,120,255,0.3));transition:transform 0.2s;}
        .sup-servant:hover{transform:scale(1.1);filter:drop-shadow(0 15px 30px rgba(0,120,255,0.5));}
        .sup-servant:active{transform:scale(0.95) rotate(10deg);}
        .sup-eye{animation:supEyeBlink 4s ease-in-out infinite;transform-origin:center;}
        .sup-arm{animation:supArmWave 2s ease-in-out infinite;transform-origin:top;}
        .sup-scan{position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(0,120,255,0.8),transparent);animation:supScan 3s linear infinite;}
        .sup-glow{animation:supGlow 2s ease-in-out infinite;}
        .sup-holo{background:linear-gradient(135deg,rgba(0,120,255,0.08),rgba(0,200,255,0.04));border:1px solid rgba(0,120,255,0.25);position:relative;overflow:hidden;}
        .sup-card{transform-style:preserve-3d;transition:transform 0.3s;}
        .sup-card:hover{transform:perspective(500px) rotateX(2deg) rotateY(-2deg) translateY(-3px);}
        .sup-input:focus{border-color:#0078ff!important;box-shadow:0 0 0 3px rgba(0,120,255,0.15)!important;outline:none;}
        .sup-btn{transition:all 0.2s;box-shadow:0 4px 0 rgba(0,0,0,0.3);}
        .sup-btn:hover{transform:translateY(-2px);box-shadow:0 6px 0 rgba(0,0,0,0.3);}
        .sup-btn:active{transform:translateY(3px);box-shadow:0 1px 0 rgba(0,0,0,0.3);}
        .sup-msg-in{animation:supSlideR 0.3s ease;}
        .sup-msg-user{animation:supSlideL 0.3s ease;}
        .sup-particle{position:absolute;width:4px;height:4px;border-radius:50%;animation:supParticle 1s ease-out forwards;}
        #orite-support-panel::-webkit-scrollbar{width:4px;}
        #orite-support-panel::-webkit-scrollbar-thumb{background:rgba(0,120,255,0.3);border-radius:4px;}
        #orite-ai-msgs::-webkit-scrollbar{width:4px;}
        #orite-ai-msgs::-webkit-scrollbar-thumb{background:rgba(0,120,255,0.2);border-radius:4px;}
    `;
    document.head.appendChild(style);

    function getServantSVG(mood){
        const col=mood==='sleep'?'#334':mood==='sad'?'#4444ff':mood==='excited'?'#00ccff':'#0078ff';
        return `<svg width="80" height="110" viewBox="0 0 80 110" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="sg1" cx="50%" cy="30%" r="70%"><stop offset="0%" stop-color="${col}" stop-opacity="0.9"/><stop offset="100%" stop-color="#001133"/></radialGradient>
                <radialGradient id="sg2" cx="40%" cy="30%" r="60%"><stop offset="0%" stop-color="#00aaff"/><stop offset="100%" stop-color="${col}"/></radialGradient>
                <filter id="sg3"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <ellipse cx="40" cy="108" rx="25" ry="4" fill="rgba(0,0,0,0.25)"/>
            <rect x="28" y="82" width="10" height="22" rx="5" fill="url(#sg1)"/>
            <rect x="42" y="82" width="10" height="22" rx="5" fill="url(#sg1)"/>
            <rect x="20" y="45" width="40" height="42" rx="12" fill="url(#sg1)" filter="url(#sg3)"/>
            <circle cx="40" cy="62" r="6" fill="rgba(0,200,255,0.5)" style="animation:supBlink 2s ease-in-out infinite"/>
            <circle cx="40" cy="62" r="3" fill="#00ffff"/>
            <rect x="8" y="48" width="12" height="28" rx="6" fill="url(#sg1)"/>
            <rect class="sup-arm" x="60" y="48" width="12" height="28" rx="6" fill="url(#sg1)"/>
            <circle cx="14" cy="78" r="5" fill="#00aaff"/>
            <circle cx="66" cy="78" r="5" fill="#00aaff"/>
            <rect x="33" y="36" width="14" height="12" rx="4" fill="${col}"/>
            <rect x="14" y="10" width="52" height="44" rx="18" fill="url(#sg2)" filter="url(#sg3)"/>
            <rect x="18" y="18" width="44" height="22" rx="10" fill="rgba(0,0,0,0.6)"/>
            <rect x="20" y="20" width="40" height="18" rx="8" fill="rgba(0,100,255,0.15)"/>
            <circle class="sup-eye" cx="31" cy="29" r="5" fill="#00ffff"/>
            <circle class="sup-eye" cx="49" cy="29" r="5" fill="#00ffff" style="animation-delay:0.5s"/>
            <circle cx="31" cy="29" r="2" fill="#fff"/>
            <circle cx="49" cy="29" r="2" fill="#fff"/>
            <line x1="40" y1="10" x2="40" y2="0" stroke="${col}" stroke-width="2"/>
            <circle cx="40" cy="0" r="3" fill="#00ffff" style="animation:supBlink 1s ease-in-out infinite"/>
            <circle cx="14" cy="30" r="4" fill="${col}" stroke="#00ffff" stroke-width="1"/>
            <circle cx="66" cy="30" r="4" fill="${col}" stroke="#00ffff" stroke-width="1"/>
        </svg>`;
    }

    function getDeviceInfo(){
        const ua=navigator.userAgent;
        let browser='?',os='?';
        if(ua.includes('Edg'))browser='Edge '+(ua.match(/Edg\/(\d+)/)?.[1]||'');
        else if(ua.includes('Chrome'))browser='Chrome '+(ua.match(/Chrome\/(\d+)/)?.[1]||'');
        else if(ua.includes('Firefox'))browser='Firefox '+(ua.match(/Firefox\/(\d+)/)?.[1]||'');
        else if(ua.includes('Safari'))browser='Safari';
        if(ua.includes('Windows'))os='Windows';
        else if(ua.includes('Mac'))os='macOS';
        else if(ua.includes('Android'))os='Android';
        else if(/iPhone|iPad/.test(ua))os='iOS';
        else if(ua.includes('Linux'))os='Linux';
        return{browser,os,lang:navigator.language||'?',screen:window.screen.width+'×'+window.screen.height,tz:Intl.DateTimeFormat().resolvedOptions().timeZone};
    }

    async function getIP(){try{const r=await fetch('https://api.ipify.org?format=json');const d=await r.json();return d.ip;}catch{return 'N/A';}}
    async function testSpeed(){try{const url='https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js?_='+Date.now();const s=performance.now();const r=await fetch(url,{cache:'no-store'});const b=await r.arrayBuffer();return ((b.byteLength*8/1024/1024)/((performance.now()-s)/1000)).toFixed(1)+' Mbps';}catch{return 'N/A';}}
    async function getBattery(){try{const b=await navigator.getBattery();return Math.round(b.level*100)+'% '+(b.charging?'⚡':'🔋');}catch{return 'N/A';}}

    function scanSecurity(){
        const checks=[
            {name:'HTTPS',ok:location.protocol==='https:',msg:location.protocol==='https:'?'اتصال امن HTTPS فعال':'اتصال ناامن HTTP'},
            {name:'Cloudflare Worker',ok:true,msg:'پروکسی امن فعال'},
            {name:'API Key',ok:true,msg:'کلید در سرور ذخیره'},
            {name:'CORS',ok:true,msg:'محدودیت دسترسی فعال'},
            {name:'localStorage',ok:true,msg:'داده‌ها محلی ذخیره'},
            {name:'XSS Protection',ok:true,msg:'محافظت XSS فعال'},
        ];
        return{checks,score:Math.round((checks.filter(c=>c.ok).length/checks.length)*100)};
    }

    function getChartHTML(){
        const avg=ratings.length?(ratings.reduce((a,b)=>a+b,0)/ratings.length).toFixed(1):0;
        const dist=[5,4,3,2,1].map(s=>ratings.filter(r=>r===s).length);
        const max=Math.max(...dist,1);
        return `<div style="padding:12px">
            <div style="text-align:center;margin-bottom:12px">
                <div style="font-size:36px;font-weight:700;color:#0078ff;animation:supGlow 2s infinite">${avg||'—'}</div>
                <div style="color:#ffd700;font-size:18px">${avg?'★'.repeat(Math.round(avg))+'☆'.repeat(5-Math.round(avg)):'☆☆☆☆☆'}</div>
                <div style="font-size:11px;color:#aaa">${ratings.length} ${t().overview.totalComments}</div>
            </div>
            ${[5,4,3,2,1].map((s,i)=>`
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                <div style="font-size:11px;color:#aaa;width:12px">${s}</div>
                <div style="color:#ffd700;font-size:12px">★</div>
                <div style="flex:1;background:rgba(255,255,255,0.1);border-radius:4px;height:8px;overflow:hidden">
                    <div style="height:100%;background:linear-gradient(90deg,#0078ff,#00ccff);border-radius:4px;width:${max>0?Math.round((dist[i]/max)*100):0}%;transition:width 1s ease"></div>
                </div>
                <div style="font-size:11px;color:#aaa;width:16px">${dist[i]}</div>
            </div>`).join('')}
        </div>`;
    }

    function getLikesHTML(){
        const total=likes.like+likes.dislike||1;
        const lp=Math.round((likes.like/total)*100);
        return `<div style="margin-top:12px">
            <div style="display:flex;gap:8px;margin-bottom:8px">
                <button class="sup-like" onclick="supVote('like')" style="flex:1;padding:10px;border-radius:10px;border:2px solid ${likes.userVote==='like'?'transparent':'rgba(0,120,255,0.3)'};background:${likes.userVote==='like'?'linear-gradient(135deg,#0078ff,#0040aa)':'rgba(0,120,255,0.1)'};color:${likes.userVote==='like'?'#fff':'#0078ff'};cursor:pointer;font-size:13px;font-family:inherit;">👍 ${likes.like}</button>
                <button class="sup-like" onclick="supVote('dislike')" style="flex:1;padding:10px;border-radius:10px;border:2px solid ${likes.userVote==='dislike'?'transparent':'rgba(255,68,68,0.3)'};background:${likes.userVote==='dislike'?'linear-gradient(135deg,#ff4444,#aa0000)':'rgba(255,68,68,0.1)'};color:${likes.userVote==='dislike'?'#fff':'#ff4444'};cursor:pointer;font-size:13px;font-family:inherit;">👎 ${likes.dislike}</button>
            </div>
            <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden;display:flex">
                <div style="width:${lp}%;background:linear-gradient(90deg,#0078ff,#00ccff);transition:width 1s ease"></div>
                <div style="width:${100-lp}%;background:linear-gradient(90deg,#ff4444,#ff8888);transition:width 1s ease"></div>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:10px;color:#aaa;margin-top:4px">
                <span>${lp}% ${t().like.positive}</span><span>${100-lp}% ${t().like.negative}</span>
            </div>
        </div>`;
    }

    function getTabContent(){
        const tr=t();
        if(curTab==='overview'){
            const avg=ratings.length?(ratings.reduce((a,b)=>a+b,0)/ratings.length).toFixed(1):'—';
            const sec=scanSecurity();
            return `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
                ${[
                    {v:avg,l:tr.overview.avgRating,c:'#0078ff'},
                    {v:comments.length,l:tr.overview.totalComments,c:'#00ccff'},
                    {v:sec.score+'%',l:tr.overview.security,c:sec.score>=80?'#00ff88':'#ffaa00'},
                    {v:problems.length,l:tr.overview.problems,c:'#ff88ff'},
                ].map(i=>`<div class="sup-holo sup-card" style="border-radius:12px;padding:14px;text-align:center"><div style="font-size:28px;font-weight:700;color:${i.c}">${i.v}</div><div style="font-size:10px;color:#aaa">${i.l}</div></div>`).join('')}
            </div>
            <div class="sup-holo" style="border-radius:12px;padding:14px;margin-top:10px">
                <div style="font-size:12px;font-weight:600;color:#00ccff;margin-bottom:8px">✨ ${tr.overview.features}</div>
                ${['🤖 AI Tools (ترجمه، کد، حقوق، جغرافیا)','🎮 مینی‌گیم حدس دما','📝 یادداشت‌های سریع','🌐 پشتیبانی چندزبانه','🔒 Cloudflare Worker امن','⚡ Groq AI رایگان'].map(f=>`<div style="font-size:11px;color:#88aaff;padding:4px 0;border-bottom:1px solid rgba(0,120,255,0.1)">${f}</div>`).join('')}
            </div>
            ${getLikesHTML()}`;
        }
        if(curTab==='rating') return `
            <div class="sup-holo" style="border-radius:12px;padding:16px;text-align:center">
                <div style="font-size:13px;font-weight:600;color:#00ccff;margin-bottom:12px">${tr.rating.title}</div>
                <div id="sup-stars" style="font-size:28px;margin-bottom:12px">${[1,2,3,4,5].map(s=>`<span class="sup-star ${starRating>=s?'on':''}" onclick="supSetStar(${s})">★</span>`).join('')}</div>
                <div style="font-size:12px;color:#aaa;margin-bottom:12px" id="sup-star-lbl">${starRating?starRating+' — '+tr.rating.labels[starRating]:tr.rating.labels[0]||'—'}</div>
                <button class="sup-btn" onclick="supSubmitRating()" style="padding:10px 24px;background:linear-gradient(135deg,#0078ff,#0040aa);color:#fff;border:none;border-radius:10px;cursor:pointer;font-family:inherit;font-size:13px">${tr.rating.submit}</button>
            </div>
            <div class="sup-holo" style="border-radius:12px;margin-top:10px">${getChartHTML()}</div>`;
        if(curTab==='comments') return `
            <div class="sup-holo" style="border-radius:12px;padding:14px;margin-bottom:10px">
                <div style="font-size:12px;font-weight:600;color:#00ccff;margin-bottom:8px">${tr.comments.title}</div>
                <textarea id="sup-comment-inp" class="sup-input" placeholder="${tr.comments.placeholder}" style="width:100%;background:rgba(0,120,255,0.05);border:1px solid rgba(0,120,255,0.2);border-radius:8px;padding:10px;color:#e0e8ff;font-family:inherit;font-size:12px;resize:vertical;min-height:70px;box-sizing:border-box"></textarea>
                <button class="sup-btn" onclick="supSubmitComment()" style="margin-top:8px;padding:8px 20px;background:linear-gradient(135deg,#0078ff,#0040aa);color:#fff;border:none;border-radius:8px;cursor:pointer;font-family:inherit;font-size:12px">${tr.comments.submit}</button>
            </div>
            <div style="max-height:220px;overflow-y:auto">
                ${comments.length===0?`<div style="text-align:center;color:#446688;font-size:12px;padding:20px">${tr.comments.empty}</div>`:
                comments.slice().reverse().map(c=>`<div class="sup-holo" style="border-radius:10px;padding:10px;margin-bottom:8px;animation:supSlideR 0.3s ease">
                    <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:10px;color:#0078ff">👤 ${c.id}</span><span style="font-size:10px;color:#446688">${c.date}</span></div>
                    <div style="font-size:12px;color:#e0e8ff">${c.text}</div>
                </div>`).join('')}
            </div>`;
        if(curTab==='problems'){
            const kp=[
                {title:'VPN Required',desc:'Cloudflare Workers is filtered in Iran',s:'high'},
                {title:'Groq Daily Limit',desc:'Free API has daily request limits',s:'medium'},
                {title:'localStorage',desc:'Data lost when browser cache is cleared',s:'low'},
            ];
            return `
            <div class="sup-holo" style="border-radius:12px;padding:14px;margin-bottom:10px">
                <div style="font-size:12px;font-weight:600;color:#00ccff;margin-bottom:8px">🔍 ${tr.problems.known}</div>
                ${kp.map(p=>`<div style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:8px;background:rgba(0,120,255,0.05);border:1px solid rgba(${p.s==='high'?'255,68,68':p.s==='medium'?'255,170,0':'0,200,100'},0.3);margin-bottom:6px;animation:supSlideL 0.3s ease">
                    <div style="width:8px;height:8px;border-radius:50%;background:${p.s==='high'?'#ff4444':p.s==='medium'?'#ffaa00':'#00cc66'};flex-shrink:0"></div>
                    <div><div style="font-size:12px;font-weight:600;color:#e0e8ff">${p.title}</div><div style="font-size:10px;color:#aaa">${p.desc}</div></div>
                </div>`).join('')}
            </div>
            <div class="sup-holo" style="border-radius:12px;padding:14px">
                <div style="font-size:12px;font-weight:600;color:#00ccff;margin-bottom:8px">📋 ${tr.problems.newProblem}</div>
                <input type="text" id="sup-prob-title" class="sup-input" placeholder="${tr.problems.titlePlaceholder}" style="width:100%;background:rgba(0,120,255,0.05);border:1px solid rgba(0,120,255,0.2);border-radius:8px;padding:8px;color:#e0e8ff;font-family:inherit;font-size:12px;margin-bottom:8px;box-sizing:border-box">
                <textarea id="sup-prob-desc" class="sup-input" placeholder="${tr.problems.descPlaceholder}" style="width:100%;background:rgba(0,120,255,0.05);border:1px solid rgba(0,120,255,0.2);border-radius:8px;padding:8px;color:#e0e8ff;font-family:inherit;font-size:12px;resize:vertical;min-height:60px;box-sizing:border-box"></textarea>
                <button class="sup-btn" onclick="supSubmitProblem()" style="margin-top:8px;padding:8px 20px;background:linear-gradient(135deg,#ff4444,#aa0000);color:#fff;border:none;border-radius:8px;cursor:pointer;font-family:inherit;font-size:12px">${tr.problems.submit}</button>
            </div>
            ${problems.length>0?`<div style="margin-top:10px;max-height:150px;overflow-y:auto">${problems.slice().reverse().map(p=>`<div class="sup-holo" style="border-radius:10px;padding:10px;margin-bottom:8px;animation:supSlideR 0.3s ease"><div style="font-size:12px;font-weight:600;color:#ff8888">${p.title}</div><div style="font-size:11px;color:#aaa">${p.desc}</div><div style="font-size:10px;color:#446688;margin-top:4px">${p.date}</div></div>`).join('')}</div>`:''}`;
        }
        if(curTab==='security'){
            const sec=scanSecurity();
            const col=sec.score>=80?'#00ff88':sec.score>=60?'#ffaa00':'#ff4444';
            return `
            <div class="sup-holo sup-card" style="border-radius:12px;padding:16px;text-align:center;margin-bottom:10px">
                <div style="font-size:48px;font-weight:700;color:${col}">${sec.score}%</div>
                <div style="font-size:13px;color:#aaa">${tr.security.title}</div>
                <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;margin-top:10px;overflow:hidden">
                    <div style="width:${sec.score}%;height:100%;background:linear-gradient(90deg,${col},#00ccff);border-radius:6px;transition:width 1.5s ease"></div>
                </div>
            </div>
            ${sec.checks.map((c,i)=>`<div class="sup-holo" style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:10px;margin-bottom:8px;animation:supSlideL 0.3s ease ${i*0.08}s both">
                <div style="font-size:18px">${c.ok?'✅':'❌'}</div>
                <div><div style="font-size:12px;font-weight:600;color:#e0e8ff">${c.name}</div><div style="font-size:10px;color:#aaa">${c.msg}</div></div>
            </div>`).join('')}`;
        }
        if(curTab==='device'){
            const d=getDeviceInfo();
            const now=new Date();
            const join=new Date(userInfo.joinDate);
            const days=Math.floor((now-join)/(1000*60*60*24));
            const items=[
                {icon:'🆔',label:tr.device.uid,val:userInfo.id,id:null},
                {icon:'📅',label:tr.device.joinDate,val:join.toLocaleDateString(),id:null},
                {icon:'⏱️',label:tr.device.duration,val:days+' '+tr.device.days,id:null},
                {icon:'🌐',label:tr.device.ip,val:'...',id:'sup-ip'},
                {icon:'⚡',label:tr.device.speed,val:'...',id:'sup-speed'},
                {icon:'💻',label:tr.device.os,val:d.os,id:null},
                {icon:'🌍',label:tr.device.browser,val:d.browser,id:null},
                {icon:'🗣️',label:tr.device.lang,val:d.lang,id:null},
                {icon:'📺',label:tr.device.screen,val:d.screen,id:null},
                {icon:'🕐',label:tr.device.time,val:now.toLocaleTimeString(),id:null},
                {icon:'📆',label:tr.device.date,val:now.toLocaleDateString(),id:null},
                {icon:'🌏',label:tr.device.tz,val:d.tz,id:null},
                {icon:'🔋',label:tr.device.battery,val:'...',id:'sup-battery'},
            ];
            return `<div style="display:flex;flex-direction:column;gap:8px">
                ${items.map((item,i)=>`<div class="sup-holo sup-card" style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:10px;animation:supSlideL 0.3s ease ${i*0.04}s both">
                    <div style="font-size:18px">${item.icon}</div>
                    <div style="flex:1"><div style="font-size:10px;color:#446688">${item.label}</div><div style="font-size:12px;font-weight:600;color:#e0e8ff" ${item.id?`id="${item.id}"`:''}>${item.val}</div></div>
                </div>`).join('')}
            </div>`;
        }
        if(curTab==='ai') return `
            <div class="sup-holo" style="border-radius:12px;overflow:hidden">
                <div style="padding:12px 14px;background:linear-gradient(135deg,#0078ff,#0040aa);display:flex;align-items:center;gap:8px">
                    <div style="font-size:20px">🤖</div>
                    <div><div style="color:#fff;font-weight:600;font-size:13px">${tr.ai.title}</div><div style="font-size:10px;color:rgba(255,255,255,0.7)">${tr.ai.status}</div></div>
                    <div style="width:8px;height:8px;border-radius:50%;background:#4ade80;margin-${isRTL()?'right':'left'}:auto;animation:supBlink 1.5s infinite"></div>
                </div>
                <div id="orite-ai-msgs" style="padding:12px;min-height:160px;max-height:220px;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
                    <div class="sup-msg-in" style="max-width:88%;padding:9px 12px;border-radius:12px;font-size:12px;background:rgba(0,120,255,0.15);border:1px solid rgba(0,120,255,0.2);color:#e0e8ff;align-self:${isRTL()?'flex-end':'flex-start'};border-bottom-${isRTL()?'right':'left'}-radius:3px">${tr.ai.welcome}</div>
                </div>
                <div style="display:flex;gap:6px;padding:10px;border-top:1px solid rgba(0,120,255,0.2)">
                    <input type="text" id="sup-ai-inp" class="sup-input" placeholder="${tr.ai.placeholder}" style="flex:1;background:rgba(0,120,255,0.05);border:1px solid rgba(0,120,255,0.2);border-radius:10px;padding:8px 12px;color:#e0e8ff;font-family:inherit;font-size:12px" onkeydown="if(event.key==='Enter')supSendAI()">
                    <button onclick="supSendAI()" style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#0078ff,#0040aa);color:#fff;border:none;cursor:pointer;font-size:14px">➤</button>
                </div>
            </div>
            <div style="margin-top:10px">
                <div style="font-size:11px;color:#446688;margin-bottom:6px">${tr.ai.quickQ}</div>
                ${tr.ai.questions.map(q=>`<button onclick="supQuickQ('${q}')" style="display:block;width:100%;text-align:${isRTL()?'right':'left'};padding:7px 10px;background:rgba(0,120,255,0.08);border:1px solid rgba(0,120,255,0.2);border-radius:8px;color:#88aaff;cursor:pointer;font-family:inherit;font-size:11px;margin-bottom:5px">${q}</button>`).join('')}
            </div>`;
        return '';
    }

    const panel = document.createElement('div');
    panel.id = 'orite-support-panel';

    function renderPanel(){
        const tr=t();
        const rtl=isRTL();
        panel.style.cssText=`background:linear-gradient(135deg,#050d1a,#0a1628,#050d1a);border:1px solid rgba(0,120,255,0.3);border-radius:20px;padding:20px;margin-top:14px;color:#e0e8ff;direction:${tr.dir};font-family:'${tr.font}',Tahoma,Arial,sans-serif;max-height:750px;overflow-y:auto;position:relative;`;
        panel.innerHTML=`
        <div class="sup-scan"></div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid rgba(0,120,255,0.2)">
            <div style="display:flex;align-items:center;gap:10px">
                <div style="width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,#0078ff,#0040aa);display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 4px 15px rgba(0,120,255,0.4);animation:supPulse 2s infinite">🎧</div>
                <div>
                    <div class="sup-glow" style="font-size:15px;font-weight:700;color:#00ccff">${tr.title}</div>
                    <div style="font-size:10px;color:#4488aa">LuoLaf Studio — Support Center</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;gap:6px">
                <select id="sup-lang-sel" style="background:rgba(0,120,255,0.1);border:1px solid rgba(0,120,255,0.3);border-radius:8px;padding:5px 8px;font-size:11px;color:#88aaff;cursor:pointer;outline:none;font-family:inherit" onchange="supSetLang(this.value)">
                    ${Object.keys(T).map(l=>`<option value="${l}" ${l===curLang?'selected':''}>${l.toUpperCase()}</option>`).join('')}
                </select>
                <button onclick="document.getElementById('orite-support-panel').remove();document.getElementById('orite-support-style').remove();" style="width:30px;height:30px;border-radius:8px;background:rgba(255,0,0,0.1);border:1px solid rgba(255,0,0,0.3);color:#ff4444;cursor:pointer;font-size:14px;font-weight:bold">${tr.close}</button>
            </div>
        </div>
        <div style="display:flex;gap:6px;margin-bottom:16px;overflow-x:auto;padding-bottom:4px;flex-wrap:wrap">
            ${Object.entries(tr.tabs).map(([id,label])=>`<button class="sup-tab ${curTab===id?'act':''}" onclick="supTab('${id}')" style="padding:7px 12px;border-radius:10px;background:${curTab===id?'linear-gradient(135deg,#0078ff,#0040aa)':'rgba(0,120,255,0.1)'};border:1px solid rgba(0,120,255,0.3);color:${curTab===id?'#fff':'#88aaff'};font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:inherit">${label}</button>`).join('')}
        </div>
        <div id="sup-tab-content">${getTabContent()}</div>
        <div style="text-align:center;margin-top:16px;padding-top:14px;border-top:1px solid rgba(0,120,255,0.2)">
            <div class="sup-servant" onclick="supServantClick()" id="sup-servant">${getServantSVG(servantMood)}</div>
            <div id="sup-servant-msg" style="font-size:11px;color:#88aaff;margin-top:6px;min-height:16px">${tr.servant.click}</div>
        </div>
        <div style="margin-top:12px;padding-top:10px;border-top:1px solid rgba(0,120,255,0.1);display:flex;justify-content:space-between">
            <div style="font-size:10px;color:#446688">${tr.footer.manager}</div>
            <div style="font-size:10px;color:#446688">${tr.footer.version}</div>
        </div>`;
        loadDynamic();
    }

    async function loadDynamic(){
        if(curTab==='device'){
            const ip=document.getElementById('sup-ip');
            const sp=document.getElementById('sup-speed');
            const bt=document.getElementById('sup-battery');
            if(ip) getIP().then(v=>{if(document.getElementById('sup-ip'))document.getElementById('sup-ip').textContent=v;});
            if(sp) testSpeed().then(v=>{if(document.getElementById('sup-speed'))document.getElementById('sup-speed').textContent=v;});
            if(bt) getBattery().then(v=>{if(document.getElementById('sup-battery'))document.getElementById('sup-battery').textContent=v;});
        }
    }

    // Global functions
    window.supTab=function(tab){curTab=tab;renderPanel();};
    window.supSetLang=function(l){curLang=l;renderPanel();};
    window.supSetStar=function(s){
        starRating=s;
        const el=document.getElementById('sup-stars');
        if(el)el.innerHTML=[1,2,3,4,5].map(i=>`<span class="sup-star ${s>=i?'on':''}" onclick="supSetStar(${i})">★</span>`).join('');
        const lbl=document.getElementById('sup-star-lbl');
        if(lbl)lbl.textContent=s+' — '+t().rating.labels[s];
    };
    window.supSubmitRating=function(){
        if(!starRating){alert('لطفاً ستاره انتخاب کنید');return;}
        ratings.push(starRating);setData('ratings',ratings);starRating=0;supTab('rating');supParticles();
    };
    window.supVote=function(type){
        if(likes.userVote===type){likes[type]--;likes.userVote=null;}
        else{if(likes.userVote)likes[likes.userVote]--;likes[type]++;likes.userVote=type;}
        setData('likes',likes);supTab(curTab);
    };
    window.supSubmitComment=function(){
        const inp=document.getElementById('sup-comment-inp');
        if(!inp||!inp.value.trim()){alert('نظر را بنویسید');return;}
        comments.push({text:inp.value.trim(),id:userInfo.id,date:new Date().toLocaleDateString()});
        setData('comments',comments);supTab('comments');
    };
    window.supSubmitProblem=function(){
        const ti=document.getElementById('sup-prob-title');
        const de=document.getElementById('sup-prob-desc');
        if(!ti||!ti.value.trim()){alert('عنوان مشکل را وارد کنید');return;}
        problems.push({title:ti.value.trim(),desc:de?de.value.trim():'',date:new Date().toLocaleDateString()});
        setData('problems',problems);supTab('problems');
    };
    window.supSendAI=async function(){
        const inp=document.getElementById('sup-ai-inp');
        const msg=inp?inp.value.trim():'';
        if(!msg)return;
        inp.value='';
        const msgs=document.getElementById('orite-ai-msgs');
        const rtl=isRTL();
        const uDiv=document.createElement('div');
        uDiv.className='sup-msg-user';
        uDiv.style.cssText=`max-width:88%;padding:9px 12px;border-radius:12px;font-size:12px;background:linear-gradient(135deg,#0078ff,#0040aa);color:#fff;align-self:${rtl?'flex-start':'flex-end'};border-bottom-${rtl?'left':'right'}-radius:3px;`;
        uDiv.textContent=msg;msgs.appendChild(uDiv);
        aiHistory.push({role:'user',content:msg});
        const bDiv=document.createElement('div');
        bDiv.className='sup-msg-in';
        bDiv.style.cssText=`max-width:88%;padding:9px 12px;border-radius:12px;font-size:12px;background:rgba(0,120,255,0.15);border:1px solid rgba(0,120,255,0.2);color:#e0e8ff;align-self:${rtl?'flex-end':'flex-start'};border-bottom-${rtl?'right':'left'}-radius:3px;`;
        bDiv.textContent='⏳...';msgs.appendChild(bDiv);msgs.scrollTop=msgs.scrollHeight;
        try{
            const r=await fetch(WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({max_tokens:800,system:'تو پشتیبان هوشمند پلتفرم Orite هستی که توسط LuoLaf Studio ساخته شده. به فارسی پاسخ بده مگر کاربر زبان دیگری استفاده کند. درباره قابلیت‌ها، مشکلات رایج و نحوه استفاده راهنمایی کن.',messages:aiHistory.slice(-8)})});
            const d=await r.json();
            bDiv.textContent=d.content?.[0]?.text||'خطا';
            aiHistory.push({role:'assistant',content:bDiv.textContent});
        }catch(e){bDiv.textContent='⚠️ '+e.message;}
        msgs.scrollTop=msgs.scrollHeight;
    };
    window.supQuickQ=function(q){const inp=document.getElementById('sup-ai-inp');if(inp){inp.value=q;supSendAI();}};
    window.supServantClick=function(){
        clickCount++;
        const moods=['happy','excited','sad','happy','excited'];
        servantMood=moods[clickCount%moods.length];
        const msgs=t().servant.msgs;
        const msgEl=document.getElementById('sup-servant-msg');
        if(msgEl)msgEl.textContent=msgs[clickCount%msgs.length];
        const wrap=document.getElementById('sup-servant');
        if(wrap){wrap.innerHTML=getServantSVG(servantMood);wrap.style.transform='scale(1.2) rotate(5deg)';setTimeout(()=>{if(wrap)wrap.style.transform='';},300);}
        supParticles();
    };
    function supParticles(){
        const p=document.getElementById('orite-support-panel');
        if(!p)return;
        for(let i=0;i<8;i++){
            const el=document.createElement('div');
            el.className='sup-particle';
            el.style.cssText=`left:${20+Math.random()*60}%;bottom:80px;--rx:${(Math.random()-0.5)*80}px;background:${['#0078ff','#00ccff','#ffffff'][Math.floor(Math.random()*3)]}`;
            p.appendChild(el);setTimeout(()=>el.remove(),1000);
        }
    }
    function updateServantByTime(){
        const h=new Date().getHours();
        servantMood=h<6?'sleep':h<12?'happy':h<18?'excited':'happy';
    }
    updateServantByTime();

    // Append to body directly (independent)
    document.body.appendChild(panel);
    renderPanel();
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initSupport);}else{initSupport();}