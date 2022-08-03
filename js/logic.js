
let urlCoin = "https://rest.coinapi.io/v1/assets";
fetch(urlCoin, "X-CoinAPI-Key", "22DC1199-6F06-432F-8A36-08A0BEB8DA79", cb);

function cb(data){
    let newData = data.filter((el, i) => i < 17000 && el.type_is_crypto === 0); 
    localStorage.setItem("data", JSON.stringify(newData));
    apiFunctions.listDefualt(newData);
}

const apiFunctions = {

    listDefualt: (data) => {
        let dataClone = cloneData(data);
        let index = 1; 
        while(index < 10) tableRow(dataClone[index++]);
    }, 

    search: function(coin) {
        let data = JSON.parse(localStorage.getItem("data"));
        let dataClone = cloneData(data);
        for(let el in dataClone) {
          if(dataClone[el].asset_id === coin){
            tableRow(dataClone[el]);
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


