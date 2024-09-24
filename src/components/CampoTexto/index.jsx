import React from 'react';


export default function CampoTexto(props) {
    return (
        <>
            <label className="label-campo">{props.label}:</label>
            <input
                type="text"
                name={props.name}
                value={props.value} // Para controle do componente pai
                onChange={props.onChange} // Para manipulação de mudança
                className="input-campo" // Aplicando a classe CSS
            />
        </>
    );
}

