// ============================================================
// Top-Top Game — Orite Hub Module
// LuoLaf Studio © 2025
// ============================================================
function initGame() {
    const existing = document.getElementById('orite-toptop-panel');
    if (existing) existing.remove();
    const existingStyle = document.getElementById('orite-toptop-style');
    if (existingStyle) existingStyle.remove();

    // ==================== STYLE ====================
    const style = document.createElement('style');
    style.id = 'orite-toptop-style';
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;600;700&display=swap');
        #orite-toptop-panel{animation:ttFadeIn 0.5s cubic-bezier(0.4,0,0.2,1);font-family:'Inter',Arial,sans-serif;}
        @keyframes ttFadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes ttFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes ttPulse{0%,100%{box-shadow:0 0 0 0 rgba(255,107,53,0.5)}50%{box-shadow:0 0 0 12px rgba(255,107,53,0)}}
        @keyframes ttSpin{to{transform:rotate(360deg)}}
        @keyframes ttBlink{0%,100%{opacity:1}50%{opacity:0.3}}
        @keyframes ttSlide{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}}
        @keyframes ttGlow{0%,100%{text-shadow:0 0 8px rgba(255,200,0,0.8)}50%{text-shadow:0 0 24px rgba(255,200,0,1),0 0 48px rgba(255,150,0,0.5)}}
        @keyframes ttShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
        @keyframes ttBounce{0%,100%{transform:scaleY(1)}50%{transform:scaleY(0.85)}}
        .tt-btn{transition:all 0.2s;cursor:pointer;border:none;font-family:'Inter',Arial,sans-serif;font-weight:700;}
        .tt-btn:hover{transform:translateY(-2px);filter:brightness(1.1);}
        .tt-btn:active{transform:translateY(1px);}
        .tt-tab{transition:all 0.3s;cursor:pointer;border:none;font-family:'Inter',Arial,sans-serif;}
        .tt-tab.active{background:linear-gradient(135deg,#ff6b35,#ff9f00)!important;color:#fff!important;border-color:transparent!important;}
        .tt-inp{background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:10px;padding:10px 14px;color:#fff;font-family:'Inter',Arial,sans-serif;font-size:13px;width:100%;box-sizing:border-box;outline:none;transition:border-color 0.3s;}
        .tt-inp:focus{border-color:#ff6b35;}
        .tt-inp::placeholder{color:rgba(255,255,255,0.35);}
        .tt-card{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:14px;transition:all 0.3s;}
        .tt-card:hover{border-color:rgba(255,107,53,0.4);transform:translateY(-2px);}
        .tt-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.85);backdrop-filter:blur(8px);z-index:9999;display:none;align-items:center;justify-content:center;}
        .tt-modal-overlay.open{display:flex;}
        .tt-modal{background:linear-gradient(135deg,#1a1a2e,#16213e);border:1px solid rgba(255,107,53,0.3);border-radius:20px;padding:24px;width:92%;max-width:380px;max-height:85vh;overflow-y:auto;position:relative;}
        .tt-notif{position:fixed;top:16px;left:50%;transform:translateX(-50%) translateY(-80px);background:#1a1a2e;border:1px solid rgba(255,107,53,0.4);border-radius:12px;padding:10px 20px;font-size:13px;font-weight:600;z-index:99999;transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);color:#fff;max-width:300px;text-align:center;font-family:'Inter',Arial,sans-serif;}
        .tt-notif.show{transform:translateX(-50%) translateY(0);}
        #orite-toptop-panel::-webkit-scrollbar{width:4px;}
        #orite-toptop-panel::-webkit-scrollbar-thumb{background:rgba(255,107,53,0.3);border-radius:4px;}
        .tt-bar-track{background:rgba(255,255,255,0.1);border-radius:4px;height:6px;overflow:hidden;}
        .tt-bar-fill{height:100%;border-radius:4px;transition:width 0.8s ease;}
        .char-card-tt{border:2px solid transparent;transition:all 0.3s;cursor:pointer;border-radius:14px;padding:12px;background:rgba(255,255,255,0.04);text-align:center;}
        .char-card-tt:hover{border-color:rgba(255,107,53,0.5);transform:translateY(-2px);}
        .char-card-tt.selected-tt{border-color:#ff6b35;background:rgba(255,107,53,0.1);box-shadow:0 0 16px rgba(255,107,53,0.25);}
        .char-card-tt.locked-tt{opacity:0.55;}
        .outfit-card-tt{border:2px solid transparent;border-radius:12px;padding:10px;background:rgba(255,255,255,0.04);text-align:center;cursor:pointer;transition:all 0.3s;}
        .outfit-card-tt:hover{border-color:rgba(255,200,0,0.4);}
        .outfit-card-tt.selected-tt{border-color:#ffd700;background:rgba(255,215,0,0.08);}
        .game-canvas-wrap{position:relative;width:100%;border-radius:14px;overflow:hidden;background:#000;border:2px solid rgba(255,107,53,0.3);}
        .level-badge{display:inline-block;padding:2px 8px;border-radius:6px;font-size:10px;font-weight:700;}
        .lb-gold{background:rgba(255,215,0,0.2);color:#ffd700;}
        .lb-silver{background:rgba(192,192,192,0.2);color:#c0c0c0;}
        .lb-bronze{background:rgba(205,127,50,0.2);color:#cd7f32;}
        .lb-normal{background:rgba(255,255,255,0.1);color:#aaa;}
        .lb-premium{background:rgba(155,89,182,0.2);color:#9b59b6;}
        .lb-special{background:rgba(52,152,219,0.2);color:#3498db;}
        .lb-plus{background:rgba(46,204,113,0.2);color:#2ecc71;}
    `;
    document.head.appendChild(style);

    // ==================== DATA ====================
    const CHARS = [
        {id:'eagle',name:'Eagle',emoji:'🦅',desc:'Swift master of the skies. Born to fly!',spd:90,eng:70,pwr:80,price:0,cur:'free'},
        {id:'dragon',name:'Dragon',emoji:'🐉',desc:'Legendary fire dragon with immense power.',spd:75,eng:95,pwr:95,price:150,cur:'gems'},
        {id:'butterfly',name:'Butterfly',emoji:'🦋',desc:'Graceful dancer with magical dodge.',spd:85,eng:60,pwr:50,price:500,cur:'coins'},
        {id:'owl',name:'Owl',emoji:'🦉',desc:'Wise owl with night vision precision.',spd:70,eng:80,pwr:65,price:800,cur:'coins'},
        {id:'phoenix',name:'Phoenix',emoji:'🔥',desc:'Reborn from flames. Ultimate power.',spd:95,eng:100,pwr:100,price:300,cur:'gems'},
        {id:'unicorn',name:'Unicorn',emoji:'🦄',desc:'Magical unicorn leaving sparkle trails.',spd:80,eng:85,pwr:70,price:1200,cur:'coins'},
        {id:'bat',name:'Bat',emoji:'🦇',desc:'Stealthy bat with echolocation power.',spd:88,eng:65,pwr:60,price:80,cur:'gems'},
        {id:'bee',name:'Bee',emoji:'🐝',desc:'Hardworking bee collecting all bonuses.',spd:72,eng:75,pwr:55,price:400,cur:'coins'},
        {id:'parrot',name:'Parrot',emoji:'🦜',desc:'Colorful parrot with amazing aerial tricks.',spd:82,eng:70,pwr:60,price:600,cur:'coins'},
        {id:'hawk',name:'Hawk',emoji:'🐦',desc:'Sharp-eyed hawk striking with precision.',spd:92,eng:72,pwr:78,price:100,cur:'gems'},
        {id:'alien',name:'Alien',emoji:'👾',desc:'Mysterious craft from another galaxy.',spd:98,eng:90,pwr:85,price:500,cur:'gems'},
        {id:'rocket',name:'Rocket',emoji:'🚀',desc:'Blazing rocket breaking sound barriers.',spd:100,eng:80,pwr:75,price:800,cur:'gems'},
        {id:'fairy',name:'Fairy',emoji:'🧚',desc:'Enchanted fairy with infinite magic energy.',spd:78,eng:100,pwr:65,price:2000,cur:'coins'},
    ];

    const OUTFIT_LEVELS = ['Normal','Bronze','Silver','Gold','Premium','Special','Plus'];
    const OUTFIT_THEMES = ['Space','Ocean','Fire','Ice','Thunder','Shadow','Rainbow','Galaxy','Ninja','Storm'];
    const LEVEL_CLASSES = {Normal:'lb-normal',Bronze:'lb-bronze',Silver:'lb-silver',Gold:'lb-gold',Premium:'lb-premium',Special:'lb-special',Plus:'lb-plus'};

    function genOutfits(){
        const out=[];let id=1;
        OUTFIT_LEVELS.forEach((lvl,li)=>{
            OUTFIT_THEMES.forEach((theme,ti)=>{
                const charId=CHARS[Math.floor(Math.random()*CHARS.length)].id;
                out.push({
                    id:'o'+id,name:theme+' '+lvl,level:lvl,
                    emoji:['🌌','🌊','🔥','❄️','⚡','🌑','🌈','💫','🥷','🌪️'][ti],
                    charId,desc:theme+' '+lvl+' outfit. Boosts flight!',
                    pC:Math.max(50,(li+1)*250+ti*40),pG:Math.max(5,Math.floor(((li+1)*250+ti*40)/20)),
                    bSpd:li*3+ti,bEng:li*4+ti*2,bPwr:li*2+ti
                });
                id++;
            });
        });
        out[0].free=true;out[0].pC=0;out[0].pG=0;
        out[9].free=true;out[9].pC=0;out[9].pG=0;
        return out.slice(0,78);
    }
    const OUTFITS = genOutfits();

    // ==================== STATE ====================
    const DEF_STATE = {
        user:{name:'Guest',email:'',pass:'',logged:false},
        cur:{money:100,coins:5000,gems:50,tickets:10,gtickets:2},
        selChar:'eagle',selOutfit:'o1',
        ownChars:['eagle'],ownOutfits:['o1','o10'],
        best:0,games:0,achievements:[],
        listings:[],dailySells:0,dailySellDate:'',
        invCode:'',lastDaily:'',
        weekStart:'',lb:[],users:[]
    };

    function loadState(){
        try{const s=localStorage.getItem('tt_state2');return s?Object.assign({},DEF_STATE,JSON.parse(s)):Object.assign({},DEF_STATE);}
        catch{return Object.assign({},DEF_STATE);}
    }
    function saveState(){localStorage.setItem('tt_state2',JSON.stringify(gs));}

    let gs = loadState();
    if(!gs.invCode)gs.invCode='TT'+Math.random().toString(36).substr(2,6).toUpperCase();
    if(!gs.users)gs.users=[];
    saveState();

    // ==================== NOTIFICATION ====================
    let ntEl=document.getElementById('tt-notif-el');
    if(!ntEl){ntEl=document.createElement('div');ntEl.id='tt-notif-el';ntEl.className='tt-notif';document.body.appendChild(ntEl);}
    let ntTimer=null;
    function notify(msg,type='info'){
        ntEl.textContent=msg;
        ntEl.style.borderColor=type==='success'?'rgba(46,204,113,0.5)':type==='error'?'rgba(231,76,60,0.5)':'rgba(255,107,53,0.4)';
        ntEl.classList.add('show');
        if(ntTimer)clearTimeout(ntTimer);
        ntTimer=setTimeout(()=>ntEl.classList.remove('show'),3000);
    }

    // ==================== PANEL ====================
    const panel = document.createElement('div');
    panel.id='orite-toptop-panel';
    panel.style.cssText='background:linear-gradient(135deg,#0a0a1a,#16213e,#0a1a2e);border:1px solid rgba(255,107,53,0.25);border-radius:20px;padding:0;margin-top:14px;color:#f0f0ff;overflow:hidden;position:relative;max-height:700px;overflow-y:auto;';

    function fmt(n){if(n>=1000000)return(n/1000000).toFixed(1)+'M';if(n>=1000)return(n/1000).toFixed(1)+'K';return String(n);}
    function curBar(){return `<div style="display:flex;gap:6px;flex-wrap:wrap;padding:10px 14px 0;"><span style="background:rgba(255,200,0,0.12);border:1px solid rgba(255,200,0,0.25);border-radius:20px;padding:4px 10px;font-size:11px;font-weight:700;">💰 ${fmt(gs.cur.money)}</span><span style="background:rgba(255,200,0,0.12);border:1px solid rgba(255,200,0,0.25);border-radius:20px;padding:4px 10px;font-size:11px;font-weight:700;">🪙 ${fmt(gs.cur.coins)}</span><span style="background:rgba(52,152,219,0.12);border:1px solid rgba(52,152,219,0.25);border-radius:20px;padding:4px 10px;font-size:11px;font-weight:700;">💎 ${fmt(gs.cur.gems)}</span><span style="background:rgba(155,89,182,0.12);border:1px solid rgba(155,89,182,0.25);border-radius:20px;padding:4px 10px;font-size:11px;font-weight:700;">🎫 ${fmt(gs.cur.tickets)}</span><span style="background:rgba(241,196,15,0.12);border:1px solid rgba(241,196,15,0.25);border-radius:20px;padding:4px 10px;font-size:11px;font-weight:700;">⭐ ${fmt(gs.cur.gtickets)}</span></div>`;
    }

    let curView='home';
    function render(){
        panel.innerHTML='';
        if(curView==='home')renderHome();
        else if(curView==='play')renderPlay();
        else if(curView==='chars')renderChars();
        else if(curView==='shop')renderShop();
        else if(curView==='lb')renderLB();
        else if(curView==='auth')renderAuth();
        else if(curView==='about')renderAbout();
        else if(curView==='profile')renderProfile();
    }

    // ==================== HOME ====================
    function renderHome(){
        const char=CHARS.find(c=>c.id===gs.selChar)||CHARS[0];
        panel.innerHTML=`
        <div style="text-align:center;padding:28px 20px 20px;">
            <div style="font-family:'Orbitron',sans-serif;font-size:40px;font-weight:900;background:linear-gradient(135deg,#ff6b35,#ffd700,#ff6b35);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:ttGlow 2s ease-in-out infinite;letter-spacing:2px;">TOP-TOP</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:4px;margin-top:4px;">INFINITE FLIGHT ADVENTURE</div>
            <div style="font-size:72px;margin:16px 0;animation:ttFloat 2.5s ease-in-out infinite;filter:drop-shadow(0 8px 16px rgba(255,107,53,0.4));">${char.emoji}</div>
            <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:20px;">Playing as <strong style="color:#ff6b35">${char.name}</strong></div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:280px;margin:0 auto;">
                <button class="tt-btn" onclick="ttView('play')" style="padding:14px;background:linear-gradient(135deg,#ff6b35,#ff9f00);color:#fff;border-radius:14px;font-size:15px;grid-column:1/-1;box-shadow:0 6px 20px rgba(255,107,53,0.4);">▶ PLAY NOW</button>
                <button class="tt-btn" onclick="ttView('chars')" style="padding:11px;background:rgba(255,255,255,0.08);color:#fff;border-radius:12px;font-size:13px;border:1px solid rgba(255,255,255,0.12);">🐾 Characters</button>
                <button class="tt-btn" onclick="ttView('shop')" style="padding:11px;background:rgba(255,255,255,0.08);color:#fff;border-radius:12px;font-size:13px;border:1px solid rgba(255,255,255,0.12);">🛍️ Shop</button>
                <button class="tt-btn" onclick="ttView('lb')" style="padding:11px;background:rgba(255,255,255,0.08);color:#fff;border-radius:12px;font-size:13px;border:1px solid rgba(255,255,255,0.12);">🏆 Rankings</button>
                <button class="tt-btn" onclick="ttView('profile')" style="padding:11px;background:rgba(255,255,255,0.08);color:#fff;border-radius:12px;font-size:13px;border:1px solid rgba(255,255,255,0.12);">👤 Profile</button>
                <button class="tt-btn" onclick="ttView('auth')" style="padding:11px;background:rgba(255,255,255,0.08);color:#fff;border-radius:12px;font-size:13px;border:1px solid rgba(255,255,255,0.12);">🔑 Login</button>
                <button class="tt-btn" onclick="ttView('about')" style="padding:11px;background:rgba(255,255,255,0.08);color:#fff;border-radius:12px;font-size:13px;border:1px solid rgba(255,255,255,0.12);">ℹ️ About</button>
            </div>
            <div style="display:flex;gap:20px;justify-content:center;margin-top:20px;">
                <div style="text-align:center;"><div style="font-size:18px;font-weight:800;color:#ffd700;">${fmt(gs.best)}</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">BEST</div></div>
                <div style="text-align:center;"><div style="font-size:18px;font-weight:800;color:#ff6b35;">${fmt(gs.cur.coins)}</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">COINS</div></div>
                <div style="text-align:center;"><div style="font-size:18px;font-weight:800;color:#3498db;">${fmt(gs.cur.gems)}</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">GEMS</div></div>
            </div>
        </div>
        <div style="padding:0 14px 14px;text-align:center;font-size:11px;color:rgba(255,255,255,0.3);">© 2025 LuoLaf Studio — Top-Top v2.0</div>`;
        checkDaily();
    }

    function checkDaily(){
        const today=new Date().toISOString().slice(0,10);
        if(gs.lastDaily!==today){gs.lastDaily=today;gs.cur.coins+=100;gs.cur.tickets++;saveState();setTimeout(()=>notify('🎁 Daily reward! +100 coins, +1 ticket!','success'),800);}
    }

    // ==================== PLAY ====================
    function renderPlay(){
        panel.innerHTML=`
        <div style="padding:14px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
                <button class="tt-btn" onclick="ttView('home')" style="padding:7px 14px;background:rgba(255,255,255,0.08);color:#fff;border-radius:10px;font-size:12px;border:1px solid rgba(255,255,255,0.1);">← Back</button>
                <div style="font-family:'Orbitron',sans-serif;font-size:15px;font-weight:700;color:#ff6b35;">▶ TOP-TOP</div>
            </div>
            <div class="game-canvas-wrap" id="tt-game-wrap">
                <canvas id="tt-canvas" style="display:block;width:100%;"></canvas>
                <div id="tt-ui-score" style="position:absolute;top:10px;left:12px;font-family:'Orbitron',sans-serif;font-size:20px;font-weight:900;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,0.8);pointer-events:none;"></div>
                <div id="tt-ui-lives" style="position:absolute;top:10px;right:12px;font-size:16px;pointer-events:none;"></div>
                <div id="tt-start-screen" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);gap:12px;">
                    <div style="font-size:52px;animation:ttFloat 2s ease-in-out infinite;">${CHARS.find(c=>c.id===gs.selChar)?.emoji||'🦅'}</div>
                    <div style="font-family:'Orbitron',sans-serif;font-size:22px;font-weight:900;color:#ff6b35;">TAP TO FLY!</div>
                    <div style="font-size:12px;color:rgba(255,255,255,0.6);">Dodge obstacles • Collect coins • Survive!</div>
                    <button class="tt-btn" id="tt-start-btn" style="padding:14px 32px;background:linear-gradient(135deg,#ff6b35,#ffd700);color:#fff;border-radius:14px;font-size:16px;font-weight:900;box-shadow:0 6px 20px rgba(255,107,53,0.5);">🚀 START</button>
                </div>
                <div id="tt-gameover-screen" style="position:absolute;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);gap:10px;text-align:center;padding:20px;">
                    <div style="font-size:40px;">💥</div>
                    <div style="font-family:'Orbitron',sans-serif;font-size:22px;font-weight:900;color:#ff4444;">GAME OVER</div>
                    <div id="tt-go-score" style="font-size:16px;color:#ffd700;font-weight:700;"></div>
                    <div id="tt-go-rewards" style="font-size:13px;color:rgba(255,255,255,0.6);"></div>
                    <button class="tt-btn" id="tt-restart-btn" style="padding:12px 28px;background:linear-gradient(135deg,#ff6b35,#ffd700);color:#fff;border-radius:12px;font-size:15px;font-weight:800;margin-top:6px;">🔄 Play Again</button>
                    <button class="tt-btn" onclick="ttView('home')" style="padding:10px 24px;background:rgba(255,255,255,0.1);color:#fff;border-radius:12px;font-size:13px;">🏠 Home</button>
                </div>
                <div id="tt-pause-screen" style="position:absolute;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.8);gap:12px;">
                    <div style="font-size:28px;font-weight:800;">⏸ PAUSED</div>
                    <button class="tt-btn" id="tt-resume-btn" style="padding:12px 28px;background:linear-gradient(135deg,#ff6b35,#ffd700);color:#fff;border-radius:12px;font-size:15px;font-weight:800;">▶ Resume</button>
                    <button class="tt-btn" onclick="ttView('home')" style="padding:10px 24px;background:rgba(255,255,255,0.1);color:#fff;border-radius:12px;font-size:13px;">🏠 Quit</button>
                </div>
            </div>
            <div style="display:flex;gap:8px;margin-top:10px;justify-content:center;">
                <button class="tt-btn" id="tt-pause-btn" style="padding:8px 20px;background:rgba(255,255,255,0.08);color:#fff;border-radius:10px;font-size:13px;border:1px solid rgba(255,255,255,0.1);">⏸ Pause</button>
            </div>
        </div>`;
        initGameEngine();
    }

    // ==================== 2D GAME ENGINE ====================
    function initGameEngine(){
        const wrap=document.getElementById('tt-game-wrap');
        const canvas=document.getElementById('tt-canvas');
        const W=Math.min(wrap.offsetWidth||360,520);
        const H=320;
        canvas.width=W;canvas.height=H;
        const ctx=canvas.getContext('2d');
        const char=CHARS.find(c=>c.id===gs.selChar)||CHARS[0];
        const outfit=OUTFITS.find(o=>o.id===gs.selOutfit);

        let gRunning=false,gPaused=false;
        let score=0,lives=3,frame=0,gSpeed=2.5,animId=null;
        let player={x:70,y:H/2,vy:0,w:38,h:38,emoji:char.emoji};
        let targetY=H/2,isDragging=false;
        let obstacles=[],coins=[],gems=[],powerups=[],particles=[];
        let bgX=0,bg2X=0,groundX=0;
        let shieldOn=false,magnetOn=false,shieldTimer=0,magnetTimer=0;
        const GRAVITY=0.32,DRAG=0.88;

        // BG themes
        const BG_THEMES=[
            {sky1:'#0d0221',sky2:'#1a0533',ground:'#2d1b69',cloud:'rgba(155,89,182,0.15)',name:'Galaxy'},
            {sky1:'#0a1628',sky2:'#1a2a4a',ground:'#0d3b6e',cloud:'rgba(52,152,219,0.2)',name:'Ocean Sky'},
            {sky1:'#1a0505',sky2:'#2d0a0a',ground:'#5c1a1a',cloud:'rgba(231,76,60,0.15)',name:'Volcano'},
            {sky1:'#0a1a0a',sky2:'#0d2d0d',ground:'#1a5c1a',cloud:'rgba(46,204,113,0.15)',name:'Forest'},
            {sky1:'#05050f',sky2:'#0a0a1f',ground:'#1a1a4a',cloud:'rgba(241,196,15,0.1)',name:'Night City'},
        ];
        let bgIdx=0,bgTimer=0;

        // Ground tiles/buildings
        const GROUND_TILES=['🌲','🏔️','🌴','🏠','⛰️','🗼'];
        let groundTiles=[];
        for(let i=0;i<20;i++)groundTiles.push({x:i*60,emoji:GROUND_TILES[Math.floor(Math.random()*GROUND_TILES.length)],y:H-28});

        // Obstacle types
        const OBS_TYPES=[
            {type:'pipe',emoji:'🏔️',w:28,h:120,col:'#2ecc71'},
            {type:'cloud',emoji:'⛅',w:70,h:36,col:'#95a5a6'},
            {type:'bird',emoji:'🦅',w:34,h:34,col:'#e67e22'},
            {type:'rock',emoji:'🪨',w:44,h:44,col:'#7f8c8d'},
            {type:'spike',emoji:'⚡',w:36,h:56,col:'#9b59b6'},
            {type:'ufo',emoji:'🛸',w:42,h:30,col:'#1abc9c'},
            {type:'storm',emoji:'🌪️',w:36,h:80,col:'#e74c3c'},
        ];

        const POWERUP_TYPES=[
            {type:'shield',emoji:'🛡️',col:'#3498db'},
            {type:'magnet',emoji:'🧲',col:'#ffd700'},
            {type:'speed',emoji:'⚡',col:'#e74c3c'},
            {type:'life',emoji:'❤️',col:'#e91e63'},
            {type:'coins',emoji:'💰',col:'#ff9f00'},
        ];

        function spawn(){
            // Obstacle (pair top-bottom or single)
            if(frame%90===0){
                const t=OBS_TYPES[Math.floor(Math.random()*OBS_TYPES.length)];
                const gap=130+Math.random()*60;
                const topH=40+Math.random()*(H-gap-80);
                if(t.type==='pipe'||t.type==='storm'){
                    obstacles.push({...t,x:W+20,y:0,h:topH,top:true});
                    obstacles.push({...t,x:W+20,y:topH+gap,h:H-topH-gap,top:false});
                } else {
                    const yPos=20+Math.random()*(H-t.h-50);
                    obstacles.push({...t,x:W+20,y:yPos});
                }
            }
            // Coins
            if(frame%55===0){
                for(let i=0;i<3;i++)coins.push({x:W+30+i*32,y:30+Math.random()*(H-80),r:11,col:false});
            }
            // Gems
            if(frame%180===0)gems.push({x:W+20,y:30+Math.random()*(H-80),r:13,col:false});
            // Powerups
            if(frame%280===0&&Math.random()>0.4)powerups.push({...POWERUP_TYPES[Math.floor(Math.random()*POWERUP_TYPES.length)],x:W+20,y:30+Math.random()*(H-80),col:false});
        }

        function spawnParticles(x,y,color,n){
            for(let i=0;i<n;i++)particles.push({x,y,vx:(Math.random()-0.5)*6,vy:(Math.random()-0.5)*6,life:20,color,s:2+Math.random()*4});
        }

        function overlap(ax,ay,aw,ah,bx,by,bw,bh){return ax<bx+bw&&ax+aw>bx&&ay<by+bh&&ay+ah>by;}

        function updateGame(){
            frame++;bgTimer++;
            if(bgTimer>480){bgTimer=0;bgIdx=(bgIdx+1)%BG_THEMES.length;}
            if(frame%240===0)gSpeed=Math.min(gSpeed+0.15,8);
            bgX=(bgX-gSpeed*0.3+W)%W;
            bg2X=(bg2X-gSpeed*0.6+W)%W;
            groundX=(groundX-gSpeed*2+1200)%1200;

            // Player physics
            const dy=targetY-player.y;
            player.vy+=dy*0.06;
            player.vy*=DRAG;
            player.y+=player.vy;
            player.y=Math.max(8,Math.min(H-player.h-30,player.y));

            if(shieldOn){shieldTimer--;if(shieldTimer<=0)shieldOn=false;}
            if(magnetOn){magnetTimer--;if(magnetTimer<=0)magnetOn=false;}

            spawn();

            // Move everything
            obstacles.forEach(o=>{o.x-=gSpeed*1.4;});
            coins.forEach(c=>{c.x-=gSpeed;if(magnetOn){const dx=(player.x+player.w/2)-c.x;const dy=(player.y+player.h/2)-c.y;const dist=Math.sqrt(dx*dx+dy*dy);if(dist<140){c.x+=dx*0.06;c.y+=dy*0.06;}}});
            gems.forEach(g=>{g.x-=gSpeed*0.9;if(magnetOn){const dx=(player.x+player.w/2)-g.x;const dy=(player.y+player.h/2)-g.y;const dist=Math.sqrt(dx*dx+dy*dy);if(dist<140){g.x+=dx*0.06;g.y+=dy*0.06;}}});
            powerups.forEach(p=>{p.x-=gSpeed;});
            particles=particles.filter(p=>{p.life--;p.x+=p.vx;p.y+=p.vy;return p.life>0;});
            groundTiles.forEach(t=>{t.x-=gSpeed*2;if(t.x<-60){t.x=W+30;t.emoji=GROUND_TILES[Math.floor(Math.random()*GROUND_TILES.length)];}});

            // Cleanup
            obstacles=obstacles.filter(o=>o.x>-120);
            coins=coins.filter(c=>c.x>-20);
            gems=gems.filter(g=>g.x>-20);
            powerups=powerups.filter(p=>p.x>-20);

            // Collision - obstacles
            obstacles.forEach(o=>{
                if(o.hit)return;
                const oh=o.h||36;
                if(overlap(player.x+4,player.y+4,player.w-8,player.h-8,o.x,o.y,o.w||28,oh)){
                    if(shieldOn){o.hit=true;spawnParticles(o.x,o.y,'#3498db',8);return;}
                    o.hit=true;lives--;score=Math.max(0,score-30);
                    spawnParticles(player.x+player.w/2,player.y+player.h/2,'#ff4444',12);
                    updateLivesUI();
                    if(lives<=0){setTimeout(()=>gameOver(),200);gRunning=false;cancelAnimationFrame(animId);}
                }
            });

            // Collect coins
            coins.forEach(c=>{
                if(!c.col&&overlap(player.x,player.y,player.w,player.h,c.x-c.r,c.y-c.r,c.r*2,c.r*2)){
                    c.col=true;score+=10;gs.cur.coins++;
                    spawnParticles(c.x,c.y,'#ffd700',5);
                }
            });
            coins=coins.filter(c=>!c.col);

            // Collect gems
            gems.forEach(g=>{
                if(!g.col&&overlap(player.x,player.y,player.w,player.h,g.x-g.r,g.y-g.r,g.r*2,g.r*2)){
                    g.col=true;score+=80;gs.cur.gems++;
                    spawnParticles(g.x,g.y,'#3498db',8);
                }
            });
            gems=gems.filter(g=>!g.col);

            // Collect powerups
            powerups.forEach(p=>{
                if(!p.col&&overlap(player.x,player.y,player.w,player.h,p.x-14,p.y-14,28,28)){
                    p.col=true;
                    if(p.type==='shield'){shieldOn=true;shieldTimer=300;notify('🛡️ Shield Active!','success');}
                    else if(p.type==='magnet'){magnetOn=true;magnetTimer=250;notify('🧲 Magnet Active!','success');}
                    else if(p.type==='speed'){score+=150;notify('⚡ Speed Bonus +150!','info');}
                    else if(p.type==='life'){if(lives<5)lives++;updateLivesUI();notify('❤️ Extra Life!','success');}
                    else if(p.type==='coins'){score+=100;gs.cur.coins+=50;notify('💰 Coin Burst! +50 coins!','success');}
                    spawnParticles(p.x,p.y,'#2ecc71',10);
                }
            });
            powerups=powerups.filter(p=>!p.col);

            // Distance score
            if(frame%8===0)score+=1;
            document.getElementById('tt-ui-score').textContent=score.toLocaleString();
        }

        function drawBG(){
            const bg=BG_THEMES[bgIdx];
            const grad=ctx.createLinearGradient(0,0,0,H-32);
            grad.addColorStop(0,bg.sky1);grad.addColorStop(1,bg.sky2);
            ctx.fillStyle=grad;ctx.fillRect(0,0,W,H);

            // Stars
            ctx.fillStyle='rgba(255,255,255,0.5)';
            for(let i=0;i<25;i++){const sx=(i*137+bgX*0.5)%W;const sy=(i*71)%(H*0.7);ctx.beginPath();ctx.arc(sx,sy,0.8,0,Math.PI*2);ctx.fill();}

            // Clouds (parallax layer 1)
            ctx.fillStyle=bg.cloud;
            for(let i=0;i<5;i++){const cx=((i*180+bgX)%W);ctx.beginPath();ctx.ellipse(cx,30+i*18,55,18,0,0,Math.PI*2);ctx.fill();}

            // Clouds (parallax layer 2)
            ctx.fillStyle=bg.cloud.replace('0.2','0.12').replace('0.15','0.08');
            for(let i=0;i<4;i++){const cx=((i*220+bg2X*1.2)%W);ctx.beginPath();ctx.ellipse(cx,60+i*15,40,14,0,0,Math.PI*2);ctx.fill();}

            // Ground
            ctx.fillStyle=bg.ground;ctx.fillRect(0,H-32,W,32);
            ctx.fillStyle=bg.ground+'aa';ctx.fillRect(0,H-34,W,4);
            // Ground tiles
            ctx.font='18px serif';ctx.textAlign='center';
            groundTiles.forEach(t=>ctx.fillText(t.emoji,t.x,t.y));
        }

        function drawObstacles(){
            obstacles.forEach(o=>{
                if(o.hit)return;
                const oh=o.h||36;
                ctx.save();
                ctx.fillStyle=o.col+'33';ctx.strokeStyle=o.col;ctx.lineWidth=2;
                ctx.beginPath();ctx.roundRect(o.x,o.y,o.w||28,oh,6);ctx.fill();ctx.stroke();
                ctx.font='20px serif';ctx.textAlign='center';ctx.textBaseline='middle';
                ctx.fillText(o.emoji,o.x+(o.w||28)/2,o.y+oh/2);
                ctx.restore();
            });
        }

        function drawCollectibles(){
            // Coins
            coins.forEach(c=>{
                ctx.save();
                const bob=Math.sin(frame*0.15+c.x*0.05)*3;
                ctx.font='18px serif';ctx.textAlign='center';ctx.textBaseline='middle';
                ctx.fillText('🪙',c.x,c.y+bob);
                // Glow
                ctx.shadowColor='#ffd700';ctx.shadowBlur=8;
                ctx.beginPath();ctx.arc(c.x,c.y+bob,c.r,0,Math.PI*2);
                ctx.strokeStyle='rgba(255,215,0,0.4)';ctx.lineWidth=1.5;ctx.stroke();
                ctx.restore();
            });
            // Gems
            gems.forEach(g=>{
                ctx.save();
                const bob=Math.sin(frame*0.12+g.x*0.05)*4;
                ctx.font='20px serif';ctx.textAlign='center';ctx.textBaseline='middle';
                ctx.shadowColor='#3498db';ctx.shadowBlur=12;
                ctx.fillText('💎',g.x,g.y+bob);
                ctx.restore();
            });
            // Powerups
            powerups.forEach(p=>{
                ctx.save();
                const bob=Math.sin(frame*0.1)*5;
                ctx.font='22px serif';ctx.textAlign='center';ctx.textBaseline='middle';
                ctx.shadowColor=p.col;ctx.shadowBlur=16;
                ctx.fillText(p.emoji,p.x,p.y+bob);
                ctx.restore();
            });
        }

        function drawParticles(){
            particles.forEach(p=>{
                ctx.save();ctx.globalAlpha=p.life/20;
                ctx.fillStyle=p.color;
                ctx.beginPath();ctx.arc(p.x,p.y,p.s,0,Math.PI*2);ctx.fill();
                ctx.restore();
            });
        }

        function drawPlayer(){
            ctx.save();
            const bob=Math.sin(frame*0.12)*2;
            // Trail
            ctx.globalAlpha=0.25;ctx.font='28px serif';ctx.textAlign='center';ctx.textBaseline='middle';
            ctx.fillText(player.emoji,player.x+player.w/2-14,player.y+player.h/2+bob);
            ctx.globalAlpha=0.12;
            ctx.fillText(player.emoji,player.x+player.w/2-26,player.y+player.h/2+bob);
            ctx.globalAlpha=1;
            // Outfit glow
            if(outfit){ctx.shadowColor='rgba(255,215,0,0.6)';ctx.shadowBlur=14;}
            ctx.font='34px serif';
            ctx.fillText(player.emoji,player.x+player.w/2,player.y+player.h/2+bob);
            // Shield ring
            if(shieldOn){
                ctx.shadowBlur=0;
                ctx.strokeStyle='rgba(52,152,219,0.8)';ctx.lineWidth=3;
                ctx.beginPath();ctx.arc(player.x+player.w/2,player.y+player.h/2,player.w*0.85,0,Math.PI*2);ctx.stroke();
                ctx.strokeStyle='rgba(52,152,219,0.3)';ctx.lineWidth=8;ctx.stroke();
            }
            // Magnet field
            if(magnetOn){
                ctx.strokeStyle='rgba(255,215,0,0.25)';ctx.lineWidth=2;ctx.setLineDash([5,5]);
                ctx.beginPath();ctx.arc(player.x+player.w/2,player.y+player.h/2,140,0,Math.PI*2);ctx.stroke();
                ctx.setLineDash([]);
            }
            ctx.restore();
        }

        function drawHUD(){
            // Score bar
            ctx.save();
            ctx.fillStyle='rgba(0,0,0,0.35)';ctx.beginPath();ctx.roundRect(8,8,120,30,8);ctx.fill();
            ctx.font='bold 15px Orbitron,sans-serif';ctx.fillStyle='#ffd700';ctx.textAlign='left';ctx.textBaseline='middle';
            ctx.fillText(score.toLocaleString(),16,23);
            // Speed indicator
            ctx.font='10px Inter,sans-serif';ctx.fillStyle='rgba(255,255,255,0.5)';ctx.textAlign='right';
            ctx.fillText('spd '+gSpeed.toFixed(1),W-10,H-8);
            ctx.restore();
        }

        function updateLivesUI(){
            const el=document.getElementById('tt-ui-lives');
            if(el)el.textContent='❤️'.repeat(Math.max(0,lives));
        }

        function draw(){
            ctx.clearRect(0,0,W,H);
            drawBG();
            drawObstacles();
            drawCollectibles();
            drawParticles();
            drawPlayer();
        }

        function loop(){
            if(!gRunning||gPaused)return;
            updateGame();draw();drawHUD();
            animId=requestAnimationFrame(loop);
        }

        function startGame(){
            gRunning=true;gPaused=false;score=0;lives=3;frame=0;gSpeed=2.5+char.spd/120;
            bgIdx=0;bgTimer=0;
            obstacles=[];coins=[];gems=[];powerups=[];particles=[];
            shieldOn=false;magnetOn=false;
            player.y=H/2;player.vy=0;targetY=H/2;
            updateLivesUI();
            document.getElementById('tt-start-screen').style.display='none';
            document.getElementById('tt-gameover-screen').style.display='none';
            document.getElementById('tt-pause-screen').style.display='none';
            if(animId)cancelAnimationFrame(animId);
            loop();
        }

        function gameOver(){
            gs.games++;
            const coinsEarned=Math.floor(score/8)+Math.round(char.eng/20);
            const gemsEarned=Math.floor(score/200);
            gs.cur.coins+=coinsEarned;gs.cur.gems+=gemsEarned;
            if(score>gs.best){gs.best=score;}
            // Update leaderboard
            if(gs.user.logged){
                const entry={name:gs.user.name,email:gs.user.email,score:gs.best,char:char.emoji,date:new Date().toISOString().slice(0,10)};
                gs.lb=gs.lb.filter(e=>e.email!==gs.user.email);
                gs.lb.push(entry);
                gs.lb.sort((a,b)=>b.score-a.score);
                gs.lb=gs.lb.slice(0,50);
            }
            saveState();
            checkAchievements();
            document.getElementById('tt-go-score').textContent='Score: '+score.toLocaleString()+' | Best: '+gs.best.toLocaleString();
            document.getElementById('tt-go-rewards').textContent=`Earned: 🪙${coinsEarned} 💎${gemsEarned}`;
            document.getElementById('tt-gameover-screen').style.display='flex';
        }

        // Controls
        canvas.addEventListener('pointerdown',e=>{isDragging=true;targetY=e.offsetY;});
        canvas.addEventListener('pointermove',e=>{if(isDragging)targetY=e.offsetY;});
        canvas.addEventListener('pointerup',()=>{isDragging=false;});
        canvas.addEventListener('touchstart',e=>{e.preventDefault();targetY=e.touches[0].clientY-canvas.getBoundingClientRect().top;isDragging=true;},{passive:false});
        canvas.addEventListener('touchmove',e=>{e.preventDefault();if(isDragging)targetY=e.touches[0].clientY-canvas.getBoundingClientRect().top;},{passive:false});
        canvas.addEventListener('touchend',()=>{isDragging=false;});

        document.getElementById('tt-start-btn').onclick=startGame;
        document.getElementById('tt-restart-btn').onclick=startGame;
        document.getElementById('tt-resume-btn').onclick=()=>{gPaused=false;document.getElementById('tt-pause-screen').style.display='none';loop();};
        document.getElementById('tt-pause-btn').onclick=()=>{
            if(!gRunning)return;
            gPaused=!gPaused;
            document.getElementById('tt-pause-screen').style.display=gPaused?'flex':'none';
            if(!gPaused)loop();
        };

        // Draw idle state
        draw();
        updateLivesUI();
    }

    // ==================== CHARACTERS ====================
    function renderChars(){
        const cur=CHARS.find(c=>c.id===gs.selChar)||CHARS[0];
        panel.innerHTML=`
        <div style="padding:14px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
                <button class="tt-btn" onclick="ttView('home')" style="padding:7px 14px;background:rgba(255,255,255,0.08);color:#fff;border-radius:10px;font-size:12px;border:1px solid rgba(255,255,255,0.1);">← Back</button>
                <div style="font-size:15px;font-weight:700;color:#ff6b35;">🐾 Characters</div>
                <div style="margin-left:auto;font-size:11px;"><span style="color:#3498db;">💎 ${fmt(gs.cur.gems)}</span> · <span style="color:#ffd700;">🪙 ${fmt(gs.cur.coins)}</span></div>
            </div>
            <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:12px;">Selected: <strong style="color:#ff6b35">${cur.emoji} ${cur.name}</strong></div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                ${CHARS.map(c=>{
                    const owned=gs.ownChars.includes(c.id);
                    const selected=gs.selChar===c.id;
                    return `<div class="char-card-tt ${selected?'selected-tt':''} ${!owned?'locked-tt':''}" onclick="ttCharDetail('${c.id}')">
                        ${owned?`<div style="position:absolute;top:8px;right:8px;background:#2ecc71;color:#fff;border-radius:6px;padding:1px 6px;font-size:9px;font-weight:700;">✓</div>`:''}
                        <div style="font-size:42px;margin-bottom:6px;">${c.emoji}</div>
                        <div style="font-size:12px;font-weight:700;margin-bottom:4px;">${c.name}</div>
                        <div style="font-size:10px;color:rgba(255,255,255,0.4);margin-bottom:8px;">${c.desc.slice(0,36)}...</div>
                        <div style="font-size:10px;margin-bottom:4px;display:flex;justify-content:space-between;"><span>⚡${c.spd}</span><span>🔋${c.eng}</span><span>💪${c.pwr}</span></div>
                        <div class="tt-bar-track" style="margin-bottom:3px;"><div class="tt-bar-fill" style="width:${c.spd}%;background:#3498db;"></div></div>
                        <div class="tt-bar-track" style="margin-bottom:3px;"><div class="tt-bar-fill" style="width:${c.eng}%;background:#2ecc71;"></div></div>
                        <div class="tt-bar-track"><div class="tt-bar-fill" style="width:${c.pwr}%;background:#e74c3c;"></div></div>
                        ${!owned?`<div style="margin-top:8px;font-size:11px;color:#ffd700;font-weight:700;">${c.cur==='free'?'FREE':c.cur==='gems'?'💎 '+c.price:'🪙 '+c.price}</div>`:''}
                    </div>`;
                }).join('')}
            </div>
        </div>`;
        // fix absolute positioning on char cards
        panel.querySelectorAll('.char-card-tt').forEach(el=>el.style.position='relative');
    }

    // ==================== CHAR DETAIL MODAL ====================
    window.ttCharDetail=function(id){
        const c=CHARS.find(x=>x.id===id);if(!c)return;
        const owned=gs.ownChars.includes(c.id);
        const selected=gs.selChar===c.id;
        showTTModal(`
        <div style="text-align:center;">
            <div style="font-size:72px;margin-bottom:10px;animation:ttFloat 2s ease-in-out infinite;">${c.emoji}</div>
            <div style="font-size:20px;font-weight:800;margin-bottom:4px;">${c.name}</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:16px;">${c.desc}</div>
        </div>
        <div style="margin-bottom:16px;">
            ${[['⚡ Speed',c.spd,'#3498db'],['🔋 Energy',c.eng,'#2ecc71'],['💪 Power',c.pwr,'#e74c3c']].map(([l,v,col])=>`
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <div style="font-size:11px;color:rgba(255,255,255,0.6);width:68px;">${l}</div>
                <div style="flex:1;"><div class="tt-bar-track"><div class="tt-bar-fill" style="width:${v}%;background:${col};"></div></div></div>
                <div style="font-size:12px;font-weight:700;width:24px;text-align:right;">${v}</div>
            </div>`).join('')}
        </div>
        <div style="background:rgba(255,255,255,0.05);border-radius:10px;padding:12px;text-align:center;margin-bottom:14px;">
            <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:4px;">Price</div>
            <div style="font-size:22px;font-weight:800;color:#ffd700;">${c.cur==='free'?'FREE':c.cur==='gems'?'💎 '+c.price+' Gems':'🪙 '+c.price+' Coins'}</div>
        </div>
        ${owned?
            (selected?'<button class="tt-btn" style="width:100%;padding:12px;background:#2ecc71;color:#fff;border-radius:12px;">✓ Currently Selected</button>':
            `<button class="tt-btn" onclick="ttSelectChar('${c.id}')" style="width:100%;padding:12px;background:linear-gradient(135deg,#ff6b35,#ffd700);color:#fff;border-radius:12px;">✓ Select Character</button>`)
            :`<button class="tt-btn" onclick="ttBuyChar('${c.id}')" style="width:100%;padding:12px;background:linear-gradient(135deg,#ff6b35,#ffd700);color:#fff;border-radius:12px;font-size:14px;font-weight:800;">💰 Purchase</button>`}
        `);
    };

    window.ttSelectChar=function(id){gs.selChar=id;saveState();closeTTModal();renderChars();notify('✅ Character selected!','success');};
    window.ttBuyChar=function(id){
        const c=CHARS.find(x=>x.id===id);if(!c||gs.ownChars.includes(c.id))return;
        if(c.cur==='free'){gs.ownChars.push(c.id);saveState();closeTTModal();renderChars();notify('🎉 '+c.name+' unlocked!','success');return;}
        if(c.cur==='gems'&&gs.cur.gems>=c.price){gs.cur.gems-=c.price;gs.ownChars.push(c.id);saveState();closeTTModal();renderChars();notify('🎉 '+c.name+' unlocked!','success');}
        else if(c.cur==='coins'&&gs.cur.coins>=c.price){gs.cur.coins-=c.price;gs.ownChars.push(c.id);saveState();closeTTModal();renderChars();notify('🎉 '+c.name+' unlocked!','success');}
        else notify('❌ Not enough '+(c.cur==='gems'?'gems':'coins')+'!','error');
    };

    // ==================== SHOP ====================
    let shopTab='outfits';
    function renderShop(){
        panel.innerHTML=`
        <div style="padding:14px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
                <button class="tt-btn" onclick="ttView('home')" style="padding:7px 14px;background:rgba(255,255,255,0.08);color:#fff;border-radius:10px;font-size:12px;border:1px solid rgba(255,255,255,0.1);">← Back</button>
                <div style="font-size:15px;font-weight:700;color:#ff6b35;">🛍️ Shop</div>
            </div>
            ${curBar()}
            <div style="display:flex;gap:6px;padding:10px 0;overflow-x:auto;">
                <button class="tt-tab ${shopTab==='outfits'?'active':''}" onclick="ttShopTab('outfits')" style="padding:7px 14px;border-radius:20px;background:rgba(255,255,255,0.07);color:rgba(255,255,255,0.6);font-size:12px;white-space:nowrap;border:1px solid rgba(255,255,255,0.1);">👕 Outfits</button>
                <button class="tt-tab ${shopTab==='chars'?'active':''}" onclick="ttShopTab('chars')" style="padding:7px 14px;border-radius:20px;background:rgba(255,255,255,0.07);color:rgba(255,255,255,0.6);font-size:12px;white-space:nowrap;border:1px solid rgba(255,255,255,0.1);">🐾 Characters</button>
                <button class="tt-tab ${shopTab==='sell'?'active':''}" onclick="ttShopTab('sell')" style="padding:7px 14px;border-radius:20px;background:rgba(255,255,255,0.07);color:rgba(255,255,255,0.6);font-size:12px;white-space:nowrap;border:1px solid rgba(255,255,255,0.1);">💸 Sell</button>
                <button class="tt-tab ${shopTab==='exchange'?'active':''}" onclick="ttShopTab('exchange')" style="padding:7px 14px;border-radius:20px;background:rgba(255,255,255,0.07);color:rgba(255,255,255,0.6);font-size:12px;white-space:nowrap;border:1px solid rgba(255,255,255,0.1);">💱 Exchange</button>
            </div>
            <div id="tt-shop-body"></div>
        </div>`;
        renderShopBody();
    }

    function renderShopBody(){
        const body=document.getElementById('tt-shop-body');if(!body)return;
        if(shopTab==='outfits'){
            body.innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                ${OUTFITS.map(o=>{
                    const owned=gs.ownOutfits.includes(o.id);
                    const selected=gs.selOutfit===o.id;
                    return `<div class="outfit-card-tt ${selected?'selected-tt':''}" onclick="ttOutfitDetail('${o.id}')">
                        <span class="level-badge ${LEVEL_CLASSES[o.level]||'lb-normal'}">${o.level}</span>
                        <div style="font-size:32px;margin:6px 0;">${o.emoji}</div>
                        <div style="font-size:11px;font-weight:700;margin-bottom:3px;">${o.name}</div>
                        <div style="font-size:10px;color:rgba(255,255,255,0.4);margin-bottom:6px;">+${o.bSpd}⚡+${o.bEng}🔋+${o.bPwr}💪</div>
                        <div style="font-size:11px;font-weight:700;color:${owned?'#2ecc71':'#ffd700'};">${owned?'✓ Owned':o.free?'FREE':'🪙 '+o.pC}</div>
                    </div>`;
                }).join('')}
            </div>`;
        } else if(shopTab==='chars'){
            body.innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                ${CHARS.map(c=>{
                    const owned=gs.ownChars.includes(c.id);
                    return `<div class="outfit-card-tt" onclick="ttCharDetail('${c.id}')">
                        <div style="font-size:36px;margin:4px 0;">${c.emoji}</div>
                        <div style="font-size:11px;font-weight:700;margin-bottom:3px;">${c.name}</div>
                        <div style="font-size:10px;color:rgba(255,255,255,0.4);margin-bottom:6px;">⚡${c.spd} 🔋${c.eng} 💪${c.pwr}</div>
                        <div style="font-size:11px;font-weight:700;color:${owned?'#2ecc71':'#ffd700'};">${owned?'✓ Owned':c.cur==='free'?'FREE':c.cur==='gems'?'💎 '+c.price:'🪙 '+c.price}</div>
                    </div>`;
                }).join('')}
            </div>`;
        } else if(shopTab==='sell'){
            const today=new Date().toISOString().slice(0,10);
            if(gs.dailySellDate!==today){gs.dailySells=0;gs.dailySellDate=today;saveState();}
            const rem=5-gs.dailySells;
            body.innerHTML=`
            <div style="text-align:center;padding:10px;font-size:12px;color:rgba(255,255,255,0.5);background:rgba(255,255,255,0.04);border-radius:10px;margin-bottom:12px;">
                📦 Daily sell limit: <strong style="color:${rem>0?'#2ecc71':'#e74c3c'}">${rem}/5 remaining</strong>
            </div>
            <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-bottom:8px;font-weight:600;">🐾 Characters</div>
            ${gs.ownChars.filter(id=>id!==gs.selChar).map(id=>{
                const c=CHARS.find(x=>x.id===id);if(!c)return'';
                const defPrice=c.cur==='gems'?c.price*15:c.price;
                return `<div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.04);border-radius:12px;padding:10px;margin-bottom:8px;">
                    <div style="font-size:28px;">${c.emoji}</div>
                    <div style="flex:1;"><div style="font-size:12px;font-weight:700;">${c.name}</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">Character</div></div>
                    <input type="number" id="sp-c-${id}" value="${defPrice}" style="width:70px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:8px;padding:5px;color:#fff;font-size:11px;text-align:center;">
                    <button class="tt-btn" onclick="ttSellItem('char','${id}')" style="padding:7px 12px;background:#2ecc71;color:#fff;border-radius:8px;font-size:11px;">Sell</button>
                </div>`;
            }).join('')}
            <div style="font-size:12px;color:rgba(255,255,255,0.4);margin:10px 0 8px;font-weight:600;">👕 Outfits</div>
            ${gs.ownOutfits.filter(id=>id!==gs.selOutfit).slice(0,8).map(id=>{
                const o=OUTFITS.find(x=>x.id===id);if(!o)return'';
                return `<div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.04);border-radius:12px;padding:10px;margin-bottom:8px;">
                    <div style="font-size:28px;">${o.emoji}</div>
                    <div style="flex:1;"><div style="font-size:12px;font-weight:700;">${o.name}</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">${o.level}</div></div>
                    <input type="number" id="sp-o-${id}" value="${o.pC}" style="width:70px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:8px;padding:5px;color:#fff;font-size:11px;text-align:center;">
                    <button class="tt-btn" onclick="ttSellItem('outfit','${id}')" style="padding:7px 12px;background:#2ecc71;color:#fff;border-radius:8px;font-size:11px;">Sell</button>
                </div>`;
            }).join('')}
            ${gs.cur.gtickets>0?`
            <div style="font-size:12px;color:rgba(255,255,255,0.4);margin:10px 0 8px;font-weight:600;">🎫 Gold Tickets</div>
            <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.04);border-radius:12px;padding:10px;margin-bottom:8px;">
                <div style="font-size:28px;">🎫</div>
                <div style="flex:1;"><div style="font-size:12px;font-weight:700;">Gold Ticket</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">x${gs.cur.gtickets}</div></div>
                <input type="number" id="sp-gt" value="200" style="width:70px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:8px;padding:5px;color:#fff;font-size:11px;text-align:center;">
                <button class="tt-btn" onclick="ttSellItem('ticket','gt')" style="padding:7px 12px;background:#2ecc71;color:#fff;border-radius:8px;font-size:11px;">Sell</button>
            </div>`:''}
            `;
        } else if(shopTab==='exchange'){
            body.innerHTML=`
            <div style="padding:4px 0;">
                <div style="font-size:13px;font-weight:700;color:#ffd700;margin-bottom:14px;">💱 Exchange Rates</div>
                ${[
                    {from:'🪙 1,000 Coins',to:'💎 10 Gems',fn:"ttExchange('c2g')"},
                    {from:'💎 10 Gems',to:'🪙 800 Coins',fn:"ttExchange('g2c')"},
                    {from:'🎫 3 Tickets',to:'💎 5 Gems',fn:"ttExchange('t2g')"},
                    {from:'💎 20 Gems',to:'⭐ 1 Gold Ticket',fn:"ttExchange('g2gt')"},
                    {from:'💰 $10 Money',to:'🪙 5,000 Coins',fn:"ttExchange('m2c')"},
                ].map(e=>`
                <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.04);border-radius:12px;padding:12px;margin-bottom:8px;">
                    <div style="flex:1;">
                        <div style="font-size:13px;font-weight:700;">${e.from}</div>
                        <div style="font-size:10px;color:rgba(255,255,255,0.4);">→ ${e.to}</div>
                    </div>
                    <button class="tt-btn" onclick="${e.fn}" style="padding:8px 14px;background:linear-gradient(135deg,#ff6b35,#ffd700);color:#fff;border-radius:10px;font-size:12px;font-weight:700;">Exchange</button>
                </div>`).join('')}
            </div>`;
        }
    }

    window.ttShopTab=function(t){shopTab=t;renderShop();};
    window.ttExchange=function(type){
        const ex={c2g:{f:'coins',a:1000,t:'gems',b:10},g2c:{f:'gems',a:10,t:'coins',b:800},t2g:{f:'tickets',a:3,t:'gems',b:5},g2gt:{f:'gems',a:20,t:'gtickets',b:1},m2c:{f:'money',a:10,t:'coins',b:5000}};
        const e=ex[type];if(!e)return;
        if(gs.cur[e.f]<e.a){notify('❌ Not enough '+e.f+'!','error');return;}
        gs.cur[e.f]-=e.a;gs.cur[e.t]+=e.b;saveState();renderShop();
        notify('✅ Exchanged '+e.a+' '+e.f+' → '+e.b+' '+e.t+'!','success');
    };
    window.ttSellItem=function(type,id){
        const today=new Date().toISOString().slice(0,10);
        if(gs.dailySellDate!==today){gs.dailySells=0;gs.dailySellDate=today;}
        if(gs.dailySells>=5){notify('❌ Daily sell limit (5/day)!','error');return;}
        let price=0,name='';
        if(type==='char'){
            const el=document.getElementById('sp-c-'+id);price=parseInt(el?.value)||100;
            const c=CHARS.find(x=>x.id===id);name=c?.name||'Character';
            gs.ownChars=gs.ownChars.filter(x=>x!==id);gs.cur.coins+=price;
        } else if(type==='outfit'){
            const el=document.getElementById('sp-o-'+id);price=parseInt(el?.value)||50;
            const o=OUTFITS.find(x=>x.id===id);name=o?.name||'Outfit';
            gs.ownOutfits=gs.ownOutfits.filter(x=>x!==id);gs.cur.coins+=price;
        } else if(type==='ticket'){
            const el=document.getElementById('sp-gt');price=parseInt(el?.value)||200;name='Gold Ticket';
            if(gs.cur.gtickets<=0){notify('❌ No gold tickets!','error');return;}
            gs.cur.gtickets--;gs.cur.coins+=price;
        }
        gs.dailySells++;saveState();renderShop();
        notify('✅ Sold '+name+' for 🪙'+price+'!','success');
    };
    window.ttOutfitDetail=function(id){
        const o=OUTFITS.find(x=>x.id===id);if(!o)return;
        const owned=gs.ownOutfits.includes(o.id);
        const selected=gs.selOutfit===o.id;
        showTTModal(`
        <div style="text-align:center;">
            <div style="font-size:64px;margin-bottom:8px;">${o.emoji}</div>
            <span class="level-badge ${LEVEL_CLASSES[o.level]||'lb-normal'}" style="font-size:12px;">${o.level}</span>
            <div style="font-size:18px;font-weight:800;margin:8px 0 4px;">${o.name}</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:14px;">${o.desc}</div>
        </div>
        <div style="background:rgba(255,255,255,0.05);border-radius:10px;padding:12px;margin-bottom:12px;text-align:center;">
            <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-bottom:6px;">Stat Boosts</div>
            <div style="display:flex;gap:16px;justify-content:center;font-size:13px;font-weight:700;">
                <span>⚡ +${o.bSpd}</span><span>🔋 +${o.bEng}</span><span>💪 +${o.bPwr}</span>
            </div>
        </div>
        <div style="text-align:center;font-size:20px;font-weight:800;color:#ffd700;margin-bottom:14px;">
            ${o.free||o.pC===0?'FREE':'🪙 '+o.pC+' Coins'}
        </div>
        ${owned?
            (selected?'<button class="tt-btn" style="width:100%;padding:12px;background:#2ecc71;color:#fff;border-radius:12px;">✓ Equipped</button>':
            `<button class="tt-btn" onclick="ttEquipOutfit('${o.id}')" style="width:100%;padding:12px;background:linear-gradient(135deg,#ff6b35,#ffd700);color:#fff;border-radius:12px;font-weight:800;">✓ Equip</button>`)
            :`<button class="tt-btn" onclick="ttBuyOutfit('${o.id}')" style="width:100%;padding:12px;background:linear-gradient(135deg,#ff6b35,#ffd700);color:#fff;border-radius:12px;font-size:14px;font-weight:800;">💰 Purchase</button>`}
        `);
    };
    window.ttEquipOutfit=function(id){gs.selOutfit=id;saveState();closeTTModal();renderShop();notify('✅ Outfit equipped!','success');};
    window.ttBuyOutfit=function(id){
        const o=OUTFITS.find(x=>x.id===id);if(!o||gs.ownOutfits.includes(o.id))return;
        if(o.free||o.pC===0){gs.ownOutfits.push(o.id);saveState();closeTTModal();renderShop();notify('🎉 '+o.name+' unlocked!','success');return;}
        if(gs.cur.coins>=o.pC){gs.cur.coins-=o.pC;gs.ownOutfits.push(o.id);saveState();closeTTModal();renderShop();notify('🎉 '+o.name+' unlocked!','success');}
        else notify('❌ Not enough coins! Need 🪙'+o.pC,'error');
    };

    // ==================== LEADERBOARD ====================
    function renderLB(){
        const lbData=getLBData();
        const inLB=gs.user.logged;
        panel.innerHTML=`
        <div style="padding:14px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
                <button class="tt-btn" onclick="ttView('home')" style="padding:7px 14px;background:rgba(255,255,255,0.08);color:#fff;border-radius:10px;font-size:12px;border:1px solid rgba(255,255,255,0.1);">← Back</button>
                <div style="font-size:15px;font-weight:700;color:#ff6b35;">🏆 Top 50 Players</div>
                <div style="margin-left:auto;font-size:10px;color:rgba(255,255,255,0.4);">Weekly</div>
            </div>
            ${!inLB?`<div style="background:rgba(255,107,53,0.08);border:1px solid rgba(255,107,53,0.2);border-radius:14px;padding:14px;margin-bottom:14px;">
                <div style="font-size:13px;font-weight:700;color:#ff6b35;margin-bottom:10px;">🏆 Join Leaderboard</div>
                <input class="tt-inp" id="lb-name" placeholder="Your Name" style="margin-bottom:8px;">
                <input class="tt-inp" id="lb-email" placeholder="Email" type="email" style="margin-bottom:10px;">
                <button class="tt-btn" onclick="ttJoinLB()" style="width:100%;padding:11px;background:linear-gradient(135deg,#ff6b35,#ffd700);color:#fff;border-radius:11px;font-size:14px;font-weight:800;">Join Now!</button>
            </div>`:''}
            <div>
                ${lbData.map((e,i)=>{
                    const medals=['🥇','🥈','🥉'];
                    const isMe=e.email===gs.user.email;
                    return `<div style="display:flex;align-items:center;gap:10px;padding:12px;border-radius:12px;background:${isMe?'rgba(255,107,53,0.1)':'rgba(255,255,255,0.03)'};border:1px solid ${isMe?'rgba(255,107,53,0.3)':'rgba(255,255,255,0.05)'};margin-bottom:6px;">
                        <div style="font-size:${i<3?'20':'14'}px;font-weight:900;width:32px;text-align:center;color:${i===0?'#ffd700':i===1?'#c0c0c0':i===2?'#cd7f32':'rgba(255,255,255,0.4)'};">${i<3?medals[i]:'#'+(i+1)}</div>
                        <div style="font-size:24px;">${e.char||'🦅'}</div>
                        <div style="flex:1;">
                            <div style="font-size:13px;font-weight:700;">${e.name}${isMe?' (You)':''}</div>
                            <div style="font-size:10px;color:rgba(255,255,255,0.35);">${e.email}</div>
                        </div>
                        <div style="font-size:14px;font-weight:800;color:#ffd700;">${(e.score||0).toLocaleString()}</div>
                    </div>`;
                }).join('')||'<div style="text-align:center;padding:30px;color:rgba(255,255,255,0.3);">No players yet. Be first! 🚀</div>'}
            </div>
        </div>`;
    }

    function getLBData(){
        const mock=[
            {name:'SkyMaster',email:'sky@tt.com',score:98500,char:'🦅'},
            {name:'DragonLord',email:'dragon@tt.com',score:87200,char:'🐉'},
            {name:'PhoenixRise',email:'phoenix@tt.com',score:76400,char:'🔥'},
            {name:'StarFlyer',email:'star@tt.com',score:65100,char:'🌟'},
            {name:'SpeedKing',email:'speed@tt.com',score:54800,char:'🚀'},
        ];
        let all=[...mock,...gs.lb];
        if(gs.user.logged&&gs.best>0){
            all=all.filter(e=>e.email!==gs.user.email);
            all.push({name:gs.user.name,email:gs.user.email,score:gs.best,char:CHARS.find(c=>c.id===gs.selChar)?.emoji||'🦅'});
        }
        all.sort((a,b)=>b.score-a.score);
        return all.slice(0,50);
    }

    window.ttJoinLB=function(){
        const name=document.getElementById('lb-name')?.value.trim();
        const email=document.getElementById('lb-email')?.value.trim();
        if(!name||!email){notify('❌ Fill name and email','error');return;}
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){notify('❌ Invalid email','error');return;}
        gs.user.name=name;gs.user.email=email;gs.user.logged=true;
        saveState();notify('✅ Joined leaderboard!','success');renderLB();
    };

    // ==================== AUTH ====================
    let authMode='login';
    function renderAuth(){
        const isReg=authMode==='register';
        panel.innerHTML=`
        <div style="padding:14px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
                <button class="tt-btn" onclick="ttView('home')" style="padding:7px 14px;background:rgba(255,255,255,0.08);color:#fff;border-radius:10px;font-size:12px;border:1px solid rgba(255,255,255,0.1);">← Back</button>
                <div style="font-size:15px;font-weight:700;color:#ff6b35;">${isReg?'📝 Register':'🔑 Login'}</div>
            </div>
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:22px;">
                <div style="font-size:20px;font-weight:800;text-align:center;margin-bottom:6px;">${isReg?'Create Account 🎮':'Welcome Back! 👋'}</div>
                <div style="font-size:12px;color:rgba(255,255,255,0.4);text-align:center;margin-bottom:20px;">${isReg?'Join Top-Top!':'Login to save progress'}</div>
                <div id="tt-auth-err" style="color:#e74c3c;font-size:12px;text-align:center;margin-bottom:10px;display:none;"></div>
                ${isReg?`<input class="tt-inp" id="auth-name" placeholder="Your Name" style="margin-bottom:10px;">
                <input class="tt-inp" id="auth-invite" placeholder="Invite Code (optional)" style="margin-bottom:10px;">`:''}
                <input class="tt-inp" id="auth-email" placeholder="Email" type="email" style="margin-bottom:10px;">
                <input class="tt-inp" id="auth-pass" placeholder="Password (min 6 chars)" type="password" style="margin-bottom:16px;">
                <button class="tt-btn" onclick="ttAuth()" style="width:100%;padding:13px;background:linear-gradient(135deg,#ff6b35,#ffd700);color:#fff;border-radius:13px;font-size:15px;font-weight:800;margin-bottom:12px;">${isReg?'Register':'Login'}</button>
                <div style="text-align:center;font-size:12px;color:rgba(255,255,255,0.4);">${isReg?'Have an account?':'No account?'} <span onclick="ttToggleAuth()" style="color:#ff6b35;cursor:pointer;font-weight:700;">${isReg?'Login':'Register'}</span></div>
            </div>
        </div>`;
    }

    window.ttToggleAuth=function(){authMode=authMode==='login'?'register':'login';renderAuth();};
    window.ttAuth=function(){
        const email=document.getElementById('auth-email')?.value.trim();
        const pass=document.getElementById('auth-pass')?.value;
        const errEl=document.getElementById('tt-auth-err');
        const showErr=msg=>{if(errEl){errEl.textContent=msg;errEl.style.display='block';}};
        if(!email||!pass){showErr('Fill all fields');return;}
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showErr('Invalid email');return;}
        if(pass.length<6){showErr('Password min 6 chars');return;}
        if(authMode==='register'){
            const name=document.getElementById('auth-name')?.value.trim()||'Player';
            const invCode=document.getElementById('auth-invite')?.value.trim().toUpperCase();
            if(gs.users.find(u=>u.email===email)){showErr('Email already registered');return;}
            gs.users.push({name,email,pass:btoa(pass)});
            gs.user={name,email,logged:true};
            // Invite code reward
            if(invCode&&invCode!==gs.invCode){
                const allStates=JSON.parse(localStorage.getItem('tt_all_states')||'{}');
                const inviterState=Object.values(allStates).find(s=>s.invCode===invCode);
                if(inviterState){
                    inviterState.cur.coins=(inviterState.cur.coins||0)+1000;
                    inviterState.cur.money=(inviterState.cur.money||0)+10;
                    inviterState.cur.gtickets=(inviterState.cur.gtickets||0)+3;
                    inviterState.cur.gems=(inviterState.cur.gems||0)+17;
                    inviterState.cur.tickets=(inviterState.cur.tickets||0)+50;
                    ['dragon','phoenix','alien'].forEach(id=>{if(!inviterState.ownChars.includes(id))inviterState.ownChars.push(id);});
                    OUTFITS.filter(o=>o.level==='Gold').slice(0,4).forEach(o=>{if(!inviterState.ownOutfits.includes(o.id))inviterState.ownOutfits.push(o.id);});
                    localStorage.setItem('tt_all_states',JSON.stringify(allStates));
                }
                gs.cur.coins+=8000000;
                notify('🎉 Invite bonus! +8,000,000 coins!','success');
            }
            // Save this state for invite system
            const allStates=JSON.parse(localStorage.getItem('tt_all_states')||'{}');
            allStates[email]=gs;
            localStorage.setItem('tt_all_states',JSON.stringify(allStates));
            saveState();notify('🎉 Welcome '+name+'! Account created!','success');ttView('profile');
        } else {
            const user=gs.users.find(u=>u.email===email&&u.pass===btoa(pass));
            if(!user){showErr('Wrong email or password');return;}
            gs.user={name:user.name,email:user.email,logged:true};
            saveState();notify('✅ Welcome back, '+user.name+'!','success');ttView('profile');
        }
    };

    // ==================== PROFILE ====================
    function renderProfile(){
        const char=CHARS.find(c=>c.id===gs.selChar)||CHARS[0];
        const outfit=OUTFITS.find(o=>o.id===gs.selOutfit);
        panel.innerHTML=`
        <div style="padding:14px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
                <button class="tt-btn" onclick="ttView('home')" style="padding:7px 14px;background:rgba(255,255,255,0.08);color:#fff;border-radius:10px;font-size:12px;border:1px solid rgba(255,255,255,0.1);">← Back</button>
                <div style="font-size:15px;font-weight:700;color:#ff6b35;">👤 Profile</div>
            </div>
            <div style="text-align:center;padding:20px;background:linear-gradient(135deg,rgba(255,107,53,0.1),rgba(255,200,0,0.05));border-radius:16px;margin-bottom:14px;">
                <div style="font-size:60px;animation:ttFloat 2s ease-in-out infinite;">${char.emoji}</div>
                <div style="font-size:18px;font-weight:800;margin-top:8px;">${gs.user.name||'Guest'}</div>
                <div style="font-size:12px;color:rgba(255,255,255,0.4);">${gs.user.email||'Not logged in'}</div>
                ${outfit?`<div style="font-size:11px;color:#ffd700;margin-top:4px;">Outfit: ${outfit.emoji} ${outfit.name}</div>`:''}
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px;">
                <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:12px;text-align:center;"><div style="font-size:18px;font-weight:800;color:#ff6b35;">${fmt(gs.best)}</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">Best</div></div>
                <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:12px;text-align:center;"><div style="font-size:18px;font-weight:800;color:#ffd700;">${gs.games}</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">Games</div></div>
                <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:12px;text-align:center;"><div style="font-size:18px;font-weight:800;color:#2ecc71;">${gs.ownChars.length}</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">Chars</div></div>
            </div>
            ${curBar()}
            <div style="padding:12px 0;">
                <div style="font-size:13px;font-weight:700;color:#ff6b35;margin-bottom:10px;">🎁 Invite & Earn</div>
                <div style="background:rgba(255,255,255,0.05);border-radius:10px;padding:10px;font-size:11px;color:rgba(255,255,255,0.5);word-break:break-all;margin-bottom:8px;">https://github.com/luolafstoudio-netizen/game-Top-top</div>
                <div style="background:rgba(255,200,0,0.1);border:1px solid rgba(255,200,0,0.25);border-radius:12px;padding:14px;text-align:center;margin-bottom:10px;">
                    <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:4px;">Your Invite Code</div>
                    <div style="font-size:26px;font-weight:900;color:#ffd700;letter-spacing:4px;">${gs.invCode}</div>
                    <div style="font-size:10px;color:rgba(255,255,255,0.35);margin-top:4px;">Share and earn huge rewards!</div>
                </div>
                <button class="tt-btn" onclick="ttShare()" style="width:100%;padding:11px;background:linear-gradient(135deg,#3498db,#2ecc71);color:#fff;border-radius:12px;font-size:13px;font-weight:800;margin-bottom:8px;">📤 Share Invite</button>
                ${gs.user.logged?`<button class="tt-btn" onclick="ttLogout()" style="width:100%;padding:10px;background:rgba(231,76,60,0.15);color:#e74c3c;border-radius:12px;font-size:13px;border:1px solid rgba(231,76,60,0.3);">🚪 Logout</button>`:`<button class="tt-btn" onclick="ttView('auth')" style="width:100%;padding:10px;background:rgba(255,107,53,0.15);color:#ff6b35;border-radius:12px;font-size:13px;border:1px solid rgba(255,107,53,0.3);">🔑 Login / Register</button>`}
            </div>
        </div>`;
    }

    window.ttShare=function(){
        const text=`Play Top-Top! Use code: ${gs.invCode}\nhttps://github.com/luolafstoudio-netizen/game-Top-top`;
        if(navigator.share)navigator.share({title:'Top-Top',text,url:'https://github.com/luolafstoudio-netizen/game-Top-top'});
        else if(navigator.clipboard)navigator.clipboard.writeText(text).then(()=>notify('📋 Copied to clipboard!','success'));
        else notify('Code: '+gs.invCode,'info');
    };
    window.ttLogout=function(){gs.user={name:'Guest',email:'',logged:false};saveState();renderProfile();notify('✅ Logged out!','info');};

    // ==================== ABOUT ====================
    function renderAbout(){
        panel.innerHTML=`
        <div style="padding:14px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
                <button class="tt-btn" onclick="ttView('home')" style="padding:7px 14px;background:rgba(255,255,255,0.08);color:#fff;border-radius:10px;font-size:12px;border:1px solid rgba(255,255,255,0.1);">← Back</button>
                <div style="font-size:15px;font-weight:700;color:#ff6b35;">ℹ️ About Top-Top</div>
            </div>
            <div style="text-align:center;padding:24px;background:linear-gradient(135deg,rgba(255,107,53,0.08),rgba(255,200,0,0.04));border-radius:16px;margin-bottom:14px;">
                <div style="font-family:'Orbitron',sans-serif;font-size:32px;font-weight:900;background:linear-gradient(135deg,#ff6b35,#ffd700);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">TOP-TOP</div>
                <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:3px;margin-top:4px;">INFINITE FLIGHT ADVENTURE</div>
                <div style="font-size:36px;margin:10px 0;">🦅🌟🚀</div>
            </div>
            ${[
                {title:'📖 About',content:'Top-Top is a 2D infinite flight game where you control amazing animal characters soaring through endless skies! Dodge smart obstacles, collect coins and gems, unlock powerful characters and outfits!'},
                {title:'🎮 How to Play',content:'• Tap/drag to control your character\n• Dodge obstacles to stay alive\n• Collect 🪙 coins and 💎 gems\n• Use power-ups: 🛡️ Shield 🧲 Magnet ⚡ Speed ❤️ Life\n• The longer you fly, the higher your score!'},
                {title:'🏢 Team',content:'Developer: LuoLaf Studio\nGame Director: Luolaf\nVersion: 2.0.0 — 2025'},
                {title:'🔗 Links',content:''},
            ].map(s=>`
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:14px;margin-bottom:10px;">
                <div style="font-size:13px;font-weight:700;color:#ff6b35;margin-bottom:8px;">${s.title}</div>
                ${s.title==='🔗 Links'?`
                <a href="mailto:luolafstoudio@gmail.com" style="display:block;color:#3498db;font-size:12px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.05);text-decoration:none;">📧 luolafstoudio@gmail.com</a>
                <a href="https://github.com/luolafstoudio-netizen" target="_blank" style="display:block;color:#3498db;font-size:12px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.05);text-decoration:none;">🐙 GitHub Repository</a>
                <a href="https://github.com/luolafstoudio-netizen/game-Top-top" target="_blank" style="display:block;color:#3498db;font-size:12px;padding:5px 0;text-decoration:none;">⭐ Rate & Review Game</a>
                `:`<div style="font-size:12px;color:rgba(255,255,255,0.5);white-space:pre-line;line-height:1.7;">${s.content}</div>`}
            </div>`).join('')}
        </div>`;
    }

    // ==================== ACHIEVEMENTS ====================
    const ACHIEVEMENTS=[
        {id:'first',name:'First Flight!',desc:'Play your first game',icon:'🛫',r:{coins:500}},
        {id:'s1k',name:'High Flyer',desc:'Score 1,000 points',icon:'⭐',r:{coins:1000}},
        {id:'s5k',name:'Sky Champion',desc:'Score 5,000 points',icon:'🌟',r:{gems:10}},
        {id:'s10k',name:'Legend',desc:'Score 10,000+',icon:'🏆',r:{gems:50}},
        {id:'col5',name:'Collector',desc:'Own 5 characters',icon:'🐾',r:{coins:2000}},
        {id:'fit10',name:'Fashionista',desc:'Own 10 outfits',icon:'👑',r:{gems:20}},
        {id:'games10',name:'Veteran',desc:'Play 10 games',icon:'🎮',r:{coins:1500}},
    ];
    function checkAchievements(){
        if(!gs.achievements)gs.achievements=[];
        ACHIEVEMENTS.forEach(a=>{
            if(gs.achievements.includes(a.id))return;
            let e=false;
            if(a.id==='first'&&gs.games>=1)e=true;
            if(a.id==='s1k'&&gs.best>=1000)e=true;
            if(a.id==='s5k'&&gs.best>=5000)e=true;
            if(a.id==='s10k'&&gs.best>=10000)e=true;
            if(a.id==='col5'&&gs.ownChars.length>=5)e=true;
            if(a.id==='fit10'&&gs.ownOutfits.length>=10)e=true;
            if(a.id==='games10'&&gs.games>=10)e=true;
            if(e){
                gs.achievements.push(a.id);
                Object.entries(a.r).forEach(([k,v])=>{gs.cur[k]=(gs.cur[k]||0)+v;});
                saveState();
                setTimeout(()=>notify('🏅 Achievement: '+a.name+'!','success'),600);
            }
        });
    }

    // ==================== MODAL ====================
    let modalEl=document.getElementById('tt-modal-el');
    if(!modalEl){
        modalEl=document.createElement('div');
        modalEl.id='tt-modal-el';
        modalEl.className='tt-modal-overlay';
        modalEl.innerHTML='<div class="tt-modal" id="tt-modal-inner" style="position:relative"><button onclick="closeTTModal()" style="position:absolute;top:12px;right:12px;background:rgba(255,255,255,0.1);border:none;border-radius:50%;width:28px;height:28px;color:#fff;cursor:pointer;font-size:14px;">✕</button><div id="tt-modal-body"></div></div>';
        modalEl.addEventListener('click',e=>{if(e.target===modalEl)closeTTModal();});
        document.body.appendChild(modalEl);
    }
    function showTTModal(html){document.getElementById('tt-modal-body').innerHTML=html;modalEl.classList.add('open');}
    function closeTTModal(){modalEl.classList.remove('open');}
    window.closeTTModal=closeTTModal;

    // ==================== NAV ====================
    window.ttView=function(v){curView=v;render();};

    // ==================== INIT ====================
    const hubPanel=document.getElementById('orite-smart-hub');
    if(hubPanel)hubPanel.appendChild(panel);
    else document.body.appendChild(panel);
    render();
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initGame);}
else{initGame();}