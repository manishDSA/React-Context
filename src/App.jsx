import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import ContextProvider from './context/ContexProvider'
function App() {
 

  return (
    //here we access the context store
    <ContextProvider>
      <h1>React IN Context Api</h1>
      <Login/>
      <Profile/>
    </ContextProvider>
  )
}

export default App
