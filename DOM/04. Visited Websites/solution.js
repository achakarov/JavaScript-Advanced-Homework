function solve() {

  let buttons = document.getElementsByClassName("link-1"); 
  buttons.forEach(x => {
    x.addEventListener("click", function(e){
      let value = e.target.value;
      
    });
  }); 
  let paragraphsElements = document.getElementsByTagName("p"); 
  let [visited, number, times] = paragraphsElements.split(" ");
  number = Number(number); 

  buttons.addEventListener("click", function(e){
    let value = Number(number.value); 
    number.value = ++ value; 
  });
}