function createArticle() {

	let titleElement = document.getElementById("createTitle");
	let contentElement = document.getElementById("createContent");
	let articleSectionElement = document.getElementById("articles");

	let headingElement = document.createElement("h3");
	let paragraphElement = document.createElement("p");
	let articleElement = document.createElement("article");


	if (titleElement.value !== "" && contentElement.value !== "") {

		headingElement.innerHTML = titleElement.value;
		paragraphElement.innerHTML = contentElement.value;
		articleElement.appendChild(headingElement);
		articleElement.appendChild(paragraphElement);
		articleSectionElement.appendChild(articleElement);
	}

	contentElement.value = "";
	titleElement.value = "";
} 