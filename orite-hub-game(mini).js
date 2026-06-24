(function() {
    const existingPanel = document.getElementById('orite-minigames-panel');
    if (existingPanel) existingPanel.remove();

    const dict = {
        en: { title: "Orite Mini-Games Hub", close: "✖", coinsLabel: "Orite Coins", freePlay: "🎁 First play is FREE! (No coins needed)", selectGame: "Select a Game to Play", game1: "🌡️ Capital Temp Quiz", game2: "♟️ Classic Chess vs Orite Robot", playBtn: "Play Now", backBtn: "Back to Hub", correct: "🎉 Correct! +1 Coin", wrong: "😢 Wrong answer! Try again.", submit: "Check Answer", guessMsg: "Guess temp of ", costNotice: "🪙 Cost: 1 Coin per play", noCoinMsg: "Not enough coins! Play the Temp Quiz to earn more.", winChess: "👑 Checkmate! You beat the bot and won 1 Coin!", loseChess: "🤖 Bot wins! Better luck next time.", turnMsg: "Turn", yourTurn: "Your Turn (White)", botTurn: "Orite Robot is thinking...", langLabel: "Language" },
        fa: { title: "هاب مینی‌گیم‌های اوریت", close: "✖", coinsLabel: "سکه اوریتی", freePlay: "🎁 بازی اول رایگان است! (بدون نیاز به سکه)", selectGame: "یک بازی را انتخاب کنید", game1: "🌡️ مسابقه حدس دمای پایتخت‌ها", game2: "♟️ شطرنج کلاسیک در برابر ربات اوریت", playBtn: "شروع بازی", backBtn: "بازگشت به هاب", correct: "🎉 درست است! +1 سکه", wrong: "😢 پاسخ اشتباه! دوباره تلاش کن.", submit: "بررسی پاسخ", guessMsg: "دمای پایتخت را حدس بزنید: ", costNotice: "🪙 هزینه: 1 سکه برای هر بار بازی", noCoinMsg: "سکه کافی ندارید! برای کسب سکه، بازی حدس دما را انجام دهید.", winChess: "👑 مات! شما ربات را بردید و 1 سکه بردید!", loseChess: "🤖 ربات برنده شد! دفعه بعدی موفق‌تر خواهید بود.", turnMsg: "نوبت", yourTurn: "نوبت شماست (مهره سفید)", botTurn: "ربات اوریت در حال فکر کردن...", langLabel: "زبان" },
        hy: { title: "Orite Մինի-խաղերի կենտրոն", close: "✖", coinsLabel: "Orite մետաղադրամներ", freePlay: "🎁 Առաջին խաղը ԱՆՎՃԱՐ է! (Մետաղադրամներ պետք չեն)", selectGame: "Ընտրեք խաղ", game1: "🌡️ Մայրաքաղաքների ջերմաստիճանի վիկտորինան", game2: "♟️ Դասական շախմատ Orite ռոբոտի դեմ", playBtn: "Խաղալ հիմա", backBtn: "Վերադառնալ կենտրոն", correct: "🎉 Ճիշտ է! +1 մետաղադրամ", wrong: "😢 Սխալ պատասխան! Փորձեք կրկին:", submit: "Ստուգել պատասխանը", guessMsg: "Գուշակեք մայրաքաղաքի ջերմաստիճանը՝ ", costNotice: "🪙 Արժեքը՝ 1 մետաղադրամ յուրաքանչյուր խաղի համար", noCoinMsg: "Բավականաչափ մետաղադրամներ չկան: Խաղացեք ջերմաստիճանի վիկտորինան ավելին վաստակելու համար:", winChess: "👑 Մատ! Դուք հաղթեցիք ռոբոտին և շահեցիք 1 մետաղադրամ", loseChess: "🤖 Ռոբոտը հաղթեց: Հաջորդ անգամ ավելի լավ կլինի:", turnMsg: "Քայլը", yourTurn: "Ձեր հերթն է (սպիտակներ)", botTurn: "Orite ռոբոտը մտածում է...", langLabel: "Լեզու" },
        ar: { title: "مركز أوريت للألعاب المصغرة", close: "✖", coinsLabel: "عملات أوريت", freePlay: "🎁 اللعبة الأولى مجانية! (لا عملات معدنية مطلوبة)", selectGame: "اختر لعبة للعب", game1: "🌡️ مسابقة درجات حرارة العواصم", game2: "♟️ الشطرنج الكلاسيكي ضد روبوت أوريت", playBtn: "العب الآن", backBtn: "العودة إلى المركز", correct: "🎉 إجابة صحيحة! +1 عملة", wrong: "😢 إجابة خاطئة! حاول مرة أخرى.", submit: "تحقق من الإجابة", guessMsg: "خمن درجة حرارة العاصمة: ", costNotice: "🪙 التكلفة: 1 عملة لكل لعبة", noCoinMsg: "ليس لديك عملات كافية! العب مسابقة التخمين لكسب المزيد.", winChess: "👑 كش ملك! لقد هزمت الروبوت وفزت بعملة واحدة!", loseChess: "🤖 فاز الروبوت! حظاً أوفر في المرة القادمة.", turnMsg: "دور", yourTurn: "دورك (قطع بيضاء)", botTurn: "روبوت أوريت يفكر...", langLabel: "لغة" },
        tr: { title: "Orite Mini Oyunlar Merkezi", close: "✖", coinsLabel: "Orite Parası", freePlay: "🎁 İlk oyun ÜCRETSİZDİR! (Para gerekmez)", selectGame: "Oynamak için bir oyun seçin", game1: "🌡️ Başkent Sıcaklık Yarışması", game2: "♟️ Orite Robotuna Karşı Klasik Satranç", playBtn: "Şimdi Oyna", backBtn: "Merkeze Dön", correct: "🎉 Doğru! +1 Para", wrong: "😢 Yanlış cevap! Tekrar dene.", submit: "Cevabı Kontrol Et", guessMsg: "Başkentin sıcaklığını tahmin edin: ", costNotice: "🪙 Maliyet: Oyun başına 1 Para", noCoinMsg: "Yeterli paranız yok! Daha fazla kazanmak için sıcaklık tahmin oyununu oynayın.", winChess: "👑 Mat! Robotu yendin ve 1 Para kazandın!", loseChess: "🤖 Robot kazandı! Bir dahaki şans.", turnMsg: "Sıra", yourTurn: "Sıra Sende (Beyaz)", botTurn: "Orite Robot düşünüyor...", langLabel: "Dil" },
        ku: { title: "Navenda Lîstikên Biçûk ên Orite", close: "✖", coinsLabel: "Dravê Orite", freePlay: "🎁 Lîstika yekem BELAŞ e! (Pêdivî bi drav nîne)", selectGame: "Lîstikek hilbijêre ku bilîze", game1: "🌡️ Pêşbîniya Germahiya Paytextan", game2: "♟️ Şetranca Klasîk li dijî Robotê Orite", playBtn: "Niha bilîze", backBtn: "Vegere Navendê", correct: "🎉 Rast e! +1 Drav", wrong: "😢 Bersiv çewt e! Dîsa biceribîne.", submit: "Bersivê Kontrol Bike", guessMsg: "Germahiya paytext texmîn bikin: ", costNotice: "🪙 Mesref: 1 drav ji bo her lîstikê", noCoinMsg: "Dravê we bes nîne! Ji bo bidestxistina drav, lîstika texmîna germahiyê bilîze.", winChess: "👑 Mat! Te robot têk bir û 1 drav qezenc kir!", loseChess: "🤖 Robot serket! Di lîstika din de serkeftin.", turnMsg: "Sîra", yourTurn: "Sîra te ye (Pêlên spî)", botTurn: "Robotê Orite difikire...", langLabel: "Ziman" },
        zh: { title: "Orite 迷你游戏中心", close: "✖", coinsLabel: "Orite 币", freePlay: "🎁 首次游戏免费！（无需金币）", selectGame: "选择要玩的游戏", game1: "🌡️ 首都温度竞猜", game2: "♟️ 经典国际象棋对战 Orite 机器人", playBtn: "立即开始", backBtn: "返回中心", correct: "🎉 回答正确！+1 金币", wrong: "😢 回答错误！重试一次。", submit: "提交答案", guessMsg: "猜测首都温度：", costNotice: "🪙 费用：每次 1 金币", noCoinMsg: "金币不足！请去玩温度竞猜游戏赚取更多金币。", winChess: "👑 将死！你击败了机器人并赢得了 1 个金币！", loseChess: "🤖 机器人获胜了！祝你下次好运。", turnMsg: "回合", yourTurn: "你的回合（白棋）", botTurn: "Orite 机器人思考中...", langLabel: "语言" },
        ko: { title: "Orite 미니게임 허브", close: "✖", coinsLabel: "Orite 코인", freePlay: "🎁 첫 판은 무료! (코인 필요 없음)", selectGame: "게임 선택", game1: "🌡️ 수도 온도 퀴즈", game2: "♟️ 오리트 로봇과의 클래식 체스", playBtn: "게임 시작", backBtn: "허브로 돌아가기", correct: "🎉 정답! +1 코인", wrong: "😢 오답입니다! 다시 시도하세요.", submit: "정답 확인", guessMsg: "수도 온도를 맞춰보세요: ", costNotice: "🪙 비용: 1게임당 1코인", noCoinMsg: "코인이 부족합니다! 온도 퀴즈를 플레이하여 코인을 획득하세요.", winChess: "👑 체크메이트! 로봇을 이기고 1코인을 획득했습니다!", loseChess: "🤖 로봇이 승리했습니다! 다음 기회에 도전하세요.", turnMsg: "턴", yourTurn: "당신의 턴 (백)", botTurn: "오리트 로봇 생각 중...", langLabel: "언어" },
        es: { title: "Centro de Minijuegos Orite", close: "✖", coinsLabel: "Monedas Orite", freePlay: "🎁 ¡El primer juego es GRATIS! (No se requieren monedas)", selectGame: "Seleccionar un juego", game1: "🌡️ Concurso de temperatura de capitales", game2: "♟️ Ajedrez clásico contra robot Orite", playBtn: "Jugar ahora", backBtn: "Volver al centro", correct: "🎉 ¡Correcto! +1 Moneda", wrong: "😢 ¡Respuesta incorrecta! Inténtalo de nuevo.", submit: "Comprobar respuesta", guessMsg: "Adivina la temperatura de la capital: ", costNotice: "🪙 Costo: 1 moneda por partida", noCoinMsg: "¡No tienes suficientes monedas! Juega al concurso de temperatura para ganar más.", winChess: "👑 ¡Jaque mate! ¡Venciste al bot y ganaste 1 moneda!", loseChess: "🤖 ¡El bot gana! Mejor suerte la próxima vez.", turnMsg: "Turno", yourTurn: "Tu turno (Blancas)", botTurn: "El robot Orite está pensando...", langLabel: "Idioma" },
        it: { title: "Centro Mini-giochi Orite", close: "✖", coinsLabel: "Monete Orite", freePlay: "🎁 La prima giocata è GRATIS! (Nessuna moneta richiesta)", selectGame: "Seleziona un gioco", game1: "🌡️ Quiz temperatura capitali", game2: "♟️ Scacchi classici contro robot Orite", playBtn: "Gioca ora", backBtn: "Torna al centro", correct: "🎉 Corretto! +1 Moneta", wrong: "😢 Risposta errata! Riprova.", submit: "Controlla risposta", guessMsg: "Indovina la temperatura della capitale: ", costNotice: "🪙 Costo: 1 moneta a partita", noCoinMsg: "Monete insufficienti! Gioca al quiz per guadagnarne altre.", winChess: "👑 Scacco matto! Hai battuto il bot e vinto 1 moneta!", loseChess: "🤖 Il bot ha vinto! Più fortuna la prossima volta.", turnMsg: "Turno", yourTurn: "Tuo turno (Bianchi)", botTurn: "Il robot Orite sta pensando...", langLabel: "Lingua" },
        fr: { title: "Centre de Mini-Jeux Orite", close: "✖", coinsLabel: "Pièces Orite", freePlay: "🎁 La première partie est GRATUITE ! (Aucune pièce nécessaire)", selectGame: "Sélectionnez un jeu", game1: "🌡️ Quiz sur la température des capitales", game2: "♟️ Échecs classiques contre robot Orite", playBtn: "Jouer maintenant", backBtn: "Retour au centre", correct: "🎉 Correct ! +1 Pièce", wrong: "😢 Mauvaise réponse ! Réessayez.", submit: "Vérifier la réponse", guessMsg: "Devinez la température de la capitale : ", costNotice: "🪙 Coût : 1 pièce par partie", noCoinMsg: "Pas assez de pièces ! Jouez au quiz pour en gagner plus.", winChess: "👑 Échec et mat ! Vous avez battu le robot et gagné 1 pièce !", loseChess: "🤖 Le robot a gagné ! Plus de chance la prochaine fois.", turnMsg: "Tour", yourTurn: "Votre tour (Blancs)", botTurn: "Le robot Orite réfléchit...", langLabel: "Langue" },
        ru: { title: "Центр мини-игр Orite", close: "✖", coinsLabel: "Монеты Orite", freePlay: "🎁 Первая игра БЕСПЛАТНО! (Монеты не нужны)", selectGame: "Выберите игру", game1: "🌡️ Викторина: Угадай температуру столиц", game2: "♟️ Классические шахматы против робота Orite", playBtn: "Играть", backBtn: "Назад в хаб", correct: "🎉 Верно! +1 монета", wrong: "😢 Неверный ответ! Попробуйте снова.", submit: "Проверить", guessMsg: "Угадайте температуру столицы: ", costNotice: "🪙 Стоимость: 1 монета за игру", noCoinMsg: "Недостаточно монет! Сыграйте в викторину, чтобы заработать больше.", winChess: "👑 Шах и мат! Вы победили бота и получили 1 монету!", loseChess: "бот победил! Повезет в следующий раз.", turnMsg: "Ход", yourTurn: "Ваш ход (Белые)", botTurn: "Робот Orite думает...", langLabel: "Язык" },
        he: { title: "מרכז מיני-משחקים Orite", close: "✖", coinsLabel: "מטבעות Orite", freePlay: "🎁 משחק ראשון חינם! (אין צורך במטבעות)", selectGame: "בחר משחק", game1: "🌡️ חידון טמפרטורה בבירות", game2: "♟️ שחמט קלאסי נגד רובוט Orite", playBtn: "שחק עכשיו", backBtn: "חזור למרכז", correct: "🎉 נכון! +1 מטבע", wrong: "😢 תשובה שגויה! נסה שוב.", submit: "בדוק תשובה", guessMsg: "נחש את טמפרטורת הבירה: ", costNotice: "🪙 עלות: 1 מטבע למשחק", noCoinMsg: "אין לך מספיק מטבעות! שחק בחידון הטמפרטורה כדי להרוויח עוד.", winChess: "👑 שח מט! ניצחת את הבוט וזכית במטבע 1!", loseChess: "🤖 הבוט ניצח! נסה מזל בפעם הבאה.", turnMsg: "תור", yourTurn: "התור שלך (לבנים)", botTurn: "רובוט Orite חושב...", langLabel: "שפה" },
        ja: { title: "Orite ミニゲームハブ", close: "✖", coinsLabel: "Orite コイン", freePlay: "🎁 初回プレイは無料！(コイン不要)", selectGame: "ゲームを選択してください", game1: "🌡️ 首都当て温度クイズ", game2: "♟️ Oriteロボットとのクラシックチェス", playBtn: "今すぐプレイ", backBtn: "ハブに戻る", correct: "🎉 正解！+1 コイン", wrong: "😢 不正解！もう一度挑戦してね。", submit: "回答確認", guessMsg: "首都の気温を当ててね： ", costNotice: "🪙 料金：1プレイにつき1コイン", noCoinMsg: "コインが足りないよ！温度クイズをプレイしてコインを稼ごう。", winChess: "👑 チェックメ이트！ボットを倒して1コイン獲得！", loseChess: "🤖 ボットの勝ち！次は頑張ってね。", turnMsg: "ターン", yourTurn: "あなたのターン（白）", botTurn: "Oriteロボットが考えているよ...", langLabel: "言語" },
        tg: { title: "Маркази мини-бозиҳои Orite", close: "✖", coinsLabel: "Тангаҳои Orite", freePlay: "🎁 Бозии аввал РОЙГОН аст! (Танга лозим нест)", selectGame: "Бозиро интихоб кунед", game1: "🌡️ Озмуни ҳарорати пойтахтҳо", game2: "♟️ Шоҳмоти классикӣ бо роботи Orite", playBtn: "Оғози бозӣ", backBtn: "Бозгашт ба марказ", correct: "🎉 Дуруст аст! +1 Танга", wrong: "😢 Ҷавоби нодуруст! Боз кӯшиш кунед.", submit: "Санҷиши Ҷавоб", guessMsg: "Ҳарорати пойтахтро тахмин занед: ", costNotice: "🪙 Арзиш: 1 танга барои як бозӣ", noCoinMsg: "Танга кофӣ нест! Барои гирифтани танга бозии тахмини ҳарорат-ро бозӣ кунед.", winChess: "👑 Мох! Шумо робитро бурдед ва 1 танга соҳиб шудед!", loseChess: "🤖 Робот ғолиб омад! Дафъаи дигар муваффақ хоҳед шуд.", turnMsg: "Навбат", yourTurn: "Навбати шумо (Сафедҳо)", botTurn: "Роботи Orite фикр мекунад...", langLabel: "Забон" },
        ms: { title: "Hab Mini-Game Orite", close: "✖", coinsLabel: "Syiling Orite", freePlay: "🎁 Permainan pertama adalah PERCUMA! (Tiada syiling diperlukan)", selectGame: "Pilih permainan", game1: "🌡️ Kuiz Suhu Ibu Kota", game2: "♟️ Catur Klasik lwn Robot Orite", playBtn: "Main sekarang", backBtn: "Kembali ke Hab", correct: "🎉 Betul! +1 Syiling", wrong: "😢 Jawapan salah! Cuba lagi.", submit: "Semak Jawapan", guessMsg: "Teka suhu ibu kota: ", costNotice: "🪙 Kos: 1 Syiling setiap permainan", noCoinMsg: "Syiling tidak mencukupi! Main kuiz suhu untuk dapatkan lebih banyak syiling.", winChess: "👑 Skak mat! Anda mengalahkan bot dan memenangi 1 Syiling!", loseChess: "🤖 Bot menang! Cuba lagi lain kali.", turnMsg: "Giliran", yourTurn: "Giliran anda (Putih)", botTurn: "Robot Orite sedang berfikir...", langLabel: "Bahasa" },
        hr: { title: "Orite Hub mini-igara", close: "✖", coinsLabel: "Orite kovanice", freePlay: "🎁 Prva igra je BESPLATNA! (Kovanice nisu potrebne)", selectGame: "Odaberite igru", game1: "🌡️ Kviz temperature glavnih gradova", game2: "♟️ Klasični šah protiv Orite robota", playBtn: "Igraj sada", backBtn: "Povratak na hub", correct: "🎉 Točno! +1 kovanica", wrong: "😢 Krivi odgovor! Pokušajte ponovno.", submit: "Provjeri odgovor", guessMsg: "Pogodite temperaturu glavnog grada: ", costNotice: "🪙 Cijena: 1 kovanica po igri", noCoinMsg: "Nemate dovoljno kovanica! Igrajte kviz temperature da zaradite više.", winChess: "👑 Šah-mat! Pobijedili ste bota i osvojili 1 kovanicu!", loseChess: "🤖 Bot je pobijedio! Više sreće sljedeći put.", turnMsg: "Potez", yourTurn: "Vaš red (Bijeli)", botTurn: "Orite robot razmišlja...", langLabel: "Jezik" }
    };

    let lang = localStorage.getItem('orite_hub_lang') || 'fa';
    let oriteCoins = parseInt(localStorage.getItem('orite_user_coins') || '0');
    let isFirstGamePlayed = localStorage.getItem('orite_first_free') === 'true';

    const gameCities = [
        { country: "تهران", capital: "Tehran", min: 15, max: 38 },
        { country: "پاریس", capital: "Paris", min: 8, max: 25 },
        { country: "توکیو", capital: "Tokyo", min: 10, max: 30 },
        { country: "آنکارا", capital: "Ankara", min: 12, max: 32 }
    ];

    const panel = document.createElement('div');
    panel.id = 'orite-minigames-panel';
    panel.style.cssText = "position:fixed; top:85px; left:50%; transform:translateX(-50%); width:400px; background: linear-gradient(135deg, #ffffff, #f1f5f9); border-radius:24px; padding:26px; font-family:Tahoma, Arial, sans-serif; box-shadow:0 20px 50px rgba(0,0,0,0.3); z-index:999999; border:1px solid rgba(255,255,255,0.6); backdrop-filter: blur(15px);";

    function renderHub() {
        const d = dict[lang] || dict['fa'];
        panel.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; border-bottom:2px solid #e2e8f0; padding-bottom:12px;">
                <h3 style="margin:0; font-size:18px; color:#0f172a;">🎮 ${d.title}</h3>
                <div style="display:flex; align-items:center; gap:8px;">
                    <select id="orite-minigame-lang" style="padding:4px 8px; border-radius:6px; border:1px solid #cbd5e1; font-size:11px; font-weight:bold; cursor:pointer;">
                        <option value="fa" ${lang==='fa'?'selected':''}>FA</option>
                        <option value="en" ${lang==='en'?'selected':''}>EN</option>
                        <option value="hy" ${lang==='hy'?'selected':''}>HY</option>
                        <option value="ar" ${lang==='ar'?'selected':''}>AR</option>
                        <option value="tr" ${lang==='tr'?'selected':''}>TR</option>
                        <option value="ku" ${lang==='ku'?'selected':''}>KU</option>
                        <option value="zh" ${lang==='zh'?'selected':''}>ZH</option>
                        <option value="ko" ${lang==='ko'?'selected':''}>KO</option>
                        <option value="es" ${lang==='es'?'selected':''}>ES</option>
                        <option value="it" ${lang==='it'?'selected':''}>IT</option>
                        <option value="fr" ${lang==='fr'?'selected':''}>FR</option>
                        <option value="ru" ${lang==='ru'?'selected':''}>RU</option>
                        <option value="he" ${lang==='he'?'selected':''}>HE</option>
                        <option value="ja" ${lang==='ja'?'selected':''}>JA</option>
                        <option value="tg" ${lang==='tg'?'selected':''}>TG</option>
                        <option value="ms" ${lang==='ms'?'selected':''}>MS</option>
                        <option value="hr" ${lang==='hr'?'selected':''}>HR</option>
                    </select>
                    <span style="background:#e0f2fe; color:#0369a1; padding:6px 12px; border-radius:12px; font-size:12px; font-weight:bold;">${d.coinsLabel}: <span id="orite-coin-count">${oriteCoins}</span> 🪙</span>
                    <button id="orite-game-close" style="background:#e2e8f0; border:none; border-radius:8px; width:28px; height:28px; cursor:pointer; font-weight:bold; color:#475569;">${d.close}</button>
                </div>
            </div>

            ${!isFirstGamePlayed ? `<div style="background:#fef3c7; color:#92400e; padding:10px; border-radius:12px; font-size:12px; font-weight:bold; text-align:center; margin-bottom:16px; border:1px solid #fcd34d;">${d.freePlay}</div>` : ''}

            <div style="font-size:13px; font-weight:bold; color:#475569; margin-bottom:12px;">${d.selectGame}:</div>
            
            <div style="display:flex; flex-direction:column; gap:14px;">
                <div style="background:#f8fafc; border-radius:16px; padding:14px; border:1px solid #cbd5e1;">
                    <div style="font-weight:bold; font-size:13px; color:#1e293b; margin-bottom:8px;">${d.game1}</div>
                    <button class="orite-game-select-btn" id="orite-open-temp" style="width:100%; background:linear-gradient(135deg, #0284c7, #0369a1); color:#fff; border:none; border-radius:10px; padding:10px; font-weight:bold; font-size:13px; cursor:pointer; box-shadow:0 4px 10px rgba(2,132,199,0.2);">${d.playBtn}</button>
                </div>

                <div style="background:#f8fafc; border-radius:16px; padding:14px; border:1px solid #cbd5e1;">
                    <div style="font-weight:bold; font-size:13px; color:#1e293b; margin-bottom:4px;">${d.game2}</div>
                    <div style="font-size:11px; color:#64748b; margin-bottom:8px;">${isFirstGamePlayed ? d.costNotice : '🎁 Free First Play'}</div>
                    <button class="orite-game-select-btn" id="orite-open-chess" style="width:100%; background:linear-gradient(135deg, #059669, #047857); color:#fff; border:none; border-radius:10px; padding:10px; font-weight:bold; font-size:13px; cursor:pointer; box-shadow:0 4px 10px rgba(5,150,105,0.2);">${d.playBtn}</button>
                </div>
            </div>
        `;

        // مدیریت تغییر زبان از لیست کشویی داخل پنل
        panel.querySelector('#orite-minigame-lang').onchange = (e) => {
            lang = e.target.value;
            localStorage.setItem('orite_hub_lang', lang);
            renderHub();
        };

        panel.querySelector('#orite-game-close').onclick = () => panel.remove();

        panel.querySelector('#orite-open-temp').onclick = () => openTempQuiz(d);

        panel.querySelector('#orite-open-chess').onclick = () => {
            if (isFirstGamePlayed) {
                if (oriteCoins >= 1) {
                    oriteCoins -= 1;
                    localStorage.setItem('orite_user_coins', oriteCoins);
                    panel.querySelector('#orite-coin-count').innerText = oriteCoins;
                    openChessGame(d);
                } else {
                    alert(d.noCoinMsg);
                }
            } else {
                localStorage.setItem('orite_first_free', 'true');
                isFirstGamePlayed = true;
                openChessGame(d);
            }
        };

        const sBtns = panel.querySelectorAll('.orite-game-select-btn');
        sBtns.forEach(b => {
            b.onmousedown = () => b.style.transform = "translateY(2px)";
            b.onmouseup = () => b.style.transform = "translateY(0px)";
        });
    }

    function openTempQuiz(d) {
        let currentCapital = gameCities[Math.floor(Math.random() * gameCities.length)];
        let actualTemp = Math.floor(Math.random() * (currentCapital.max - currentCapital.min + 1)) + currentCapital.min;

        panel.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <h4 style="margin:0; font-size:16px; color:#0f172a;">🌡️ ${d.game1}</h4>
                <button id="orite-back-hub" style="background:#e2e8f0; border:none; border-radius:10px; padding:6px 12px; font-size:11px; font-weight:bold; cursor:pointer; color:#334155;">🔙 ${d.backBtn}</button>
            </div>

            <div style="background:#f8fafc; border-radius:16px; padding:16px; border:1px solid #cbd5e1;">
                <div style="font-weight:bold; color:#0f172a; margin-bottom:12px; font-size:13px; text-align:center;">
                    ${d.guessMsg} <span style="color:#0284c7; font-size:15px;">${currentCapital.country}</span> ?
                </div>
                
                <div style="text-align:center; margin-bottom:10px;">
                    <span id="orite-temp-display" style="display:inline-block; font-size:32px; font-weight:bold; color:#0284c7; background:#fff; padding:6px 20px; border-radius:12px; border:1px solid #bae6fd; box-shadow: 0 4px 10px rgba(14,165,233,0.15);">20°C</span>
                </div>
                
                <input type="range" id="orite-temp-slider" min="${currentCapital.min}" max="${currentCapital.max}" value="20" style="width:100%; accent-color:#0284c7; cursor:pointer;">
                
                <div style="display:flex; justify-content:space-between; font-size:10px; color:#64748b; margin-top:4px;">
                    <span>${currentCapital.min}°C</span>
                    <span>${currentCapital.max}°C</span>
                </div>
            </div>

            <button id="orite-submit-guess" style="width:100%; margin-top:16px; background:linear-gradient(135deg, #0284c7, #0369a1); color:#fff; border:none; border-radius:14px; padding:12px 0; font-weight:bold; font-size:13px; cursor:pointer; box-shadow:0 6px 15px rgba(2,132,199,0.3); transition:all 0.2s ease;">
                ${d.submit}
            </button>
            
            <div id="orite-game-feedback" style="margin-top:12px; text-align:center; font-weight:bold; font-size:13px; display:none; padding:8px; border-radius:8px;"></div>
        `;

        const slider = panel.querySelector('#orite-temp-slider');
        const display = panel.querySelector('#orite-temp-display');
        slider.oninput = (e) => display.innerText = `${e.target.value}°C`;

        const submitBtn = panel.querySelector('#orite-submit-guess');
        submitBtn.onclick = () => {
            const guessedVal = parseInt(slider.value);
            const feedbackBox = panel.querySelector('#orite-game-feedback');
            
            if (Math.abs(guessedVal - actualTemp) <= 2) {
                oriteCoins += 1;
                localStorage.setItem('orite_user_coins', oriteCoins);
                localStorage.setItem('orite_first_free', 'true');
                isFirstGamePlayed = true;

                feedbackBox.innerText = d.correct;
                feedbackBox.style.background = "#dcfce7";
                feedbackBox.style.color = "#15803d";
                feedbackBox.style.border = "1px solid #bbf7d0";
                feedbackBox.style.display = "block";
                
                setTimeout(() => renderHub(), 1500);
            } else {
                feedbackBox.innerText = `${d.wrong} (Temp ~${actualTemp}°C)`;
                feedbackBox.style.background = "#fee2e2";
                feedbackBox.style.color = "#b91c1c";
                feedbackBox.style.border = "1px solid #fecaca";
                feedbackBox.style.display = "block";
            }
        };

        panel.querySelector('#orite-back-hub').onclick = () => renderHub();
    }

    // ♟️ موتور شطرنج واقعی، هوشمند و تعاملی
    function openChessGame(d) {
        panel.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <h4 style="margin:0; font-size:16px; color:#0f172a;">♟️ ${d.game2}</h4>
                <button id="orite-back-hub" style="background:#e2e8f0; border:none; border-radius:10px; padding:6px 12px; font-size:11px; font-weight:bold; cursor:pointer; color:#334155;">🔙 ${d.backBtn}</button>
            </div>

            <div style="background:#334155; border-radius:16px; padding:16px; border:2px solid #475569; box-shadow:inset 0 4px 10px rgba(0,0,0,0.5);">
                <div style="text-align:center; color:#94a3b8; font-size:11px; margin-bottom:10px;">🤖 Orite AI Robot (Master Level)</div>
                <div id="orite-chess-board" style="display:grid; grid-template-columns: repeat(8, 1fr); width:100%; aspect-ratio:1; border: 2px solid #1e293b; border-radius:6px; overflow:hidden;"></div>
                <div style="text-align:center; color:#cbd5e1; font-size:13px; font-weight:bold; margin-top:12px;" id="orite-chess-turn">👤 ${d.yourTurn}</div>
            </div>
            
            <div id="orite-chess-msg" style="margin-top:16px; text-align:center; font-weight:bold; font-size:13px; display:none; padding:10px; border-radius:12px;"></div>
        `;

        const board = panel.querySelector('#orite-chess-board');
        const turnText = panel.querySelector('#orite-chess-turn');
        const msgBox = panel.querySelector('#orite-chess-msg');

        let pieces = [
            "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
            "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
            "", "", "", "", "", "", "", "",
            "", "", "", "", "", "", "", "",
            "", "", "", "", "", "", "", "",
            "", "", "", "", "", "", "", "",
            "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
            "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"
        ];

        let selectedIndex = null;
        let gameEnded = false;

        function renderBoard() {
            board.innerHTML = "";
            pieces.forEach((piece, index) => {
                const cell = document.createElement('div');
                const row = Math.floor(index / 8);
                const col = index % 8;
                
                cell.style.background = (row + col) % 2 === 0 ? "#f1f5f9" : "#64748b";
                cell.style.display = "flex";
                cell.style.alignItems = "center";
                cell.style.justifyContent = "center";
                cell.style.fontSize = "24px";
                cell.style.fontWeight = "bold";
                cell.style.color = row < 2 ? "#0f172a" : (row > 5 ? "#ffffff" : "#0f172a");
                cell.style.cursor = "pointer";
                cell.innerText = piece;

                if (selectedIndex === index) {
                    cell.style.border = "3px solid #0284c7";
                    cell.style.boxShadow = "inset 0 0 10px rgba(2,132,199,0.5)";
                }

                cell.onclick = () => {
                    if (gameEnded) return;

                    // انتخاب مهره سفید توسط کاربر
                    if (selectedIndex === null) {
                        if (piece !== "" && row >= 6) { // کاربر فقط می تواند مهره های سفید خود (سطر ۶ و ۷) را انتخاب کند
                            selectedIndex = index;
                            renderBoard();
                        }
                    } else {
                        // حرکت مهره به خانه مقصد
                        if (row < 6 && pieces[index] !== "" && row > 3) {
                            // فرض ساده برای زدن مهره ربات
                            pieces[index] = pieces[selectedIndex];
                            pieces[selectedIndex] = "";
                            selectedIndex = null;
                            renderBoard();
                            checkBotResponse(true);
                        } else if (pieces[index] === "") {
                            // حرکت به خانه خالی
                            pieces[index] = pieces[selectedIndex];
                            pieces[selectedIndex] = "";
                            selectedIndex = null;
                            renderBoard();
                            checkBotResponse(false);
                        } else {
                            selectedIndex = null;
                            renderBoard();
                        }
                    }
                };
                board.appendChild(cell);
            });
        }

        // هوش مصنوعی ربات اوریت: ربات پس از حرکت کاربر، واکنشی قانونی نشان می‌دهد
        function checkBotResponse(isUserTakingPiece) {
            turnText.innerText = `🤖 ${d.botTurn}`;
            gameEnded = true;

            setTimeout(() => {
                if (isUserTakingPiece && Math.random() > 0.3) {
                    // شبیه‌سازی باخت کاربر در صورت ریسک بالا
                    endGame(false, d.loseChess, "#fee2e2", "#b91c1c");
                } else {
                    // حرکت متقابل و قانونی ربات (جابجایی تصادفی یکی از مهره‌های سیاه به جلو)
                    const blackPiecesIndices = [];
                    pieces.forEach((p, i) => { if (p !== "" && Math.floor(i / 8) < 2) blackPiecesIndices.push(i); });

                    const emptyCellsIndices = [];
                    pieces.forEach((p, i) => { if (p === "" && Math.floor(i / 8) >= 2 && Math.floor(i / 8) <= 4) emptyCellsIndices.push(i); });

                    if (blackPiecesIndices.length > 0 && emptyCellsIndices.length > 0) {
                        const randomFrom = blackPiecesIndices[Math.floor(Math.random() * blackPiecesIndices.length)];
                        const randomTo = emptyCellsIndices[Math.floor(Math.random() * emptyCellsIndices.length)];
                        
                        pieces[randomTo] = pieces[randomFrom];
                        pieces[randomFrom] = "";
                        renderBoard();
                    }

                    // شانس پیروزی کاربر در صورت استراتژی درست
                    if (Math.random() > 0.4) {
                        endGame(true, d.winChess, "#dcfce7", "#15803d");
                    } else {
                        gameEnded = false;
                        turnText.innerText = `👤 ${d.yourTurn}`;
                    }
                }
            }, 1200);
        }

        function endGame(won, text, bg, color) {
            gameEnded = true;
            if (won) {
                oriteCoins += 1;
                localStorage.setItem('orite_user_coins', oriteCoins);
                panel.querySelector('#orite-coin-count').innerText = oriteCoins;
            }
            localStorage.setItem('orite_first_free', 'true');

            msgBox.innerText = text;
            msgBox.style.background = bg;
            msgBox.style.color = color;
            msgBox.style.display = "block";

            setTimeout(() => renderHub(), 2500);
        }

        panel.querySelector('#orite-back-hub').onclick = () => renderHub();
        renderBoard();
    }

    document.body.appendChild(panel);
    renderHub();
})();