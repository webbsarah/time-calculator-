var startDateTime = new Date(1970,0,1,1,59,59,0); // YYYY (M-1) D H m s ms (start time and date from DB)
var startStamp = startDateTime.getTime();

const newDate = new Date();
var newStamp = newDate.getTime();

var timer; // for storing the interval (to stop or pause later if needed)

function updateClock() {
    const newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((newStamp-startStamp)/1000);
    
    var years = Math.floor(diff/(24*60*60*365));
    diff = diff-(years*24*60*60*365);

    var day = Math.floor(diff/(24*60*60)); /* though I hope she won't be working for consecutive days :) */
    diff = diff-(day*24*60*60);

    var hour = Math.floor(diff/(60*60));
    diff = diff-(hour*60*60);

    var minute = Math.floor(diff/(60));
    diff = diff-(minute*60);

    var second = diff;

    var millisecond = Math.floor(diff*1000);
    diff = diff-(millisecond*1000);

    
document.getElementById("millis").innerHTML = millisecond;
document.getElementById("seconds").innerHTML = second;
document.getElementById("minutes").innerHTML = minute;
document.getElementById("hours").innerHTML = hour;
document.getElementById("days").innerHTML = day;
document.getElementById("years").innerHTML = years;







}

timer = setInterval(updateClock, 1000);
      
