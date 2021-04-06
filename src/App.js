import './App.css';
import Nav from './component/Nav' 
import Face from './component/face' 
import Proj from './component/proj' 
import Contact from './component/contact' 
import Footer from './component/footer' 

function App() {
  return (
    <div className="App">
      <Nav/>
      <Face/>
       <Proj/>
     <Contact/>
      <Footer />
    </div>
  );
}

export default App;
