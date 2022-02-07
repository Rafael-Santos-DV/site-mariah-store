import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContainerHeader } from "../components/container-header";
import { Footer } from "../components/footer";
import { Header } from "../components/header/header";
import { ContainerNavagation } from "../components/navigation";
import { ContainerRoot } from "../components/style-initial";
import { GlobalContext } from "../context";
import { PaginaContato } from "../pages/contato";
import { Home } from "../pages/home";
import { RotaProdutos } from "../pages/produtos";


function App() {

  const [permiMobile, setPermiMobile] = useState(true);

  const mobileAtivador = () => {
      setPermiMobile(v => !v);
      if (permiMobile) {
          document.body.style.overflow = "hidden";
      }else {
          document.body.style.overflow = "auto";
      }
  }

  return (
    <GlobalContext.Provider value={[mobileAtivador, permiMobile]}>
      <BrowserRouter>
          <ContainerRoot>
            <Header>
              <ContainerHeader />
              <ContainerNavagation />
            </Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<RotaProdutos />} />
              <Route path="/contato" element={<PaginaContato />} />
            </Routes>
            <Footer />
          </ContainerRoot>
      </BrowserRouter>
    </GlobalContext.Provider>
   
  );
}

export default App;
