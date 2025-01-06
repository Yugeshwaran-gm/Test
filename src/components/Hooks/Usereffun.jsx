import React, { useRef, useState } from 'react'

function Usereffun () {
    let [cou, Setcou]=useState(0);
    let countRef= useRef(0);
    let inc=()=>{
        Setcou(cou+1);
        countRef.current++;
        console.log("state:",cou);
        console.log("Ref:",countRef.current);    
    }
  return (
    <>
    <div>
         <h1>Count: {countRef.current}</h1>
         <button onClick={inc}>Increment</button>
    </div>
    </>
  )
}

export default Usereffun;