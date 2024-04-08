import React from 'react';
import Xcancel from "@assets/icons/X.svg";
import Bed from "@assets/icons/Bed.svg";
import Star from "@assets/icons/Star.svg";
import MapPin from "@assets/icons/MapPin.svg";
import CalendarBlank from "@assets/icons/CalendarBlank.svg";
import hotelImage from "@assets/images/hotelImage.svg";

interface Facility {
  name: string;
  icon: string;
}

interface HotelCardProps {
  hotelName: string;
  address: string;
  rating: number;
  numberOfReviews: number;
  roomType: string;
  price: string;
  totalPrice: string;
  rooms: number;
  nights: number;
  facilities: Facility[];
  checkInDate: string;
  checkOutDate: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  hotelName,
  address,
  rating,
  numberOfReviews,
  roomType,
  price,
  totalPrice,
  rooms,
  nights,
  facilities,
  checkInDate,
  checkOutDate,
}) => {
  return (
    <div className="flex flex-row mb-10">
      <div className="flex items-center justify-center bg-[#FFFFFF] pl-5 rounded-tl-lg rounded-bl-lg">
        <img src={hotelImage} alt={hotelName} className="max-w-full w-[300px] rounded-lg h-[290px]" />
      </div>
      <div className="w-full">
        <div className="border-b border-[#E4E7EC] pt-5 pb-5 bg-[#FFFFFF] flex flex-row justify-between">
          <div className="flex flex-col gap-2 pl-5">
            <h2 className="text-[#000000] font-bold text-2xl">{hotelName}</h2>
            <p className="text-[#1D2433] font-semibold w-[85%]">{address}</p>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-1 text-[#0D6EFD] font-semibold">
                <img src={MapPin} alt="MapPin Logo" />
                <a className="text-[#0D6EFD] text-md font-semibold" href=""><p>Show in map</p></a>
              </div>
              <div className="flex flex-row gap-1 text-[#676E7E] font-semibold">
                <img src={Star} alt="star logo" />
                <p>{rating} ({numberOfReviews})</p>
              </div>
              <div className="flex flex-row gap-1 text-[#676E7E] font-semibold">
                <img src={Bed} alt="Bed logo" />
                <p>{roomType}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 pl-5 pr-10">
            <h2 className="text-[#000000] font-bold text-2xl flex justify-end">{price}</h2>
            <p className="text-[#1D2433] font-semibold flex justify-end whitespace-nowrap">
              Total Price: NGN {totalPrice}
            </p>
            <p className="text-[#1D2433] font-semibold flex justify-end whitespace-nowrap">
              {rooms} room x {nights} nights incl. taxes
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between border-b border-[#E4E7EC] pb-5 bg-[#FFFFFF] pt-5 pl-5 pr-10 text-[#647995] text-md font-semibold">
          <div className="flex flex-row gap-2">
            <p>Facilities:</p>
            {facilities.map((facility, index) => (
              <React.Fragment key={index}>
                <img src={facility.icon} alt={facility.name} />
                <p>{facility.name}</p>
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-row gap-2">
            <img src={CalendarBlank} alt="Calendar Blank" />
            <p>Check-In: {checkInDate}</p>
            <img src={CalendarBlank} alt="Calendar Blank" />
            <p>Check-Out: {checkOutDate}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between bg-[#FFFFFF] pb-5 bg-[#FFFFFF] pt-5 pl-5 border-b border-[#E4E7EC]">
          <div className="flex flex-row gap-4 text-[#0D6EFD] text-md font-semibold">
          <a className="text-[#0D6EFD] text-md font-semibold" href=""><p>Hotel details</p></a>
          <a className="text-[#0D6EFD] text-md font-semibold" href=""><p>Price details</p></a>
          </div>
          <div className="text-[#0D6EFD] pr-10 text-md font-semibold">
          <a className="text-[#0D6EFD] text-md font-semibold" href=""><p>Edit details</p></a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#FBEAE9] w-[50px] rounded-br-lg rounded-tr-lg">
        <img src={Xcancel} alt="Xcancel" />
      </div>
    </div>
  );
};

export default HotelCard;
