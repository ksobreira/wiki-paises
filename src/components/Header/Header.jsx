import styles from './Header.module.css'

function Header( {onSelectContinent}){
    
    return (
        <header>
            <h1 className= {styles.logo}>WikiPaises</h1>
            <nav>
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