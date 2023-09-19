import React from 'react'

const Display = (props) => {
    const {colors} = props 

  return (
    <div>
        {
            colors.map((color,index)=>
            <div key={index} style={{
                width: "200px",backgroundColor:color,height:"200px",
                display:"inline-block", margin:"7px"}}>

            </div>
                )
        }
    </div>
  )
}

export default Display