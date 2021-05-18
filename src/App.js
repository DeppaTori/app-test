import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posting from './pages/Posting';
import Login from './pages/Login';




function App() {
  return (

    <Router>
   
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/posting" component={Posting} />
    </div>
    
    </Router>
   
  );
}

export default App;
