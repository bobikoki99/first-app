import React from 'react';
import './App.css';
import Nav from './Components/Nav.js';
import About from './Components/About.js';
import Counter from './Components/Counter.js';
import Home from './Components/Home.js';
import BookShop from './Components/BookShop.js'
import Book from './Components/Book.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {

  /*const [ data, setData ] = useState('');
  const [ weight, setWeight ] = useState(0);
  const [ color, setColor] = useState(randomcolor());

  function clickHandeler () 
  {
    setData(function () {
      if(Users.hasOwnProperty(document.getElementById('input').value)){

        const tempDate = Users[document.getElementById('input').value].Weight[0][0];

        return tempDate;
      }
      return 'Nqma takova chave';
    })
    setWeight(function () {
      if(Users.hasOwnProperty(document.getElementById('input').value)){

        const tempWeight = Users[document.getElementById('input').value].Weight[1][0];

        return tempWeight;
      }
      return '';
    })
  }

  useEffect(() => {
    setColor(randomcolor())
    return (() => console.log(45))
  },[data]);*/

  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/bookshop' exact component={BookShop} />
      <Route path='/about' component={About}/>
      <Route path='/counter' component={Counter}/>
      <Route path='/bookshop/:id' component={Book} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
