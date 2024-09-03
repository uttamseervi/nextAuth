"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function ProfilePage() {
  const router = useRouter()
  const [data, setData] = useState("nothing")
  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success('Logout successful')
      router.push('/login')
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message)
    }
  }

  const getUserDetails = async () => {
    const res = await axios.post('/api/users/me')
    console.log("The data id s", res.data);
    setData(res.data.data._id)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2 className="p-1 rounded bg-green-500">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}
      </Link>}</h2>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Logout</button>

      <button
        onClick={getUserDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >GetUser Details</button>


    </div>
  )
}

/*
NOTES:
  how to handle dynamic routes in nextJS like here we got user details dynamic routes are the routes where the data changes frequently
  lets say my url is like this http://localhost:3000/profile/66cb1f24650c5eaf3241098d
  i don't know whatever is coming after my profile so to handle that we create a folder with square brackets it can be named anything but the file inside it must be page.tsx
  so in every page where we have used the square brackets we can directly extract the params from the url
*/