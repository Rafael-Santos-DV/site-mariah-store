import { Link } from "react-router-dom";


export const BoxProduto = (props) => {
    return(
        <div className="box-produto">
            <Link className="link-container" to={`/produtos/${props.idproduto}`}>
                <img src={props.urlproduto} alt={props.tituloproduto} />
                <strong className="nome-produto">{props.nomeproduto}</strong>
                <strong className="preco-produto">R${props.precoproduto}</strong>
                <span className="button-comprar">comprar</span>
            </Link>
        </div>
    );
}