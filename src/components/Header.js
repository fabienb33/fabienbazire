import DarkMode from './DarkMode'
import Nav from './Nav'
import NavBurger from './NavBurger'
import Colors from './Colors'
import '../styles/Burger.scss'

const Header = () => {
    return (
        <div className="header">
            <Colors/>
            <NavBurger/>
            <Nav/>
            <DarkMode />
        </div>
    )
}

export default Header;