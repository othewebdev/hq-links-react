import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../../contexts/ContextProvider";
import { brandColor } from "../../data/dummy";
import DashChat from "./DashChat";

const DashNavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      onClick={customFunc}
      type="text"
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const DashNavbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();
  const userProfilePicture = window.localStorage.getItem("PROFILE_PIC");
  const localStorageUser = window.localStorage.getItem("APP_USER");

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <div />
      <div className="flex">
        <DashNavButton
          title="Menu"
          customFunc={() => {
            setActiveMenu(!activeMenu);
          }}
          color="black"
          icon={<AiOutlineMenu />}
        />
        <DashNavButton
          title="Chat"
          customFunc={() => {
            handleClick("chat");
          }}
          dotColor={brandColor}
          color="black"
          icon={<BsChatLeft />}
        />
        <DashNavButton
          title="Notifications"
          customFunc={() => {
            // setActiveMenu(!activeMenu);
          }}
          dotColor={brandColor}
          color="black"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => {}}
          >
            <img
              className="rounded-full w-8 h-8"
              src={userProfilePicture}
              alt=""
            />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                {localStorageUser}
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.chat && <DashChat />}
      </div>
    </div>
  );
};

export default DashNavbar;
