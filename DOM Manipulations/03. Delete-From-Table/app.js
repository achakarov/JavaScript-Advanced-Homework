function deleteByEmail() {

    let emailTds = Array.from(document.querySelectorAll("#customers td:last-child")); 
    let emailInput = document.querySelector('input[name="email"]');
    let resultDiv = document.getElementById("result"); 

    resultDiv.innerText = ""; 
    
    let emailInputValue = emailInput.value; 

    if (!emailInputValue) {
        return; 
    }
   let td = emailTds.find(function(td) {
        return td.innerText === emailInputValue
    }); 
    emailInput.value = ""; 
    if (!td) {
        resultDiv.innerText ="Not Found."; 
        return; 
    }
    td.parentElement.remove();
    resultDiv.innerText = "Deleted."
}