import React from 'react';
import FlightCard from './FlightCard';
import BaseButton from "@/components/base-components/base-button";
import AirplaneInFlight from "@assets/icons/AirplaneInFlight.svg";

interface FlightDetails {
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

interface FlightSectionProps {
  flights: FlightDetails[];
}

const FlightSection: React.FC<FlightSectionProps> = ({ flights }) => {
  return (
    <div className="bg-[#F0F2F5] px-4 rounded-lg">
      <div className="flex flex-row justify-between py-5">
        <div className="flex gap-2">
          <div>
            <img src={AirplaneInFlight} alt="flight icon" />
          </div>
          <p className="text-[#1D2433] font-bold">Flights</p>
        </div>
        <div className="flex items-center">
          <BaseButton style="bg-[#FFFFFF] flex justify-center items-center h-[44px] px-4">
            <p className="text-[#0D6EFD] whitespace-nowrap">Add Flights</p>
          </BaseButton>
        </div>
      </div>

      {flights.map((flight, index) => (
        <FlightCard
          key={index}
          airlineLogoSrc={flight.airlineLogoSrc}
          flightNumber={flight.flightNumber}
          flightClass={flight.flightClass}
          departureTime={flight.departureTime}
          arrivalTime={flight.arrivalTime}
          duration={flight.duration}
          origin={flight.origin}
          destination={flight.destination}
          price={flight.price}
        />
      ))}
    </div>
  );
};

export default FlightSection;
