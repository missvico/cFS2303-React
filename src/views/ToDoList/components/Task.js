import 'bootstrap-icons/icons/trash.svg'

function Task({task, handleDelete, taskId, key}){
    return(
        <li key={key}>{task}
            <button onClick={handleDelete} className="btn btn-outline-success" type="submit" id={taskId}>
             Delete
            </button>
        </li>
    )
}

export default Task