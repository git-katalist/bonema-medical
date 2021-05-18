import Image from "next/image";
import { Accreditations } from "./styles";

import Icasa from "../../public/accreditors/icasa-logo.png";
// import Iso from "../../public/accreditors/iso-logo.png";
import Iso9001 from "../../public/accreditors/iso-9001-logo.png";
import Iso13485 from "../../public/accreditors/iso-13485-logo.png";
import Iso14001 from "../../public/accreditors/iso-14001-logo.png";
import Iso45001 from "../../public/accreditors/iso-45001-logo.png";
import Psira from "../../public/accreditors/psira-logo.png";
import Saia from "../../public/accreditors/saia-logo.png";
import Ungm from "../../public/accreditors/ungm-logo.png";
import Sahpra from "../../public/accreditors/sahpra-logo.png";
import { Container } from "../../styles/_layout";

const accreds = [
    {
        image: Icasa,
        name: "Icasa",
        URL: "",
    },
    // { image: Iso, name: "", URL: "" },
    { image: Iso9001, name: "", URL: "" },
    { image: Iso13485, name: "", URL: "" },
    { image: Iso14001, name: "", URL: "" },
    { image: Iso45001, name: "", URL: "" },
    {
        image: Psira,
        name: "",
        URL,
    },
    {
        image: Saia,
        name: "",
        URL: "",
    },
    {
        image: Ungm,
        name: "",
        URL: "",
    },
    {
        image: Sahpra,
        name: "",
        URL: "",
    },
];

const Accreds = () => {
    return (
        <Accreditations>
            <div className="container">
                <div className="title">
                    <h2>Accreditations</h2>
                </div>
                <div className="items">
                    {accreds.map((item, index) => (
                        <div className="item" key={index}>
                            <Image
                                src={item.image}
                                width={640}
                                height={640}
                                alt={item.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Accreditations>
    );
};

export default Accreds;
