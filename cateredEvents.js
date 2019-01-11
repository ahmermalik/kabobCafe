//find the amount of catered events based on today's date.
//shish kabob does about 6 catered event per month

let todayDate = new Date();
let month = todayDate.getMonth();


getEventsDone = (arr, month) => {
    const eventsDoneLastTwentyFourYears = 1440;
    let totalEventsThisYear = 0;

    for (let i = 0; i < month+1; i++){
      totalEventsThisYear += arr[i];
      
    }
    return [totalEventsThisYear + eventsDoneLastTwentyFourYears, totalEventsThisYear];
}
console.log(getEventsDone([6, 5, 4, 7, 4, 8, 6, 5, 4, 7, 3, 5], 11));

//events as of 12/30/2018