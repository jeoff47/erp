import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import Products from './products/Products';
import LayOut from '@/Layouts/LayOut';



export default function Dashboard() {
    return (
        <div className='flex'>
            <div className='w-full'>
                <LayOut>
                    <AuthenticatedLayout>
                        <Head title="Dashboard" />
                        

                        <Products className="w-full"/>
                        
                
                    </AuthenticatedLayout>
                    
                </LayOut>
            </div>
        </div>
    );
}
