import React, { useState } from "react";

const PricingSection = ({ scrollToRegister }) => {
const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "TaxiPro S",
      price: "0 / Månad",
      description: "För enskilda förare och mindre åkerier",
      features: [
        "Upp till 1 bil",
        "Upp till 2 anställda"

      ],
    },
    {
      name: "TaxiPro M",
      price: "499 / Månad",
      description: "För åkerier som växer och behöver mer kapacitet",
      features: [
        "Upp till 5 bilar",
        "Upp till 8 anställda"
        
      ],
    },
    {
      name: "TaxiPro L",
      price: "999 / Månad",
      description: "För större flottor med höga krav",
      features: [
        "Upp till 10 bilar",
        "Upp till 15 anställda"

      ],
    },
    {
      name: "Obegränsad",
      price: "1499 / Månad",
      description: "För total frihet och obegränsad kapacitet",
      features: [
        "Obegränsat antal bilar",
        "Obegränsat antal anställda"
        
      ],
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#ffc001]">
          Välj ditt TaxiPro-paket
        </h2>
        <p className="text-gray-500 mt-4 text-base sm:text-lg">
          Anpassa TaxiPro efter ditt åkeris behov
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, idx) => {
          const isSelected = selectedPlan === idx;

          return (
            <div
              key={idx}
              onClick={() => setSelectedPlan(idx)}
              className={`
                flex flex-col justify-between
                h-full
                rounded-2xl shadow-md p-6 sm:p-8 border bg-white cursor-pointer
                transition-all duration-300 transform
                ${isSelected ? "border-[#ffc001] scale-95" : "border-gray-200"}
                hover:border-[#ffc001] hover:scale-105
              `}
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{plan.name}</h3>
                <p className="text-2xl sm:text-3xl font-bold mt-3 text-gray-900">
                  {plan.price}
                </p>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  {plan.description}
                </p>
                <ul className="mt-5 space-y-2 text-left text-sm sm:text-base">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-700 flex items-start">
                      <span className="text-[#ffc001] mr-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToRegister();
                }}
                className={`mt-8 py-2 w-full rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base ${
                  isSelected
                    ? "bg-[#ffc001] text-white"
                    : "bg-[#fff4d4] text-[#ffc001] hover:bg-[#ffe185]"
                }`}
              >
                Register Now
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingSection;
