import { assets, cities } from '../assets/assets';

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 
      bg-[url('/src/assets/heroImage.png')] bg-cover bg-center bg-no-repeat h-screen"
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 text-center max-w-4xl ">
        <div className="py-20">
            <h1 className="font-playfair text-white text-4xl md:text-6xl lg:text-7xl font-bold mt-4 drop-shadow-2xl">
          Stay Beyond Expectations
        </h1>

        <p className="mt-6 text-gray-200 text-lg md:text-xl">
          Wake up to stunning views and premium comfort. 
          Let every journey
          become an unforgettable experience
        </p>
         <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div >
                <div className='flex  items-center gap-2'>
                    <img src={assets.calenderIcon} alt="destination" className="h-4" />
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                <datalist id='destinations'>
                    {cities.map((city, i) => (
                        <option key={i} value={city} />
                    ))}
                </datalist>
            </div>

            

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="check-in" className="h-4" />
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="check-out" className="h-4" />
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                <img src={assets.searchIcon} alt="search" className="h-7" />
                <span>Search</span>
            </button>
        </form>
        </div>
       

        
      </div>

    </div>
  );
};

export default Hero;
