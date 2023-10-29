const btnshow = document.getElementById('show_menu');
const dropmenu = document.getElementById('menudrop');
const svg = btnshow.querySelector('svg');

btnshow.addEventListener('click', function () {
    dropmenu.classList.toggle('hidden');
    
    if (dropmenu.classList.contains('hidden') ) {
        dropmenu.classList.remove('menu-appear');
        dropmenu.classList.add('menu-disappear');
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
    } else {
        dropmenu.classList.remove('menu-disappear');
        dropmenu.classList.add('menu-appear');
        svg.classList.add('icon-change');
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6L18 18"></path>';
    }
    
    // Retira la clase de cambio de icono después de la animación
    setTimeout(() => {
        svg.classList.remove('icon-change');
    }, 200);
});
