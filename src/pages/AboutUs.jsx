// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "../assets/aboutus.png";

// const AboutUs = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);
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
//             <h1
//               className="text-5xl font-extrabold mb-12 tracking-wide mt-10 text-left"
//               style={{ color: "#ffc001" }}
//             >
//               Om oss
//               <span
//                 className="block h-1 w-24 rounded-full mt-4"
//                 style={{ backgroundColor: "#ffc001" }}
//               ></span>
//             </h1>

//             {/* Section 1 */}
//             <section className="mb-12">
//               <h2
//                 className="text-3xl font-semibold mb-6"
//                 style={{ color: "#ffc001" }}
//               >
//                 En komplett digital plattform för taxibolag i Sverige
//               </h2>
//               <p className="text-gray-700 text-lg leading-relaxed mb-6">
//                 TaxiPro är utvecklad för att ge taxibolag full kontroll över hela
//                 verksamheten – från fordon och förare till ekonomi och rekrytering.
//                 Plattformen är framtagen av erfarna åkare, revisorer och juridiska
//                 experter, vilket säkerställer att den uppfyller branschens höga krav
//                 på funktion, användbarhet och regelefterlevnad.
//               </p>
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 Vår webbapplikation förenklar den dagliga driften genom att samla
//                 allt i ett intuitivt och användarvänligt system.
//               </p>
//             </section>

//             {/* Section 2 */}
//             <section>
//               <h2
//                 className="text-3xl font-semibold mb-6"
//                 style={{ color: "#ffc001" }}
//               >
//                 Med TaxiPro kan du
//               </h2>
//               <ul className="space-y-4">
//                 {[
//                   "Administrera fordonsflottan med full översikt över besiktningar och tillgänglighet",
//                   "Hantera förare med koppling till lönearter, bilar och arbetspass",
//                   "Skapa detaljerade rapporter för vinst, marginal och löneunderlag",
//                   "Generera arbetsgivarintyg direkt från systemet",
//                   "Publicera och hantera riktade annonser via vår branschspecifika annonsplattform",
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

//               <p className="text-gray-700 text-lg leading-relaxed mt-6">
//                 Oavsett om du driver ett mindre taxibolag eller en större
//                 verksamhet, ger TaxiPro dig verktygen för att arbeta smartare,
//                 effektivare och mer datadrivet.
//               </p>
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
//               alt="Taxi Management"
//               className="w-full max-w-md rounded-xl shadow-lg object-cover"
//             />
//           </motion.div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default AboutUs;


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../assets/aboutus.png"; // ✅ transparent version

const AboutUs = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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
            <h1
              className="text-5xl font-extrabold mb-12 tracking-wide mt-10 text-left"
              style={{ color: "#ffc001" }}
            >
              Om oss
              <span
                className="block h-1 w-24 rounded-full mt-4"
                style={{ backgroundColor: "#ffc001" }}
              ></span>
            </h1>

            {/* Section 1 */}
            <section className="mb-12">
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "#ffc001" }}
              >
                En komplett digital plattform för taxibolag i Sverige
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                TaxiPro är utvecklad för att ge taxibolag full kontroll över hela
                verksamheten – från fordon och förare till ekonomi och rekrytering.
                Plattformen är framtagen av erfarna åkare, revisorer och juridiska
                experter, vilket säkerställer att den uppfyller branschens höga krav
                på funktion, användbarhet och regelefterlevnad.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Vår webbapplikation förenklar den dagliga driften genom att samla
                allt i ett intuitivt och användarvänligt system.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "#ffc001" }}
              >
                Med TaxiPro kan du
              </h2>
              <ul className="space-y-4">
                {[
                  "Administrera fordonsflottan med full översikt över besiktningar och tillgänglighet",
                  "Hantera förare med koppling till lönearter, bilar och arbetspass",
                  "Skapa detaljerade rapporter för vinst, marginal och löneunderlag",
                  "Generera arbetsgivarintyg direkt från systemet",
                  "Publicera och hantera riktade annonser via vår branschspecifika annonsplattform",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-lg leading-relaxed"
                  >
                    {/* Custom white dot */}
                    <span className="mt-2 w-3 h-3 rounded-full bg-white border border-gray-400 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Oavsett om du driver ett mindre taxibolag eller en större
                verksamhet, ger TaxiPro dig verktygen för att arbeta smartare,
                effektivare och mer datadrivet.
              </p>
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
              alt="Taxi Management"
              className="w-full max-w-md object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
