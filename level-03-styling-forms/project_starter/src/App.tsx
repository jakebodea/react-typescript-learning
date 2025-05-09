import { useState } from 'react'
import './App.css'
import Form from './components/Form'


interface UserLogin {
  username: string, 
  email: string, 
  sec: string
}

function App() {
  const [password, setPass] = useState("")
  const [login, setLogin] = useState<UserLogin>({
    username: "", 
    email: "", 
    sec: "" 
  })

  // user input validation funcitons 
  function valUsername(text: string) {
    const pass = text.length >= 3
    setLogin({
      ...login,
      username: pass ? text : "" 
    })
    return {
      pass: pass, 
      msg: pass ? null : "Username must be >= 3 characters" 
    }
  }

  function valEmail(text: string) {
    if (!text.includes("@")) {
      return {pass: false, msg: "Email must include `@`"}
    }
    else if (!(text.endsWith(".com") || text.endsWith(".edu") || text.endsWith(".org") || text.endsWith(".gov"))){
      return {pass: false, msg: "Email must end with `.com`, `.edu`, `.org`, or `.gov`"}
    }
    else {
      setLogin({
        ...login,
        email: text 
      })
      return {pass: true, msg: null}
    }
  }

  function valPass(text: string) {
    if(!text.match(/\d/)) {
      return {pass: false, msg: "Password must include at least one number"}
    }
    else if (!(text.length >= 8)) {
      return {pass: false, msg: "Password must be at least 8 characters long"}
    }
    else {
      setPass(text);
      return {pass: true, msg: null }
    }
  }

  function valConfirmPass(text: string) {
    const pass = text === password
    setLogin({
      ...login, 
      sec: pass ? text : ""
    })
    return {
      pass: pass, 
      msg: pass ? null : "Passwords must match"
    }
  }

  function handleSubmit() {
    if(Object.values(login).every(value => value !== "")){
      console.log(login)
    }
    else{
      console.log(`INCOMPLETE LOGIN:`, login)
    }
  }


  return (
    <>
      <div>
        <h1 className='mb-8'>User Registration Form with Validation</h1>
        <div className="flex flex-col p-8 border rounded-lg shadow-md w-full max-w-md mx-auto">
          <Form items={[
            {title: "username", placeholder:"enter username", hidden: false, validation: valUsername}, 
            {title: "email ", placeholder:"enter email", hidden: false, validation: valEmail}, 
            {title: "password", placeholder:"enter pasword", hidden: true, validation: valPass}, 
            {title: "confirm password", placeholder:"match password", hidden: true, validation: valConfirmPass}
          ]}/>
          <button onClick={() => {handleSubmit()}}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default App
