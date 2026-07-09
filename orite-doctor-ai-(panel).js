function initDoctorAI() {
    const existing = document.getElementById('orite-doctor-panel');
    if (existing) existing.remove();
    const existingStyle = document.getElementById('orite-doctor-style');
    if (existingStyle) existingStyle.remove();

    const WORKER_URL = 'https://orite-hub-tools-ai.amiralitanaomi2015.workers.dev';

    const LANGS = {
        fa:{dir:'rtl',font:'Vazirmatn',title:'دکتر هوشمند Orite',subtitle:'مشاور پزشکی هوش مصنوعی',close:'✖',disclaimer:'⚠️ این پنل فقط جهت اطلاع‌رسانی است و جایگزین مشاوره پزشکی واقعی نمی‌شود.',tools:{symptom:'تشخیص علائم',medicine:'راهنمای دارو',blood:'تحلیل آزمایش',specialist:'انتخاب متخصص',mental:'سلامت روان',nutrition:'تغذیه و رژیم',exercise:'ورزش درمانی',emergency:'اورژانس',home_exercise:'ورزش خانگی'},chat:{placeholder:'سوال پزشکی خود را بنویسید...',send:'ارسال',welcome:'سلام! من دکتر AI هستم 🩺\nچطور می‌توانم کمکتان کنم؟'},inputs:{symptom:'علائم خود را شرح دهید...',medicine:'نام دارو یا بیماری را بنویسید...',blood:'نتایج آزمایش خون را وارد کنید...',specialist:'مشکل یا بیماری خود را بنویسید...',mental:'احساسات و وضعیت روحی خود را بنویسید...',nutrition:'هدف، وزن، سن و شرایط خود را بنویسید...',exercise:'وضعیت جسمی و هدف درمانی را بنویسید...',emergency:'وضعیت اورژانسی را توضیح دهید...',home_exercise:'سن، وضعیت جسمی و هدف خود را بنویسید...'},run:'دریافت مشاوره 🩺',running:'در حال تحلیل...',footer:{manager:'مدیر پروژه: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'انتخاب زبان'},
        en:{dir:'ltr',font:'Inter',title:'Orite AI Doctor',subtitle:'AI Medical Consultant',close:'✖',disclaimer:'⚠️ This panel is for informational purposes only and does not replace real medical advice.',tools:{symptom:'Symptom Checker',medicine:'Medicine Guide',blood:'Blood Test Analysis',specialist:'Find Specialist',mental:'Mental Health',nutrition:'Nutrition & Diet',exercise:'Exercise Therapy',emergency:'Emergency Aid',home_exercise:'Home Workout'},chat:{placeholder:'Write your medical question...',send:'Send',welcome:'Hello! I\'m your AI Doctor 🩺\nHow can I help you today?'},inputs:{symptom:'Describe your symptoms...',medicine:'Enter medication or disease name...',blood:'Enter your blood test results...',specialist:'Describe your problem or condition...',mental:'Describe your feelings and mental state...',nutrition:'Enter your goal, weight, age and conditions...',exercise:'Describe your physical condition and treatment goal...',emergency:'Describe the emergency situation...',home_exercise:'Enter your age, fitness level and goal...'},run:'Get Consultation 🩺',running:'Analyzing...',footer:{manager:'Project Manager: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Select Language'},
        tr:{dir:'ltr',font:'Inter',title:'Orite AI Doktor',subtitle:'Yapay Zeka Tıbbi Danışmanı',close:'✖',disclaimer:'⚠️ Bu panel yalnızca bilgilendirme amaçlıdır ve gerçek tıbbi tavsiyenin yerini tutmaz.',tools:{symptom:'Belirti Kontrolü',medicine:'İlaç Rehberi',blood:'Kan Testi Analizi',specialist:'Uzman Bul',mental:'Ruh Sağlığı',nutrition:'Beslenme ve Diyet',exercise:'Egzersiz Terapisi',emergency:'Acil Yardım',home_exercise:'Ev Egzersizi'},chat:{placeholder:'Tıbbi sorunuzu yazın...',send:'Gönder',welcome:'Merhaba! Ben AI Doktorunuzum 🩺\nSize nasıl yardımcı olabilirim?'},inputs:{symptom:'Belirtilerinizi açıklayın...',medicine:'İlaç veya hastalık adını girin...',blood:'Kan testi sonuçlarınızı girin...',specialist:'Sorununuzu veya durumunuzu açıklayın...',mental:'Duygularınızı ve ruh halinizi açıklayın...',nutrition:'Hedefinizi, kilonuzu, yaşınızı ve koşullarınızı girin...',exercise:'Fiziksel durumunuzu ve tedavi hedefinizi açıklayın...',emergency:'Acil durumu açıklayın...',home_exercise:'Yaşınızı, kondisyon seviyenizi ve hedefinizi girin...'},run:'Danışmanlık Al 🩺',running:'Analiz ediliyor...',footer:{manager:'Proje Yöneticisi: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Dil Seçin'},
        ar:{dir:'rtl',font:'Vazirmatn',title:'دكتور Orite الذكي',subtitle:'المستشار الطبي بالذكاء الاصطناعي',close:'✖',disclaimer:'⚠️ هذه اللوحة للأغراض الإعلامية فقط ولا تحل محل المشورة الطبية الحقيقية.',tools:{symptom:'فحص الأعراض',medicine:'دليل الدواء',blood:'تحليل فحص الدم',specialist:'إيجاد متخصص',mental:'الصحة النفسية',nutrition:'التغذية والحمية',exercise:'العلاج بالتمرين',emergency:'الإسعافات الأولية',home_exercise:'تمارين منزلية'},chat:{placeholder:'اكتب سؤالك الطبي...',send:'إرسال',welcome:'مرحباً! أنا دكتورك الذكي 🩺\nكيف يمكنني مساعدتك؟'},inputs:{symptom:'صف أعراضك...',medicine:'أدخل اسم الدواء أو المرض...',blood:'أدخل نتائج فحص الدم...',specialist:'صف مشكلتك أو حالتك...',mental:'صف مشاعرك وحالتك النفسية...',nutrition:'أدخل هدفك ووزنك وعمرك وظروفك...',exercise:'صف حالتك الجسدية وهدفك العلاجي...',emergency:'صف حالة الطوارئ...',home_exercise:'أدخل عمرك ومستوى لياقتك وهدفك...'},run:'احصل على استشارة 🩺',running:'جارٍ التحليل...',footer:{manager:'مدير المشروع: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'اختر اللغة'},
        fr:{dir:'ltr',font:'Inter',title:'Docteur IA Orite',subtitle:'Consultant Médical IA',close:'✖',disclaimer:'⚠️ Ce panneau est uniquement à titre informatif et ne remplace pas les conseils médicaux réels.',tools:{symptom:'Vérificateur de Symptômes',medicine:'Guide Médicaments',blood:'Analyse Prise de Sang',specialist:'Trouver Spécialiste',mental:'Santé Mentale',nutrition:'Nutrition et Régime',exercise:'Thérapie par l\'Exercice',emergency:'Premiers Secours',home_exercise:'Exercice à Domicile'},chat:{placeholder:'Écrivez votre question médicale...',send:'Envoyer',welcome:'Bonjour! Je suis votre Docteur IA 🩺\nComment puis-je vous aider?'},inputs:{symptom:'Décrivez vos symptômes...',medicine:'Entrez le nom du médicament ou de la maladie...',blood:'Entrez vos résultats de prise de sang...',specialist:'Décrivez votre problème ou condition...',mental:'Décrivez vos sentiments et état mental...',nutrition:'Entrez votre objectif, poids, âge et conditions...',exercise:'Décrivez votre condition physique et objectif...',emergency:'Décrivez la situation d\'urgence...',home_exercise:'Entrez votre âge, niveau de forme et objectif...'},run:'Obtenir une Consultation 🩺',running:'Analyse en cours...',footer:{manager:'Chef de Projet: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Choisir la Langue'},
        de:{dir:'ltr',font:'Inter',title:'Orite KI-Doktor',subtitle:'KI-Medizinberater',close:'✖',disclaimer:'⚠️ Dieses Panel dient nur zur Information und ersetzt keine echte medizinische Beratung.',tools:{symptom:'Symptomprüfer',medicine:'Medikamentenleitfaden',blood:'Bluttestanalyse',specialist:'Facharzt finden',mental:'Psychische Gesundheit',nutrition:'Ernährung & Diät',exercise:'Bewegungstherapie',emergency:'Erste Hilfe',home_exercise:'Heimtraining'},chat:{placeholder:'Schreiben Sie Ihre medizinische Frage...',send:'Senden',welcome:'Hallo! Ich bin Ihr KI-Doktor 🩺\nWie kann ich Ihnen helfen?'},inputs:{symptom:'Beschreiben Sie Ihre Symptome...',medicine:'Geben Sie Medikament oder Krankheit ein...',blood:'Geben Sie Ihre Bluttestergebnisse ein...',specialist:'Beschreiben Sie Ihr Problem...',mental:'Beschreiben Sie Ihre Gefühle und geistigen Zustand...',nutrition:'Geben Sie Ihr Ziel, Gewicht, Alter ein...',exercise:'Beschreiben Sie Ihren körperlichen Zustand...',emergency:'Beschreiben Sie den Notfall...',home_exercise:'Geben Sie Ihr Alter, Fitnesslevel und Ziel ein...'},run:'Beratung erhalten 🩺',running:'Wird analysiert...',footer:{manager:'Projektmanager: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Sprache wählen'},
        es:{dir:'ltr',font:'Inter',title:'Doctor IA Orite',subtitle:'Consultor Médico IA',close:'✖',disclaimer:'⚠️ Este panel es solo informativo y no reemplaza el consejo médico real.',tools:{symptom:'Verificador de Síntomas',medicine:'Guía de Medicamentos',blood:'Análisis de Sangre',specialist:'Encontrar Especialista',mental:'Salud Mental',nutrition:'Nutrición y Dieta',exercise:'Terapia de Ejercicio',emergency:'Primeros Auxilios',home_exercise:'Ejercicio en Casa'},chat:{placeholder:'Escribe tu pregunta médica...',send:'Enviar',welcome:'¡Hola! Soy tu Doctor IA 🩺\n¿Cómo puedo ayudarte?'},inputs:{symptom:'Describe tus síntomas...',medicine:'Ingresa el nombre del medicamento o enfermedad...',blood:'Ingresa los resultados de tu análisis de sangre...',specialist:'Describe tu problema o condición...',mental:'Describe tus sentimientos y estado mental...',nutrition:'Ingresa tu objetivo, peso, edad y condiciones...',exercise:'Describe tu condición física y objetivo...',emergency:'Describe la situación de emergencia...',home_exercise:'Ingresa tu edad, nivel de condición física y objetivo...'},run:'Obtener Consulta 🩺',running:'Analizando...',footer:{manager:'Gerente del Proyecto: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Seleccionar Idioma'},
        ru:{dir:'ltr',font:'Inter',title:'ИИ-Доктор Orite',subtitle:'Медицинский консультант ИИ',close:'✖',disclaimer:'⚠️ Эта панель предназначена только для информационных целей и не заменяет реальную медицинскую консультацию.',tools:{symptom:'Проверка симптомов',medicine:'Руководство по лекарствам',blood:'Анализ крови',specialist:'Найти специалиста',mental:'Психическое здоровье',nutrition:'Питание и диета',exercise:'Лечебная физкультура',emergency:'Первая помощь',home_exercise:'Домашние упражнения'},chat:{placeholder:'Напишите свой медицинский вопрос...',send:'Отправить',welcome:'Привет! Я ваш ИИ-Доктор 🩺\nКак я могу вам помочь?'},inputs:{symptom:'Опишите свои симптомы...',medicine:'Введите название лекарства или болезни...',blood:'Введите результаты анализа крови...',specialist:'Опишите свою проблему...',mental:'Опишите свои чувства и психическое состояние...',nutrition:'Введите цель, вес, возраст и условия...',exercise:'Опишите физическое состояние и цель лечения...',emergency:'Опишите экстренную ситуацию...',home_exercise:'Введите ваш возраст, уровень физической подготовки и цель...'},run:'Получить консультацию 🩺',running:'Анализируется...',footer:{manager:'Менеджер проекта: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Выбрать язык'},
        zh:{dir:'ltr',font:'Inter',title:'Orite AI医生',subtitle:'AI医疗顾问',close:'✖',disclaimer:'⚠️ 此面板仅供参考，不能替代真正的医疗建议。',tools:{symptom:'症状检查',medicine:'药物指南',blood:'血液检测分析',specialist:'寻找专科医生',mental:'心理健康',nutrition:'营养与饮食',exercise:'运动疗法',emergency:'急救',home_exercise:'居家运动'},chat:{placeholder:'写下您的医疗问题...',send:'发送',welcome:'您好！我是您的AI医生 🩺\n我能为您做什么？'},inputs:{symptom:'描述您的症状...',medicine:'输入药物或疾病名称...',blood:'输入您的血液检测结果...',specialist:'描述您的问题或状况...',mental:'描述您的感受和心理状态...',nutrition:'输入您的目标、体重、年龄和状况...',exercise:'描述您的身体状况和治疗目标...',emergency:'描述紧急情况...',home_exercise:'输入您的年龄、健身水平和目标...'},run:'获取咨询 🩺',running:'分析中...',footer:{manager:'项目经理：LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'选择语言'},
        ko:{dir:'ltr',font:'Inter',title:'Orite AI 의사',subtitle:'AI 의료 상담사',close:'✖',disclaimer:'⚠️ 이 패널은 정보 제공 목적으로만 사용되며 실제 의료 조언을 대체하지 않습니다.',tools:{symptom:'증상 확인',medicine:'약물 가이드',blood:'혈액 검사 분석',specialist:'전문의 찾기',mental:'정신 건강',nutrition:'영양 및 식단',exercise:'운동 치료',emergency:'응급 처치',home_exercise:'홈 운동'},chat:{placeholder:'의료 질문을 작성하세요...',send:'전송',welcome:'안녕하세요! 저는 AI 의사입니다 🩺\n어떻게 도와드릴까요?'},inputs:{symptom:'증상을 설명해 주세요...',medicine:'약물 또는 질병 이름을 입력하세요...',blood:'혈액 검사 결과를 입력하세요...',specialist:'문제 또는 상태를 설명해 주세요...',mental:'감정과 정신 상태를 설명해 주세요...',nutrition:'목표, 체중, 나이 및 조건을 입력하세요...',exercise:'신체 상태와 치료 목표를 설명해 주세요...',emergency:'응급 상황을 설명해 주세요...',home_exercise:'나이, 체력 수준 및 목표를 입력하세요...'},run:'상담 받기 🩺',running:'분석 중...',footer:{manager:'프로젝트 관리자: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'언어 선택'},
        ja:{dir:'ltr',font:'Inter',title:'Orite AI ドクター',subtitle:'AI医療コンサルタント',close:'✖',disclaimer:'⚠️ このパネルは情報提供のみを目的としており、実際の医療アドバイスの代わりにはなりません。',tools:{symptom:'症状チェッカー',medicine:'薬ガイド',blood:'血液検査分析',specialist:'専門医を探す',mental:'メンタルヘルス',nutrition:'栄養と食事',exercise:'運動療法',emergency:'応急処置',home_exercise:'自宅トレーニング'},chat:{placeholder:'医療的な質問を書いてください...',send:'送信',welcome:'こんにちは！私はAIドクターです 🩺\nどのようにお役に立てますか？'},inputs:{symptom:'症状を説明してください...',medicine:'薬または病気の名前を入力してください...',blood:'血液検査結果を入力してください...',specialist:'問題または状態を説明してください...',mental:'気持ちと精神状態を説明してください...',nutrition:'目標、体重、年齢と条件を入力してください...',exercise:'身体状態と治療目標を説明してください...',emergency:'緊急事態を説明してください...',home_exercise:'年齢、フィットネスレベルと目標を入力してください...'},run:'相談を受ける 🩺',running:'分析中...',footer:{manager:'プロジェクトマネージャー: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'言語を選択'},
        it:{dir:'ltr',font:'Inter',title:'Dottore IA Orite',subtitle:'Consulente Medico IA',close:'✖',disclaimer:'⚠️ Questo pannello è solo informativo e non sostituisce la consulenza medica reale.',tools:{symptom:'Controllo Sintomi',medicine:'Guida Farmaci',blood:'Analisi Esame Sangue',specialist:'Trova Specialista',mental:'Salute Mentale',nutrition:'Nutrizione e Dieta',exercise:'Terapia dell\'Esercizio',emergency:'Primo Soccorso',home_exercise:'Esercizi a Casa'},chat:{placeholder:'Scrivi la tua domanda medica...',send:'Invia',welcome:'Ciao! Sono il tuo Dottore IA 🩺\nCome posso aiutarti?'},inputs:{symptom:'Descrivi i tuoi sintomi...',medicine:'Inserisci il nome del farmaco o della malattia...',blood:'Inserisci i risultati del tuo esame del sangue...',specialist:'Descrivi il tuo problema o condizione...',mental:'Descrivi i tuoi sentimenti e stato mentale...',nutrition:'Inserisci il tuo obiettivo, peso, età e condizioni...',exercise:'Descrivi la tua condizione fisica e obiettivo...',emergency:'Descrivi la situazione di emergenza...',home_exercise:'Inserisci la tua età, livello di forma fisica e obiettivo...'},run:'Ottieni Consulenza 🩺',running:'Analizzando...',footer:{manager:'Project Manager: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Seleziona Lingua'},
        pt:{dir:'ltr',font:'Inter',title:'Doutor IA Orite',subtitle:'Consultor Médico IA',close:'✖',disclaimer:'⚠️ Este painel é apenas informativo e não substitui o conselho médico real.',tools:{symptom:'Verificador de Sintomas',medicine:'Guia de Medicamentos',blood:'Análise de Exame de Sangue',specialist:'Encontrar Especialista',mental:'Saúde Mental',nutrition:'Nutrição e Dieta',exercise:'Terapia de Exercício',emergency:'Primeiros Socorros',home_exercise:'Exercício em Casa'},chat:{placeholder:'Escreva sua pergunta médica...',send:'Enviar',welcome:'Olá! Sou seu Doutor IA 🩺\nComo posso ajudá-lo?'},inputs:{symptom:'Descreva seus sintomas...',medicine:'Digite o nome do medicamento ou doença...',blood:'Digite os resultados do seu exame de sangue...',specialist:'Descreva seu problema ou condição...',mental:'Descreva seus sentimentos e estado mental...',nutrition:'Digite seu objetivo, peso, idade e condições...',exercise:'Descreva sua condição física e objetivo...',emergency:'Descreva a situação de emergência...',home_exercise:'Digite sua idade, nível de condicionamento e objetivo...'},run:'Obter Consulta 🩺',running:'Analisando...',footer:{manager:'Gerente de Projeto: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Selecionar Idioma'},
        hi:{dir:'ltr',font:'Inter',title:'Orite AI डॉक्टर',subtitle:'AI चिकित्सा सलाहकार',close:'✖',disclaimer:'⚠️ यह पैनल केवल सूचनात्मक उद्देश्यों के लिए है और वास्तविक चिकित्सा सलाह का विकल्प नहीं है।',tools:{symptom:'लक्षण जांच',medicine:'दवा गाइड',blood:'रक्त परीक्षण विश्लेषण',specialist:'विशेषज्ञ खोजें',mental:'मानसिक स्वास्थ्य',nutrition:'पोषण और आहार',exercise:'व्यायाम चिकित्सा',emergency:'आपातकालीन सहायता',home_exercise:'घरेलू व्यायाम'},chat:{placeholder:'अपना चिकित्सा प्रश्न लिखें...',send:'भेजें',welcome:'नमस्ते! मैं आपका AI डॉक्टर हूं 🩺\nमैं आपकी कैसे मदद कर सकता हूं?'},inputs:{symptom:'अपने लक्षण बताएं...',medicine:'दवा या बीमारी का नाम दर्ज करें...',blood:'अपने रक्त परीक्षण के परिणाम दर्ज करें...',specialist:'अपनी समस्या या स्थिति बताएं...',mental:'अपनी भावनाओं और मानसिक स्थिति बताएं...',nutrition:'अपना लक्ष्य, वजन, आयु और शर्तें दर्ज करें...',exercise:'अपनी शारीरिक स्थिति और उपचार लक्ष्य बताएं...',emergency:'आपातकालीन स्थिति बताएं...',home_exercise:'अपनी आयु, फिटनेस स्तर और लक्ष्य दर्ज करें...'},run:'परामर्श प्राप्त करें 🩺',running:'विश्लेषण हो रहा है...',footer:{manager:'प्रोजेक्ट मैनेजर: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'भाषा चुनें'},
        ms:{dir:'ltr',font:'Inter',title:'Doktor AI Orite',subtitle:'Perunding Perubatan AI',close:'✖',disclaimer:'⚠️ Panel ini hanya untuk tujuan maklumat dan tidak menggantikan nasihat perubatan sebenar.',tools:{symptom:'Pemeriksa Gejala',medicine:'Panduan Ubat',blood:'Analisis Ujian Darah',specialist:'Cari Pakar',mental:'Kesihatan Mental',nutrition:'Pemakanan & Diet',exercise:'Terapi Senaman',emergency:'Pertolongan Cemas',home_exercise:'Senaman di Rumah'},chat:{placeholder:'Tulis soalan perubatan anda...',send:'Hantar',welcome:'Helo! Saya Doktor AI anda 🩺\nBagaimana saya boleh membantu?'},inputs:{symptom:'Huraikan gejala anda...',medicine:'Masukkan nama ubat atau penyakit...',blood:'Masukkan keputusan ujian darah anda...',specialist:'Huraikan masalah atau keadaan anda...',mental:'Huraikan perasaan dan keadaan mental anda...',nutrition:'Masukkan matlamat, berat, umur dan keadaan anda...',exercise:'Huraikan keadaan fizikal dan matlamat rawatan anda...',emergency:'Huraikan situasi kecemasan...',home_exercise:'Masukkan umur, tahap kecergasan dan matlamat anda...'},run:'Dapatkan Perundingan 🩺',running:'Menganalisis...',footer:{manager:'Pengurus Projek: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Pilih Bahasa'},
        ku:{dir:'rtl',font:'Vazirmatn',title:'دکتۆری AI ی Orite',subtitle:'ڕاوێژکاری پزیشکی AI',close:'✖',disclaimer:'⚠️ ئەم پانێلە تەنها بۆ زانیاری دەردەکەوێت و شوێنی ڕاوێژی پزیشکی ڕاستەقینە ناگرێتەوە.',tools:{symptom:'پشکنینی نیشانەکان',medicine:'ڕێنمایی دەرمان',blood:'شیکاری تاقیکردنەوەی خوێن',specialist:'دۆزینەوەی پسپۆڕ',mental:'تەندروستی دەروونی',nutrition:'خواردنی تەندروست و رژیم',exercise:'چارەسەری وەرزش',emergency:'یارمەتیی فریاکەوتن',home_exercise:'وەرزشی ماڵەوە'},chat:{placeholder:'پرسیاری پزیشکیەکەت بنووسە...',send:'ناردن',welcome:'سڵاو! من دکتۆری AI ی تۆم 🩺\nچۆن دەتوانم یارمەتیت بدەم؟'},inputs:{symptom:'نیشانەکانت شی بکەرەوە...',medicine:'ناوی دەرمان یان نەخۆشی بنووسە...',blood:'ئەنجامەکانی تاقیکردنەوەی خوێنت بنووسە...',specialist:'کێشە یان بارودۆخەکەت شی بکەرەوە...',mental:'هەستەکانت و بارودۆخی دەروونیت شی بکەرەوە...',nutrition:'ئامانج، کێش، تەمەن و بارودۆخەکانت بنووسە...',exercise:'بارودۆخی جەستەیی و ئامانجی چارەسەرەکەت شی بکەرەوە...',emergency:'بارودۆخی فریاکەوتن شی بکەرەوە...',home_exercise:'تەمەن، ئاستی وەرزش و ئامانجەکەت بنووسە...'},run:'ڕاوێژ وەرگرە 🩺',running:'لە حاڵی شیکردنەوە...',footer:{manager:'بەڕێوەبەری پڕۆژە: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'زمان هەڵبژێرە'},
        he:{dir:'rtl',font:'Vazirmatn',title:'ד"ר AI של Orite',subtitle:'יועץ רפואי AI',close:'✖',disclaimer:'⚠️ פאנל זה הוא למטרות מידע בלבד ואינו מחליף ייעוץ רפואי אמיתי.',tools:{symptom:'בודק תסמינים',medicine:'מדריך תרופות',blood:'ניתוח בדיקת דם',specialist:'מצא מומחה',mental:'בריאות נפשית',nutrition:'תזונה ודיאטה',exercise:'טיפול בפעילות גופנית',emergency:'עזרה ראשונה',home_exercise:'אימון בבית'},chat:{placeholder:'כתוב את שאלתך הרפואית...',send:'שלח',welcome:'שלום! אני הרופא ה-AI שלך 🩺\nאיך אוכל לעזור לך?'},inputs:{symptom:'תאר את התסמינים שלך...',medicine:'הזן שם תרופה או מחלה...',blood:'הזן את תוצאות בדיקת הדם שלך...',specialist:'תאר את הבעיה או המצב שלך...',mental:'תאר את הרגשות והמצב הנפשי שלך...',nutrition:'הזן את מטרתך, משקל, גיל ומצב...',exercise:'תאר את מצבך הגופני ומטרת הטיפול...',emergency:'תאר את מצב החירום...',home_exercise:'הזן את גילך, רמת הכושר ומטרתך...'},run:'קבל ייעוץ 🩺',running:'מנתח...',footer:{manager:'מנהל פרויקט: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'בחר שפה'},
        tg:{dir:'ltr',font:'Inter',title:'Духтури AI-и Orite',subtitle:'Маслиҳатчии тиббии AI',close:'✖',disclaimer:'⚠️ Ин панел танҳо барои иттилоот аст ва маслиҳати тиббии воқеиро иваз намекунад.',tools:{symptom:'Санҷиши нишонаҳо',medicine:'Роҳнамои дору',blood:'Таҳлили санҷиши хун',specialist:'Ёфтани мутахассис',mental:'Саломатии равонӣ',nutrition:'Ғизо ва парҳез',exercise:'Табобат бо машқ',emergency:'Ёрии аввалин',home_exercise:'Машқи хонагӣ'},chat:{placeholder:'Саволи тиббии худро нависед...',send:'Фиристодан',welcome:'Салом! Ман духтури AI-и шумо ҳастам 🩺\nЧӣ тавр метавонам кӯмак кунам?'},inputs:{symptom:'Нишонаҳои худро тавсиф кунед...',medicine:'Номи дору ё бемориро ворид кунед...',blood:'Натиҷаи санҷиши хуни худро ворид кунед...',specialist:'Мушкилот ё вазъияти худро тавсиф кунед...',mental:'Эҳсосот ва ҳолати равонии худро тавсиф кунед...',nutrition:'Ҳадаф, вазн, синну сол ва шароити худро ворид кунед...',exercise:'Ҳолати ҷисмонӣ ва ҳадафи табобатии худро тавсиф кунед...',emergency:'Вазъияти фавқулоддаро тавсиф кунед...',home_exercise:'Синну сол, сатҳи варзиш ва ҳадафи худро ворид кунед...'},run:'Маслиҳат гирифтан 🩺',running:'Таҳлил мешавад...',footer:{manager:'Роҳбари лоиҳа: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Забонро интихоб кунед'},
        hy:{dir:'ltr',font:'Inter',title:'Orite AI Բժիշկ',subtitle:'AI Բժշկական Խորհրդատու',close:'✖',disclaimer:'⚠️ Այս վահանակը միայն տեղեկատվական նպատակների համար է և չի փոխարինում իրական բժշկական խորհրդատվությանը։',tools:{symptom:'Ախտանիշների ստուգիչ',medicine:'Դեղերի ուղեցույց',blood:'Արյան անալիզ',specialist:'Գտնել մասնագետ',mental:'Հոգեկան առողջություն',nutrition:'Սնուցում և դիետա',exercise:'Վարժողական թերապիա',emergency:'Առաջին օգնություն',home_exercise:'Տնային վարժություններ'},chat:{placeholder:'Գրեք ձեր բժշկական հարցը...',send:'Ուղարկել',welcome:'Բարև! Ես ձեր AI Բժիշկն եմ 🩺\nՈ՞րպես կարող եմ օգնել:'},inputs:{symptom:'Նկարագրեք ձեր ախտանիշները...',medicine:'Մուտքագրեք դեղի կամ հիվանդության անունը...',blood:'Մուտքագրեք ձեր արյան անալիզի արդյունքները...',specialist:'Նկարագրեք ձեր խնդիրը...',mental:'Նկարագրեք ձեր զգացողությունները...',nutrition:'Մուտքագրեք ձեր նպատակը, քաշը, տարիքը...',exercise:'Նկարագրեք ձեր ֆիզիկական վիճակը...',emergency:'Նկարագրեք արտակարգ իրավիճակը...',home_exercise:'Մուտքագրեք ձեր տարիքը, մարզական մակարդակը...'},run:'Ստանալ Խորհրդատվություն 🩺',running:'Վերլուծվում է...',footer:{manager:'Ծրаг. ղեկ.: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Ընտրել Լեզու'},
        hr:{dir:'ltr',font:'Inter',title:'Orite AI Doktor',subtitle:'AI Medicinski Savjetnik',close:'✖',disclaimer:'⚠️ Ovaj panel je samo informativne prirode i ne zamjenjuje pravi medicinski savjet.',tools:{symptom:'Provjera Simptoma',medicine:'Vodič za Lijekove',blood:'Analiza Krvnih Pretraga',specialist:'Pronađi Specijalista',mental:'Mentalno Zdravlje',nutrition:'Prehrana i Dijeta',exercise:'Terapija Vježbanjem',emergency:'Prva Pomoć',home_exercise:'Kućni Trening'},chat:{placeholder:'Napišite svoje medicinsko pitanje...',send:'Pošalji',welcome:'Zdravo! Ja sam vaš AI Doktor 🩺\nKako vam mogu pomoći?'},inputs:{symptom:'Opišite svoje simptome...',medicine:'Unesite naziv lijeka ili bolesti...',blood:'Unesite rezultate krvnih pretraga...',specialist:'Opišite svoj problem ili stanje...',mental:'Opišite svoje osjećaje i mentalno stanje...',nutrition:'Unesite cilj, težinu, dob i uvjete...',exercise:'Opišite svoje fizičko stanje i cilj...',emergency:'Opišite hitnu situaciju...',home_exercise:'Unesite dob, razinu kondicije i cilj...'},run:'Dobiti Savjet 🩺',running:'Analiziranje...',footer:{manager:'Voditelj Projekta: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Odaberi Jezik'},
        nl:{dir:'ltr',font:'Inter',title:'Orite AI Dokter',subtitle:'AI Medisch Adviseur',close:'✖',disclaimer:'⚠️ Dit paneel is alleen voor informatieve doeleinden en vervangt geen echt medisch advies.',tools:{symptom:'Symptoomcontrole',medicine:'Medicijngids',blood:'Bloedtestanalyse',specialist:'Specialist Vinden',mental:'Geestelijke Gezondheid',nutrition:'Voeding en Dieet',exercise:'Bewegingstherapie',emergency:'Eerste Hulp',home_exercise:'Thuistraining'},chat:{placeholder:'Schrijf uw medische vraag...',send:'Verzenden',welcome:'Hallo! Ik ben uw AI Dokter 🩺\nHoe kan ik u helpen?'},inputs:{symptom:'Beschrijf uw symptomen...',medicine:'Voer medicijn- of ziektennaam in...',blood:'Voer uw bloedtestresultaten in...',specialist:'Beschrijf uw probleem of aandoening...',mental:'Beschrijf uw gevoelens en mentale toestand...',nutrition:'Voer uw doel, gewicht, leeftijd in...',exercise:'Beschrijf uw fysieke conditie...',emergency:'Beschrijf de noodsituatie...',home_exercise:'Voer uw leeftijd, fitnessniveau in...'},run:'Advies Ontvangen 🩺',running:'Analyseren...',footer:{manager:'Projectmanager: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Taal Selecteren'},
        pl:{dir:'ltr',font:'Inter',title:'Orite AI Doktor',subtitle:'Doradca Medyczny AI',close:'✖',disclaimer:'⚠️ Ten panel służy wyłącznie celom informacyjnym i nie zastępuje prawdziwej porady medycznej.',tools:{symptom:'Sprawdzanie Objawów',medicine:'Przewodnik po Lekach',blood:'Analiza Badań Krwi',specialist:'Znajdź Specjalistę',mental:'Zdrowie Psychiczne',nutrition:'Żywienie i Dieta',exercise:'Terapia Ćwiczeniami',emergency:'Pierwsza Pomoc',home_exercise:'Ćwiczenia w Domu'},chat:{placeholder:'Napisz swoje pytanie medyczne...',send:'Wyślij',welcome:'Cześć! Jestem twoim Doktorem AI 🩺\nJak mogę ci pomóc?'},inputs:{symptom:'Opisz swoje objawy...',medicine:'Wpisz nazwę leku lub choroby...',blood:'Wpisz wyniki badań krwi...',specialist:'Opisz swój problem...',mental:'Opisz swoje uczucia i stan psychiczny...',nutrition:'Wpisz cel, wagę, wiek i warunki...',exercise:'Opisz swój stan fizyczny...',emergency:'Opisz sytuację awaryjną...',home_exercise:'Wpisz wiek, poziom sprawności i cel...'},run:'Uzyskaj Konsultację 🩺',running:'Analizowanie...',footer:{manager:'Kierownik Projektu: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Wybierz Język'},
        sv:{dir:'ltr',font:'Inter',title:'Orite AI Doktor',subtitle:'AI Medicinsk Konsult',close:'✖',disclaimer:'⚠️ Denna panel är endast informativ och ersätter inte verklig medicinsk rådgivning.',tools:{symptom:'Symtomkontroll',medicine:'Läkemedelsguide',blood:'Blodprovsanalys',specialist:'Hitta Specialist',mental:'Psykisk Hälsa',nutrition:'Näring och Diet',exercise:'Träningsterapi',emergency:'Första Hjälpen',home_exercise:'Hemträning'},chat:{placeholder:'Skriv din medicinska fråga...',send:'Skicka',welcome:'Hej! Jag är din AI Doktor 🩺\nHur kan jag hjälpa dig?'},inputs:{symptom:'Beskriv dina symtom...',medicine:'Ange medicinens eller sjukdomens namn...',blood:'Ange dina blodprovsresultat...',specialist:'Beskriv ditt problem...',mental:'Beskriv dina känslor och mentala tillstånd...',nutrition:'Ange ditt mål, vikt, ålder...',exercise:'Beskriv ditt fysiska tillstånd...',emergency:'Beskriv nödsituationen...',home_exercise:'Ange din ålder, konditionsnivå...'},run:'Få Konsultation 🩺',running:'Analyserar...',footer:{manager:'Projektledare: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Välj Språk'},
        no:{dir:'ltr',font:'Inter',title:'Orite AI Lege',subtitle:'AI Medisinsk Konsulent',close:'✖',disclaimer:'⚠️ Dette panelet er kun informativt og erstatter ikke ekte medisinsk råd.',tools:{symptom:'Symptomsjekker',medicine:'Medisinguide',blood:'Blodprøveanalyse',specialist:'Finn Spesialist',mental:'Psykisk Helse',nutrition:'Ernæring og Diett',exercise:'Treningsterapi',emergency:'Førstehjelp',home_exercise:'Hjemmetrening'},chat:{placeholder:'Skriv medisinsk spørsmål...',send:'Send',welcome:'Hei! Jeg er din AI Lege 🩺\nHvordan kan jeg hjelpe?'},inputs:{symptom:'Beskriv symptomene dine...',medicine:'Skriv inn medisin- eller sykdomsnavn...',blood:'Skriv inn blodprøveresultatene dine...',specialist:'Beskriv problemet ditt...',mental:'Beskriv følelsene dine...',nutrition:'Skriv inn mål, vekt, alder...',exercise:'Beskriv din fysiske tilstand...',emergency:'Beskriv nødsituasjonen...',home_exercise:'Skriv inn alder, kondisjonsnivå...'},run:'Få Konsultasjon 🩺',running:'Analyserer...',footer:{manager:'Prosjektleder: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Velg Språk'},
        da:{dir:'ltr',font:'Inter',title:'Orite AI Læge',subtitle:'AI Medicinsk Konsulent',close:'✖',disclaimer:'⚠️ Dette panel er kun informativt og erstatter ikke rigtig medicinsk rådgivning.',tools:{symptom:'Symptomtjekker',medicine:'Medicinvejledning',blood:'Blodprøveanalyse',specialist:'Find Specialist',mental:'Mental Sundhed',nutrition:'Ernæring og Diæt',exercise:'Træningsterapi',emergency:'Første Hjælp',home_exercise:'Hjemmetræning'},chat:{placeholder:'Skriv dit medicinske spørgsmål...',send:'Send',welcome:'Hej! Jeg er din AI Læge 🩺\nHvordan kan jeg hjælpe?'},inputs:{symptom:'Beskriv dine symptomer...',medicine:'Indtast medicin- eller sygdomsnavn...',blood:'Indtast dine blodprøveresultater...',specialist:'Beskriv dit problem...',mental:'Beskriv dine følelser...',nutrition:'Indtast mål, vægt, alder...',exercise:'Beskriv din fysiske tilstand...',emergency:'Beskriv nødsituationen...',home_exercise:'Indtast alder, konditionsniveau...'},run:'Få Konsultation 🩺',running:'Analyserer...',footer:{manager:'Projektleder: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Vælg Sprog'},
        fi:{dir:'ltr',font:'Inter',title:'Orite AI Lääkäri',subtitle:'AI Lääketieteellinen Neuvonantaja',close:'✖',disclaimer:'⚠️ Tämä paneeli on vain tiedoksi eikä korvaa oikeaa lääketieteellistä neuvontaa.',tools:{symptom:'Oiretarkistaja',medicine:'Lääkeopas',blood:'Verikoetaulukko',specialist:'Löydä Erikoislääkäri',mental:'Mielenterveys',nutrition:'Ravitsemus ja Dieetti',exercise:'Harjoitusterapia',emergency:'Ensiapu',home_exercise:'Kotiharjoittelu'},chat:{placeholder:'Kirjoita lääketieteellinen kysymyksesi...',send:'Lähetä',welcome:'Hei! Olen AI Lääkärisi 🩺\nKuinka voin auttaa?'},inputs:{symptom:'Kuvaile oireitasi...',medicine:'Syötä lääkkeen tai sairauden nimi...',blood:'Syötä verikoetuloiksesi...',specialist:'Kuvaile ongelmaasi...',mental:'Kuvaile tunteitasi...',nutrition:'Syötä tavoite, paino, ikä...',exercise:'Kuvaile fyysinen kuntosi...',emergency:'Kuvaile hätätilanne...',home_exercise:'Syötä ikä, kuntotaso...'},run:'Saa Konsultaatio 🩺',running:'Analysoidaan...',footer:{manager:'Projektipäällikkö: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Valitse Kieli'},
        uk:{dir:'ltr',font:'Inter',title:'Orite AI Лікар',subtitle:'AI Медичний Консультант',close:'✖',disclaimer:'⚠️ Ця панель призначена лише для інформаційних цілей і не замінює реальну медичну консультацію.',tools:{symptom:'Перевірка Симптомів',medicine:'Посібник з Ліків',blood:'Аналіз Крові',specialist:'Знайти Спеціаліста',mental:'Психічне Здоров\'я',nutrition:'Харчування та Дієта',exercise:'Лікувальна Фізкультура',emergency:'Перша Допомога',home_exercise:'Домашні Вправи'},chat:{placeholder:'Напишіть своє медичне питання...',send:'Надіслати',welcome:'Привіт! Я ваш AI Лікар 🩺\nЯк я можу допомогти?'},inputs:{symptom:'Опишіть свої симптоми...',medicine:'Введіть назву ліків або хвороби...',blood:'Введіть результати аналізу крові...',specialist:'Опишіть свою проблему...',mental:'Опишіть свої почуття...',nutrition:'Введіть мету, вагу, вік...',exercise:'Опишіть фізичний стан...',emergency:'Опишіть надзвичайну ситуацію...',home_exercise:'Введіть вік, рівень фізичної підготовки...'},run:'Отримати Консультацію 🩺',running:'Аналізується...',footer:{manager:'Менеджер проекту: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Вибрати Мову'},
        cs:{dir:'ltr',font:'Inter',title:'Orite AI Doktor',subtitle:'AI Lékařský Poradce',close:'✖',disclaimer:'⚠️ Tento panel slouží pouze pro informační účely a nenahrazuje skutečnou lékařskou radu.',tools:{symptom:'Kontrola Příznaků',medicine:'Průvodce Léky',blood:'Analýza Krevního Testu',specialist:'Najít Specialistu',mental:'Duševní Zdraví',nutrition:'Výživa a Dieta',exercise:'Pohybová Terapie',emergency:'První Pomoc',home_exercise:'Domácí Cvičení'},chat:{placeholder:'Napište svou lékařskou otázku...',send:'Odeslat',welcome:'Ahoj! Jsem váš AI Doktor 🩺\nJak vám mohu pomoci?'},inputs:{symptom:'Popište své příznaky...',medicine:'Zadejte název léku nebo nemoci...',blood:'Zadejte výsledky krevního testu...',specialist:'Popište svůj problém...',mental:'Popište své pocity...',nutrition:'Zadejte cíl, váhu, věk...',exercise:'Popište svůj fyzický stav...',emergency:'Popište nouzovou situaci...',home_exercise:'Zadejte věk, úroveň kondice...'},run:'Získat Konzultaci 🩺',running:'Analyzování...',footer:{manager:'Projektový Manažer: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Vybrat Jazyk'},
        ro:{dir:'ltr',font:'Inter',title:'Doctor AI Orite',subtitle:'Consultant Medical AI',close:'✖',disclaimer:'⚠️ Acest panou este doar informativ și nu înlocuiește sfatul medical real.',tools:{symptom:'Verificator Simptome',medicine:'Ghid Medicamente',blood:'Analiză Test Sânge',specialist:'Găsiți Specialist',mental:'Sănătate Mentală',nutrition:'Nutriție și Dietă',exercise:'Terapie prin Exerciții',emergency:'Prim Ajutor',home_exercise:'Exerciții Acasă'},chat:{placeholder:'Scrieți întrebarea medicală...',send:'Trimite',welcome:'Bună! Sunt Doctorul dvs. AI 🩺\nCum vă pot ajuta?'},inputs:{symptom:'Descrieți simptomele...',medicine:'Introduceți numele medicamentului...',blood:'Introduceți rezultatele analizei...',specialist:'Descrieți problema...',mental:'Descrieți sentimentele...',nutrition:'Introduceți obiectiv, greutate, vârstă...',exercise:'Descrieți starea fizică...',emergency:'Descrieți situația de urgență...',home_exercise:'Introduceți vârsta, nivelul de fitness...'},run:'Obțineți Consultație 🩺',running:'Analizând...',footer:{manager:'Manager Proiect: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Selectați Limba'},
        hu:{dir:'ltr',font:'Inter',title:'Orite AI Orvos',subtitle:'AI Orvosi Tanácsadó',close:'✖',disclaimer:'⚠️ Ez a panel csak tájékoztató jellegű és nem helyettesíti a valódi orvosi tanácsot.',tools:{symptom:'Tünetellenőrző',medicine:'Gyógyszer Útmutató',blood:'Vérvizsgálat Elemzés',specialist:'Specialista Keresése',mental:'Mentális Egészség',nutrition:'Táplálkozás és Diéta',exercise:'Mozgásterápia',emergency:'Elsősegély',home_exercise:'Otthoni Edzés'},chat:{placeholder:'Írja be orvosi kérdését...',send:'Küldés',welcome:'Szia! Én vagyok az AI Orvosod 🩺\nHogyan segíthetek?'},inputs:{symptom:'Írja le tüneteit...',medicine:'Adja meg a gyógyszer vagy betegség nevét...',blood:'Adja meg vérvizsgálati eredményeit...',specialist:'Írja le problémáját...',mental:'Írja le érzéseit...',nutrition:'Adja meg célját, súlyát, korát...',exercise:'Írja le fizikai állapotát...',emergency:'Írja le a vészhelyzetet...',home_exercise:'Adja meg korát, edzettségi szintjét...'},run:'Tanácsadás Kérése 🩺',running:'Elemzés...',footer:{manager:'Projektmenedzser: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Nyelv Kiválasztása'},
        id:{dir:'ltr',font:'Inter',title:'Dokter AI Orite',subtitle:'Konsultan Medis AI',close:'✖',disclaimer:'⚠️ Panel ini hanya untuk tujuan informasi dan tidak menggantikan saran medis nyata.',tools:{symptom:'Pemeriksa Gejala',medicine:'Panduan Obat',blood:'Analisis Tes Darah',specialist:'Cari Spesialis',mental:'Kesehatan Mental',nutrition:'Nutrisi & Diet',exercise:'Terapi Olahraga',emergency:'Pertolongan Pertama',home_exercise:'Olahraga di Rumah'},chat:{placeholder:'Tulis pertanyaan medis Anda...',send:'Kirim',welcome:'Halo! Saya Dokter AI Anda 🩺\nBagaimana saya bisa membantu?'},inputs:{symptom:'Jelaskan gejala Anda...',medicine:'Masukkan nama obat atau penyakit...',blood:'Masukkan hasil tes darah Anda...',specialist:'Jelaskan masalah Anda...',mental:'Jelaskan perasaan dan kondisi mental Anda...',nutrition:'Masukkan tujuan, berat badan, usia...',exercise:'Jelaskan kondisi fisik dan tujuan perawatan...',emergency:'Jelaskan situasi darurat...',home_exercise:'Masukkan usia, tingkat kebugaran dan tujuan...'},run:'Dapatkan Konsultasi 🩺',running:'Menganalisis...',footer:{manager:'Manajer Proyek: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Pilih Bahasa'},
        th:{dir:'ltr',font:'Inter',title:'หมอ AI ของ Orite',subtitle:'ที่ปรึกษาทางการแพทย์ AI',close:'✖',disclaimer:'⚠️ แผงนี้มีไว้เพื่อวัตถุประสงค์ข้อมูลเท่านั้น และไม่แทนที่คำแนะนำทางการแพทย์จริง',tools:{symptom:'ตรวจสอบอาการ',medicine:'คู่มือยา',blood:'วิเคราะห์ผลเลือด',specialist:'หาผู้เชี่ยวชาญ',mental:'สุขภาพจิต',nutrition:'โภชนาการและอาหาร',exercise:'กายภาพบำบัด',emergency:'การปฐมพยาบาล',home_exercise:'ออกกำลังกายที่บ้าน'},chat:{placeholder:'เขียนคำถามทางการแพทย์ของคุณ...',send:'ส่ง',welcome:'สวัสดี! ฉันคือหมอ AI ของคุณ 🩺\nฉันจะช่วยคุณได้อย่างไร?'},inputs:{symptom:'อธิบายอาการของคุณ...',medicine:'ป้อนชื่อยาหรือโรค...',blood:'ป้อนผลการตรวจเลือดของคุณ...',specialist:'อธิบายปัญหาหรือสภาพของคุณ...',mental:'อธิบายความรู้สึกและสภาพจิตใจของคุณ...',nutrition:'ป้อนเป้าหมาย น้ำหนัก อายุของคุณ...',exercise:'อธิบายสภาพร่างกายและเป้าหมาย...',emergency:'อธิบายสถานการณ์ฉุกเฉิน...',home_exercise:'ป้อนอายุ ระดับความฟิต และเป้าหมาย...'},run:'รับคำปรึกษา 🩺',running:'กำลังวิเคราะห์...',footer:{manager:'ผู้จัดการโครงการ: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'เลือกภาษา'},
        vi:{dir:'ltr',font:'Inter',title:'Bác sĩ AI Orite',subtitle:'Tư vấn Y tế AI',close:'✖',disclaimer:'⚠️ Bảng này chỉ dành cho mục đích thông tin và không thay thế lời khuyên y tế thực sự.',tools:{symptom:'Kiểm tra Triệu chứng',medicine:'Hướng dẫn Thuốc',blood:'Phân tích Xét nghiệm Máu',specialist:'Tìm Chuyên gia',mental:'Sức khỏe Tâm thần',nutrition:'Dinh dưỡng & Chế độ ăn',exercise:'Trị liệu bằng Tập thể dục',emergency:'Sơ cứu',home_exercise:'Tập thể dục tại nhà'},chat:{placeholder:'Viết câu hỏi y tế của bạn...',send:'Gửi',welcome:'Xin chào! Tôi là Bác sĩ AI của bạn 🩺\nTôi có thể giúp gì cho bạn?'},inputs:{symptom:'Mô tả triệu chứng của bạn...',medicine:'Nhập tên thuốc hoặc bệnh...',blood:'Nhập kết quả xét nghiệm máu...',specialist:'Mô tả vấn đề hoặc tình trạng...',mental:'Mô tả cảm xúc và trạng thái tinh thần...',nutrition:'Nhập mục tiêu, cân nặng, tuổi...',exercise:'Mô tả tình trạng thể chất...',emergency:'Mô tả tình huống khẩn cấp...',home_exercise:'Nhập tuổi, mức độ thể lực...'},run:'Nhận Tư vấn 🩺',running:'Đang phân tích...',footer:{manager:'Quản lý Dự án: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Chọn Ngôn ngữ'},
        sw:{dir:'ltr',font:'Inter',title:'Daktari AI wa Orite',subtitle:'Mshauri wa Matibabu AI',close:'✖',disclaimer:'⚠️ Paneli hii ni kwa madhumuni ya habari tu na haibadilishi ushauri wa matibabu halisi.',tools:{symptom:'Ukaguzi wa Dalili',medicine:'Mwongozo wa Dawa',blood:'Uchambuzi wa Kipimo cha Damu',specialist:'Pata Mtaalamu',mental:'Afya ya Akili',nutrition:'Lishe na Mlo',exercise:'Tiba ya Mazoezi',emergency:'Msaada wa Dharura',home_exercise:'Mazoezi Nyumbani'},chat:{placeholder:'Andika swali lako la matibabu...',send:'Tuma',welcome:'Hujambo! Mimi ni Daktari wako wa AI 🩺\nNinawezaje kukusaidia?'},inputs:{symptom:'Eleza dalili zako...',medicine:'Ingiza jina la dawa au ugonjwa...',blood:'Ingiza matokeo ya kipimo chako cha damu...',specialist:'Eleza tatizo lako...',mental:'Eleza hisia zako na hali ya akili...',nutrition:'Ingiza lengo, uzito, umri...',exercise:'Eleza hali yako ya mwili...',emergency:'Eleza hali ya dharura...',home_exercise:'Ingiza umri, kiwango cha fitness...'},run:'Pata Ushauri 🩺',running:'Inachambua...',footer:{manager:'Meneja wa Mradi: LuoLaf.Studio',version:'© 2026 Orite Doctor AI v1.0'},lang:'Chagua Lugha'}
    };

    const TOOL_SYSTEMS = {
        symptom: 'You are an expert AI doctor specializing in symptom diagnosis. Analyze the symptoms carefully and provide: 1) Most likely conditions (list 3-5) 2) Severity assessment 3) Recommended next steps 4) Warning signs to watch for 5) When to see a doctor immediately. Be thorough, accurate, and professional. Respond in the same language as the user.',
        medicine: 'You are an expert AI pharmacist and medical doctor. Provide comprehensive information about medications including: 1) Drug description and mechanism 2) Indications and uses 3) Dosage guidelines 4) Side effects 5) Drug interactions 6) Contraindications 7) Important warnings. Always remind to consult a real doctor. Respond in the same language as the user.',
        blood: 'You are an expert AI hematologist and lab analyst. Analyze blood test results and provide: 1) Interpretation of each value 2) Normal ranges comparison 3) What abnormal values indicate 4) Health implications 5) Recommended follow-up tests 6) Lifestyle recommendations. Be detailed and accurate. Respond in the same language as the user.',
        specialist: 'You are an AI medical triage expert. Based on the described condition, recommend: 1) The most appropriate medical specialist 2) Why this specialist is needed 3) Urgency level (routine/soon/urgent/emergency) 4) What to expect in the consultation 5) Questions to ask the specialist 6) How to prepare for the appointment. Respond in the same language as the user.',
        mental: 'You are an expert AI psychiatrist and psychologist. Provide compassionate and professional mental health support: 1) Validate feelings and concerns 2) Identify potential conditions 3) Coping strategies 4) Self-care recommendations 5) Professional resources 6) Crisis resources if needed. Always be empathetic and supportive. Respond in the same language as the user.',
        nutrition: 'You are an expert AI nutritionist and dietitian. Create personalized nutrition guidance including: 1) Nutritional assessment 2) Recommended daily intake 3) Foods to include and avoid 4) Meal planning suggestions 5) Supplement recommendations 6) Hydration guidelines 7) Specific dietary advice for conditions mentioned. Respond in the same language as the user.',
        exercise: 'You are an expert AI physiotherapist and exercise medicine specialist. Provide therapeutic exercise guidance: 1) Assessment of the condition 2) Appropriate exercises for the condition 3) Exercises to avoid 4) Frequency and duration 5) Progression plan 6) Recovery tips 7) When to stop and seek help. Respond in the same language as the user.',
        emergency: 'You are an expert AI emergency medicine doctor. Provide IMMEDIATE and CRITICAL first aid guidance: 1) Immediate actions to take RIGHT NOW 2) Call emergency services if life-threatening 3) Step-by-step first aid instructions 4) What NOT to do 5) Signs of improvement vs deterioration 6) Post-emergency care. Be clear, concise, and prioritize safety. ALWAYS recommend calling emergency services for serious situations. Respond in the same language as the user.',
        home_exercise: 'You are an expert AI personal trainer and fitness coach specializing in home workouts. Create a personalized home exercise plan: 1) Warm-up routine (5-10 min) 2) Main workout (20-30 min) with specific exercises, sets, reps 3) Cool-down routine 4) Weekly schedule 5) Progression plan 6) Equipment alternatives 7) Safety tips. Make it practical and achievable at home. Respond in the same language as the user.'
    };

    const TOOL_ICONS = {
        symptom:'🩺',medicine:'💊',blood:'🧬',specialist:'🏥',
        mental:'🧠',nutrition:'🍎',exercise:'🏃',emergency:'⚕️',home_exercise:'💪'
    };

    const TOOL_COLORS = {
        symptom:'#e879f9',medicine:'#818cf8',blood:'#f87171',
        specialist:'#34d399',mental:'#60a5fa',nutrition:'#4ade80',
        exercise:'#fbbf24',emergency:'#ff6b6b',home_exercise:'#a78bfa'
    };

    let curLang = 'fa', curTool = 'symptom', aiHistory = [];

    function t(){return LANGS[curLang]||LANGS['fa'];}
    function isRTL(){return t().dir==='rtl';}

    const style = document.createElement('style');
    style.id = 'orite-doctor-style';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap');
        #orite-doctor-panel{animation:docFadeIn 0.5s cubic-bezier(0.4,0,0.2,1);}
        @keyframes docFadeIn{from{opacity:0;transform:translateY(20px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes docPulse{0%,100%{box-shadow:0 0 0 0 rgba(232,121,249,0.4)}50%{box-shadow:0 0 0 12px rgba(232,121,249,0)}}
        @keyframes docFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes docScan{0%{top:0}100%{top:100%}}
        @keyframes docGlow{0%,100%{text-shadow:0 0 8px rgba(232,121,249,0.6)}50%{text-shadow:0 0 20px rgba(232,121,249,1),0 0 40px rgba(129,140,248,0.4)}}
        @keyframes docBlink{0%,100%{opacity:1}50%{opacity:0.3}}
        @keyframes docSlideL{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}}
        @keyframes docSlideR{from{opacity:0;transform:translateX(16px)}to{opacity:1;transform:translateX(0)}}
        @keyframes docMsgIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes docSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes docHeartbeat{0%,100%{transform:scale(1)}14%{transform:scale(1.15)}28%{transform:scale(1)}42%{transform:scale(1.1)}70%{transform:scale(1)}}
        .doc-tool-btn{transition:all 0.3s;cursor:pointer;}
        .doc-tool-btn:hover{transform:translateY(-3px) scale(1.02);}
        .doc-tool-btn.active{transform:translateY(-2px);box-shadow:0 8px 25px rgba(232,121,249,0.3);}
        .doc-tab-btn{transition:all 0.25s;cursor:pointer;}
        .doc-tab-btn:hover{transform:translateY(-2px);}
        .doc-tab-btn.active{background:linear-gradient(135deg,#e879f9,#818cf8)!important;color:#fff!important;border-color:transparent!important;}
        .doc-input:focus{border-color:#e879f9!important;box-shadow:0 0 0 3px rgba(232,121,249,0.15)!important;outline:none;}
        .doc-msg-bot{animation:docMsgIn 0.3s ease;}
        .doc-msg-user{animation:docMsgIn 0.3s ease;}
        .doc-scan{position:absolute;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(232,121,249,0.6),transparent);animation:docScan 3s linear infinite;pointer-events:none;}
        .doc-glow{animation:docGlow 2s ease-in-out infinite;}
        .doc-heart{animation:docHeartbeat 1.5s ease-in-out infinite;}
        .doc-float{animation:docFloat 3s ease-in-out infinite;}
        .doc-btn{transition:all 0.2s;box-shadow:0 4px 0 rgba(0,0,0,0.3);}
        .doc-btn:hover{transform:translateY(-2px);box-shadow:0 6px 0 rgba(0,0,0,0.3);}
        .doc-btn:active{transform:translateY(3px);box-shadow:0 1px 0 rgba(0,0,0,0.3);}
        .doc-spin{animation:docSpin 1s linear infinite;display:inline-block;}
        #orite-doctor-panel::-webkit-scrollbar{width:4px;}
        #orite-doctor-panel::-webkit-scrollbar-thumb{background:rgba(232,121,249,0.3);border-radius:4px;}
        #doc-chat-msgs::-webkit-scrollbar{width:4px;}
        #doc-chat-msgs::-webkit-scrollbar-thumb{background:rgba(232,121,249,0.2);border-radius:4px;}
    `;
    document.head.appendChild(style);

    const panel = document.createElement('div');
    panel.id = 'orite-doctor-panel';

    function renderPanel(){
        const tr = t();
        const rtl = isRTL();
        panel.style.cssText = `
            background:linear-gradient(135deg,#0d0714,#0a0a1a,#0d0714);
            border:1px solid rgba(232,121,249,0.25);
            border-radius:22px;padding:20px;margin-top:14px;
            color:#f0e8ff;direction:${tr.dir};
            font-family:'${tr.font}',Tahoma,Arial,sans-serif;
            max-height:800px;overflow-y:auto;position:relative;
        `;

        panel.innerHTML = `
        <div class="doc-scan"></div>

        <!-- HEADER -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid rgba(232,121,249,0.15)">
            <div style="display:flex;align-items:center;gap:12px">
                <div style="position:relative">
                    <div style="width:44px;height:44px;border-radius:14px;background:linear-gradient(135deg,#e879f9,#818cf8);display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 4px 20px rgba(232,121,249,0.4);animation:docPulse 2s infinite">🩺</div>
                    <div style="position:absolute;bottom:-2px;right:-2px;width:12px;height:12px;border-radius:50%;background:#4ade80;border:2px solid #0d0714;animation:docBlink 2s infinite"></div>
                </div>
                <div>
                    <div class="doc-glow" style="font-size:16px;font-weight:700;color:#e879f9">${tr.title}</div>
                    <div style="font-size:10px;color:#7a6a8a">${tr.subtitle} — LuoLaf Studio</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;gap:6px">
                <select id="doc-lang-sel" style="background:rgba(232,121,249,0.1);border:1px solid rgba(232,121,249,0.25);border-radius:8px;padding:5px 8px;font-size:11px;color:#e879f9;cursor:pointer;outline:none;font-family:inherit" onchange="docSetLang(this.value)">
                    ${Object.keys(LANGS).map(l=>`<option value="${l}" ${l===curLang?'selected':''} style="background:#0d0714">${l.toUpperCase()}</option>`).join('')}
                </select>
                <button onclick="document.getElementById('orite-doctor-panel').remove();document.getElementById('orite-doctor-style').remove();" style="width:30px;height:30px;border-radius:8px;background:rgba(255,68,68,0.1);border:1px solid rgba(255,68,68,0.3);color:#ff4444;cursor:pointer;font-size:14px;font-weight:bold">${tr.close}</button>
            </div>
        </div>

        <!-- DISCLAIMER -->
        <div style="background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.2);border-radius:10px;padding:8px 12px;margin-bottom:14px;font-size:11px;color:#fbbf24">${tr.disclaimer}</div>

        <!-- TOOL GRID -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            ${Object.entries(tr.tools).map(([key,label])=>`
            <button class="doc-tool-btn ${curTool===key?'active':''}" onclick="docSetTool('${key}')"
            style="padding:10px 6px;border-radius:12px;background:${curTool===key?`linear-gradient(135deg,${TOOL_COLORS[key]}22,${TOOL_COLORS[key]}11)`:'rgba(255,255,255,0.04)'};border:1px solid ${curTool===key?TOOL_COLORS[key]+'55':'rgba(255,255,255,0.08)'};color:${curTool===key?TOOL_COLORS[key]:'#a090c0'};font-size:11px;font-weight:600;cursor:pointer;text-align:center;font-family:inherit;display:flex;flex-direction:column;align-items:center;gap:4px">
                <span style="font-size:18px">${TOOL_ICONS[key]}</span>
                <span style="font-size:10px;line-height:1.2">${label}</span>
            </button>`).join('')}
        </div>

        <!-- MAIN AREA -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">

            <!-- TOOL PANEL -->
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(232,121,249,0.15);border-radius:16px;padding:16px">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid rgba(232,121,249,0.1)">
                    <div style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,${TOOL_COLORS[curTool]}33,${TOOL_COLORS[curTool]}11);border:1px solid ${TOOL_COLORS[curTool]}44;display:flex;align-items:center;justify-content:center;font-size:18px">${TOOL_ICONS[curTool]}</div>
                    <div style="font-size:13px;font-weight:600;color:${TOOL_COLORS[curTool]}">${tr.tools[curTool]}</div>
                </div>
                <textarea id="doc-tool-inp" class="doc-input" placeholder="${tr.inputs[curTool]}" rows="5" style="width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(232,121,249,0.2);border-radius:10px;padding:10px 12px;color:#f0e8ff;font-family:inherit;font-size:12px;resize:vertical;min-height:100px;box-sizing:border-box;line-height:1.6"></textarea>
                <button id="doc-run-btn" class="doc-btn" onclick="docRunTool()" style="width:100%;margin-top:10px;padding:11px;background:linear-gradient(135deg,${TOOL_COLORS[curTool]},#818cf8);color:#fff;border:none;border-radius:10px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600">${tr.run}</button>
                <div id="doc-result" style="margin-top:12px;padding:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(232,121,249,0.15);border-radius:10px;font-size:12px;color:#d0c8e8;line-height:1.7;white-space:pre-wrap;word-break:break-word;max-height:250px;overflow-y:auto;display:none"></div>
            </div>

            <!-- AI CHAT -->
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(129,140,248,0.2);border-radius:16px;overflow:hidden;display:flex;flex-direction:column">
                <div style="padding:12px 14px;background:linear-gradient(135deg,rgba(232,121,249,0.2),rgba(129,140,248,0.2));border-bottom:1px solid rgba(232,121,249,0.15);display:flex;align-items:center;gap:8px">
                    <div class="doc-heart" style="font-size:20px">❤️‍🩹</div>
                    <div>
                        <div style="color:#e879f9;font-weight:600;font-size:13px">${tr.title}</div>
                        <div style="font-size:10px;color:rgba(232,121,249,0.6)">${tr.subtitle}</div>
                    </div>
                    <div style="width:7px;height:7px;border-radius:50%;background:#4ade80;margin-${rtl?'right':'left'}:auto;animation:docBlink 1.5s infinite"></div>
                </div>
                <div id="doc-chat-msgs" style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;min-height:200px;max-height:280px">
                    <div class="doc-msg-bot" style="max-width:90%;padding:10px 13px;border-radius:13px;font-size:12px;line-height:1.6;background:rgba(232,121,249,0.1);border:1px solid rgba(232,121,249,0.15);color:#f0e8ff;align-self:${rtl?'flex-end':'flex-start'};border-bottom-${rtl?'right':'left'}-radius:3px">${tr.chat.welcome}</div>
                </div>
                <div style="display:flex;gap:6px;padding:10px;border-top:1px solid rgba(232,121,249,0.1)">
                    <input type="text" id="doc-chat-inp" class="doc-input" placeholder="${tr.chat.placeholder}" style="flex:1;background:rgba(255,255,255,0.05);border:1px solid rgba(232,121,249,0.2);border-radius:10px;padding:8px 12px;color:#f0e8ff;font-family:inherit;font-size:12px" onkeydown="if(event.key==='Enter')docSendChat()">
                    <button onclick="docSendChat()" style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#e879f9,#818cf8);color:#fff;border:none;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;transition:all 0.2s">➤</button>
                </div>
            </div>
        </div>

        <!-- 3D DOCTOR VISUAL -->
        <div style="text-align:center;margin-top:16px;padding-top:14px;border-top:1px solid rgba(232,121,249,0.1)">
            <div class="doc-float" style="display:inline-block;cursor:pointer" onclick="docAvatarClick()" id="doc-avatar">
                ${getDoctorSVG()}
            </div>
            <div id="doc-avatar-msg" style="font-size:11px;color:#9a8ab0;margin-top:6px">روی من کلیک کن! 👆</div>
        </div>

        <!-- FOOTER -->
        <div style="margin-top:12px;padding-top:10px;border-top:1px solid rgba(232,121,249,0.08);display:flex;justify-content:space-between;align-items:center">
            <div style="font-size:10px;color:#4a3a5a">${tr.footer.manager}</div>
            <div style="font-size:10px;color:#4a3a5a">${tr.footer.version}</div>
        </div>
        `;
    }

    function getDoctorSVG(){
        return `<svg width="90" height="120" viewBox="0 0 90 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="dg1" cx="50%" cy="30%" r="70%"><stop offset="0%" stop-color="#f9d5ff"/><stop offset="100%" stop-color="#e879f9"/></radialGradient>
                <radialGradient id="dg2" cx="40%" cy="30%" r="60%"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#f0e8ff"/></radialGradient>
                <filter id="dg3"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <ellipse cx="45" cy="118" rx="28" ry="4" fill="rgba(232,121,249,0.2)"/>
            <!-- Legs -->
            <rect x="32" y="88" width="11" height="26" rx="5" fill="#818cf8"/>
            <rect x="47" y="88" width="11" height="26" rx="5" fill="#818cf8"/>
            <!-- Body - Doctor coat -->
            <rect x="20" y="50" width="50" height="44" rx="14" fill="#f8f8ff"/>
            <rect x="22" y="52" width="46" height="42" rx="12" fill="white"/>
            <!-- Blue shirt under coat -->
            <rect x="35" y="52" width="20" height="42" fill="#818cf8" opacity="0.3"/>
            <!-- Stethoscope -->
            <path d="M 30 65 Q 25 72 30 80 Q 35 88 45 88" fill="none" stroke="#e879f9" stroke-width="2" stroke-linecap="round"/>
            <circle cx="45" cy="88" r="4" fill="#e879f9"/>
            <circle cx="28" cy="63" r="3" fill="#e879f9"/>
            <circle cx="30" cy="65" r="2" fill="#ff8cf8"/>
            <!-- Red Cross on coat -->
            <rect x="50" y="62" width="10" height="3" rx="1" fill="#ff4444"/>
            <rect x="53" y="59" width="3" height="10" rx="1" fill="#ff4444"/>
            <!-- Arms -->
            <rect x="6" y="53" width="14" height="30" rx="7" fill="#f8f8ff"/>
            <rect x="70" y="53" width="14" height="30" rx="7" fill="#f8f8ff"/>
            <!-- Hands -->
            <ellipse cx="13" cy="85" rx="6" ry="5" fill="#fde8d8"/>
            <ellipse cx="77" cy="85" rx="6" ry="5" fill="#fde8d8"/>
            <!-- Clipboard in hand -->
            <rect x="3" y="72" width="20" height="16" rx="3" fill="#fff" stroke="#818cf8" stroke-width="1"/>
            <line x1="6" y1="76" x2="20" y2="76" stroke="#818cf8" stroke-width="1"/>
            <line x1="6" y1="79" x2="20" y2="79" stroke="#818cf8" stroke-width="1"/>
            <line x1="6" y1="82" x2="15" y2="82" stroke="#818cf8" stroke-width="1"/>
            <!-- Neck -->
            <rect x="37" y="38" width="16" height="14" rx="5" fill="#fde8d8"/>
            <!-- Head -->
            <ellipse cx="45" cy="26" rx="22" ry="24" fill="url(#dg2)" filter="url(#dg3)"/>
            <!-- Hair -->
            <ellipse cx="45" cy="8" rx="22" ry="10" fill="#4a3060"/>
            <ellipse cx="24" cy="18" rx="6" ry="12" fill="#4a3060"/>
            <ellipse cx="66" cy="18" rx="6" ry="12" fill="#4a3060"/>
            <!-- Face -->
            <ellipse cx="35" cy="25" rx="5" ry="6" fill="white"/>
            <ellipse cx="55" cy="25" rx="5" ry="6" fill="white"/>
            <circle cx="35" cy="26" r="3" fill="#4a3060"/>
            <circle cx="55" cy="26" r="3" fill="#4a3060"/>
            <circle cx="36" cy="25" r="1" fill="white"/>
            <circle cx="56" cy="25" r="1" fill="white"/>
            <!-- Smile -->
            <path d="M 38 35 Q 45 40 52 35" fill="none" stroke="#e879f9" stroke-width="2" stroke-linecap="round"/>
            <!-- Glasses -->
            <circle cx="35" cy="25" r="7" fill="none" stroke="#818cf8" stroke-width="1.5"/>
            <circle cx="55" cy="25" r="7" fill="none" stroke="#818cf8" stroke-width="1.5"/>
            <line x1="42" y1="25" x2="48" y2="25" stroke="#818cf8" stroke-width="1.5"/>
            <line x1="24" y1="23" x2="28" y2="24" stroke="#818cf8" stroke-width="1.5"/>
            <line x1="62" y1="24" x2="66" y2="23" stroke="#818cf8" stroke-width="1.5"/>
            <!-- Doctor hat/cap -->
            <rect x="28" y="4" width="34" height="6" rx="3" fill="#818cf8"/>
            <rect x="23" y="8" width="44" height="4" rx="2" fill="#818cf8"/>
            <rect x="42" y="0" width="6" height="8" rx="2" fill="#e879f9"/>
        </svg>`;
    }

    async function callAI(system, userMsg) {
        const r = await fetch(WORKER_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                max_tokens: 1500,
                system: system,
                messages: [{ role: 'user', content: userMsg }]
            })
        });
        if (!r.ok) throw new Error('Server error: ' + r.status);
        const d = await r.json();
        if (d.error) throw new Error(d.error.message || 'API Error');
        return d.content?.[0]?.text || '';
    }

    window.docSetLang = function(l) { curLang = l; renderPanel(); };
    window.docSetTool = function(tool) {
        curTool = tool;
        renderPanel();
    };

    window.docRunTool = async function() {
        const inp = document.getElementById('doc-tool-inp');
        const res = document.getElementById('doc-result');
        const btn = document.getElementById('doc-run-btn');
        const text = inp ? inp.value.trim() : '';
        if (!text) return;

        const tr = t();
        btn.disabled = true;
        btn.innerHTML = `<span class="doc-spin">⚙️</span> ${tr.running}`;
        res.style.display = 'none';

        try {
            const result = await callAI(TOOL_SYSTEMS[curTool], text);
            res.textContent = result;
            res.style.display = 'block';
            res.style.animation = 'docSlideR 0.3s ease';
        } catch(e) {
            res.textContent = '⚠️ ' + e.message;
            res.style.display = 'block';
        }

        btn.disabled = false;
        btn.textContent = tr.run;
    };

    window.docSendChat = async function() {
        const inp = document.getElementById('doc-chat-inp');
        const msg = inp ? inp.value.trim() : '';
        if (!msg) return;
        inp.value = '';
        const msgs = document.getElementById('doc-chat-msgs');
        const rtl = isRTL();
        const tr = t();

        const uDiv = document.createElement('div');
        uDiv.className = 'doc-msg-user';
        uDiv.style.cssText = `max-width:90%;padding:10px 13px;border-radius:13px;font-size:12px;line-height:1.6;background:linear-gradient(135deg,rgba(232,121,249,0.25),rgba(129,140,248,0.2));color:#f0e8ff;align-self:${rtl?'flex-start':'flex-end'};border-bottom-${rtl?'left':'right'}-radius:3px;`;
        uDiv.textContent = msg;
        msgs.appendChild(uDiv);
        aiHistory.push({ role: 'user', content: msg });

        const bDiv = document.createElement('div');
        bDiv.className = 'doc-msg-bot';
        bDiv.style.cssText = `max-width:90%;padding:10px 13px;border-radius:13px;font-size:12px;line-height:1.6;background:rgba(232,121,249,0.08);border:1px solid rgba(232,121,249,0.15);color:#f0e8ff;align-self:${rtl?'flex-end':'flex-start'};border-bottom-${rtl?'right':'left'}-radius:3px;`;
        bDiv.textContent = '🩺 ...';
        msgs.appendChild(bDiv);
        msgs.scrollTop = msgs.scrollHeight;

        try {
            const r = await fetch(WORKER_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    max_tokens: 1000,
                    system: 'You are an expert AI doctor for the Orite platform by LuoLaf Studio. You have knowledge in all medical fields. Be professional, empathetic, and thorough. Always recommend consulting a real doctor for serious conditions. Respond in the same language as the user.',
                    messages: aiHistory.slice(-10)
                })
            });
            const d = await r.json();
            const txt = d.content?.[0]?.text || 'متأسفم، خطایی رخ داد.';
            bDiv.textContent = txt;
            aiHistory.push({ role: 'assistant', content: txt });
        } catch(e) {
            bDiv.textContent = '⚠️ ' + e.message;
        }
        msgs.scrollTop = msgs.scrollHeight;
    };

    const avatarMsgs = [
        'سلام! آماده کمک به شما هستم! 🩺',
        'سوال پزشکی دارید؟ بپرسید! 💊',
        'سلامت شما اولویت ماست! ❤️',
        'هر سوالی دارید، من اینجام! 🏥',
        'یادتون باشه، سلامتی گرانبهاترین دارایی است! 💪',
    ];
    let avatarClickCount = 0;

    window.docAvatarClick = function() {
        avatarClickCount++;
        const msgEl = document.getElementById('doc-avatar-msg');
        if (msgEl) msgEl.textContent = avatarMsgs[avatarClickCount % avatarMsgs.length];
        const av = document.getElementById('doc-avatar');
        if (av) { av.style.transform = 'scale(1.15) rotate(5deg)'; setTimeout(() => { if(av) av.style.transform = ''; }, 300); }
    };

    document.body.appendChild(panel);
    renderPanel();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDoctorAI);
} else {
    initDoctorAI();
}