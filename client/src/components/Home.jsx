import img from '../assets/img/2.png'

function Home() {
  return (
    <div className="flex md:mt-[30px] ml-[200px]">

      <div className="w-3/5 mt-[95px]">
        <p className="font-bold md:text-4xl md:ml-[80px] ml-[30px] text-lg">The most beautiful  watch <br />in the Somali!</p>
        <p className="md:ml-[80px] mt-3 md:text-xl text-lg ml-[30px] "> Lorem ipsum, dolor sit amet
          <br /> Iure doloremque tempore <br /> possimus nam facere. </p>
        <button className='md:block md:border-1 text-md bg-white
         ml-[83px] md:ml-[80] mt-[20px] md:font-semibold text-black font-bold shadow-md shadow-black rounded px-6  p-1.5'>Order Now</button>
      </div>

      <div className="w-2/5">

        <img src={img} id="img1" width="400px" alt="" className="pt-[40px] ml-[50px] sm:mt-[0px] rounded-md" />
      </div>
    </div>

  )
}

export default Home