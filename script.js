const panels = document.querySelectorAll('.panel');

function removerActiveClasses() {
    panels.forEach((e) => {
        e.classList.remove('active');
    })
}

panels.forEach((e) => {
    e.addEventListener('mouseover', () => {
        removerActiveClasses();
        e.classList.add('active')
    })
})

