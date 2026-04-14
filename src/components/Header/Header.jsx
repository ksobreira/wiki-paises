import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

function Header({ onSelectContinent }) {
    const navigate = useNavigate();
    
    return (
        <header className={styles.header}>
            <h1 className={styles.logo} onClick={() => navigate("/")}>WikiPaíses</h1>
            <nav className={styles.nav}>
                <button className={styles.navButton} onClick={() => onSelectContinent("Europe")}>Europe</button>
                <button className={styles.navButton} onClick={() => onSelectContinent("Americas")}>Americas</button>
                <button className={styles.navButton} onClick={() => onSelectContinent("Asia")}>Asia</button>
                <button className={styles.navButton} onClick={() => onSelectContinent("Africa")}>Africa</button>
                <button className={styles.navButton} onClick={() => onSelectContinent("Oceania")}>Oceania</button>
            </nav>
        </header>
    );
}

export default Header