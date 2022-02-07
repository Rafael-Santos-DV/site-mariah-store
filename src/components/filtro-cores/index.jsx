import React  from "react";
import { AsideFiltro } from "./style";

const CoresDinamica = (props) => {

    const AtivarFiltro = (e) => {
        console.log(e.target.value);
    }

    return(
        <React.Fragment>
            <label className="box-filtro">
                <input type="radio" className="select-cor" value={props.value} name={props.name} onClick={AtivarFiltro}/>
                <span>nome da cor</span>
                <span className="cor-filtro" style={{backgroundColor: props.color || "#000000"}}></span>
            </label>
        </React.Fragment>
        
    );
}

export const FiltroCores = () => {
   
    return(
        <AsideFiltro className="filtro-cores">
            <h2>Filtrar por</h2>
            <strong>Cor</strong>
            <CoresDinamica color="green" value="green" name="color" />
            <CoresDinamica color="blue"  value="blue" name="color" />
            <CoresDinamica color="pink" value="pink" name="color" />
        </AsideFiltro>
    );
}