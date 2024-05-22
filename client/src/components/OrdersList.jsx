import React from 'react'

function OrdersList() {
  return (
    <div className='ml-[150px]'>

      <h1 className="font-bold ml-[100px] text-2xl mb-3" >Orders</h1>
      {/* buttons */}
      <div className='flex gap-3 ml-24 w-[100px] h-[100px]'>
        <button className='bg-gray-200 border border-gray-300 px-10 h-[60px] text-sm font-bold'> Filter </button>
        <button className='bg-gray-200 border border-gray-300 px-10 h-[60px] text-sm  font-bold '>14feb19</button>
        <button className='bg-gray-200 border border-gray-300 px-10 h-[60px] text-sm  font-bold'>Type </button>
        <button className='bg-gray-200 border border-gray-300 px-10 h-[60px] text-sm  font-bold'>Status</button>
        <button className='bg-gray-200 border border-gray-300 px-10 h-[60px]  text-sm  font-bold text-red-700'><i class="fa-solid fa-arrows-rotate mr-3 text-sm"></i>Reset</button>
      </div>
      {/* table */}
      <div className='bg-white shadow-xl rounded-lg w-[900px]   ml-24 h-[415px] pt-5'>
        <div className='border border-b-gray-200'><span className='ml-10'>ID</span> <span className='ml-24'>Name</span> <span className='ml-20'>Address</span> <span className='ml-20'>Date</span> <span className='ml-24'>Type</span> <span className='ml-32'> Status</span></div>
        <div className='border border-b-gray-200 pt-5'><span className='ml-10'>0001</span> <span className='ml-20'>Books</span> <span className='ml-20'>DB9</span> <span className='ml-20'>14 feb 2019</span> <span className='ml-20'>Electric</span> <span className='ml-20'> <button className='bg-sky-300 rounded-md px-3 py1'>compiled</button></span></div>
        <div className='border border-b-gray-200 pt-5'><span className='ml-10'>0002</span> <span className='ml-20'>Books</span> <span className='ml-20'>DB9</span> <span className='ml-20'>14 feb 2019</span> <span className='ml-20'>Electric</span> <span className='ml-20'> <button className='bg-rose-300 rounded-md px-3 py1'>compiled</button></span></div>
        <div className='border border-b-gray-200 pt-5'><span className='ml-10'>0003</span> <span className='ml-20'>Books</span> <span className='ml-20'>DB9</span> <span className='ml-20'>14 feb 2019</span> <span className='ml-20'>Electric</span> <span className='ml-20'> <button className='bg-lime-300 rounded-md px-3 py1'>compiled</button></span></div>
        <div className='border border-b-gray-200 pt-5'><span className='ml-10'>0004</span> <span className='ml-20'>Books</span> <span className='ml-20'>DB9</span> <span className='ml-20'>14 feb 2019</span> <span className='ml-20'>Electric</span> <span className='ml-20'> <button className='bg-pink-300 rounded-md px-3 py1'>compiled</button></span></div>
        <div className='border border-b-gray-200 pt-5'><span className='ml-10'>0005</span> <span className='ml-20'>Books</span> <span className='ml-20'>DB9</span> <span className='ml-20'>14 feb 2019</span> <span className='ml-20'>Electric</span> <span className='ml-20'> <button className='bg-yellow-300 rounded-md px-3 py1'>compiled</button></span></div>
        <div className='border border-b-gray-200 pt-5'><span className='ml-10'>0005</span> <span className='ml-20'>Books</span> <span className='ml-20'>DB9</span> <span className='ml-20'>14 feb 2019</span> <span className='ml-20'>Electric</span> <span className='ml-20'> <button className='bg-yellow-300 rounded-md px-3 py1'>compiled</button></span></div>
        <div className='border border-b-gray-200 pt-5'><span className='ml-10'>0005</span> <span className='ml-20'>Books</span> <span className='ml-20'>DB9</span> <span className='ml-20'>14 feb 2019</span> <span className='ml-20'>Electric</span> <span className='ml-20'> <button className='bg-yellow-300 rounded-md px-3 py1'>compiled</button></span></div>


      </div>
      <div className='flex ml-24 mt-4'>
        <button className='bg-gray-100 rounded-md py-1 px-3 shadow-md '>Prev.Data</button>
        <button className='bg-gray-100 rounded-md py-1 px-3 shadow-md ml-[700px]'>Next.Data</button>
      </div>


    </div>
  )
}

export default OrdersList