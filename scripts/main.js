document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion')

  accordions.forEach((el) => {
    el.addEventListener('click', (ev) => {
      //Находим текущий аккордеон
      const self = ev.currentTarget
      //Находим текущий элемент, на который мы кликнули
      const controlClick = self.querySelector('.accordion__control')
      //Находим текущий контент аккордеона
      const content = self.querySelector('.accordion__info')

      //Добавляем класс открытия контента при клике на аккордеон
      self.classList.toggle('open')
    })
  })
})
