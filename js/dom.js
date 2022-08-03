const table = document.getElementById("table");

let obj = {
  name: "btc",
  symbol: "btc",
  price: "$1,000,000",
  price_change_24h: "$1,000,000",
  price_change_24h_percentage: "100%",
  market_cap: "$1,000,000",
  total_supply: "$1,000,000",
};

// for (let i = 0; i < 5; i++) {
//   tableRow(obj);
// }

function tableRow(obj) {
  let tableRow = document.createElement("tr");
  table.appendChild(tableRow);

  for (let i = 0; i < 7; i++) {
    let tableData = document.createElement("td");
    tableRow.appendChild(tableData);
  }
  let convertButton = document.createElement("a");
  tableRow.children[0].innerHTML = obj.name;
  tableRow.children[1].innerHTML = obj.symbol;
  tableRow.children[2].innerHTML = obj.price;
  tableRow.children[3].innerHTML = obj.price_change_24h;
  tableRow.children[4].innerHTML = obj.price_change_24h_percentage;
  tableRow.children[5].innerHTML = obj.market_cap;
  tableRow.children[6].appendChild(convertButton);
  convertButton.classList.add("convert-btn");
  convertButton.textContent = "Convert";
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
//!! The end of news DOM function
