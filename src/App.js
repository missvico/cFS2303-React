import './App.css';
import Landing from './views/Landing'
import Counter from './views/Counter'
import ToDoList from './views/ToDoList'
import StarWarsCharacters from './views/StarWarsCharacters';
import Message from './views/Message';
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <div className="App">
        {/* <Landing username={"Juana"}/> */}
        {/* <Counter/> */}
        {/* <ToDoList/> */}
        {/* <StarWarsCharacters/> */}
        <Message/>
    </div>
  );
}

export default App;
