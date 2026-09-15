// Change product amounts here AND in index.html before publishing if needed.
const messages = {
  guide: 'Привет, Даша! Хочу купить методичку «Красивый контент на iPhone» за $19. Подскажи, пожалуйста, как оплатить через PayPal и получить файл.',
  session: 'Привет, Даша! Хочу записаться на личную консультацию по iPhone и CapCut: 75 минут, $60. Давай согласуем дату, время и оплату через PayPal.'
};
document.querySelectorAll('[data-product]').forEach(link => {
  link.href = 'https://t.me/dari_kansh?text=' + encodeURIComponent(messages[link.dataset.product]);
});
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
  });
});
