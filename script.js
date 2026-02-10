// -------------------------------------------------------------------------------------------
// JavaScript - التفاعل مع الصفحة (فتح/إغلاق النافذة + التحقق من الفورم)
// -------------------------------------------------------------------------------------------

// نجيب زر فتح النافذة من الصفحة
const openModalBtn = document.getElementById("openModalBtn");

// نجيب زر إغلاق النافذة
const closeModalBtn = document.getElementById("closeModalBtn");

// نجيب طبقة الخلفية للنافذة
const modalOverlay = document.getElementById("modalOverlay");

// عند الضغط على زر "شاهد مثال لمعْلم" نفتح النافذة
openModalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("open"); // نضيف كلاس لعرض النافذة
  showActionMessage("تم تنفيذ العملية بنجاح");// تبع المهمه 3---------
});

// عند الضغط على زر الإغلاق نغلق النافذة
closeModalBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("open"); // نحذف الكلاس لإخفاء النافذة
});

// إذا ضغط المستخدم خارج مربع النافذة نقفلها
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("open");
  }
});

//===========================================================================================
// مهمة 3: رسالة تفاعل للمستخدم عند الضغط على زر الإجراء
//===========================================================================================

// مكان عرض رسالة التفاعل
const actionMessage = document.getElementById("actionMessage");
let actionMessageTimer = null;

// دالة بسيطة تعرض رسالة ثم تخفيها بعد وقت
function showActionMessage(text) {
  actionMessage.textContent = text;
  actionMessage.style.display = "block";

  // إذا كانت فيه مؤقت سابق، نلغيه
  if (actionMessageTimer) clearTimeout(actionMessageTimer);

  // نخفي الرسالة بعد ثانيتين
  actionMessageTimer = setTimeout(() => {
    actionMessage.style.display = "none";
  }, 2000);
}


// نجيب عناصر الفورم للتحقق من الإدخال
const form = document.getElementById("subscribeForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageBox = document.getElementById("formMessage");

// عند إرسال الفورم
form.addEventListener("submit", (e) => {
  e.preventDefault(); // نمنع تحديث الصفحة

  const name = nameInput.value.trim(); // نأخذ قيمة الاسم
  const email = emailInput.value.trim(); // نأخذ قيمة الإيميل

  // إذا أحد الحقول فاضي
  if (name === "" || email === "") {
    messageBox.textContent = "الرجاء تعبئة جميع الحقول.";
    messageBox.style.color = "red";
    return;
  }

  // تحقق بسيط من صحة البريد
  if (!email.includes("@") || !email.includes(".")) {
    messageBox.textContent = "الرجاء إدخال بريد إلكتروني صحيح.";
    messageBox.style.color = "red";
    return;
  }

  // في حال كانت البيانات صحيحة
  messageBox.textContent = "تم الإرسال بنجاح! سنقوم بإرسال آخر التحديثات قريبًا.";
  messageBox.style.color = "green";

  // نفرغ الحقول بعد الإرسال
  form.reset();
});
