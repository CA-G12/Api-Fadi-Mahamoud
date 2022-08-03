const table = document.getElementById("table");
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

function tableRow(obj) {
  let tableRow = document.createElement("tr");
  table.appendChild(tableRow);

  for (let i = 0; i < 7; i++) {
    let tableData = document.createElement("td");
    tableRow.appendChild(tableData);
  }

  let convertButton = document.createElement("a");
  tableRow.children[0].textContent = obj.name;
  tableRow.children[1].textContent = obj.asset_id;
  tableRow.children[2].textContent = obj.price_usd;
  tableRow.children[3].textContent = obj.type_is_crypto  ? "Crypto" : "Fiat";
  tableRow.children[4].textContent = obj.asset_id;
  tableRow.children[5].textContent = obj.asset_id;
  tableRow.children[6].appendChild(convertButton);
  convertButton.classList.add("convert-btn");
  convertButton.textContent = "Convert";
}

//Searcihing for a coin
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let searched = searchBar.value; 
    table.textContent = "";
    apiFunctions.search(searched);
});

function printNotFoundError(search){
  let tableRow = document.createElement("tr");
  table.appendChild(tableRow);
  let tableData = document.createElement("td");
  tableRow.appendChild(tableData);
  tableData.classList.add("error");
  tableData.textContent = `${search} Not Found, Search Again`;

}



//!! The beginning of news DOM function

// ? Function to create tags
const createElements = (tag) => {
  return document.createElement(tag);
};

// ? Function to create news card
const card = (obj) => {
  const container = document.querySelector(".container");
  const parentDiv = createElements("div");
  parentDiv.setAttribute("class", "card");
  const h2 = createElements("h2");
  h2.innerText = obj.title;
  parentDiv.appendChild(h2);

  const descriptionDiv = createElements("div");
  const description = createElements("h3");
  description.innerText = "description:";
  descriptionDiv.appendChild(description);
  const p = createElements("p");
  p.innerText = obj.description;
  descriptionDiv.appendChild(p);
  parentDiv.appendChild(descriptionDiv);

  const parentTagsDiv = createElements("div");
  const tags = createElements("h3");
  tags.innerText = "tags:";
  parentTagsDiv.appendChild(tags);

  const tagsDiv = createElements("div");
  tagsDiv.setAttribute("class", "tags");
  obj.tags.forEach((element) => {
    const p = createElements("p");
    p.innerText = element;
    tagsDiv.appendChild(p);
  });
  parentTagsDiv.appendChild(tagsDiv);
  parentDiv.appendChild(parentTagsDiv);

  const iconsDiv = createElements("div");
  iconsDiv.setAttribute("class", "icons");
  const a = createElements("a");
  a.setAttribute("href", `${obj.url}`);
  a.setAttribute("title", "visit the article");
  const articleIcon = createElements("i");
  articleIcon.setAttribute("class", "fa-solid fa-newspaper");
  a.appendChild(articleIcon);
  iconsDiv.appendChild(a);

  const dateDiv = createElements("div");
  const dateIcon = createElements("i");
  dateIcon.setAttribute("class", "fa-solid fa-clock");
  const span = createElements("span");
  span.innerText = obj.published_at.slice(0, 10);
  dateDiv.appendChild(dateIcon);
  dateDiv.appendChild(span);
  iconsDiv.appendChild(dateDiv);

  parentDiv.appendChild(iconsDiv);
  container.appendChild(parentDiv);
  return parentDiv;
};
//!* The end of news DOM function

//!* The beginning of rendering the news function
const API_URL = "https://api.apilayer.com/financelayer/news";
const API_KEY = "sFQJHy5MrdOHJVDKJJdPPPCWGd2DisQX";
const AUTHORIZATION = "apikey";

// ? looping over an array of objects and displaying data in DOM
const renderNews = (data) => {
  data.forEach((obj) => card(obj));
};

// fetch(API_URL, AUTHORIZATION, API_KEY, renderNews);
//!* The END of rendering news function

//! The END of news page functionally
