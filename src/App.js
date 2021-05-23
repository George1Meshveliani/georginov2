import MainPage from './Pages/MainPage';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Footer from './Pages/Footer';
import Founder from './Pages/Founder';
import Contact from './Pages/Contact';


function App() {
  return (
<div>
  {/* <Header /> */}
  <header>
                    <Router>
                         <nav>
                            <div class="menu-icon">
                                <i class="fa fa-bars fa-2x"></i>
                            </div>
                            <div class="menu">
                                <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/founder">Founder</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                         </nav>
                         <Switch>
                         <Route path="/" exact component={MainPage} />
                        <Route path="/founder"  component={Founder} />
                        <Route path="/contact"  component={Contact} />
                         </Switch>
                         <Footer /> 
                    </Router>
                </header>
</div>
  );
}

export default App;
