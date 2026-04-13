import styles from './SearchBar.module.css'

function SearchBar({ value, onChange }) {
    return (
        <div className={styles.container}>
            <input 
                type="text" 
                placeholder="Buscar país..." 
                value={value}
                onChange={e => onChange(e.target.value)}
                className={styles.searchBar}
            />
        </div>    
    )
}

export default SearchBar