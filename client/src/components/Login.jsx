import { Link } from "react-router-dom"

function Login() {
  return (
    <div className='bg-blue-700 w-full h-screen ml-[170px] '>
      <div className='flex justify-center pt-[80px] '>

        <div className='bg-white w-[370px] h-[490px] rounded-md'>
          <h1 className='font-bold mt-16 ml-24 text-2xl'>Login to Account </h1>
          <h1 className=' mt-2 ml-8 text-sm '>Please enter your email and password to continue</h1>
          <p className='mt-5 ml-5 '>Email address :</p>
          <input type="text" placeholder='example@gmail.com' className='py-1 mt-5 ml-5 rounded-md px-14 bg-gray-200' />

          {/* 2 */}
          <p className='mt-5 ml-5 '>Password:</p>
          <input type="text" placeholder='example@gmail.com' className='py-1 mt-5 ml-5 rounded-md px-14 bg-gray-200' />
          <br />
          <input type="checkbox" className='py-1 mt-5 ml-3 rounded-md px-14 bg-gray-200' />
          <span className='ml-2'>Remember</span>
          <Link> <button className='py-2 px-20 bg-blue-500 rounded-md ml-[20%] mt-10 text-white' >Sign in</button> </Link>
          <p className=' rounded-md ml-[15%]  text-black' >don't have an account ?<span className='text-blue-800'>Create account</span></p>

        </div>

      </div>
    </div>
  )
}

export default Login