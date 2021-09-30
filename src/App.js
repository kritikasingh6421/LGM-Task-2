import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import profiles from './pages/profiles';
import body from './pages/main';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={body}/>
        <Route path='/profiles' exact component={profiles}/>
      </Switch>
    </Router>
  );
}
  
export default App;