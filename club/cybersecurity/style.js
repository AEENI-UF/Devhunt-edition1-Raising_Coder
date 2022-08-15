let modal = null
const openModal = function(e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}
const closeModal = function(e) {
    if (mdal === null) return
    e.preventDefault()
    modal.style.display = "none"
    modal.setAttribute('aria-hidden', 'true')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
}
const stopPropagation = function(e) {
    e.stopPropagation()
}
document.querySelectorAll('js-modal').forEach(a => {
    a.addEventListener('click', openModal)
})
window.addEventListener('keydown', function(e) {
    if (e.hey === "escape" || e.key === "esc") { closeModal }
})