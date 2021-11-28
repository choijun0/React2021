import React, {useState} from "react"

const ProtectedForm = () => {
  //state 타입을 제한할 수 있다. <string|number> 이렇게하면 중복가능
  const [value, setValue] = useState<string>("");
  //React JS를 사용할때 event를 특정하는 방법
  //Input이 Form안에있음으로 React.FomEvent로 분류
  //React.nameOfEvnet<element which make event happen>
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {currentTarget : { value }} = event;
    setValue(value);
  }
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    //어떤타입인지 미리알고있기에 test전에 오타를 발견 가능 밑으 함수를 잘못쳐도 원래 js는 test전까지 오류를 찾지못함
    event.preventDefault(); 
    console.log("Submit! ",value)
  }
  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
    </form>
  )
}

export default ProtectedForm