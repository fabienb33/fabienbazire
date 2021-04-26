import AnchorLink from 'react-anchor-link-smooth-scroll'


const NavBurger = () => {
    return (
            <nav role="navigation" className="navigation">
              <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
        
              <ul id="menu">
                <AnchorLink href='#accueil' offset='10'>Accueil</AnchorLink>
                <AnchorLink href='#who'>Qui suis-je</AnchorLink>
                <AnchorLink href='#webdesign'>Webdesign</AnchorLink>
                <AnchorLink href='#logos'>Logos</AnchorLink>
                <AnchorLink href='#creation' offset='-50'>Création</AnchorLink>
                <AnchorLink href='#contact' offset='-50'>Contact</AnchorLink>
              </ul>
            </div>
            
          </nav>
    )}

export default NavBurger