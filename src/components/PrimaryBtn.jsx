import React from 'react'

const PrimaryBtn = ({ children, ...props }) => {
    return (
        <button
            className={`w-28 py-3 font-bold rounded-full mt-4 bg-blue-500 hover:bg-blue-600 active:opacity-70 disabled:opacity-50 text-white`}
            {...props}
        >
            {children}
        </button>
    )
}

export default PrimaryBtn