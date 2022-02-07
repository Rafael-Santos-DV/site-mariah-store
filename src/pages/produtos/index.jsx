import { ContainerProdutos } from "./style";
import imagemteste from "../../assets/imagens-teste/imagem-teste.png";
import { BoxProduto } from "../../components/box-produto-fi";
import { FiltroCores } from "../../components/filtro-cores";
import { useEffect } from "react";


export const RotaProdutos = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return(
        <ContainerProdutos>
            <div className="box-filtro">
                <FiltroCores />
            </div>
            <div className="grid-produtos">
                <BoxProduto 
                    idproduto="1"
                    urlproduto={imagemteste}
                    tituloproduto="novo produto"
                    nomeproduto="novo produto"
                    precoproduto="33,00"
                />

                <BoxProduto 
                    idproduto="1"
                    urlproduto={imagemteste}
                    tituloproduto="novo produto"
                    nomeproduto="novo produto"
                    precoproduto="33,00"
                />

                <BoxProduto 
                    idproduto="1"
                    urlproduto={imagemteste}
                    tituloproduto="novo produto"
                    nomeproduto="novo produto"
                    precoproduto="33,00"
                />

                <BoxProduto 
                    idproduto="1"
                    urlproduto={imagemteste}
                    tituloproduto="novo produto"
                    nomeproduto="novo produto"
                    precoproduto="33,00"
                />

                <BoxProduto 
                    idproduto="1"
                    urlproduto={imagemteste}
                    tituloproduto="novo produto"
                    nomeproduto="novo produto"
                    precoproduto="33,00"
                />
                  <BoxProduto 
                    idproduto="1"
                    urlproduto={imagemteste}
                    tituloproduto="novo produto"
                    nomeproduto="novo produto"
                    precoproduto="33,00"
                />
                  <BoxProduto 
                    idproduto="1"
                    urlproduto={imagemteste}
                    tituloproduto="novo produto"
                    nomeproduto="novo produto"
                    precoproduto="33,00"
                />
                
            </div>
        </ContainerProdutos>
    );
}