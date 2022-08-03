
let urlCoin = "https://rest.coinapi.io/v1/assets";
fetch(urlCoin, "X-CoinAPI-Key", "A4D523A5-3072-426D-B4AF-5D530DCAD4EA", cb);

function cb(data){
    let newData = data.filter((el, i) => i < 17000 && el.type_is_crypto === 0); 
    localStorage.setItem("data", JSON.stringify(newData));
    apiFunctions.listDefualt(newData);
}

const apiFunctions = {

    listDefualt: (data) => {
        let dataClone = cloneData(data);
        let index = 2; 
        while(index < 11) tableRow(dataClone[index++]);
    }, 

    search: function(coin) {
        let data = JSON.parse(localStorage.getItem("data"));
        let dataClone = cloneData(data);
        for(let el in dataClone) {
          if(dataClone[el].asset_id === coin.toUpperCase()){
            tableRow(dataClone[el], el);
            return;
          } 
        }

        printNotFoundError(coin);

    },  

}

// Clone Data Function //
function cloneData(data) {
    return JSON.parse(JSON.stringify(data));
}


