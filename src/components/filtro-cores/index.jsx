import React, { useState,  useEffect}  from "react";
import { AsideFiltro } from "./style";

const CoresDinamica = (props) => {

    const AtivarFiltro = (e) => {
        props.state_color(e.target.value);
    }

    return(
        <React.Fragment>
            <label className="box-filtro">
                <input type="radio" className="select-cor" value={props.value} name={props.name} onClick={AtivarFiltro}/>
                <span>{props.corname}</span>
                <span className="cor-filtro" style={{backgroundColor: props.color || "#000000"}}></span>
            </label>
        </React.Fragment>
        
    );
}

export const FiltroCores = ({ api_dices, state_color }) => {
    const [uniqueColor, SetuniqueColor] = useState();

    useEffect(() => {   
        const allNames = [];
        const allColor = [];
        const singleColor = [];
        const singleName = [];
        const  NameColor = [];


        api_dices && api_dices.forEach(v => {
            allColor.push(v.corproduto[1]);
            allNames.push(v.corproduto[0]);
            
        });

        singleColor.push(...new Set(allColor));
        singleName.push(...new Set(allNames));

        singleName.forEach((value, index) => NameColor.push([value, singleColor[index]]));

        SetuniqueColor(NameColor);


    }, [api_dices]);


    return(
        <AsideFiltro className="filtro-cores">
            <h2>Filtrar por</h2>
            <strong>Cor</strong>

            {uniqueColor && uniqueColor.map((valores, i) => (
                <CoresDinamica
                    state_color={state_color}
                    key={i}
                    color={valores[1]} 
                    value={valores[1]} 
                    name="color"
                    corname={valores[0]}

                />
            ))}

        </AsideFiltro>
    );
}