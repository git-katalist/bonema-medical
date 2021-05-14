import mecan from "../public/suppliers/mecan-medical-logo.png";
import softwave from "../public/suppliers/softwave-logo.png";
import drop from "../public/suppliers/1drop-logo.png";
import biomaxima from "../public/suppliers/biomaxima-logo.png";
import fotona from "../public/suppliers/fotona-logo.png";

const suppliers = [
    {
        name: "mecan medical",
        logo: mecan,
        alt: "mecan medical logo",
        URL: "",
    },
    {
        logo: softwave,
        alt: "softwave medical logo",
        URL: "",
    },
    {
        logo: drop,
        alt: "1drop kit logo",
        URL: "",
    },
    {
        name: "biomaxima",
        logo: biomaxima,
        alt: "biomaxima logo",
        URL: "",
    },
    {
        name: "fotona",
        logo: fotona,
        alt: "fotona logo",
        URL: "",
    },
];

export default function Suppliers() {
    console.log(suppliers);
    return (
        <section
            style={{
                backgroundColor: "#e9e9e9",
                marginBottom: "5rem",
                display: "grid",
                placeItems: "center",
            }}
        >
            <div className="suppliers">
                {/* <img src={mecan} alt="mecan medical logo" />
            <img src={softwave} alt="softwave medical logo" />
            <img src={drop} alt="1drop medical logo" />
            <img src={biomaxima} alt="biomaxima medical logo" />
            <img src={fotona} alt="fotona medical logo" /> */}

                {suppliers.map((supplier, index) => (
                    // <>{supplier.name}</>
                    <div className="supplier">
                        <img src={supplier.logo} alt="" />
                    </div>
                ))}
            </div>
        </section>
    );
}
