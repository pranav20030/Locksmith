import React from "react";
import { GrCurrency, GrNotes } from "react-icons/gr";

import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import { TbPackages } from "react-icons/tb";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { PiUserList, PiPassword, PiUsersLight, PiNotePencilBold, PiIdentificationBadge, PiKeyholeLight, PiStarHalfBold } from "react-icons/pi";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/adminPanel/dashboard",
    icon: <BiIcons.BiHome />,
  },
  {
    title: "User Management",
    path: "/adminPanel/userManagement",
    icon: <PiIdentificationBadge />,
  },
  {
    title: "Service Provider Management",
    path: "/adminPanel/serviceProviderManagement",
    icon: <PiUserList/>,
  },
  {
    title: "Category Management",
    path: "/adminPanel/categoryManagement",
    icon: <PiKeyholeLight />,
  },
  {
    title: "Fare Management",
    path: "/adminPanel/fareManagement",
    icon: <LiaMoneyBillWaveSolid  />,
  },
  {
    title: "Booking Management",
    path: "/adminPanel/BookingManagement",
    icon: <GrNotes/>,
  },
  {
    title: "Payment Management",
    path: "/adminPanel/paymentManagement",
    icon: <GrCurrency  />,
  },
  
  {
    title: "Sub Admin Management",
    path: "/adminPanel/subAdminManagement",
    icon: <PiUsersLight  />,
  },
  {
    title: "Feedback Management",
    path: "/adminPanel/feedbackManagement",
    icon: <PiStarHalfBold  />,
  },
  {
  title: "Notification Management",
  path: "/adminPanel/NotificationManagement",
  icon: <RiIcons.RiNotification3Line  />,
},
  {
    title: "CMS Management",
    path: "/adminPanel/cmsManagement",
    icon: <AiIcons.AiOutlineQuestionCircle />,
    iconClosed: <IoIcons.IoIosArrowDown  />,
    iconOpened: <IoIcons.IoIosArrowUp  />,
    subNav: [
     
      {
        title: "Privacy Policy",
        path: "/adminPanel/privacyPolicy",
        icon: <BsIcons.BsCardList />,
      },
      {
        title: "About Us",
        path: "/adminPanel/aboutUs",
        icon: <BsIcons.BsCardList />,
      },
      {
        title: "Contact Us",
        path: "/contactUs",
        icon: <BsIcons.BsCardList />,
      },
      {
        title: "Terms & Condition",
        path: "/adminPanel/termsAndCondition",
        icon: <BsIcons.BsCardList />,
      },
      {
        title: "FAQs",
        path: "/adminPanel/faqs",
        icon: <BsIcons.BsCardList />,
      },
      
    ],
  },
];

export const profileSidebarData = [
  {
    title: "My Profile",
    path: "/adminPanel/profile",
    icon: <AiIcons.AiOutlineUser />,
  },
  {
    title: "Change Password",
    path: "/adminPanel/changedPassword",
    icon: <PiPassword />,
  },
];
