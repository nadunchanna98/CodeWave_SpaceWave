import React, { useState, useEffect } from 'react'
import './SearchResults.css'
import rocket from '../../assets/images/rocket.png';
import { useNavigate } from 'react-router-dom';

function SearchResults() {

    const [results, setResults] = useState([]);

    const navigate = useNavigate();

    //dummy
    useEffect(() => {
        setResults([
            {
                travelType: "Connecting Travel",
                dateOfDeparture: "20 Augest 2160",
                timeOfDeparture: "GMT 22:00",
            },
            {
                travelType: "Nonstop Travel",
                dateOfDeparture: "20 Augest 2160",
                timeOfDeparture: "GMT 22:00",
            },
            {
                travelType: "Nonstop Travel",
                dateOfDeparture: "20 Augest 2160",
                timeOfDeparture: "GMT 22:00",
            }
        ])
    }, [])

    const handleClick = () => {
        navigate("/flight-details");
    }

    return (
        <div className='container'>
            <div><h3 className='heading-text'>Shuttle Search Results</h3></div>
            <div className='search-results'>
                {results.map((result) => {
                    return (
                        <div className='result' onClick={handleClick}>
                            <div className='image'><img src={rocket} alt='Rocket icon in search result' /></div>
                            <div className='details'>
                                <div>{result.travelType}</div>
                                <div>{result.dateOfDeparture}</div>
                                <div>{result.timeOfDeparture}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SearchResults;