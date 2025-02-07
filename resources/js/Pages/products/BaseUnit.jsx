import BaseUnitTable from '@/Components/table/BaseUnitTable';
import React from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';
import LayOut from '@/Layouts/LayOut';



const BaseUnit = () => {
  return (
    
      <LayOut>

      <div>
        <div>
          <Link href='/'> 
          <PrimaryButton className="bg-orange-400"> Create Base Unit</PrimaryButton>
          </Link>
        </div>
        <div>
          <BaseUnitTable />
        </div>
      </div>
      </LayOut>
    
    
  );
};


export default BaseUnit;
