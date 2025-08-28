import React, { Children } from "react";

export default function Parametro() {
    return (
        <div>
            <h2>Texto Padrão</h2>
        </div>
    )
}

export function Texto1() {
    return (
        <div>
            <h2>Primeiro Texto</h2>
        </div>
    )
}

export function Texto2() {
    return (
        <div>
            <h2>Segundo Texto</h2>
        </div>
    )
}

export function Texto3({ children, cor, tipo }) {
    return (
        <div>
            <h2>
                <span style={{color: cor, fontWeight: tipo}}>
                    {children}
                </span>
            </h2>
        </div>
    )
}