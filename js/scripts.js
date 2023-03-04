function calculateTimeRemaining(endTime){
    const currentTime = new Date();
    const totalSeconds = (endTime - currentTime)/ 1000;
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600)/ 60);
    const seconds = Math.floor(totalSeconds % 60);
    return{
        totalSeconds,
        days,
        hours,
        minutes, 
        seconds
    };
}

function updateCountdownTimer(){
    const endTime = new Date("March 31, 2023 23:59:59").getTime();
    const {totalSecond, days, hours, minutes, seconds} = calculateTimeRemaining(endTime);
    const countdownTimer = document.getElementById("countdown-timer");
    countdownTimer.innerHTML = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
    if (totalSecond <= 0){
        clearInterval(interval);
        countdownTimer.innerHTML = "Countdown has ended";
    }
}

const interval = setInterval(updateCountdownTimer, 1000);