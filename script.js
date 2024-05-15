let [centiseconds, seconds, minutes, hours] = [0,0,0,0];
let displayTime = document.getElementById("display");
let timer = null;
let lapcount = 1;
let isRunning = false;

function stopwatch(){
    centiseconds++;
    if(centiseconds==100)
    {   centiseconds=0;
        seconds++;
        if(seconds==60){
            seconds = 0;
            minutes++;
            if(minutes==60){
                minutes = 0;
                hours++;
            }
        }
    }
    formatTime(seconds, minutes, hours);
}


function formatTime(seconds, minutes, hours) {
    let h = hours < 10 ? "0"+hours : hours;
    let m = minutes < 10 ? "0"+minutes : minutes;
    let s = seconds < 10 ? "0"+seconds : seconds;
    let cs = centiseconds < 10 ? "0"+centiseconds : centiseconds;
    display.innerHTML = h + ":" + m + ":" + s + "." + cs;
}


function startstop() {
    if(!isRunning) {
        isRunning = true;
        document.getElementById("startstop").textContent = "Stop";
        if(timer!==null) {
            clearInterval(timer);
        }
        timer = setInterval(stopwatch,10);
    }
    else {
        isRunning = false;
        document.getElementById("startstop").textContent = "Start";
        clearInterval(timer);
    }
}


function reset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    display.innerHTML = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    lapcount = 1;
    
    isRunning=false;
    document.getElementById("startstop").textContent = "Start";
}


function lap() {
    if(isRunning){
        let lapTime = display.innerHTML;
        let lapItem = document.createElement("li");
        lapItem.textContent = "Lap " + lapcount + ": " + lapTime;
        document.getElementById("laps").appendChild(lapItem);
        lapcount++;
    }
}