import {useState, useEffect} from 'react'

export const useRandomId = () => {
    const symbols = `qwertyuiop[]asdfghjkl;'[zxcvbnm,./]`
    const [Symbols, setSymbols] = useState('')

    useEffect(() => {
        for (let i = 0; i < array.length; i++) {
            const random = Math.floor(
                Math.random() * (sybols.lenth)
            )
            if(10 > i){
                setSymbols(prev => (
                    prev + symbols[random]
                ))
            }
        }
    }, [])
return Symbols;
}