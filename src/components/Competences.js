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
               <p className="title"><a href="www.happyuncle.fr" className="highlight">Competences</a></p>
               <p className="text">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                   doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                   veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
                   ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                   consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
                   porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
                   velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
                   aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
                   ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                   Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
                   molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
           </div>
           </Fade>
       </div>
    )
};


export default Competences;

