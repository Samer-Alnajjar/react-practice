import React, { useState } from 'react';
import Accordion from '../components/Accordion';

const AccordionPage = () => {
    const [expandedIndex, setExpendedIndex] = useState(0);

    const accords = [
        { label: 'What is your name ?', content: 'Samer Alnajjar' },
        { label: 'what is your career ?', content: 'Software Engineer' },
        { label: 'Are you single or married ?', content: 'Married' }
    ]

    const handleClick = (index) => {
        setExpendedIndex((oldValue) => {
            if (oldValue === index) {
                return (-1)
            } else {
                return (index)
            }
        })
    }

    const renderedAccords = accords.map((accord, index) => {
        return (
            <Accordion key={index} style={{ width: 'fit-content' }} onClick={() => { handleClick(index) }} label={accord.label} index={index} expandedIndex={expandedIndex} content={accord.content} />
        )
    })

    return (
        <div >
            {renderedAccords}
        </div >)
}


export default AccordionPage
