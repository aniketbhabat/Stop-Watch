let [second ,minute,hours,milli] = [0,0,0,0];
let displayTime = document.getElementById("time");
 let timer = null;

function stopwatch(){
    milli ++;
    if(milli==100){
        milli=0;
        second++;
    if(second==60){
        second=0;
        minute++;
        if(minute==60){
            minute=0;
            hours ++;
        }
    }
}
    let h = hours < 10 ? "0" + hours:hours;
    let m = minute < 10 ? "0" + minute:minute;
    let s = second < 10 ? "0" + second:second;
    let mill = milli <10 ? "0" + milli:milli;

    displayTime.innerHTML = h +":"+ m +":" + s +":"+mill;
}

function watchstart(){
    if(timer !== null){
        clearInterval(timer);
    }
   timer = setInterval(stopwatch,10);
}
function watchstop(){
    clearInterval(timer);
}

function watchreset(){
    clearInterval(timer);
    [second ,minute ,hours,milli] = [0,0,0,0];
    displayTime.innerHTML = "00:00:00";
}

