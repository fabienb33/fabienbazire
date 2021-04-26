import '../styles/Nav.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = () => {
    return (
        <nav>
            <AnchorLink href='#accueil' offset='10'>Accueil</AnchorLink>
            <AnchorLink href='#who'>Qui suis-je</AnchorLink>
            <AnchorLink href='#webdesign'>Webdesign</AnchorLink>
            <AnchorLink href='#logos'>Logos</AnchorLink>
            <AnchorLink href='#creation' offset='-50'>Création</AnchorLink>
            <AnchorLink href='#contact' offset='-50'>Contact</AnchorLink>
      </nav>
    )
}

export default Nav;