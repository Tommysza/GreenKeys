import React from 'react'

function Wave({ color, end }) {

  if (end) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 70"><path fill={color} fill-opacity="1" d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,122.7C840,128,960,160,1080,160C1200,160,1320,128,1380,112L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 85"><path fill={color} fill-opacity="1" d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,122.7C840,128,960,160,1080,160C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
  )
}

export default Wave