function validate() {
   
   let emailInput= document.getElementById('email'); 
    emailInput.addEventListener('change', function(e) {
        emailInput.classList.remove('error'); 
        let value = emailInput.value; 
        if(value.match(/[a-z-\.]+@[a-z-\.]+\.[a-z]{2,4}/)) {
            return; 
        }
        emailInput.classList.add('error'); 
    }); 
}