function getArticleGenerator(articles) {

    let contentDiv = document.getElementById('content');

    function showNext() {
        if (articles.length > 0) {
            let div = document.createElement('article');
            div.textContent = articles.shift();
            contentDiv.appendChild(div);
        }
    }
    return showNext;
}
