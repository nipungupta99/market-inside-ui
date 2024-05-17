export interface HeroData {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  title: {
    highlight: string;
    lines: string[];
  };
  subtitle: string;
  emailPlaceholder: string;
  buttonLabel: string;
  ratings: {
    src: string;
    alt: string;
    height: number;
    width: number;
    stars: string;
  }[];
}
