const fetch = (url, header, key, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText).data);
        cb();
      } else {
        console.log("Error");
      }
    }
  };

  xhr.open("GET", url);
  xhr.setRequestHeader(header, key);
  xhr.send();
};

const url = "https://api.apilayer.com/financelayer/news";

// fetch(url, "apikey", "sFQJHy5MrdOHJVDKJJdPPPCWGd2DisQX", cb);
