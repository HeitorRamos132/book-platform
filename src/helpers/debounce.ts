import {useRef} from 'react'

const useDebounce = (action: (...args: string[]) => void, wait: number) => {
    const timeoutRef = useRef<number | undefined>(undefined)

    const debouncedAction = (...args: string[]) => {
        window.clearTimeout(timeoutRef.current)
        timeoutRef.current = window.setTimeout(()=>{
            action(...args);
        }, wait)
    }

    return debouncedAction
}

export default useDebounce