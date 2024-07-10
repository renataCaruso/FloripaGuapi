document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('.navbar .nav-item a');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default link behavior

            // Remove 'active' class from all nav links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // Get the target nav link and add 'active' class
            const targetId = this.getAttribute('data-target');
            const targetNavLink = document.querySelector(`.navbar-nav .nav-link[data-target="${targetId}"]`);
            targetNavLink.classList.add('active');
        });
    });
});

// pg port
function redirecionarPort() {

    window.location.href = "portfolio.html";
   
}

function redirecionarProd() {

    window.location.href = "produtos.html";
   
}

function redirecionarCont() {

    window.location.href = "contato.html";
   
}

function redirecionarHome() {

    window.location.href = "index.html";
   
}
