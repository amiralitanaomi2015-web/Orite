// ۱. بارگذاری برنامه‌ها از حافظه مرورگر در هنگام شروع
let tasks = JSON.parse(localStorage.getItem('oriteTasks')) || [];

function setTask() {
    const inputVal = document.getElementById('task-time').value;
    if (!inputVal) return alert("لطفاً زمان را وارد کنید!");
    
    const taskTime = new Date(inputVal).getTime();
    tasks.push(taskTime);
    
    // ۲. ذخیره در حافظه مرورگر
    localStorage.setItem('oriteTasks', JSON.stringify(tasks));
    alert("برنامه با موفقیت در سیستم Orite ثبت شد.");
}

// ۳. پاکسازی بعد از اتمام (اختیاری)
function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('oriteTasks', JSON.stringify(tasks));
}