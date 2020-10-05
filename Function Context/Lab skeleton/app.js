function solve() {
    let ulElement = document.querySelectorAll('#dropdown-ul')[0];
    let button = document.querySelectorAll('#dropdown')[0];
    button.addEventListener('click', () => {

        if (ulElement.style.display = '') {
            ulElement.style.display = 'block';
        } else {
            ulElement.style.display = '';
        }

    });

}