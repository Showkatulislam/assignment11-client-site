import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home'
import Footer from './components/home/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Trips from './components/Trips/Trips';
import Aboutus from './components/Aboutus/Aboutus';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div >
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/trips">
            <Trips></Trips>
          </Route>
          <PrivateRoute path="/aboutus">
          <Aboutus></Aboutus>
          </PrivateRoute>
          <Route path="/login">
             <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
      

    </div>
  );
}

export default App;
