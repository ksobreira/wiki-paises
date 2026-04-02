import wikiApi from "./wiki.api";

const wikiService = {
    getAllCountries: async () => {
        const response = await wikiApi.get("/all?fields=name,capital,region,population,flags,cca3")
        return response.data
    },

    getCountriesByRegion: async (region) => {
        const response = await wikiApi.get(`/region/${region}`)
        return response.data
    },

    getCountryByName: async (name) => {
        const response = await wikiApi.get(`/name/${name}`)
        return response.data
    },

    getCountryByCode: async (code) => {
        const response = await wikiApi.get(`/alpha/${code}`)
        return response.data
    }
}

export default wikiService