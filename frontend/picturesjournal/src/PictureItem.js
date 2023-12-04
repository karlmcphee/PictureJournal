import React from 'react'

const PictureItem = (pictureName) => {
    
  return (
    <div>
        <img src={process.env.REACT_APP_AWS_BUCKET+pictureName.pictureName}></img></div>
  )
}

export default PictureItem