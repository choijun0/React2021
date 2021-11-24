import React, {useState, useEffect} from "react"
import styled, {keyframes, ThemeProvider} from "styled-components"


const Father = styled.div`
display : flex;
`

const Box = styled.div`
width : 100px;
height : 100px;
background-color : ${props => props.backColor}
`

//Extending component 
//#.1 Inhertance
const Circle = styled(Box)`
border-radius : 50px;
`
//#.2 Change Tag
const Btn = styled.button`
color : white;
background-color : teal;
`
//#.3 static variable
const SuperInput = styled.input.attrs({required : true , backColor : "orange"})`
background-color : ${props => props.backColor}
`
//#.4 Animation
//from to por persentage
const rotationAnim = keyframes`
0%{
  border-radius : 0px;
  transform : rotate(0deg);
  background-color: tomato;
}
50%{
  border-radius : 100px;
  background-color: green;
}
100%{
  border-radius : 0px;
  transform : rotate(360deg);
  background-color: tomato;
}
`

//&:hover is same with span:hover in parent
const TransformingBox = styled.div`
width : 100px;
height : 100px;
background-color : tomato;
animation : ${rotationAnim} 3s linear infinite;
display: flex;
justify-content : center;
align-items : center;
font-size : 36px;
span {
  cursor : pointer;
  font-size : 36px;
  &:hover{
    font-size : 50px;
  }
  &:active{
    opacity : 0;
  }
}
`

//#.5 Targeting element

const ChildBox = styled.div`
  width : 100px;
  height : 100px;
  background-color : blue;
`
const Box1 = styled.div`
  width : 100px;
  height : 100px;
  background-color : yellow;
`

//Directly targeting a styled-component
const Container = styled.div`
display : flex; 
${ChildBox} {
  background-color : red;
}
div {
  background-color : red;
}
` 

//#.6 Themes

const VirtualApp = styled.div`
width : 500px;
height : 200px;
`

const Space = styled.div`
display : flex;
justify-content : center;
align-items : center;
width : 100%;
height : 100%;
background-color : ${props => props.theme.backgroundColor};
span {
  color : ${props => props.theme.textColor};
}
`


const Toggle = styled.button`
background-color : silver;
color : black;
`
//Write CSS key,value as js object
const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};
const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};


function App() {
  const [mode, setMode] = useState(lightTheme);
  const [toggle, setToggle] = useState(false);
  useEffect(()=> {
    if(toggle){
      setMode(darkTheme)
    }
    else{
      setMode(lightTheme)
    }
  }, [toggle])

  return (
    <>
      <p>- Inhertance</p>
      <Father>
        <Box backColor="red" />
        <Circle backColor="black" />
      </Father>
      <p>- ChangeTag</p>
      <Btn as="a">Button</Btn>
      <p>- Static option of same component</p>
      <SuperInput />
      <SuperInput />
      <SuperInput />
      <p>- Animation</p>
      <TransformingBox >
        <span>A</span>
      </TransformingBox>
      <p>- Targeting element</p>
      <Container>
        <ChildBox>Targeted</ChildBox>
        <Box1 as="button">Not Targeted</Box1>
      </Container>
      <p>- Themes</p>
      <ThemeProvider theme={mode}>
        <VirtualApp>
          <Toggle onClick={() => {
            setToggle(!toggle)
          }}>Change mode</Toggle>
          <Space>
            <span>This is Text</span>
          </Space>
        </VirtualApp>
      </ThemeProvider>
    </>
  )
}

export default App;
