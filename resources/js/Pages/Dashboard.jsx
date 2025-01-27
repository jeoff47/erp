import SideBar from '@/Components/sidebar/SideBar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import Products from './products/Products';



export default function Dashboard() {
    return (
        <div className='flex'>
            <div>
                <SideBar/>
            </div>
            <div className='w-full'>
                <AuthenticatedLayout
                    
                >
                    <Head title="Dashboard" />
                    <div className="flex w-full">

                    <Products className="w-full"/>
                    </div>
            
                </AuthenticatedLayout>
            </div>
        </div>
    );
}
