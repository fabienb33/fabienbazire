import './App.css';
import './styles/Header.scss'
import './styles/Hero2.scss'
import Hero from './components/Hero2'
import Header from './components/Header'
import Footer from './components/Footer'
import Competences from './components/Competences'
import Realisations from './components/Realisations'
import Webdesign from './components/Webdesign'
import Flower from './components/Flower';
import Flower2 from './components/Flower2';
import Formulaire from "./components/Formulaire";
import Logos from "./components/Logos";


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Competences/>
        <Flower2/>
        <Webdesign/>
        <Flower/>
        <Logos/>
        <Realisations/>
        <Formulaire/>
        <Footer/>
    </div>
  );
}

export default App;
