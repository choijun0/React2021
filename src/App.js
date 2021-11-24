import React from "react"
import styled from "styled-components"

const Box = styled.div`
width : 100px;
height : 100px;
background-color : ${props => props.backColor}
`

function App() {
  return (
    <>
      <Box backColor={"red"} />
      <Box backColor={"black"} />
    </>
  )
}

export default App;
