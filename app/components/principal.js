import React from "react";

export default function Index() { // Exporta a função diretamente
    return (
        <div>
            <h1>Página Inicial</h1>
        </div>
    )
}

/*
Outras formas de declarar uma função:
function  Index () {...} => Função nomeada
const Index = function() {...} => Função anônima
export default function () => Função anônima exportada diretamente 
export default () => {...} => Arrow function exportada diretamente
export default () => ... => Arrow function em uma linha
*/