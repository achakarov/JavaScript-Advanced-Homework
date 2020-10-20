function solve() {

    let openSection = document.getElementsByTagName('section')[1];
    let inProgressSection = document.getElementsByTagName('section')[2];
    let completeSection = document.getElementsByTagName('section')[3];

    //get input and validate 
    let addButton = document.getElementById('add');
    addButton.addEventListener('click', (event) => {
        event.preventDefault(); //не презарержда страницата - използва се когато има форма
        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let date = document.getElementById('date');

        if (task.value === '' || description.value === '' || date.value === '') {
            return;
        }

        //create article 
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let pDescription = document.createElement('p');
        let pDate = document.createElement('p');
        let divWithButtons = document.createElement('div');
        divWithButtons.classList.add('flex');
        let startBtn = document.createElement('button');
        startBtn.innerText = 'Start';
        startBtn.classList.add('green');
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('red');

        deleteBtn.addEventListener('click', deleteArticle);

        startBtn.addEventListener('click', (event) => {
            let finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.innerText = 'Finish';

            finishBtn.addEventListener('click', (event) => {
                article.lastElementChild.remove();
                completeSection.lastElementChild.appendChild(article);
            });

            article.lastElementChild.children[0].remove();
            article.lastElementChild.appendChild(finishBtn);

            inProgressSection.lastElementChild.appendChild(article);
        });

        //Append 
        h3.innerText = task.value;
        pDescription.innerText = `Description: ${description.value}`;
        pDate.innerText = `Due Date: ${date.value}`;

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        divWithButtons.appendChild(startBtn);
        divWithButtons.appendChild(deleteBtn);
        article.appendChild(divWithButtons);

        openSection.lastElementChild.appendChild(article);

        task.value = '';
        description.value = '';
        date.value = '';
    });

    function deleteArticle(event) {
        event.target.parentElement.parentElement.remove();
    }
}