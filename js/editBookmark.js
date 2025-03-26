document.addEventListener('DOMContentLoaded', () => {
    // Este es el evento para cuando se hace clic en el botón de editar marcadores
    document.getElementById("edit-bookmark").addEventListener("click", function () {
        const editBookmarkGrid = document.getElementById("editBookmarkGrid");
        editBookmarkGrid.innerHTML = ""; // Limpiar el contenido anterior

        // Suponiendo que tienes un arreglo de marcadores, añádelos dinámicamente
        const bookmarks = [
            { name: "Google", url: "https://www.google.com", icon: "https://www.google.com/favicon.ico" },
            { name: "GitHub", url: "https://www.github.com", icon: "https://github.com/favicon.ico" }
            // Aquí agregarías tus datos reales de los marcadores
        ];

        bookmarks.forEach(bookmark => {
            const div = document.createElement("div");
            div.classList.add("bookmark-item");
            div.innerHTML = `
                <img src="${bookmark.icon}" alt="${bookmark.name}" width="30" height="30">
                <h6>${bookmark.name}</h6>
                <button class="btn btn-secondary edit-bookmark-btn" data-bs-toggle="modal" data-bs-target="#editBookmarkInfoModal" data-name="${bookmark.name}" data-url="${bookmark.url}" data-icon="${bookmark.icon}">Editar</button>
            `;
            editBookmarkGrid.appendChild(div);
        });

        // Ahora se añade el evento para cargar el marcador a editar
        document.querySelectorAll('.edit-bookmark-btn').forEach(button => {
            button.addEventListener('click', function () {
                const name = this.getAttribute('data-name');
                const url = this.getAttribute('data-url');
                const icon = this.getAttribute('data-icon');

                // Cargar los datos del marcador en el formulario de edición
                document.getElementById('edit-bookmark-name').value = name;
                document.getElementById('edit-bookmark-url').value = url;
                document.getElementById('edit-bookmark-icon').value = icon;

                // Cuando se guarda, actualiza el marcador
                const editForm = document.getElementById('editBookmarkForm');
                editForm.addEventListener('submit', function (event) {
                    event.preventDefault();
                    const updatedName = document.getElementById('edit-bookmark-name').value;
                    const updatedUrl = document.getElementById('edit-bookmark-url').value;
                    const updatedIcon = document.getElementById('edit-bookmark-icon').value;

                    // Realiza la actualización del marcador
                    updateBookmark(name, updatedName, updatedUrl, updatedIcon);
                });
            });
        });
    });

    function updateBookmark(oldName, newName, newUrl, newIcon) {
        fetch('bookmarks.json')
            .then(response => response.json())
            .then(data => {
                const bookmarkIndex = data.apps.findIndex(b => b.name === oldName);

                if (bookmarkIndex > -1) {
                    // Actualiza los datos del marcador
                    data.apps[bookmarkIndex].name = newName;
                    data.apps[bookmarkIndex].url = newUrl;
                    data.apps[bookmarkIndex].icon = newIcon || data.apps[bookmarkIndex].icon;

                    // Guarda los cambios en el archivo JSON (esto solo es posible en el servidor o con un backend)
                    // Aquí se podría enviar a un servidor o almacenarlo de alguna forma

                    // Actualizar la vista
                    document.querySelectorAll('.app').forEach(app => app.remove());
                    renderBookmarks(data.apps);
                }
            })
            .catch(error => console.error('Error al actualizar el marcador:', error));
    }

    function renderBookmarks(bookmarks) {
        const container = document.getElementById('app-container');
        bookmarks.forEach(bookmark => {
            const div = document.createElement('div');
            div.className = 'app';
            div.onclick = () => window.location.href = bookmark.url;
            const domain = new URL(bookmark.url).hostname;
            const favicon = bookmark.icon || `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
            div.innerHTML = `
                <img src="${favicon}" alt="${bookmark.name}">
                <span>${bookmark.name}</span>
            `;
            container.appendChild(div);
        });
    }
});
