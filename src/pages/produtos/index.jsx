import { ContainerProdutos } from "./style";
import imagemteste from "../../assets/imagens-teste/imagem-teste.png";
import { BoxProduto } from "../../components/box-produto-fi";
import { FiltroCores } from "../../components/filtro-cores";
import { useEffect, useState } from "react";


export const RotaProdutos = () => {
    const [produtoApi, setprodutoApi] = useState();
    const [filtroColor, setFiltroColor] = useState("");
    const [API_TESTE, SetapiTeste] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    useEffect(() => {
        const API = [
            {
                corproduto: ["vermelha", "#ff0303"],
                nomeproduto: "Camiseta Tall",
                urlproduto: [imagemteste, imagemteste],
                tituloproduto: "roupa gola",
                idproduto: "444",
                precoproduto: "33,00",
                 
            },
            {
                corproduto: ["vermelha", "#ff0303"],
                nomeproduto: "Camiseta Tall",
                urlproduto: [imagemteste, imagemteste],
                tituloproduto: "roupa gola",
                idproduto: "444",
                precoproduto: "33,00",
                 
            },
            {
                corproduto: ["vermelha", "#ff0303"],
                nomeproduto: "Camiseta Tall",
                urlproduto: [imagemteste, imagemteste],
                tituloproduto: "roupa gola",
                idproduto: "444",
                precoproduto: "33,00",
                 
            },
            {
                corproduto: ["vermelha", "#ff0303"],
                nomeproduto: "Camiseta Tall",
                urlproduto: [imagemteste, imagemteste],
                tituloproduto: "roupa gola",
                idproduto: "444",
                precoproduto: "33,00",
                 
            },
            {
                corproduto: ["vermelha", "#ff0303"],
                nomeproduto: "Camiseta Tall",
                urlproduto: [imagemteste, imagemteste],
                tituloproduto: "roupa gola",
                idproduto: "444",
                precoproduto: "33,00",
                 
            },
            {
                corproduto: ["azul", "#8400ff"],
                nomeproduto: "Camiseta Tall",
                urlproduto: [imagemteste, imagemteste],
                tituloproduto: "roupa gola",
                idproduto: "444",
                precoproduto: "33,00",
                 
            },
            {
                corproduto: ["vermelha", "#ff0303"],
                nomeproduto: "Camiseta Tall",
                urlproduto: [imagemteste, imagemteste],
                tituloproduto: "roupa gola",
                idproduto: "444",
                precoproduto: "33,00",
                 
            },
            {
                corproduto: ["vermelha", "#ff0303"],
                nomeproduto: "Camiseta Tall",
                urlproduto: [imagemteste, imagemteste],
                tituloproduto: "roupa gola",
                idproduto: "444",
                precoproduto: "33,00",
                 
            }
            ,
            {
                corproduto: ["vermelha", "#ff0303"],
                nomeproduto: "Camiseta Tall",
                urlproduto: [imagemteste, imagemteste],
                tituloproduto: "roupa gola",
                idproduto: "444",
                precoproduto: "33,00",
                 
            },
            {
                corproduto: ["vermelha", "#ff0303"],
                nomeproduto: "Camiseta Tall",
                urlproduto: [imagemteste, imagemteste],
                tituloproduto: "roupa gola",
                idproduto: "444",
                precoproduto: "33,00",
                 
            },
            {
                corproduto: ["verde", "#35ff0d"],
                nomeproduto: "Camiseta Tall",
                urlproduto: [imagemteste, imagemteste],
                tituloproduto: "roupa gola",
                idproduto: "444",
                precoproduto: "33,00",
                 
            },
        ]
    
        SetapiTeste(API);
        
    }, [])

    

    useEffect(() => {
        setprodutoApi(() => {
            return API_TESTE.filter(v => v.corproduto[1].includes(filtroColor))
        });

    }, [API_TESTE, filtroColor])
    

    return(
        <ContainerProdutos>
            <div className="box-filtro">
                <FiltroCores api_dices={API_TESTE} state_color={setFiltroColor} />
            </div>
            <div className="grid-produtos">

                {produtoApi && produtoApi.map((valores, i) => (
                    <BoxProduto 
                        key={i}
                        colorproduto={valores.colorproduto}
                        idproduto={valores.idproduto}
                        urlproduto={valores.urlproduto[0]}
                        tituloproduto={valores.tituloproduto}
                        nomeproduto={valores.nomeproduto}
                        precoproduto={valores.precoproduto}
                    />
                ))}
                
            </div>
        </ContainerProdutos>
    );
}