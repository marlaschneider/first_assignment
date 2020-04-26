import "./styles.css";

const url = "https://coronavirus-19-api.herokuapp.com/countries";

const ul = document.getElementById("countries");

async function loadData() {
  const response = await fetch(url);
  const countries = await response.json();

  let result = "";

  const countriesSorted = countries.sort(function(a, b) {
    return b.cases - a.cases;
  });

  for (let country of countriesSorted) {
    if (country.country !== "Total:" && country.country !== "") {
      result +=
        "<p class= 'laender'>" +
        country.country +
        "</p>" +
        "<br>" +
        " Cases: " +
        +country.cases +
        " recovered: " +
        country.recovered +
        "<br>" +
        "<br>";
    }
  }
  ul.innerHTML = result;
}

loadData();
