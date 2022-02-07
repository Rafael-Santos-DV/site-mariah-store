import { BsInstagram } from "react-icons/bs";
import { DivRedes } from "./style";

export const DivRedesSocias = () => {
    return(
        <DivRedes>
            <a href="https://www.instagram.com/camilly_santos077/" target="_blank" className="box-redes-sociais" rel="noreferrer">
                <div>
                    <BsInstagram />
                    <span>mariahstore</span>
                </div>
                <p>Estamos no instagram</p>
                <span>Siga-nos</span>
            </a>
        </DivRedes>
    );
}