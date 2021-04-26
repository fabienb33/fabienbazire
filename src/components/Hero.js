import '../styles/Scroll.scss'
import Leaves from '../assets/exoticLeaves.png'
import Particles from './Particles'
import Fade from 'react-reveal/Fade';


const Hero = () => {
    return (
        <div className="hero">
            <section id='accueil'></section>
            <Particles/>
            <div className="boxHero">
                <Fade top>
                <p className="logoTitle">A</p>
                <div className="boxSubtitle">
                    <p className="subtitle">Welcome to my portfolio</p>
                </div>
                </Fade>
            
            </div>
            <div className="boxImgHero"><img src={Leaves} alt="" className="imgHero"/></div>
           

        </div>
    )
}

export default Hero;