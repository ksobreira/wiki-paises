import {useEffect, useState} from "react"
import wikiService from "../../services/wiki.service"

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
            <h1>Home</h1>
        </div>
    )
}
export default Home