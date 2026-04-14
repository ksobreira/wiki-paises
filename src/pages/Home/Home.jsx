import styles from './Home.module.css'
import useCountries from '../../hooks/useCountries'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import Card from '../../components/Card/Card'
import Pagination from '../../components/Pagination/Pagination'
import Footer from '../../components/Footer/Footer'

function Home() {
    const { currentCountries, page, totalPages, searchText, handleSearch, handleContinent, setPage } = useCountries()

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
            <Footer />
        </div>
    )
}

export default Home