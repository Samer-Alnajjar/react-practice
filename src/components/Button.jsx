import React from 'react';
import classNames from 'classnames';
import { FaAccessibleIcon } from "react-icons/fa";


const Button = ({ primary, warning, danger, outline, rounded, with_icon, children, className, ...rest }) => {
    let btnVariations = {
        'bg-blue-400 border-blue-600 text-white': primary && !outline,
        'bg-yellow-500 border-yellow-600 text-white': warning && !outline,
        'bg-red-500 border-red-600 text-white': danger && !outline,
        'border-blue-600 text-blue-600': primary && outline,
        'border-yellow-600 text-yellow-600': warning && outline,
        'border-red-600 text-red-600': danger && outline,
        'rounded-full': rounded
    }
    let btnClass = classNames('flex items-center p-2 border-solid border-2 ', btnVariations, className)

    const buttonVariation = Number(!!primary) + Number(!!warning) + Number(!!danger);

    const renderedButtons = () => {
        if (buttonVariation > 1) {
            throw new Error("you must only provide one variation for the button");
        }

        return (
            <div >
                {with_icon ? (
                    <>

                        <button className={btnClass} {...rest}>  <FaAccessibleIcon className="text-2xl mr-2" />{children}</button>
                    </>
                ) : (
                    <button className={btnClass} {...rest}>{children}</button>
                )}
            </div>
        )
    }

    return renderedButtons()
}

export default Button
