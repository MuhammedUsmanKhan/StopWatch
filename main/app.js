let milisec = document.getElementById(`milisec`);
let sec = document.getElementById(`sec`);
let min = document.getElementById(`min`);
milisec.innerHTML = 0;
sec.innerHTML = 0;
min.innerHTML = 0;
let milsec = 0;
let seconds = 1;
let minutes = 1;
let interval;
const start = () => {


    interval = setInterval(() => {


        milisec.innerHTML = milsec++

        if (milsec == 100) {
            sec.innerHTML = seconds++
            milsec = 0;
        }
        else if (seconds == 60) {
            min.innerHTML = minutes++
            seconds = 0;
        }

    }, 10)

    document.getElementById('start').style.display = 'none'
    document.getElementById('reset').style.cssText = `display:flex; margin-left : 1rem ; margin-right : 2rem`
    document.getElementById('pause').style.cssText = `display:flex; margin-left : 1rem ; margin-right : 2rem`
    document.getElementById('laps').style.cssText = `display:flex; margin-left : 1rem ; margin-right : 2rem`
    // document.getElementById('reset').style.marginRight = '2rem'
}


const reset = () => {



    clearInterval(interval)

    milsec = 0;
    seconds = 0;
    minutes = 0;

    milisec.innerHTML = milsec;
    sec.innerHTML = seconds;
    min.innerHTML = minutes;

    seconds = 1;
    minutes = 1;

    document.getElementById('start').style.display = 'flex'
    document.getElementById('reset').style.display = `none`
    document.getElementById('pause').style.display = `none`
    document.getElementById('laps').style.display = `none`

}


const pause = () => {

    clearInterval(interval)

    document.getElementById('start').style.display = 'flex'
    document.getElementById('reset').style.display = `none`
    document.getElementById('pause').style.display = `none`
    document.getElementById('laps').style.display = `none`

}

let round = 0;
const laps = () => {


    let lapS;
    let lapM = 0;

    if (seconds != 0) {
        lapS = seconds - 1;
    }
    if (minutes != 0) {
        lapM = minutes - 1;
        console.log(minutes)
    }


    clearInterval(interval)


    round++

    const div1 = document.createElement(`div`);

    const div2 = document.createElement(`div`);

    const para = document.createElement(`p`);

    document.getElementById(`block`).appendChild(div1)

    para.style.cssText = `padding : 2rem ; color: white; font-size: 1.25rem; `

    para.innerText = `#${round} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0  ${lapM} : ${lapS} : ${milsec - 1}`

    div1.style.cssText = `display : flex ; justify-content : center ; align-items: center; height: 2.5rem; height: 2.5rem; width: 20rem; border-radius: 9999px; background-color: white; border-width: 2px; `

    div2.style.cssText = `display : flex ; justify-content : center ; align-items: center; height: 2.5rem; height: 2.5rem; width: 20rem; border-radius: 9999px; background-color: black; `


    div1.appendChild(div2)
    
    div2.appendChild(para)

    

    document.getElementById('block').style.cssText = `display: flex ; flex-direction: column; `


}