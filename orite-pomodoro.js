(function() {
    // ۱. جلوگیری از تکرار و پاکسازی پنل قبلی
    const existing = document.getElementById('orite-goals-panel');
    if (existing) existing.remove();

    // ۲. دیکشنری ۱۲ زبانه
    const dict = {
        fa: { title: "مدیریت اهداف", add: "افزودن هدف", placeholder: "عنوان هدف...", deadline: "مهلت:", priority: "اهمیت:", p1: "کم", p2: "متوسط", p3: "زیاد", del: "حذف", empty: "هدفی ثبت نشده است", expired: "🔴 منقضی شد", done: "🟢 انجام شد", progress: "پیشرفت اهداف:" },
        en: { title: "Goal Manager", add: "Add Goal", placeholder: "Goal title...", deadline: "Deadline:", priority: "Priority:", p1: "Low", p2: "Medium", p3: "High", del: "Delete", empty: "No goals set", expired: "🔴 Expired", done: "🟢 Done", progress: "Goal Progress:" },
        tr: { title: "Hedef Yöneticisi", add: "Hedef Ekle", placeholder: "Hedef başlığı...", deadline: "Son Tarih:", priority: "Öncelik:", p1: "Düşük", p2: "Orta", p3: "Yüksek", del: "Sil", empty: "Henüz hedef yok", expired: "🔴 Süresi Bitti", done: "🟢 Tamamlandı", progress: "Hedef İlerlemesi:" },
        ar: { title: "إدارة الأهداف", add: "إضافة هدف", placeholder: "عنوان الهدف...", deadline: "الموعد النهائي:", priority: "الأهمية:", p1: "منخفضة", p2: "متوسطة", p3: "عالية", del: "حذف", empty: "لا توجد أهداف", expired: "🔴 انتهى الوقت", done: "🟢 تم إنجازه", progress: "تقدم الأهداف:" },
        ku: { title: "Rêveberiya Armancan", add: "Armanc lê zêde bike", placeholder: "Navê armancê...", deadline: "Demê dawî:", priority: "Giringî:", p1: "Kêm", p2: "Navîn", p3: "Zêde", del: "Jê bibe", empty: "Tu armanc nehatine tomarkirin", expired: "🔴 Dem qediya", done: "🟢 Hatiye kirin", progress: "Pêşveçûna armancan:" },
        zh: { title: "目标管理器", add: "添加目标", placeholder: "目标标题...", deadline: "截止日期:", priority: "优先级:", p1: "低", p2: "中", p3: "高", del: "删除", empty: "暂无目标", expired: "🔴 已过期", done: "🟢 已完成", progress: "目标进度:" },
        ko: { title: "목표 관리자", add: "목표 추가", placeholder: "목표 제목...", deadline: "마감일:", priority: "우선순위:", p1: "낮음", p2: "보통", p3: "높음", del: "삭제", empty: "등록된 목표 없음", expired: "🔴 기한 초과", done: "🟢 완료됨", progress: "목표 진행 상황:" },
        fr: { title: "Gestionnaire d'objectifs", add: "Ajouter", placeholder: "Titre de l'objectif...", deadline: "Échéance:", priority: "Priorité:", p1: "Basse", p2: "Moyenne", p3: "Haute", del: "Supprimer", empty: "Aucun objectif", expired: "🔴 Expiré", done: "🟢 Terminé", progress: "Progression:" },
        de: { title: "Zielmanager", add: "Ziel hinzufügen", placeholder: "Zieltitel...", deadline: "Frist:", priority: "Priorität:", p1: "Niedrig", p2: "Mittel", p3: "Hoch", del: "Löschen", empty: "Keine Ziele gesetzt", expired: "🔴 Abgelaufen", done: "🟢 Erledigt", progress: "Zielfortschritt:" },
        it: { title: "Gestione Obiettivi", add: "Aggiungi obiettivo", placeholder: "Titolo obiettivo...", deadline: "Scadenza:", priority: "Priorità:", p1: "Bassa", p2: "Media", p3: "Alta", del: "Elimina", empty: "Nessun obiettivo", expired: "🔴 Scaduto", done: "🟢 Fatto", progress: "Avanzamento:" },
        es: { title: "Gestor de Metas", add: "Añadir meta", placeholder: "Título de la meta...", deadline: "Fecha límite:", priority: "Prioridad:", p1: "Baja", p2: "Media", p3: "Alta", del: "Eliminar", empty: "No hay metas", expired: "🔴 Expirado", done: "🟢 Hecho", progress: "Progreso de metas:" },
        ru: { title: "Менеджер целей", add: "Добавить цель", placeholder: "Название цели...", deadline: "Срок:", priority: "Приоритет:", p1: "Низкий", p2: "Средний", p3: "Высокий", del: "Удалить", empty: "Целей нет", expired: "🔴 Истекло", done: "🟢 Выполнено", progress: "Прогресс целей:" }
    };

    let lang = 'fa';

    const goalsPanel = document.createElement('div');
    goalsPanel.id = 'orite-goals-panel';
    // استایل اختصاصی (آبی، سفید، سیاه) هماهنگ با اوریت
    goalsPanel.style.cssText = "background:#ffffff !important; border:2px solid #0056b3 !important; padding:15px !important; border-radius:15px !important; box-shadow:0 4px 15px rgba(0, 86, 179, 0.2) !important; font-family:Tahoma, Arial, sans-serif !important; color:#000000 !important; width:510px !important; margin-top:20px !important;";

    function render() {
        const d = dict[lang];
        goalsPanel.innerHTML = `
            <select id="lang-sel-goals" style="width:100%; padding:5px; margin-bottom:10px; border-radius:5px; border:1px solid #0056b3; background:#f0f8ff; font-weight:bold;">
                ${Object.keys(dict).map(l => `<option value="${l}" ${l===lang?'selected':''}>${l.toUpperCase()}</option>`).join('')}
            </select>
            <h3 style="margin:0 0 10px 0; color:#0056b3;">${d.title}</h3>
            
            <input type="text" id="goal-title" placeholder="${d.placeholder}" style="width:95%; padding:8px; border:1px solid #aaa; border-radius:5px; outline:none; margin-bottom:8px;">
            
            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:8px;">
                <div>
                    <label style="font-weight:bold;">${d.deadline}</label>
                    <input type="datetime-local" id="goal-deadline" style="padding:3px; border:1px solid #aaa; border-radius:3px;">
                </div>
                <div>
                    <label style="font-weight:bold;">${d.priority}</label>
                    <select id="goal-priority" style="padding:3px; border:1px solid #aaa; border-radius:3px;">
                        <option value="#28a745">${d.p1}</option>
                        <option value="#ffc107" selected>${d.p2}</option>
                        <option value="#dc3545">${d.p3}</option>
                    </select>
                </div>
            </div>

            <button id="add-goal-btn" style="width:100%; padding:8px; cursor:pointer; background:#0056b3; color:white; border:none; border-radius:5px; font-weight:bold; margin-bottom:12px;">${d.add}</button>
            
            <div id="progress-container" style="margin-bottom:15px; display:none;">
                <span style="font-size:11px; font-weight:bold; color:#333;">${d.progress} <span id="progress-text">0/0</span></span>
                <div style="width:100%; background:#e9ecef; border-radius:10px; height:8px; margin-top:4px; overflow:hidden;">
                    <div id="progress-bar" style="width:0%; background:#0056b3; height:100%; transition:width 0.3s;"></div>
                </div>
            </div>

            <ul id="goal-list" style="list-style-type:none; padding:0; margin:0; max-height:160px; overflow-y:auto;">
                <i style="color:#666; font-size:12px;" id="empty-goals">${d.empty}</i>
            </ul>
        `;

        // تنظیم حداقل زمان برای ورودی تاریخ
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        goalsPanel.querySelector('#goal-deadline').value = now.toISOString().slice(0, 16);

        // تغییر زبان
        goalsPanel.querySelector('#lang-sel-goals').onchange = (e) => {
            lang = e.target.value;
            render();
        };

        // افزودن هدف جدید
        goalsPanel.querySelector('#add-goal-btn').onclick = () => {
            const titleInput = goalsPanel.querySelector('#goal-title');
            const deadlineInput = goalsPanel.querySelector('#goal-deadline');
            const priorityInput = goalsPanel.querySelector('#goal-priority');

            const title = titleInput.value.trim();
            if (title === "") return;

            goalsPanel.querySelector('#empty-goals')?.remove();
            goalsPanel.querySelector('#progress-container').style.display = 'block';

            const li = document.createElement('li');
            li.style.cssText = "padding:10px; border-bottom:1px solid #e0e0e0; display:flex; flex-direction:column; gap:4px; font-size:13px; background:#fdfdfd; border-radius:4px; margin-bottom:5px;";

            const priorityColor = priorityInput.value;

            li.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:6px; width:80%;">
                        <input type="checkbox" class="goal-checkbox" style="cursor:pointer; width:16px; height:16px;">
                        <span class="goal-text" style="font-weight:bold; word-break:break-word;">${title}</span>
                    </div>
                    <button class="del-btn" style="background:#dc3545; color:white; border:none; border-radius:3px; padding:3px 6px; cursor:pointer; font-size:11px;">${d.del}</button>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:10px; color:#555;">
                    <span style="background: ${priorityColor}; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold;">
                        ${priorityInput.options[priorityInput.selectedIndex].text}
                    </span>
                    <span>⏳ <b class="deadline-badge">${deadlineInput.value.replace('T', ' ')}</b></span>
                </div>
            `;

            const checkbox = li.querySelector('.goal-checkbox');
            const goalText = li.querySelector('.goal-text');
            const deadlineBadge = li.querySelector('.deadline-badge');

            // بررسی سیستم هوشمند مهلت (ددلاین)
            const checkDeadline = setInterval(() => {
                const nowTime = new Date().getTime();
                const targetTime = new Date(deadlineInput.value).getTime();

                if (nowTime > targetTime && !checkbox.checked && !li.classList.contains('expired')) {
                    li.classList.add('expired');
                    li.style.background = "#ffe6e6";
                    li.style.borderColor = "#dc3545";
                    deadlineBadge.innerHTML = `<span style="color:#dc3545;">${d.expired}</span>`;
                    clearInterval(checkDeadline);
                }
            }, 1000);

            // تیک زدن هدف (انجام شد)
            checkbox.onchange = () => {
                if (checkbox.checked) {
                    clearInterval(checkDeadline);
                    goalText.style.textDecoration = "line-through";
                    goalText.style.color = "#28a745";
                    li.style.background = "#e6ffe6";
                    li.style.borderColor = "#28a745";
                    deadlineBadge.innerHTML = `<span style="color:#28a745;">${d.done}</span>`;
                } else {
                    goalText.style.textDecoration = "none";
                    goalText.style.color = "#000000";
                    li.style.background = "#fdfdfd";
                    li.style.borderColor = "#e0e0e0";
                    deadlineBadge.innerHTML = deadlineInput.value.replace('T', ' ');
                    // ری‌استارت بررسی ددلاین در صورت برداشتن تیک
                    setInterval(() => {
                        const nowTime = new Date().getTime();
                        const targetTime = new Date(deadlineInput.value).getTime();
                        if (nowTime > targetTime && !checkbox.checked) {
                            li.classList.add('expired');
                            li.style.background = "#ffe6e6";
                            li.style.borderColor = "#dc3545";
                            deadlineBadge.innerHTML = `<span style="color:#dc3545;">${d.expired}</span>`;
                        }
                    }, 1000);
                }
                updateProgress();
            };

            // حذف هدف
            li.querySelector('.del-btn').onclick = () => {
                clearInterval(checkDeadline);
                li.remove();
                const list = goalsPanel.querySelector('#goal-list');
                if (list.children.length === 0) {
                    goalsPanel.querySelector('#progress-container').style.display = 'none';
                    list.innerHTML = `<i style="color:#666; font-size:12px;" id="empty-goals">${dict[lang].empty}</i>`;
                }
                updateProgress();
            };

            goalsPanel.querySelector('#goal-list').appendChild(li);
            titleInput.value = '';
            updateProgress();
        };

        function updateProgress() {
            const list = goalsPanel.querySelector('#goal-list');
            const items = list.querySelectorAll('li');
            if (items.length === 0) return;

            let completed = 0;
            items.forEach(item => {
                if (item.querySelector('.goal-checkbox').checked) completed++;
            });

            const percentage = (completed / items.length) * 100;
            goalsPanel.querySelector('#progress-bar').style.width = `${percentage}%`;
            goalsPanel.querySelector('#progress-text').innerText = `${completed}/${items.length}`;
        }
    }

    document.body.appendChild(goalsPanel);
    render();
})();