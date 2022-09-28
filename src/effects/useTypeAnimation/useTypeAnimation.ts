import {useEffect, useRef, useState} from 'react';

const useTypeAnimation = (text: string) => {
    const [currentText, setText] = useState('|');
    const [hasPipe, setPipe] = useState(true);
    const timoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (currentText.length - 1 < text.length) {
            timoutRef.current = setTimeout(() => {
                const endChar = hasPipe || currentText.length === text.length ? ' ' : '|';
                setText(text.substring(0, currentText.length) + endChar);
                setPipe(!hasPipe);
            }, 200);

            return () => {
                clearTimeout(timoutRef.current);
            }
        }
    }, [text, currentText, hasPipe]);

    return [currentText];
}

export default useTypeAnimation;
