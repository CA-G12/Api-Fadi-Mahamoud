const fetch = (url, header, key, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        cb(data);
      } else {
        console.log("Error");
      }
    }
  };

  xhr.open("GET", url);
  xhr.setRequestHeader(header, key);
  xhr.send();
};



