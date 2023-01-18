import React, { useState } from 'react';
import img from "../../../assets/images/1.jpg"
const DashboardBankDonation = () => {
  const [eye, setEye] = useState(true);
  return (
    <div className='w-full p-6 bg-gray-200 '>
      <h2 className='text-2xl font-serif text-gray-800 text-center mb-3 -ml-12'>Bank Donation</h2>
      <div className='flex items-center font-serif mb-3'>
        <hr className='w-[42%] border-gray-500' />
        <p>15 january 2023</p>
        <hr className='w-[40%] border-gray-500' />
      </div>
      <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6'>
        <div className='w-40 border rounded-t-[10px] h-52 relative bg-white'>
          <div>
            <img className='h-24 w-40 object-cover rounded-t-[10px]' src={img} alt="" />
          </div>
          <div className='px-2'>
            <h4 className='text-sm font-bold font-serif my-[6px] text-gray-800'>Murad Wahid</h4>
            <small className='font-serif'>758 Hillcrest Lane</small>
            <div className='absolute flex items-center gap-20 bottom-1' >
              <p className='font-semibold'>{eye ? <span>$300</span> : <span>*****</span>}</p>
              <span className='cursor-pointer' onClick={() => setEye(!eye)}>
                {eye ? <i className="fa-solid fa-eye text-blue-800"></i> :
                  <i class="fa-solid fa-eye-slash text-blue-800"></i>}
              </span>
            </div>
          </div>
        </div>
        <div className='w-40 border rounded-t-[10px] h-52 relative bg-white'>
          <div>
            <img className='h-24 w-40 object-cover rounded-t-[10px]' src={img} alt="" />
          </div>
          <div className='px-2'>
            <h4 className='text-sm font-bold font-serif my-[6px] text-gray-800'>Murad Wahid</h4>
            <small className='font-serif'>758 Hillcrest Lane</small>
            <div className='absolute flex items-center gap-20 bottom-1' >
              <p className='font-semibold'>{eye ? <span>$300</span> : <span>*****</span>}</p>
              <span className='cursor-pointer' onClick={() => setEye(!eye)}>
                {eye ? <i className="fa-solid fa-eye text-blue-800"></i> :
                  <i class="fa-solid fa-eye-slash text-blue-800"></i>}
              </span>
            </div>
          </div>
        </div>
        <div className='w-40 border rounded-t-[10px] h-52 relative bg-white'>
          <div>
            <img className='h-24 w-40 object-cover rounded-t-[10px]' src={img} alt="" />
          </div>
          <div className='px-2'>
            <h4 className='text-sm font-bold font-serif my-[6px] text-gray-800'>Murad Wahid</h4>
            <small className='font-serif'>758 Hillcrest Lane</small>
            <div className='absolute flex items-center gap-20 bottom-1' >
              <p className='font-semibold'>{eye ? <span>$300</span> : <span>*****</span>}</p>
              <span className='cursor-pointer' onClick={() => setEye(!eye)}>
                {eye ? <i className="fa-solid fa-eye text-blue-800"></i> :
                  <i class="fa-solid fa-eye-slash text-blue-800"></i>}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBankDonation;