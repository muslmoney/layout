import { useState, useId } from "react"
import { useRandomId } from "./hooks/random-id"
// useState состояние самого объекта
// useId получение уникального Id 
const App = () => {
    const [State, setState] = useState("hello")
    //button.addEventListener('click' ()=>{})

    const [Inc, setInc] = useState(0)
    const userId = useId()
    const {Symbols} = useRandomId
    return (
        <div>
            <h2>
                {State} | {Inc}; useId: {userId}; {Symbols}
            </h2>
            <button onClick={() => setState("reactjs")}>click</button>
            {/* <button onClick={() => setInc(prev => prev + 1  )} >inc</button>
      <button onClick={() => setInc(prev => prev - 1  )} >dec</button> */}
            <button onClick={() => setInc((prev) => prev + 1)}>inc</button>
            <button
                onClick={() =>
                    setInc((prev) => {
                        return prev > 0 ? prev - 1 : 0
                    })
                }
            >
                dec
            </button>
        </div>
    )
}

export default App
