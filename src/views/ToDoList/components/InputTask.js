

function InputTask(props){
    return(
        <form onSubmit={props.handleAddTask} className="d-flex m-3">
        <input value={props.currTask} onChange={props.handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>        
        <button className="btn btn-outline-success" type="submit">Add</button>
      </form>
    )
}
export default InputTask