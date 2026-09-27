import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';

const Footer = () => {
    return (
      <div>
          <div className="divider "></div>

          <div className='flex justify-between p-4 mx-2 -mt-3 mb-4'>
            
            <div className='flex gap-4'>
                <Image 
            src={logo}
            alt='logo'
            />
            <h2 className='text-bold'>FITLOG</h2>
            </div>
            <div>
                <h2 className='text-[#6B7280] font-light'>© 2026 FitLog — Workout Library. Train hard, log honest.</h2>
            </div>
        </div>
      </div>
    );
};

export default Footer;