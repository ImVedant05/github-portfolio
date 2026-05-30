  // Tab switching
  const btns = document.querySelectorAll('.nav-btn');
  const secs = document.querySelectorAll('section');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      secs.forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('sec-' + btn.dataset.sec).classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });