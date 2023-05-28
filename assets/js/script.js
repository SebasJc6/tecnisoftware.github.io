const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Eliminar la clase 'active' de todos los enlaces
        navbarLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Agregar la clase 'active' al enlace clicado
        this.classList.add('active');
    });
});


const toggler = document.getElementById('toggler');
const navbar = document.querySelector('header .navbar');

toggler.addEventListener('change', function() {
  if (this.checked) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});

