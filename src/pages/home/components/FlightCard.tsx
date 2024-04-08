import React from 'react';
import BaseButton from "@/components/base-components/base-button";
import AirplaneTakeoff from "@assets/icons/AirplaneTakeoff.svg";
import AirplaneLanding from "@assets/icons/AirplaneLanding.svg";
import Xcancel from "@assets/icons/X.svg";
import usb from "@assets/icons/Usb.svg";
import ForkKnife from "@assets/icons/ForkKnife.svg";
import FilmSlate from "@assets/icons/FilmSlate.svg";
import SuitcaseRolling from "@assets/icons/SuitcaseRolling.svg";

interface FlightCardProps {
    airlineLogoSrc: string;
    flightNumber: string;
    flightClass: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    origin: string;
    destination: string;
    price: string;
  }
  
  const FlightCard: React.FC<FlightCardProps> = ({
    airlineLogoSrc,
    flightNumber,
    flightClass,
    departureTime,
    arrivalTime,
    duration,
    origin,
    destination,
    price
  }) => {  return (
    <div className="flex flex-row mb-10">
      <div className="w-full">
        <div className="grid grid-cols-3 border-b border-[#E4E7EC] pt-5 pb-5 bg-[#FFFFFF] rounded-tl-lg">
          <div className="flex items-start justify-left pl-5">
            <div className="flex gap-1 justify-center items-center">
              <div>
                <img src={airlineLogoSrc} alt="airline logo" />
              </div>
              <div className="">
                <div className="text-2xl">American Airlines</div>
                <div className="flex gap-2 justify-center items-center">
                  <p className="w-[49.5%]">{flightNumber}</p>
                  <div className="w-full">
                    <BaseButton style="bg-[#0A369D] flex justify-center items-center h-[40px]">
                      <p className="text-[#FFFFFF] w-full whitespace-nowrap text-sm px-2">
                        {flightClass}
                      </p>
                    </BaseButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10 flex items-center justify-center">
            <div className="flex flex-col gap-1 flex items-end justify-right">
              <p className="font-bold text-2xl">{departureTime}</p>
              <p className="whitespace-nowrap">Sun, 20 Aug</p>
            </div>
            <div className="flex flex-col gap-4 w-[100%]">
              <div className="flex flex-row justify-between w-full">
                <img src={AirplaneTakeoff} alt="AirplaneTakeoff" />
                <p className="whitespace-nowrap">Duration: {duration}</p>
                <img src={AirplaneLanding} alt="AirplaneTakeoff" />
              </div>
              <div className="w-full">
                <div className="w-[100%] h-[10px] bg-[#E7F0FF] border rounded-lg m-auto flex items-center justify-center">
                  <div className="w-[40%] h-[10px] bg-[#0D6EFD] border rounded-lg"></div>
                </div>
              </div>
              <div className="flex flex-row justify-between w-full">
                <p className="font-bold text-md">{origin}</p>
                <p>Direct</p>
                <p className="font-bold text-md">{destination}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl">{arrivalTime}</p>
              <p className="whitespace-nowrap">Sun, 20 Aug</p>
            </div>
          </div>
          <div className="flex items-center justify-end pr-10">
            <p className="font-bolder text-4xl">{price}</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 border-b border-[#E4E7EC] pb-5 bg-[#FFFFFF] pt-5 pl-5 text-[#647995] text-md font-semibold">
          <p>Facilities:</p>
          <img src={SuitcaseRolling} alt="SuitcaseRolling" />
          <p>Baggage: 20kg</p>
          <p>Cabin Baggage: 8kg</p>
          <img src={FilmSlate} alt="FilmSlate" />
          <p>In flight entertainment</p>
          <img src={ForkKnife} alt="ForkKnife" />
          <p>In flight meal</p>
          <img src={usb} alt="usb" />
          <p>USB Port</p>
        </div>
        <div className="flex flex-row justify-between bg-[#FFFFFF] pb-5 bg-[#FFFFFF] pt-5 pl-5 border-b border-[#E4E7EC] rounded-bl-lg">
          <div className="flex flex-row gap-4 text-[#0D6EFD] text-md font-semibold">
          <a className="text-[#0D6EFD] text-md font-semibold" href=""><p>Flight details</p></a>
          <a className="text-[#0D6EFD] text-md font-semibold" href=""><p>Price details</p></a>
          </div>
          <div className="text-[#0D6EFD] pr-10 text-md font-semibold">
          <a className="text-[#0D6EFD] text-md font-semibold" href=""><p>Edit details</p></a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#FBEAE9] w-[40px] rounded-br-lg rounded-tr-lg">
        <img src={Xcancel} alt="Xcancel" />
      </div>
    </div>
  );
};

export default FlightCard;
