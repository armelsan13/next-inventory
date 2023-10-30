import Image from 'next/image'
import { getServerSession } from 'next-auth/next'
import { authConfigs } from './api/auth/[...nextauth]/auth';
import { redirect } from 'next/navigation';

import { GoogleSignInButton, GithubSignInButton } from '@/components/authButtons';
import { AuthForm } from '@/components/authForm';

export default async function Home() {

  const session = await getServerSession(authConfigs);

  if (session) return redirect('/dashboard');

  return (
    <div className='w-full flex flex-col items-center justify-center min-h-screen py-2'>
      <div className="w-4/12 flex flex-col items-center mt-10 p-10 shadow-lg">
        <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>

        <AuthForm />
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-base-200 left-1/2 dark:text-white dark:bg-black rounded-xl">or</span>
        </div>
        <GoogleSignInButton />
        <GithubSignInButton />
      </div>
    </div>
  );
}
