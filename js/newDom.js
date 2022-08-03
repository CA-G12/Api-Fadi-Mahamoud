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
  