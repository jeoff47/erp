import React from 'react'
import SecondaryButton from './SecondaryButton'

const CreateButton = ({onCreatebtn, children}) => {
  return (
    <div className="flex items-center space-x-4">
          
          <SecondaryButton
            onClick={onCreatebtn} // Trigger modal to open
            className="w-auto px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-all"
          >
            {children}
          </SecondaryButton>
        </div>
  )
}

export default CreateButton