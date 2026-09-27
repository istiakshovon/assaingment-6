import React from 'react';
import banner from "@/assets/banner.png"
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='container mx-auto flex mt-10 bg-[#222630] rounded-2xl p-10'>
            <div>
                <h2 className='text-[#C2F800]'>WORKOUT LIBRARY</h2>
                <p className='font-bold text-5xl mt-7'>TRAIN WITH INTENT. LOG
                    EVERY SET.</p>
                <p className='text-[#9CA3AF] mt-7'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br></br>
                    into today's plan, and watch the week's work add up.</p>
                <button className="btn btn-active btn-warning mt-7 bg-[#C2F800] text-black">BROWSE WORKOUTS</button>

            </div>
            <div>
                <Image src={banner} width={400} height={100}></Image>
            </div>
        </div>
    );
};

export default Banner;