
// Speed limit = 70
// 5 -> 1 point 
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(80);

function checkSpeed(speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;
    const points = Math.floor((speed - speedLimit)/kmPerPoint);
    
    if (points <= 0) console.log('Ok');
    else if (points >= 12) {
        console.log('License suspended');
    } else {
        console.log('Points', points);
    }
}
