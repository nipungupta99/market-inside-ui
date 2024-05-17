import Image from "next/image";
import Button from "./Button";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const ParentAccordionHeader = ({ title }: { title: string }) => {
  return (
    <div className="accordion__parent-header">
      <h2 className="accordion__parent-header-title">{title}</h2>
    </div>
  );
};

const ChildAccordionHeader = ({ title }: { title: string }) => {
  return <div className="accordion__child-header">{title}</div>;
};

const ChildAccordionContent = ({
  imgSrc,
  description,
}: {
  imgSrc: string;
  description: string;
}) => {
  return (
    <div className="accordion__child-content">
      <div className="accordion__child-content-image">
        <Image src={imgSrc} alt="product" width="300" height="300" />
      </div>
      <p className="accordion__child-content-description">{description}</p>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section className="products-section">
      <div className="products-section__container">
        <div className="products-section__header">
          <h2 className="products-section__title">OUR PRODUCTS</h2>
          <p className="products-section__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
        </div>
        <div className="products-section__content md:flex">
          <div className="products-section__menu">
            <div className="products-section__menu-item products-section__menu-item--active">
              PLATFORM
            </div>
            <div className="products-section__menu-item">API</div>
            <div className="products-section__menu-item">DATA</div>
          </div>
          <div className="products-section__details">
            <h3 className="products-section__details-title">
              Technological advancements provide a competitive edge
            </h3>
            <div className="products-section__details-content  ">
              <div>
                <div className="products-section__details-buttons">
                  <Button className="products-section__details-button--selected">
                    VISUALISE VIEW
                  </Button>
                  <Button className="products-section__details-button">
                    VIEW PROFILE
                  </Button>
                  <Button className="products-section__details-button">
                    QUICK VIEW
                  </Button>
                </div>
                <p className="products-section__details-description">
                  Gather information on international trade in a visually
                  appealing way. Learn about the market trends easily and get
                  all the essential information on the import and export of a
                  country in the form of interactive graphics
                </p>
              </div>
              <div className="products-section__details-image">
                <Image
                  src="/assets/product-image-1.webp"
                  alt="product"
                  width="300"
                  height="300"
                />
              </div>
            </div>
          </div>
        </div>
        <Accordion className="products-section__accordion md:hidden">
          <AccordionItem
            header={<ParentAccordionHeader title="PLATFORM" />}
            className="products-section__accordion-item"
          >
            <h3 className="products-section__details-title mt-5">
              Technological advancements provide a competitive edge
            </h3>
            <Accordion>
              <AccordionItem
                header={<ChildAccordionHeader title="VISUALISE VIEW" />}
              >
                <ChildAccordionContent
                  imgSrc="/assets/product-image-1.webp"
                  description="Gather information on international trade in a visually
                  appealing way. Learn about the market trends easily and get
                  all the essential information on the import and export of a
                  country in the form of interactive graphics"
                />
              </AccordionItem>
              <AccordionItem
                header={<ChildAccordionHeader title="VIEW PROFILE" />}
              >
                <ChildAccordionContent
                  imgSrc="/assets/product-image-1.webp"
                  description="Gather information on international trade in a visually
                  appealing way. Learn about the market trends easily and get
                  all the essential information on the import and export of a
                  country in the form of interactive graphics"
                />
              </AccordionItem>
              <AccordionItem
                header={<ChildAccordionHeader title="QUICK VIEW" />}
              >
                <ChildAccordionContent
                  imgSrc="/assets/product-image-1.webp"
                  description="Gather information on international trade in a visually
                  appealing way. Learn about the market trends easily and get
                  all the essential information on the import and export of a
                  country in the form of interactive graphics"
                />
              </AccordionItem>
            </Accordion>
          </AccordionItem>
          <AccordionItem
            header={<ParentAccordionHeader title="API" />}
            className="products-section__accordion-item"
          >
            <h3 className="products-section__details-title mt-5">
              Technological advancements provide a competitive edge
            </h3>
            <Accordion>
              <AccordionItem
                header={<ChildAccordionHeader title="VISUALISE VIEW" />}
              >
                <ChildAccordionContent
                  imgSrc="/assets/product-image-1.webp"
                  description="Gather information on international trade in a visually
                  appealing way. Learn about the market trends easily and get
                  all the essential information on the import and export of a
                  country in the form of interactive graphics"
                />
              </AccordionItem>
              <AccordionItem
                header={<ChildAccordionHeader title="VIEW PROFILE" />}
              >
                <ChildAccordionContent
                  imgSrc="/assets/product-image-1.webp"
                  description="Gather information on international trade in a visually
                  appealing way. Learn about the market trends easily and get
                  all the essential information on the import and export of a
                  country in the form of interactive graphics"
                />
              </AccordionItem>
              <AccordionItem
                header={<ChildAccordionHeader title="QUICK VIEW" />}
              >
                <ChildAccordionContent
                  imgSrc="/assets/product-image-1.webp"
                  description="Gather information on international trade in a visually
                  appealing way. Learn about the market trends easily and get
                  all the essential information on the import and export of a
                  country in the form of interactive graphics"
                />
              </AccordionItem>
            </Accordion>
          </AccordionItem>
          <AccordionItem
            header={<ParentAccordionHeader title="DATA" />}
            className="products-section__accordion-item"
          >
            <h3 className="products-section__details-title mt-5">
              Technological advancements provide a competitive edge
            </h3>
            <Accordion>
              <AccordionItem
                header={<ChildAccordionHeader title="VISUALISE VIEW" />}
              >
                <ChildAccordionContent
                  imgSrc="/assets/product-image-1.webp"
                  description="Gather information on international trade in a visually
                  appealing way. Learn about the market trends easily and get
                  all the essential information on the import and export of a
                  country in the form of interactive graphics"
                />
              </AccordionItem>
              <AccordionItem
                header={<ChildAccordionHeader title="VIEW PROFILE" />}
              >
                <ChildAccordionContent
                  imgSrc="/assets/product-image-1.webp"
                  description="Gather information on international trade in a visually
                  appealing way. Learn about the market trends easily and get
                  all the essential information on the import and export of a
                  country in the form of interactive graphics"
                />
              </AccordionItem>
              <AccordionItem
                header={<ChildAccordionHeader title="QUICK VIEW" />}
              >
                <ChildAccordionContent
                  imgSrc="/assets/product-image-1.webp"
                  description="Gather information on international trade in a visually
                  appealing way. Learn about the market trends easily and get
                  all the essential information on the import and export of a
                  country in the form of interactive graphics"
                />
              </AccordionItem>
            </Accordion>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default ProductsSection;
