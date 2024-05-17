import Image from "next/image";
import Button from "./Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselItemData, IntroVideoData } from "@/types/introVideoType";
import React from "react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselItem = ({ src, description }: CarouselItemData) => {
  return (
    <div className="intro-video__carousel-item">
      <Image src={src} alt="intro-carousel-item" height="30" width="80" />
      <p className="intro-video__carousel-description">{description}</p>
    </div>
  );
};

const IntroVideoSection = ({
  introVideoData,
}: {
  introVideoData: IntroVideoData;
}) => {
  return (
    <section className="intro-video">
      <div className="intro-video__container">
        <hr className="intro-video__divider" />
      </div>

      <div className="intro-video__content">
        <div className="intro-video__header">
          <div className="intro-video__image-wrapper">
            <Image
              {...introVideoData.introImage}
              className="intro-video__image"
            />
          </div>
          <div className="intro-video__title-wrapper">
            <h1 className="intro-video__title">
              {introVideoData.title.map((line: string, i: number) => (
                <React.Fragment key={i}>
                  {line} <br />
                </React.Fragment>
              ))}
              <span className="intro-video__title--highlight">
                {introVideoData.titleHighlight}
              </span>
            </h1>
            <Image
              {...introVideoData.arrowImage}
              className="intro-video__arrow"
            />
          </div>
        </div>
        <div className="intro-video__divider-vertical" />
        <div className="intro-video__description">
          <p className="intro-video__text">{introVideoData.description}</p>
          <Button className="intro-video__button">
            {introVideoData.buttonText}
          </Button>
        </div>
      </div>
      <div className="intro-video__carousel">
        <Carousel responsive={responsive}>
          {introVideoData.carouselItems.map(
            (item: CarouselItemData, index: number) => (
              <CarouselItem
                key={index}
                src={item.src}
                description={item.description}
              />
            )
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default IntroVideoSection;
