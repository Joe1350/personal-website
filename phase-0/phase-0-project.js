const button = document.querySelector('.example')
const hover = document.querySelector('.hover')
const popup = document.querySelector('#popup')

button.addEventListener('click', () => alert('Do you just go around clicking everything you were told to click?'))

hover.addEventListener('mouseover', () => popup.style.display = 'block')

hover.addEventListener('mouseout', () => popup.style.display = 'none')