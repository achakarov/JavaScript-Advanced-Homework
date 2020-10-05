// function deleteByEmail() {

//     let emailTds = Array.from(document.querySelectorAll("#customers td:last-child")); 
//     let emailInput = document.querySelector('input[name="email"]');
//     let resultDiv = document.getElementById("result"); 

//     resultDiv.innerText = ""; 
    
//     let emailInputValue = emailInput.value; 

//     if (!emailInputValue) {
//         return; 
//     }
//    let td = emailTds.find(function(td) {
//         return td.innerText === emailInputValue
//     }); 
//     emailInput.value = ""; 
//     if (!td) {
//         resultDiv.innerText ="Not Found."; 
//         return; 
//     }
//     td.parentElement.remove();
//     resultDiv.innerText = "Deleted."
// }



function deleteByEmail() {
    let input = document.getElementsByName('email')[0].value.trim();
    let trs = document.getElementsByTagName('tr');
    let trToBeDeleted = '';
    let resultElement = document.getElementById('result');

    for (let tr of trs) {
        let td = tr.children[1];
        if(td.textContent === input){
            trToBeDeleted = tr;
            resultElement.innerText = 'Deleted.';
            trToBeDeleted.parentNode.removeChild(trToBeDeleted);
            return;
        }
    }

   resultElement.textContent = 'Not found.'
}