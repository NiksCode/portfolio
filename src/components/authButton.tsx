"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { data: sessionData } = useSession();
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <p className='text-center text-2xl text-black'>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className='rounded-full bg-green-300 px-10 py-3 font-semibold text-black no-underline transition hover:bg-green-300'
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

export default AuthButton;
