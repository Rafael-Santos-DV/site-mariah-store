import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import { NavigationNav } from "./style";


export const ContainerNavagation = () => {
    const [mobileAtivador, permiMobile] = useContext(GlobalContext);
  
    return (
        <NavigationNav ativar={permiMobile} onClick={() => window.innerWidth <= 768 && mobileAtivador() }>
            <div className="box-links-navigation">
                <ul>
                    <li><Link className="links-navigation" to="/">Início</Link></li>
                </ul>
                <ul>
                    <li><Link className="links-navigation"  to="/produtos">Produtos</Link></li>
                </ul>
                <ul>
                    <li> <Link className="links-navigation"  to="/contato">Contato</Link></li>
                </ul>
                {/* <ul>
                    <li><Link className="links-navigation"  to="">Trocas e devoluções</Link></li>
                </ul>                */}
                
            </div>
        </NavigationNav>
    );
}