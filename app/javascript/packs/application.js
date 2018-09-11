import "bootstrap";

const current = document.location.pathname.split('/')[2];
const tabs = document.querySelectorAll('.tab');

  Array.from(tabs).forEach(function(el) {
   const truncatedHref = el.href.split('/')[4];
   if (truncatedHref === current) {
     el.classList.add('active');
   }
  });
