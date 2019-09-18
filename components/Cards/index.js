// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(function (response) {
    // handle success
    console.log(response);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .finally(function () {
    // always executed
    });
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

const cardsContainer = document.querySelector('.cards-container');

function cardCreator() {
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = 'HEADLINE PLACEHOLDER TEXT';
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-contianer');
    author.appendChild(imageContainer);

    const authorImage = document.createElement('img');
    authorImage.src = 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    imageContainer.appendChild(authorImage);

    const authorName = document.createElement('span');
    authorName.textContent = 'By ' + 'AUTHOR NAME PLACEHOLDER';
    author.appendChild(authorName);

    cardsContainer.appendChild(card);
}

cardCreator();



// Create a card for each of the articles and add the card to the DOM.
