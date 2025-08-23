// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "../assets/services.png";

// const Services = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to top on mount
//     setVisible(true);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-[#fdfdfb] text-gray-800">
//       <Navbar />

//       <main
//         className={`flex-grow transition-opacity duration-1000 ease-in-out ${
//           visible ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <div className="w-full px-4 sm:px-10 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
//           {/* Text Section */}
//           <motion.div
//             className="flex-1"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {/* Title */}
//             <h1 className="text-5xl font-extrabold text-[#ffc001] mb-12 tracking-wide mt-16 text-left">
//               Våra tjänster
//               <span className="block h-1 w-24 bg-[#ffc001] rounded-full mt-4"></span>
//             </h1>

//             {/* Subtitle */}
//             <h2 className="text-2xl font-medium text-gray-700 mb-10">
//               Vi effektiviserar din taxiverksamhet
//             </h2>

//             {/* Section: Åkarie-webbapp */}
//             <section className="mb-12">
//               <h2 className="text-3xl font-semibold text-[#ffc001] mb-6">
//                 Åkarie-webbapp
//               </h2>
//               <ul className="space-y-4">
//                 {[
//                   "Hantera fordonsflottan med fordonsstatus, underhållskontroller och kostnadsuppföljning",
//                   "Automatiska påminnelser om viktiga datum och uppgifter via e-post",
//                   "Personal- och dokumenthantering, inklusive lönespecifikationer",
//                   "Ekonomiska rapporter med automatiska beräkningar av vinster och marginaler",
//                   "Branschspecifik annonsplattform för att publicera och hantera annonser",
//                   "Chatt- och e-postfunktion för snabb kommunikation med förare",
//                 ].map((item, index) => (
//                   <li
//                     key={index}
//                     className="flex items-start gap-3 text-gray-700 text-lg leading-relaxed"
//                   >
//                     {/* Custom white dot */}
//                     <span className="mt-2 w-3 h-3 rounded-full bg-white border border-gray-400 flex-shrink-0"></span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </section>

//             {/* Section: Förarappen */}
//             <section>
//               <h2 className="text-3xl font-semibold text-[#ffc001] mb-6">
//                 Förarappen
//               </h2>
//               <ul className="space-y-4">
//                 {[
//                   "Skapa och skicka körpassrapporter direkt till åkeri",
//                   "Ta emot rapporter från åkeri, information och lönespecifikationer",
//                   "Annonsera jobb och hitta åkerier direkt via appen",
//                   "Chatta med förare i hela Sverige eller per län",
//                 ].map((item, index) => (
//                   <li
//                     key={index}
//                     className="flex items-start gap-3 text-gray-700 text-lg leading-relaxed"
//                   >
//                     {/* Custom white dot */}
//                     <span className="mt-2 w-3 h-3 rounded-full bg-white border border-gray-400 flex-shrink-0"></span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </section>
//           </motion.div>

//           {/* Image Section */}
//           <motion.div
//             className="flex-1 flex justify-center items-center"
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <img
//               src={Image}
//               alt="Taxi Services"
//               className="w-full max-w-md rounded-xl shadow-lg object-cover"
//             />
//           </motion.div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Services;



import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../assets/services.png"; // ✅ use transparent image

const Services = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
    setVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfdfb] text-gray-800">
      <Navbar />

      <main
        className={`flex-grow transition-opacity duration-1000 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full px-4 sm:px-10 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <h1 className="text-5xl font-extrabold text-[#ffc001] mb-12 tracking-wide mt-16 text-left">
              Våra tjänster
              <span className="block h-1 w-24 bg-[#ffc001] rounded-full mt-4"></span>
            </h1>

            {/* Subtitle
            <h2 className="text-2xl font-medium text-[#ffc001] mb-10">
              Vi effektiviserar din taxiverksamhet
            </h2> */}

            {/* Section: Åkarie-webbapp */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-[#ffc001] mb-6">
                Åkarie-webbapp
              </h2>
              <ul className="space-y-4">
                {[
                  "Hantera fordonsflottan med fordonsstatus, underhållskontroller och kostnadsuppföljning",
                  "Automatiska påminnelser om viktiga datum och uppgifter via e-post",
                  "Personal- och dokumenthantering, inklusive lönespecifikationer",
                  "Ekonomiska rapporter med automatiska beräkningar av vinster och marginaler",
                  "Branschspecifik annonsplattform för att publicera och hantera annonser",
                  "Chatt- och e-postfunktion för snabb kommunikation med förare",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-lg leading-relaxed"
                  >
                    <span className="mt-2 w-3 h-3 rounded-full bg-white border border-gray-400 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section: Förarappen */}
            <section>
              <h2 className="text-3xl font-semibold text-[#ffc001] mb-6">
                Förarappen
              </h2>
              <ul className="space-y-4">
                {[
                  "Skapa och skicka körpassrapporter direkt till åkeri",
                  "Ta emot rapporter från åkeri, information och lönespecifikationer",
                  "Annonsera jobb och hitta åkerier direkt via appen",
                  "Chatta med förare i hela Sverige eller per län",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-lg leading-relaxed"
                  >
                    <span className="mt-2 w-3 h-3 rounded-full bg-white border border-gray-400 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={Image}
              alt="Taxi Services"
              className="w-full max-w-md object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
