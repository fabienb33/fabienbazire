import '../styles/Scroll.scss'
import Leaves from '../assets/exoticLeaves2.png'
import Particles from './Particles'
import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
import logo from '../assets/fabienbazire.png'


const Hero2 = () => {
    return (
        <div className="hero">
            <section id='accueil'></section>
            <Particles/>
            <Particles/>
            <Particles/>
            <div className="boxHero">
                <Fade top>
                {/* <p className="logoTitle">A</p> */}
                <img src={logo} alt="" className="logoTitle"/>
                <div className="boxSubtitle">
                    <p className="subtitle">Welcome to my portfolio</p>
                </div>
                </Fade>
            
            </div>
            <div className="boxImgHero"><img src={Leaves} alt="" className="imgHero2"/></div>
           

        </div>
    )
}

export default Hero2;