import React from "react";
import { Database } from "lucide-react";


import AccordionMembership from "./accordion";
import Carts from "./carts";

export default function Membership() {
  return (
    <>
      <section>
        <div className="container">
          <div className="text-center mt-20">
            <div className="flex mx-auto items-center max-w-36 w-full justify-center gap-2 py-2 bg-primary rounded-full ">
              <Database className="w-5 h-5 text-white" />
              <span className="text-sm text-white font-medium">Membership</span>
            </div>
            <h1 className="mt-4 mb-4 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl font-semibold">
              Simple and Transparent
            </h1>
            <p className="2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-xs text-gray-500 text-lg">
              Lorem ipsum dolor sit amet consectetur. Facilisis cursus eros
              accumsan id sagittis sed.
            </p>
          </div>
          <Carts />
        </div>
      </section>
      <section className="pb-[120px]">
        <div className="mt-60">
          <h2 className="text-center 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl xs:text-3xl font-semibold text-customBlack mb-4">
            Lorem ipsum dolor sit amet
          </h2>
          <h4 className="m-auto w-full max-w-text text-gray-400 text-lg text-center">
            Lorem ipsum dolor sit amet consectetur. Turpis purus eu vitae in
            feugiat hendrerit lobortis aenean. Arcu neque fames hac quam vitae
            eros vel ornare. Id odio id mi eu cursus sit lobortis nulla. Sit
            ullamcorper.
          </h4>
        </div>
        <div className="mt-20">
          <AccordionMembership />
        </div>
      </section>
    </>
  );
}
