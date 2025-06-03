'use client';

import { useState } from 'react';
import backgroundImage from '../app/assets/model-demonstrating-earrings-ring.jpg';
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailSubmit = async () => {
    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('https://demigodhouse.com/api/user/send/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage('Email sent successfully!');
        setEmail('');
      } else {
        setMessage(result.message || 'Something went wrong.');
      }
    } catch (err) {
      setMessage('Failed to send email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <img
        src="/anagari-removebg-preview.png"
        width={300}
        height={100}
        alt="Logo"
        className="px-2"
      />

      <div className="flex flex-col gap-8 h-full justify-center px-10">
        <h6 className="text-6xl font-thin">REACH US</h6>
        <p className="text-xl font-thin">
          We are coming up with something new and exciting. Wait <br />
          will soon be over.
        </p>

        <div className="w-[500px] max-w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEmailSubmit();
            }}
          >
            <button
              type="submit"
              className="bg-white w-full py-3 px-3 flex justify-between items-center group relative"
              disabled={loading}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="border-0 outline-none w-full text-black"
              />
              <div className="flex items-center gap-1 ml-3  ">
                <span>{loading ? 'Sending...' : 'Send'}</span>
                <IoIosArrowRoundForward
                  size={30}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300"
                />
              </div>
            </button>
          </form>
          {message && (
            <p className="text-red-700 mt-3 text-lg ">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
