document.addEventListener('DOMContentLoaded', () => {
  const counterBtn = document.getElementById('counter-btn');
  const countSpan = document.getElementById('count');
  const themeBtn = document.getElementById('theme-btn');
  const statusMsg = document.getElementById('status-msg');

  let count = 0;

  // Лічильник натискань
  counterBtn.addEventListener('click', () => {
    count += 1;
    countSpan.textContent = count;
    statusMsg.textContent = `Магія, кнопку натиснуто ${count} раз(ів).`;
  });

  // Перемикач темної/світлої теми
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    statusMsg.textContent = `Встановлено ${isDark ? 'темну' : 'світлу'} тему.`;
  });
});
