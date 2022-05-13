import { useState } from "react";
import ContactForm from "../form/form";
import BotswanaMap from "../maps/botswana";
import SouthAfricaMap from "../maps/southAfricaMap";

import { Information } from "./styles";

export default function Details() {
    const [southAfrica, setSouthAfrica] = useState(true);
    const [botswana, setBotswana] = useState(false);

    function regionSouthAfrica() {
        setSouthAfrica(true), setBotswana(false);
    }
    function regionBotswana() {
        setSouthAfrica(false), setBotswana(true);
    }
    return (
        <>
            {southAfrica ? (
                <Information>
                    <div className="container">
                        <h1>contact details</h1>
                        <div className="button-content">
                            <p>select your region below</p>
                            <div className="selectionButtons">
                                <button
                                    className="active"
                                    onClick={regionSouthAfrica}
                                >
                                    South Africa
                                </button>
                                <button onClick={regionBotswana}>
                                    Botswana
                                </button>
                            </div>
                        </div>
                        <div className="contact-content">
                            <div className="contact-details">
                                <ul className="address">
                                    <h3>Head Office Address</h3>
                                    <li>Growthpoint Business Park</li>
                                    <li>Unit 4</li>
                                    <li>162 Tonetti Street</li>
                                    <li>Halfway House, Midrand</li>
                                    <li>South Africa 1685</li>
                                </ul>
                                <ul className="contacts">
                                    <li>Tel: +27 12 772 9729</li>
                                    <li>Accounts : 086 126 6362</li>
                                    <li>
                                        EMail :
                                        <span>
                                            <a href="mailto:info@bonema.co.za">
                                                info@bonema.co.za
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <ContactForm className="contact-form" />
                        </div>
                    </div>

                    <SouthAfricaMap />
                </Information>
            ) : (
                <Information>
                    <div className="container">
                        <h1>contact details</h1>
                        <p>select your region below</p>
                        <div className="button-content">
                            <div className="selectionButtons">
                                <button onClick={regionSouthAfrica}>
                                    South Africa
                                </button>
                                <button
                                    className="active"
                                    onClick={regionBotswana}
                                >
                                    Botswana
                                </button>
                            </div>
                        </div>
                        <div className="contact-content">
                            <div className="contact-details">
                                <ul className="address">
                                    <h3>Botswana Office</h3>
                                    <li>Plot 75783</li>
                                    <li>Setlhoa Office Park</li>
                                    <li>Block 2</li>
                                    <li>Unit 4 Setlhoa, Block 10</li>
                                    <li>Gaborone</li>
                                </ul>
                                <ul className="contacts">
                                    <li>Tel: +267393 2350</li>
                                    <li>Tel: +267631 6323</li>
                                    <li>
                                        EMail :
                                        <span>
                                            <a href="mailto:natasha@bonema.co.za">
                                                natasha@bonema.co.za
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <ContactForm className="contact-form" />
                        </div>
                    </div>

                    <BotswanaMap />
                </Information>
            )}
        </>
    );
}
