import Register from './componenets/Auth/Register';
import Login from './componenets/Auth/Login';
// import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Dashboard from './componenets/Dashboard';
import FileList from './componenets/FileList';
import './styles.css';

function App() {
  return (
    // <div className="App">
      <Router>
        <Routes>
          <Route path='/auth/login' element={ <Login/>} />
          <Route path='auth/register' element={<Register />} />
         
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/filelist' element={ <FileList/>} />
        </Routes>
      </Router>
   
    // </div>
  );
}

export default App;
