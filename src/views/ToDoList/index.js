import InputTask from "./components/InputTask"
import {useState} from "react"

function ToDoList(){
    const [currTask, setCurrTask] = useState("")
    const [tasks, setTasks] = useState([])

    function handleChange (event){
        setCurrTask(event.target.value)
    }

    function handleAddTask(e){
        e.preventDefault()
        //const copyArray = tasks.slice()
        // copyArray.push(currTask)
        // setTasks(copyArray)
        console.log(tasks)
        setTasks([...tasks, currTask]) //con spread operator
    }
    return(
        <section>
            <h1>To Do List</h1>
            <InputTask handleAddTask={handleAddTask} handleChange={handleChange}/>
            <ol>
            {tasks.map(task => <li>{task}</li>)}
            </ol>
        </section>
    )
}

export default ToDoList