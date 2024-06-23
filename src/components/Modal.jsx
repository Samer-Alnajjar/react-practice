import ReactDOM from 'react-dom';
import { useEffect } from 'react';

export default function Modal({ closeModal, children, actionBar }) {
    useEffect(() => {
        document.body.classList.add("overflow-hidden")

        return () => {
            document.body.classList.remove("overflow-hidden")
        }
    }, [])

    return (
        ReactDOM.createPortal(
            <>
                <div className=" inset-0 fixed bg-gray-300 bg-opacity-75" onClick={closeModal}></div>
                <div className="w-2/4 border-4 border-indigo-600 p-4 bg-white fixed left-1/4 top-1/4">
                    {children}
                    <hr className="border-gray-300 mt-4 mb-4"></hr>
                    {actionBar}
                </div>
            </>, document.querySelector('.modal-container')
        )

    )
}
