'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormData } from '@/lib/schemas';
import { login } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {ERROR_MESSAGES}from '@/constants/messages'
export default function loginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const {register,handleSubmit,formState: { errors, isSubmitting },} = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: LoginFormData) => {
    try {
      const { access_token, refresh_token } = await login(data.email, data.password);
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      router.push('/admin');
    } catch (err) {setError(ERROR_MESSAGES.LOGIN_FAIL);}
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-bold">Login Admin</h2>
        {error && <div className="layout-error">{error}</div>}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input type="email" {...register('email')} className="input-base"/>
            {errors.email && <p className=" layout-error">{errors.email.message}</p>}
          </div>
          <div>
            <label>Password</label>
            <input type="password" {...register('password')} className="input-base"/>
            {errors.password && <p className="layout-error">{errors.password.message}</p>}
          </div>
          <button type="submit" disabled={isSubmitting} className="btn-primary">
            {isSubmitting ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
