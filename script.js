let request = new XMLHttpRequest();
let URL_String = 'https://restcountries.eu/rest/v2/all';

request.open('GET',URL_String,true);
request.onload = function() {
    let data = JSON.parse(this.response);
    data.forEach(data => {
        console.log (data.name);
    });
};
request.send();