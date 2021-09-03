// TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
const Card = (article) => {
  
  //Create Elements
  const cardDiv = document.createElement('div');
  const headlineContent = document.createElement('div');
  const authorContainer = document.createElement('div');
  const authorImgContainer = document.createElement('div');
  const authorImg = document.createElement('img');
  const authorContent = document.createElement('span');

  //Assign Classes, and Content
  cardDiv.classList.add('card');
  headlineContent.classList.add('headline');
  headlineContent.textContent = `${headline}`;
  authorContainer.classList.add('author');
  authorImgContainer.classList.add("img-container");
  authorImg.setAttribute('src', authorPhoto);
  authorContent.textContent = `By ${ authorName}`;
  
  //Append and create structure
  cardDiv.appendChild(headlineContent);
  cardDiv.appendChild(authorContainer);
  authorContainer.appendChild(authorImgContainer);
  authorImgContainer.appendChild(authorImg);
  authorContainer.appendChild(authorContent);
  
  //Create Event Listener
    // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
cardDiv.addEventListener('click', () => {
  console.log(headlineContent);
});


  return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
