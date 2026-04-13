import {useEffect, useState} from "react"
import wikiService from "../../services/wiki.service"
import SearchBar from "../../components/SearchBar/SearchBar"
import Pagination from "../../components/Pagination/Pagination"
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
                <SearchBar value={searchText} onChange={handleSearch} />
                <div className={styles.grid}>
                    {currentCountries.map(c => (
                        <Card key={c.cca3} country={c} />
                    ))}
                </div>
                <Pagination 
                    page={page}
                    totalPages={totalPages}
                    onPrevious={() => setPage(page - 1)}
                    onNext={() => setPage(page + 1)}
                />
            </div>
        </div>
    )
}

export default Home