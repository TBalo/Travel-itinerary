import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import banner from "@assets/images/banner.svg";
import UserPlus from "@assets/icons/UserPlus.svg";
import { GoArrowRight } from "react-icons/go";
import { LuCalendar } from "react-icons/lu";
import BaseButton from "@/components/base-components/base-button";
import { BsThreeDots } from "react-icons/bs";
import profile from "@assets/images/profile.svg";
import settings from "@assets/images/settings.svg";
import Container from "@/components/Container";
import american_airlines_symbol from "@assets/icons/american_airlines_symbol.svg";
import SwimmingPool from "@assets/icons/SwimmingPool.svg";
import Wine from "@assets/icons/Wine.svg";
import HotelSection from "./components/HotelSection";
import FlightSection from "./components/FlightSection";
import ActivitiesIcon from "@assets/icons/activities.svg";
import activitiesImage from "@assets/images/activitiesImage.svg";
import Clock from "@assets/icons/Clock.svg";
import CaretCircleDown from "@assets/icons/CaretCircleDown.svg";
import CaretCircleUp from "@assets/icons/CaretCircleUp.svg";
import ActivityCard from "./components/ActivityCard";
import ActivitiesSection from "./components/ActivitiesSection";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/Home");
    }
  }, [navigate]);

  const flights = [
    {
      airlineLogoSrc: american_airlines_symbol,
      flightNumber: "AA-829",
      flightClass: "First Class",
      departureTime: "08:35",
      arrivalTime: "10:20",
      duration: "1h 45m",
      origin: "LOS",
      destination: "SIN",
      price: "₦123,450.00",
    },
  ];

  const hotels = [
    {
      hotelName: "Riviera Resort",
      address:
        "18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase 1",
      rating: 8.5,
      numberOfReviews: 436,
      roomType: "King size room",
      price: "₦123,450.00",
      totalPrice: "560,000",
      rooms: 1,
      nights: 10,
      facilities: [
        { name: "Pool", icon: SwimmingPool },
        { name: "Bar", icon: Wine },
      ],
      checkInDate: "20-04-2024",
      checkOutDate: "29-04-2024",
    },

    {
      hotelName: "Riviera Resort",
      address:
        "18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase 1",
      rating: 8.5,
      numberOfReviews: 436,
      roomType: "King size room",
      price: "₦123,450.00",
      totalPrice: "560,000",
      rooms: 1,
      nights: 10,
      facilities: [
        { name: "Pool", icon: SwimmingPool },
        { name: "Bar", icon: Wine },
      ],
      checkInDate: "20-04-2024",
      checkOutDate: "29-04-2024",
    },
  ];

  const activityDetailsList = [
    {
      activityName: "The Museum of Modern Art",
      description:
        "Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The Modern restaurant",
      rating: 4.5,
      duration: "1 Hour",
      price: "₦123,450.00",
      dateTime: "10:30 AM on Mar 19",
      includedItems: ["Admission to the Empire State Building"],
    },
    {
      activityName: "Central Park Bike Tour",
      description:
        "Explore Central Park by bike with a guided tour through scenic paths and landmarks",
      rating: 4.8,
      duration: "2 Hours",
      price: "₦85,000.00",
      dateTime: "2:00 PM on Mar 20",
      includedItems: ["Bike rental", "Guided tour"],
    },
  ];

  return (
    <div className="w-[99%] px-[25px] pt-[25px] pb-[100px] flex flex-col gap-7 h-full bg-[#FFFFFF]">
      <div className="flex">
        <img src={banner} alt="banner" className="w-[100%]" />
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="w-[50%] whitespace-nowrap flex gap-1 bg-[#FEF4E6] text-[#7A4504] items-center justify-center">
            <LuCalendar className="text-[#7A4504]" />
            <p>21 Mar 2024</p>
            <GoArrowRight className="text-[#7A4504]" />
            <p>21 Apr 2024</p>
          </div>
          <div className="font-bold text-[#000000] text-4xl">
            <p>Bahamas Family Trip</p>
          </div>
          <div className="font-semibold text-[#676E7E] text-lg">
            <p>New York, United States of America | Solo Trip</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-5">
          <div className="flex gap-4 justify-right items-end">
            <BaseButton style="bg-[#E7F0FF] flex justify-center items-center w-[101px] h-[44px]">
              <img src={UserPlus} alt="user" />
            </BaseButton>
            <div className="h-full flex items-center justify-center">
              <BsThreeDots />
            </div>
          </div>
          <div className="flex pr-2">
            <img src={profile} alt="profile" />
            <img src={settings} alt="settings" />
          </div>
        </div>
      </div>
      <div className="w-[70%] flex flex-row gap-4">
        <Container
          containerBackgroundColor={"bg-[#000031]"}
          title={"Activities"}
          text={
            "Build, personalize, and optimize your itineraries with our trip planner."
          }
          titleStyle={"font-bold"}
          buttonBackgroundColor={"bg-[#0D6EFD]"}
          buttonTextColor={"text-white"}
        />
        <Container
          containerBackgroundColor={"bg-[#E7F0FF]"}
          title={"Hotels"}
          text={
            "Build, personalize, and optimize your itineraries with our trip planner."
          }
          titleStyle={"text-[#1D2433]"}
          textStyle={"text-[#1D2433]"}
          buttonBackgroundColor={"bg-[#0D6EFD]"}
          buttonTextColor={"text-white"}
        />

        <Container
          containerBackgroundColor={"bg-[#0D6EFD]"}
          title={"Flights"}
          text={
            "Build, personalize, and optimize your itineraries with our trip planner."
          }
          buttonBackgroundColor={"bg-[#FFFFFF]"}
          buttonTextColor={"text-[#0D6EFD]"}
        />
      </div>

      <section>
        <div className="flex flex-col gap-2 mt-10">
          <div className="font-bold text-[#000000] text-2xl">
            <p>Trip Itineraries</p>
          </div>
          <div className="font-semibold text-[#676E7E] text-md">
            <p>Your trip itineraries are placed here</p>
          </div>
        </div>
      </section>

        <FlightSection flights={flights} />
        <HotelSection hotels={hotels} />
        <ActivitiesSection activityDetailsList={activityDetailsList} />
    </div>
  );
};

export default Home;
