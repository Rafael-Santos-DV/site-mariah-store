import { SectionContato } from "./style";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect } from "react";

export const PaginaContato = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <SectionContato>
            <div className="container-contato">
                <h1>Contato</h1>
                <p>Atendimento online em nosso WhatsApp: Seg à sex 09:00h às 17:00h</p>
                <div>
                    <AiOutlineWhatsApp />
                    <a href="https://www.google.com" target="_blank" rel="noreferrer">93 99999999</a>
                </div>
                <div>
                    <AiOutlineMail />
                    <a href="mailto:turl@gmail.com">turl@gmail.com</a>
                </div>
                <div>
                    <FaMapMarkerAlt />
                    <span>rua tall</span>
                </div>
            </div>
            <div className="container-formulario">
                <label htmlFor="nome">Nome completo</label> 
                <input type="text" name="nome" id="nome" />
                <label htmlFor="email">E-mail</label> 
                <input id="email" type="text" name="email" />
                <label htmlFor="telefone">Telefone</label> 
                <input id="telefone" type="text" name="telefone" />
                <label htmlFor="mensagem">Mensagem</label>
                <textarea rows={15} name="mensagem" id="mensagem"></textarea>
                <input type="submit" name="enviar" />
            </div>
        </SectionContato>
    );
}