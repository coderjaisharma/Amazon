
import './App.css';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
       
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>

          </Route>
          <Route path="/" exact>
            <Header/>
          <Home/>
          </Route>
          <Route path="/Cart">this is Cart</Route>
        </Switch>
        
      </Router>
      
      </header>
    </div>
  );
}

export default App;
