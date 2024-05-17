import Image from "next/image";
import Button from "./Button";

const ProductsSection = () => {
  return (
    <section className="products">
      <div className="container mx-auto my-16">
        <div className="">
          <h2 className="text-[40px] font-semibold">OUR PRODUCTS</h2>
          <p className="text-[#6D6D6D] my-3 mb-8 leading-[1.8em]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
        </div>
        <div className="flex gap-8">
          <div className="border border-gray-300 p-10 px-8 rounded-2xl flex flex-col gap-5 min-w-[250px]">
            <div className=" text-[14px] font-medium border-b-4 border-b-[var(--color-highlight)] text-[var(--color-highlight)] px-3 py-2">
              PLATFORM
            </div>
            <div className="text-[#747474] text-[14px] font-medium px-3 py-2">
              API
            </div>
            <div className="text-[#747474] text-[14px] font-medium px-3 py-2">
              DATA
            </div>
          </div>
          <div className="border border-gray-300 p-10 px-8 rounded-2xl flex flex-col gap-5">
            <h3 className="text-center text-[25px]">
              Technological advancements provide a competitive edge
            </h3>
            <div className="flex gap-8 mt-10">
              <div>
                <div className="flex gap-4 my-5">
                  <Button className=" border border-[var(--color-highlight)] text-black rounded-xl py-3 h-[45px]">
                    VISUALISE VIEW
                  </Button>
                  <Button className="  text-black rounded-xl py-3 h-[45px]">
                    VIEW PROFILE{" "}
                  </Button>
                  <Button className="  text-black rounded-xl py-3 h-[45px]">
                    QUICK VIEW
                  </Button>
                </div>
                <p className="leading-[1.8em]">
                  Gather information on international trade in a visually
                  appealing way. Learn about the market trends easily and get
                  all the essential information on the import and export of a
                  country in the form of interactive graphics
                </p>
              </div>
              <div className="min-w-[300px]">
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
      </div>
    </section>
  );
};

export default ProductsSection;
