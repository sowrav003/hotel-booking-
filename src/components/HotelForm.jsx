import { assets, cities } from '../assets/assets';
import { Calendar, ChevronRight, MapPin, Users } from "lucide-react";

function SearchField({ icon, label, placeholder, defaultValue, type = "text", min }) {
  return (
    <label className="flex items-center space-x-3 px-4 py-3 group cursor-text hover:bg-gray-50 focus-within:bg-gray-50 transition-colors w-full md:flex-1 first:rounded-t-lg last:rounded-b-lg md:first:rounded-l-lg md:last:rounded-r-lg">
      <div className="text-gray-500 group-focus-within:text-[#2B9EBC] transition-colors">
        {icon}
      </div>
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        <span className="text-[10px] font-bold text-gray-400 tracking-wider mb-0.5 uppercase">{label}</span>
        <input 
          type={type} 
          min={min}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="text-[15px] text-slate-700 font-medium leading-none bg-transparent outline-none w-full placeholder:text-slate-400"
        />
      </div>
    </label>
  );
}
const HotelForm = () => {
  return (
  
    <div className="relative">
  <form 
                  onSubmit={(e) => { e.preventDefault(); console.log('Search submitted'); }}
                  className="w-11/12 max-w-[1050px] bg-white rounded-lg p-2.5 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 shadow-[0_10px_40px_rgba(0,0,0,0.2)] relative translate-y-1/2 z-20"
                >
                  <div className="flex-1 flex flex-col md:flex-row items-stretch md:items-center divide-y md:divide-y-0 md:divide-x divide-gray-100 w-full md:w-auto">
                    <SearchField icon={<MapPin size={22} strokeWidth={1.5} />} label="DESTINATION" placeholder="Where to?" />
                    <SearchField icon={<Calendar size={22} strokeWidth={1.5} />} label="CHECK IN" type="date" />
                    <SearchField icon={<Calendar size={22} strokeWidth={1.5} />} label="CHECK OUT" type="date" />
                    <SearchField icon={<Users size={22} strokeWidth={1.5} />} label="GUESTS" type="number" min="1" placeholder="2" defaultValue="2" />
                  </div>
                  <button type="submit" className="bg-[#2B9EBC] hover:bg-[#2387A0] text-white px-8 py-3.5 rounded-md font-medium tracking-wide transition-all flex items-center space-x-2 shrink-0 w-full md:w-auto md:ml-2 justify-center">
                    <span className="text-[13px] font-bold">SEARCH</span>
                    <ChevronRight size={18} strokeWidth={2} />
                  </button>
                </form>
                </div>
  )
}

export default HotelForm