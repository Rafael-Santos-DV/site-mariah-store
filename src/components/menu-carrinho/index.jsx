import { useState,  useEffect, useContext } from "react";
import { AsideCarrinho } from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { BoxCarrinho } from "../box-carrinho";
import { GlobalContext } from "../../context";

export const SideBarCarrinho = ( { onClickSide, stateDisplay } ) => {
    const [display, setDisplay] = useState();
    const [itemsCarrinho, SetItemsCarrinho] = useState();
    const [,,,,, addPedido] = useContext(GlobalContext);
    const [totalCarrinho, SettotalCarrinho] = useState();

    useEffect(() => {
        SettotalCarrinho(() => {
           
            let total = 0.00;
            typeof addPedido === "object" && addPedido !== null && addPedido.forEach((v) => {
                
                total += (v.precoproduto * v.quant);
            })
           
            return total;
        });
        

    }, [addPedido])

    useEffect(() => {
        setDisplay(stateDisplay);
    }, [stateDisplay]);

    
    useEffect(() => {
        SetItemsCarrinho(() => {
            const pedidoJson = JSON.parse(localStorage.getItem("pedido") !== "undefined" && localStorage.getItem("pedido") !== null && localStorage.getItem("pedido"));
            
            return [{ ...pedidoJson }];
        })

    }, [localStorage.getItem["pedido"]]);
    
  

    return (
        <AsideCarrinho className="box-add-carrinho" stateDisplay={display}>
            <div className="div-cega" onClick={() => stateDisplay && onClickSide()}></div>
            <div className="box-pedidos-carrinho">
                <div className="container-disabled-sidebar" onClick={() => stateDisplay && onClickSide()}>
                    <h1>Carrinho de Compras</h1>
                    <span><AiOutlineCloseCircle /></span>
                </div>

                <BoxCarrinho />

                <div className="box-total">
                    <span>Total</span>
                    <strong>R${ String(parseFloat(totalCarrinho).toFixed(2)).replace(".", ",") }</strong>
                </div>
                <div className="button-comprar">
                    <a href="https://www.google.com" rel="noreferrer" target="_blank" >
                        Comprar
                        <RiWhatsappFill />
                    </a>
                </div>
            </div>
            
        </AsideCarrinho>
    )
}