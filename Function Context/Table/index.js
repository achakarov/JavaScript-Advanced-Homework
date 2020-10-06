function solve() {

   let trs = document.getElementsByTagName('tr');
   let lastClicked;

   [...trs].slice(1).forEach(row => {
      row.addEventListener('click', (e) => {

         let element = e.target.parentNode.style;
         if (element.backgroundColor == '' || element.backgroundColor == undefined) {
            element.backgroundColor = '#413f5e';

            if (lastClicked) {
               lastClicked.backgroundColor = ''; 
            }
           
         } else {
            element.backgroundColor = '';
         }

         lastClicked = element; 
      });

   });

}
