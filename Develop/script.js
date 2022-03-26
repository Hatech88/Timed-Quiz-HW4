

// timer setup
let StartTimer = 100;


var timerCount = () =>{
    setInterval(()=> {
        let timer = document.getElementById('timer')
        timer.innerHTML = StartTimer;
        StartTimer--;
    },1000)
}