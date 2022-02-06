import logo from "../../assets/logo/logo-mariah-store-di.png";
import { DivisionContainer } from "./style";
import { TiMessages } from "react-icons/ti";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi"
import { useContext } from "react";
import { GlobalContext } from "../../context";


export const ContainerHeader = () => {
    const [mobileAtivador, valorAtivador] = useContext(GlobalContext);

    return(
        <DivisionContainer className="container-Header" ativar={valorAtivador}>
            <div className="button-mobile"><GiHamburgerMenu onClick={mobileAtivador}/></div>
            <div className="button-mobile"><AiOutlineClose onClick={mobileAtivador}/></div>
            <img className="image-logo" src={logo} alt="logo Mariah Store" />
            <div className="box-input-menu">
                <div className="container--input">
                    <input placeholder="O que vocẽ está buscando?" type="text" name="pesquisa" />
                    <span><FiSearch className="search-icon"/></span>
                </div>
                <div className="container-menu">
                    <div className="box-menu atendimento">
                        <span><TiMessages className="icon-menu"/></span>
                        <span>Atendimento</span>
                    </div>
                    <div className="box-menu carrinho">
                        <span className="search-absulute">
                            <AiOutlineShoppingCart className="icon-menu"/>
                            <span className="itens-carrinho">0</span>
                        </span>
                        <span>Carrinho</span>
                    </div>
                </div>
            </div>
        </DivisionContainer>
    );
}