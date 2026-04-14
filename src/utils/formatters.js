export function formatPopulation(population){
    if (population >= 1000000) {
        return `${(population / 1000000).toFixed(1)}M`
    }
    if (population >= 1000){
        return `${(population / 1000).toFixed(1)}K`
    }
    return population.toString()
}

export function formatArea(area){
    return area.toLocaleString()
}