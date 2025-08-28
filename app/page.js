'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    useEffect(
        () => {
            const token = 'testedetoken';
            {/*As chaves são opcionais se a condição if conter apenas um comando*/}
            if (token) 
                router.push('/default');
            else
                router.push('/login');
        },[router]
    );

    return null;
}