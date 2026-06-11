// استفاده از یک تابع فوری (IIFE) برای جلوگیری از تداخل متغیرها
(function() {
    // جلوگیری از تعریف مجدد در صورت لود شدن چندباره
    if (window.oriteAiLoaded) return;
    window.oriteAiLoaded = true;

    const dict = {
        fa: { title: "دستیار هوشمند", send: "ارسال", task: "افزودن برنامه", save: "ثبت در Orite", input: "پیام...", hello: "سلام! چطور کمک کنم؟", date: "امروز: ", about: "این پلتفرم Orite، سیستم مدیریت کارهای هوشمند شماست." },
        en: { title: "Orite AI Assistant", send: "Send", task: "Add Task", save: "Save to Orite", input: "Message...", hello: "Hello! How can I help?", date: "Today: ", about: "Orite is your intelligent task management platform." },
        tr: { title: "Akıllı Asistan", send: "Gönder", task: "Görev Ekle", save: "Orite'ye Kaydet", input: "Mesaj...", hello: "Merhaba! Nasıl yardım edebilirim?", date: "Bugün: ", about: "Orite, akıllı görev yönetimi platformunuzdur." },
        ar: { title: "مساعد ذكي", send: "إرسال", task: "إضافة مهمة", save: "حفظ في Orite", input: "رسالة...", hello: "مرحباً! كيف يمكنني مساعدتك؟", date: "اليوم: ", about: "نظام Orite هو منصة إدارة المهام الذكية الخاصة بك." },
        zh: { title: "智能助手", send: "发送", task: "添加任务", save: "保存到 Orite", input: "消息...", hello: "你好！我能帮你什么吗？", date: "今天: ", about: "Orite 是您的智能任务管理平台。" }
    };

    window.addEventListener('load', function() {
        const target = document.querySelector('.card');
        if (target && !document.getElementById('ai-panel')) {
            const aiPanel = document.createElement('div');
            aiPanel.id = 'ai-panel';
            aiPanel.className = 'card';
            aiPanel.style.marginTop = "20px";
            aiPanel.innerHTML = `
                <h2 id="ai-title">🤖 Orite AI</h2>
                <select id="ai-lang">
                    <option value="fa">فارسی</option>
                    <option value="en">English</option>
                    <option value="tr">Türkçe</option>
                    <option value="ar">العربية</option>
                    <option value="zh">中文</option>
                </select>
                <div id="chat-history" style="height: 120px; overflow-y: auto; border: 1px solid #ccc; margin: 10px 0; padding: 5px; background:#f9f9f9;"></div>
                <input type="text" id="ai-input" placeholder="پیام...">
                <button class="ai-btn" id="btn-send">ارسال</button>
                <button class="ai-btn" id="btn-task">افزودن برنامه</button>
                <div id="ai-table" style="display:none; margin-top:10px; border-top:1px solid #ccc; padding-top:10px;">
                    <input type="text" id="ai-task" placeholder="عنوان برنامه">
                    <input type="datetime-local" id="ai-date">
                    <button class="ai-btn" id="btn-save">ثبت در Orite</button>
                </div>
            `;
            target.after(aiPanel);

            // اتصال دکمه‌ها
            document.getElementById('ai-lang').onchange = updateAILang;
            document.getElementById('btn-send').onclick = sendAI;
            document.getElementById('btn-task').onclick = () => document.getElementById('ai-table').style.display='block';
            document.getElementById('btn-save').onclick = addFromAI;
        }
    });

    // تعریف توابع به صورت جهانی تا در HTML در دسترس باشند
    window.updateAILang = function() {
        const lang = document.getElementById('ai-lang').value;
        const d = dict[lang];
        document.getElementById('ai-title').innerText = d.title;
        document.getElementById('btn-send').innerText = d.send;
        document.getElementById('btn-task').innerText = d.task;
        document.getElementById('btn-save').innerText = d.save;
        document.getElementById('ai-input').placeholder = d.input;
    };

    window.sendAI = function() {
        const input = document.getElementById('ai-input');
        const history = document.getElementById('chat-history');
        const lang = document.getElementById('ai-lang').value;
        const msg = input.value.toLowerCase();
        if (!msg) return;
        history.innerHTML += `<div>👤: ${msg}</div>`;
        let reply = dict[lang].hello;
        if (msg.includes("hello") || msg.includes("سلام") || msg.includes("مرحبا") || msg.includes("你好")) reply = dict[lang].hello;
        else if (msg.includes("date") || msg.includes("تاریخ") || msg.includes("تاريخ") || msg.includes("日期")) reply = dict[lang].date + new Date().toLocaleDateString('en-GB');
        else if (msg.includes("platform") || msg.includes("پلتفرم") || msg.includes("منصة") || msg.includes("平台")) reply = dict[lang].about;
        setTimeout(() => { history.innerHTML += `<div style="color:#5c67f2">🤖: ${reply}</div>`; history.scrollTop = history.scrollHeight; }, 500);
        input.value = "";
    };

    window.addFromAI = function() {
        const desc = document.getElementById('ai-task').value;
        const timeVal = document.getElementById('ai-date').value;
        if(!desc || !timeVal) return alert("لطفاً اطلاعات را پر کنید");
        tasks.push({desc: desc, time: new Date(timeVal).getTime()});
        localStorage.setItem('oriteTasks', JSON.stringify(tasks));
        if(typeof render === 'function') render();
        alert("Saved!");
        document.getElementById('ai-table').style.display = 'none';
    };
})();