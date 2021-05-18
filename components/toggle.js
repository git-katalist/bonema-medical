import { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
    const [toggle, setToggle] = useState(true);
    const [togg, setTogg] = useState(false);
    const handleToggle = () => {
        setToggle(true);
        setTogg(false);
    };
    const handleTogg = () => {
        setToggle(false);
        setTogg(true);
    };

    return (
        <StyledTitle>
            <div className="select">
                <div className="title">Select Region</div>
                <div
                    className="buttons"
                    style={{
                        display: "flex",
                        gap: "2rem",
                        marginTop: "2rem",
                        marginBottom: "1.5rem",
                    }}
                >
                    <div className="text box-1" onClick={handleToggle}>
                        {!toggle ? (
                            <button
                                onClick={handleToggle}
                                style={{
                                    padding: ".5rem 1rem",
                                    border: "none",
                                    backgroundColor: "#29ABE2",
                                    color: "white",
                                    letterSpacing: ".05rem",
                                    borderRadius: "7px",
                                }}
                            >
                                South Africa
                            </button>
                        ) : (
                            <button
                                style={{
                                    padding: ".5rem 1rem",
                                    border: "none",
                                    backgroundColor: "#29ABE2",
                                    color: "white",
                                    letterSpacing: ".05rem",
                                    borderRadius: "7px",
                                }}
                                onClick={handleToggle}
                            >
                                South Africa
                            </button>
                        )}
                    </div>
                    <div className="text box-2" onClick={handleTogg}>
                        {!togg ? (
                            <button
                                onClick={handleTogg}
                                style={{
                                    padding: ".5rem 1rem",
                                    border: "none",
                                    backgroundColor: "#29ABE2",
                                    color: "white",
                                    letterSpacing: ".05rem",
                                    borderRadius: "7px",
                                }}
                            >
                                Botswana
                            </button>
                        ) : (
                            <button
                                onClick={handleTogg}
                                style={{
                                    padding: ".5rem 1rem",
                                    border: "none",
                                    backgroundColor: "#29ABE2",
                                    color: "white",
                                    letterSpacing: ".05rem",
                                    borderRadius: "7px",
                                }}
                            >
                                Botswana
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="boxes">
                {toggle && (
                    <div style={{ display: "flex" }}>
                        <div className="adress-details">
                            <h3>Head Office Address</h3>
                            <ul>
                                <li>Growthpoint BusinessPark,</li>{" "}
                                <li>2 Tonetti Street Halfway</li>
                                <li>House Midrand 1685</li>
                                <li>South Africa</li>
                            </ul>
                        </div>
                        <div className="contact details">
                            <h3>Contact Details</h3>
                            <ul>
                                <li>Tel: +27 11 655 4190</li>{" "}
                                <li>Accounts : 086 126 6362</li>
                                <li>Email: info@bonema.co.za</li>
                                <li>South Africa</li>
                            </ul>
                        </div>
                    </div>
                )}
                {togg && (
                    <div style={{ display: "flex" }}>
                        <div>
                            <h3>Botswana Office</h3>
                            <ul>
                                <li>Growthpoint BusinessPark,</li>{" "}
                                <li>2 Tonetti Street Halfway</li>
                                <li>House Midrand 1685</li>
                                <li>Botswana</li>
                            </ul>
                        </div>
                        <div className="contact details">
                            <h3>Contact Details</h3>
                            <ul>
                                <li>Tel: +27 11 655 4190</li>{" "}
                                <li>Accounts : 086 126 6362</li>
                                <li>Email: info@bonema.co.za</li>
                                <li>South Africa</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            <div className="map">
                {toggle ? (
                    <div
                        style={{
                            width: "100%",
                            height: "30vh",
                            marginTop: "5vh",
                        }}
                    >
                        <iframe
                            width="95%"
                            height="95%"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=2%20tonetti%20street,%20halfway%20house,%20midrand+(bonema)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>
                        {/* <a href="https://www.maps.ie/draw-radius-circle-map/">
                            Google radius map
                        </a> */}
                    </div>
                ) : (
                    <div
                        style={{
                            width: "100%",
                            height: "30vh",
                            marginTop: "5vh",
                        }}
                    >
                        <iframe
                            width="95%"
                            height="95%"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=setlhoa%20office%20park,%20gaborone+(bonema)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>
                        {/* <a href="https://www.maps.ie/draw-radius-circle-map/">
                            Radius map calculator
                        </a> */}
                    </div>
                )}
            </div>
        </StyledTitle>
    );
};

export default Toggle;

const StyledTitle = styled.div`
    //some styles
    /* display: ${({ toggle }) => (toggle ? "none" : "block")}; */
    /* .box-1 {
        display: ${({ toggle }) => (toggle ? "none" : "block")};
        color: ${({ toggle }) => (!toggle ? "red" : "red")};
    }
    .box-2 {
        display: ${({ togg }) => (togg ? "none" : "block")};
    } */
`;
