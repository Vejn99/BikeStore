import React from "react";
import "./Header.css";
import logo from "../../img/logo.png";
import { NavbarItems } from "./NavItems";
import { NavItemsInterface } from "./NavItemsInterface";

export const HeaderComponent = () => {
  const navbarProps: NavItemsInterface = {
    navbarItems: [
      {
        name: "Home",
        href: "/home",
        isActive: true,
      },
      {
        name: "Bikes",
        href: "/",
        isActive: false,
      },
      {
        name: "Gear",
        href: "/",
        isActive: false,
      },
      {
        name: "Parts",
        href: "/",
        isActive: false,
      },
      {
        name: "Tires",
        href: "/",
        isActive: false,
      },
      {
        name: "Service-info",
        href: "/",
        isActive: false,
      },
      {
        name: "Catalogues",
        href: "/",
        isActive: false,
      },
      {
        name: "Contact",
        href: "/",
        isActive: false,
      },
    ],
  };
  return (
    <>
      <div className="w-100 px-3 ">
        <nav className="d-flex justify-content-between align-items-center border-bottom py-2 px-4">
          <div className="logoImg">
            <a href="/home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <NavbarItems {...navbarProps} />
          <div className="icons">
            <a href="/">
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </a>
            <a href="/">
              <i className="fa-solid fa-bag-shopping fa-lg"></i>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
