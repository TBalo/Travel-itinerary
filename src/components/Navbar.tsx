import logo from "@assets/icons/logo.svg";
import searchIcon from "@assets/icons/search-icon.svg";
import home from "@assets/icons/home.svg";
import homeText from "@assets/icons/homeText.svg";
import dashboard from "@assets/icons/dashboard.svg";
import dashboardText from "@assets/icons/dashboardText.svg";
import wallet from "@assets/icons/wallet.svg";
import walletText from "@assets/icons/walletText.svg";
import tripPlan from "@assets/icons/tripPlan.svg";
import planTripText from "@assets/icons/planTripText.svg";
import commisionForLife from "@assets/icons/commisionForLife.svg";
import commisionForLifeText from "@assets/icons/commisionForLifeText.svg";
import Line from "@assets/icons/Line.svg";
import notification from "@assets/icons/notification.svg";
import notificationText from "@assets/icons/notificationText.svg";
import carts from "@assets/icons/carts.svg";
import cartsText from "@assets/icons/cartsText.svg";
import create from "@assets/icons/create.svg";
import createText from "@assets/icons/createText.svg";
import BaseButton from "./base-components/base-button";
import profilePic from "@assets/icons/profilePic.svg";
import CaretDown from "@assets/icons/CaretDown.svg";


const Navbar = () => {
  return (
    <div className="w-full fixed top-0 h-[97px] z-50 shadow-md flex items-center bg-white overflow-hidden gap-[290px] pr-5">
      <div className="ml-5 flex items-center gap-[20px] w-[30%]">
        <img src={logo} alt="logo icon" />
        <div className="flex bg-[#F0F2F5] py-[12px] pl-[16px] w-[314px]">
          <img src={searchIcon} />
          <input placeholder="Search" className="outline-none bg-[#F0F2F5]" />
        </div>
      </div>

      <div className="flex gap-[10px] w-[70%]">
        <div className="w-[16%] h-full flex flex-col gap-2 items-center justify-center">
          <img src={home} alt="oxygen icon" />
          <img src={homeText} />
        </div>

        <div className="w-[16%] h-full flex flex-col gap-2 items-center justify-center">
          <img src={dashboard} alt="oxygen icon" />
          <img src={dashboardText} />
        </div>

        <div className="w-[16%] h-full flex flex-col gap-2 items-center justify-center">
          <img src={wallet} alt="oxygen icon" />
          <img src={walletText} />
        </div>

        <div className="w-[16%] h-full flex flex-col gap-2 items-center justify-center">
          <img src={tripPlan} alt="oxygen icon" />
          <img src={planTripText} />
        </div>

        <div className="w-[16%] h-full flex flex-col gap-3 items-center justify-center">
          <img src={commisionForLife} alt="oxygen icon" />
          <img src={commisionForLifeText} />
        </div>

        <div className="w-[10%] flex items-center justify-center">
          <img src={Line} className="h-auto" />
        </div>

        <div className="pt-2 w-[16%] h-full flex flex-col gap-2 items-center justify-center">
          <BaseButton style="bg-[#0D6EFD] flex justify-center items-center w-[101px] h-[44px]">
            <p className="text-14 text-white">Subscribe</p>
          </BaseButton>
        </div>

        <div className="w-[16%] h-full flex flex-col gap-2 items-center justify-center">
          <img src={notification} alt="oxygen icon" />
          <img src={notificationText} />
        </div>

        <div className="w-[16%] h-full flex flex-col gap-2 items-center justify-center">
          <img src={carts} alt="oxygen icon" />
          <img src={cartsText} />
        </div>

        <div className="w-[16%] h-full flex flex-col gap-2 items-center justify-center">
          <img src={create} alt="oxygen icon" />
          <img src={createText} />
        </div>

        <div className="w-[16%] h-full flex flex-col items-center justify-center">
          <img src={profilePic} />
        </div>

        <div className="pt-3 w-[10%] h-full flex flex-col items-center justify-center">
          <img src={CaretDown} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
