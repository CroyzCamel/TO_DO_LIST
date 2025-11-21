import React, { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {

        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Erro ao carregar do Local Storage:", error);
            return initialValue;
        }
    });

    useEffect(() => {

        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Erro ao salvar no Local Storage:", error);
        }

    },
        [key, value]
    );

    return [value, setValue];
}