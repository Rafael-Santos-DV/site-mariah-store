import { Box, BoxMin, Container, Form } from "./style";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";



function Painel(){
    return(
        <Container>
            <Box>
                <h1>Mariah Store Painel</h1>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <BoxMin>
                        <AiOutlineUserAdd className="icon" />
                        <input type="text" name="username" placeholder="Nome de usuário" />
                    </BoxMin>

                    <BoxMin>
                        <RiLockPasswordFill className="icon" />
                        <input type="password" name="password" placeholder="Senha" />
                    </BoxMin>

                    <input type="submit" value="Login" />
                </Form>
            </Box>
        </Container>
    );
}


export default Painel;