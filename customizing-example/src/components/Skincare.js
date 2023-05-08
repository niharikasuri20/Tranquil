import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
const features = [
  {
    name: "Cleanse your face: ",
    description:
      "Start by washing your face with a gentle cleanser to remove any makeup, dirt, or oil.",
    icon: ArrowRightCircleIcon,
  },
  {
    name: "Wait a few hours: ",
    description:
      "After cleansing, avoid applying any skincare products and wait for a few hours. This will give your skin time to return to its natural state.",
    icon: ArrowRightCircleIcon,
  },
  {
    name: `Check your skin's oiliness: `,
    description: `After a few hours, examine your skin for oiliness. Look for shiny or greasy areas on your forehead, nose, and chin (also known as the T-zone). If your skin is oily in these areas, you likely have oily skin. If your skin is dry and tight, you likely have dry skin. If you have both oily and dry areas, you may have combination skin. If your skin feels balanced and comfortable, you likely have normal skin.`,
    icon: ArrowRightCircleIcon,
  },
];
const skincareData = [
  {
    type: "Normal Skin",
    step1: "1.) Cleanser",
    step2: "2.) Toner",
    step3: "3.) Serum",
    step4: "4.) Moisturizer",
    step5: "5.) Sunscreen",
  },
  {
    type: "Dry Skin",
    step1: "1.) Gentle Cleanser",
    step2: "2.) Hydrating Toner",
    step3: "3.) Facial Oil",
    step4: "4.) Moisturizer",
    step5: "5.) Sunscreen",
  },
  {
    type: "Oily Skin",
    step1: "1.) Oil-Free Cleanser",
    step2: "2.) Exfoliating Toner",
    step3: "3.) Lightweight Serum",
    step4: "4.) Gel Moisturizer",
    step5: "5.) Sunscreen",
  },
  {
    type: "Combination Skin",
    step1: "1.) Gentle Cleanser",
    step2: "2.) Balancing Toner",
    step3: "3.) Lightweight Serum",
    step4: "4.) Moisturizer",
    step5: "5.) Sunscreen",
  },
];
const SkincareDropdown = () => {
  const [selectedType, setSelectedType] = useState("Normal Skin");

  const handleSelect = (event) => {
    setSelectedType(event.target.value);
  };
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <img
            src="/skin.png"
            className="w-full "
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <br></br>
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-cyan-400">
          SKIN-CARE
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-red-400 sm:text-4xl">
          Let's build a routine for you now!
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Skincare and self-care are deeply intertwined. Taking care of our skin
          not only improves its appearance, but it also has a positive impact on
          our overall well-being. By taking the time to care for our skin
          through regular routines like cleansing, moisturizing, and using sun
          protection, we are also engaging in a form of self-care that
          prioritizes our physical health and mental wellness.
        </p>
      </div>
      <br />
      <br />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-cyan-400">
                Skin Types
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-red-400 sm:text-4xl">
                Know your skin type:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-cyan-400"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/skin3.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
      <br />
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-red-400 sm:text-4xl">
          Please select your skin type:
        </p>
        <br />
        <div>
          <select
            id="skinType"
            onChange={handleSelect}
            value={selectedType}
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {skincareData.map((data, index) => (
              <option key={index} value={data.type}>
                {data.type}
              </option>
            ))}
          </select>
          <br />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-red-400 sm:text-4xl">
            Your Skincare Routine:
          </h2>
          <p></p>
        </div>
      </div>
      <ul className="steps steps-vertical">
        <li className="step step-primary">
          {skincareData.find((data) => data.type === selectedType).step1}
        </li>
        <li className="step step-primary">
          {skincareData.find((data) => data.type === selectedType).step2}
        </li>
        <li className="step">
          {skincareData.find((data) => data.type === selectedType).step3}
        </li>
        <li className="step">
          {skincareData.find((data) => data.type === selectedType).step4}
        </li>
        <li className="step">
          {skincareData.find((data) => data.type === selectedType).step5}
        </li>
      </ul>
    </div>
  );
};
export default SkincareDropdown;
