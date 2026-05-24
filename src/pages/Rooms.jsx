import { useNavigate } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import Rating from "../components/Rating";
import { useState } from "react";

const Checkbox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};
const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOptions"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const Rooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);
  // const [selectedRoomTypes, setSelectedRoomTypes] = useState([])
  // const [price, setPrice] = useState([])
  // const [sortBy, setSortBy] = useState("")

  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Bed", "Family Suite"];
  const priceRanges = [
    "0 to 500",
    "500 to 1000",
    "1000 to 1500",
    "1500 and above",
  ];
  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  const handleRoomType = (checked, value) => {
    if (checked) {
      setSelectedRoomTypes((prev) => [...prev, value]);
    } else {
      setSelectedRoomTypes((prev) => prev.filter((item) => item !== value));
    }
  };

  const handlePrice = (checked, value) => {
    if (checked) {
      setSelectedPrice((prev) => [...prev, value]);
    } else {
      setSelectedPrice((prev) => prev.filter((item) => item !== value));
    }
  };

  let filteredRooms = [...roomsDummyData];

  // Room type filter
  if (selectedRoomTypes.length > 0) {
    filteredRooms = filteredRooms.filter((room) =>
      selectedRoomTypes.includes(room.roomType),
    );
  }

  // Price filter
  if (selectedPrice.length > 0) {
    filteredRooms = filteredRooms.filter((room) => {
      return selectedPrice.some((range) => {
        const cleanRange = range.replace("$ ", "");

        if (cleanRange === "0 to 500") {
          return room.pricePerNight >= 0 && room.pricePerNight <= 500;
        }

        if (cleanRange === "500 to 1000") {
          return room.pricePerNight > 500 && room.pricePerNight <= 1000;
        }

        if (cleanRange === "1000 to 1500") {
          return room.pricePerNight > 1000 && room.pricePerNight <= 1500;
        }

        if (cleanRange === "1500 and above") {
          return room.pricePerNight > 1500;
        }

        return false;
      });
    });
  }

  // Sorting
  if (selectedSort === "Price Low to High") {
    filteredRooms.sort((a, b) => a.pricePerNight - b.pricePerNight);
  }

  if (selectedSort === "Price High to Low") {
    filteredRooms.sort((a, b) => b.pricePerNight - a.pricePerNight);
  }

  if (selectedSort === "Newest First") {
    filteredRooms.reverse();
  }

  const clearFilters = () => {
    setSelectedRoomTypes([]);
    setSelectedPrice([]);
    setSelectedSort("");
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">
            Hotels Rooms
          </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2">
            Discover our luxurious rooms designed for your comfort and
            relaxation.
          </p>
        </div>
        {filteredRooms.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start gap-6 py-10 border-b border-gray-300 last:pb-30 last:border-0"
          >
            <img
              onClick={() => {
                navigate(`/hotels/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt={room.name}
              title="View Room Details"
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p className="text-gray-800 text-3xl font-playfair cursor-pointer">
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <Rating rating={room.rating} />
                <p className="ml-2">200+ Reviews</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>
              <div className="flex items-center gap-4 mt-3 mb-6 flex-wrap">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="w-4 h-4"
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl font-medium text-gray-700">
                ${room.pricePerNight.toFixed(2)}/night
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white w-80 border border-gray-300 text-gray-600 mb-4 max-lg:mb-8 lg:mt-16">
        <div
          className={`flex items-center justify-between px-5 py-3 lg:border-b border-gray-300 ${openFilters && "border-b"}`}
        >
          <p className="font-medium text-base text-gray-800">Filter Options</p>
          <div className="text-xs cursor-pointer">
            <span
              onClick={() => setOpenFilters(!openFilters)}
              className="lg:hidden"
            >
              {openFilters ? "HIDE" : "SHOW"}
            </span>
            <span
              onClick={clearFilters}
              className="hidden lg:block cursor-pointer"
            >
              CLEAR
            </span>
          </div>
        </div>
        <div
          className={`${openFilters ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
            {roomTypes.map((room, index) => (
              <Checkbox
                key={index}
                label={room}
                selected={selectedRoomTypes.includes(room)}
                onChange={handleRoomType}
              />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>

            {priceRanges.map((price, index) => (
              <Checkbox
                key={index}
                label={`$ ${price}`}
                selected={selectedPrice.includes(`$ ${price}`)}
                onChange={handlePrice}
              />
            ))}
          </div>
          <div className="px-5 pt-5 pb-10">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton
                key={index}
                label={option}
                selected={selectedSort === option}
                onChange={setSelectedSort}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
