import PageHeader from '@/components/page-header';
import { Stethoscope } from 'lucide-react';
import React from 'react'

export const metadata = {
  title: "Doctor Dashboard - MediMeet",
  description: "Manage your appointments and availability",
};

const DoctorDashboardLayout = ({children}) => {
  return (
    <div className='container mx-auto px-4 py-8'>

      <PageHeader icon={<Stethoscope />} title={"Doctor Dashboard"} />

      <div className='mx-36'>
      {children}
      </div>
    </div>
  )
}

export default DoctorDashboardLayout
