import { Country, CountryInfo } from './Country'

const FilterDisplay = ({ countries, filter }) => {
    const filteredCountries = countries.filter
            (country => (country.name.common.toLowerCase()).includes(filter.toLowerCase()))
                .map(country => <Country key={country.name.official} country={country} />)
    
    const numCountries = filteredCountries.length

    if (numCountries === 0) {
        return  'No countries found'
    }
    else if (numCountries === 1) {
        return <CountryInfo key={filteredCountries[0].props.country.name.common} country={filteredCountries[0].props.country} />
    }else if (numCountries <= 10 && filter.length) {
        return filteredCountries
    }else if (numCountries > 10 && filter.length) {
        return 'Too many matches, specify another filter'
    }else{
        const orderCountries = countries.sort((a, b) => a.name.common > b.name.common ? 1 : -1)
        return orderCountries.map(country => <Country key={country.name.official} country={country} />)
    } 
}

export {FilterDisplay}