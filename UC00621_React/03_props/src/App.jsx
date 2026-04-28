
import './App.css'

import Msg from "./msg.jsx";


const list =[
    {nome: "Gonçalo", ano: 2026 },
    {nome: "Rita", ano: 2030 },
    {nome: "Maria", ano: 2030 },
]


function App() {


  return (
    <>

        {
            list.map((item) => (
                <Msg nome={ item.nome } ano={ item.ano } />
            )) }

    </>
  )
}

export default App
