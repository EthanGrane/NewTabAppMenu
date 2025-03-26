document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("add-bookmark").addEventListener("click", () => {
        const myModal = new bootstrap.Modal(document.getElementById('addBookmarkModal'));
        myModal.show();
    });

    document.getElementById("addBookmarkForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("bookmark-name").value;
        const url = document.getElementById("bookmark-url").value;
        const icon = document.getElementById("bookmark-icon").value || null;

        if (!name || !url) {
            alert("El nombre y la URL son obligatorios.");
            return;
        }

        const newBookmark = { name, url, icon };
        addBookmarkToJSON(newBookmark);

        document.getElementById("bookmark-name").value = "";
        document.getElementById("bookmark-url").value = "";
        document.getElementById("bookmark-icon").value = "";

        const myModal = bootstrap.Modal.getInstance(document.getElementById('addBookmarkModal'));
        myModal.hide();
    });
});

function addBookmarkToJSON(bookmark) 
{
    if (!bookmark.name || !bookmark.url) {
        alert("Por favor, ingresa tanto el nombre como la URL.");
        return;
    }

    fetch('bookmarks.json')
        .then(response => response.json())
        .then(data => {
            data.apps.push(bookmark);
            const container = document.getElementById('app-container');
            const domain = new URL(bookmark.url).hostname;
            const favicon = bookmark.icon || `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
            const div = document.createElement('div');
            div.className = 'app';
            div.onclick = () => window.location.href = bookmark.url;
            div.innerHTML = `
                <img src="${favicon}" alt="${bookmark.name}">
                <span>${bookmark.name}</span>
            `;
            container.appendChild(div);
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}
