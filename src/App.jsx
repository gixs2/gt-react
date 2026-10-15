
import './App.css'
import Greetings from './componets/Greetings'
import { Header } from './componets/Header'

const user =window.prompt("qual o seu nome?") || "visitante";
function App() {

  return (
    <>
     <Header/ >
     <Greetings nome={user}/>

    </>
  )
}

export default App
