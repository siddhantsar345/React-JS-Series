import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// lecture 4 start here
function MyApp(){
  return(
    <div>
      <h1>Custom App ! chai</h1>
    </div>
  )
}
const username="Chai aur code"
const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',target:'_blank'},
    'click me to visit google',
    username
)
const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  reactElement
  anotherElement
  <App/>
  <MyApp/>
  </>
)
