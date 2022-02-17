import { useParams } from "react-router-dom"
import { SectionCarrinho } from "./style"
import imagemteste from "../../assets/imagens-teste/imagem-teste.png";
import imagemteste2 from "../../assets/imagens-teste/imagem-teste-2.png";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { useState, useEffect, useContext } from "react";
import { HiOutlinePlus, HiMinus } from "react-icons/hi";
import { GlobalContext } from "../../context";



export const CompraProduto = () => {
    const { id } = useParams();
    const [urlImage, SeturlImage] = useState();
    const [infoPedido, SetInfoPedido] = useState();
    const [elementos, setElementos] = useState(0);
    const [erro, setErro] = useState(null);
    const [disabledSelect, SetdisabledSelect] = useState(false);
    const [,,,, SetAddPedido] = useContext(GlobalContext);


    const simuladorAPI = 
        {
            idproduto: 3,
            nomeproduto: "camisa",
            precoproduto: 10
        }
    

    // add quantidade do produto
    const handlePedido = (e) => {
        const element = e.target;
        SetInfoPedido(v => ({ ...v, [element.name]: element.value }));

    }

    useEffect(() => window.scrollTo(0, 0), [id]);

    useEffect(() => {

        const clear = setTimeout(() => {
            setErro(null);
            
        }, 2000);

       return () => {
           clearTimeout(clear);
       }

    }, [erro])


    const handleSelect = () => {
        SetdisabledSelect(true);
    }

    useEffect(() => {
        
        SeturlImage(imagemteste);
        SetInfoPedido(v => (
            { 
                ...v, nomeproduto: simuladorAPI.nomeproduto,
                idproduto: simuladorAPI.idproduto,
                precoproduto: simuladorAPI.precoproduto

            }));

    }, [simuladorAPI.nomeproduto, simuladorAPI.idproduto, simuladorAPI.precoproduto]);


    const handleChangeImage = (image) => {
        SeturlImage(image);
        
    }

    const handleAddPedido = () => {
        
        (
            (String(infoPedido.tamanho) === "null")
            || (elementos === 0) 
            || (infoPedido.tamanho === "null")
        ) 
        && setErro(true);


        if (infoPedido.nomeproduto !== undefined && infoPedido.nomeproduto !== "null" 
        && infoPedido.cor !== undefined && infoPedido.cor !== "undefined" && String(infoPedido.cor) !== "null" 
        && infoPedido.tamanho !== undefined && infoPedido.tamanho !== "undefined" && String(infoPedido.tamanho) !== "null" 
        && elementos >= 1) {
            SetInfoPedido(v => ({...v, quant: elementos}));
        } else {
            setErro(true);
            
        }
        
    
    }
    

    useEffect(() => {

        if (infoPedido?.quant) {            
            setElementos(0);
            setErro(false);
            const newPedido = [];
            let replyQuant = false;
            SetAddPedido(v => {
                
                typeof v === "object" && v !== null && v.map(h => newPedido.push(h));
                

                typeof v === "object" && v !== null && v.map((v,i) => {
                    if (v?.idproduto === infoPedido?.idproduto) {
                        newPedido[i].quant += infoPedido.quant;
                        replyQuant = true;
                    }
                    return ""
                });
                
                if (replyQuant) {

                    replyQuant = false;
                    return (newPedido);
                }

                
                return (v !== undefined) ? 
                ([...v, infoPedido])
                :
                ([infoPedido]);
            });

            window.location.reload();
            
        }
        

    }, [infoPedido, SetAddPedido])


    return(
            <SectionCarrinho>
                <div className="container-fotos-produto">
                    <div className="box-fotos">

                        <div className="box-mini-fotos">

                            <img src={imagemteste} alt="" onClick={() => handleChangeImage(imagemteste)} />
                            <img src={imagemteste2} alt="" onClick={() => handleChangeImage(imagemteste2)} />

                        </div>

                        <div className="foto-big">
                            <img src={urlImage} alt="" />
                        </div>

                    </div>
                    <div className="infos-produto">

                        <strong>info detalhe 1</strong>
                        <strong>info detalhe 1</strong>

                        <ul>
                            <li>P - 36 ao 38</li>
                            <li>M - 40 ao 42</li>
                            <li>G - 44 ao 46</li>
                            <li>GG - 48 ao 50</li>
                        </ul>

                    </div>
                    <div className="box-redes-sociais">

                        <a href="https://" target="_blank" rel="noreferrer" >
                            <AiFillInstagram />
                        </a>
                        <a href="https://" target="_blank" rel="noreferrer" >
                            <IoLogoWhatsapp />
                        </a>

                    </div>
                </div>
                <div className="container-formulario">
                    <form onSubmit={(e) => e.preventDefault()} >
                        <h1><legend>Nome da roupa</legend></h1>
                        <strong>R$10,00</strong>
                        <div className="box-select-op">
                            <label className="container-cor">
                                <span>cor</span>
                                <select name="cor" value={infoPedido?.cor || "null"} onChange={handlePedido} onClick={handleSelect}>
                                    <option select="true" disabled={disabledSelect} value="null" >Cor</option>
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Green">Green</option>
                                </select>
                            </label>
                            <label className="container-tamanho">
                                <span>tamanho</span>
                                <select value={infoPedido?.tamanho || "null"} name="tamanho" onChange={handlePedido} onClick={handleSelect} >
                                    <option 
                                        select="true" 
                                        value="null" 
                                        disabled={disabledSelect}>tamanho
                                    </option>

                                    <option value="p">P</option>

                                    <option value="m">M</option>

                                    <option value="g">G</option>

                                </select>
                            </label>
                        </div>

                        <div className="box-action">
                            <div className="box-add-rm">
                                <span><HiMinus onClick={() => setElementos(e => e && e-1)} /></span>
                                <span>{elementos}</span>
                                <span><HiOutlinePlus onClick={() => setElementos(e => e+1)} /></span>
                            </div>
                            <input type="submit" name="action" value="Comprar" onClick={handleAddPedido} />
                            
                        </div>
                        <div className="box-alert">
                            <p>{(erro && "Informações pendentes!") || " "}</p>
                            <p>{(erro === false && "Pedido adicionado ao carrinho!") || " "}</p>
                        </div>
                        <div className="box-infos-wh">
                            <strong>Atenção: você pode obter mais informações em nosso Whatsapp.</strong>
                            <ul>
                                <li>Formas de pagamentos</li>
                                <li>Cores</li>
                                <li>Tamanho</li>
                                <li>quantidade</li>
                                <li>etc</li>
                            </ul>
                        </div>
                    </form>
                </div>
            </SectionCarrinho>
        );
}