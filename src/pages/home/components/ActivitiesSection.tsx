import React from 'react';
import ActivityCard from './ActivityCard';
import BaseButton from "@/components/base-components/base-button";
import ActivitiesIcon from "@assets/icons/activities.svg";

interface ActivityDetails {
  activityName: string;
  description: string;
  rating: number;
  duration: string;
  price: string;
  dateTime: string;
  includedItems: string[];
}

interface ActivitiesSectionProps {
  activityDetailsList: ActivityDetails[];
}

const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ activityDetailsList }) => {
  return (
    <div className="bg-[#0054E4] px-4 rounded-lg">
      <div className="flex flex-row justify-between py-5">
        <div className="flex gap-2">
          <div>
            <img src={ActivitiesIcon} alt="activities icon" />
          </div>
          <p className="text-[#FFFFFF] font-bold">Activities</p>
        </div>
        <div className="flex items-center">
          <BaseButton style="bg-[#FFFFFF] flex justify-center items-center h-[44px] px-4">
            <p className="text-[#0D6EFD] whitespace-nowrap">Add Activities</p>
          </BaseButton>
        </div>
      </div>

      {activityDetailsList.map((activityDetails, index) => (
        <ActivityCard
          key={index}
          activityName={activityDetails.activityName}
          description={activityDetails.description}
          rating={activityDetails.rating}
          duration={activityDetails.duration}
          price={activityDetails.price}
          dateTime={activityDetails.dateTime}
          includedItems={activityDetails.includedItems}
        />
      ))}
    </div>
  );
};

export default ActivitiesSection;
