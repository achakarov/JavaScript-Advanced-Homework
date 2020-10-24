function solve() {

   const author = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');
   const createButton = document.getElementsByClassName('create')[0];
   let articleSection = document.getElementsByTagName('section')[1];
   let archiveUl = document.querySelector('section.archive-section > ul');

   createButton.addEventListener('click', (e) => {
      e.preventDefault();
      let newArticle = document.createElement('article');
      let h1Element = document.createElement('h1')
      let pCategory = document.createElement('p');
      let pCategoryStrong = document.createElement('strong');
      let pCreator = document.createElement('p');
      let pCreatorStrong = document.createElement('strong');
      let pContent = document.createElement('p');
      let divWithButtons = document.createElement('div');
      let buttonDelete = document.createElement('button');
      let archiveButton = document.createElement('button');

      h1Element.innerText = title.value;
      pCategory.innerText = 'Category:';
      pCategoryStrong.innerText = category.value;
      pCreator.innerText = 'Creator:';
      pCreatorStrong.innerText = author.value;
      pContent.innerText = content.value;
      buttonDelete.innerHTML = 'Delete';
      divWithButtons.classList.add('buttons');
      buttonDelete.classList.add('btn', 'delete');
      archiveButton.innerHTML = 'Archive';
      archiveButton.classList.add('btn', 'archive');

      divWithButtons.appendChild(buttonDelete);
      divWithButtons.appendChild(archiveButton);
      pCategory.appendChild(pCategoryStrong);
      pCreator.appendChild(pCreatorStrong);
      newArticle.appendChild(h1Element);
      newArticle.appendChild(pCategory);
      newArticle.appendChild(pCreator);
      newArticle.appendChild(pContent);
      newArticle.appendChild(divWithButtons);
      articleSection.appendChild(newArticle);

      archiveButton.addEventListener('click', (e) => {
         let liElement = document.createElement('li');
         liElement.innerHTML = h1Element.innerText;
         archiveUl.appendChild(liElement);

         let sortedLi = Array.from(archiveUl.getElementsByTagName('li')).sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));

         while (archiveUl.firstChild) {
            archiveUl.removeChild(archiveUl.firstChild);
         }

         for (const element of sortedLi) {
            archiveUl.appendChild(element);
         }

         e.target.parentElement.parentElement.remove();
      });

      buttonDelete.addEventListener('click', (e) => {
         e.target.parentElement.parentElement.remove();
      });
   });

}
