import ScrollReveal from 'scrollreveal'
import '../styles/Realisations.scss'
import Modal from 'react-modal';
import React from 'react';
import img from '../assets/webdesigns/fabien-bazire (5).jpg'
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const customStyles = {
    overlay: {
        position: 'fixed',
        margin: 'auto',
        width: '60vw',
        height: '50%',
        backgroundColor: 'rgba(20, 22, 24, 0.9)'
      },
      content: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItem: 'center',
        position: 'absolute',
        width:'100%',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        border: 'none',
        background: 'none',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        outline: 'none',
      },
      
};



const Realisations = () => {
    var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#000000';
  }

  function closeModal(){
    setIsOpen(false);
  }

ScrollReveal().reveal('.boxGrid', {
    origin: 'bottom',
    duration: 2000,
    distance: "500px",
    scale: 0.5,
    reset: true,
}, 1500);



    return (
       <div className="containerRea">
           <div className="boxGrid"><button onClick={openModal}>Open Modal</button></div>
           <div className="boxGrid"></div>
           <div className="boxGrid"></div>
           <div className="boxGrid"></div>

           <div className="boxGrid"></div>
           <div className="boxGrid"></div>
           <div className="boxGrid"></div>
           <div className="boxGrid"></div>

           <div className="boxGrid"></div>
           <div className="boxGrid"></div>
           <div className="boxGrid"></div>
           <div className="boxGrid"></div>
           
           <div className="boxGrid"></div>
           <div className="boxGrid"></div>
           <div className="boxGrid"></div>
           <div className="boxGrid"></div>
           
           <div className="boxGrid"></div>
           <div className="boxGrid"></div>
           <div className="boxGrid"></div>
           <div className="boxGrid"></div>

           
        <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
          <div className="toto" onClick={closeModal}><FontAwesomeIcon icon={faTimesCircle} size="2x"/></div>
            <div className="boxImg">
                <img src={img} alt="" className="creation"/>
                <div className="creation"></div>
                <div className="creation"></div>
                <div className="creation"></div>
            </div>
        </Modal>
       </div>
    )
};
export default Realisations;


