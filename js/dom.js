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
  let firstInput = document.createElement('input');
  let secondInput = document.createElement('input');

  tableRow.children[0].textContent = obj.name;
  tableRow.children[1].textContent = obj.asset_id;
  tableRow.children[2].textContent = parseFloat(obj.price_usd).toFixed(5);
  tableRow.children[3].textContent = obj.type_is_crypto ? "Crypto" : "Fiat";
  firstInput.classList.add("table-input");
  secondInput.classList.add("table-input");
  firstInput.setAttribute('id', 'firstInput');
  secondInput.setAttribute('id', 'secondInput');
  tableRow.children[4].appendChild(firstInput); 
  tableRow.children[5].appendChild(secondInput);
  tableRow.children[6].appendChild(convertButton);
  convertButton.classList.add("convert-btn");
  convertButton.textContent = "Calculate";
  convertButton.addEventListener('click', (e)=>{
    if(firstInput.value === ""){
      firstInput.value = parseFloat(secondInput.value/obj.price_usd).toFixed(2);
    } else {
      secondInput.value = parseFloat(firstInput.value*obj.price_usd).toFixed(2);
    }
  });
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



let urlCoin = "https://rest.coinapi.io/v1/assets";
fetch(urlCoin, "X-CoinAPI-Key", "A4D523A5-3072-426D-B4AF-5D530DCAD4EA", cb);



