(function() {
    // ۱. پاکسازی پنل قبلی
    const existing = document.getElementById('orite-notes-panel');
    if (existing) existing.remove();

    // ۲. دیکشنری ۱۱ زبانه
    const dict = {
        fa: { title: "یادداشت پیشرفته", titlePlaceholder: "عنوان یادداشت...", descPlaceholder: "توضیحات خود را اینجا بنویسید...", upload: "آپلود فایل", save: "ذخیره در لیست", del: "پاک‌سازی فرم", empty: "یادداشتی ثبت نشده است", logDel: "حذف" },
        en: { title: "Advanced Notes", titlePlaceholder: "Note title...", descPlaceholder: "Type your note here...", upload: "Upload File", save: "Save to List", del: "Clear Form", empty: "No notes saved yet", logDel: "Delete" },
        tr: { title: "Gelişmiş Notlar", titlePlaceholder: "Not başlığı...", descPlaceholder: "Notunuzu buraya yazın...", upload: "Dosya Yükle", save: "Listeye Kaydet", del: "Formu Temizle", empty: "Henüz not kaydedilmedi", logDel: "Sil" },
        ar: { title: "ملاحظات متقدمة", titlePlaceholder: "عنوان الملاحظة...", descPlaceholder: "اكتب ملاحظتك هنا...", upload: "رفع ملف", save: "حفظ في القائمة", del: "مسح النموذج", empty: "لا توجد ملاحظات محفوظة", logDel: "حذف" },
        ku: { title: "Têbîniyên Pêşketî", titlePlaceholder: "Navê têbîniyê...", descPlaceholder: "Têbîniya xwe li vir binivîse...", upload: "Peldankê bar bike", save: "Tomar bike", del: "Formê vala bike", empty: "Tu têbînî nehatine tomarkirin", logDel: "Jê bibe" },
        zh: { title: "高级笔记", titlePlaceholder: "笔记标题...", descPlaceholder: "在此处输入您的笔记...", upload: "上传文件", save: "保存到列表", del: "清除表单", empty: "暂无保存的笔记", logDel: "删除" },
        ko: { title: "고급 메모", titlePlaceholder: "메모 제목...", descPlaceholder: "여기에 메모를 입력하세요...", upload: "파일 업로드", save: "목록에 저장", del: "양식 지우기", empty: "저장된 메모 없음", logDel: "삭제" },
        fr: { title: "Notes avancées", titlePlaceholder: "Titre de la note...", descPlaceholder: "Écrivez votre note ici...", upload: "Téléverser", save: "Enregistrer", del: "Vider le formulaire", empty: "Aucune note enregistrée", logDel: "Supprimer" },
        de: { title: "Erweiterte Notizen", titlePlaceholder: "Notiztitel...", descPlaceholder: "Schreiben Sie Ihre Notiz hier...", upload: "Datei hochladen", save: "Zur Liste speichern", del: "Formular löschen", empty: "Keine Notizen gespeichert", logDel: "Löschen" },
        it: { title: "Note avanzate", titlePlaceholder: "Titolo della nota...", descPlaceholder: "Scrivi la tua nota qui...", upload: "Carica file", save: "Salva nella lista", del: "Cancella modulo", empty: "Nessuna nota salvata", logDel: "Elimina" },
        es: { title: "Notas avanzadas", titlePlaceholder: "Título de la nota...", descPlaceholder: "Escribe tu nota aquí...", upload: "Subir archivo", save: "Guardar en lista", del: "Limpiar formulario", empty: "No hay notas guardadas", logDel: "Eliminar" }
    };

    let lang = 'fa';

    const notesPanel = document.createElement('div');
    notesPanel.id = 'orite-notes-panel';
    notesPanel.style.cssText = "background:#ffffff !important; padding:15px !important; border-radius:15px !important; box-shadow:0 4px 15px rgba(0,0,0,0.15) !important; border:1px solid #e0e0e0 !important; font-family:Tahoma, Arial, sans-serif !important; color:#333 !important; width:510px !important; margin-top:20px !important;";

    function render() {
        const d = dict[lang];
        notesPanel.innerHTML = `
            <select id="lang-sel-notes" style="width:100%; padding:5px; margin-bottom:10px; border-radius:5px; border:1px solid #ddd;">
                ${Object.keys(dict).map(l => `<option value="${l}" ${l===lang?'selected':''}>${l.toUpperCase()}</option>`).join('')}
            </select>
            <h3 style="margin:0 0 10px 0;">${d.title}</h3>
            
            <input type="text" id="note-title-input" placeholder="${d.titlePlaceholder}" style="width:95%; padding:8px; border:1px solid #ddd; border-radius:5px; outline:none; margin-bottom:10px; font-family:inherit;">
            
            <textarea id="notes-textarea" placeholder="${d.descPlaceholder}" style="width:95%; height:70px; padding:8px; border:1px solid #ddd; border-radius:5px; outline:none; resize:none; font-family:inherit; margin-bottom:10px;"></textarea>
            
            <div style="margin-bottom:10px; font-size:13px;">
                <label style="display:block; margin-bottom:3px; color:#666;">${d.upload}:</label>
                <input type="file" id="note-file" style="width:100%; padding:3px; border:1px solid #eee; border-radius:5px; background:#f9f9f9;">
                <span id="file-info" style="font-size:11px; color:#007bff; display:block; margin-top:3px;"></span>
            </div>
            
            <div style="display:flex; gap:5px; margin-bottom:15px;">
                <button id="save-notes-btn" style="flex:2; padding:8px; cursor:pointer; background:#28a745; color:white; border:none; border-radius:5px; font-weight:bold;">${d.save}</button>
                <button id="clear-notes-btn" style="flex:1; padding:8px; cursor:pointer; background:#6c757d; color:white; border:none; border-radius:5px; font-size:12px;">${d.del}</button>
            </div>

            <div style="border-top:1px solid #eee; padding-top:10px;">
                <h4 style="margin:0 0 8px 0; font-size:13px; color:#555;">لیست یادداشت‌ها:</h4>
                <ul id="notes-list" style="list-style-type:none; padding:0; margin:0; max-height:140px; overflow-y:auto;">
                    <i style="color:#888; font-size:12px;" id="empty-notes-msg">${d.empty}</i>
                </ul>
            </div>
        `;

        // نمایش نام فایل انتخابی
        notesPanel.querySelector('#note-file').onchange = (e) => {
            const file = e.target.files[0];
            notesPanel.querySelector('#file-info').innerText = file ? `فایل: ${file.name}` : '';
        };

        // تغییر زبان
        notesPanel.querySelector('#lang-sel-notes').onchange = (e) => {
            lang = e.target.value;
            render();
        };

        // افزودن یادداشت به لیست پایین پنل
        notesPanel.querySelector('#save-notes-btn').onclick = () => {
            const title = notesPanel.querySelector('#note-title-input').value.trim();
            const desc = notesPanel.querySelector('#notes-textarea').value.trim();
            const fileInput = notesPanel.querySelector('#note-file');
            
            if (title === "" && desc === "") return;

            const emptyMsg = notesPanel.querySelector('#empty-notes-msg');
            if (emptyMsg) emptyMsg.remove();

            const now = new Date().toLocaleString(lang);
            const fileName = fileInput.files[0] ? `📎 ${fileInput.files[0].name}` : '';

            const li = document.createElement('li');
            li.style.cssText = "padding:8px; border-bottom:1px solid #f1f1f1; display:flex; flex-direction:column; gap:4px; font-size:13px;";
            
            li.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <div style="width:85%;">
                        <b style="display:block; color:#0056b3;">${title || "بدون عنوان"}</b>
                        <span style="word-break:break-word;">${desc.replace(/\n/g, '<br>')}</span>
                        <span style="display:block; font-size:11px; color:#666; margin-top:2px;">${fileName}</span>
                    </div>
                    <button class="del-log-btn" style="background:#dc3545; color:white; border:none; border-radius:3px; padding:3px 5px; cursor:pointer; font-size:10px;">${d.logDel}</button>
                </div>
                <span style="font-size:8.5px; color:#999; text-align:right;">🕒 ${now}</span>
            `;

            // حذف یادداشت از لیست
            li.querySelector('.del-log-btn').onclick = () => {
                li.remove();
                if (notesPanel.querySelector('#notes-list').children.length === 0) {
                    notesPanel.querySelector('#notes-list').innerHTML = `<i style="color:#888; font-size:12px;" id="empty-notes-msg">${dict[lang].empty}</i>`;
                }
            };

            notesPanel.querySelector('#notes-list').appendChild(li);
            
            // پاکسازی فرم ورودی پس از ثبت
            notesPanel.querySelector('#note-title-input').value = '';
            notesPanel.querySelector('#notes-textarea').value = '';
            fileInput.value = '';
            notesPanel.querySelector('#file-info').innerText = '';
        };

        // پاک‌سازی فرم
        notesPanel.querySelector('#clear-notes-btn').onclick = () => {
            notesPanel.querySelector('#note-title-input').value = '';
            notesPanel.querySelector('#notes-textarea').value = '';
            notesPanel.querySelector('#note-file').value = '';
            notesPanel.querySelector('#file-info').innerText = '';
        };
    }

    document.body.appendChild(notesPanel);
    render();
})();