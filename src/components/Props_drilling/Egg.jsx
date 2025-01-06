import React from 'react'
import Stomach from './Stomach'

// The `name` prop is passed down to the `Stomach` component
const Egg = ({name}) => {
  return (
    <>
    <div>
        <h1>Egg</h1>
    </div>
    <Stomach name={name}/>
    </>
  )
}
export default Egg