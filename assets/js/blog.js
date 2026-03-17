/* ============================================
   Blog - Load and render posts from posts.json
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;

    fetch('../blog/posts.json')
        .then(r => r.json())
        .then(posts => {
            if (posts.length === 0) {
                grid.innerHTML = '<div class="blog-empty" style="grid-column: 1/-1;"><p>Próximamente: artículos de opinión.</p></div>';
                return;
            }

            // Store all posts for filtering
            window.__blogPosts = posts;
            renderPosts(posts);
            setupFilters(posts);
        })
        .catch(() => {
            grid.innerHTML = '<div class="blog-empty" style="grid-column: 1/-1;"><p>No se pudieron cargar los artículos.</p></div>';
        });
});

function renderPosts(posts) {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;

    grid.innerHTML = posts.map(post => `
        <a href="../${post.url}" class="blog-card" data-category="${post.category}">
            <div class="card">
                <div class="card__image img-placeholder" style="aspect-ratio: 16/10;"></div>
                <div class="card__body">
                    <span class="card__category">${post.category}</span>
                    <h3 class="card__title">${post.title}</h3>
                    <p class="card__text">${post.excerpt}</p>
                    <div class="card__meta">
                        <span>${new Date(post.date).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <span>${post.readTime || '5 min'} de lectura</span>
                    </div>
                </div>
            </div>
        </a>
    `).join('');
}

function setupFilters(allPosts) {
    const buttons = document.querySelectorAll('.filters .filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            if (filter === 'todos') {
                renderPosts(allPosts);
            } else {
                renderPosts(allPosts.filter(p => p.category === filter));
            }
        });
    });
}
