import { BoxProduto } from "../box-produto-fi";
import { SectionPesquisa } from "./style";
import imagemteste from "../../assets/imagens-teste/imagem-teste.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const PesquisaProdutos = ({ search }) => {
    const [useSearch, setUseSearch] = useState("");
    const { pesquisa } = useParams();
    const [testeApi, setApi] = useState();

    useEffect(() => {
        document.getElementById("root").scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const api = [

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

        setApi(api);

    }, []);
    
   
    useEffect(() => {
        setUseSearch(() => {
            return testeApi && testeApi.filter(v => v.nomeproduto.toLocaleLowerCase().includes(search.toLocaleLowerCase() || String(pesquisa).toLocaleLowerCase()))
        });

    }, [search, pesquisa, testeApi]);


    return(
        <SectionPesquisa>
            <h1>Resultado da Pesquisa</h1>
            {(useSearch && useSearch.length) === 0 && <p>N??o h?? resultados para a sua pesquisa</p>}
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