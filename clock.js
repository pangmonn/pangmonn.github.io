const showClock = document.querySelector("#clock");
setInterval(getTime,1000);

function getTime() {
    const day = new Date();
    const hour = day.getHours();
    const min = day.getMinutes();
    const sec = day.getSeconds();
    showClock.innerText = `${hour<10 ? `0${hour}` : hour} : ${min<10 ? `0${min}` : min} : ${sec<10 ? `0${sec}` : sec}`;
}
