// import React, { useRef, useEffect, useState } from "react";

// import Image4 from "../assets/Picture1.png";
// import Image5 from "../assets/Picture2.png";
// import Image6 from "../assets/Picture3.png";
// import Image7 from "../assets/Picture4.png";
// import Image8 from "../assets/Picture5.png";
// import Image9 from "../assets/Picture6.png";

// const cards = [
//   { title: "Bil", description: "Lägg till dina bilar och få full insyn i status, kostnader och lönsamhet – följ besiktningar, tillgänglighet och jämför vinster mellan biltyper och perioder.", image: Image4 },
//   { title: "Anställda", description: "Administrera alla förare enkelt med full kontroll över lönearter, bilkopplingar, arbetspass och kontaktuppgifter – samt ladda ner lönespecifikationer för valfri period, samlat och strukturerat i ett system.", image: Image5 },
//   { title: "Anställdas Rapporter ", description: "Lägg till dina intäkter och låt systemet automatiskt skapa rapporter, löner och lönespecifikation. Alla siffror förs över till fordonsrapporten och kan sökas fram, laddas ner och sparas i systemet .", image: Image6 },
//   { title: "Anställdas Rapporter", description: "Följ varje fordons kostnader, intäkter, vinst och marginaler i realtid – siffrorna hämtas automatiskt från anställdas rapporter eller kan läggas in manuellt. Rapporter kan laddas ner för revisorn och sparas i systemet .", image: Image7 },
//   { title: "Arbetsgivarintyg", description: "Följ varje fordons kostnader, intäkter, vinst och marginaler i realtid – siffrorna hämtas automatiskt från anställdas rapporter eller kan läggas in manuellt. Rapporter kan laddas ner för revisorn och sparas i systemet .", image: Image8 },
//   { title: "Annonsplattform", description: "Annonsera efter förare för fasta eller tidsbegränsade uppdrag – och hitta förare som aktivt söker jobb. Du kan även lägga upp fordon till försäljning.", image: Image9 },
// ];

// const ServiceCards = () => {
//   const scrollRef = useRef(null);
//   const [activeCard, setActiveCard] = useState(null);
//   const [imageOpen, setImageOpen] = useState(false);
//   const slideIntervalRef = useRef(null);
//   const isHoveredRef = useRef(false);

//   const extendedCards = [...cards, ...cards]; // duplicate for seamless looping

//   // Auto sliding
//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     const cardWidth = 320 + 24; // base card width + gap
//     let scrollAmount = 0;

//     const startSliding = () => {
//       slideIntervalRef.current = setInterval(() => {
//         if (!isHoveredRef.current && activeCard === null && !imageOpen) {
//           scrollAmount += cardWidth;

//           scrollContainer.scrollTo({
//             left: scrollAmount,
//             behavior: "smooth",
//           });

//           // seamless reset
//           if (scrollAmount >= scrollContainer.scrollWidth / 2) {
//             scrollAmount = 0;
//             scrollContainer.scrollTo({ left: 0, behavior: "auto" });
//           }
//         }
//       }, 3000);
//     };

//     startSliding();
//     return () => clearInterval(slideIntervalRef.current);
//   }, [activeCard, imageOpen]);

//   // Close zoom/fullscreen on outside click
//   useEffect(() => {
//     const handleClickOutside = () => {
//       if (imageOpen) setImageOpen(false);
//       else if (activeCard !== null) setActiveCard(null);
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, [activeCard, imageOpen]);

//   const handleCardClick = (index) => {
//     const scrollContainer = scrollRef.current;
//     if (scrollContainer) {
//       const card = scrollContainer.children[index];
//       const containerCenter = scrollContainer.offsetWidth / 2;
//       const cardCenter = card.offsetLeft + card.offsetWidth / 2;
//       scrollContainer.scrollTo({ left: cardCenter - containerCenter, behavior: "smooth" });
//     }
//     setActiveCard(activeCard === index ? null : index);
//   };

//   const handleImageClick = (index) => {
//     if (activeCard !== index) {
//       handleCardClick(index);
//       setTimeout(() => setImageOpen(true), 300);
//     } else {
//       setImageOpen(true);
//     }
//   };

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-20">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-bold text-[#ffc001] mb-4">
//           En modern plattform som förenar hela taxibranschen
//         </h2>
//         <p className="text-gray-600 text-lg">
//           Samlar fordon, förare, rapporter och rekrytering i ett och samma digitala system
//         </p>
//       </div>

//       {/* Slider */}
//       <div
//         ref={scrollRef}
//         onMouseEnter={() => (isHoveredRef.current = true)}
//         onMouseLeave={() => (isHoveredRef.current = false)}
//         className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-12 scrollbar-hide"
//         style={{ paddingLeft: "20px", paddingRight: "20px", scrollbarWidth: "none", msOverflowStyle: "none" }}
//       >
//         {extendedCards.map((card, index) => (
//           <div
//             key={index}
//             onClick={(e) => { e.stopPropagation(); handleCardClick(index); }}
//             className={`flex-shrink-0 w-[80vw] sm:w-[320px] bg-white rounded-xl shadow-lg overflow-hidden snap-start cursor-pointer
//               transform transition-all duration-700 ease-in-out
//               ${activeCard === index
//                 ? "sm:scale-125 sm:z-30 sm:shadow-2xl w-[90vw] mx-auto" // Mobile: full width with margins
//                 : "hover:scale-105 hover:z-10"
//               }`}
//           >
//             <img
//               src={card.image}
//               alt={card.title}
//               className="w-full h-60 sm:h-52 md:h-52 object-cover cursor-pointer transition-transform duration-700 ease-in-out"
//               onClick={(e) => { e.stopPropagation(); handleImageClick(index); }}
//             />
//             <div className="p-4 sm:p-6 text-center">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
//               <p className="text-gray-600 text-sm">{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Fullscreen image */}
//       {imageOpen && activeCard !== null && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none">
//           <img
//             src={cards[activeCard % cards.length].image}
//             alt={cards[activeCard % cards.length].title}
//             className="max-h-[90%] max-w-[90%] object-contain pointer-events-auto transition-transform duration-500 scale-105 cursor-pointer"
//           />
//         </div>
//       )}

//       <style>
//         {`
//           .scrollbar-hide::-webkit-scrollbar { display: none; }
//         `}
//       </style>
//     </section>
//   );
// };

// export default ServiceCards;

// import React, { useRef, useEffect, useState } from "react";

// import Image4 from "../assets/Picture1.png";
// import Image5 from "../assets/Picture2.png";
// import Image6 from "../assets/Picture3.png";
// import Image7 from "../assets/Picture4.png";
// import Image8 from "../assets/Picture5.png";
// import Image9 from "../assets/Picture6.png";

// const cards = [
//   { title: "Bil", description: "Lägg till dina bilar och få full insyn i status, kostnader och lönsamhet – följ besiktningar, tillgänglighet och jämför vinster mellan biltyper och perioder.", image: Image4 },
//   { title: "Anställda", description: "Administrera alla förare enkelt med full kontroll över lönearter, bilkopplingar, arbetspass och kontaktuppgifter – samt ladda ner lönespecifikationer för valfri period, samlat och strukturerat i ett system.", image: Image5 },
//   { title: "Anställdas Rapporter", description: "Lägg till dina intäkter och låt systemet automatiskt skapa rapporter, löner och lönespecifikation. Alla siffror förs över till fordonsrapporten och kan sökas fram, laddas ner och sparas i systemet.", image: Image6 },
//   { title: "Anställdas Rapporter", description: "Följ varje fordons kostnader, intäkter, vinst och marginaler i realtid – siffrorna hämtas automatiskt från anställdas rapporter eller kan läggas in manuellt. Rapporter kan laddas ner för revisorn och sparas i systemet.", image: Image7 },
//   { title: "Arbetsgivarintyg", description: "Följ varje fordons kostnader, intäkter, vinst och marginaler i realtid – siffrorna hämtas automatiskt från anställdas rapporter eller kan läggas in manuellt. Rapporter kan laddas ner för revisorn och sparas i systemet.", image: Image8 },
//   { title: "Annonsplattform", description: "Annonsera efter förare för fasta eller tidsbegränsade uppdrag – och hitta förare som aktivt söker jobb. Du kan även lägga upp fordon till försäljning.", image: Image9 },
// ];

// const ServiceCards = () => {
//   const scrollRef = useRef(null);
//   const [activeCard, setActiveCard] = useState(null);
//   const [imageOpen, setImageOpen] = useState(false);
//   const slideIntervalRef = useRef(null);
//   const isHoveredRef = useRef(false);

//   const extendedCards = [...cards, ...cards]; // duplicate for seamless looping
//   const scrollAmountRef = useRef(0); // store current scroll position

//   // Auto sliding
//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     const cardWidth = 340 + 24; // card width + gap

//     const startSliding = () => {
//       slideIntervalRef.current = setInterval(() => {
//         if (!isHoveredRef.current && activeCard === null && !imageOpen) {
//           scrollAmountRef.current += cardWidth;

//           scrollContainer.scrollTo({
//             left: scrollAmountRef.current,
//             behavior: "smooth",
//           });

//           // seamless reset
//           if (scrollAmountRef.current >= scrollContainer.scrollWidth / 2) {
//             scrollAmountRef.current = 0;
//             scrollContainer.scrollTo({ left: 0, behavior: "auto" });
//           }
//         }
//       }, 3000);
//     };

//     startSliding();
//     return () => clearInterval(slideIntervalRef.current);
//   }, [activeCard, imageOpen]);

//   // Close zoom/fullscreen on outside click
//   useEffect(() => {
//     const handleClickOutside = () => {
//       if (imageOpen) setImageOpen(false);
//       else if (activeCard !== null) setActiveCard(null);
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, [activeCard, imageOpen]);

//   const handleCardClick = (index) => {
//     const scrollContainer = scrollRef.current;
//     if (scrollContainer) {
//       const card = scrollContainer.children[index];
//       const containerCenter = scrollContainer.offsetWidth / 2;
//       const cardCenter = card.offsetLeft + card.offsetWidth / 2;
//       scrollContainer.scrollTo({ left: cardCenter - containerCenter, behavior: "smooth" });

//       // Update scrollAmountRef so sliding resumes from this card
//       scrollAmountRef.current = cardCenter - containerCenter;
//     }
//     setActiveCard(activeCard === index ? null : index);
//   };

//   const handleImageClick = (index) => {
//     if (activeCard !== index) {
//       handleCardClick(index);
//       setTimeout(() => setImageOpen(true), 300);
//     } else {
//       setImageOpen(true);
//     }
//   };

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-20">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-bold text-[#ffc001] mb-4">
//           En modern plattform som förenar hela taxibranschen
//         </h2>
//         <p className="text-gray-600 text-lg">
//           Samlar fordon, förare, rapporter och rekrytering i ett och samma digitala system
//         </p>
//       </div>

//       {/* Slider */}
//       <div
//         ref={scrollRef}
//         onMouseEnter={() => (isHoveredRef.current = true)}
//         onMouseLeave={() => (isHoveredRef.current = false)}
//         className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-12 scrollbar-hide"
//         style={{ paddingLeft: "30px", paddingRight: "30px", scrollbarWidth: "none", msOverflowStyle: "none" }}
//       >
//         {extendedCards.map((card, index) => (
//           <div
//             key={index}
//             onClick={(e) => { e.stopPropagation(); handleCardClick(index); }}
//             className={`flex-shrink-0 w-[85vw] sm:w-[340px] bg-white rounded-xl shadow-lg overflow-hidden snap-start cursor-pointer
//               transform transition-all duration-700 ease-in-out
//               ${activeCard === index
//                 ? "sm:scale-125 sm:z-30 sm:shadow-2xl w-[90vw] mx-auto"
//                 : "hover:scale-105 hover:z-10"
//               }`}
//           >
//             <img
//               src={card.image}
//               alt={card.title}
//               className="w-full h-60 sm:h-56 object-cover cursor-pointer transition-transform duration-700 ease-in-out"
//               onClick={(e) => { e.stopPropagation(); handleImageClick(index); }}
//             />
//             <div className="p-5 sm:p-6 text-center">
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Fullscreen image */}
//       {imageOpen && activeCard !== null && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none">
//           <img
//             src={cards[activeCard % cards.length].image}
//             alt={cards[activeCard % cards.length].title}
//             className="max-h-[90%] max-w-[90%] object-contain pointer-events-auto transition-transform duration-500 scale-105 cursor-pointer"
//           />
//         </div>
//       )}

//       <style>
//         {`
//           .scrollbar-hide::-webkit-scrollbar { display: none; }
//         `}
//       </style>
//     </section>
//   );
// };

// export default ServiceCards;


import React, { useRef, useEffect, useState } from "react";

import Image4 from "../assets/Picture1.png";
import Image5 from "../assets/Picture2.png";
import Image6 from "../assets/Picture3.png";
import Image7 from "../assets/Picture4.png";
import Image8 from "../assets/Picture5.png";
import Image9 from "../assets/Picture6.png";

const cards = [
  { title: "Bil", description: "Lägg till dina bilar och få full insyn i status, kostnader och lönsamhet – följ besiktningar, tillgänglighet och jämför vinster mellan biltyper och perioder.", image: Image4 },
  { title: "Anställda", description: "Administrera alla förare enkelt med full kontroll över lönearter, bilkopplingar, arbetspass och kontaktuppgifter – samt ladda ner lönespecifikationer för valfri period, samlat och strukturerat i ett system.", image: Image5 },
  { title: "Anställdas Rapporter", description: "Lägg till dina intäkter och låt systemet automatiskt skapa rapporter, löner och lönespecifikation. Alla siffror förs över till fordonsrapporten och kan sökas fram, laddas ner och sparas i systemet.", image: Image6 },
  { title: "Anställdas Rapporter", description: "Följ varje fordons kostnader, intäkter, vinst och marginaler i realtid – siffrorna hämtas automatiskt från anställdas rapporter eller kan läggas in manuellt. Rapporter kan laddas ner för revisorn och sparas i systemet.", image: Image7 },
  { title: "Arbetsgivarintyg", description: "Följ varje fordons kostnader, intäkter, vinst och marginaler i realtid – siffrorna hämtas automatiskt från anställdas rapporter eller kan läggas in manuellt. Rapporter kan laddas ner för revisorn och sparas i systemet.", image: Image8 },
  { title: "Annonsplattform", description: "Annonsera efter förare för fasta eller tidsbegränsade uppdrag – och hitta förare som aktivt söker jobb. Du kan även lägga upp fordon till försäljning.", image: Image9 },
];

const ServiceCards = () => {
  const scrollRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [imageOpen, setImageOpen] = useState(false);
  const slideIntervalRef = useRef(null);
  const isHoveredRef = useRef(false);

  const extendedCards = [...cards, ...cards]; // duplicate for seamless looping
  let scrollAmountRef = useRef(0); // store current scroll position

  // Auto sliding
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = 360 + 24; // card width + gap

    const startSliding = () => {
      slideIntervalRef.current = setInterval(() => {
        if (!isHoveredRef.current && activeCard === null && !imageOpen) {
          scrollAmountRef.current += cardWidth;

          scrollContainer.scrollTo({
            left: scrollAmountRef.current,
            behavior: "smooth",
          });

          // seamless reset
          if (scrollAmountRef.current >= scrollContainer.scrollWidth / 2) {
            scrollAmountRef.current = 0;
            scrollContainer.scrollTo({ left: 0, behavior: "auto" });
          }
        }
      }, 3000);
    };

    startSliding();
    return () => clearInterval(slideIntervalRef.current);
  }, [activeCard, imageOpen]);

  // Close zoom/fullscreen on outside click
  useEffect(() => {
    const handleClickOutside = () => {
      if (imageOpen) setImageOpen(false);
      else if (activeCard !== null) setActiveCard(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeCard, imageOpen]);

  const handleCardClick = (index) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const card = scrollContainer.children[index];
      const containerCenter = scrollContainer.offsetWidth / 2;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      scrollContainer.scrollTo({ left: cardCenter - containerCenter, behavior: "smooth" });

      // Update scrollAmountRef so sliding resumes from this card
      scrollAmountRef.current = cardCenter - containerCenter;
    }
    setActiveCard(activeCard === index ? null : index);
  };

  const handleImageClick = (index) => {
    if (activeCard !== index) {
      handleCardClick(index);
      setTimeout(() => setImageOpen(true), 300);
    } else {
      setImageOpen(true);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#ffc001] mb-4">
          En modern plattform som förenar hela taxibranschen
        </h2>
        <p className="text-gray-600 text-lg">
          Samlar fordon, förare, rapporter och rekrytering i ett och samma digitala system
        </p>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        onMouseEnter={() => (isHoveredRef.current = true)}
        onMouseLeave={() => (isHoveredRef.current = false)}
        className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-12 scrollbar-hide"
        style={{ paddingLeft: "30px", paddingRight: "30px", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {extendedCards.map((card, index) => (
          <div
            key={index}
            onClick={(e) => { e.stopPropagation(); handleCardClick(index); }}
            className={`flex-shrink-0 w-[85vw] sm:w-[360px] bg-white rounded-xl shadow-lg overflow-hidden snap-start cursor-pointer
              transform transition-all duration-700 ease-in-out
              ${activeCard === index
                ? "sm:scale-125 sm:z-30 sm:shadow-2xl w-[90vw] mx-auto"
                : "hover:scale-105 hover:z-10"
              }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-60 sm:h-56 object-cover cursor-pointer transition-transform duration-700 ease-in-out"
              onClick={(e) => { e.stopPropagation(); handleImageClick(index); }}
            />
            <div className="p-5 sm:p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen image */}
      {imageOpen && activeCard !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none">
          <img
            src={cards[activeCard % cards.length].image}
            alt={cards[activeCard % cards.length].title}
            className="max-h-[90%] max-w-[90%] object-contain pointer-events-auto transition-transform duration-500 scale-105 cursor-pointer"
          />
        </div>
      )}

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
        `}
      </style>
    </section>
  );
};

export default ServiceCards;
