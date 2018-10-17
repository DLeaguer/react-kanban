import React from 'react'

function Sample(props) {
  console.log('props', props)
  return (
    <div><br/>MY FAKE SAMPLE COMPONENT HERE
      <br/><br/>
      <a href="https://github.com/DLeaguer/react-kanban"><img src={require('../assets/example.png')} alt="example board"/></a>
      <br/><br/>
      <a href="https://github.com/DLeaguer/react-kanban"><img src={require('../assets/board.jpg')} alt="kanban board"/></a>
      <br/><br/>
    </div>
  )
}

export default Sample