/* =========================================
   CRAFTY MAMMIES — Contact Form JS
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('.btn-submit');

  function validateForm() {
    let valid = true;

    form.querySelectorAll('[required]').forEach(field => {
      const error = field.closest('.form-group')?.querySelector('.form-error');
      if (!field.value.trim()) {
        field.classList.add('error');
        if (error) error.style.display = 'block';
        valid = false;
      } else {
        field.classList.remove('error');
        if (error) error.style.display = 'none';
      }
    });

    const emailField = form.querySelector('[type="email"]');
    if (emailField && emailField.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailField.value)) {
        emailField.classList.add('error');
        const error = emailField.closest('.form-group')?.querySelector('.form-error');
        if (error) { error.textContent = 'Please enter a valid email address'; error.style.display = 'block'; }
        valid = false;
      }
    }

    return valid;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // TODO: wire up to Formspree / Netlify Forms / EmailJS
    // const res = await fetch('https://formspree.io/f/YOUR_ID', {
    //   method: 'POST',
    //   body: new FormData(form),
    //   headers: { 'Accept': 'application/json' }
    // });

    await new Promise(r => setTimeout(r, 1200));

    const successMsg = document.querySelector('.form-success');
    if (successMsg) {
      form.style.display = 'none';
      successMsg.style.display = 'block';
    }
  });

  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('blur', () => {
      const error = field.closest('.form-group')?.querySelector('.form-error');
      if (field.hasAttribute('required') && !field.value.trim()) {
        field.classList.add('error');
        if (error) error.style.display = 'block';
      } else {
        field.classList.remove('error');
        if (error) error.style.display = 'none';
      }
    });
  });

});
