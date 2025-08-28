'use client'
import Principal from '../components/principal';
import Parametro from '../components/parametro';
import { Texto1, Texto2, Texto3 } from '../components/parametro';

export default function Default() {
    return (
        <div>
            <Principal />
            <Parametro />
            <Texto1/>
            <Texto2/>
            <Texto3 cor="red" tipo="bold">Terceiro Texto</Texto3>
        </div>
    )
}