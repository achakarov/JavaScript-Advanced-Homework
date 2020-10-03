function solve() {

  let a = Array.from(document.querySelectorAll("a"));
  let counters = a.map(el => el.nextElementSibling.innerText.split(" ")[1]);
  // let counters = new Array(a.length).fill(0);
  let container = document.querySelector("#page1 >.middled");
  container.addEventListener("click", function (e) {
    let target = e.target;
    let parent = e.target.parentElement;
    let notTargetA = target.localName !== "a";
    let notTargetParentA = parent && parent.localName !== "a";
    if (notTargetA && notTargetParentA) {
      return;
    }
    let targetA = notTargetA ? parent : target;
    let counterIndex = a.indexOf(targetA);
    if (counterIndex === -1) {
      return;
    }
    counters[counterIndex]++;

    let paragraph = targetA.nextElementSibling;
    paragraph.innerText = `visited ${counters[counterIndex]} times`;
  });
}
