import React from 'react';

export default function Checkbox({ className = '', label, id, ...props }) {
    return (
        <div className="flex items-center">
            <input
                {...props}
                type="checkbox"
                id={id}
                className={
                    'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' + className
                }
            />
            {label && (
                <label htmlFor={id} className="ml-2 text-gray-700">
                    {label}
                </label>
            )}
        </div>
    );
}
