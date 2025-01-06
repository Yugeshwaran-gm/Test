import React, { useRef, useState } from 'react'

function Namep () {
    let [n, Setn]=useState('');
    let countRef= useRef('');
    // let inc=()=>{
    //     Setcou(cou+1);
    //     countRef.current++;
        console.log("state:",n);
        //console.log("Ref:",countRef.current);    
    
  return (
    <>
    <div>
        <input type='text'
        value={n}
        onChange={(e)=>Setn(e.target.value)}
        placeholder='Enter your name'
        ></input>
        <p>Name: {n}</p>
    </div>
    </>
  )
};
export default Namep;