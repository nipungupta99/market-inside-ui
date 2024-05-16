import Image from "next/image";
import Button from "./Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const CarouselItem = ({
  src,
  description,
}: {
  src: string;
  description: string;
}) => {
  return (
    <div className="intro-video__carousel-item">
      <Image src={src} alt="intro-carousel-item" height="30" width="80" />
      <p className="intro-video__carousel-description">{description}</p>
    </div>
  );
};

const IntroVideoSection = () => {
  return (
    <section className="intro-video">
      <div className="intro-video__container">
        <hr className="intro-video__divider" />
      </div>
      <div className="intro-video__content">
        <div className="intro-video__header">
          <div className="intro-video__image-wrapper">
            <Image
              src="/assets/intro-image-1.png"
              alt="intro-video"
              width="130"
              height="130"
              className="intro-video__image"
            />
          </div>
          <div className="intro-video__title-wrapper">
            <h1 className="intro-video__title">
              SET THE <br /> MARKETS <br />
              <span className="intro-video__title--highlight">IN</span> MOTION
            </h1>
            <Image
              src="/assets/intro-arrow.png"
              alt="intro-arrow"
              height="40"
              width="140"
              className="intro-video__arrow"
            />
          </div>
        </div>
        <div className="intro-video__divider-vertical" />
        <div className="intro-video__description">
          <p className="intro-video__text">
            Get a comprehensive view of international trade between countries to
            set your business in a particular direction and drive growth for
            your business while keeping up to date with the latest information.
            Watch the video from Market Inside, providing its introduction with
            a quick glance at how our services help businesses.
          </p>
          <div>
            <Button className="intro-video__button">SCHEDULE A DEMO</Button>
          </div>
        </div>
      </div>
      <div className="intro-video__carousel">
        <Carousel responsive={responsive}>
          <CarouselItem
            src="/assets/intro-slider-icon-1.png"
            description="2B+ Shipments Count"
          />
          <CarouselItem
            src="/assets/intro-slider-icon-2.png"
            description="3M Total Exporter Importer"
          />
          <CarouselItem
            src="/assets/intro-slider-icon-3.png"
            description="195+ Countries Trade Data"
          />
          <CarouselItem
            src="/assets/intro-slider-icon-4.png"
            description="Global Trade Data"
          />
          <CarouselItem
            src="/assets/intro-slider-icon-4.png"
            description="Global Trade Data"
          />
          <CarouselItem
            src="/assets/intro-slider-icon-4.png"
            description="Global Trade Data"
          />
          <CarouselItem
            src="/assets/intro-slider-icon-4.png"
            description="Global Trade Data"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default IntroVideoSection;
