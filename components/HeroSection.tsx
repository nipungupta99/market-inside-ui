import Image from "next/image";
import Button from "./Button";
import { HeroData } from "@/types/heroSectionType";

const HeroSection = ({ heroData }: { heroData: HeroData }) => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__image-wrapper">
          <Image
            src={heroData.imageSrc}
            alt={heroData.imageAlt}
            width={heroData.imageWidth}
            height={heroData.imageHeight}
          />
        </div>
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title--highlight">
              {heroData.title.highlight}
            </span>
            <br /> {heroData.title.lines[0]} <br /> {heroData.title.lines[1]}{" "}
            <br /> {heroData.title.lines[2]}
          </h1>
          <hr className="hero__divider" />
          <p className="hero__subtitle">{heroData.subtitle}</p>
          <div className="hero__email-signup">
            <input
              type="email"
              placeholder={heroData.emailPlaceholder}
              className="hero__input"
            />
            <Button className="hero__button">{heroData.buttonLabel}</Button>
          </div>
          <div className="hero__ratings">
            {heroData.ratings.map((rating, index) => (
              <span
                key={index}
                className={`hero__rating hero__rating--${
                  rating.alt.split("-")[0]
                }`}
              >
                <Image
                  src={rating.src}
                  alt={rating.alt}
                  height={rating.height}
                  width={rating.width}
                />
                {rating.stars}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
