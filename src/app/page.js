import Image from 'next/image';
import backgroundImage from '../app/assets/model-demonstrating-earrings-ring.jpg';
import logo_image from '../app/assets/anagari-removebg-preview.png'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <div className="h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
      <Image
        src={logo_image}
        width={300}
        height={100}
        alt="Logo"
        className='px-2'
      />

      <div className='flex flex-col gap-8 h-full justify-center px-10 '>
        <h6 className='text-6xl font-thin'>REACH US</h6>
        <p className='text-xl font-thin'>We are coming up with something new and exciting.Wait <br />will soon be over.</p>
        <div className='w-96'>
          <button className='bg-white w-[500px] py-3 px-3 flex justify-between items-center group relative '>
            <div>
              <input type='email' className='border-0 outline-none' placeholder='Enter Email'></input>
            </div>
            <div className='flex justify-center items-center'>
              <span>Email Us</span>
              <IoIosArrowRoundForward
                size={30}
                className="opacity-0  group-hover:opacity-100 group-hover:translate-x-0  translate-x-2 transition-all duration-300"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
