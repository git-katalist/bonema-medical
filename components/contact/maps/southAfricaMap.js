export default function SouthAfricaMap() {
    return (
        <div className="map">
            <iframe
                width="95%"
                height="95%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=2%20tonetti%20street,%20halfway%20house,%20midrand+(bonema)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            {/* <a href="https://www.maps.ie/draw-radius-circle-map/">
                            Google radius map
                        </a> */}
        </div>
    );
}
