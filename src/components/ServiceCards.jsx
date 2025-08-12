import React, { useState } from "react";
import { motion } from "framer-motion";

// Import your images from the assets folder
import Image4 from "../assets/Image4.png";
import Image5 from "../assets/Image3.png";
import Image6 from "../assets/Image6.png";

// Card data with imported images
const cards = [
  {
    title: "Driver App",
    description:
      "Track your drivers in real-time, manage trip requests, and ensure efficient communication between dispatch and drivers.",
    image: Image5,
  },
  {
    title: "Admin Dashboard",
    description:
      "Control every aspect of your taxi business — from fleet operations to performance insights — in one place.",
    image: Image4,
  },
  {
    title: "Customer Booking App",
    description:
      "Let passengers book rides, track drivers, and pay online with ease. A smooth and reliable user experience guaranteed.",
    image: Image6,
  },
];

const ServiceCards = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <section className="py-20 bg-white px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          A System Designed for Every User
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Our taxi system includes everything your business needs to operate smoothly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              onClick={() => setClickedIndex(index)}
              animate={{
                scale: clickedIndex === index ? 0.95 : 1,
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;




// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import Image4 from "../assets/1.png";
// import Image5 from "../assets/2.png";
// import Image6 from "../assets/2.png";

// const cards = [
//   {
//     title: "Driver App",
//     description:
//       "Track your drivers in real-time, manage trip requests, and ensure efficient communication between dispatch and drivers.",
//     image: Image5,
//   },
//   {
//     title: "Admin Dashboard",
//     description:
//       "Control every aspect of your taxi business — from fleet operations to performance insights — in one place.",
//     image: Image4,
//   },
//   {
//     title: "Customer Booking App",
//     description:
//       "Let passengers book rides, track drivers, and pay online with ease. A smooth and reliable user experience guaranteed.",
//     image: Image6,
//   },
// ];

// const slideDuration = 4000; // 4 seconds

// const ServiceCards = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     timeoutRef.current = setTimeout(() => {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 1) % cards.length);
//     }, slideDuration);

//     return () => clearTimeout(timeoutRef.current);
//   }, [currentIndex]);

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       position: "relative",
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? "100%" : "-100%",
//       opacity: 0,
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//     }),
//   };

//   return (
//     <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
//       <div className="text-center max-w-4xl mx-auto mb-10 px-4 sm:px-6 lg:px-0">
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
//           A System Designed for Every User
//         </h2>
//         <p className="text-gray-600 text-base sm:text-lg">
//           Our taxi system includes everything your business needs to operate smoothly.
//         </p>
//       </div>

//       <div
//         className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg"
//         style={{ aspectRatio: "16 / 9", maxHeight: "450px" }}
//       >
//         <AnimatePresence custom={direction} mode="wait">
//           <motion.img
//             key={cards[currentIndex].image}
//             src={cards[currentIndex].image}
//             alt={cards[currentIndex].title}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ type: "tween", duration: 0.8 }}
//             className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
//           />
//         </AnimatePresence>
//       </div>

//       <div className="max-w-4xl mx-auto mt-8 text-center px-4 sm:px-6 lg:px-0">
//         <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
//           {cards[currentIndex].title}
//         </h3>
//         <p className="text-gray-600 text-sm sm:text-base">{cards[currentIndex].description}</p>
//       </div>
//     </section>
//   );
// };

// export default ServiceCards;


// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import Image4 from "../assets/1.png";
// import Image5 from "../assets/2.png";
// import Image6 from "../assets/2.png";

// const cards = [
//   {
//     title: "Driver App",
//     description:
//       "Track your drivers in real-time, manage trip requests, and ensure efficient communication between dispatch and drivers.",
//     image: Image5,
//   },
//   {
//     title: "Admin Dashboard",
//     description:
//       "Control every aspect of your taxi business — from fleet operations to performance insights — in one place.",
//     image: Image4,
//   },
//   {
//     title: "Customer Booking App",
//     description:
//       "Let passengers book rides, track drivers, and pay online with ease. A smooth and reliable user experience guaranteed.",
//     image: Image6,
//   },
// ];

// const slideDuration = 4000; // 4 seconds

// const ServiceCards = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     timeoutRef.current = setTimeout(() => {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 1) % cards.length);
//     }, slideDuration);

//     return () => clearTimeout(timeoutRef.current);
//   }, [currentIndex]);

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       position: "relative",
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? "100%" : "-100%",
//       opacity: 0,
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//     }),
//   };

//   return (
//     <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
//       <div className="text-center max-w-4xl mx-auto mb-10 px-4 sm:px-6 lg:px-0">
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
//           A System Designed for Every User
//         </h2>
//         <p className="text-gray-600 text-base sm:text-lg">
//           Our taxi system includes everything your business needs to operate smoothly.
//         </p>
//       </div>

//       <div
//         className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg"
//         style={{ aspectRatio: "16 / 9", maxHeight: "450px" }}
//       >
//         <AnimatePresence custom={direction} mode="wait">
//           <motion.img
//             key={cards[currentIndex].image}
//             src={cards[currentIndex].image}
//             alt={cards[currentIndex].title}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ type: "tween", duration: 0.8 }}
//             className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
//           />
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default ServiceCards;

