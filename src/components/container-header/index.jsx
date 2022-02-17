import logo from "../../assets/logo/logo-mariah-store-di.png";
import { DivisionContainer } from "./style";
import { TiMessages } from "react-icons/ti";
import { AiOutlineClose, AiOutlineMail, AiOutlineShoppingCart, AiOutlineWhatsApp } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi"
import { useContext, useState } from "react";
import { GlobalContext } from "../../context";
import { Link } from "react-router-dom";
import { SideBarCarrinho } from "../menu-carrinho";
import { useEffect } from "react/cjs/react.development";


export const ContainerHeader = () => {
    const [mobileAtivador, valorAtivador, useFiltro, setFiltro,, addPedido] = useContext(GlobalContext);
    const [valueFiltro, setValueFiltro] = useState("");
    const [sideCarrinho, SetSideCarrinho] = useState(false);
    const [itensCar, SetItensCar] = useState();

    useEffect(() => {
        SetItensCar(addPedido && addPedido.length);
    }, [addPedido]);

    const handleFiltro = (e) => {
        setValueFiltro(e.target.value);
        setFiltro(e.target.value);
    }
    
    const handleSideBarCarrinho = () => {
        SetSideCarrinho(v => !v);
    }
    
    document.addEventListener("keypress", (e) => {
        const pesquisa = document.getElementById("enter-link");
        if (e.key === "Enter") {
            pesquisa.click();
        }
    })

    return(
        <DivisionContainer className="container-Header" ativar={valorAtivador} sideCarrinho={sideCarrinho} >
            <div className="button-mobile"><GiHamburgerMenu onClick={mobileAtivador}/></div>
            <div className="button-mobile"><AiOutlineClose onClick={mobileAtivador}/></div>
            <img className="image-logo" src={logo} alt="logo Mariah Store" />
            <div className="box-input-menu">
                <div className="container--input">
                    <input placeholder="O que vocẽ está buscando?" type="text" name="pesquisa" value={valueFiltro} onChange={handleFiltro} />
                    <span><Link id="enter-link" to={`/search/${useFiltro || "q"}`}><FiSearch className="search-icon"/></Link></span>
                </div>
                <div className="container-menu">
                    <div className="box-menu atendimento">
                        <span><TiMessages className="icon-menu"/></span>
                        <span>Atendimento</span>
                        <div className="metodos-contato">
                            <div>
                                <AiOutlineWhatsApp />
                                <a href="https://www.google.com" target="_blank" rel="noreferrer">93 99999999</a>
                            </div>
                            <div>
                                <AiOutlineMail />
                                <a href="mailto:turl@gmail.com">turl@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="box-menu carrinho">
                        <span className="search-absulute" onClick={handleSideBarCarrinho}>
                            <AiOutlineShoppingCart className="icon-menu"/>
                            <span className="itens-carrinho">{itensCar}</span>
                        </span>
                        <span>Carrinho</span>
                        <SideBarCarrinho stateDisplay={sideCarrinho} onClickSide={handleSideBarCarrinho}/>
                    </div>
                </div>
            </div>
        </DivisionContainer>
    );
}