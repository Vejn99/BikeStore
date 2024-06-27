import "./Header.css";
import { NavItemsInterface } from "./NavItemsInterface";

export const NavbarItems = (props: NavItemsInterface) => {
  const renderLiItems = () => {
    return props.navbarItems.map((item, index) => (
      <li className="navItem" key={index}>
        <a className={` ${item.isActive ? "active" : ""}`} href={item.href}>
          {item.name}
        </a>
      </li>
    ));
  };

  return (
    <>
      <ul className="d-flex justify-content-center">{renderLiItems()}</ul>
    </>
  );
};
