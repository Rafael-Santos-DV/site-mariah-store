import { SectionsSlides } from "./styles";
import imagemTeste from "../../assets/imagens-teste/imagem-teste.png";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { BoxProduto } from "../box-produto-fi";


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
                    <BoxProduto 
                        idproduto="1"
                        urlproduto={imagemTeste}
                        tituloproduto="T-shirt florzinha"
                        nomeproduto="T-shirt florzinha"
                        precoproduto="10,00"
                    />
                    <BoxProduto 
                        idproduto="1"
                        urlproduto={imagemTeste}
                        tituloproduto="T-shirt florzinha"
                        nomeproduto="T-shirt florzinha"
                        precoproduto="10,00"
                    />
                    <BoxProduto 
                        idproduto="1"
                        urlproduto={imagemTeste}
                        tituloproduto="T-shirt florzinha"
                        nomeproduto="T-shirt florzinha"
                        precoproduto="10,00"
                    />
                     <BoxProduto 
                        idproduto="1"
                        urlproduto={imagemTeste}
                        tituloproduto="T-shirt florzinha"
                        nomeproduto="T-shirt florzinha"
                        precoproduto="10,00"
                    />
                </div>
                <div className="button-right"><BsFillArrowRightCircleFill className="icons-next-anter" onClick={handleClickSlideRight}/></div>
            </main>
        </SectionsSlides>
    );
}