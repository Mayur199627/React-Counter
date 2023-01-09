import React from "react"


export default function CounterOM(){
    let [digit,setDigit] = React.useState(0);
    
    React.useEffect(()=>{
        let interval = setInterval(()=>{
            setDigit((digit) => digit + 1);
        },1000);

        document.querySelector('.stop_btn').addEventListener('click',()=>clearInterval(interval))

    },[]);

    return (
        <div>
            <p>{digit}</p>
            <button className="stop_btn">Stop</button>
            
        </div>
    )
}