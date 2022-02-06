import { Link } from "react-router-dom";
import { SectionPromocoesContainer } from "./style";
import imagemteste from "../../assets/imagens-teste/imagem-teste-2.png";


export const SectionPromocoes = () => {
    return(
        <SectionPromocoesContainer>
            <h2>Promocões</h2>
            <div className="box-all-produtos">
                <div className="container-promocoes">
                    <Link className="link-container-promocoes" to="">
                        <img src={imagemteste} alt=""/>
                        <strong>KIT - 5 T-SHIRTS MASCULINAS</strong>
                        <div className="box-info-produto">
                            <s className="preco-anterior">R$ 200,00</s>
                            <span className="preco-novo">R$ 100,00</span>
                        </div>
                        <div className="button-comprar">
                            comprar
                        </div>
                        <div className="desconto-promocao">
                            25%<br/>
                            off
                        </div>
                    </Link>
                </div>
            </div>
        </SectionPromocoesContainer>
    );
}