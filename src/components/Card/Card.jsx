import { useNavigate } from "react-router-dom"
import styles from './Card.module.css'

function Card({ country }) {
    const navigate = useNavigate();
    return (
        <div className={styles.card} onClick={() => navigate(`/country/${country.cca3}`)}>
            <img 
                src={country.flags.svg}
                alt={country.name.common}
                className={styles.flag}
            />
            <div className={styles.info}>
                <div className={styles.nameRow}>
                    <h3 className={styles.name}>{country.name.common}</h3>
                    <span className={styles.badge}>{country.region}</span>
                </div>
                <p className={styles.capital}>📍 {country.capital[0]}</p>
                <p className={styles.population}>👥 {country.population.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default Card