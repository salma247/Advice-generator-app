const id = document.getElementById('advice-id')
const advice = document.getElementById('advice-text')

function adviceSlip() {

    var url = `https://api.adviceslip.com/advice`;
  
    fetch(url)
      .then(response => {
        return response.json();
      })
  
      .then(data => {
        /* created variables to store the data from the api */
        let slipId = data.slip.id;
        let slipAdvice = data.slip.advice;
  
        id.textContent = `Advice #${slipId}`;
        advice.textContent = `${slipAdvice}`;
      })
  
    //error text is thrown if the data fetched cannot be retrieved
    .catch(err => alert("Something not good happened"));
  };

  window.onload = adviceSlip();

  document.getElementById('dice').addEventListener('click', () => adviceSlip());