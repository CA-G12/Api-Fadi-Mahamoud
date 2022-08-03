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



