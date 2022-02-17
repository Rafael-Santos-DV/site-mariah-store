import { BoxProduto } from "../box-produto-fi";
import { SectionPesquisa } from "./style";
import imagemteste from "../../assets/imagens-teste/imagem-teste.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const PesquisaProdutos = ({ search }) => {
    const [useSearch, setUseSearch] = useState("");
    const { pesquisa } = useParams();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const testeApi = [
        {
            idproduto: "131313",
            urlproduto: imagemteste,
            tituloproduto: "titulo produto",
            nomeproduto: "camisa",
            precoproduto: "10,00"
        },
        {
            idproduto: "131313",
            urlproduto: imagemteste,
            tituloproduto: "titulo produto",
            nomeproduto: "blusa",
            precoproduto: "10,00"
        },
        {
            idproduto: "131313",
            urlproduto: imagemteste,
            tituloproduto: "titulo produto",
            nomeproduto: "blusa",
            precoproduto: "10,00"
        },
        {
            idproduto: "131313",
            urlproduto: imagemteste,
            tituloproduto: "titulo produto",
            nomeproduto: "blusa",
            precoproduto: "10,00"
        },
        {
            idproduto: "131313",
            urlproduto: imagemteste,
            tituloproduto: "titulo produto",
            nomeproduto: "blusa",
            precoproduto: "10,00"
        }
    ]
   
    useEffect(() => {
        setUseSearch(() => {
            return testeApi.filter(v => v.nomeproduto.toLocaleLowerCase().includes(search.toLocaleLowerCase() || String(pesquisa).toLocaleLowerCase()))
        });

    }, [search, pesquisa]);


    return(
        <SectionPesquisa>
            <h1>Resultado da Pesquisa</h1>
            {useSearch.length === 0 && <p>Não há resultados para a sua pesquisa</p>}
            <div className="gallery-pesquisa">
                {useSearch && useSearch.map((valor, i) => (
                    <BoxProduto 
                        key={i}
                        idproduto={valor.idproduto}
                        urlproduto={valor.urlproduto}
                        tituloproduto={valor.tituloproduto}
                        nomeproduto={valor.nomeproduto}
                        precoproduto={valor.precoproduto}
                    />
                ))}
               
            </div>
        </SectionPesquisa>
    );
}