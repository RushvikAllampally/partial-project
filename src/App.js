import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar1';
import Courosols from './components/Courosols';
import Footer1 from './components/Footer1';
import Content1 from './components/Content1';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Content1/>
      <Courosols/> 
      <Team/>
      <Footer1/>         
    </div>
  );
}

export default App;
