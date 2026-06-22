(function() {
    // ۱. پاکسازی پنل قبلی
    const existing = document.getElementById('orite-weather-panel');
    if (existing) existing.remove();

    // ۲. دیکشنری ۱۳ زبانه
    const dict = {
        fa: { title: "آب‌وهوا و موقعیت", ip: "آی‌پی:", loc: "موقعیت:", temp: "دما:", weather: "وضعیت:", selectLoc: "برای انتخاب مکان روی نقشه کلیک کنید", loading: "در حال دریافت اطلاعات..." },
        en: { title: "Weather & Location", ip: "IP:", loc: "Location:", temp: "Temp:", weather: "Condition:", selectLoc: "Click on the map to select a location", loading: "Loading data..." },
        tr: { title: "Hava Durumu ve Konum", ip: "IP:", loc: "Konum:", temp: "Sıcaklık:", weather: "Durum:", selectLoc: "Konumu seçmek için haritaya tıklayın", loading: "Bilgiler yükleniyor..." },
        ar: { title: "الطقس والموقع", ip: "عنوان IP:", loc: "الموقع:", temp: "درجة الحرارة:", weather: "الحالة:", selectLoc: "انقر على الخريطة لتحديد الموقع", loading: "جاري جلب البيانات..." },
        ku: { title: "Ewû Hewayê û Cih", ip: "IP:", loc: "Cih:", temp: "Germahî:", weather: "Rewş:", selectLoc: "Ji bo hilbijartina cih li nexşeyê bikirtîne", loading: "Agahî tên standin..." },
        zh: { title: "天气与位置", ip: "IP地址:", loc: "位置:", temp: "温度:", weather: "天气状况:", selectLoc: "点击地图选择位置", loading: "正在加载数据..." },
        ko: { title: "날씨 및 위치", ip: "IP:", loc: "위치:", temp: "온도:", weather: "날씨 상태:", selectLoc: "지도에서 위치를 선택하세요", loading: "데이터 로드 중..." },
        fr: { title: "Météo et Localisation", ip: "IP:", loc: "Emplacement:", temp: "Température:", weather: "Condition:", selectLoc: "Cliquez sur la carte pour sélectionner un lieu", loading: "Chargement des données..." },
        de: { title: "Wetter & Standort", ip: "IP:", loc: "Standort:", temp: "Temperatur:", weather: "Zustand:", selectLoc: "Klicken Sie auf die Karte, um einen Ort auszuwählen", loading: "Daten werden geladen..." },
        it: { title: "Meteo e Posizione", ip: "IP:", loc: "Posizione:", temp: "Temperatura:", weather: "Condizione:", selectLoc: "Fai clic sulla mappa per selezionare una posizione", loading: "Caricamento dati..." },
        es: { title: "Clima y Ubicación", ip: "IP:", loc: "Ubicación:", temp: "Temperatura:", weather: "Condición:", selectLoc: "Haz clic en el mapa para seleccionar una ubicación", loading: "Cargando datos..." },
        ru: { title: "Погода и местоположение", ip: "IP:", loc: "Местоположение:", temp: "Температура:", weather: "Состояние:", selectLoc: "Нажмите на карту, чтобы выбрать место", loading: "Загрузка данных..." },
        he: { title: "מזג אוויר ומיקום", ip: "כתובת IP:", loc: "מיקום:", temp: "טמפרטורה:", weather: "מצב:", selectLoc: "לחץ על המפה כדי לבחור מיקום", loading: "טוען נתונים..." }
    };

    let lang = 'fa';
    let map = null, marker = null;

    // لود کردن کتابخانه Leaflet به صورت داینامیک
    if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
    }
    if (!document.getElementById('leaflet-js')) {
        const script = document.createElement('script');
        script.id = 'leaflet-js';
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = () => buildPanel();
        document.head.appendChild(script);
    } else {
        buildPanel();
    }

    function buildPanel() {
        const weatherPanel = document.createElement('div');
        weatherPanel.id = 'orite-weather-panel';
        weatherPanel.style.cssText = "background:#ffffff !important; padding:15px !important; border-radius:15px !important; box-shadow:0 4px 15px rgba(0,0,0,0.15) !important; border:1px solid #e0e0e0 !important; font-family:Tahoma, Arial, sans-serif !important; color:#333 !important; width:340px !important; margin-top:20px !important;";

        function render() {
            const d = dict[lang];
            weatherPanel.innerHTML = `
                <select id="lang-sel-weather" style="width:100%; padding:5px; margin-bottom:10px; border-radius:5px; border:1px solid #ddd;">
                    ${Object.keys(dict).map(l => `<option value="${l}" ${l===lang?'selected':''}>${l.toUpperCase()}</option>`).join('')}
                </select>
                <h3 style="margin:0 0 10px 0;">${d.title}</h3>
                
                <div style="font-size:13px; line-height:1.6; background:#f8f9fa; padding:10px; border-radius:8px; border:1px solid #eaeaea; margin-bottom:12px;">
                    <div>🌐 <b>${d.ip}</b> <span id="ip-val">${d.loading}</span></div>
                    <div>📍 <b>${d.loc}</b> <span id="loc-val">${d.loading}</span></div>
                    <div>🌡️ <b>${d.temp}</b> <span id="temp-val">${d.loading}</span></div>
                    <div>⛅ <b>${d.weather}</b> <span id="weather-val">${d.loading}</span></div>
                </div>

                <div style="text-align:center;">
                    <span style="font-size:11px; color:#666; display:block; margin-bottom:5px;">${d.selectLoc}</span>
                    <div id="orite-map-live" style="width:100%; height:160px; border-radius:8px; border:1px solid #b3d1ff; z-index: 1 !important;"></div>
                </div>
            `;

            weatherPanel.querySelector('#lang-sel-weather').onchange = (e) => {
                lang = e.target.value;
                render();
                initLiveMapData();
            };

            initLiveMapData();
        }

        function initLiveMapData() {
            // دریافت آی‌پی
            fetch('https://api.ipify.org?format=json')
                .then(res => res.json())
                .then(data => {
                    if(weatherPanel.querySelector('#ip-val')) 
                        weatherPanel.querySelector('#ip-val').innerText = data.ip;
                    
                    // دریافت مختصات اولیه بر اساس IP
                    return fetch(`https://get.geojs.io/v1/ip/geo/${data.ip}.json`);
                })
                .then(res => res.json())
                .then(geo => {
                    const lat = parseFloat(geo.latitude) || 35.6892;
                    const lon = parseFloat(geo.longitude) || 51.3890;
                    const city = geo.city || "Tehran";
                    const country = geo.country || "Iran";

                    if(weatherPanel.querySelector('#loc-val'))
                        weatherPanel.querySelector('#loc-val').innerText = `${city}, ${country}`;

                    renderMap(lat, lon, city);
                })
                .catch(() => {
                    renderMap(35.6892, 51.3890, "Tehran");
                });
        }

        function renderMap(lat, lon, defaultCity) {
            if (map) map.remove();
            
            const mapContainer = weatherPanel.querySelector('#orite-map-live');
            if (!mapContainer) return;

            map = L.map(mapContainer).setView([lat, lon], 7);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            marker = L.marker([lat, lon]).addTo(map);

            // گوش‌به‌زنگ رویداد کلیک روی نقشه
            map.on('click', function(e) {
                const cLat = e.latlng.lat;
                const cLng = e.latlng.lng;

                if (marker) map.removeLayer(marker);
                marker = L.marker([cLat, cLng]).addTo(map);

                // درخواست Reverse Geocoding برای تبدیل مختصات به نام شهر/منطقه
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${cLat}&lon=${cLng}`)
                    .then(res => res.json())
                    .then(data => {
                        const addr = data.address;
                        const exactLocation = addr.city || addr.town || addr.village || addr.state || "Picked Location";
                        const exactCountry = addr.country || "";
                        
                        const fullLocText = exactCountry ? `${exactLocation}, ${exactCountry}` : exactLocation;
                        
                        if(weatherPanel.querySelector('#loc-val'))
                            weatherPanel.querySelector('#loc-val').innerText = fullLocText;

                        fetchWeather(exactLocation);
                    })
                    .catch(() => {
                        if(weatherPanel.querySelector('#loc-val'))
                            weatherPanel.querySelector('#loc-val').innerText = `${cLat.toFixed(4)}, ${cLng.toFixed(4)}`;
                        fetchWeather("Tehran");
                    });
            });

            fetchWeather(defaultCity);
        }

        function fetchWeather(city) {
            // دریافت آب‌وهوا بدون نیاز به API Key اختصاصی
            fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`)
                .then(res => res.json())
                .then(weatherData => {
                    if (weatherData.current_condition && weatherData.current_condition[0]) {
                        const temp = weatherData.current_condition[0].temp_C;
                        const descObj = weatherData.current_condition[0].weatherDesc[0];
                        const desc = descObj ? descObj.value : "Clear";
                        
                        if(weatherPanel.querySelector('#temp-val')) 
                            weatherPanel.querySelector('#temp-val').innerText = `${temp}°C`;
                        if(weatherPanel.querySelector('#weather-val')) 
                            weatherPanel.querySelector('#weather-val').innerText = desc;
                    } else {
                        fallbackWeather();
                    }
                })
                .catch(() => {
                    fallbackWeather();
                });
        }

        function fallbackWeather() {
            if(weatherPanel.querySelector('#temp-val')) weatherPanel.querySelector('#temp-val').innerText = "--°C";
            if(weatherPanel.querySelector('#weather-val')) weatherPanel.querySelector('#weather-val').innerText = "N/A";
        }

        document.body.appendChild(weatherPanel);
        render();
    }
})();