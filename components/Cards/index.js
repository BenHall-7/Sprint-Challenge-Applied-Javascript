// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(data) {
    let card = document.createElement("div");
    let headline = document.createElement("div");
    let author = document.createElement("div");
    let img_container = document.createElement("div");
    let img = document.createElement("img");
    let by = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    img_container.classList.add("img-container");

    headline.textContent = data.headline;
    img.setAttribute("src", data.authorPhoto);
    by.textContent = data.authorName;

    card.append(headline, author);
    author.append(img_container, by);
    img_container.append(img);
    return card;
}

const categories = ['bootstrap', 'javascript', 'jquery', 'node', 'technology'];

let cards = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(resolved => {
        categories.forEach(cat => {
            cards.append(...resolved.data.articles[cat].map(a => createCard(a)));
        })
    })
    .catch(rejection => console.log(rejection));