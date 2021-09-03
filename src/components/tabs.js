 // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>

import axios from "axios";

  //
const Tabs = (topics) => {
 
//Create Elements
const topicContainer = document.createElement('div');

//assign Class
topicContainer.classList.add('topics');
//Create forEach to iterate over each topic and create elements and append them to the container
topics.forEach( (item) => {
const newItem = document.createElement('div');
newItem.classList.add('tab');
newItem.textContent = item;
topicContainer.appendChild(newItem);
})
console.log(topicContainer);
return topicContainer;
};


 // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
const tabsAppender = (selector) => {
  const entryPointTopic = document.querySelector(`${selector}`);
  axios.get(`http://localhost:5000/api/topics`)
    .then(resp => {
      const topicData = Tabs(resp.data.topics);
      console.log(topicData);
      // const topicDataArray = topicData.keys(topics);
      // console.log(topicDataArray);
      entryPointTopic.appendChild(topicData);
    })
    .catch(err => {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'FAILED TO LOAD DATA';
      entryPointTopic.appendChild(errorMessage);
    });
}

export { Tabs, tabsAppender }
