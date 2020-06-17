import React, {useContext} from 'react'
import CounterContext from './CounterContext'



const Child = (props) => {
    let counterValue = useContext(CounterContext)
    console.log(counterValue)
    return (
       
        <div>
            <h1>This is first child (Context API)</h1>
            <h2>This Counter Value is {counterValue[0]}</h2>
            <button onClick={()=>{counterValue[1](counterValue[0]++)}}>Increase Counter</button>
        </div>
        
    )
}

export default Child
