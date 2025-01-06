
import React, { useEffect, useState } from 'react'

const Hookfun = () => {
    let [count,SetCount]= useState(0);
    let [name, setName] = useState('');
    let [a, Seta] = useState('');
    let [b, Setb] = useState('');
  return (
    <div>
      <div>
        <button onClick={() => SetCount(count + 1)}>++</button>
        <button onClick={() => SetCount(count - 1)}>--</button>
        <h1>Count: {count}</h1>
      </div>
      <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <p>Your name is: {name}</p>
        </div>
        <div>
        </div>
        <div>
            <input type='number'
            value={a}
            onChange={(e)=>Seta(e.target.value)}>
            </input>
            <h1>a: {a}</h1>
        </div>
        <div>
            <input type='number'
            value={b}
            onChange={(e)=>Setb(e.target.value)}>
            </input>
            <h1>b: {b}</h1>
        <div>
            <button type="submit" onClick={() => {
            SetCount(0);
            setName('');
            Seta('');
            Setb('');
            }}>Submit</button>
        </div>
    <div>
        <h1>Sum of a and b: {Number(a) + Number(b)}</h1>
    </div>
      </div> 
</div>
  );
}
export default Hookfun;