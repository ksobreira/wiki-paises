import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

function Header({ onSelectContinent , onReset }) {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleContinent = (continent) => {
        onSelectContinent(continent)
    }

    let themeIcon
    if (darkMode) {
        themeIcon = <FaSun size={25} />
    } else {
        themeIcon = <FaMoon size={25} />
    }

    let menuIcon
    if (isOpen) {
        menuIcon = <FaTimes size={25} />
    } else {
        menuIcon = <FaBars size={25} />
    }
    
    return (
    <>
    <header className={styles.header}>
        <h1 className={styles.logo} onClick={() => {
                setIsOpen(false)
                onReset()
                navigate("/")
        }}>
            WikiPaíses
        </h1>
        <div className={styles.actions}>
            <button className={styles.themeButton} onClick={() => setDarkMode(!darkMode)}>{themeIcon}</button>
            <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>{menuIcon}</button>
        </div>
    </header>

    {isOpen && (
        <div className={styles.sidebar}>
            <button className={styles.sidebarButton} onClick={() => handleContinent("")}>Todos</button>
            <button className={styles.sidebarButton} onClick={() => handleContinent("Europe")}>Europe</button>
            <button className={styles.sidebarButton} onClick={() => handleContinent("Americas")}>Americas</button>
            <button className={styles.sidebarButton} onClick={() => handleContinent("Asia")}>Asia</button>
            <button className={styles.sidebarButton} onClick={() => handleContinent("Africa")}>Africa</button>
            <button className={styles.sidebarButton} onClick={() => handleContinent("Oceania")}>Oceania</button>
        </div>
    )}

    </>
);
}

export default Header