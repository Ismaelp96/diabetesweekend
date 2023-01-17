const btnModal = document.querySelectorAll('.js-open-modal')
const btnCloseModal = document.querySelectorAll('.js-close-icon')
const overlayClose = document.querySelectorAll('.js-overlay-close')
const modal = document.querySelectorAll('.js-modal')

btnModal.forEach((open, index) => {
  open.addEventListener('click', () => {
    modal[index].classList.add('active')
  })
})

const modalForEach = () => {
  modal.forEach((element) => {
    element.classList.remove('active')
  })
}

btnCloseModal.forEach((element) => {
  element.onclick = function (e) {
    e.stopPropagation(e)
    modalForEach()
  }
})

overlayClose.forEach((element) => {
  element.onclick = function (e) {
    e.stopPropagation(e)
    modalForEach()
  }
})
