/* ============================================
   Newsletter Form Handler (FormSubmit.co)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    // Check if returning from successful subscription
    if (window.location.search.includes('subscribed=1')) {
        const msg = document.getElementById('newsletter-msg');
        if (msg) {
            msg.textContent = '¡Te has suscrito correctamente!';
            msg.className = 'newsletter__msg newsletter__msg--success';
        }
        // Clean URL
        history.replaceState(null, '', window.location.pathname);
    }

    form.addEventListener('submit', function(e) {
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        // Let the form submit normally to FormSubmit.co
    });
});
