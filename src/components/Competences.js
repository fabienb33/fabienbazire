import '../styles/Competences.scss'
import ps from '../assets/ps.png'
import ai from '../assets/ai.png'
import id from '../assets/id.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import sass from '../assets/sass.png'
import figma from '../assets/figma.png'
import react from '../assets/react.png'
import rn from '../assets/rn.png'
import wp from '../assets/wp.png'
import vs from '../assets/vs.png'
import Fade from 'react-reveal/Fade';




const Competences = () => {
    return (
       <div className="containerCompetence">
           <section id='who'></section>
           <Fade left>
           <div className="box1">
               <img src={ps} alt="Photoshop" className="img" title="Photoshop"/>
               <img src={ai} alt="Illustrator" className="img" title="Illustrator"/>
               <img src={id} alt="InDesign" className="img" title="InDesign"/>
               <img src={figma} alt="Figma" className="img" title="Figma"/>
               
               <img src={html} alt="HTML" className="img" title="HTML"/>
               <img src={js} alt="JavaScript" className="img" title="JavaScript"/>
               <img src={css} alt="CSS" className="img" title="CSS"/>
               <img src={sass} alt="SASS" className="img" title="SASS"/>
               
               <img src={react} alt="React" className="img" title="React"/>
               <img src={rn} alt="React Native" className="img" title="React Native"/>
               <img src={wp} alt="WordPress" className="img" title="WordPress"/>
               <img src={vs} alt="Visual Studio" className="img" title="Visual Studio"/>
           </div>
           </Fade>
           <Fade right>
           <div className="box2">
               <p className="title"><a href="www.happyuncle.fr" className="highlight">Qui suis-je</a></p>
               <p className="text">Diplômé en infographie, webdesign et en intégration (BAC+2) depuis 2008, 
               je me suis spécialisé depuis dans la création et l'intégration de maquettes web UI/UX (Frontend). 
               Passionné de nature, je me suis formé à différents langage (HTML, CSS, SASS, JAVASCRIPT...) 
               et techniques (responsive design, animation, wordpress…). J'utilise aujourd'hui le framework React 
               pour développer mes sites en JSX (Vanilla JS) et ainsi créer des Applications Web. 
               Début 2021, j'ai également participé à un bootcamp au Reacteur (Paris) afin d'accroitre mes compétences 
               et ainsi continuer ma veille technique ce qui m’a notamment permis d’apprendre les base du Javascript 
               et du React Native (application web). Mon travail s’étend aujourd’hui de la création d’identité de marque 
               à l’intégration complète de sites web ou d’applications mobiles.</p>
           </div>
           </Fade>
       </div>
    )
};


export default Competences;

