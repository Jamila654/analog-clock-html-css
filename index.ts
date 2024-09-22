let second: number = 0;
let hour: number = 0;
let minute: number = 0;
let d: Date = new Date();

setInterval(() => {
    d = new Date();
    second = d.getSeconds() * 6;
    hour = d.getHours() * 30 + Math.round(minute / 12);
    minute = d.getMinutes() * 6;

    const secondHand = document.getElementById("second-hand");
    const minuteHand = document.getElementById("minute-hand");
    const hourHand = document.getElementById("hour-hand");

    if (secondHand) {
        secondHand.style.transform = `rotate(${second}deg)`;
    }
    if (minuteHand) {
        minuteHand.style.transform = `rotate(${minute}deg)`;
    }
    if (hourHand) {
        hourHand.style.transform = `rotate(${hour}deg)`;
    }
}, 1000);