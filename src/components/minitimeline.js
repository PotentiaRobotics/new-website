import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const MiniTimeline = ({title, date, desc}) => {
  return (
    <div className="shadow-md border-2 border-gray-200 rounded-md grid grid-cols-1 hover-up">
      {/* <StaticImage placeholder='blurred' className="w-64 h-64 object-cover object-center" src={img} alt="Potentia Robotics" /> */}
      <div className="p-8 text-left">
        <p className="text-sm bg-orange rounded-full px-4 py-2 text-white shadow font-semibold inline">{date}</p>
        <h1 className='text-xl mt-6 mb-3 font-bold poppins'>{title}</h1>
        <p className='text-lg text-gray-600'>{desc}</p>
      </div>
    </div>
  )
};

export default MiniTimeline;
