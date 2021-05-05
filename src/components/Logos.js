import '../styles/Logos.scss'
import img01 from '../assets/logos/eyeka.jpg'
import img02 from '../assets/logos/revanove.jpg'
import img03 from '../assets/logos/wahine-way.jpg'
import img04 from '../assets/logos/sylmaps.png'
import img05 from '../assets/logos/oceansfishing.jpg'
import img06 from '../assets/logos/lawebbisterie.png'
import img07 from '../assets/logos/buzzz.png'
import img08 from '../assets/logos/beauty-weeks.png'
import img09 from '../assets/logos/bushcraft.png'
import img10 from '../assets/logos/triviacar.png'
import img11 from '../assets/logos/adeva.png'
import img12 from '../assets/logos/abilis.png'
import Fade from 'react-reveal/Fade';


// import Fade from 'react-reveal/Fade';

const Logos = () => {

    
    return (
        <div className="containerLogos">
        <section id='logos'></section>
        
            <div className="boxTop">

                 <div className="boxLeft hideImg">
                    <Fade left delay={400}>
                    <div className="gridContainer">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">eyeka</p>
                                <div className="boxSupImg"><a href={img01} target="_blank" rel="noopener noreferrer"><img src={img01} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img01} alt="" className="imgGrid"/>
                    </div>
                    </Fade>
                    <Fade left delay={200}>
                    <div className="gridContainer">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">revanove</p>
                                <div className="boxSupImg"><a href={img02} target="_blank" rel="noopener noreferrer"><img src={img02} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img02} alt="" className="imgGrid"/>
                    </div>
                    </Fade>
                </div>
                
                <Fade left>
                <div className="boxRight">
                    <p className="titleRea"><a href="www.happyuncle.fr" className="highlight">logos</a></p>
                    <p className="text">Dans cette section, vous trouvez une sélection de mes réalisations de logos et typographies (cliquez sur la vignette pour agrandire l'image).</p>
                </div>
                </Fade>
                </div>

                <div className="boxBottom">
                    
                    <Fade left delay={1000}>
                    <div className="gridContainer hideImg">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">eyeka</p>
                                <div className="boxSupImg"><a href={img01} target="_blank" rel="noopener noreferrer"><img src={img01} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img01} alt="" className="imgGrid"/>
                    </div>

                    <Fade left delay={800}></Fade>
                    <div className="gridContainer hideImg">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">revanove</p>
                                <div className="boxSupImg"><a href={img02} target="_blank" rel="noopener noreferrer"><img src={img02} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img02} alt="" className="imgGrid"/>
                    </div>
                    </Fade>

                    <Fade left delay={1000}>
                    <div className="gridContainer">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">wahine way</p>
                                <div className="boxSupImg"><a href={img03} target="_blank" rel="noopener noreferrer"><img src={img03} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img03} alt="" className="imgGrid"/>
                    </div>
                    </Fade>

                    <Fade left delay={800}>
                    <div className="gridContainer">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">sylmaps</p>
                                <div className="boxSupImg"><a href={img04} target="_blank" rel="noopener noreferrer"><img src={img04} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img04} alt="" className="imgGrid"/>
                    </div>
                    </Fade>

                    <Fade left delay={600}>
                    <div className="gridContainer">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">oceans fishing</p>
                                <div className="boxSupImg"><a href={img05} target="_blank" rel="noopener noreferrer"><img src={img05} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img05} alt="" className="imgGrid"/>
                    </div>
                    </Fade>

                    <Fade left delay={400}>
                    <div className="gridContainer">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">la webbisterie</p>
                                <div className="boxSupImg"><a href={img06} target="_blank" rel="noopener noreferrer"><img src={img06} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img06} alt="" className="imgGrid"/>
                    </div>
                    </Fade>

                    <Fade left delay={200}>
                    <div className="gridContainer">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">agence buzz</p>
                                <div className="boxSupImg"><a href={img07} target="_blank" rel="noopener noreferrer"><img src={img07} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img07} alt="" className="imgGrid"/>
                    </div>
                    </Fade>

                    <Fade left delay={1000}>
                    <div className="gridContainer">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">beauty weeks</p>
                                <div className="boxSupImg"><a href={img08} target="_blank" rel="noopener noreferrer"><img src={img08} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img08} alt="" className="imgGrid"/>
                    </div>
                    </Fade>

                    <Fade left delay={800}>
                    <div className="gridContainer">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">bushcraft</p>
                                <div className="boxSupImg"><a href={img09} target="_blank" rel="noopener noreferrer"><img src={img09} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img09} alt="" className="imgGrid"/>
                    </div>
                    </Fade>

                    <Fade left delay={600}>
                    <div className="gridContainer">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">triviacar</p>
                                <div className="boxSupImg"><a href={img10} target="_blank" rel="noopener noreferrer"><img src={img10} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img10} alt="" className="imgGrid"/>
                    </div>
                    </Fade>
                    
                    <Fade left delay={400}>
                    <div className="gridContainer">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">adeva</p>
                                <div className="boxSupImg"><a href={img11} target="_blank" rel="noopener noreferrer"><img src={img11} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img11} alt="" className="imgGrid"/>
                    </div>
                    </Fade>

                    <Fade left delay={200}>
                    <div className="gridContainer">
                        <div className="overlay">
                                <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"/></svg>
                                <p className="textGrid">abilis</p>
                                <div className="boxSupImg"><a href={img12} target="_blank" rel="noopener noreferrer"><img src={img12} className="supImg" alt=""/></a></div>
                        </div>
                        <img src={img12} alt="" className="imgGrid"/>
                    </div>
                    </Fade>

                    
                </div>


    </div>
    )
};
export default Logos;
