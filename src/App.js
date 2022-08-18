import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Section1 from './components/Mid-section/Section1';
import Section2 from './components/Mid-section2/Section2';

function App() {
  return (
    <div className="App">

   <Navbar/>
   <Header/>
   <Section1/>
  <Section2/>
    </div>
  );
}

export default App;
