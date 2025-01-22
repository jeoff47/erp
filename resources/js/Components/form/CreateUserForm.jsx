import { FaPencil } from "react-icons/fa6";
import SecondaryButton from '../SecondaryButton';
import PrimaryButton from '../PrimaryButton';
import InputLabel from '../InputLabel';
import { FaUser } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';

const CreateUserForm = () => {
return (
    <div className='p-6 w-full'>
            <div className='flex py-2'>
                <h1>Create Supplier</h1>
                <SecondaryButton><IoMdClose /></SecondaryButton>
            </div>
            <form action="" className='bg-white p-2 flex'>
                <div >
                    <span>Change Image:</span>
                    <div className='bg-yellow-300 relative rounded-sm' >
                      <FaUser className='text-white' />
                    </div>
                    <FaPencil className='absolute'/>

                </div>
                <div >
                    <span>First Name:</span>
                    <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                        Enter First Name
                    </InputLabel>
                </div>
                <div >
                    <span>Surname Name:</span>
                    <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                        Enter Surname Name
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
                    <span>Password:</span>
                    <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                        Enter Password
                    </InputLabel>
                </div>
                <div>
                    <span>Confirm Password:</span>
                    <InputLabel className="border-2 border-gray-200 p-2 rounded-md">
                        Confirm Password
                    </InputLabel>
                </div>
                <div>
                    <span>Role:</span>
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

export default CreateUserForm