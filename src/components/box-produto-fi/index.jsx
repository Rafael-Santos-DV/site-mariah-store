import { Link } from "react-router-dom";

export const BoxProduto = (props) => {
    return(
        <div className="box-produto">
            <Link className="link-container" to={`/modeloproduto/${props.idproduto}`}>
                <img src={props.urlproduto} alt={props.tituloproduto} />
                <strong className="nome-produto">{props.nomeproduto}</strong>
                <span className="preco-produto">R${props.precoproduto}</span>
                <span className="button-comprar">comprar</span>
            </Link>
        </div>
    );
}