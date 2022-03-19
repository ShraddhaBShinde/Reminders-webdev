
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

//Components
import HomePage from '../src/Components/HomePage/HomePage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import TaskReminder from './Components/TaskReminder/TaskReminder';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/reminder" component={TaskReminder} />
        <Route exact path="/menu" component={Navbar} />
      </Switch>
    </Router>
  );
}

export default App;
