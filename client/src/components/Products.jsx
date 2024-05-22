import Sidebar from './Sidebar'

function Products({ children }) {
  return (
    <>
      <div className='w-full bg-white shadow-md h-16'>
        <p className='pl-48 pt-5'><i class="fa-solid fa-magnifying-glass"></i><span className='ml-3'>Search</span></p>
        <div className='w-4/5 pt-[100px]'> {children}</div>
      </div>
      {/*  */}
      <div className='w-1/5'>
        <Sidebar />
      </div>

    </>
  )
}

export default Products