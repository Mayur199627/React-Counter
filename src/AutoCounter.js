import React from "react"



export default function AutoCounter(){
    let [count, setCount] = React.useState(0)

    function Start(){
    let interval = setInterval(()=>{
        setCount(count+=1)
        },1000)

        document.querySelector(".start_interval").setAttribute('disabled',true)
        
        let pauseButton = document.querySelector(".pause_interval");

        pauseButton.addEventListener("click", ()=>{
            clearInterval(interval)
            document.querySelector(".start_interval").removeAttribute('disabled')
        })

        let resetBtn = document.querySelector(".reset_interval");
        resetBtn.addEventListener("click",()=>{
            clearInterval(interval)
            setCount(0)
            document.querySelector(".start_interval").removeAttribute('disabled')
        })
    }
    
    // function Stop(){
    //     return (
    //         interval.clearInterval()        
    //     )
    // }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Start} className="start_interval">Start</button>
            <button className="pause_interval">Stop</button>
            <button className="reset_interval">Reset</button>
        </div>
    )
}