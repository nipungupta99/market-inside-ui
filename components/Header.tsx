import Image from "next/image";
import Button from "./Button";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  return (
    <header className="header">
      <nav className="container mx-auto flex justify-between p-4">
        <div className="logo">
          <Image
            src="/assets/header-logo.png"
            alt="header-logo"
            width="150"
            height="150"
          />
        </div>

        <div className="hidden md:flex gap-12 items-center">
          <ul className="flex gap-3 text-[14px] text-[#434343] ">
            <li>SOLUTIONS</li>
            <li>PRODUCT</li>
            <li>DATA</li>
            <li>PLAN</li>
            <li>RESEARCH & INSIGHTS</li>
          </ul>
          <ul className="flex gap-4">
            <li>
              <Button className="header-button">LOGIN</Button>
            </li>
            <li>
              <Button className="header-button--alt">LET&apos;S TALK</Button>
            </li>
          </ul>
        </div>
        <button className="md:hidden block">
          <BiMenuAltLeft size={36} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
