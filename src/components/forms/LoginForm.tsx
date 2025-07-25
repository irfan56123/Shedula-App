// src/components/Form/LoginForm.tsx
'use client';
import Link from 'next/link';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [remember, setRemember] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      router.push('/doctors');
    },
  });

  return (
    <div className="w-full max-w-md px-6 py-10 shadow-xl rounded-xl border border-gray-200">

     
      {/* Heading */}
<h2 className="text-center text-2xl font-semibold mb-2">
  Hi there, welcome to{' '}
  <span className="text-[#00D2FF] font-bold">Shedula</span>
</h2>
<p className="text-center text-sm text-gray-600 mb-6">
  Please sign in to continue
</p>

      {/* Form */}
      
      <form onSubmit={formik.handleSubmit}  className="space-y-5">
        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-sm text-red-500 mt-1">{formik.errors.email}</div>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            placeholder="Enter your password"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-sm text-red-500 mt-1">{formik.errors.password}</div>
          )}
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="mr-2"
            />
            Remember Me
          </label>
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Submit */}
        
        <button
          type="submit"
          className="w-full bg-[#00D2FF] hover:bg-[#00bce4] text-white py-2 rounded-md font-semibold text-base"
          
        >
          Login
        </button>
     
<br />
        {/* login with phone number */}
            <Link href={'/otp'}>
         <button
          type="submit"
          className="w-full bg-[#00D2FF] hover:bg-[#00bce4] text-white py-2 rounded-md font-semibold text-base"
        >
          Login With Phone Number
        </button>
       </Link>
        {/* OR Google login */}
        <div className="text-center text-sm text-gray-500 my-2">or</div>

        <button
          type="button"
          className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center text-sm gap-2"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            width={20}
            height={20}
          />
          Sign in with Google
        </button>
      </form>

    
    </div>
  );
}

