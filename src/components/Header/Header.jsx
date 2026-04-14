import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'
import styles from './Header.module.css'

function Header({ onSelectContinent }) {
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    const navigate = useNavigate();

    let themeIcon
        if (darkMode) {
    themeIcon = <FaSun size={20} />
        } else {
    themeIcon = <FaMoon size={20} />
    }
    
    return (
        <header className={styles.header}>
            <h1 className={styles.logo} onClick={() => navigate("/")}>WikiPaíses</h1>
            <nav className={styles.nav}>
                <button className={styles.navButton} onClick={() => onSelectContinent("Europe")}>Europe</button>
                <button className={styles.navButton} onClick={() => onSelectContinent("Americas")}>Americas</button>
                <button className={styles.navButton} onClick={() => onSelectContinent("Asia")}>Asia</button>
                <button className={styles.navButton} onClick={() => onSelectContinent("Africa")}>Africa</button>
                <button className={styles.navButton} onClick={() => onSelectContinent("Oceania")}>Oceania</button>
                <button className={styles.themeButton} onClick={() => setDarkMode(!darkMode)}>{themeIcon}</button>
            </nav>
        </header>
    );
}

export default Header