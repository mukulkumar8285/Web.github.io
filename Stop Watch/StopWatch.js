
    let timer; // declare the timer variable

    let Startbtn = document.getElementById("Start");
    let Stopbtn = document.getElementById("Stop");
    let Restartbtn = document.getElementById("Restart");
    
    let count = 0;
    let Sec = 0;
    let Min = 0;
    let Hr = 0;
  
    Startbtn.addEventListener("click", function () {
        Startbtn.style.background = "green";
        Stopbtn.style.background = "#F82A74";
        Restartbtn.style.background = "#F82A74";
        timer = true;
        stopWatch();
    });
    
    Stopbtn.addEventListener("click", function () {
        Stopbtn.style.background = "green";
        Startbtn.style.background = "#F82A74";
        Restartbtn.style.background = "#F82A74";
        timer = false;
    });
    
    Restartbtn.addEventListener("click", function () {
        Startbtn.style.background = "#F82A74";
        Stopbtn.style.background = "#F82A74";
        Restartbtn.style.background = "green" ;
        timer = false;
        count = 0;
        Sec = 0;
        Min = 0;
        Hr = 0;
        document.getElementById("Hr").innerHTML = "00";
        document.getElementById("Min").innerHTML = "00";
        document.getElementById("Sec").innerHTML = "00";
        document.getElementById("count").innerHTML = "00";
    });
    
    function stopWatch() {
        if (timer) {
            count++;
            if (count == 100) {
                Sec++;
                count = 0;
            }
    
            if (Sec == 60) {
                Min++;
                Sec = 0;
            }
            if (Min == 60) {
                Hr--;
                Min = 0;
                Sec = 0;
            }
        }
    
        let countstr = count;
        let hrString = Hr;
        let MinString = Min;
        let SecString = Sec;
    
        if (Hr < 10) {
            hrString = "0" + hrString;
        }
        if (Min < 10) {
            MinString = "0" + MinString;
        }
        if (Sec < 10) {
            SecString = "0" + SecString;
        }
        if (count < 10) {
            countstr = "0" + countstr;
        }
    
        document.getElementById("count").innerHTML = countstr;
        document.getElementById("Min").innerHTML = MinString;
        document.getElementById("Sec").innerHTML = SecString;
        document.getElementById("Hr").innerHTML = hrString;
    
        setTimeout(stopWatch, 10);
    }