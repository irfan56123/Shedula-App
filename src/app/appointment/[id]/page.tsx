'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import DoctorCard from '@/components/doctors/DoctorCard';
import AppointmentSlot from '@/components/doctors/Appointment';
import { doctors } from '@/data/doctors';

const availableDates = ['13 MON', '14 TUE', '16 WED', '17 WED', '18 WED'];

export default function AppointmentPage() {
  const { id } = useParams();
  const router = useRouter();
  const doctor = doctors.find((doc) => doc.id === Number(id));

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  if (!doctor) return <div className="p-4">Doctor not found</div>;

  const handleBooking = () => {
    if (!selectedDate || !selectedSlot) {
      alert('Please select a date and time slot.');
      return;
    }

    // Optional: redirect to confirmation screen
    router.push(`/appointment/confirm?doctorId=${doctor.id}&date=${selectedDate}&slot=${selectedSlot}`);
  };

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto font-sans">
      {/* Back + Heading */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => history.back()}
          className="bg-[#00D2FF] text-white w-8 h-8 rounded-full flex justify-center items-center text-lg"
        >
          ←
        </button>
        <h2 className="text-xl font-bold">Book Appointment</h2>
      </div>

      {/* DoctorCard */}
      <DoctorCard doctor={doctor} />

      {/* Date Selector */}
      <div className="space-y-2">
        <h3 className="font-semibold">Book Appointment</h3>
        <p className="text-gray-500">July, 2023</p>
        <div className="flex gap-2 flex-wrap">
          {availableDates.map((date, index) => (
            <button
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`px-3 py-2 rounded-lg ${
                selectedDate === date ? 'bg-[#00D2FF] text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      {/* Slots */}
      <AppointmentSlot selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot} />

      {/* Book button */}
      <button
        onClick={handleBooking}
        className="w-full bg-[#00D2FF] text-white py-3 rounded-lg font-semibold mt-4"
      >
        Book appointment
      </button>
    </div>
  );
}
