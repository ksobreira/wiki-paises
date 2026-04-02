import {useEffect, useState} from "react"
import wikiService from "../../services/wiki.service"
import Card from "../../components/Card/Card"

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
            {country.map(c => (
            <Card key={c.cca3} country={c} />
            ))}
        </div>
    )
}
export default Home