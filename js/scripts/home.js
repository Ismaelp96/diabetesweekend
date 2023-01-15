// nav for section
const sectionSmooth = document.querySelectorAll('.js-nav li a')
const btnMobileSection = document.querySelectorAll('.js-ul-mobile li a')
const btnSaibaMais = document.getElementById('js-btn-saiba')

function scrollToSection(event) {
  event.preventDefault()

  const href = event.currentTarget.getAttribute('href')

  const section = document.querySelector(href)

  const initPosition = section.offsetTop

  window.scrollTo({
    top: initPosition - 100,
    behavior: 'smooth',
  })
}

sectionSmooth.forEach((link) => {
  link.addEventListener('click', scrollToSection)

  btnMobileSection.forEach((tag) => {
    tag.addEventListener('click', scrollToSection)
  })
})

// smooth saiba mais..
btnSaibaMais.addEventListener('click', scrollToSection)

//swiper diabetes
var swiper = new Swiper('.swiper-card', {
  speed: 600,
  pagination: {
    el: '.swiper-card .swiper-pagination',
  },
})
