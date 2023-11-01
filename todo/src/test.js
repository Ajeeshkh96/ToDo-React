import React, {useState} from 'react'

function test() {
  const [state, setState] = useState([
    { "id": "5001", "type": "None" },
    { "id": "5002", "type": "Glazed" },
    { "id": "5005", "type": "Sugar" },
    { "id": "5007", "type": "Powdered Sugar" },
    { "id": "5006", "type": "Chocolate with Sprinkles" },
    { "id": "5003", "type": "Chocolate" },
    { "id": "5004", "type": "Maple" }
  ])

  const handleClick = ()=>{

  }
  return (
    <div>
      <input type='text' onChange={handleClick} ></input>
      
    </div>
  )
}

export default test