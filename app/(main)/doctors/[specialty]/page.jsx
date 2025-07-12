import React from 'react';
import PageHeader from '@/components/page-header';
import { redirect } from 'next/navigation';
import { getDoctorsBySpecialty } from '@/actions/doctors-listing';
import  DoctorCard  from "@/components/doctor-card";

const SpecialityPage = async ({ params }) => {
  const { specialty } = await params;

  if(!specialty){
    redirect("/doctors");
  }

  const { doctors, error} = await getDoctorsBySpecialty(specialty);

  if(error){
    console.log("Error fetching doctors: ",error);
  }

  return (
    <div className="mx-0 space-y-5">
      {/* Wrapper to cancel out mx-36 from PageHeader */}
      <div className="-mx-36">
        <PageHeader
          title={specialty.split("%20").join(" ")}
          backLink="/doctors"
          backLabel="All Specialties"
        />

        {doctors && doctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-white mb-2">
            No doctors available
          </h3>
          <p className="text-muted-foreground">
            There are currently no verified doctors in this specialty. Please
            check back later or choose another specialty.
          </p>
        </div>
      )}
      </div>
    </div>
  );
};

export default SpecialityPage;
