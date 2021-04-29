import '../styles/Webdesign.scss'
import Zoom from 'react-reveal/Zoom'
import img01 from '../assets/covers/revanove-webdesign.jpg'
import img02 from '../assets/covers/eyeka-2018.jpg'
import img03 from '../assets/covers/eyeka-2015.jpg'
import img04 from '../assets/covers/webdesign-m&t.jpg'
import img05 from '../assets/covers/lawebbisterie-webdesign.jpg'
import img06 from '../assets/covers/oceansfishing-logo.jpg'
import img07 from '../assets/covers/travelmania.png'
import img08 from '../assets/covers/webdesign-sylmaps.png'
import img09 from '../assets/covers/bushcraft-webdesign.jpg'

import img10 from '../assets/webdesigns/revanove-webdesign-01.jpg'
import img11 from '../assets/webdesigns/eyeka-webdesign-2018.jpg'
import img12 from '../assets/webdesigns/eyeka-webdesign-2018-01.jpg'
import img13 from '../assets/webdesigns/eyeka-webdesign-2018-03.jpg'
import img14 from '../assets/webdesigns/fabien-bazire (7).jpg'
import img15 from '../assets/webdesigns/fabien-bazire (5).jpg'
import img16 from '../assets/webdesigns/fabien-bazire (6).jpg'
import img17 from '../assets/webdesigns/Margot&Tita-webdesign.jpg'
import img18 from '../assets/webdesigns/lawebbisterie-webdesign-01.jpg'
import img19 from '../assets/webdesigns/lawebbisterie-webdesign-02.jpg'
import img20 from '../assets/webdesigns/oceaning webdesign.jpg'
import img21 from '../assets/webdesigns/webdesign-travelmania.jpg'
import img22 from '../assets/webdesigns/sylmaps-webdesign-01.jpg'
import img23 from '../assets/webdesigns/bushcraft-webdesign-01.jpg'


const Webdesign = () => {
    return (
       <div className="containerWeb"> 
           <section id='webdesign'></section>
      
    
           <div className="boxLeft">
               <Zoom ><p className="titleRea"><a href="www.happyuncle.fr" className="highlight">UI/UX Design</a></p></Zoom>
               <Zoom ><p className="textRea">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi 
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid 
                ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
                molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p></Zoom>

                <Zoom ><p className="textRea">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi 
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid 
                ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
                molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p></Zoom>
            </div>

           <div className="boxRight">
           <Zoom >
           <div className="gridContainer">
               <div className="overlay">
                    <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"  /></svg>
                    <p className="textGrid">Revanove</p>
                    <div className="boxSupImg">   <a href="https://revanove.fabienbazire.com" target="_blank" rel="noopener noreferrer"><img src={img10} className="supImg" alt=""/></a>   </div>
               </div>
               <img src={img01} alt="" className="imgGrid"/>
            </div>
            </Zoom>
            <Zoom >
            <div className="gridContainer">
               <div className="overlay">
                    <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"  /></svg>
                    <p className="textGrid">eyeka</p>
                    <div className="boxSupImg">
                        <a href={img11} target="_blank" rel="noopener noreferrer"><img src={img11} className="supImg" alt=""/></a>
                        <a href={img12} target="_blank" rel="noopener noreferrer"><img src={img12} className="supImg" alt=""/></a>
                        <a href={img13} target="_blank" rel="noopener noreferrer"><img src={img13} className="supImg" alt=""/></a>
                    </div>
               </div>
               <img src={img02} alt="" className="imgGrid"/>
            </div>
            </Zoom>
            <Zoom >
            <div className="gridContainer">
               <div className="overlay">
                    <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"  /></svg>
                    <p className="textGrid">eyeka</p>
                    <div className="boxSupImg">
                        <a href={img14} target="_blank" rel="noopener noreferrer"><img src={img14} className="supImg" alt=""/></a>
                        <a href={img15} target="_blank" rel="noopener noreferrer"><img src={img15} className="supImg" alt=""/></a>
                        <a href={img16} target="_blank" rel="noopener noreferrer"><img src={img16} className="supImg" alt=""/></a>
                    </div>
               </div>
               <img src={img03} alt="" className="imgGrid"/>
            </div>
            </Zoom>
            <Zoom >
            <div className="gridContainer">
               <div className="overlay">
                    <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"  /></svg>
                    <p className="textGrid">Margot et Tita</p>
                    <div className="boxSupImg">   <a href={img17} target="_blank" rel="noopener noreferrer"><img src={img17} className="supImg" alt=""/></a>   </div>
               </div>
               <img src={img04} alt="" className="imgGrid"/>
            </div>
            </Zoom>
            <Zoom >
            <div className="gridContainer">
               <div className="overlay">
                    <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"  /></svg>
                    <p className="textGrid">la webbisterie</p>
                    <div className="boxSupImg">
                        <a href={img18} target="_blank" rel="noopener noreferrer"><img src={img18} className="supImg" alt=""/></a>
                        <a href={img19} target="_blank" rel="noopener noreferrer"><img src={img19} className="supImg" alt=""/></a>
                    </div>
               </div>
               <img src={img05} alt="" className="imgGrid"/>
            </div>
            </Zoom>
{/* //////////////////////////////////////////////////////////////////02///////////////////////////////////////////////////////////////////////// */}
            <Zoom >
            <div className="gridContainer">
               <div className="overlay">
                    <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"  /></svg>
                    <p className="textGrid">oceans fishing</p>
                    <div className="boxSupImg">   <a href={img20} target="_blank" rel="noopener noreferrer"><img src={img20} className="supImg" alt=""/></a>   </div>
               </div>
               <img src={img06} alt="" className="imgGrid"/>
            </div>
            </Zoom>
            <Zoom >
            <div className="gridContainer">
               <div className="overlay">
                    <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"  /></svg>
                    <p className="textGrid">travelmania</p>
                    <div className="boxSupImg">   <a href={img21} target="_blank" rel="noopener noreferrer"><img src={img21} className="supImg" alt=""/></a>   </div>
               </div>
               <img src={img07} alt="" className="imgGrid"/>
            </div>
            </Zoom>
            <Zoom >
            <div className="gridContainer">
               <div className="overlay">
                    <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"  /></svg>
                    <p className="textGrid">sylmaps</p>
                    <div className="boxSupImg">   <a href={img22} target="_blank" rel="noopener noreferrer"><img src={img22} className="supImg" alt=""/></a>   </div>
               </div>
               <img src={img08} alt="" className="imgGrid"/>
            </div>
            </Zoom>
            <Zoom >
            <div className="gridContainer">
               <div className="overlay">
                    <svg className="shape"  xmlns="http://www.w3.org/2000/svg"><rect className="shape"  /></svg>
                    <p className="textGrid">bushcraft</p>
                    <div className="boxSupImg">   <a href={img23} target="_blank" rel="noopener noreferrer"><img src={img23} className="supImg" alt=""/></a>   </div>
               </div>
               <img src={img09} alt="" className="imgGrid"/>
            </div>
            </Zoom>
               
           </div>
           
       </div>
    )
};
export default Webdesign;
