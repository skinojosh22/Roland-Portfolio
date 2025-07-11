// contact.js - Scripts for the contact page

// Basic form validation (HTML5 already does most)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value,
      };

      try {
        const res = await fetch('http://localhost:3000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const result = await res.json();
        alert(result.message);
        if (result.success) this.reset();
      } catch (err) {
        alert('Failed to send message. Check console.');
        console.error(err);
      }
    });
  }
});

// Optionally, you can add more features here (e.g., AJAX submission, input animations, etc.)
