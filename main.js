const opening= '7 Jan 2023';
const daysel=document.getElementById('days');
const hoursel=document.getElementById('hours');
const minutesel=document.getElementById('minutes');
const secondsel=document.getElementById('seconds');
function countdown(){
    const openingDate=new Date(opening);
    const currentDate=new Date();
    const totalSeconds= Math.floor((openingDate-currentDate)/1000);
    const days=Math.floor(totalSeconds/3600/24);
    const hours= Math.floor(totalSeconds/3600)%24;
    const minutes= Math.floor(totalSeconds/60)%60;
    const seconds= Math.floor(totalSeconds)%60;
    daysel.innerHTML=days;
    hoursel.innerHTML=hours;
    minutesel.innerHTML=minutes;
    secondsel.innerHTML=seconds;
}

setInterval((countdown), 1000);

