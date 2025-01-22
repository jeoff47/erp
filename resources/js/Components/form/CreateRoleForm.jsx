import React from 'react';
import InputLabel from '../InputLabel';
import Checkbox from '../Checkbox';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';
import { IoMdClose } from 'react-icons/io';

const CreateRoleForm = () => {
  return (
    <div className="p-4 px-2 w-full">
      <div className="flex py-2 items-center justify-between">
        <h1>Create Role / Permission</h1>
        <SecondaryButton>
          <IoMdClose />
        </SecondaryButton>
      </div>
      <form action="" className="bg-white p-4 rounded-md shadow-md flex flex-col gap-4">
        <div>
          <span>Name:</span>
          <InputLabel className="border-2 border-gray-200 p-2 rounded-md w-56">
            Enter Name
          </InputLabel>
        </div>

        <div className='flex'>
          <span>Permission: </span>
          
          <Checkbox  label="All Permission" className="px-2 items-center gap-1" />
        </div>

        <div className="grid grid-cols-3 gap-5">
          <Checkbox label="Manage Adjustments" className="items-center gap-1" />
          <Checkbox label="Manage Transfer" className="items-center gap-1" />
          <Checkbox label="Manage Roles" className="items-center gap-1" />
          <Checkbox label="Manage Brands" className="items-center gap-1" />
          <Checkbox label="Manage Currency" className="items-center gap-1" />
          <Checkbox label="Manage Warehouses" className="items-center gap-1" />
          <Checkbox label="Manage Units" className="items-center gap-1" />
          <Checkbox label="Manage Product Categories" className="items-center gap-1" />
          <Checkbox label="Manage Products" className="items-center gap-1" />
          <Checkbox label="Manage Suppliers" className="items-center gap-1" />
          <Checkbox label="Manage Customers" className="items-center gap-1" />
          <Checkbox label="Manage Users" className="items-center gap-1" />
          <Checkbox label="Manage Expense Categories" className="items-center gap-1" />
          <Checkbox label="Manage Expenses" className="items-center gap-1" />
          <Checkbox label="Manage Settings" className="items-center gap-1" />
          <Checkbox label="Manage Dashboard" className="items-center gap-1" />
          <Checkbox label="Manage Pos screen" className="items-center gap-1" />
          <Checkbox label="Manage Purchase Return" className="items-center gap-1" />
          <Checkbox label="Manage Sales Return" className="items-center gap-1" />
          <Checkbox label="Manage Email template" className="items-center gap-1" />
          <Checkbox label="Manage Reports" className="items-center gap-1" />
          <Checkbox label="Manage Quotations" className="items-center gap-1" />
          <Checkbox label="Manage Sms template" className="items-center gap-1" />
          <Checkbox label="Manage Sms APIs" className="items-center gap-1" />
          <Checkbox label="Manage Language" className="items-center gap-1" />
          <Checkbox label="Manage Variation" className="items-center gap-1" />
      </div>


        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <PrimaryButton className="w-full sm:w-auto">Save</PrimaryButton>
          <SecondaryButton className="w-full sm:w-auto">Cancel</SecondaryButton>
        </div>
      </form>
    </div>
  );
};

export default CreateRoleForm;
