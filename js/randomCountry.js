const loadRandomCountry = () =>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => disPlayRandomCounty(data))
}
const disPlayRandomCounty = (countries) =>{
  const randomCountriesContainer = document.getElementById('all-country');
  countries.forEach(randomCountry =>{
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country')
    
    countryDiv.innerHTML = `
    <h3>Name: ${randomCountry.name.common}</h3>
    <img src="${randomCountry.flags.png}" alt="">
    <p>Population: ${randomCountry.population}</p>
    <button onclick="loadRandomCountryDetails('${randomCountry.cca2}')">Details<button>
    `;

    randomCountriesContainer.appendChild(countryDiv)
  })
};

const loadRandomCountryDetails = (code)=>{
  const url = `https://restcountries.com/v3.1/alpha/${code}
  `;
  fetch(url)
  .then(res => res.json())
  .then(data => showCountryDetails(data [0]))
}

  const showCountryDetails = randomCountry =>{
   console.log(randomCountry)
  const showCountryDetailsContainer = document.getElementById('country-details');
  showCountryDetailsContainer.innerHTML = ` 
  <h3>Name: ${randomCountry.name.common}</h3>
  <img src="${randomCountry.flags.png}" alt="">
  `

}

loadRandomCountry()