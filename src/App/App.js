import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContainerHeader } from "../components/container-header";
import { Footer } from "../components/footer";
import { Header } from "../components/header/header";
import { ContainerNavagation } from "../components/navigation";
import { PesquisaProdutos } from "../components/pesquisa";
import { ContainerRoot } from "../components/style-initial";
import { GlobalContext } from "../context";
import { CompraProduto } from "../pages/compraProduto";
import { PaginaContato } from "../pages/contato";
import { Home } from "../pages/home";
import { RotaProdutos } from "../pages/produtos";


function App() {

  const [permiMobile, setPermiMobile] = useState(true);
  const [useFiltro, setFiltro] = useState("");
  const [addPedido, SetAddPedido] = useState();
  
  // hook para atualizar o estado dos dice, de acordo com o localstorage
  useEffect(() => {
    localStorage.getItem("pedido") !== "undefined" &&
    localStorage.getItem("pedido") !== null && localStorage.getItem("pedido") !== "null" &&
    SetAddPedido(() => JSON.parse(localStorage.getItem("pedido")));
   

  }, []);


// Hook para fazer a limpeza dos dados vazios e adicionar no localstorage
  useEffect(() => {
    const newPedido = [];

    typeof addPedido === "object" && addPedido !== null && addPedido.map((v, i) => {
      
      if (addPedido[i] === null ||
          addPedido[i] === undefined ||
          addPedido[i] === "undefined" ||
          addPedido[i] === "empty" ||
          addPedido[i] === "null"
        ) {

        console.log("mais  um igual a null");

      } else {
        newPedido.push(addPedido[i]);

      }

  })    

   
    addPedido !== "undefined" && newPedido[0] !== "null" && 
    localStorage.setItem("pedido", JSON.stringify(newPedido));
    console.log("esse é o length", newPedido);
   

  }, [addPedido]);


  const mobileAtivador = () => {
      setPermiMobile(v => !v);
      if (permiMobile) {
          document.body.style.overflow = "hidden";
      }else {
          document.body.style.overflow = "auto";
      }
  }
 

  return (
    <GlobalContext.Provider value={[mobileAtivador, permiMobile, useFiltro, setFiltro, SetAddPedido, addPedido]}>
      <BrowserRouter>
          <ContainerRoot>
            <Header>
              <ContainerHeader />
              <ContainerNavagation />
            </Header>
            <Routes>

              <Route path="/" element={<Home />} />

              <Route path="/produtos" element={<RotaProdutos />} />
              
              <Route path="/produtos/:id" element={<CompraProduto />} />

              <Route path="/contato" element={<PaginaContato />} />

              <Route path="/search/:pesquisa" element={<PesquisaProdutos search={useFiltro} />} />

            </Routes>
            <Footer />
          </ContainerRoot>
      </BrowserRouter>
    </GlobalContext.Provider>
   
  );
}

export default App;
