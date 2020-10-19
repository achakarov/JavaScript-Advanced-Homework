function solve() {

    let buttonElement = document.querySelector('#container button');
    let inputElements = Array.from(document.querySelectorAll('#container input'));
    let [nameElement, ageElement, kindElement, ownerElement] = inputElements;
    let adoptionElement = document.querySelector('#adoption ul');
    let adoptedElement = document.querySelector('#adopted ul');

    buttonElement.addEventListener('click', e => {
        e.preventDefault();
        //Check if all fiels have values
        if (!inputElements.every(x => x.value)) {
            return;
        }

        //Check if ageElement is number
        if (!Number(ageElement.value)) {
            return;
        }

        //Create list item 
        let liElement = document.createElement('li');
        let pElement = document.createElement('p');
        let spanElement = document.createElement('span');
        let buttonLi = document.createElement('button');

        pElement.innerHTML = `<strong>${nameElement.value}</strong> is a <strong>${ageElement.value}</strong> year old <strong>${kindElement.value}</strong>`;
        spanElement.innerHTML = `Owner: ${ownerElement.value}`;
        buttonLi.innerHTML = 'Contact with owner';

        liElement.appendChild(pElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(buttonLi);

        //Add li to #adoption
        adoptionElement.appendChild(liElement);

        //Clear all input fields
        nameElement.value = '';
        ageElement.value = '';
        kindElement.value = '';
        ownerElement.value = '';

        // Attach event handler on the new button
        buttonLi.addEventListener('click', e => {
            let parent = e.currentTarget.parentElement;
            e.currentTarget.remove(); // Delete the button from the previous event

            let divElement = document.createElement('div');
            let inputElement = document.createElement('input');
            let takeItButtonElement = document.createElement('button');

            inputElement.setAttribute('placeholder', 'Enter your names');
            takeItButtonElement.textContent = 'Yes! I take it!';

            divElement.appendChild(inputElement);
            divElement.appendChild(takeItButtonElement);
            parent.appendChild(divElement);

            //Add event listener to the new button with function
            takeItButtonElement.addEventListener('click', onTakeItButtonClick);
        });

    });

    function onTakeItButtonClick(e) {
        let parentButtonElement = e.currentTarget.parentElement;
        let petLiElement = parentButtonElement.parentElement;


        let newOwnerNameElement = petLiElement.querySelector('input');
        let ownerNameSpanElement = petLiElement.querySelector('span');

        let newOwnerName = newOwnerNameElement.value;
        if (!newOwnerName) {
            return;
        }
        ownerNameSpanElement.textContent = `New Owner: ${newOwnerName}`;

        adoptedElement.appendChild(petLiElement);
        parentButtonElement.remove();

        let checkedButtonElement = document.createElement('button');
        checkedButtonElement.textContent = 'Checked';

        petLiElement.appendChild(checkedButtonElement);

        checkedButtonElement.addEventListener('click', e => {
            petLiElement.remove();
        });
    }
}