import React from 'react'

const Button = ( { initialValue, label="Click Count: " } ) => {
  const counter = React.useRef( initialValue )

  const [ number, setNumber ] = React.useState( initialValue )

  const btnClick  = () => {
    let ref = counter.current++
    setNumber( ref )
  }

  return (
    <div style={{ display: 'flex', justifyContent: "center" }}>
        <button onClick={btnClick} style={{ backgroundColor: 'blue', color:'white' }}>
          {`${label} ${number}`}
        </button>
    </div>
  )
}

export default function Counter() {
  return (
    <div style={{ display: 'flex',flexDirection: 'column', padding: '20px', alignItems: "center", justifyContent: "center" }}>
        <Button  initialValue={0} />
        <Button  initialValue={4} />
    </div>
  )
}