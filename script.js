let secHand = document.getElementById('sec-hand');
let hourHand = document.getElementById('hour-hand')
let minHand = document.getElementById('min-hand')
function setDate(){
    let now = new Date();

// ----------sec-time---------------
    let sec = now.getSeconds();
    let secDegree = (sec / 60) * 360 + 90
    // console.log(sec)
    secHand.style.transform=`rotate(${secDegree}deg)`


// -----------min-time--------------

    let min = now.getMinutes();
    let minDegree = (min /60) * 360 +90;
    minHand.style.transform = `rotate(${minDegree}deg)`
    // console.log(min)
// --------------hour-time----------------

    let hour = now.getHours()
    let hourDegree = (hour / 12) * 360 + 90
    hourHand.style.transform= `rotate(${hourDegree}deg)`;
    // console.log(hour)
}

setInterval(setDate,1000)