import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = (props) => {
    const {word,number,color,color2} = useParams()
  return (

        <div>

            {
               
                isNaN(word)? 
                <p style={
                    color? 
                   { color: color, backgroundColor : color2}
                    :null
                }>
                    This is a word: {word}
                </p>:
                <p>
                    This is a number: {word}
                </p>
            }
        </div>

  )
}

export default Hello