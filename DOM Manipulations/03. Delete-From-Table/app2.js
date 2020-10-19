function deleteByEmail() {
//Ivaylo Papazov
    let inputElement = document.querySelector('input[name="email"]');
    let enteredEmail = inputElement.value; 
    let customersEmails = document.querySelectorAll('#customers tbody td:nth-of-type(2)'); 
    let isDeleted = false; 

    for (const customerElement of customersEmails) {
        if (customerElement.textContent === enteredEmail){
            customerElement.parentElement.remove();
            isDeleted = true; 
        }
    }

    if (!isDeleted){
        let resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Not found'; 
    }
}

