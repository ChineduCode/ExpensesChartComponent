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
      "amount": 43.28,
    }
]


//Variables
const bars = document.querySelectorAll('.bar');
//variables for daily spendings
const sunSpending = document.querySelector('.sun-spending');
const monSpending = document.querySelector('.mon-spending');
const tueSpending = document.querySelector('.tue-spending');
const wedSpending = document.querySelector('.wed-spending');
const thuSpending = document.querySelector('.thu-spending');
const friSpending = document.querySelector('.fri-spending');
const satSpending = document.querySelector('.sat-spending');

//accessing each bar
bars.forEach(bar =>{
     
  //adding event listener - click
    bar.addEventListener('mouseover', ()=> {

      //lighten the backgroundColor of the bar clicked
      bar.parentElement.classList.add('active')
        
      //conditional statement for the displaying the amount spent per day for the last seven days
        if(bar.classList.contains('sun')){
          sunSpending.innerText= '$'+ SPENDINGS[0].amount;
        }
        else if(bar.classList.contains('mon')){
          monSpending.innerText = '$'+ SPENDINGS[1].amount;
        }
        else if(bar.classList.contains('tue')){
          tueSpending.innerText = '$'+ SPENDINGS[2].amount;
        }
        else if(bar.classList.contains('wed')){
          wedSpending.innerText = '$'+ SPENDINGS[3].amount;
        }
        else if(bar.classList.contains('thu')){
          thuSpending.innerText = '$'+ SPENDINGS[4].amount;
        }
        else if(bar.classList.contains('fri')){
          friSpending.innerText = '$'+ SPENDINGS[5].amount;
        }
        else {
          satSpending.innerText = '$'+ SPENDINGS[6].amount;
        }
    })

    bar.addEventListener('mouseout', ()=>{
      bar.parentElement.classList.remove('active')
    })
});


//making the backgroundColor of the current day's bar looks different from others.
const day = new Date().getDay();
const colorOfTheDay = bars[day];
colorOfTheDay.style.backgroundColor = 'hsl(186, 34%, 60%)';