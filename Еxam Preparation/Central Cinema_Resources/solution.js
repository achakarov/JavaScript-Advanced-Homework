function solve() {

    let buttonElement = document.querySelector('#container button');
    let inputElements = Array.from(document.querySelectorAll('#container input'));
    let [name, hall, ticketPrice] = inputElements;
    let moviesUl = document.querySelector('#movies ul');
    let archiveUl = document.querySelector('#archive ul');
    const archive = document.querySelector('#archive');
    let archiveButton = archive.lastElementChild;

    archiveButton.addEventListener('click', (e) => {
        archiveUl.innerHTML = '';
    });

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();
        if (!inputElements.every(x => x.value)) {
            return;
        }
        //Check if ageElement is number
        if (!Number(ticketPrice.value)) {
            return;
        }

        let liElement = document.createElement('li');
        let spanElement = document.createElement('span');
        let strongElement = document.createElement('strong');
        let divElement = document.createElement('div');
        let divStrongElement = document.createElement('strong');
        let divInputElement = document.createElement('input');
        let divButtonElement = document.createElement('button');

        spanElement.innerHTML = `${name.value}`;
        strongElement.innerHTML = `Hall: ${hall.value}`;
        divStrongElement.innerHTML = `${Number(ticketPrice.value).toFixed(2)}`;
        divInputElement.placeholder = 'Tickets Sold';
        divButtonElement.innerHTML = 'Archive';

        name.value = '';
        hall.value = '';
        ticketPrice.value = '';

        divElement.appendChild(divStrongElement);
        divElement.appendChild(divInputElement);
        divElement.appendChild(divButtonElement);

        liElement.appendChild(spanElement);
        liElement.appendChild(strongElement);
        liElement.appendChild(divElement);

        moviesUl.appendChild(liElement);

        divButtonElement.addEventListener('click', (e) => {
            if (!Number(divInputElement.value)) {
                return;
            }

            let archivedLiElement = document.createElement('li');
            let archivedSpanElement = document.createElement('span');
            let archivedStrongElement = document.createElement('strong');
            let archivedButtonElement = document.createElement('button');

            archivedSpanElement.innerHTML = `${spanElement.innerText}`;

            let totalPrice = Number(divInputElement.value) * Number(divStrongElement.innerText);
            archivedStrongElement.innerHTML = `Total amount: ${totalPrice.toFixed(2)}`;
            archivedButtonElement.innerHTML = 'Delete';

            // let parentLiElement = e.currentTarget.parentElement.parentElement;
            e.currentTarget.parentElement.parentElement.remove();

            archivedButtonElement.addEventListener('click', (e) => {
                e.currentTarget.parentElement.remove();
            });

            archivedLiElement.appendChild(archivedSpanElement);
            archivedLiElement.appendChild(archivedStrongElement);
            archivedLiElement.appendChild(archivedButtonElement);
            archiveUl.appendChild(archivedLiElement);
        });
    });
}