//find the amount of catered events based on today's date.
//shish kabob does about 6 catered event per month

let resultsDiv1 = document.getElementById('catered-numbertotal');
let resultsDiv2 = document.getElementById('catered-numberthisyear');


let todayDate = new Date();
let month = todayDate.getMonth();


getEventsDone = (arr, month) => {
    const eventsDoneLastTwentyFourYears = 1440;
    let totalEventsThisYear = 0;

    for (let i = 0; i < month+1; i++){
      totalEventsThisYear += arr[i];
      
    }
    let numOfEventsTotal = [totalEventsThisYear + eventsDoneLastTwentyFourYears];
    let numOfEventsThisYear = [totalEventsThisYear];
    
    resultsDiv1.innerHTML += numOfEventsTotal;
    resultsDiv2.innerHTML += numOfEventsThisYear;
}
getEventsDone([11, 7, 9, 7, 8, 6, 10, 6, 5, 8, 8, 9], month);

//events as of 12/31/2018