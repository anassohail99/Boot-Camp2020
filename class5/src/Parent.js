import React from 'react'
import Child from "./Child.js"
import Child2 from './Child2.js'

const Parent = (props) =>{
    return(
        <React.Fragment>
        <Child/>
        <Child2/>
        </React.Fragment>
    )
}
 
export default Parent