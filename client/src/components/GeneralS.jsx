import React from 'react'

function GeneralS() {
  return (
    <>
      <h1 className='font-bold ml-[369px] text-2xl'>General Setting</h1>
      <div className='bg-white w-[700px] h-[570px] ml-[360px] mt-10   rounded-md'>

        <div className='bg-gray-300 w-20 h-20 absolute top-[40%] left-[50%] rounded-full'>
          <i class="fa-solid fa-camera pt-5 absolute top-3 left-8"></i>
        </div>
        <p className='absolute top-[55%] left-[49%] text-blue-800'>Upload Image</p>
        <div className='flex '>
          <div className='pl-[50px] pt-[200px]'>
            <p className=''>Site Name</p>
            <input type="text" placeholder='Bright Web' className='py-3 px-10 bg-gray-200' />
          </div>
          <div className='pl-20 pt-[200px]'>
            <p className=''>Copy Right</p>
            <input type="text" placeholder='All right @bright' className='py-2 px-10 bg-gray-200' />
          </div>
        </div>
        {/* 2 */}
        <div className='flex pt-10'>
          <div className='pl-[50px] '>
            <p className=''>Site Name</p>
            <input type="text" placeholder='Bright Web' className='py-3 px-10 bg-gray-200' />
          </div>
          <div className='pl-20 '>
            <p className=''>CEO Description</p>
            <textarea type="text" placeholder='Bright Web' className='py-2 px-10 bg-gray-200' />
          </div>

        </div>
        {/* 3 */}
        <div className='flex pt-1'>
          <div className='pl-16 '>
            <p className=''>Site Name</p>
            <input type="text" placeholder='Bright Web' className='py-3 px-10 bg-gray-200' />
          </div>
        </div>
        {/* 4 */}

        <button className='py-2 px-20 bg-blue-500 rounded-md ml-[37%] mt-[22px]' >Save</button>
      </div>

    </>
  )
}

export default GeneralS