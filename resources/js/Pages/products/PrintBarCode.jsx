import React from 'react'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import InputLabel from '@/Components/InputLabel'
import { FaSearch } from "react-icons/fa";
import Table from '@/Components/Table';
import PrintBarCodeData from '@/Data/PrintBarCodeData';

const PrintBarCode = () => {
  return (
    <div>
      <form className='bg-white p-4 rounded'>
        <div>
          <div>
            <span>Warehouse:</span>
            <InputLabel className='p-2 border-2'>Choose Warehouse</InputLabel>  
          </div>  
          <div>
            <span>Product:</span>
              <FaSearch />
                <InputLabel className='border-2'>
                Search Product by Code Name
              </InputLabel>  
          </div>  
        </div>
        <div> 
            <Table columns={PrintBarCodeData.columns} data={PrintBarCodeData.data}/>  
        </div>
        <div className='flex'>
          <div>
            <span className='p-2'>Product:</span>
                <InputLabel className='border-2'>Choose Paper size </InputLabel>  
          </div>
          <div className='p-2'>
            <span>Show Company:</span>
            <PrimaryButton>on and off</PrimaryButton>  
          </div>
          <div className='p-2'>
            <span>Show Product Name:</span>
            <PrimaryButton>on and off</PrimaryButton>  
          </div>
          <div className='p-2'>
            <span>Show Price:</span>
            <PrimaryButton>on and off</PrimaryButton>  
          </div>
        </div>  
        <div>
            <PrimaryButton className='bg-green-500'> Preview</PrimaryButton>
            <PrimaryButton className='bg-red-500'> Reset</PrimaryButton>
            <PrimaryButton className='bg-blue-500'> Print</PrimaryButton>
        </div> 
                   
      </form>
    </div>
  )
}

export default PrintBarCode