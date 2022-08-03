
function fetch(url, header, key){
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     console.log(JSON.parse(xhr.responseText));
    }
};
xhr.open("GET", url);
xhr.setRequestHeader(header, key)
xhr.send();
}
 