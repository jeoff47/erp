import SideBar from '@/Components/sidebar/SideBar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PrintBarCode from './products/PrintBarCode';


export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="flex w-max">

            <SideBar />
            <PrintBarCode/>
            </div>
            
        </AuthenticatedLayout>
    );
}
