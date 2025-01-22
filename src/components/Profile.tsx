'use client';

import React from 'react';
import { useUser } from '@clerk/clerk-react';
import Image from 'next/image';
import Link from 'next/link';

const Profile: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return <p>Loading...</p>;
  }

  const emailAddress = user.primaryEmailAddress?.emailAddress;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
        <div className="flex items-center mb-6">
          <Image
            src={user.imageUrl || '/icons/default-profile.png'}
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold">{user.firstName} {user.lastName}</h2>
            <p className="text-gray-600">{emailAddress}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Account Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">First Name</label>
              <p className="border rounded-md p-2">{user.firstName}</p>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Last Name</label>
              <p className="border rounded-md p-2">{user.lastName}</p>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <p className="border rounded-md p-2">{emailAddress}</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/settings" className="text-blue-600 hover:underline">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
