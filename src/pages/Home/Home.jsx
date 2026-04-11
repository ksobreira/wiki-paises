import {useEffect, useState} from "react"
import wikiService from "../../services/wiki.service"
import Card from "../../components/Card/Card"
import Header from "../../components/Header/Header"

function Home (){
    const [country, setCountry] = useState([])
    const [searchText, setSearchText] = useState("")
    const [selectedContinent, setSelectedContinent] = useState("")
    
    const filteredCountries = country
        .filter(c => c.name.common.toLowerCase().includes(searchText.toLowerCase()))
        .filter(c => {
            if (selectedContinent === "") return true
            return c.region === selectedContinent
        })

    useEffect(() => {
        async function fecthData(){
            const listCountry = await wikiService.getAllCountries();
            console.log(listCountry)
            setCountry(listCountry)
        }
        fecthData();
    }, [])
    
    return (
        <div>
            <input type="text" 
                placeholder="Buscar país..." value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
            <Header onSelectContinent={setSelectedContinent}/>
            <div className="country-list">
                {filteredCountries.map(c => (
                    <Card key={c.cca3} country={c} />
                ))}
            </div>
        </div>
    )
}

export default Home