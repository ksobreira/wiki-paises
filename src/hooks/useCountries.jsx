import { useState, useEffect } from "react"
import wikiService from "../services/wiki.service"

function useCountries() {

    const [country, setCountry] = useState([])
    const [searchText, setSearchText] = useState("")
    const [selectedContinent, setSelectedContinent] = useState("")
    const [page, setPage] = useState(1)
    const [pageCountries] = useState(8)


    useEffect(() => {
        async function fetchData() {
            const listCountry = await wikiService.getAllCountries()
            setCountry(listCountry)
        }
        fetchData()
    }, [])

  
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

    const resetFilters = () => {
        setSearchText("")
        setSelectedContinent("")
        setPage(1)
    }

    return {
        currentCountries,
        page,
        totalPages,
        searchText,
        handleSearch,
        handleContinent,
        setPage,
        resetFilters
    }
}

export default useCountries