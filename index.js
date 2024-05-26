
// Hour 
// if hour is between 6am and 12pm: Good morning!
// if it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evenning! 

let hour = 20; 

if (hour >= 6 && hour < 12) 
    console.log('Good Morning');
else if (hour >= 12 && hour < 18) 
    console.log('Good afternnon');
else 
    console.log('Good evening');
