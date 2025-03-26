document.addEventListener('DOMContentLoaded', () => 
{
    loadBookmarks();
});

function loadBookmarks() {
    getBookmarksArray()
        .then(bookmarks => {
            const container = document.getElementById('app-container');
            bookmarks.forEach(app => {
                const domain = new URL(app.url).hostname;
                const favicon = app.icon || `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
                const div = document.createElement('div');
                div.className = 'app';
                div.onclick = () => window.location.href = app.url;
                div.innerHTML = `
                    <img src="${favicon}" alt="${app.name}">
                    <span>${app.name}</span>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error cargando los marcadores:', error));
}

function getBookmarksArray() {
    return fetch('bookmarks.json')
        .then(response => response.json())
        .then(data => data.apps || [])
        .catch(error => {
            console.error('Error cargando el JSON:', error);
            return [];
        });
}
