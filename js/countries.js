const loadCountries = () =>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => displayCountries(data))
}

const displayCountries = (countries) =>{
  const countriesContainer = document.getElementById('all-countries');
  // console.log(AllCountries)
  // for(const country of countries){
  //   console.log(country)
  // }
  countries.forEach(country =>{
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    countryDiv.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <p>Capital: ${country.capital ? country.capital : 'No Capital'}</p>
    <button onclick="loadCountyDetails('${country.cca2}')">Details<button>
    `;
    countriesContainer.appendChild(countryDiv)
  })

}
const loadCountyDetails = code =>{
const url = `https://restcountries.com/v3.1/alpha/${code}
`;
console.log(url)
fetch(url)
.then(res => res.json())
.then(data => displayCountryDetails(data[0]))
// const displayCountry
}

const displayCountryDetails = country =>{
  console.log(country)
  const countryDetailsContainer = document.getElementById('country-Detials');
  countryDetailsContainer.innerHTML = `
  <h3>Name: ${country.name.common}</h3>
  <img src="${country.flags.png}">
  `;
}


loadCountries()