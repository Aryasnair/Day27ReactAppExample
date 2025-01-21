import React from 'react'
import Home from './components/Home'
import Form from './components/Form'
import Count from './components/Count'

const App = () => {
  return (
    <div>
      {/* <Home/> */}
      <Form user={{name:'Miya',email:'miya@gmail.com',phonenumber:9847916330,address:'Abcdef hijklmnop'}}/>
      {/* <Count/> */}
    </div>
  )
}

export default App