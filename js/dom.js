const table = document.getElementById('table'); 

let obj= {
    name: "btc", 
    symbol: "btc",
    price: "$1,000,000",
    price_change_24h: "$1,000,000",
    price_change_24h_percentage: "100%",
    market_cap: "$1,000,000",
    total_supply: "$1,000,000"
}

for(let i =0; i < 5; i++){
    tableRow(obj);
}


function tableRow(obj){
    let tableRow = document.createElement("tr");
    table.appendChild(tableRow);

    for(let i = 0; i < 7; i++){
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

