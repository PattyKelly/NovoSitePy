// Menu toggle + close on outside click
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('btnToggleNav');
  const nav = document.getElementById('navList');

  if (btn && nav) {
    btn.addEventListener('click', ()=> {
      nav.classList.toggle('show');
    });

    document.addEventListener('click', (e)=> {
      // fecha menu se clicou fora
      if (!nav.contains(e.target) && !btn.contains(e.target)){
        nav.classList.remove('show');
      }
    });
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if (href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
        if (nav) nav.classList.remove('show');
      }
    });
  });

  // contact form demo handler
  const form = document.getElementById('contactForm');
  if (form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Obrigado! Mensagem enviada (simulada). Substitua com backend real quando quiser.');
      form.reset();
    });
  }
});
