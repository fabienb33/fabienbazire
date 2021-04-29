import '../styles/Formulaire.scss'
import CV from '../assets/CV-Fabien-Bazire.pdf'
import cv from "../assets/cv.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import bottom from "../assets/exoticLeavesBottom.png";
import Particules from "./Particles";
import Fade from 'react-reveal/Fade';


const Formulaire = () => {
    
    return (
        <div className="containerForm">
            
            <section id='contact'></section>
            
            <div className="contact">
               
                <Fade right>
                <div className="infos">
                    <p className="titleRea highlight">contact</p>
                    <p className="textCV">Vous pouvez me contacter par mail à <a href="mailto:fabienbazire@live.fr" className="mailto">fabienbazire@live.fr</a> ou me retrouver sur les réseaux sociaux.
                    Vous pouvez également télécharger mon Curriculum Vitae au format pdf en cliquant sur l'icône "CV".</p>
                    
                    <div className="boxIcon">
                        <a href={CV} title="Pdf" target="blank"><img src={cv} className="icons" alt=""/></a>
                        <a href="https://github.com/fabienb33" title="Pdf" target="blank"><img src={github} className="icons" alt=""/></a>
                        <a href="https://www.linkedin.com/in/fabien-bazire/" title="Pdf" target="blank"><img src={linkedin} className="icons" alt=""/></a>
                        <a href="https://www.instagram.com/fabien_woodworking/" title="Pdf" target="blank"><img src={insta} className="icons" alt=""/></a>
                    </div>
                </div>
                </Fade>
            </div>
            <div className="boxInfos"><img src={bottom} className="bgInfos" alt=""/></div>
            <div className="particules"><Particules/></div>
        </div>
    )
}

export default Formulaire;