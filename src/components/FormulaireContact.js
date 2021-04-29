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
    function sayHello() {
        alert('Votre message a bien été envoyé, nous reprendrons contact avec vous prochainement');
      }
    return (
        <div className="containerForm">
            
            <section id='contact'></section>
            
            <div className="contact">
                <Fade left>
                <form action="fabienbazire@live.fr" method="post">
                    <div className="select">
                        <input type="text" className="textInput" placeholder="Nom*" required></input>
                        <input type="text" className="textInput" placeholder="Prénom"></input>
                    </div>

                    <div className="select">
                        <input type="number" className="textInput" placeholder="Numéro de téléphone*" required></input>
                        <input type="email" className="textInput" placeholder="Adresse Email*"></input>
                    </div>

                    <div className="select1">
                        <input type="text" className="textInput1" placeholder="Message"></input>
                    </div>

                    <button onClick={sayHello} className="buttonForm" type="submit">Envoyer</button>
                </form>
                </Fade>
                <Fade right>
                <div className="infos">
                    <p className="titleRea"><a href="www.happyuncle.fr" className="highlight">contact</a></p>
                    <p className="textCV">Vous pouvez me contacter en remplissant le formulaire ou me retrouver sur les réseaux sociaux.
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