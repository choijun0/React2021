import React from "react"
import styled from "styled-components"

interface borderBoxProp {
  children?: string; 
  bgColor?:string;
  bdColor?:string;
  bdWidth?:number;
}

const Box = styled.div<borderBoxProp>`
width: 100px;
height: 100px;
background-color: ${props => props.bgColor};
border: solid;
border-width: ${props => props.bdWidth};
border-color: ${props => props.bdColor};
`


const BorderBox = ({bgColor, bdColor, bdWidth}:borderBoxProp) => {
  return <Box bgColor={bgColor??"green"} bdColor={bdColor??"black"} bdWidth={bdWidth??7} />
}

export default BorderBox;