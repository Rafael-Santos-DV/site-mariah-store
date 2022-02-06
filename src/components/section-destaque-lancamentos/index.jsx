import { Link } from "react-router-dom";
import { SectionsSlides } from "./styles";
import imagemTeste from "../../assets/imagens-teste/imagem-teste.png";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";


export const SectionSlide = ({ title, idSlide }) => {

    const handleClickSlideRight = () => {
        document.getElementById(idSlide)
        .scrollLeft += 240;
       
    }
    const handleClickSlideLeft = () => {
        document.getElementById(idSlide)
        .scrollLeft -= 240;
        
    }

    return(
        <SectionsSlides >
            <h1>{title}</h1>
            <main className="pai-slide-container">
                <div className="button-left"><BsFillArrowLeftCircleFill className="icons-next-anter" onClick={handleClickSlideLeft}/></div>
                <div id={idSlide} className="container-slide-roupas">
                    <Link className="box-roupas-slide" to="">
                        <img src={imagemTeste} alt="" />
                        <strong>T-shirt florzinha</strong>
                        <strong className="preco-produto">R$ 10,00</strong>
                        <span>Comprar</span>
                    </Link>
                    <Link className="box-roupas-slide" to="">
                        <img src={imagemTeste} alt="" />
                        <strong>T-shirt florzinha</strong>
                        <strong className="preco-produto">R$ 10,00</strong>
                        <span>Comprar</span>
                    </Link>
                    <Link className="box-roupas-slide" to="">
                        <img src={imagemTeste} alt="" />
                        <strong>T-shirt florzinha</strong>
                        <strong className="preco-produto">R$ 10,00</strong>
                        <span>Comprar</span>
                    </Link>
                    <Link className="box-roupas-slide" to="">
                        <img src={imagemTeste} alt="" />
                        <strong>T-shirt florzinha</strong>
                        <strong className="preco-produto">R$ 10,00</strong>
                        <span>Comprar</span>
                    </Link>
                    <Link className="box-roupas-slide" to="">
                        <img src={imagemTeste} alt="" />
                        <strong>T-shirt florzinha</strong>
                        <strong className="preco-produto">R$ 10,00</strong>
                        <span>Comprar</span>
                    </Link>
                    <Link className="box-roupas-slide" to="">
                        <img src={imagemTeste} alt="" />
                        <strong>T-shirt florzinha</strong>
                        <strong className="preco-produto">R$ 10,00</strong>
                        <span>Comprar</span>
                    </Link>
                    <Link className="box-roupas-slide" to="">
                        <img src={imagemTeste} alt="" />
                        <strong>T-shirt florzinha</strong>
                        <strong className="preco-produto">R$ 10,00</strong>
                        <span>Comprar</span>
                    </Link>
                    
                </div>
                <div className="button-right"><BsFillArrowRightCircleFill className="icons-next-anter" onClick={handleClickSlideRight}/></div>
            </main>
        </SectionsSlides>
    );
}