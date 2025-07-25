//app/doctors/page.tsx

'use client';
import DoctorCard from '@/components/doctors/DoctorCard';
import { doctors } from '@/data/doctors';
import Navbar from '@/components/navbar';

export default function DoctorPage() {
  return (
    <div>
      <Navbar />
      <main className="p-6 mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Our Doctors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </main>
    </div>
  );
}

