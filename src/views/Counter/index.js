import Button from './components/Button'
import Number from './components/Number'
import {useState} from "react"

function Counter(){
    const [count, setCount] = useState(0)
    //useState --> function que devuelve un arreglo cuyo primer elemento es la referencia al estado local y el segundo es la funcion de actualizacio
    // const stateArray = useState(0)
    // const count = stateArray[0]
    // const setCount = stateArray[1]

    function handleAdd(){
        setCount(count+1)
    }

    function handlSubs(){
        setCount(count-1)
    }

    return(
        <section>
            <h1>Counter</h1>
            <Button handleClick={handlSubs} symbol="-"/>
            <Number number={count}/>
            <Button handleClick={handleAdd} symbol="+"/>
        </section>
    )
}

export default Counter

