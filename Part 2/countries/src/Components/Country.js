import { useState } from 'react'
import { Button, Label, Title } from './Form'


const CountryInfo = ({ country }) => {
    return (
        <>
            <Title title={country.name.common} />

            <Label text={"Capital"} value={country.capital} />

            <Label text={"Area"} value={country.area} />

            <Label text={"Languages"} value={Object.values(country.languages).map(value =>
                        <li key={value}> {value} </li>)} />

            <Label text={"Flag"} value={""} />
            
            <img src={country.flags.png}
                 key={country.name.commons}
                 alt='flag.png'/>

        </>
    )
}

const Country = ({ country }) => {
    const [details, setDetails] = useState(false)
    const toggleDetails = () => setDetails(!details)

    return (
        <div>
            <li>
                {country.name.common}
                {' '}
                <Button handleClick={toggleDetails} text=" show " />
            </li>
            {details && <CountryInfo key={country.name.official} country={country} />}
        </div>
    )
}

export {CountryInfo, Country}