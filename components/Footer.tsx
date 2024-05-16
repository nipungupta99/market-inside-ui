import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto flex">
        <div className="mt-[-25px]">
          <Image
            src="/assets/footer-logo.png"
            alt="footer-logo"
            width="200"
            height="200"
          />
          <p>
            Copyright © 2022 Market Inside.
            <br /> All rights reserved
          </p>
        </div>
        <div>
          <div>top with llinks</div>
          <div>bottom with socials</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
