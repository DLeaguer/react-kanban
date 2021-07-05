import React from 'react'

function About(props) {
  console.log('props', props)
  return (
    <div><br/>MY FAKE ABOUT COMPONENT HERE
      <br/><br/>
      {/* <img src={require('./puppy.gif')} alt="puppy gif"/> */}
      <a href="https://giphy.com/gifs/puppy-black-and-white-2FhASosZtLUPe" target='blank'><img src={require('../assets/puppy.gif')} alt="puppy gif" /></a>
    </div>
  )
}

export default About