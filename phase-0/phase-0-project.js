const button = document.querySelector('.example')
const hover = document.querySelector('.hover')

button.addEventListener('click', () => alert('I was clicked!'))

hover.addEventListener('mouseover', function() {
    alert('Get off of me. That pointer is sharp.')
}, {once : true});