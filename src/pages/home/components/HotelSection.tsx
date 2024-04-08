import React from "react";
import HotelCard from "./HotelCard";
import BaseButton from "@/components/base-components/base-button";
import hotelLogo from "@assets/icons/hotelLogo.svg";

interface HotelSectionProps {
  hotels: HotelDetails[];
}

interface HotelDetails {
  hotelName: string;
  address: string;
  rating: number;
  numberOfReviews: number;
  roomType: string;
  price: string;
  totalPrice: string;
  rooms: number;
  nights: number;
  facilities: { name: string; icon: string }[];
  checkInDate: string;
  checkOutDate: string;
}

const HotelSection: React.FC<HotelSectionProps> = ({ hotels }) => {
  return (
    <div className="bg-[#344054] px-4 rounded-lg">
      <div className="flex flex-row justify-between py-5">
        <div className="flex gap-2">
          <div>
            <img src={hotelLogo} alt="hotel icon" />
          </div>
          <p className="text-[#FFFFFF] font-bold">Hotels</p>
        </div>
        <div className="flex items-center">
          <BaseButton style="bg-[#FFFFFF] flex justify-center items-center h-[44px] px-4">
            <p className="text-[#1D2433] whitespace-nowrap">Add Hotels</p>
          </BaseButton>
        </div>
      </div>

      {hotels.map((hotel, index) => (
        <div key={index}>
          <HotelCard
            hotelName={hotel.hotelName}
            address={hotel.address}
            rating={hotel.rating}
            numberOfReviews={hotel.numberOfReviews}
            roomType={hotel.roomType}
            price={hotel.price}
            totalPrice={hotel.totalPrice}
            rooms={hotel.rooms}
            nights={hotel.nights}
            facilities={hotel.facilities}
            checkInDate={hotel.checkInDate}
            checkOutDate={hotel.checkOutDate}
          />
        </div>
      ))}
    </div>
  );
};

export default HotelSection;
