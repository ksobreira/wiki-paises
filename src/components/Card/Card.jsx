import {useNavigate} from "react-router-dom"

function Card({ country }){
    const navigate = useNavigate();
    return (
        <>
        <div className = "country-card" onClick={() => navigate(`/country/${country.cca3}`)}>
            <div className= "country-header">
                <img 
                    src={country.flags.svg}
                    alt={country.name.common}
                    className= "country-image"
            />
            </div>
            <h1 className = "contry-name">{country.name.common}</h1>
            <h3 className = "country-capital">{country.capital[0]}</h3>
            <p className = "country-population">{country.population}</p>
        </div>
        </>
    )
}

export default Card