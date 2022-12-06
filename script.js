const SPENDINGS = [
    {
      "day": "sun",
      "amount": 25.48
    },
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    }
]

//Variables
const bars = document.querySelectorAll('.bar');
//variables for daily spendings
const sunSpending = document.getElementById('sun-spending');
const monSpending = document.getElementById('mon-spending');
const tueSpending = document.getElementById('tue-spending');
const wedSpending = document.getElementById('wed-spending');
const thuSpending = document.getElementById('thu-spending');
const friSpending = document.getElementById('fri-spending');
const satSpending = document.getElementById('sat-spending');

//accessing each bar
bars.forEach(bar =>{
     
  //adding event listener - click
    bar.addEventListener('click', ()=> {

      //lighten the backgroundColor of the bar clicked
      bar.style.backgroundColor= 'hsl(11, 63%, 75%)';
        
      //conditional statement for the displaying the amount spent per day for the last seven days
        if(bar.classList.contains('sun')){
          sunSpending.innerText= '$'+ SPENDINGS[0].amount;
          sunSpending.classList.add('percent')
        }
        else if(bar.classList.contains('mon')){
          monSpending.innerText = '$'+ SPENDINGS[1].amount;
          monSpending.classList.add('percent')
        }
        else if(bar.classList.contains('tue')){
          tueSpending.innerText = '$'+ SPENDINGS[2].amount;
          tueSpending.classList.add('percent')
        }
        else if(bar.classList.contains('wed')){
          wedSpending.innerText = '$'+ SPENDINGS[3].amount;
          wedSpending.classList.add('percent')
        }
        else if(bar.classList.contains('thu')){
          thuSpending.innerText = '$'+ SPENDINGS[4].amount;
          thuSpending.classList.add('percent')
        }
        else if(bar.classList.contains('fri')){
          friSpending.innerText = '$'+ SPENDINGS[5].amount;
          friSpending.classList.add('percent')
        }
        else {
          satSpending.innerText = '$'+ SPENDINGS[6].amount;
          satSpending.classList.add('percent')
        }
    })
});


//making the backgroundColor of the current day's bar looks different from others.
let day = new Date().getDay();
let colorOfTheDay = bars[day];
colorOfTheDay.style.backgroundColor = 'hsl(186, 34%, 60%)';
//adding event listener for the current day's bar to lighten the backgroundColor once clicked
bars[day].addEventListener('click', ()=> {
  bars[day].style.backgroundColor= 'hsl(186, 18%, 69%)';
})
