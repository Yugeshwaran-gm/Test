import React, { createContext, useState } from 'react'

export const TriggerButton= createContext();
const Chicken = () => {
    const [color,Setcolor]=useState(true);
  return (
    <>
        <TriggerButton.Provider value={color}>
            <div>Chicken</div>
            <button onClick={() => {
                Setcolor(!color)
            }}> Click me
            </button>
        </TriggerButton.Provider>
        </>
  )
}

export default Chicken;