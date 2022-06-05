import React from "react";
import { useState } from "react";
import AccordionLayout from "../../../lib/AccordionLayout/AccordionLayout";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div>
      <h1>About For Desktop</h1>
      <div className="flex flex-col justify-center items-center">
        <AccordionLayout
          title="Dashboard"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          This is Accordion 1 Content
        </AccordionLayout>

        <AccordionLayout
          title="Lead Section"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          This is Accordion 2 Content
        </AccordionLayout>
      </div>
    </div>
  );
};

export default About;
