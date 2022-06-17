const labels = document.querySelectorAll('.form-cntrl label')
const btnRegister = document.querySelectorAll('.btn-square')
const modal = document.querySelector('.modal')

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('')
})

btnRegister.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex'
  })
})

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none'
  }
}
window.onscroll = () => {
  modal.classList.add('clear')
}
