document.addEventListener('DOMContentLoaded', function() {
    function scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();  
        const targetId = this.getAttribute('href').substring(1);  
        scrollToSection(targetId);
      });
    });
});