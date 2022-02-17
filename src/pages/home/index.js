import React, { useEffect } from "react";
import { DivRedesSocias } from "../../components/container-redes-socias";
import { SectionPromocoes } from "../../components/promocoes";
import { SectionSlide } from "../../components/section-destaque-lancamentos";
import { SectionLogo } from "../../components/section-logo";


export const Home = () => {

    useEffect(() => {
        document.getElementById("root").scrollTo(0, 0);
    }, [])

    return(
        <React.Fragment>
            <SectionLogo />
            <SectionSlide title="Destaques" idSlide="slide1"/>
            <SectionSlide title="Lançamentos" idSlide="slide2"/>
            <SectionPromocoes />
            <DivRedesSocias />
        </React.Fragment>
    );
}