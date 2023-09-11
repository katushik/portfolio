let button = document.querySelectorAll('button');
let a = document.querySelectorAll('a')

const removeActive = (target) =>{
    target.forEach(enement =>{enement.style.transform = `translateX(0) translateY(0)`; enement.classList.remove('active')} )
    
}

const followCursor = () => { // объявляем функцию followCursor
  const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором

  window.addEventListener('mousemove', e => { // при движении курсора
    const target = e.target // определяем, где находится курсор
    if (!target) return

    if (target.closest('button')) { // если курсор наведён на ссылку
        el.classList.add('follow-cursor_active') // элементу добавляем активный класс
        target.classList.add('active');// 1080 1140 1202
        target.style.transform = `translateX(${-((target.getBoundingClientRect().right - event.clientX) - target.clientWidth / 2)/2}px) 
                                translateY(${-((target.getBoundingClientRect().bottom - event.clientY) - target.clientHeight / 2)}px)`
    } 
    else if (target.closest('a')) { // если курсор наведён на ссылку
        el.classList.add('follow-cursor_active') // элементу добавляем активный класс
        target.classList.add('active');
        target.style.transform = `translateX(${-((target.getBoundingClientRect().right - event.clientX) - target.clientWidth / 2)/2}px) 
                                translateY(${-((target.getBoundingClientRect().bottom - event.clientY) - target.clientHeight / 2)}px)`
    } 
    else if(target.closest('span') || target.closest('p') || target.closest('h2') || target.closest('h1')){
        el.classList.add('follow-cursor_text')
    }
    else if(target.closest('.photo')){
        el.classList.add('follow-cursor_active')
    }
    else { // иначе
        el.classList.remove('follow-cursor_active')
        el.classList.remove('follow-cursor_text') // удаляем активный класс
        el.classList.remove('follow-cursor_range')
        removeActive(a)
        removeActive(button)
    }

    el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
    el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
  })
}

followCursor()