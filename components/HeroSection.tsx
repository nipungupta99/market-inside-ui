import Image from "next/image";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__image-wrapper">
          <Image
            src="/assets/hero-image-1.webp"
            alt="hero-image"
            width="500"
            height="500"
          />
        </div>
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title--highlight">GET ACCESS OF</span>
            <br /> MARKET <br /> INTELLIGENCE <br /> PLATFORM
          </h1>
          <hr className="hero__divider" />
          <p className="hero__subtitle">GROW YOUR BUSINESS</p>
          <div className="hero__email-signup">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="hero__input"
            />
            <Button className="hero__button">FREE TRIAL</Button>
          </div>
          <div className="hero__ratings">
            <span className="hero__rating hero__rating--capterra">
              <Image
                src="/assets/capterra-inc-logo.webp"
                alt="capterra-rating"
                height="7"
                width="96"
              />
              ★★★★
            </span>
            <span className="hero__rating hero__rating--g2">
              <Image
                src="/assets/G2-inc-logo.webp"
                alt="g2-rating"
                height="5"
                width="25"
              />
              ★★★★★
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
