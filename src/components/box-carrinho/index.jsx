import React, { useContext, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { useEffect } from "react/cjs/react.development";
import imagemTeste from "../../assets/imagens-teste/imagem-teste.png";
import { GlobalContext } from "../../context";


export const BoxCarrinho = () => {
    const [pedido, setPedido] = useState();
    const [,,,, SetAddPedido, addPedido] = useContext(GlobalContext);
    

    useEffect(() => {
        setPedido(addPedido);

    }, [addPedido]);

    const handlePlus = (index) => {
            
        SetAddPedido(value => {
            const newValue = [...value];
            newValue[index].quant += 1;

            return newValue;
            
        })
        
    }

    const handleDelete = (index) => {
        let refresh = false;
        SetAddPedido(value => {
            
            const newValue = [...value];
            delete newValue[index];
            refresh = true;

            return newValue;
            
        })

        if (refresh) {
            window.location.reload();
            refresh = false;
        }
        
    }

    // bug remover pedido ....

    const handleMinus = (index) => {
        SetAddPedido(value => {
            const newValue = [...value];
            
            if (newValue[index].quant > 0) {
                newValue[index].quant -= 1;
            }
       
            return newValue;
            
        })
    }

    return (
        <React.Fragment>
                {typeof pedido === "object" && pedido.map((valores, i) => (
                    <div className="box-produto-confirm" key={i}>
                        <img src={imagemTeste} alt="" />
                        <div className="box-infos">
                            <div>
                                <strong>{ valores.nomeproduto }</strong>
                                <span className="button-ex" onClick={() => handleDelete(i)}><BsTrashFill /></span>
                            </div>
                            <div>
                                <div className="container-edit">
                                    <span onClick={() => handleMinus(i)}><AiOutlineMinus /></span>
                                    <span>{ valores.quant }</span>
                                    <span onClick={() => handlePlus(i)}><AiOutlinePlus /></span> 
                                </div>
                                <strong>{ String(parseFloat(valores.precoproduto).toFixed(2)).replace(".", ",") }</strong>
                            </div>
                        </div>
                    </div>
                ))
            }
        </React.Fragment>
        
    )
};