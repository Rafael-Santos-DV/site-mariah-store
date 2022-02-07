import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ContainerHeader } from "../components/container-header";
import { DivRedesSocias } from "../components/container-redes-socias";
import { Footer } from "../components/footer";
import { Header } from "../components/header/header";
import { ContainerNavagation } from "../components/navigation";
import { SectionPromocoes } from "../components/promocoes";
import { SectionSlide } from "../components/section-destaque-lancamentos";
import { SectionLogo } from "../components/section-logo";
import { ContainerRoot } from "../components/style-initial";
import { GlobalContext } from "../context";


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
          <SectionLogo />
          <SectionSlide title="Destaques" idSlide="slide1"/>
          <SectionSlide title="Lançamentos" idSlide="slide2"/>
          <SectionPromocoes />
          <DivRedesSocias />
          <Footer />
        </ContainerRoot>
      </BrowserRouter>
    </GlobalContext.Provider>
   
  );
}

export default App;
