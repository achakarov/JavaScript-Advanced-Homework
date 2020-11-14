function solve() {

    //50/100

    let formControlDivs = document.getElementsByClassName("form-control");
    let buttonAdd = formControlDivs[3].firstElementChild;

    let lectureNameElement = formControlDivs[0].lastElementChild;
    let dateElement = formControlDivs[1].lastElementChild;
    let moduleElement = formControlDivs[2].lastElementChild;
    let trainingModulesElement = document.getElementsByClassName('modules')[0];

    buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();
        if (lectureNameElement.value == '' || dateElement.value == '' || moduleElement.value == 'Select module') {
            return;
        }

        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let buttonDelete = document.createElement('button');
        //Check if Module already exists
        h3.innerHTML = `${moduleElement.value.toUpperCase()}-MODULE`;

        let output = '';
        let date = dateElement.value.slice(0, 10);
        let time = (dateElement.value.slice(11));
        let formattedDate = date.split('-').join('/');
        output = `${formattedDate} - ${time}`;

        h4.innerHTML = `${lectureNameElement.value} - ${output}`;
        buttonDelete.innerHTML = 'Del';

        div.classList.add('module');
        li.classList.add('flex');
        buttonDelete.classList.add('red');

        li.appendChild(h4);
        li.appendChild(buttonDelete);
        ul.appendChild(li);
        div.appendChild(h3);
        div.appendChild(ul);
        trainingModulesElement.appendChild(div);

        buttonDelete.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove();


        });
    })
}