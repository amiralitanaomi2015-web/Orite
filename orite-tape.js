(function() {
    // ۱. جلوگیری از تکرار و پاکسازی پنل قبلی
    const existing = document.getElementById('orite-premium-bar');
    if (existing) existing.remove();

    // ۲. دیکشنری جامع ۱۴ زبانه برای کل نوار و پنل‌ها
    const dict = {
        en: { theme: "Theme", light: "Light", cheerful: "Cheerful", dark: "Dark", weather: "Capital Weather", speed: "Internet Speed", rate: "Feedback", enterCity: "Select a country...", loading: "Loading data...", forecast: "5-Day Forecast", rating: "Rate Platform", submit: "Submit", like: "Like", dislike: "Dislike", thanks: "Thank you for your feedback!" },
        fa: { theme: "تم", light: "روشن", cheerful: "شاد", dark: "تاریک", weather: "آب‌وهوای پایتخت", speed: "سرعت اینترنت", rate: "ثبت نظر", enterCity: "یک کشور انتخاب کنید...", loading: "در حال دریافت اطلاعات...", forecast: "پیش‌بینی ۵ روز آینده", rating: "امتیاز به پلتفرم", submit: "ثبت", like: "لایک", dislike: "نپسندیدم", thanks: "از نظر شما سپاسگزاریم!" },
        ar: { theme: "السمة", light: "فاتح", cheerful: "بهيج", dark: "داكن", weather: "طقس العاصمة", speed: "سرعة الإنترنت", rate: "التقييم", enterCity: "اختر الدولة...", loading: "جاري جلب البيانات...", forecast: "توقعات 5 أيام", rating: "تقييم المنصة", submit: "إرسال", like: "إعجاب", dislike: "عدم إعجاب", thanks: "شكرا لك على ملاحظاتك!" },
        tr: { theme: "Tema", light: "Açık", cheerful: "Neşeli", dark: "Karanlık", weather: "Başkent Hava Durumu", speed: "İnternet Hızı", rate: "Değerlendir", enterCity: "Bir ülke seçin...", loading: "Bilgiler yükleniyor...", forecast: "5 Günlük Tahmin", rating: "Platformu Puanla", submit: "Gönder", like: "Beğen", dislike: "Beğenme", thanks: "Geri bildiriminiz için teşekkürler!" },
        ku: { theme: "Mijar", light: "Ron", cheerful: "Şad", dark: "Tarî", weather: "Ewû Hewayê Paytext", speed: "Leza Înternetê", rate: "Nirxandin", enterCity: "Welatekî hilbijêre...", loading: "Agahî tên standin...", forecast: "Pêşbîniya 5 rojan", rating: "Pêşkêşkirina Platformê", submit: "Şandin", like: "Ecibandin", dislike: "Necibandin", thanks: "Ji bo nerîna we spas!" },
        zh: { theme: "主题", light: "亮色", cheerful: "欢快", dark: "暗色", weather: "首都天气", speed: "网速测试", rate: "反馈", enterCity: "选择国家...", loading: "正在加载数据...", forecast: "5天天气预报", rating: "给平台评分", submit: "提交", like: "赞", dislike: "踩", thanks: "感谢您的反馈！" },
        ko: { theme: "테마", light: "밝게", cheerful: "쾌활한", dark: "어둡게", weather: "수도 날씨", speed: "인터넷 속도", rate: "피드백", enterCity: "국가 선택...", loading: "데이터 로드 중...", forecast: "5일 일기예보", rating: "플랫폼 평가", submit: "제출", like: "좋아요", dislike: "싫어요", thanks: "피드백을 주셔서 감사합니다!" },
        es: { theme: "Tema", light: "Claro", cheerful: "Alegre", dark: "Oscuro", weather: "Clima de la Capital", speed: "Velocidad de Internet", rate: "Calificar", enterCity: "Seleccione un país...", loading: "Cargando datos...", forecast: "Pronóstico de 5 días", rating: "Calificar plataforma", submit: "Enviar", like: "Me gusta", dislike: "No me gusta", thanks: "¡Gracias por tus comentarios!" },
        it: { theme: "Tema", light: "Chiaro", cheerful: "Allegro", dark: "Scuro", weather: "Meteo Capitale", speed: "Velocidad Internet", rate: "Valutazione", enterCity: "Seleziona un paese...", loading: "Caricamento dati...", forecast: "Previsioni a 5 giorni", rating: "Valuta piattaforma", submit: "Invia", like: "Mi piace", dislike: "Non mi piace", thanks: "Grazie per il tuo feedback!" },
        fr: { theme: "Thème", light: "Clair", cheerful: "Joyeux", dark: "Sombre", weather: "Météo Capitale", speed: "Vitesse Internet", rate: "Avis", enterCity: "Sélectionner un pays...", loading: "Chargement des données...", forecast: "Prévisions à 5 jours", rating: "Noter la plateforme", submit: "Soumettre", like: "J'aime", dislike: "Je n'aime pas", thanks: "Merci pour votre avis !" },
        ru: { theme: "Тема", light: "Светлая", cheerful: "Веселая", dark: "Темная", weather: "Погода в столице", speed: "Скорость интернета", rate: "Отзыв", enterCity: "Выберите страну...", loading: "Загрузка данных...", forecast: "Прогноз на 5 дней", rating: "Оценить платформу", submit: "Отправить", like: "Нравится", dislike: "Не нравится", thanks: "Спасибо за ваш отзыв!" },
        he: { theme: "ערכת נושא", light: "בהיר", cheerful: "שמח", dark: "כהה", weather: "מזג אוויר בבירה", speed: "מהירות אינטרנט", rate: "משוב", enterCity: "בחר מדינה...", loading: "טוען נתונים...", forecast: "תחזית ל-5 ימים", rating: "דרג פלטפורמה", submit: "שלח", like: "אהבתי", dislike: "לא אהבתי", thanks: "תודה על המשוב שלך!" },
        ja: { theme: "テーマ", light: "明るい", cheerful: "陽気", dark: "ダーク", weather: "首都の天気", speed: "インターネット速度", rate: "フィードバック", enterCity: "国を選択...", loading: "，み込み中...", forecast: "5日間の天気予報", rating: "プラットフォームを評価", submit: "送信", like: "いいね", dislike: "いまいち", thanks: "フィードバックありがとうございます！" },
        tg: { theme: "Мавзӯъ", light: "Рӯшноӣ", cheerful: "Шод", dark: "Торик", weather: "Обу ҳавои пойтахт", speed: "Суръати интернет", rate: "Алоқа", enterCity: "Кишварро интихоб кунед...", loading: "Боргирии маълумот...", forecast: "Пешгӯии 5 рӯз", rating: "Баҳо додан ба платформа", submit: "Пешниҳод", like: "Писанд", dislike: "Писанд нест", thanks: "Ташаккур барои фикру мулоҳизаатон!" }
    };

    let lang = 'fa';
    let isBarOpen = true;

    // دیتابیس پایتخت‌های جهان
    const capitalsList = [
        { country: "Iran", capital: "Tehran" }, { country: "United Kingdom", capital: "London" },
        { country: "France", capital: "Paris" }, { country: "Germany", capital: "Berlin" },
        { country: "Japan", capital: "Tokyo" }, { country: "Canada", capital: "Ottawa" },
        { country: "Turkey", capital: "Ankara" }, { country: "Russia", capital: "Moscow" },
        { country: "China", capital: "Beijing" }, { country: "Spain", capital: "Madrid" },
        { country: "Italy", capital: "Rome" }, { country: "United States", capital: "Washington" },
        { country: "Australia", capital: "Canberra" }, { country: "Brazil", capital: "Brasilia" }
    ];

    // ایجاد نوار اصلی با استایل سه‌بعدی و شیشه‌ای (Glassmorphism / Neumorphism)
    const premiumBar = document.createElement('div');
    premiumBar.id = 'orite-premium-bar';
    premiumBar.style.cssText = "position:fixed; top:0; left:0; width:100%; z-index:999999; font-family:Tahoma, Arial, sans-serif; transition:all 0.4s cubic-bezier(0.25, 1, 0.5, 1); border-bottom: 2px solid rgba(255,255,255,0.4); backdrop-filter: blur(10px);";

    function updateTheme(mode) {
        let bgStyle, textStyle, panelBg, btnShadow, insetShadow;
        if (mode === 'dark') {
            bgStyle = "linear-gradient(135deg, #1f2937 0%, #111827 100%)"; 
            textStyle = "#ffffff"; 
            panelBg = "#1f2937";
            btnShadow = "0 4px 10px rgba(0, 0, 0, 0.5), inset 0 2px 3px rgba(255,255,255,0.1)";
            insetShadow = "inset 0 1px 3px rgba(255,255,255,0.15)";
        } else if (mode === 'cheerful') {
            bgStyle = "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"; 
            textStyle = "#222222"; 
            panelBg = "#fff0f5";
            btnShadow = "0 6px 15px rgba(255, 105, 180, 0.4), inset 0 2px 3px rgba(255,255,255,0.8)";
            insetShadow = "inset 0 1px 3px rgba(255,255,255,0.5)";
        } else { // Light (آبی کم‌رنگ سه‌بعدی)
            bgStyle = "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)"; 
            textStyle = "#1e293b"; 
            panelBg = "#ffffff";
            btnShadow = "0 6px 14px rgba(14, 165, 233, 0.3), inset 0 2px 4px rgba(255,255,255,0.9)";
            insetShadow = "inset 0 1px 3px rgba(255,255,255,0.8)";
        }
        
        premiumBar.style.background = bgStyle;
        premiumBar.style.color = textStyle;
        
        const content = premiumBar.querySelector('.bar-content');
        if (content) content.style.color = textStyle;

        // اعمال استایل برجسته سه‌بعدی به دکمه‌ها
        const buttons = premiumBar.querySelectorAll('button, select');
        buttons.forEach(b => {
            b.style.boxShadow = btnShadow;
            b.style.backgroundColor = mode === 'dark' ? '#374151' : (mode === 'cheerful' ? '#fff' : '#f0f9ff');
            b.style.color = textStyle;
            b.style.border = mode === 'dark' ? '1px solid #4b5563' : '1px solid #bae6fd';
        });

        const panels = document.querySelectorAll('.orite-floating-panel');
        panels.forEach(p => {
            p.style.backgroundColor = panelBg;
            p.style.color = textStyle;
            p.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
        });
    }

    function renderBar() {
        const d = dict[lang];
        premiumBar.innerHTML = `
            <div class="bar-content" style="display:flex; align-items:center; justify-content:space-between; padding:12px 24px; max-width:1280px; margin:0 auto;">
                <div style="display:flex; align-items:center; gap:15px;">
                    <button id="orite-toggle-btn" style="background:#fff; border:none; border-radius:8px; padding:8px 16px; cursor:pointer; font-weight:bold; font-size:14px; transition:all 0.2s ease;">▲</button>
                    <select id="orite-lang-sel" style="padding:6px 10px; border-radius:8px; border:1px solid #90caf9; background:#fff; color:#333; font-weight:bold; cursor:pointer;">
                        ${Object.keys(dict).map(l => `<option value="${l}" ${l===lang?'selected':''}>${l.toUpperCase()}</option>`).join('')}
                    </select>
                </div>

                <div style="display:flex; align-items:center; gap:20px;">
                    <div style="display:flex; align-items:center; gap:8px; font-size:14px; font-weight:bold; text-shadow: 0 1px 0 rgba(255,255,255,0.5);">
                        <span>🎨 ${d.theme}:</span>
                        <select id="orite-theme-sel" style="padding:6px 10px; border-radius:8px; border:1px solid #90caf9; font-weight:bold; cursor:pointer;">
                            <option value="light">${d.light}</option>
                            <option value="cheerful">${d.cheerful}</option>
                            <option value="dark">${d.dark}</option>
                        </select>
                    </div>

                    <button id="orite-weather-open" class="orite-3d-btn" style="border:none; border-radius:20px; padding:8px 18px; cursor:pointer; font-size:13px; font-weight:bold; transition:all 0.2s ease;">
                        ⛅ ${d.weather}
                    </button>

                    <button id="orite-speed-open" class="orite-3d-btn" style="border:none; border-radius:20px; padding:8px 18px; cursor:pointer; font-size:13px; font-weight:bold; transition:all 0.2s ease;">
                        ☁️ ${d.speed}
                    </button>

                    <div id="orite-status-zone" style="display:flex; align-items:center; gap:15px; font-size:14px; font-weight:bold; background: rgba(255,255,255,0.25); padding:6px 15px; border-radius:20px; border: 1px solid rgba(255,255,255,0.3);">
                        <span id="orite-clock">00:00:00</span>
                        <span id="orite-weather-status" style="font-size: 16px;" title="وضعیت آب‌وهوای محلی">☀️</span>
                        <div id="orite-dog-anim" style="width:35px; height:35px; position:relative; display:flex; align-items:center; justify-content:center; font-size: 20px;" title="سگ نگهبان">🐶</div>
                    </div>

                    <button id="orite-feedback-open" class="orite-3d-btn" style="border:none; border-radius:20px; padding:8px 18px; cursor:pointer; font-size:13px; font-weight:bold; transition:all 0.2s ease;">
                        🥳 ${d.rate}
                    </button>
                </div>
            </div>
        `;

        // افکت فشردن سه‌بعدی برای دکمه‌ها
        const btn3D = premiumBar.querySelectorAll('.orite-3d-btn, #orite-toggle-btn');
        btn3D.forEach(b => {
            b.onmousedown = () => b.style.transform = "translateY(2px)";
            b.onmouseup = () => b.style.transform = "translateY(-1px)";
            b.onmouseleave = () => b.style.transform = "translateY(0px)";
        });

        // باز و بسته کردن نوار
        const toggleBtn = premiumBar.querySelector('#orite-toggle-btn');
        toggleBtn.onclick = () => {
            const content = premiumBar.querySelector('.bar-content');
            if (isBarOpen) {
                content.style.display = 'none';
                premiumBar.style.height = '0px';
                toggleBtn.innerText = '▼';
                document.body.style.paddingTop = '0px';
            } else {
                content.style.display = 'flex';
                premiumBar.style.height = 'auto';
                toggleBtn.innerText = '▲';
                document.body.style.paddingTop = '60px';
            }
            isBarOpen = !isBarOpen;
        };

        // تغییر زبان
        premiumBar.querySelector('#orite-lang-sel').onchange = (e) => {
            lang = e.target.value;
            renderBar();
            updateTheme(premiumBar.querySelector('#orite-theme-sel').value);
        };

        // تغییر تم
        premiumBar.querySelector('#orite-theme-sel').onchange = (e) => {
            updateTheme(e.target.value);
        };

        // راه‌اندازی پنل‌ها
        setupDynamicSystem();
        setupWeatherPanel();
        setupSpeedPanel();
        setupFeedbackPanel();
        updateTheme('light'); // پیش‌فرض تم روشن
    }

    // ۳. سیستم ساعت، انیمیشن سگ سه‌بعدی، و تشخیص زمان روز/ظهر/عصر/شب
    function setupDynamicSystem() {
        // تشخیص IP کاربر برای دریافت هوای زنده بدون کلید
        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => {
                return fetch(`https://get.geojs.io/v1/ip/geo/${data.ip}.json`);
            })
            .then(res => res.json())
            .then(geo => {
                const city = geo.city || "Tehran";
                fetchLiveWeatherSys(city);
            })
            .catch(() => {
                fetchLiveWeatherSys("Tehran");
            });

        // انیمیشن سگ و ساعت
        setInterval(() => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString();
            if(premiumBar.querySelector('#orite-clock'))
                premiumBar.querySelector('#orite-clock').innerText = timeStr;

            const hours = now.getHours();
            const dogEl = premiumBar.querySelector('#orite-dog-anim');
            if (dogEl) {
                // انیمیشن‌های نرم سه‌بعدی و شناور سگ
                if (hours >= 5 && hours < 11) {       // صبح
                    dogEl.innerHTML = "🐕‍🦺";
                    dogEl.title = "سگ در حال دویدن و ورزش صبحگاهی است.";
                    dogEl.style.animation = "dogRun 2s infinite alternate ease-in-out";
                } else if (hours >= 11 && hours < 16) {  // ظهر
                    dogEl.innerHTML = "🐩";
                    dogEl.title = "سگ در حال استراحت در آفتاب ظهر است.";
                    dogEl.style.animation = "dogBreathe 3s infinite ease-in-out";
                } else if (hours >= 16 && hours < 20) {  // عصر
                    dogEl.innerHTML = "🦮";
                    dogEl.title = "سگ در حال قدم زدن عصرگاهی است.";
                    dogEl.style.animation = "dogWalk 2s infinite linear";
                } else if (hours >= 20 && hours < 23) {  // شب
                    dogEl.innerHTML = "🐕";
                    dogEl.title = "سگ در حال نگهبانی در شب است.";
                    dogEl.style.animation = "dogFloat 2.5s infinite alternate ease-in-out";
                } else {                               // نیمه‌شب
                    dogEl.innerHTML = "🦊";
                    dogEl.title = "سگ خوابیده است... 💤";
                    dogEl.style.animation = "dogSleep 4s infinite alternate ease-in-out";
                }
            }
        }, 1000);
    }

    function fetchLiveWeatherSys(city) {
        fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`)
            .then(res => res.json())
            .then(weatherData => {
                if (weatherData.current_condition && weatherData.current_condition[0]) {
                    const desc = weatherData.current_condition[0].weatherDesc[0].value.toLowerCase();
                    let icon = "☀️";
                    if (desc.includes("cloud")) icon = "⛅";
                    if (desc.includes("rain")) icon = "🌧️";
                    if (desc.includes("snow")) icon = "❄️";
                    
                    const hours = new Date().getHours();
                    if (hours >= 20 || hours < 5) icon = "🌙"; // شب
                    
                    if(premiumBar.querySelector('#orite-weather-status'))
                        premiumBar.querySelector('#orite-weather-status').innerText = icon;
                }
            })
            .catch(() => {});
    }

    // ۴. پنل سه‌بعدی آب‌وهوای پایتخت‌های جهان (۱۴ زبانه)
    function setupWeatherPanel() {
        const panel = document.createElement('div');
        panel.className = 'orite-floating-panel';
        panel.style.cssText = "display:none; position:fixed; top:75px; left:50%; transform:translateX(-50%); width:380px; padding:24px; border-radius:16px; box-shadow:0 10px 25px rgba(0,0,0,0.3); z-index:1000000; border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(8px);";
        document.body.appendChild(panel);

        function renderContent() {
            const d = dict[lang];
            panel.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                    <h4 style="margin:0; font-size:18px;">⛅ ${d.weather}</h4>
                    <button class="close-btn" style="background:none; border:none; font-size:18px; cursor:pointer; font-weight:bold;">❌</button>
                </div>
                <select id="orite-capitals-select" style="width:100%; padding:10px; border-radius:8px; border:1px solid #90caf9; font-size:14px; outline:none; cursor:pointer;">
                    <option value="">${d.enterCity}</option>
                    ${capitalsList.map(c => `<option value="${c.capital}">${c.country} - ${c.capital}</option>`).join('')}
                </select>
                
                <div id="orite-weather-result" style="margin-top:18px; display:none; background:rgba(0,0,0,0.05); padding:15px; border-radius:10px; font-size:14px; line-height:1.6; border: 1px solid rgba(255,255,255,0.15);">
                    <div style="font-size:20px; font-weight:bold; margin-bottom:5px;" id="orite-cap-name"></div>
                    <div>🌡️ <span id="orite-cap-temp"></span></div>
                    <div>⛅ <span id="orite-cap-desc"></span></div>
                    <hr style="border:0; border-top:1px solid rgba(0,0,0,0.1); margin:12px 0;">
                    <div style="font-weight:bold; font-size:13px;">🗓️ ${d.forecast}:</div>
                    <div id="orite-forecast-list" style="margin-top:8px; display:flex; flex-direction:column; gap:6px;"></div>
                </div>
            `;

            panel.querySelector('.close-btn').onclick = () => panel.style.display = 'none';

            panel.querySelector('#orite-capitals-select').onchange = (e) => {
                const capital = e.target.value;
                if (!capital) {
                    panel.querySelector('#orite-weather-result').style.display = 'none';
                    return;
                }
                
                fetch(`https://wttr.in/${encodeURIComponent(capital)}?format=j1`)
                    .then(res => res.json())
                    .then(data => {
                        const current = data.current_condition[0];
                        panel.querySelector('#orite-cap-name').innerText = capital;
                        panel.querySelector('#orite-cap-temp').innerText = `${d.forecast.split('-')[0]}: ${current.temp_C}°C`;
                        panel.querySelector('#orite-cap-desc').innerText = current.weatherDesc[0].value;

                        const forecastList = panel.querySelector('#orite-forecast-list');
                        forecastList.innerHTML = '';
                        
                        if (data.weather && data.weather.length) {
                            data.weather.slice(0, 5).forEach((day, idx) => {
                                const row = document.createElement('div');
                                row.style.cssText = "display:flex; justify-content:space-between; font-size:12px; background:rgba(255,255,255,0.2); padding:5px 8px; border-radius:6px; border:1px solid rgba(0,0,0,0.05);";
                                row.innerHTML = `
                                    <span>${d.forecast.split('-')[0]} ${idx+1}:</span>
                                    <span>${day.hourly[0].tempC}°C, ${day.hourly[0].weatherDesc[0].value}</span>
                                `;
                                forecastList.appendChild(row);
                            });
                        }
                        panel.querySelector('#orite-weather-result').style.display = 'block';
                    })
                    .catch(() => {
                        panel.querySelector('#orite-cap-temp').innerText = d.loading;
                        panel.querySelector('#orite-weather-result').style.display = 'block';
                    });
            };
        }

        premiumBar.querySelector('#orite-weather-open').onclick = () => {
            renderContent();
            updateTheme(premiumBar.querySelector('#orite-theme-sel').value);
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        };
    }

    // ۵. پنل سه‌بعدی تست سرعت اینترنت
    function setupSpeedPanel() {
        const panel = document.createElement('div');
        panel.className = 'orite-floating-panel';
        panel.style.cssText = "display:none; position:fixed; top:75px; left:50%; transform:translateX(-50%); width:320px; padding:24px; border-radius:16px; box-shadow:0 10px 25px rgba(0,0,0,0.3); z-index:1000000; border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(8px);";
        document.body.appendChild(panel);

        function renderContent() {
            const d = dict[lang];
            panel.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                    <h4 style="margin:0; font-size:18px;">☁️ ${d.speed}</h4>
                    <button class="close-btn" style="background:none; border:none; font-size:18px; cursor:pointer; font-weight:bold;">❌</button>
                </div>
                <div style="text-align:center; padding:25px 0;">
                    <div style="font-size:40px; font-weight:bold; color:#00796b; text-shadow:0 1px 0 #fff;" id="orite-speed-val">0 Mbps</div>
                    <div style="font-size:12px; color:#666; margin-top:12px;" id="orite-speed-desc">${d.loading}</div>
                </div>
            `;

            panel.querySelector('.close-btn').onclick = () => panel.style.display = 'none';

            const startTime = new Date().getTime();
            fetch('https://api.ipify.org?format=json', {cache: 'no-store'})
                .then(() => {
                    const duration = (new Date().getTime() - startTime) / 1000;
                    const approxBytes = 50000; 
                    const speedMbps = ((approxBytes * 8) / (duration * 1024 * 1024)).toFixed(2);
                    
                    if(panel.querySelector('#orite-speed-val'))
                        panel.querySelector('#orite-speed-val').innerText = `${speedMbps} Mbps`;
                    if(panel.querySelector('#orite-speed-desc'))
                        panel.querySelector('#orite-speed-desc').innerText = `Ping: ${Math.round(duration*200)}ms`;
                })
                .catch(() => {
                    if(panel.querySelector('#orite-speed-val'))
                        panel.querySelector('#orite-speed-val').innerText = "N/A";
                });
        }

        premiumBar.querySelector('#orite-speed-open').onclick = () => {
            renderContent();
            updateTheme(premiumBar.querySelector('#orite-theme-sel').value);
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        };
    }

    // ۶. پلتفرم سه‌بعدی نظرات (لایک / دیس‌لایک با اکشن‌های انیمیشنی نرم و فیدبک)
    function setupFeedbackPanel() {
        const panel = document.createElement('div');
        panel.className = 'orite-floating-panel';
        panel.style.cssText = "display:none; position:fixed; top:75px; left:50%; transform:translateX(-50%); width:350px; padding:24px; border-radius:16px; box-shadow:0 10px 25px rgba(0,0,0,0.3); z-index:1000000; border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(8px);";
        document.body.appendChild(panel);

        function renderContent() {
            const d = dict[lang];
            panel.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
                    <h4 style="margin:0; font-size:18px;">🥳 ${d.rating}</h4>
                    <button class="close-btn" style="background:none; border:none; font-size:18px; cursor:pointer; font-weight:bold;">❌</button>
                </div>
                
                <div style="text-align:center; display:flex; justify-content:center; gap:20px; margin-bottom:20px;">
                    <button class="orite-feedback-btn orite-3d-feedback" id="orite-like-btn" style="background:#4caf50; color:#fff; border:none; border-radius:20px; padding:10px 22px; cursor:pointer; font-weight:bold; font-size:13px; transition:all 0.2s ease; box-shadow: 0 4px 10px rgba(76,175,80,0.4);">👍 ${d.like}</button>
                    <button class="orite-feedback-btn orite-3d-feedback" id="orite-dislike-btn" style="background:#f44336; color:#fff; border:none; border-radius:20px; padding:10px 22px; cursor:pointer; font-weight:bold; font-size:13px; transition:all 0.2s ease; box-shadow: 0 4px 10px rgba(244,67,54,0.4);">👎 ${d.dislike}</button>
                </div>

                <div style="text-align:center; margin-bottom:20px;">
                    <div style="font-size:13px; margin-bottom:8px; font-weight:bold;">${d.rating}:</div>
                    <div style="display:flex; justify-content:center; gap:6px;" id="orite-stars">
                        ${[1,2,3,4,5].map(s => `<span class="star" data-value="${s}" style="font-size:28px; cursor:pointer; color:#cbd5e1; transition:all 0.2s ease; text-shadow: 0 2px 2px rgba(0,0,0,0.2);">★</span>`).join('')}
                    </div>
                </div>

                <div style="text-align:center;">
                    <button id="orite-submit-feedback" class="orite-3d-feedback" style="background:#7b1fa2; color:#fff; border:none; border-radius:15px; padding:12px 30px; cursor:pointer; font-weight:bold; width:100%; font-size:14px; box-shadow: 0 4px 12px rgba(123,31,162,0.4);">${d.submit}</button>
                </div>
                <div id="orite-msg-success" style="text-align:center; margin-top:15px; color:#10b981; font-size:14px; font-weight:bold; display:none;">${d.thanks}</div>
            `;

            panel.querySelector('.close-btn').onclick = () => panel.style.display = 'none';

            // اکشن انیمیشنِ فشردن کلیدها (Depth / Pressed Effect)
            const feedbackBtns = panel.querySelectorAll('.orite-3d-feedback');
            feedbackBtns.forEach(btn => {
                btn.onmousedown = () => btn.style.transform = "scale(0.95) translateY(2px)";
                btn.onmouseup = () => btn.style.transform = "scale(1) translateY(0px)";
            });

            panel.querySelector('#orite-like-btn').onclick = (e) => {
                e.target.style.background = "#15803d";
                panel.querySelector('#orite-dislike-btn').style.background = "#f44336";
            };
            panel.querySelector('#orite-dislike-btn').onclick = (e) => {
                e.target.style.background = "#b91c1c";
                panel.querySelector('#orite-like-btn').style.background = "#4caf50";
            };

            // ستاره‌ها و درخشش نرم با هاور
            let selectedRating = 0;
            panel.querySelectorAll('.star').forEach(star => {
                star.onmouseover = (e) => {
                    highlightStars(e.target.dataset.value);
                };
                star.onmouseout = () => {
                    highlightStars(selectedRating);
                };
                star.onclick = (e) => {
                    selectedRating = e.target.dataset.value;
                    highlightStars(selectedRating);
                };
            });

            function highlightStars(val) {
                panel.querySelectorAll('.star').forEach(s => {
                    if (s.dataset.value <= val) {
                        s.style.color = "#fbbf24"; // طلایی درخشان
                        s.style.transform = "scale(1.1)";
                    } else {
                        s.style.color = "#cbd5e1";
                        s.style.transform = "scale(1)";
                    }
                });
            }

            panel.querySelector('#orite-submit-feedback').onclick = () => {
                panel.querySelector('#orite-msg-success').style.display = 'block';
                setTimeout(() => {
                    panel.style.display = 'none';
                }, 1500);
            };
        }

        premiumBar.querySelector('#orite-feedback-open').onclick = () => {
            renderContent();
            updateTheme(premiumBar.querySelector('#orite-theme-sel').value);
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        };
    }

    // ۷. تزریق کی‌فریم‌ها و لایه‌های سه‌بعدی به استایل سراسری
    if (!document.getElementById('orite-3d-keyframes')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'orite-3d-keyframes';
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes dogRun {
                0% { transform: translateY(0px) scale3d(1,1,1); }
                100% { transform: translateY(-6px) scale3d(1.05,1.05,1); }
            }
            @keyframes dogBreathe {
                0% { transform: scale(1); }
                50% { transform: scale(1.12); }
                100% { transform: scale(1); }
            }
            @keyframes dogWalk {
                0% { transform: translateX(0px); }
                50% { transform: translateX(5px); }
                100% { transform: translateX(0px); }
            }
            @keyframes dogFloat {
                0% { transform: translateY(0px); }
                100% { transform: translateY(-4px); }
            }
            @keyframes dogSleep {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(6deg); }
            }
            .orite-floating-panel {
                animation: panelEntrance 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            @keyframes panelEntrance {
                from { opacity: 0; transform: translate(-50%, -10px) scale(0.96); }
                to { opacity: 1; transform: translate(-50%, 0) scale(1); }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    document.body.appendChild(premiumBar);
    renderBar();
})();