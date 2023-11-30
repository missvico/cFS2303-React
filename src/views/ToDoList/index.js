import InputTask from "./components/InputTask"
import Task from './components/Task'
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
        setTasks([...tasks, currTask]) //con spread operator
        setCurrTask("")
    }

    function handleDelete (event){
        console.log(event.target.id)
        const filteredTasks = tasks.filter((task, index)=>{
            return event.target.id != index
        })
        setTasks(filteredTasks)
    }
    return(
        <section>
            <h1>To Do List</h1>
            <InputTask handleAddTask={handleAddTask} handleChange={handleChange} currTask={currTask}/>
            <ol>
            {tasks.map((task, index) => <Task key={index} task={task} handleDelete={handleDelete} taskId={index} />)}
            </ol>
        </section>
    )
}

export default ToDoList