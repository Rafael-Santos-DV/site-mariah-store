import { Link } from "react-router-dom";
import { FooterStyle } from "./style"
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai"
import { FaMapMarkerAlt } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs";
import { useEffect } from "react";

export const Footer = () => {
    useEffect(() => {
        if (localStorage.getItem("mariahstore")) {
            document.querySelector(".box-politica-cookies").style.display = "none";
        }
    }, []);

    const handleClick = () => {
        if (!localStorage.getItem("mariahstore")) {
            localStorage.setItem("mariahstore", "true");
            document.querySelector(".box-politica-cookies").style.display = "none";
        }
    }

    return(
        <FooterStyle>
            <div className="box-elementos-footer">
                <div className="container-departamento">
                    <h2>Departamento</h2>
                    <nav className="box-links-navigation">
                        <ul>
                            <li><Link className="links-navigation" to="/">Início</Link></li>
                        </ul>
                        <ul>
                            <li><Link className="links-navigation"  to="/produtos">Produtos</Link></li>
                        </ul>
                        <ul>
                            <li> <Link className="links-navigation"  to="/contato">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="container-contato">
                    <h2>Entre em contato</h2>
                    <div>
                        <AiOutlineWhatsApp />
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">93 99999999</a>
                    </div>
                    <div>
                        <AiOutlineMail />
                        <a href="mailto:turl@gmail.com">turl@gmail.com</a>
                    </div>
                    <div>
                        <FaMapMarkerAlt />
                        <span>rua tall</span>
                    </div>
                </div>
                <div className="container-conectado">
                    <h2>Permaneça conectado</h2>
                    <a href="https://www.instagram.com/camilly_santos077/" target="_blank" rel="noreferrer" ><BsInstagram /></a>
                </div>
            </div>
            <div className="box-footer">
                <span>Copyright Mariah Store - {new Date().getFullYear()}. Todos os direitos reservados.</span>
            </div>
            <div className="box-politica-cookies" >
                <p>Ao navegar por este site você aceita o uso de cookies para agilizar a sua experiência de compra.</p>
                <span onClick={handleClick}>Entendi</span>
            </div>
        </FooterStyle>
    )
};