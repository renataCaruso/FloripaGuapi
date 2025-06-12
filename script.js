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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});