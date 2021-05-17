import Image from "next/image";
import { Supplier } from "./styles";

import mecan from "../../public/suppliers/mecan-medical-logo.png";
import softwave from "../../public/suppliers/softwave-logo.png";
import drop from "../../public/suppliers/1drop-logo.png";
import biomaxima from "../../public/suppliers/biomaxima-logo.png";
import fotona from "../../public/suppliers/fotona-logo.png";

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
    return (
        <Supplier>
            <div className="container">
                <div className="title">
                    <h1>Products</h1>
                </div>
                <div className="suppliers">
                    {suppliers.map((supplier, index) => (
                        <div key={index} className="supplier">
                            <Image
                                src={supplier.logo}
                                width={305}
                                height={93}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Supplier>
    );
}
