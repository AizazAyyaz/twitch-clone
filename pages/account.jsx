import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const account = () => {
  const { data: session } = useSession();
  
  if (session) {
    return (
      <div className="pt-[100px] flex flex-col w-full p-4 justify-center items-center h-screen">
        <div className="pb-4 mx-auto">
          <Image
            className="rounded-full"
            src={session.user.image}
            alt={session.user.name}
            width="120"
            height="120"
          ></Image>
        </div>
        <h2 className="text-3xl font-bold">Welcome {session.user.name}</h2>
        <p className="pt-4 pb-8">Signed in as {session.user.email}</p>
        <button
          className="flex items-center justify-center p-3 bg-gray-600 rounded-md my-2"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="pt-[100px] flex flex-col w-full p-4 justify-center items-center h-screen">
      <h2 className="text-3xl font-bold">Login</h2>
      <p className="py-4"> Choose the account you want to sign in with.</p>
      <button
        className="flex items-center justify-center p-3 bg-gray-600 rounded-md my-2"
        onClick={() => signIn()}
      >
        <FaGithub className="mr-2" size={18}></FaGithub> Sign in with
        <span className="font-bold pl-1">Github</span>
      </button>
      <button
        className="flex items-center justify-center p-3 bg-blue-600 rounded-md my-2"
        onClick={() => signIn()}
      >
        <FaGoogle className="mr-2" size={18}></FaGoogle> Sign in with
        <span className="font-bold pl-1">Google</span>
      </button>
    </div>
  );
};

export default account;
