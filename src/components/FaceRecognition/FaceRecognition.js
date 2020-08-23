// eslint-disable-next-line no-unused-vars
import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ box, imageURL }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageURL} width='500px' height='auto'></img>
        <div className='bounding_box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  )
}

export default FaceRecognition
