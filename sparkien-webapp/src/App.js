
import './App.css';

//Components
import Navbar from '../src/Components/Navbar/Navbar';
import HomePage from '../src/Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import TaskDashboard from './Components/TaskDashboard/TaskDashboard';

function App() {
  return (
    <>
    <Navbar />
    <HomePage path ="/" exact component={HomePage}/>
    <SignUpPage path ="/signup/:id" exact component={SignUpPage}/>
    <TaskDashboard />
    </>
  );
}

export default App;
