(function() {
    // ۱. پاکسازی پنل قبلی
    const existing = document.getElementById('orite-todo-panel');
    if (existing) existing.remove();

    function escapeHTML(str) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    // ۲. دیکشنری ۱۰ زبانه
    const dict = {
        fa: { title: "لیست کارها", add: "افزودن", placeholder: "توضیحات و نام برنامه...", del: "حذف", edit: "ویرایش", save: "ذخیره", empty: "هیچ برنامه‌ای ثبت نشده", timeLabel: "ساعت:", dateLabel: "تاریخ:", locLabel: "مکان:" },
        en: { title: "To-Do List", add: "Add", placeholder: "Description and task name...", del: "Delete", edit: "Edit", save: "Save", empty: "No tasks yet", timeLabel: "Time:", dateLabel: "Date:", locLabel: "Location:" },
        tr: { title: "Yapılacaklar Listesi", add: "Ekle", placeholder: "Görev açıklaması ve adı...", del: "Sil", edit: "Düzenle", save: "Kaydet", empty: "Görev yok", timeLabel: "Saat:", dateLabel: "Tarih:", locLabel: "Konum:" },
        ar: { title: "قائمة المهام", add: "إضافة", placeholder: "وصف واسم البرنامج...", del: "حذف", edit: "تعديل", save: "حفظ", empty: "لا توجد مهام", timeLabel: "الوقت:", dateLabel: "التاريخ:", locLabel: "الموقع:" },
        ku: { title: "Lîsteya Karan", add: "Lê zêde bike", placeholder: "Şirove û navê bernameyê...", del: "Jê bibe", edit: "Guherandin", save: "Tomarkirin", empty: "Tu kar nînin", timeLabel: "Dem:", dateLabel: "Dîrok:", locLabel: "Cih:" },
        zh: { title: "待办事项列表", add: "添加", placeholder: "描述和任务名称...", del: "删除", edit: "编辑", save: "保存", empty: "暂无任务", timeLabel: "时间:", dateLabel: "日期:", locLabel: "位置:" },
        ko: { title: "할 일 목록", add: "추가", placeholder: "설명 및 작업 이름...", del: "삭제", edit: "편집", save: "저장", empty: "작업 없음", timeLabel: "시간:", dateLabel: "날짜:", locLabel: "위치:" },
        fr: { title: "Liste des tâches", add: "Ajouter", placeholder: "Description et nom...", del: "Supprimer", edit: "Modifier", save: "Enregistrer", empty: "Aucune tâche", timeLabel: "Heure:", dateLabel: "Date:", locLabel: "Emplacement:" },
        de: { title: "Aufgabenliste", add: "Hinzufügen", placeholder: "Beschreibung und Name...", del: "Löschen", edit: "Bearbeiten", save: "Speichern", empty: "Keine Aufgaben", timeLabel: "Zeit:", dateLabel: "Datum:", locLabel: "Ort:" },
        it: { title: "Elenco delle cose da fare", add: "Aggiungi", placeholder: "Descrizione e nome...", del: "Elimina", edit: "Modifica", save: "Salva", empty: "Nessun compito", timeLabel: "Ora:", dateLabel: "Data:", locLabel: "Luogo:" }
    };

    let lang = 'fa';

    const todoPanel = document.createElement('div');
    todoPanel.id = 'orite-todo-panel';
    todoPanel.style.cssText = "background:#ffffff !important; padding:15px !important; border-radius:15px !important; box-shadow:0 4px 15px rgba(0,0,0,0.15) !important; border:1px solid #e0e0e0 !important; font-family:Tahoma, Arial, sans-serif !important; color:#333 !important; width:481px !important; margin-top:20px !important;";

    function render() {
        const d = dict[lang];
        todoPanel.innerHTML = `
            <select id="lang-sel-todo" style="width:100%; padding:5px; margin-bottom:10px; border-radius:5px; border:1px solid #ddd;">
                ${Object.keys(dict).map(l => `<option value="${l}" ${l===lang?'selected':''}>${l.toUpperCase()}</option>`).join('')}
            </select>
            <h3 style="margin:0 0 10px 0;">${d.title}</h3>
            
            <div style="margin-bottom:10px;">
                <textarea type="text" id="task-input" placeholder="${d.placeholder}" style="width:95%; height:45px; padding:8px; border:1px solid #ddd; border-radius:5px; outline:none; resize:none; font-family:inherit;"></textarea>
            </div>
            
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:5px; margin-bottom:10px; font-size:11px;">
                <div>
                    <label style="display:block; margin-bottom:2px; font-weight:bold;">${d.timeLabel}</label>
                    <input type="time" id="task-time" style="width:85%; padding:4px; border:1px solid #ddd; border-radius:3px;">
                </div>
                <div>
                    <label style="display:block; margin-bottom:2px; font-weight:bold;">${d.dateLabel}</label>
                    <input type="date" id="task-date" style="width:85%; padding:4px; border:1px solid #ddd; border-radius:3px;">
                </div>
                <div>
                    <label style="display:block; margin-bottom:2px; font-weight:bold;">${d.locLabel}</label>
                    <input type="text" id="task-loc" placeholder="..." style="width:85%; padding:4px; border:1px solid #ddd; border-radius:3px;">
                </div>
            </div>

            <button id="add-task-btn" style="width:100%; padding:8px; cursor:pointer; background:#28a745; color:white; border:none; border-radius:5px; font-weight:bold; margin-bottom:15px;">${d.add}</button>
            
            <ul id="task-list" style="list-style-type:none; padding:0; margin:0; max-height:160px; overflow-y:auto;">
                <i style="color:#888; font-size:12px;" id="empty-msg">${d.empty}</i>
            </ul>
        `;

        // تنظیم پیش‌فرض ساعت و تاریخ فعلی هنگام لود اولیه پنل
        const nowTime = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        const nowDate = new Date().toISOString().split('T')[0];
        todoPanel.querySelector('#task-time').value = nowTime;
        todoPanel.querySelector('#task-date').value = nowDate;

        // تغییر زبان
        todoPanel.querySelector('#lang-sel-todo').onchange = (e) => {
            lang = e.target.value;
            render();
        };

        // افزودن کار جدید
        const addTask = () => {
            const input = todoPanel.querySelector('#task-input');
            const taskText = input.value.trim();
            
            if (taskText === "") return;

            const emptyMsg = todoPanel.querySelector('#empty-msg');
            if (emptyMsg) emptyMsg.remove();

            const setTime = todoPanel.querySelector('#task-time').value || "--:--";
            const setDate = todoPanel.querySelector('#task-date').value || "----/--/--";
            const setLoc = todoPanel.querySelector('#task-loc').value || "---";
            const createdStamp = new Date().toLocaleString(lang);

            const li = document.createElement('li');
            li.style.cssText = "padding:10px; border-bottom:1px solid #f1f1f1; display:flex; flex-direction:column; gap:6px; font-size:13px; transition:background 0.2s;";
            
            li.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <span class="task-text" style="word-break:break-word; width:75%;">${escapeHTML(taskText).replace(/\n/g, '<br>')}</span>
                    <div style="display:flex; gap:4px;">
                        <button class="edit-btn" style="background:#ffc107; color:#333; border:none; border-radius:3px; padding:3px 5px; cursor:pointer; font-size:10px;">${d.edit}</button>
                        <button class="del-btn" style="background:#dc3545; color:white; border:none; border-radius:3px; padding:3px 5px; cursor:pointer; font-size:10px;">${d.del}</button>
                    </div>
                </div>
                <div style="font-size:10px; color:#555; background:#f8f9fa; padding:4px; border-radius:4px; display:flex; justify-content:space-between;">
                    <span>📍 <b>${d.locLabel}</b> ${escapeHTML(setLoc)}</span>
                    <span>🕒 ${escapeHTML(setDate)} - ${escapeHTML(setTime)}</span>
                </div>
                <span style="font-size:8.5px; color:#999; text-align:right;">ثبت شده در: ${createdStamp}</span>
            `;

            // مکان نقشه برای نمایش بصری
            

            // لاجیک ویرایش
            const editBtn = li.querySelector('.edit-btn');
            const taskSpan = li.querySelector('.task-text');
            
            editBtn.onclick = () => {
                if (editBtn.innerText === d.edit) {
                    const textareaEdit = document.createElement('textarea');
                    textareaEdit.value = taskSpan.textContent;
                    textareaEdit.style.cssText = "width:75%; height:40px; padding:4px; border:1px solid #ccc; border-radius:3px; resize:none; font-family:inherit;";
                    
                    taskSpan.replaceWith(textareaEdit);
                    editBtn.innerText = d.save;
                    textareaEdit.focus();
                } else {
                    const newText = li.querySelector('textarea').value.trim();
                    if (newText !== "") {
                        const newSpan = document.createElement('span');
                        newSpan.className = 'task-text';
                        newSpan.style.cssText = "word-break:break-word; width:75%;";
                        newSpan.innerHTML = escapeHTML(newText).replace(/\n/g, '<br>');
                        
                        li.querySelector('textarea').replaceWith(newSpan);
                        editBtn.innerText = d.edit;
                    }
                }
            };

            // لاجیک حذف
            li.querySelector('.del-btn').onclick = () => {
                li.remove();
                if (todoPanel.querySelector('#task-list').children.length === 0) {
                    todoPanel.querySelector('#task-list').innerHTML = `<i style="color:#888; font-size:12px;" id="empty-msg">${dict[lang].empty}</i>`;
                }
            };

            todoPanel.querySelector('#task-list').appendChild(li);
            input.value = '';
            // بازنشانی زمان و تاریخ برای آیتم بعدی به زمان فعلی
            todoPanel.querySelector('#task-time').value = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
            todoPanel.querySelector('#task-date').value = new Date().toISOString().split('T')[0];
            todoPanel.querySelector('#task-loc').value = '';
        };

        todoPanel.querySelector('#add-task-btn').onclick = addTask;
        todoPanel.querySelector('#task-input').onkeydown = (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                addTask();
            }
        };
    }

    document.body.appendChild(todoPanel);
    render();
})();