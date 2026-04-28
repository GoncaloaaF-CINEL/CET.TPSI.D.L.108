import { useState } from 'react';
import './App.css'

function App() {
const [count, setCount] = useState(0);

  return (
    <>


        <button
            className="counter"
            onClick={
            () => setCount(

                (count) => count+1
            
            )
        }
        >  Adicionar  </button>

        <button
            className="counter"
            onClick={
            () => {
                setCount(

                    (count) => count > 0 ? count - 1 : count

                )
            }
        }
        >  Subtrair  </button>

        <button
            className="counter"
            onClick={
                () => {
                    setCount(
                        (count) =>  count - 1
                    )
                }
            }
            disabled={count <= 0}
        >  Subtrair v2  </button>


        <button
            className="counter"
            onClick={
            () => {setCount(0)}
        }
        >  Reset (colocar count a 0)  </button>


        { count % 2 == 0 && <p> {count} é par </p>

        }
        <h1>Count: { count } </h1>



    </>
  )
}

export default App
