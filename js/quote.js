const loadQuote = () => {
  fetch('https://api.kanye.rest/')
  .then(res => res.json())
  .then(data => displayQuote(data))
}

const displayQuote = (quote) =>{
  const quotePractices = document.getElementById('quote-practices');
  quotePractices.innerHTML = quote.quote;
}

loadQuote()