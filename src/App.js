
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HeaderBar from './components/HeaderBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <HeaderBar/>
        <Route exact path="/" component={Home}/> 
        <Route path="/blog" component={Blog}/>  
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        {/* <Route path="/login" component={Login}/>
        <Route path="/sale" component={Sale}/>
        <Route path="/cart" component={Cart}/>    */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
