import {useEffect, useState,} from "react"
import {useParams, useNavigate} from "react-router-dom"
import wikiService from "../../services/wiki.service"
import Header from "../../components/Header/Header"
import InfoBlock from "../../components/InfoBlock/InfoBlock"

function Detail (){
    const navigate = useNavigate();
    const {code} = useParams();
    const [countryCode, setCodeCountry] = useState(null);
    
    useEffect(() => {
        async function fetchData () {
              const listCodeCountry = await wikiService.getCountryByCode(code)
              console.log(listCodeCountry)
              setCodeCountry(listCodeCountry[0])
        }
        fetchData();
    }, [code])
    
    if (!countryCode) return <p>Carregando...</p>
    
    return (
        <div>
            <Header />
                <button onClick={() => navigate("/")}>Voltar para a lista</button>
                <img 
                src= {countryCode.flags.svg}
                alt= {countryCode.name.common}
                className = "country-img"
                />
            <h1 className = "contry-nameOfficialCode">{countryCode.name.official}</h1>
            <h2 className = "country-nameCommonCode">{countryCode.name.common}</h2>

            <div className ="info-blocks">
                <InfoBlock label="Capital: " value={countryCode.capital[0]} />
                <InfoBlock label="Continente: " value={countryCode.region} />
                <InfoBlock label="Sub-Região: " value={countryCode.subregion} />
                <InfoBlock label="Área: " value={`${countryCode.area} km²`} />
                <InfoBlock label="Idiomas: " value ={Object.values(countryCode.languages).join(", ")}/>
                <InfoBlock label="Moeda: " 
                    value ={
                        `
                        ${Object.values(countryCode.currencies) [0].name} - 
                        ${Object.keys(countryCode.currencies)[0]} - 
                        ${Object.values(countryCode.currencies) [0].symbol}
                        `
                    }
                />
                <InfoBlock label="População: " value={countryCode.population} />
                <InfoBlock label="Código do País: " value={countryCode.cca3} />
            </div>
            <br/>
            <div className = "country-description">
                <h2>Sobre o país:</h2>
                <p>Este país possui uma história milenar marcada por conquistas, revoluções e transformações culturais profundas. Sua população, formada por uma diversidade étnica e linguística única, contribui para uma identidade nacional rica e plural. Entre montanhas, planícies e costas litorâneas, sua geografia moldou o modo de vida de seus habitantes ao longo dos séculos, tornando-o um destino singular no cenário mundial.</p>
            </div>
        </div>
    )
}
export default Detail