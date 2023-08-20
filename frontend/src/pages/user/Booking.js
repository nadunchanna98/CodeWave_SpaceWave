import React, { useState } from "react";
import "./Booking.css";
import EarthImage from "../../assets/Planets/Earth.png";
import MarsImage from "../../assets/Planets/Mars.png";
import JupiterImage from "../../assets/Planets/Jupiter.png";
import SaturnImage from "../../assets/Planets/Saturn.png";
import NeptuneImage from "../../assets/Planets/Neptune.png";
import KeplerImage from "../../assets/Planets/Kepler-452b.png";
import OGLEImage from "../../assets/Planets/OGLE-2014-BLG.png";
import { useNavigate } from "react-router-dom";


function Booking() {
    const planets = [
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Neptune",
        "Kepler-452b",
        "OGLE-2014-BLG",
    ];
    const [selectedDeparturePlanetIndex, setSelectedDeparturePlanetIndex] =
        useState(2); // Default: Earth
    const [selectedDestinationPlanetIndex, setSelectedDestinationPlanetIndex] =
        useState(2); // Default: Earth
    const [tripType, setTripType] = useState("oneWay");
    const [travelDate, setTravelDate] = useState("");
    const [adultSeats, setAdultSeats] = useState(1);
    const [childSeats, setChildSeats] = useState(0);

    const handleDeparturePlanetChange = (direction) => {
        if (direction === "prev") {
            setSelectedDeparturePlanetIndex((prevIndex) =>
                prevIndex === 0 ? planets.length - 1 : prevIndex - 1
            );
        } else {
            setSelectedDeparturePlanetIndex((prevIndex) =>
                prevIndex === planets.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const navigate = useNavigate();

    const handleDestinationPlanetChange = (direction) => {
        if (direction === "prev") {
            setSelectedDestinationPlanetIndex((prevIndex) =>
                prevIndex === 0 ? planets.length - 1 : prevIndex - 1
            );
        } else {
            setSelectedDestinationPlanetIndex((prevIndex) =>
                prevIndex === planets.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const handleTripTypeChange = (type) => {
        setTripType(type);
    };

    const handleDateChange = (event) => {
        setTravelDate(event.target.value);
    };

    const handleAdultSeatsChange = (count) => {
        setAdultSeats(count);
    };

    const handleChildSeatsChange = (count) => {
        setChildSeats(count);
    };

    const planetImages = {
        Earth: EarthImage,
        Mars: MarsImage,
        Jupiter: JupiterImage,
        Saturn: SaturnImage,
        Neptune: NeptuneImage,
        "Kepler-452b": KeplerImage,
        "OGLE-2014-BLG": OGLEImage,
    };

    const handleProceed = () => {
        // TODO: Add validation
        navigate('/booking/search');
    };

    return (
        <div className="booking-container">

            <div className="planet-container">
                <p className="option-title route">Route</p>
                <div className="option-container">
                    <div className='planet-selection'>
                        <p className="title-text">Departure</p>
                        <div className="departure">
                            <button className="arrow-button" onClick={() => handleDeparturePlanetChange('prev')}>&lt;</button>
                            <div className='planet-displayContainer'>
                                <img
                                    src={planetImages[planets[selectedDeparturePlanetIndex]]}
                                    alt={planets[selectedDeparturePlanetIndex]}
                                />
                                <span className="planet-name">{planets[selectedDeparturePlanetIndex]}</span>
                            </div>
                            <button className="arrow-button" onClick={() => handleDeparturePlanetChange('next')}>&gt;</button>
                        </div>
                    </div>

                    <div className='planet-selection'>
                        <p className="title-text">Destination</p>
                        <div className="destination">
                            <button className="arrow-button" onClick={() => handleDestinationPlanetChange('prev')}>&lt;</button>
                            <div className='planet-displayContainer'>
                                <img
                                    src={planetImages[planets[selectedDestinationPlanetIndex]]}
                                    alt={planets[selectedDestinationPlanetIndex]}
                                />
                                <span className="planet-name">{planets[selectedDestinationPlanetIndex]}</span>
                            </div>
                            <button className="arrow-button" onClick={() => handleDestinationPlanetChange('next')}>&gt;</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="trip-type">
                <p className="option-title">Type</p>
                <div className="option-container">
                    <div className="option-item">
                        <label>
                            <input
                                type="radio"
                                name="tripType"
                                value="oneWay"
                                checked={tripType === "oneWay"}
                                onChange={() => handleTripTypeChange("oneWay")}
                            />
                            One Way
                        </label>
                    </div>
                    <div className="option-item">
                        <label>
                            <input
                                type="radio"
                                name="tripType"
                                value="roundTrip"
                                checked={tripType === "roundTrip"}
                                onChange={() => handleTripTypeChange("roundTrip")}
                            />
                            Round Trip
                        </label>
                    </div>
                </div>
            </div>


            <div className="date-selection">
                <label className='option-title' htmlFor="travelDate">Travel Date</label>
                <input
                    type="date"
                    id="travelDate"
                    value={travelDate}
                    onChange={handleDateChange}
                />
            </div>


            <div className="seat-selection">
                <p className="option-title">Quantity</p>
                <div className="option-container">
                    <div className="option-item">
                        <label>Adults:</label>
                        <div className="value-count">
                            <button onClick={() => handleAdultSeatsChange(adultSeats - 1)}>
                                -
                            </button>
                            <span className="seat-count">{adultSeats}</span>
                            <button onClick={() => handleAdultSeatsChange(adultSeats + 1)}>
                                +
                            </button>
                        </div>
                    </div>
                    <div className="option-item">
                        <label>Childs:</label>
                        <div className="value-count">
                            <button onClick={() => handleChildSeatsChange(childSeats - 1)}>
                                -
                            </button>
                            <span className="seat-count">{childSeats}</span>
                            <button onClick={() => handleChildSeatsChange(childSeats + 1)}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="proceed-button" onClick={handleProceed}>
                Proceed
            </button>
        </div>


    );
}


export default Booking;