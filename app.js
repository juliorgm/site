function loadContent(page) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${page}.html`, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Carregar o conteúdo inicial ao abrir a página
window.onload = function() {
    loadContent('home');
};
