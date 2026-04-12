import {useEffect, useState} from "react"
import wikiService from "../../services/wiki.service"
import Card from "../../components/Card/Card"
import Header from "../../components/Header/Header"
import styles from './Home.module.css'

function Home (){
    const [country, setCountry] = useState([])
    const [searchText, setSearchText] = useState("")
    const [selectedContinent, setSelectedContinent] = useState("")
    const [page, setPage] = useState(1)
    const [pageCountries, setPageCountries] = useState(8)
    
    const filteredCountries = country
        .filter(c => c.name.common.toLowerCase().includes(searchText.toLowerCase()))
        .filter(c => {
            if (selectedContinent === "") return true
            return c.region === selectedContinent
        })
    
    const finalIndex = page * pageCountries
    const inicialIndex = finalIndex - pageCountries
    const currentCountries = filteredCountries.slice(inicialIndex, finalIndex)
    const totalPages = Math.ceil(filteredCountries.length / pageCountries)
    
    const handleSearch = (text) => {
        setSearchText(text)
        setPage(1)
    }

    const handleContinent = (continent) => {
        setSelectedContinent(continent)
        setPage(1)
    }

    useEffect(() => {
        async function fecthData(){
            const listCountry = await wikiService.getAllCountries();
            setCountry(listCountry)
        }
        fecthData();
    }, [])
    
    return (
        <div>
            <Header onSelectContinent={handleContinent}/>
            <div className={styles.container}>
                <input 
                    type="text" 
                    placeholder="Buscar país..." 
                    value={searchText}
                    onChange={e => handleSearch(e.target.value)}
                    className={styles.searchBar}
                />
                <div className={styles.grid}>
                    {currentCountries.map(c => (
                        <Card key={c.cca3} country={c} />
                    ))}
                </div>
                <div className={styles.pagination}>
                    <button className={styles.pageButton} onClick={() => setPage(page - 1)} disabled={page === 1}>← Anterior</button>
                    <span className={styles.pageInfo}>Página {page} de {totalPages}</span>
                    <button className={styles.pageButton} onClick={() => setPage(page + 1)} disabled={page === totalPages}>Próximo →</button>
                </div>
            </div>
        </div>
    )
}

export default Home