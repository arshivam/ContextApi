import React from 'react'
import { useContext } from 'react'
import {counterContext} from '../context/context.js'

function Component1() {
    //Get props or values from countercontext using context api
   const value = useContext(counterContext);
  return (
    <div>{value.count}</div>
  )
}

export default Component1