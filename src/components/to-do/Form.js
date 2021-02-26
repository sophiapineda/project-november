import React, {useState} from "react"

import {addToDo} from "../../../store/ramToDo"

function Form() {
    const [inputValue, setInputValue] = useState(``)
  return (<div>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <div className={`btn btn-primary`} onClick={() => addToDo({title: inputValue})}>Add To-Do</div>
  </div>)
}

export default Form
