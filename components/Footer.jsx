import React from 'react'
import {GrTwitter} from "react-icons/gr";
import {BsTelegram} from "react-icons/bs";

function Footer() {
  return (
    <footer className='p-4 md:py-8 md:px-16 lg:px-24 flex flex-row gap-4 items-center justify-between'>
      <div className='text-3xl font-bold text-lightGreen'>
        MEV Bot
      </div>
      <div className='flex items-center gap-4'>
        <button className='text-lg md:text-2xl w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] rounded-md bg-lightGreen shadow-button text-white flex items-center justify-center'>
          <GrTwitter />
        </button>
        <button className='text-lg md:text-2xl w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] rounded-md bg-lightGreen shadow-button text-white flex items-center justify-center'>
          <BsTelegram />
        </button>
      </div>
    </footer>
  );
}

export default Footer
