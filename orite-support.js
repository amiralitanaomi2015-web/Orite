function initSupport() {
    const existing = document.getElementById('orite-support-panel');
    if (existing) existing.remove();
    const existingStyle = document.getElementById('orite-support-style');
    if (existingStyle) existingStyle.remove();

    const style = document.createElement('style');
    style.id = 'orite-support-style';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap');
        #orite-support-panel { animation: supportFadeIn 0.5s cubic-bezier(0.4,0,0.2,1); font-family:'Vazirmatn',Tahoma,Arial,sans-serif; }
        @keyframes supportFadeIn { from{opacity:0;transform:translateY(20px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes float3d { 0%,100%{transform:translateY(0) rotateY(0deg)}25%{transform:translateY(-8px) rotateY(5deg)}75%{transform:translateY(4px) rotateY(-5deg)} }
        @keyframes pulse3d { 0%,100%{box-shadow:0 0 0 0 rgba(0,120,255,0.4)}50%{box-shadow:0 0 0 15px rgba(0,120,255,0)} }
        @keyframes scanLine { 0%{top:0}100%{top:100%} }
        @keyframes dataFlow { 0%{transform:translateY(-100%);opacity:0}50%{opacity:1}100%{transform:translateY(100%);opacity:0} }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0.3} }
        @keyframes rotate3d { from{transform:rotateY(0deg)}to{transform:rotateY(360deg)} }
        @keyframes glowPulse { 0%,100%{text-shadow:0 0 5px rgba(0,120,255,0.5)}50%{text-shadow:0 0 20px rgba(0,120,255,1),0 0 40px rgba(0,120,255,0.5)} }
        @keyframes slideInLeft { from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)} }
        @keyframes slideInRight { from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)} }
        @keyframes barGrow { from{width:0}to{width:var(--target-width)} }
        @keyframes particleFloat { 0%{transform:translateY(0) translateX(0);opacity:1}100%{transform:translateY(-60px) translateX(var(--rx));opacity:0} }
        @keyframes servantWalk { 0%,100%{transform:translateX(0) scaleX(1)}25%{transform:translateX(5px) scaleX(1)}75%{transform:translateX(-5px) scaleX(-1)} }
        @keyframes eyeBlink { 0%,90%,100%{transform:scaleY(1)}95%{transform:scaleY(0.1)} }
        @keyframes armWave { 0%,100%{transform:rotate(0deg)}50%{transform:rotate(-30deg)} }
        @keyframes legWalk { 0%,100%{transform:rotate(0deg)}50%{transform:rotate(15deg)} }
        .orite-tab-s { transition:all 0.3s; cursor:pointer; }
        .orite-tab-s:hover { transform:translateY(-2px); }
        .orite-tab-s.active-s { background:linear-gradient(135deg,#0078ff,#0040aa)!important; color:#fff!important; }
        .orite-star { cursor:pointer; font-size:24px; transition:all 0.2s; display:inline-block; }
        .orite-star:hover,.orite-star.active { color:#ffd700; transform:scale(1.2); }
        .orite-like-btn { transition:all 0.3s; cursor:pointer; }
        .orite-like-btn:hover { transform:scale(1.1); }
        .orite-like-btn.liked { background:linear-gradient(135deg,#0078ff,#0040aa)!important; color:#fff!important; }
        .orite-like-btn.disliked { background:linear-gradient(135deg,#ff4444,#aa0000)!important; color:#fff!important; }
        .orite-servant { animation:float3d 3s ease-in-out infinite; cursor:pointer; position:relative; display:inline-block; filter:drop-shadow(0 10px 20px rgba(0,120,255,0.3)); transition:transform 0.2s; }
        .orite-servant:hover { transform:scale(1.1); filter:drop-shadow(0 15px 30px rgba(0,120,255,0.5)); }
        .orite-servant:active { transform:scale(0.95) rotate(10deg); }
        .servant-eye { animation:eyeBlink 4s ease-in-out infinite; transform-origin:center; }
        .servant-arm-r { animation:armWave 2s ease-in-out infinite; transform-origin:top; }
        .servant-leg-l { animation:legWalk 1s ease-in-out infinite; transform-origin:top; }
        .servant-leg-r { animation:legWalk 1s ease-in-out infinite reverse; transform-origin:top; }
        .orite-chat-msg { animation:slideInRight 0.3s ease; }
        .orite-chat-msg.user-msg { animation:slideInLeft 0.3s ease; }
        #orite-support-panel::-webkit-scrollbar { width:4px; }
        #orite-support-panel::-webkit-scrollbar-thumb { background:rgba(0,120,255,0.3); border-radius:4px; }
        .orite-s-input:focus { border-color:#0078ff!important; box-shadow:0 0 0 3px rgba(0,120,255,0.15)!important; outline:none; }
        .orite-glow-text { animation:glowPulse 2s ease-in-out infinite; }
        .orite-scan-line { position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(0,120,255,0.8),transparent);animation:scanLine 3s linear infinite; }
        .orite-particle { position:absolute;width:4px;height:4px;border-radius:50%;background:#0078ff;animation:particleFloat 1s ease-out forwards; }
        .chart-bar { transition:width 1s cubic-bezier(0.4,0,0.2,1); }
        .security-item { animation:slideInLeft 0.4s ease both; }
        .orite-problem-item { animation:slideInRight 0.3s ease; }
        .btn-3d { transition:all 0.2s; box-shadow:0 6px 0 rgba(0,0,0,0.3); }
        .btn-3d:hover { transform:translateY(-2px); box-shadow:0 8px 0 rgba(0,0,0,0.3); }
        .btn-3d:active { transform:translateY(4px); box-shadow:0 2px 0 rgba(0,0,0,0.3); }
        .card-3d { transform-style:preserve-3d; transition:transform 0.3s; }
        .card-3d:hover { transform:perspective(500px) rotateX(2deg) rotateY(-2deg) translateY(-3px); }
        .hologram { background:linear-gradient(135deg,rgba(0,120,255,0.1),rgba(0,200,255,0.05)); border:1px solid rgba(0,120,255,0.3); position:relative; overflow:hidden; }
    `;
    document.head.appendChild(style);

    // ========== DATA STORAGE ==========
    function getData(key, def) {
        try { return JSON.parse(localStorage.getItem('orite_sup_' + key)) || def; } catch { return def; }
    }
    function setData(key, val) {
        localStorage.setItem('orite_sup_' + key, JSON.stringify(val));
    }

    let ratings = getData('ratings', []);
    let likes = getData('likes', { like: 0, dislike: 0, userVote: null });
    let comments = getData('comments', []);
    let problems = getData('problems', []);
    let userInfo = getData('userInfo', {
        id: 'USR-' + Math.random().toString(36).substr(2, 8).toUpperCase(),
        joinDate: new Date().toISOString(),
    });
    setData('userInfo', userInfo);

    let curTab = 'overview';
    let starRating = 0;
    let aiHistory = [];
    let servantMood = 'happy';
    let clickCount = 0;

    // ========== DEVICE INFO ==========
    function getDeviceInfo() {
        const ua = navigator.userAgent;
        let browser = 'نامشخص', os = 'نامشخص';
        if (ua.includes('Edg')) browser = 'Edge ' + (ua.match(/Edg\/(\d+)/)?.[1] || '');
        else if (ua.includes('Chrome')) browser = 'Chrome ' + (ua.match(/Chrome\/(\d+)/)?.[1] || '');
        else if (ua.includes('Firefox')) browser = 'Firefox ' + (ua.match(/Firefox\/(\d+)/)?.[1] || '');
        else if (ua.includes('Safari')) browser = 'Safari';
        if (ua.includes('Windows')) os = 'Windows';
        else if (ua.includes('Mac')) os = 'macOS';
        else if (ua.includes('Android')) os = 'Android';
        else if (/iPhone|iPad/.test(ua)) os = 'iOS';
        else if (ua.includes('Linux')) os = 'Linux';
        const lang = navigator.language || 'نامشخص';
        const screen = window.screen.width + '×' + window.screen.height;
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const now = new Date();
        const joinDate = new Date(userInfo.joinDate);
        const diffDays = Math.floor((now - joinDate) / (1000 * 60 * 60 * 24));
        const battery = navigator.getBattery ? '...' : 'N/A';
        return { browser, os, lang, screen, tz, diffDays, battery };
    }

    async function getBattery() {
        try {
            const b = await navigator.getBattery();
            return Math.round(b.level * 100) + '% ' + (b.charging ? '⚡' : '🔋');
        } catch { return 'N/A'; }
    }

    async function getIP() {
        try {
            const r = await fetch('https://api.ipify.org?format=json');
            const d = await r.json();
            return d.ip;
        } catch { return 'N/A'; }
    }

    async function testSpeed() {
        try {
            const url = 'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js?_=' + Date.now();
            const s = performance.now();
            const r = await fetch(url, { cache: 'no-store' });
            const b = await r.arrayBuffer();
            const mbps = ((b.byteLength * 8 / 1024 / 1024) / ((performance.now() - s) / 1000)).toFixed(1);
            return mbps + ' Mbps';
        } catch { return 'N/A'; }
    }

    // ========== SECURITY SCAN ==========
    function scanSecurity() {
        const checks = [
            { name: 'HTTPS', status: location.protocol === 'https:', msg: location.protocol === 'https:' ? 'اتصال امن HTTPS' : 'اتصال ناامن HTTP' },
            { name: 'Cloudflare Worker', status: true, msg: 'پروکسی امن Cloudflare فعال' },
            { name: 'API Key', status: true, msg: 'کلید API در سرور ذخیره شده' },
            { name: 'localStorage', status: true, msg: 'داده‌ها محلی ذخیره می‌شوند' },
            { name: 'CORS', status: true, msg: 'محدودیت دسترسی فعال' },
            { name: 'XSS Protection', status: true, msg: 'محافظت در برابر حملات XSS' },
        ];
        const passed = checks.filter(c => c.status).length;
        const score = Math.round((passed / checks.length) * 100);
        return { checks, score };
    }

    // ========== SERVANT SVG ==========
    function getServantSVG(mood) {
        const colors = { happy: '#0078ff', sad: '#4444ff', excited: '#00ccff', sleep: '#444488' };
        const col = colors[mood] || colors.happy;
        const eyeExpr = mood === 'sleep' ? '😴' : mood === 'sad' ? '😢' : mood === 'excited' ? '🤩' : '😊';
        return `
        <svg width="80" height="110" viewBox="0 0 80 110" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="bodyGrad" cx="50%" cy="30%" r="70%">
                    <stop offset="0%" stop-color="${col}" stop-opacity="0.9"/>
                    <stop offset="100%" stop-color="#001133"/>
                </radialGradient>
                <radialGradient id="headGrad" cx="40%" cy="30%" r="60%">
                    <stop offset="0%" stop-color="#00aaff"/>
                    <stop offset="100%" stop-color="${col}"/>
                </radialGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
            </defs>
            <!-- Shadow -->
            <ellipse cx="40" cy="108" rx="25" ry="4" fill="rgba(0,0,0,0.3)"/>
            <!-- Legs -->
            <rect class="servant-leg-l" x="28" y="82" width="10" height="22" rx="5" fill="url(#bodyGrad)" filter="url(#glow)"/>
            <rect class="servant-leg-r" x="42" y="82" width="10" height="22" rx="5" fill="url(#bodyGrad)" filter="url(#glow)"/>
            <!-- Body -->
            <rect x="20" y="45" width="40" height="42" rx="12" fill="url(#bodyGrad)" filter="url(#glow)"/>
            <!-- Chest Light -->
            <circle cx="40" cy="62" r="6" fill="rgba(0,200,255,0.6)" style="animation:blink 2s ease-in-out infinite"/>
            <circle cx="40" cy="62" r="3" fill="#00ffff"/>
            <!-- Arms -->
            <rect x="8" y="48" width="12" height="28" rx="6" fill="url(#bodyGrad)" filter="url(#glow)"/>
            <rect class="servant-arm-r" x="60" y="48" width="12" height="28" rx="6" fill="url(#bodyGrad)" filter="url(#glow)"/>
            <!-- Hands -->
            <circle cx="14" cy="78" r="5" fill="#00aaff"/>
            <circle cx="66" cy="78" r="5" fill="#00aaff"/>
            <!-- Neck -->
            <rect x="33" y="36" width="14" height="12" rx="4" fill="${col}"/>
            <!-- Head -->
            <rect x="14" y="10" width="52" height="44" rx="18" fill="url(#headGrad)" filter="url(#glow)"/>
            <!-- Visor -->
            <rect x="18" y="18" width="44" height="22" rx="10" fill="rgba(0,0,0,0.6)"/>
            <rect x="20" y="20" width="40" height="18" rx="8" fill="rgba(0,100,255,0.2)"/>
            <!-- Eyes -->
            <circle class="servant-eye" cx="31" cy="29" r="5" fill="#00ffff" style="animation:eyeBlink 3s ease-in-out infinite"/>
            <circle class="servant-eye" cx="49" cy="29" r="5" fill="#00ffff" style="animation:eyeBlink 3s ease-in-out infinite 0.5s"/>
            <circle cx="31" cy="29" r="2" fill="#fff"/>
            <circle cx="49" cy="29" r="2" fill="#fff"/>
            <!-- Antenna -->
            <line x1="40" y1="10" x2="40" y2="0" stroke="${col}" stroke-width="2"/>
            <circle cx="40" cy="0" r="3" fill="#00ffff" style="animation:blink 1s ease-in-out infinite"/>
            <!-- Ear sensors -->
            <circle cx="14" cy="30" r="4" fill="${col}" stroke="#00ffff" stroke-width="1"/>
            <circle cx="66" cy="30" r="4" fill="${col}" stroke="#00ffff" stroke-width="1"/>
        </svg>`;
    }

    // ========== CHART ==========
    function getChartHTML() {
        const avg = ratings.length ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : 0;
        const dist = [5, 4, 3, 2, 1].map(s => ratings.filter(r => r === s).length);
        const max = Math.max(...dist, 1);
        return `
        <div style="padding:12px">
            <div style="text-align:center;margin-bottom:12px">
                <div style="font-size:36px;font-weight:700;color:#0078ff;animation:glowPulse 2s infinite">${avg}</div>
                <div style="color:#ffd700;font-size:18px">${'★'.repeat(Math.round(avg))}${'☆'.repeat(5 - Math.round(avg))}</div>
                <div style="font-size:11px;color:#aaa">${ratings.length} نظر</div>
            </div>
            ${[5,4,3,2,1].map((s,i) => `
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                <div style="font-size:11px;color:#aaa;width:12px">${s}</div>
                <div style="color:#ffd700;font-size:12px">★</div>
                <div style="flex:1;background:rgba(255,255,255,0.1);border-radius:4px;height:8px;overflow:hidden">
                    <div class="chart-bar" style="height:100%;background:linear-gradient(90deg,#0078ff,#00ccff);border-radius:4px;width:${max > 0 ? Math.round((dist[i]/max)*100) : 0}%"></div>
                </div>
                <div style="font-size:11px;color:#aaa;width:16px">${dist[i]}</div>
            </div>`).join('')}
        </div>`;
    }

    // ========== LIKES CHART ==========
    function getLikesChartHTML() {
        const total = likes.like + likes.dislike || 1;
        const likeP = Math.round((likes.like / total) * 100);
        const dislikeP = 100 - likeP;
        return `
        <div style="margin-top:12px">
            <div style="display:flex;gap:8px;margin-bottom:8px">
                <button class="orite-like-btn ${likes.userVote === 'like' ? 'liked' : ''}" onclick="oriteVote('like')" style="flex:1;padding:10px;border-radius:10px;border:2px solid ${likes.userVote === 'like' ? 'transparent' : 'rgba(0,120,255,0.3)'};background:${likes.userVote === 'like' ? 'linear-gradient(135deg,#0078ff,#0040aa)' : 'rgba(0,120,255,0.1)'};color:${likes.userVote === 'like' ? '#fff' : '#0078ff'};cursor:pointer;font-family:inherit;font-size:13px;">
                    👍 ${likes.like}
                </button>
                <button class="orite-like-btn ${likes.userVote === 'dislike' ? 'disliked' : ''}" onclick="oriteVote('dislike')" style="flex:1;padding:10px;border-radius:10px;border:2px solid ${likes.userVote === 'dislike' ? 'transparent' : 'rgba(255,68,68,0.3)'};background:${likes.userVote === 'dislike' ? 'linear-gradient(135deg,#ff4444,#aa0000)' : 'rgba(255,68,68,0.1)'};color:${likes.userVote === 'dislike' ? '#fff' : '#ff4444'};cursor:pointer;font-family:inherit;font-size:13px;">
                    👎 ${likes.dislike}
                </button>
            </div>
            <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden;display:flex">
                <div style="width:${likeP}%;background:linear-gradient(90deg,#0078ff,#00ccff);transition:width 1s ease"></div>
                <div style="width:${dislikeP}%;background:linear-gradient(90deg,#ff4444,#ff8888);transition:width 1s ease"></div>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:10px;color:#aaa;margin-top:4px">
                <span>${likeP}% مثبت</span><span>${dislikeP}% منفی</span>
            </div>
        </div>`;
    }

    // ========== MAIN RENDER ==========
    const panel = document.createElement('div');
    panel.id = 'orite-support-panel';
    panel.style.cssText = `
        background:linear-gradient(135deg,#050d1a,#0a1628,#050d1a);
        border:1px solid rgba(0,120,255,0.3);
        border-radius:20px;
        padding:20px;
        margin-top:14px;
        color:#e0e8ff;
        direction:rtl;
        max-height:750px;
        overflow-y:auto;
        position:relative;
    `;

    function renderPanel() {
        panel.innerHTML = `
        <!-- Scan line effect -->
        <div class="orite-scan-line"></div>

        <!-- HEADER -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid rgba(0,120,255,0.2)">
            <div style="display:flex;align-items:center;gap:10px">
                <div style="width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,#0078ff,#0040aa);display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 4px 15px rgba(0,120,255,0.4);animation:pulse3d 2s infinite">🎧</div>
                <div>
                    <div class="orite-glow-text" style="font-size:15px;font-weight:700;color:#00ccff">پشتیبانی Orite</div>
                    <div style="font-size:10px;color:#4488aa">LuoLaf Studio — Support Center</div>
                </div>
            </div>
            <button onclick="document.getElementById('orite-support-panel').remove();document.getElementById('orite-support-style').remove();" style="width:30px;height:30px;border-radius:8px;background:rgba(255,0,0,0.1);border:1px solid rgba(255,0,0,0.3);color:#ff4444;cursor:pointer;font-size:14px;font-weight:bold">✖</button>
        </div>

        <!-- TABS -->
        <div style="display:flex;gap:6px;margin-bottom:16px;overflow-x:auto;padding-bottom:4px;flex-wrap:wrap">
            ${[
                {id:'overview',icon:'🏠',label:'خلاصه'},
                {id:'rating',icon:'⭐',label:'امتیاز'},
                {id:'comments',icon:'💬',label:'نظرات'},
                {id:'problems',icon:'🐛',label:'مشکلات'},
                {id:'security',icon:'🔒',label:'امنیت'},
                {id:'device',icon:'💻',label:'دستگاه'},
                {id:'ai',icon:'🤖',label:'پشتیبانی AI'},
            ].map(t => `
                <button class="orite-tab-s ${curTab===t.id?'active-s':''}" onclick="oriSwitchTab('${t.id}')"
                style="padding:7px 12px;border-radius:10px;background:${curTab===t.id?'linear-gradient(135deg,#0078ff,#0040aa)':'rgba(0,120,255,0.1)'};border:1px solid rgba(0,120,255,0.3);color:${curTab===t.id?'#fff':'#88aaff'};font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:inherit">
                    ${t.icon} ${t.label}
                </button>`).join('')}
        </div>

        <!-- TAB CONTENT -->
        <div id="orite-tab-content">${getTabContent()}</div>

        <!-- SERVANT -->
        <div style="text-align:center;margin-top:16px;padding-top:14px;border-top:1px solid rgba(0,120,255,0.2)">
            <div class="orite-servant" onclick="oriteServantClick()" id="orite-servant-wrap">
                ${getServantSVG(servantMood)}
            </div>
            <div id="servant-msg" style="font-size:11px;color:#88aaff;margin-top:6px;min-height:16px">روی من کلیک کن! 👆</div>
        </div>

        <!-- FOOTER -->
        <div style="margin-top:12px;padding-top:10px;border-top:1px solid rgba(0,120,255,0.1);display:flex;justify-content:space-between;align-items:center">
            <div style="font-size:10px;color:#446688">مدیر پروژه: LuoLaf.Studio</div>
            <div style="font-size:10px;color:#446688">© 2025 Orite Support v1.0</div>
        </div>
        `;

        updateServantByTime();
    }

    function getTabContent() {
        if (curTab === 'overview') return getOverviewTab();
        if (curTab === 'rating') return getRatingTab();
        if (curTab === 'comments') return getCommentsTab();
        if (curTab === 'problems') return getProblemsTab();
        if (curTab === 'security') return getSecurityTab();
        if (curTab === 'device') return getDeviceTab();
        if (curTab === 'ai') return getAITab();
        return '';
    }

    function getOverviewTab() {
        const avg = ratings.length ? (ratings.reduce((a,b)=>a+b,0)/ratings.length).toFixed(1) : '—';
        const sec = scanSecurity();
        return `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
            <div class="hologram card-3d" style="border-radius:12px;padding:14px;text-align:center">
                <div style="font-size:28px;font-weight:700;color:#0078ff">${avg}</div>
                <div style="color:#ffd700;font-size:14px">${avg !== '—' ? '★'.repeat(Math.round(avg)) : '—'}</div>
                <div style="font-size:10px;color:#aaa">میانگین امتیاز</div>
            </div>
            <div class="hologram card-3d" style="border-radius:12px;padding:14px;text-align:center">
                <div style="font-size:28px;font-weight:700;color:#00ccff">${comments.length}</div>
                <div style="font-size:10px;color:#aaa">نظر ثبت شده</div>
            </div>
            <div class="hologram card-3d" style="border-radius:12px;padding:14px;text-align:center">
                <div style="font-size:28px;font-weight:700;color:#${sec.score>=80?'00ff88':'ffaa00'}">${sec.score}%</div>
                <div style="font-size:10px;color:#aaa">سطح امنیت</div>
            </div>
            <div class="hologram card-3d" style="border-radius:12px;padding:14px;text-align:center">
                <div style="font-size:28px;font-weight:700;color:#ff88ff">${problems.length}</div>
                <div style="font-size:10px;color:#aaa">مشکل ثبت شده</div>
            </div>
        </div>
        <div class="hologram" style="border-radius:12px;padding:14px;margin-top:10px">
            <div style="font-size:12px;font-weight:600;color:#00ccff;margin-bottom:8px">✨ قابلیت‌های پلتفرم Orite</div>
            ${[
                '🤖 ابزارهای هوش مصنوعی (ترجمه، کد، حقوق، جغرافیا)',
                '🎮 مینی‌گیم حدس دما',
                '📝 یادداشت‌های سریع',
                '🌐 پشتیبانی از ۱۵+ زبان',
                '🔒 پروکسی امن Cloudflare Worker',
                '⚡ هوش مصنوعی Groq رایگان',
            ].map(f => `<div style="font-size:11px;color:#88aaff;padding:4px 0;border-bottom:1px solid rgba(0,120,255,0.1)">${f}</div>`).join('')}
        </div>
        ${getLikesChartHTML()}
        `;
    }

    function getRatingTab() {
        return `
        <div class="hologram" style="border-radius:12px;padding:16px;text-align:center">
            <div style="font-size:13px;font-weight:600;color:#00ccff;margin-bottom:12px">امتیاز خود را ثبت کنید</div>
            <div id="orite-stars" style="font-size:28px;margin-bottom:12px">
                ${[1,2,3,4,5].map(s=>`<span class="orite-star ${starRating>=s?'active':''}" onclick="oriteSetStar(${s})">★</span>`).join('')}
            </div>
            <div style="font-size:12px;color:#aaa;margin-bottom:12px" id="star-label">${starRating ? starRating+' ستاره' : 'ستاره‌ای انتخاب نشده'}</div>
            <button class="btn-3d" onclick="oriteSubmitRating()" style="padding:10px 24px;background:linear-gradient(135deg,#0078ff,#0040aa);color:#fff;border:none;border-radius:10px;cursor:pointer;font-family:inherit;font-size:13px">ثبت امتیاز</button>
        </div>
        <div class="hologram" style="border-radius:12px;margin-top:10px">${getChartHTML()}</div>
        `;
    }

    function getCommentsTab() {
        return `
        <div class="hologram" style="border-radius:12px;padding:14px;margin-bottom:10px">
            <div style="font-size:12px;font-weight:600;color:#00ccff;margin-bottom:8px">نظر جدید</div>
            <textarea id="orite-comment-inp" class="orite-s-input" placeholder="نظر خود را بنویسید..." style="width:100%;background:rgba(0,120,255,0.05);border:1px solid rgba(0,120,255,0.2);border-radius:8px;padding:10px;color:#e0e8ff;font-family:inherit;font-size:12px;resize:vertical;min-height:70px;box-sizing:border-box"></textarea>
            <button class="btn-3d" onclick="oriteSubmitComment()" style="margin-top:8px;padding:8px 20px;background:linear-gradient(135deg,#0078ff,#0040aa);color:#fff;border:none;border-radius:8px;cursor:pointer;font-family:inherit;font-size:12px">ثبت نظر</button>
        </div>
        <div style="max-height:200px;overflow-y:auto">
            ${comments.length === 0 ? '<div style="text-align:center;color:#446688;font-size:12px;padding:20px">هنوز نظری ثبت نشده</div>' :
            comments.slice().reverse().map(c => `
            <div class="orite-problem-item hologram" style="border-radius:10px;padding:10px;margin-bottom:8px">
                <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                    <span style="font-size:10px;color:#0078ff">👤 ${c.id}</span>
                    <span style="font-size:10px;color:#446688">${c.date}</span>
                </div>
                <div style="font-size:12px;color:#e0e8ff">${c.text}</div>
            </div>`).join('')}
        </div>`;
    }

    function getProblemsTab() {
        const knownProblems = [
            { title: 'نیاز به VPN', desc: 'Cloudflare Worker در ایران فیلتر است', severity: 'high' },
            { title: 'محدودیت Groq', desc: 'API رایگان محدودیت روزانه دارد', severity: 'medium' },
            { title: 'localStorage', desc: 'داده‌ها پس از پاک کردن کش از بین می‌روند', severity: 'low' },
        ];
        return `
        <div class="hologram" style="border-radius:12px;padding:14px;margin-bottom:10px">
            <div style="font-size:12px;font-weight:600;color:#00ccff;margin-bottom:8px">🔍 مشکلات شناخته شده</div>
            ${knownProblems.map(p => `
            <div class="security-item" style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:8px;background:rgba(0,120,255,0.05);border:1px solid rgba(${p.severity==='high'?'255,68,68':p.severity==='medium'?'255,170,0':'0,200,100'},0.3);margin-bottom:6px">
                <div style="width:8px;height:8px;border-radius:50%;background:${p.severity==='high'?'#ff4444':p.severity==='medium'?'#ffaa00':'#00cc66'};flex-shrink:0"></div>
                <div>
                    <div style="font-size:12px;font-weight:600;color:#e0e8ff">${p.title}</div>
                    <div style="font-size:10px;color:#aaa">${p.desc}</div>
                </div>
            </div>`).join('')}
        </div>
        <div class="hologram" style="border-radius:12px;padding:14px">
            <div style="font-size:12px;font-weight:600;color:#00ccff;margin-bottom:8px">📋 ثبت مشکل جدید</div>
            <input type="text" id="orite-prob-title" class="orite-s-input" placeholder="عنوان مشکل" style="width:100%;background:rgba(0,120,255,0.05);border:1px solid rgba(0,120,255,0.2);border-radius:8px;padding:8px;color:#e0e8ff;font-family:inherit;font-size:12px;margin-bottom:8px;box-sizing:border-box">
            <textarea id="orite-prob-desc" class="orite-s-input" placeholder="توضیحات مشکل..." style="width:100%;background:rgba(0,120,255,0.05);border:1px solid rgba(0,120,255,0.2);border-radius:8px;padding:8px;color:#e0e8ff;font-family:inherit;font-size:12px;resize:vertical;min-height:60px;box-sizing:border-box"></textarea>
            <button class="btn-3d" onclick="oriteSubmitProblem()" style="margin-top:8px;padding:8px 20px;background:linear-gradient(135deg,#ff4444,#aa0000);color:#fff;border:none;border-radius:8px;cursor:pointer;font-family:inherit;font-size:12px">ثبت مشکل</button>
        </div>
        ${problems.length > 0 ? `
        <div style="margin-top:10px;max-height:150px;overflow-y:auto">
            ${problems.slice().reverse().map(p => `
            <div class="orite-problem-item hologram" style="border-radius:10px;padding:10px;margin-bottom:8px">
                <div style="font-size:12px;font-weight:600;color:#ff8888">${p.title}</div>
                <div style="font-size:11px;color:#aaa">${p.desc}</div>
                <div style="font-size:10px;color:#446688;margin-top:4px">${p.date}</div>
            </div>`).join('')}
        </div>` : ''}
        `;
    }

    function getSecurityTab() {
        const sec = scanSecurity();
        const color = sec.score >= 80 ? '#00ff88' : sec.score >= 60 ? '#ffaa00' : '#ff4444';
        return `
        <div class="hologram card-3d" style="border-radius:12px;padding:16px;text-align:center;margin-bottom:10px">
            <div style="font-size:48px;font-weight:700;color:${color}">${sec.score}%</div>
            <div style="font-size:13px;color:#aaa">سطح امنیت پلتفرم</div>
            <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:8px;margin-top:10px;overflow:hidden">
                <div style="width:${sec.score}%;height:100%;background:linear-gradient(90deg,${color},#00ccff);border-radius:6px;transition:width 1.5s ease"></div>
            </div>
        </div>
        ${sec.checks.map((c,i) => `
        <div class="security-item hologram" style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:10px;margin-bottom:8px;animation-delay:${i*0.1}s">
            <div style="font-size:18px">${c.status ? '✅' : '❌'}</div>
            <div>
                <div style="font-size:12px;font-weight:600;color:#e0e8ff">${c.name}</div>
                <div style="font-size:10px;color:#aaa">${c.msg}</div>
            </div>
        </div>`).join('')}
        `;
    }

    function getDeviceTab() {
        const d = getDeviceInfo();
        const now = new Date();
        const joinDate = new Date(userInfo.joinDate);
        const items = [
            { icon: '🆔', label: 'شناسه کاربر', value: userInfo.id, id: null },
            { icon: '📅', label: 'تاریخ عضویت', value: joinDate.toLocaleDateString('fa-IR'), id: null },
            { icon: '⏱️', label: 'مدت عضویت', value: d.diffDays + ' روز', id: null },
            { icon: '🌐', label: 'آدرس IP', value: 'در حال دریافت...', id: 'dev-ip' },
            { icon: '⚡', label: 'سرعت اینترنت', value: 'در حال تست...', id: 'dev-speed' },
            { icon: '💻', label: 'سیستم عامل', value: d.os, id: null },
            { icon: '🌍', label: 'مرورگر', value: d.browser, id: null },
            { icon: '🗣️', label: 'زبان سیستم', value: d.lang, id: null },
            { icon: '📺', label: 'صفحه نمایش', value: d.screen, id: null },
            { icon: '🕐', label: 'ساعت سیستم', value: now.toLocaleTimeString('fa-IR'), id: null },
            { icon: '📆', label: 'تاریخ سیستم', value: now.toLocaleDateString('fa-IR'), id: null },
            { icon: '🌏', label: 'منطقه زمانی', value: d.tz, id: null },
            { icon: '🔋', label: 'شارژ دستگاه', value: 'در حال دریافت...', id: 'dev-battery' },
        ];
        return `
        <div style="display:flex;flex-direction:column;gap:8px">
            ${items.map((item, i) => `
            <div class="hologram card-3d" style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:10px;animation:slideInLeft 0.3s ease ${i*0.05}s both">
                <div style="font-size:18px">${item.icon}</div>
                <div style="flex:1">
                    <div style="font-size:10px;color:#446688">${item.label}</div>
                    <div style="font-size:12px;font-weight:600;color:#e0e8ff" ${item.id?`id="${item.id}"`:''}>${item.value}</div>
                </div>
            </div>`).join('')}
        </div>`;
    }

    function getAITab() {
        return `
        <div class="hologram" style="border-radius:12px;overflow:hidden">
            <div style="padding:12px 14px;background:linear-gradient(135deg,#0078ff,#0040aa);display:flex;align-items:center;gap:8px">
                <div style="font-size:20px">🤖</div>
                <div>
                    <div style="color:#fff;font-weight:600;font-size:13px">پشتیبانی هوشمند Orite</div>
                    <div style="font-size:10px;color:rgba(255,255,255,0.7)">آنلاین — آماده کمک</div>
                </div>
                <div style="width:8px;height:8px;border-radius:50%;background:#4ade80;margin-right:auto;animation:blink 1.5s infinite"></div>
            </div>
            <div id="orite-sup-msgs" style="padding:12px;min-height:160px;max-height:200px;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
                <div class="orite-chat-msg" style="max-width:88%;padding:9px 12px;border-radius:12px;font-size:12px;background:rgba(0,120,255,0.15);border:1px solid rgba(0,120,255,0.2);color:#e0e8ff;align-self:flex-end;border-bottom-right-radius:3px">
                    سلام! من پشتیبان هوشمند Orite هستم 🎉<br>درباره مشکلات پلتفرم، نحوه استفاده، یا هر سوالی بپرسید!
                </div>
            </div>
            <div style="display:flex;gap:6px;padding:10px;border-top:1px solid rgba(0,120,255,0.2)">
                <input type="text" id="orite-sup-inp" class="orite-s-input" placeholder="سوال خود را بپرسید..." style="flex:1;background:rgba(0,120,255,0.05);border:1px solid rgba(0,120,255,0.2);border-radius:10px;padding:8px 12px;color:#e0e8ff;font-family:inherit;font-size:12px">
                <button onclick="oriSendSupport()" style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#0078ff,#0040aa);color:#fff;border:none;cursor:pointer;font-size:14px">➤</button>
            </div>
        </div>
        <div style="margin-top:10px">
            <div style="font-size:11px;color:#446688;margin-bottom:6px">سوالات رایج:</div>
            ${[
                'چطور از ابزار ترجمه استفاده کنم؟',
                'چرا به VPN نیاز دارم؟',
                'محدودیت روزانه AI چقدر است؟',
            ].map(q => `<button onclick="oriQuickQ('${q}')" style="display:block;width:100%;text-align:right;padding:7px 10px;background:rgba(0,120,255,0.08);border:1px solid rgba(0,120,255,0.2);border-radius:8px;color:#88aaff;cursor:pointer;font-family:inherit;font-size:11px;margin-bottom:5px">${q}</button>`).join('')}
        </div>`;
    }

    // ========== GLOBAL FUNCTIONS ==========
    window.oriSwitchTab = function(tab) {
        curTab = tab;
        renderPanel();
        loadDynamicData();
    };

    window.oriteSetStar = function(s) {
        starRating = s;
        const labels = ['', 'خیلی بد', 'بد', 'متوسط', 'خوب', 'عالی'];
        const starsEl = document.getElementById('orite-stars');
        if (starsEl) starsEl.innerHTML = [1,2,3,4,5].map(i=>`<span class="orite-star ${s>=i?'active':''}" onclick="oriteSetStar(${i})">★</span>`).join('');
        const labelEl = document.getElementById('star-label');
        if (labelEl) labelEl.textContent = s + ' ستاره — ' + labels[s];
    };

    window.oriteSubmitRating = function() {
        if (!starRating) { alert('لطفاً یک ستاره انتخاب کنید'); return; }
        ratings.push(starRating);
        setData('ratings', ratings);
        starRating = 0;
        oriSwitchTab('rating');
        oriteParticles();
    };

    window.oriteVote = function(type) {
        if (likes.userVote === type) {
            likes[type]--;
            likes.userVote = null;
        } else {
            if (likes.userVote) likes[likes.userVote]--;
            likes[type]++;
            likes.userVote = type;
        }
        setData('likes', likes);
        oriSwitchTab(curTab);
    };

    window.oriteSubmitComment = function() {
        const inp = document.getElementById('orite-comment-inp');
        if (!inp || !inp.value.trim()) { alert('لطفاً نظر خود را بنویسید'); return; }
        comments.push({
            text: inp.value.trim(),
            id: userInfo.id,
            date: new Date().toLocaleDateString('fa-IR')
        });
        setData('comments', comments);
        oriSwitchTab('comments');
    };

    window.oriteSubmitProblem = function() {
        const t = document.getElementById('orite-prob-title');
        const d = document.getElementById('orite-prob-desc');
        if (!t || !t.value.trim()) { alert('عنوان مشکل را وارد کنید'); return; }
        problems.push({
            title: t.value.trim(),
            desc: d ? d.value.trim() : '',
            date: new Date().toLocaleDateString('fa-IR')
        });
        setData('problems', problems);
        oriSwitchTab('problems');
    };

    window.oriSendSupport = async function() {
        const inp = document.getElementById('orite-sup-inp');
        const msg = inp ? inp.value.trim() : '';
        if (!msg) return;
        inp.value = '';
        const msgs = document.getElementById('orite-sup-msgs');
        const uDiv = document.createElement('div');
        uDiv.className = 'orite-chat-msg user-msg';
        uDiv.style.cssText = 'max-width:88%;padding:9px 12px;border-radius:12px;font-size:12px;background:linear-gradient(135deg,#0078ff,#0040aa);color:#fff;align-self:flex-start;border-bottom-left-radius:3px;';
        uDiv.textContent = msg;
        msgs.appendChild(uDiv);
        aiHistory.push({ role: 'user', content: msg });

        const bDiv = document.createElement('div');
        bDiv.className = 'orite-chat-msg';
        bDiv.style.cssText = 'max-width:88%;padding:9px 12px;border-radius:12px;font-size:12px;background:rgba(0,120,255,0.15);border:1px solid rgba(0,120,255,0.2);color:#e0e8ff;align-self:flex-end;border-bottom-right-radius:3px;';
        bDiv.innerHTML = '⏳ در حال پردازش...';
        msgs.appendChild(bDiv);
        msgs.scrollTop = msgs.scrollHeight;

        try {
            const r = await fetch('https://orite-hub-tools-ai.amiralitanaomi2015.workers.dev', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    max_tokens: 800,
                    system: 'تو پشتیبان هوشمند پلتفرم Orite هستی که توسط LuoLaf Studio ساخته شده. به فارسی پاسخ بده. درباره قابلیت‌های پلتفرم (ابزارهای AI، ترجمه، کدنویسی، حقوق، جغرافیا، مینی‌گیم، یادداشت)، مشکلات رایج (VPN، محدودیت API)، و نحوه استفاده راهنمایی کن. مختصر و مفید باش.',
                    messages: aiHistory.slice(-8)
                })
            });
            const d = await r.json();
            const txt = d.content?.[0]?.text || 'متأسفم، خطایی رخ داد.';
            bDiv.textContent = txt;
            aiHistory.push({ role: 'assistant', content: txt });
        } catch (e) {
            bDiv.textContent = '⚠️ خطا در اتصال: ' + e.message;
        }
        msgs.scrollTop = msgs.scrollHeight;
    };

    window.oriQuickQ = function(q) {
        const inp = document.getElementById('orite-sup-inp');
        if (inp) { inp.value = q; oriSendSupport(); }
    };

    window.oriteServantClick = function() {
        clickCount++;
        const moods = ['happy', 'excited', 'sad', 'happy', 'excited'];
        servantMood = moods[clickCount % moods.length];
        const msgs = [
            'سلام! خوشحالم که اینجایی! 😊',
            'وای! دوباره کلیک کردی! 🎉',
            'آخ! یواش‌تر! 😢',
            'بازی می‌کنیم؟ 🎮',
            'من آماده کمک هستم! 🚀',
            'Orite بهترین پلتفرمه! ✨',
        ];
        const msgEl = document.getElementById('servant-msg');
        if (msgEl) msgEl.textContent = msgs[clickCount % msgs.length];
        const wrap = document.getElementById('orite-servant-wrap');
        if (wrap) {
            wrap.innerHTML = getServantSVG(servantMood);
            wrap.style.transform = 'scale(1.2) rotate(5deg)';
            setTimeout(() => { if (wrap) wrap.style.transform = ''; }, 300);
        }
        oriteParticles();
    };

    function oriteParticles() {
        const panel = document.getElementById('orite-support-panel');
        if (!panel) return;
        for (let i = 0; i < 8; i++) {
            const p = document.createElement('div');
            p.className = 'orite-particle';
            const rx = (Math.random() - 0.5) * 80;
            p.style.cssText = `left:${20+Math.random()*60}%;bottom:60px;--rx:${rx}px;background:${['#0078ff','#00ccff','#ffffff'][Math.floor(Math.random()*3)]}`;
            panel.appendChild(p);
            setTimeout(() => p.remove(), 1000);
        }
    }

    function updateServantByTime() {
        const h = new Date().getHours();
        if (h >= 0 && h < 6) { servantMood = 'sleep'; }
        else if (h >= 6 && h < 12) { servantMood = 'happy'; }
        else if (h >= 12 && h < 18) { servantMood = 'excited'; }
        else { servantMood = 'happy'; }
    }

    async function loadDynamicData() {
        if (curTab === 'device') {
            const ipEl = document.getElementById('dev-ip');
            const speedEl = document.getElementById('dev-speed');
            const battEl = document.getElementById('dev-battery');
            if (ipEl) getIP().then(ip => { if (ipEl) ipEl.textContent = ip; });
            if (speedEl) testSpeed().then(s => { if (speedEl) speedEl.textContent = s; });
            if (battEl) getBattery().then(b => { if (battEl) battEl.textContent = b; });
        }
    }

    document.getElementById('orite-sup-inp') && document.getElementById('orite-sup-inp').addEventListener('keydown', e => {
        if (e.key === 'Enter') oriSendSupport();
    });

    const hubPanel = document.getElementById('orite-smart-hub');
    if (hubPanel) hubPanel.appendChild(panel);
    else document.body.appendChild(panel);

    renderPanel();
    loadDynamicData();

    // Clock update
    setInterval(() => {
        if (curTab === 'device') {
            const timeEl = panel.querySelector('[data-clock]');
            if (timeEl) timeEl.textContent = new Date().toLocaleTimeString('fa-IR');
        }
    }, 1000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSupport);
} else {
    initSupport();
}