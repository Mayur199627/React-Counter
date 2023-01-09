import React from "react"

export default function Counter(){
    let [num, setNum] = React.useState(0)
    
    function increaseNum(){
        setNum(num+=1)
    }

    function decreaseNum(){
        setNum(num-=1)
    }

    function resetNum(){
        setNum(0)
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increaseNum}>Click To Increase</button>
            <button onClick={decreaseNum}>Click To Decrease</button>
            <button onClick={resetNum}>Click To Reset</button>
            </div>
    )
}