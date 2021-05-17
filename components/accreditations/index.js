import { Accreditations } from "./styles";

import Icasa from "../../public/accreditors/icasa-logo.png";
import Iso from "../../public/accreditors/iso-logo.png";
import Psira from "../../public/accreditors/psira-logo.png";
import Saia from "../../public/accreditors/saia-logo.png";
import Ungm from "../../public/accreditors/ungm-logo.png";
import Sahpra from "../../public/accreditors/sahpra-logo.png";
import { Container } from "../../styles/_layout";

const accreds = [Icasa, Iso, Psira, Saia, Ungm, Sahpra];

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
                            <img src={item} alt="Saia" />
                        </div>
                    ))}
                </div>
            </div>
        </Accreditations>
    );
};

export default Accreds;
