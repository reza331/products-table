import React from 'react'

export default function useDebounce() {

    const debounce = (fn: any, delay: number) => {

        let timer: NodeJS.Timeout

        return (...args: any) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn(...args);
            }, delay);
        }

    }

    return { debounce }

}
