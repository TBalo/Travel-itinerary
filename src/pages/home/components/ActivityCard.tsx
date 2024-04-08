import React from 'react';
import BaseButton from "@/components/base-components/base-button";
import activitiesImage from "@assets/images/activitiesImage.svg";
import Clock from "@assets/icons/Clock.svg";
import CaretCircleDown from "@assets/icons/CaretCircleDown.svg";
import CaretCircleUp from "@assets/icons/CaretCircleUp.svg";
import Xcancel from "@assets/icons/X.svg";
import Star from "@assets/icons/Star.svg";
import MapPin from "@assets/icons/MapPin.svg";

interface ActivityCardProps {
  activityName: string;
  description: string;
  rating: number;
  duration: string;
  price: string;
  dateTime: string;
  includedItems: string[];
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  activityName,
  description,
  rating,
  duration,
  price,
  dateTime,
  includedItems,
}) => {
  return (
    <div className="flex flex-row mb-10">
      <div className="flex items-center justify-center bg-[#FFFFFF] pl-3 rounded-tl-lg rounded-bl-lg">
        <img src={activitiesImage} alt="activities Image" className="max-w-full rounded-lg pl-1 py-1 w-[305px] h-[290px]" />
      </div>
      <div className="w-full">
        <div className="border-b border-[#E4E7EC] pt-5 pb-5 bg-[#FFFFFF] flex flex-row justify-between">
          <div className="flex flex-col gap-2 pl-5">
            <h2 className="text-[#000000] font-bold text-2xl">{activityName}</h2>
            <p className="text-[#1D2433] font-semibold w-[85%]">{description}</p>

            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-1 text-[#0D6EFD] font-semibold">
                <img src={MapPin} alt="MapPin Logo" />
                <a className="text-[#0D6EFD] text-md font-semibold" href=""><p>Directions</p></a>
              </div>
              <div className="flex flex-row gap-1 text-[#676E7E] font-semibold">
                <img src={Star} alt="star logo" />
                <p>{rating}</p>
              </div>
              <div className="flex flex-row gap-1 text-[#676E7E] font-semibold">
                <img src={Clock} alt="clock logo" />
                <p>{duration}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 pl-5 pr-10">
            <h2 className="text-[#000000] font-bold text-2xl flex justify-end">{price}</h2>
            <p className="text-[#1D2433] font-semibold flex justify-end whitespace-nowrap">{dateTime}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between border-b border-[#E4E7EC] pb-5 bg-[#FFFFFF] pt-5 pl-5 pr-10 text-[#647995] text-md font-semibold">
          <div className="flex flex-row gap-2 items-center">
            <p>What's Included: </p>
            {includedItems.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            <a className="text-[#0D6EFD] text-md font-semibold" href=""><p className="text-[#0D6EFD] text-md font-semibold">See more</p></a>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex items-center">
              <BaseButton style="bg-[#0A369D] flex justify-center items-center h-[32px] w-[90px] px-4">
                <p className="text-[#FFFFFF] whitespace-nowrap">Day 1 - (2)</p>
              </BaseButton>
            </div>
            <div className="flex flex-col gap-2">
              <img src={CaretCircleUp} alt="caret up" />
              <img src={CaretCircleDown} alt="caret down" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between bg-[#FFFFFF] pb-5 bg-[#FFFFFF] pt-5 pl-5 border-b border-[#E4E7EC]">
          <div className="flex flex-row gap-4 text-[#0D6EFD] text-md font-semibold">
          <a className="text-[#0D6EFD] text-md font-semibold" href=""><p>Activity details</p></a>
          <a className="text-[#0D6EFD] text-md font-semibold" href=""><p>Price details</p></a>
          </div>
          <div className="text-[#0D6EFD] pr-10 text-md font-semibold">
          <a className="text-[#0D6EFD] text-md font-semibold" href=""><p>Edit details</p></a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#FBEAE9] w-[40px] rounded-tr-lg rounded-br-lg">
        <img src={Xcancel} alt="Xcancel" />
      </div>
    </div>
  );
};

export default ActivityCard;
