import { FaPencil } from "react-icons/fa6";
import SecondaryButton from '../SecondaryButton';
import PrimaryButton from '../PrimaryButton';
import InputLabel from '../InputLabel';
import { FaUser } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';

const CreateWarehouse = () => {
  return (
      <div className='p-6 w-full'>
              <div className='flex py-2'>
                  <h1>Create Warehouse</h1>
                  <SecondaryButton><IoMdClose /></SecondaryButton>
              </div>
              <form action="" className='bg-white p-2 flex'>
                  <div >
                      <span>Name:</span>
                      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                          Enter Name
                      </InputLabel>
                  </div>
                  <div>
                      <span>Email:</span>
                      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                          Enter Email
                      </InputLabel>
                  </div>
                  <div>
                      <span>PhoneNumber:</span>
                      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                          Enter Phonenumber
                      </InputLabel>
                  </div>
                  <div>
                      <span>Country:</span>
                      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                          Enter Password
                      </InputLabel>
                  </div>
                  <div>
                      <span>City:</span>
                      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                          Confirm Password
                      </InputLabel>
                  </div>
                  <div>
                      <span>zip Code:</span>
                      <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                          Choose Role
                      </InputLabel>
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                     <PrimaryButton className="w-full sm:w-auto">Save</PrimaryButton>
                      <SecondaryButton className="w-full sm:w-auto">Cancel</SecondaryButton>
                  </div>
              </form>
          </div>
    )
}

export default CreateWarehouse