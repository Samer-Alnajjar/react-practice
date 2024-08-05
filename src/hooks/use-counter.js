import { useState, useEffect } from 'react';

export default function useCounter(initialValue) {
    const [counter, setCounter] = useState(initialValue || 0);

    const increment = (_e) => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        console.log(counter)
    }, [counter])

    return {
        counter,
        increment
    }
}
