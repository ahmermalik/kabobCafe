//find the amount of catered events based on today's date.
//shish kabob does about 6 catered event per month

let resultsDiv = document.getElementById('catered-number'); //(in the html file do cateredevents.innerhtml= getEventsDone())

let todayDate = new Date();
let month = todayDate.getMonth();


getEventsDone = (arr, month) => {
    const eventsDoneLastTwentyFourYears = 1440;
    let totalEventsThisYear = 0;

    for (let i = 0; i < month+1; i++){
      totalEventsThisYear += arr[i];
      
    }
    let numOfEvents = [totalEventsThisYear + eventsDoneLastTwentyFourYears, totalEventsThisYear];
    
    resultsDiv.innerHTML += numOfEvents;
}
console.log(getEventsDone([6, 5, 4, 7, 4, 8, 6, 5, 4, 7, 3, 5], month));

//events as of 12/30/2018