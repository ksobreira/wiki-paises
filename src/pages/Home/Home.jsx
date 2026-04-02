import {useEffect, useState} from "react"
import wikiService from "../../services/wiki.service"
import Card from "../../components/Card/Card"
import Header from "../../components/Header/Header"

function Home (){
    const [country, setCountry] = useState([])

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
            <Header/>
            <div className="country-list">
                {country.map(c => (
                    <Card key={c.cca3} country={c} />
                ))}
            </div>
        </div>
    )
}

export default Home