import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import { NavigationNav } from "./style";


export const ContainerNavagation = () => {
    const [,permiMobile] = useContext(GlobalContext);

    return (
        <NavigationNav ativar={permiMobile}>
            <div className="box-links-navigation">
                <ul>
                    <li><Link className="links-navigation" to="">Início</Link></li>
                </ul>
                <ul>
                    <li><Link className="links-navigation"  to="">Produtos</Link></li>
                </ul>
                <ul>
                    <li> <Link className="links-navigation"  to="">Contato</Link></li>
                </ul>
                <ul>
                    <li><Link className="links-navigation"  to="">Trocas e devoluções</Link></li>
                </ul>               
                
            </div>
        </NavigationNav>
    );
}