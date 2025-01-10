// Получаем все элементы аккордеона
const accordionItems = document.querySelectorAll('.accordion-item');

// Добавляем обработчик событий для каждого заголовка
accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    // Закрываем все открытые элементы
    accordionItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    // Переключаем состояние текущего элемента
    item.classList.toggle('active');
  });
});
