import {useEffect, useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import wikiService from "../../services/wiki.service"
import Header from "../../components/Header/Header"
import InfoBlock from "../../components/InfoBlock/InfoBlock"
import styles from './Detail.module.css'

function Detail (){
    const navigate = useNavigate();
    const {code} = useParams();
    const [countryCode, setCodeCountry] = useState(null);
    
    useEffect(() => {
        async function fetchData () {
              const listCodeCountry = await wikiService.getCountryByCode(code)
              setCodeCountry(listCodeCountry[0])
        }
        fetchData();
    }, [code])
    
    if (!countryCode) return <p>Carregando...</p>
    
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <button className={styles.backButton} onClick={() => navigate("/")}>← Voltar para a lista</button>
                <img 
                    src={countryCode.flags.svg}
                    alt={countryCode.name.common}
                    className={styles.flag}
                />
                <h1 className={styles.officialName}>{countryCode.name.official}</h1>
                <h2 className={styles.commonName}>{countryCode.name.common}</h2>

                <div className={styles.infoGrid}>
                    <InfoBlock label="Capital: " value={countryCode.capital[0]} />
                    <InfoBlock label="Continente: " value={countryCode.region} />
                    <InfoBlock label="Sub-Região: " value={countryCode.subregion} />
                    <InfoBlock label="Área: " value={`${countryCode.area} km²`} />
                    <InfoBlock label="Idiomas: " value={Object.values(countryCode.languages).join(", ")}/>
                    <InfoBlock label="Moeda: " 
                        value={`${Object.values(countryCode.currencies)[0].name} - ${Object.keys(countryCode.currencies)[0]} - ${Object.values(countryCode.currencies)[0].symbol}`}
                    />
                    <InfoBlock label="População: " value={countryCode.population.toLocaleString()} />
                    <InfoBlock label="Código do País: " value={countryCode.cca3} />
                </div>

                <div className={styles.description}>
                    <h2 className={styles.descriptionTitle}>Sobre o país</h2>
                    <p className={styles.descriptionText}>Este país possui uma história milenar marcada por conquistas, revoluções e transformações culturais profundas. Sua população, formada por uma diversidade étnica e linguística única, contribui para uma identidade nacional rica e plural. Entre montanhas, planícies e costas litorâneas, sua geografia moldou o modo de vida de seus habitantes ao longo dos séculos, tornando-o um destino singular no cenário mundial.</p>
                </div>
            </div>
        </div>
    )
}
export default Detail