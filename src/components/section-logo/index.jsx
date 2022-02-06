import { SectionLogoComponent } from "./style";
import logo from "../../assets/logo/logo-mariah-store-oficial.jpg";

export const SectionLogo = () => {
    return(
        <SectionLogoComponent>
            <img src={logo} alt="logo Mariah Store"  />
        </SectionLogoComponent>
    );
}