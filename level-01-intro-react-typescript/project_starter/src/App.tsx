import { useState } from 'react'
import Card from './components/Card'
import UserInputField from './components/UserInputField'
import './App.css'

function App() {
  const [recipient, setRecipient] = useState("John Smith")
  const [content, setContent] = useState("Yo whaddup")

  return (
    <>
      <div>
        <div className='userInputs'>
          <UserInputField 
            title='Recipient Name'
            input={recipient}
            onChange={setRecipient}
          />
          <UserInputField 
            title='Content'
            input={content}
            onChange={setContent}
          />
        </div>
        <Card recipient={recipient} content={content} />
      </div>
    </>
  )
}

export default App
