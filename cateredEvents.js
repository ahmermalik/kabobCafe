//find the amount of catered events based on today's date.
//shish kabob does about 6 catered event per month

let resultsDiv1 = document.getElementById('catered-numbertotal'); //(in the html file do cateredevents.innerhtml= getEventsDone())
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
getEventsDone([6, 5, 4, 7, 4, 8, 6, 5, 4, 7, 3, 5], month);

//events as of 12/31/2018