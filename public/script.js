ScrollReveal().reveal('.title', {
    delay: 250,       
    duration: 1000, 
    origin: 'left',     
    scale: 0.5,   
    opacity: 0,    
    reset:true,
});
ScrollReveal().reveal('.button', {
    delay: 350,       
    duration: 1000, 
    origin: 'bottom',     
    scale: 0.1,   
    opacity: 0,  
    reset:true,

        reset:true,

});
ScrollReveal().reveal('.pics', {
    delay: 450,     
        reset:true,
    
});
ScrollReveal().reveal('.section', {
    delay:400,
    origin: 'top', 
    distance: '0', 
    duration: 500, 
        reset:true,

});
ScrollReveal().reveal('.caja1', {
    delay:250,
    delay: 350,       
    duration: 1000, 
    origin: 'bottom',     
    scale: 0.1,   
    opacity: 0,  
    reset:true,

});
ScrollReveal().reveal('.caja2', {
    delay:250,
    delay: 350,       
    duration: 1000, 
    origin: 'left',
    distance:0,     
    scale: 0.5,   
    opacity: 0,  
        reset:true,

});
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
        setTimeout(() => {
        svg.classList.remove('icon-change');
    }, 200);
});

function filterItems(category) {
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
function showAll() {
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        item.style.display = 'block';
    });
}
document.getElementById("filtrarBackend").addEventListener("click", function() {
    filterItems("backend");
});

document.getElementById("filtrarFrontend").addEventListener("click", function() {
    filterItems("frontend");
});

document.getElementById("showAll").addEventListener("click", function() {
    showAll();
});
