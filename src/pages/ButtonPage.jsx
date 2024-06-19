import React from 'react';

import Button from '../components/Button';

const ButtonPage = () => {
    const btns = [
        { label: 'Click me', props: 'primary with_icon rounded', className: "test" },
        { label: 'Don\'t click me', props: 'warning', onClick: () => console.log('clicked') },
        { label: 'Danger', props: 'danger with_icon outline rounded', },
        { label: 'primary outline', props: 'danger with_icon outline rounded', onMouseEnter: () => console.log('mouse entered') },
    ]

    const parseProps = (propsString) => {
        return propsString.split(' ').reduce((acc, prop) => {
            acc[prop] = true;
            return acc;
        }, {});
    };

    const renderedBtnsPage = btns.map((btn, index) => <Button key={index} className={btn.className} {...parseProps(btn.props)}  {...btn}> {btn.label}</Button>)

    return (
        <div className="flex flex-col m-20 gap-y-4">
            {renderedBtnsPage}
        </div>)
}


export default ButtonPage
