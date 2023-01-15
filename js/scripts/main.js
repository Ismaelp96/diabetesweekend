// openlinkjs
const equipeUrl = '/equipe.html'
const buttonEquipe = document.getElementById('equipeLInk')

function openInNewTab(equipeUrl) {
  const blank = window.open(equipeUrl, '_blank')
  blank.focus()
}

buttonEquipe.addEventListener('click', () => {
  openInNewTab(equipeUrl)
})

// menu mobile
const btnMobile = document.getElementById('js-menu-mobile')

const closeBackground = document.querySelector('.js-back-mobile')

function activeBtn() {
  btnMobile.classList.toggle('is-active')
  document.documentElement.classList.toggle('menu-opened')
}

function closeMenu() {
  document.documentElement.classList.remove('menu-opened')
  btnMobile.classList.remove('is-active')
}

closeBackground.addEventListener('click', closeMenu)

btnMobile.addEventListener('click', activeBtn)

//swiper depoimentos
var swiper = new Swiper('.swiper-main-depoimentos', {
  speed: 600,
  navigation: {
    nextEl: '.swiper-main-depoimentos .ctrl-slide .btn-next',
    prevEl: '.swiper-main-depoimentos .ctrl-slide .btn-prev',
  },
  pagination: {
    el: '.swiper-main-depoimentos .ctrl-slide .swiper-pagination',
    clickable: true,
  },
})

// back top

const btnTop = document.getElementById('js-back-top')

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

AOS.init({
  once: true,
  duration: 900,
})
