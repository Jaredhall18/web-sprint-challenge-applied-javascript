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
import axios from "axios";
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
  headlineContent.textContent = `${article.headline}`;
  authorContainer.classList.add('author');
  authorImgContainer.classList.add("img-container");
  authorImg.setAttribute('src', article.authorPhoto);
  authorContent.textContent = `By ${ article.authorName}`;
  
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
// TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const cardAppender = (selector) => {
  const entryPointTopic = document.querySelector(`${selector}`);
  axios.get(`http://localhost:5000/api/articles`)
    .then(resp => {
      //this is an object with key value pairs, so I need to get the Values out of them
      const articleData = resp.data.articles;
      const articleKey = Object.keys(resp.data.articles);
      console.log(articleData);
      console.log(articleKey);
      const newArticles = [];
      articleKey.forEach(item => {
        const sortedArticles = articles[item]
        Array.prototype.push.apply(newArticles, sortedArticles)
      })
      console.log(newArticles);
      newArticles.forEach(article => {
        const newCard = Card(article)
        entryPointTopic.appendChild(newCard);
      })
      
    })
    .catch(err => {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'FAILED TO LOAD DATA';
      entryPointTopic.appendChild(errorMessage);
    });
}

export { Card, cardAppender }
