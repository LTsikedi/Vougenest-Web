const btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
btn.addEventListener('click', () => { const o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o) });
document.querySelectorAll('.filters').forEach(g => {
  const cards = document.querySelectorAll('#' + g.dataset.target + ' .card');
  g.querySelectorAll('button').forEach(b => {
    if (b.dataset.f === 'All') b.classList.add('on');
    b.addEventListener('click', () => {
      g.querySelectorAll('button').forEach(x => x.classList.remove('on')); b.classList.add('on');
      cards.forEach(c => c.classList.toggle('hide', b.dataset.f !== 'All' && c.dataset.brand !== b.dataset.f));
    });
  });
});
const f = document.getElementById('cform');
if (f) f.addEventListener('submit', e => {
  e.preventDefault(); const m = document.getElementById('msg');
  if (!f.n.value || !f.e.value.includes('@') || !f.m.value) { m.textContent = 'Please fill in your name, a valid email and a message.'; return }
  m.textContent = 'Thank you, ' + f.n.value + '. We will reply within two working days.'; f.reset()
});
