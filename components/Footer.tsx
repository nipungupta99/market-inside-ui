import useDeviceType from "@/hooks/useDeviceType";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  LiaFacebookSquare,
  LiaLinkedin,
  LiaSkype,
  LiaYoutube,
} from "react-icons/lia";
import { TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => {
  const [showFirstColumn, setShowFirstColumn] = useState(false);
  const [showSecondColumn, setShowSecondColumn] = useState(false);
  const [showThirdColumn, setShowThirdColumn] = useState(false);

  const isMobile = useDeviceType();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-container">
          <div className="footer__logo-wrapper">
            <Image
              src="/assets/footer-logo.webp"
              alt="footer-logo"
              width="230"
              height="230"
              className="footer__logo"
            />
          </div>
          <p className="footer__copyright footer__copyright--desktop">
            Copyright © 2022 Market Inside.
            <br /> All rights reserved
          </p>
        </div>
        <div className="footer__links">
          <div className="footer__columns">
            <div className="footer__column">
              <button
                onClick={() =>
                  isMobile ? setShowFirstColumn(!showFirstColumn) : null
                }
                className="footer__column-title"
              >
                MARKET INSIDE{" "}
                {showFirstColumn ? (
                  <FaChevronUp className="footer__column-chevron" />
                ) : (
                  <FaChevronDown className="footer__column-chevron" />
                )}
              </button>
              {(isMobile && showFirstColumn) || !isMobile ? (
                <ul className="footer__column-list">
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Platform</a>
                  </li>
                  <li>
                    <a href="">Data</a>
                  </li>
                  <li>
                    <a href="">Plans</a>
                  </li>
                  <li>
                    <a href="">Research & Insights</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                </ul>
              ) : null}
            </div>
            <div className="footer__column">
              <button
                onClick={() =>
                  isMobile ? setShowSecondColumn(!showSecondColumn) : null
                }
                className="footer__column-title"
              >
                SOLUTIONS
                {showSecondColumn ? (
                  <FaChevronUp className="footer__column-chevron" />
                ) : (
                  <FaChevronDown className="footer__column-chevron" />
                )}
              </button>
              {(isMobile && showSecondColumn) || !isMobile ? (
                <ul className="footer__column-list">
                  <li>
                    <a href="">Importers</a>
                  </li>
                  <li>
                    <a href="">Exporters</a>
                  </li>
                  <li>
                    <a href="">Logistics</a>
                  </li>
                  <li>
                    <a href="">Corporation</a>
                  </li>
                  <li>
                    <a href="">Financial Institutions</a>
                  </li>
                  <li>
                    <a href="">IT and Consulting</a>
                  </li>
                  <li>
                    <a href="">Law Firms</a>
                  </li>
                </ul>
              ) : null}
            </div>
            <div className="footer__column">
              <button
                onClick={() =>
                  isMobile ? setShowThirdColumn(!showThirdColumn) : null
                }
                className="footer__column-title"
              >
                SOLUTIONS{" "}
                {showThirdColumn ? (
                  <FaChevronUp className="footer__column-chevron" />
                ) : (
                  <FaChevronDown className="footer__column-chevron" />
                )}
              </button>
              {(isMobile && showThirdColumn) || !isMobile ? (
                <ul className="footer__column-list">
                  <li>
                    <a href="">Insurance</a>
                  </li>
                  <li>
                    <a href="">Consulting and Research</a>
                  </li>
                  <li>
                    <a href="">Sales and Marketing</a>
                  </li>
                  <li>
                    <a href="">Asset Management Companies</a>
                  </li>
                  <li>
                    <a href="">Academic Institutions</a>
                  </li>
                  <li>
                    <a href="">Government Agencies</a>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__demo-button-wrapper">
              <button className="footer__demo-button">SCHEDULE A DEMO</button>
            </div>
            <div className="footer__social-icons">
              <LiaFacebookSquare className="footer__icon" />
              <LiaLinkedin className="footer__icon" />
              <LiaYoutube className="footer__icon" />
              <LiaSkype className="footer__icon" />
              <TiSocialTwitterCircular className="footer__icon" />
            </div>
            <p className="footer__copyright footer__copyright--mobile">
              Copyright © 2022 Market Inside.
              <br /> All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
