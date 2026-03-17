/* ============================================
   Newsletter Form Handler
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const msg = document.getElementById('newsletter-msg');
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;

        btn.textContent = 'Enviando...';
        btn.disabled = true;

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        })
        .then(r => {
            if (r.ok) {
                msg.textContent = 'Te has suscrito correctamente.';
                msg.className = 'newsletter__msg newsletter__msg--success';
                form.reset();
            } else {
                throw new Error();
            }
        })
        .catch(() => {
            msg.textContent = 'Error al suscribirse. Intenta de nuevo.';
            msg.className = 'newsletter__msg newsletter__msg--error';
        })
        .finally(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        });
    });
});
