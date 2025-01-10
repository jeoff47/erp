import React from 'react'

const CreateBrandForm = () => {
  return (
    <div>
        <form action="">
                    <div>
                        <h1>CreateBrand</h1>
                        <SecondaryButton><IoMdClose /></SecondaryButton>
                    </div>
                    <div>
                        <div>
                            <span>Name:</span>
                            <InputLabel className="border-2 border-gray-200 p-2 rounded-md">Enter Name</InputLabel>
                        </div>
                        <div>
                            {/* icon to import image */}
                            <InputLabel className='p-1 flex'>Please enter variation type</InputLabel>
                            <PrimaryButton>
                                <FaPlus />
                            </PrimaryButton>
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <PrimaryButton className="w-full sm:w-auto">Save</PrimaryButton>
                            <SecondaryButton className="w-full sm:w-auto">Cancel</SecondaryButton>
                        </div>
                    </div>
                </form>
    </div>
  )
}

export default CreateBrandForm