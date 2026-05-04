/* =========================================
   CRAFTY MAMMIES — Quote Form JS
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.quote-form');
  if (!form) return;

  const fileInput = document.querySelector('#logo-upload');
  const fileLabel = document.querySelector('.file-label-text');
  const submitBtn = form.querySelector('.btn-submit');

  // File upload label update
  if (fileInput && fileLabel) {
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      fileLabel.textContent = file ? file.name : 'Click to upload logo (PNG, SVG, PDF)';
    });
  }

  // Simple validation
  function validateForm() {
    let valid = true;
    const required = form.querySelectorAll('[required]');

    required.forEach(field => {
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

    // Email format check
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

  // Submit handler
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // TODO: Replace with your form endpoint (Formspree, Netlify Forms, etc.)
    // const formData = new FormData(form);
    // const res = await fetch('/api/quote', { method: 'POST', body: formData });

    // Simulate success for now
    await new Promise(r => setTimeout(r, 1200));

    const successMsg = document.querySelector('.form-success');
    if (successMsg) {
      form.style.display = 'none';
      successMsg.style.display = 'block';
    }
  });

  // Real-time inline validation on blur
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
