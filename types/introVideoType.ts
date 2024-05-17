export interface CarouselItemData {
  src: string;
  description: string;
}

export interface IntroVideoData {
  introImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  arrowImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string[];
  titleHighlight: string;
  description: string;
  buttonText: string;
  carouselItems: CarouselItemData[];
}
