import './App.scss';
//import './App.css';
import Navbar from './navigation/Navbar'
import Landing from './views/Landing'
import Counter from './views/Counter'
import ToDoList from './views/ToDoList'
import StarWarsCharacters from './views/StarWarsCharacters';
import Message from './views/Message';
//import 'bootstrap/dist/css/bootstrap.css';
import Accordion from './views/Accordion';


function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
        <Landing username={"Victoria"}/>
        <Counter/>
        <ToDoList/>
        <StarWarsCharacters/>
        <Message/>
        <Accordion/>
    </div>
    </>
  );
}

export default App;
