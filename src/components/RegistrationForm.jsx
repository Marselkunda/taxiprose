// import React, { useState, useRef, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const getInitialForm = () => {
//   const saved = localStorage.getItem("registrationForm");
//   return saved
//     ? JSON.parse(saved)
//     : {
//         firstName: "",
//         surname: "",
//         companyName: "",
//         organizationNumber: "",
//         address: "",
//         postalNumber: "",
//         city: "",
//         tel: "",
//         email: "",
//         membershipType: "",
//         paymentMethod: "Månadsfaktura", // ✅ default value
//         message: "",
//         acceptTerms: false,
//         receiveNews: false,
//       };
// };

// const RegistrationForm = () => {
//   const [form, setForm] = useState(getInitialForm);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");
//   const [termsError, setTermsError] = useState("");
//   const messageRef = useRef(null);

//   // Save form data whenever it changes
//   useEffect(() => {
//     localStorage.setItem("registrationForm", JSON.stringify(form));
//   }, [form]);

//   useEffect(() => {
//     if (messageRef.current) {
//       messageRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }
//   }, [error, submitted]);

//   const isValidText = (value) => /^[a-zA-Z\s'-]*$/.test(value);
//   const isOnlyNumbers = (value) => /^[0-9]*$/.test(value);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (
//       ["firstName", "surname", "companyName", "city"].includes(name) &&
//       !isValidText(value)
//     )
//       return;

//     if (
//       ["organizationNumber", "postalNumber", "tel"].includes(name) &&
//       !isOnlyNumbers(value)
//     )
//       return;

//     setForm({ ...form, [name]: type === "checkbox" ? checked : value });

//     if (name === "acceptTerms" && checked) {
//       setTermsError("");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.acceptTerms) {
//       setTermsError("You must accept the terms to register.");
//       setError("");
//       setSubmitted(false);
//       return;
//     }

//     try {
//       const payload = {
//         ...form,
//         email: form.email.toLowerCase(),
//         acceptTerms: "true",
//       };

//       const apiBaseUrl =
//         import.meta.env.VITE_API_BASE_URL || "https://taxipro-psi.vercel.app";

//       await axios.post(`${apiBaseUrl}/api/register`, payload);

//       setSubmitted(true);
//       setError("");
//       setTermsError("");

//       // Reset form after successful submission
//       setForm(getInitialForm());
//       localStorage.removeItem("registrationForm");
//     } catch (err) {
//       console.error(err);
//       if (err.response?.data?.errors) {
//         setError(err.response.data.errors[0].msg || "Invalid input.");
//       } else if (err.response?.data?.message) {
//         setError(err.response.data.message);
//       } else {
//         setError("Submission failed. Try again.");
//       }
//       setSubmitted(false);
//     }
//   };

//   return (
//     <section className="min-h-screen w-full bg-gradient-to-br from-[#fff5d1] via-white to-[#fff1b8] flex items-center justify-center px-4 sm:px-8 py-12">
//       <style>
//         {`
//           input[type="checkbox"] {
//             position: absolute;
//             opacity: 0;
//             cursor: pointer;
//             height: 0;
//             width: 0;
//           }
//           .custom-checkbox {
//             display: inline-block;
//             width: 20px;
//             height: 20px;
//             background: white;
//             border: 2px solid #d1d5db;
//             border-radius: 4px;
//             position: relative;
//             transition: border-color 0.3s ease, background-color 0.3s ease;
//             flex-shrink: 0;
//           }
//           input[type="checkbox"]:checked + .custom-checkbox {
//             background-color: #ffc001;
//             border-color: #ffc001;
//           }
//           .custom-checkbox svg {
//             position: absolute;
//             top: 2px;
//             left: 3px;
//             width: 14px;
//             height: 14px;
//             stroke: white;
//             stroke-width: 3;
//             stroke-linecap: round;
//             stroke-linejoin: round;
//             opacity: 0;
//             transition: opacity 0.2s ease;
//           }
//           input[type="checkbox"]:checked + .custom-checkbox svg {
//             opacity: 1;
//           }
//           select option[disabled] {
//             color: #9ca3af;
//             font-style: italic;
//           }
//         `}
//       </style>

//       <div
//         className="w-full max-w-[1600px] bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-10 border"
//         style={{ borderColor: "#ffc001" }}
//       >
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold mb-2" style={{ color: "#ffc001" }}>
//             Registrera ditt åkeri
//           </h1>

//           <p className="text-gray-600 text-sm sm:text-base mb-4">
//             Få full tillgång till TaxiPros webbapp för administration av ditt
//             åkeri
//           </p>

//           <p className="text-base sm:text-lg font-medium mb-2 text-blue-400">
//             Testa tjänsten gratis i tre (3) månader.
//           </p>

//           <p className="text-gray-500 text-[11px] sm:text-xs max-w-2xl mx-auto leading-snug">
//             Ingen bindningstid – om skriftlig uppsägning inte sker senast en (1)
//             månad före nästa betalningsperiod, förlängs avtalet automatiskt och
//             Kunden faktureras enligt vald tjänst och betalningsplan.
//           </p>
//         </div>

//         {error && (
//           <p
//             ref={messageRef}
//             className="text-center mb-4 font-medium text-sm text-red-600"
//           >
//             {error}
//           </p>
//         )}

//         {submitted && !error && (
//           <p
//             ref={messageRef}
//             className="text-center mb-4 font-medium text-sm text-green-600"
//           >
//             ✅ Registration successful! Thank you for registering.
//           </p>
//         )}

//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {[
//             ["Förnamn", "firstName"],
//             ["Efternamn", "surname"],
//             ["Företagsnamn", "companyName"],
//             ["Organisationsnummer", "organizationNumber"],
//             ["Adress", "address"],
//             ["Postnummer", "postalNumber"],
//             ["Ort", "city"],
//             ["Telefon", "tel"],
//             ["E-post", "email"],
//           ].map(([label, name]) => (
//             <div key={name} className="flex flex-col">
//               <label className="text-sm font-medium text-gray-700 mb-1">
//                 {label}
//               </label>
//               <input
//                 type={name === "email" ? "email" : "text"}
//                 name={name}
//                 value={form[name]}
//                 onChange={handleChange}
//                 required
//                 placeholder={`Ange ${label.toLowerCase()}`}
//                 className="p-3 text-sm rounded-md border border-gray-300 bg-white focus:ring-2 outline-none appearance-none focus:ring-[#ffc001]"
//                 autoComplete="off"
//                 spellCheck="false"
//               />
//             </div>
//           ))}

//           {/* Paket */}
//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-gray-700 mb-1">
//               Paket
//             </label>
//             <select
//               name="membershipType"
//               value={form.membershipType}
//               onChange={handleChange}
//               required
//               className="p-3 text-sm rounded-md border border-gray-300 bg-white focus:ring-2 outline-none appearance-none focus:ring-[#ffc001]"
//             >
//               <option value="" disabled>
//                 Välj ditt paket
//               </option>
//               <option value="TaxiPro S">TaxiPro S</option>
//               <option value="TaxiPro M">TaxiPro M</option>
//               <option value="TaxiPro L">TaxiPro L</option>
//               <option value="Obegränsad">Obegränsad</option>
//             </select>
//           </div>

//           {/* Betalningsmetod */}
//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-gray-700 mb-1">
//               Betalningsmetod
//             </label>
//             <select
//               name="paymentMethod"
//               value={form.paymentMethod}
//               onChange={handleChange}
//               className="p-3 text-sm rounded-md border border-gray-300 bg-white focus:ring-2 outline-none appearance-none focus:ring-[#ffc001]"
//             >
//               <option value="Månadsfaktura">Månadsfaktura</option>
//               <option value="Kvartalsfaktura (5 % rabatt)">
//                 Kvartalsfaktura (5 % rabatt)
//               </option>
//               <option value="Halvårsfaktura (10% rabatt)">
//                 Halvårsfaktura (10% rabatt)
//               </option>
//             </select>
//           </div>

//           <div className="lg:col-span-3">
//             <label className="text-sm font-medium text-gray-700 mb-1">
//               Meddelande
//             </label>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               rows="4"
//               className="w-full p-3 text-sm rounded-md border border-gray-300 bg-white focus:ring-2 outline-none appearance-none focus:ring-[#ffc001]"
//               placeholder="Skriv ett meddelande..."
//               spellCheck="false"
//             />
//           </div>

//           {/* Terms checkbox */}
//           <div className="lg:col-span-3 flex flex-col gap-1">
//             <label className="inline-flex items-center cursor-pointer select-none text-sm text-gray-800">
//               <input
//                 type="checkbox"
//                 name="acceptTerms"
//                 checked={form.acceptTerms}
//                 onChange={handleChange}
//               />
//               <span className="custom-checkbox ml-2">
//                 <svg viewBox="0 0 24 24" fill="none">
//                   <polyline points="20 6 9 17 4 12" />
//                 </svg>
//               </span>

//               <span className="ml-3">
//                 Jag har tagit del av och godkänner Taxi Pro i Sverige AB:s{" "}
//                 <Link
//                   to="/termsconditions"
//                   className="text-[#ffc001] font-semibold hover:underline"
//                 >
//                   allmänna villkor
//                 </Link>{" "}
//                 och{" "}
//                 <Link
//                   to="/privacypolicy"
//                   className="text-[#ffc001] font-semibold hover:underline"
//                 >
//                   integritetspolicy
//                 </Link>
//               </span>
//             </label>
//             {termsError && <p className="text-sm text-red-600">{termsError}</p>}
//           </div>

//           {/* Newsletter checkbox */}
//           <div className="lg:col-span-3 flex items-center gap-3">
//             <label className="inline-flex items-center cursor-pointer select-none text-sm text-gray-800">
//               <input
//                 type="checkbox"
//                 name="receiveNews"
//                 checked={form.receiveNews}
//                 onChange={handleChange}
//               />
//               <span className="custom-checkbox ml-2">
//                 <svg viewBox="0 0 24 24" fill="none">
//                   <polyline points="20 6 9 17 4 12" />
//                 </svg>
//               </span>
//               <span className="ml-3">
//                 Jag vill ta emot nyhetsbrev från Taxi Pro i Sverige AB...
//               </span>
//             </label>
//           </div>

//           {/* Submit button */}
//           <div className="lg:col-span-3">
//             <button
//               type="submit"
//               className="w-full text-white font-semibold py-3 rounded-md transition transform hover:scale-105 focus:outline-none"
//               style={{
//                 backgroundColor: "#ffc001",
//                 borderColor: "#ffc001",
//                 boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//               }}
//               onMouseOver={(e) => (e.target.style.backgroundColor = "#e6ac00")}
//               onMouseOut={(e) => (e.target.style.backgroundColor = "#ffc001")}
//             >
//               Skicka
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default RegistrationForm;




import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const getInitialForm = () => {
  const saved = localStorage.getItem("registrationForm");
  return saved
    ? JSON.parse(saved)
    : {
        firstName: "",
        surname: "",
        companyName: "",
        organizationNumber: "",
        address: "",
        postalNumber: "",
        city: "",
        tel: "",
        email: "",
        membershipType: "",
        paymentMethod: "Månadsfaktura", // ✅ default value
        message: "",
        acceptTerms: false,
        receiveNews: false,
      };
};

const RegistrationForm = () => {
  const [form, setForm] = useState(getInitialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [termsError, setTermsError] = useState("");
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [error, submitted]);

  // --- Validation helpers ---
  const isValidText = (value) => /^[a-zA-ZåäöÅÄÖ\s'-]*$/.test(value); // allow Swedish chars
  const isNumbersAndDash = (value) => /^[0-9-]*$/.test(value); // digits + dash
  const isCompanyName = (value) =>
    /^[\wåäöÅÄÖ\s\-\.\,\&\!\?\(\)\/\+]*$/.test(value); // letters, numbers, special

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (["firstName", "surname", "city"].includes(name) && !isValidText(value))
      return;

    if (
      ["organizationNumber", "postalNumber", "tel"].includes(name) &&
      !isNumbersAndDash(value)
    )
      return;

    if (name === "companyName" && !isCompanyName(value)) return;

    setForm({ ...form, [name]: type === "checkbox" ? checked : value });

    if (name === "acceptTerms" && checked) {
      setTermsError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.acceptTerms) {
      setTermsError("You must accept the terms to register.");
      setError("");
      setSubmitted(false);
      return;
    }

    try {
      const payload = {
        ...form,
        email: form.email.toLowerCase(),
        acceptTerms: "true",
      };

      const apiBaseUrl =
        import.meta.env.VITE_API_BASE_URL || "https://taxipro-psi.vercel.app";

      await axios.post(`${apiBaseUrl}/api/register`, payload);

      setSubmitted(true);
      setError("");
      setTermsError("");

      // Reset form after successful submission
      setForm(getInitialForm());
      localStorage.removeItem("registrationForm");
    } catch (err) {
      console.error(err);
      if (err.response?.data?.errors) {
        setError(err.response.data.errors[0].msg || "Invalid input.");
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Submission failed. Try again.");
      }
      setSubmitted(false);
    }
  };

  // Save manually only when clicking terms/privacy
  const saveFormBeforeNavigate = () => {
    localStorage.setItem("registrationForm", JSON.stringify(form));
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#fff5d1] via-white to-[#fff1b8] flex items-center justify-center px-4 sm:px-8 py-12">
      <style>
        {`
          input[type="checkbox"] {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }
          .custom-checkbox {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: white;
            border: 2px solid #d1d5db;
            border-radius: 4px;
            position: relative;
            transition: border-color 0.3s ease, background-color 0.3s ease;
            flex-shrink: 0;
          }
          input[type="checkbox"]:checked + .custom-checkbox {
            background-color: #ffc001;
            border-color: #ffc001;
          }
          .custom-checkbox svg {
            position: absolute;
            top: 2px;
            left: 3px;
            width: 14px;
            height: 14px;
            stroke: white;
            stroke-width: 3;
            stroke-linecap: round;
            stroke-linejoin: round;
            opacity: 0;
            transition: opacity 0.2s ease;
          }
          input[type="checkbox"]:checked + .custom-checkbox svg {
            opacity: 1;
          }
          select option[disabled] {
            color: #9ca3af;
            font-style: italic;
          }
        `}
      </style>

      <div
        className="w-full max-w-[1600px] bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-10 border"
        style={{ borderColor: "#ffc001" }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#ffc001" }}>
            Registrera ditt åkeri
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Få full tillgång till TaxiPros webbapp för administration av ditt
            åkeri
          </p>

          <p className="text-base sm:text-lg font-medium mb-2 text-blue-400">
            Testa tjänsten gratis i tre (3) månader.
          </p>

          <p className="text-gray-500 text-[11px] sm:text-xs max-w-2xl mx-auto leading-snug">
            Ingen bindningstid – om skriftlig uppsägning inte sker senast en (1)
            månad före nästa betalningsperiod, förlängs avtalet automatiskt och
            Kunden faktureras enligt vald tjänst och betalningsplan.
          </p>
        </div>

        {error && (
          <p
            ref={messageRef}
            className="text-center mb-4 font-medium text-sm text-red-600"
          >
            {error}
          </p>
        )}

        {submitted && !error && (
          <p
            ref={messageRef}
            className="text-center mb-4 font-medium text-sm text-green-600"
          >
            ✅ Registration successful! Thank you for registering.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            ["Förnamn", "firstName"],
            ["Efternamn", "surname"],
            ["Företagsnamn", "companyName"],
            ["Organisationsnummer", "organizationNumber"],
            ["Adress", "address"],
            ["Postnummer", "postalNumber"],
            ["Ort", "city"],
            ["Telefon", "tel"],
            ["E-post", "email"],
          ].map(([label, name]) => (
            <div key={name} className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type={name === "email" ? "email" : "text"}
                name={name}
                value={form[name]}
                onChange={handleChange}
                required
                placeholder={`Ange ${label.toLowerCase()}`}
                className="p-3 text-sm rounded-md border border-gray-300 bg-white focus:ring-2 outline-none appearance-none focus:ring-[#ffc001]"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          ))}

          {/* Paket */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Paket
            </label>
            <select
              name="membershipType"
              value={form.membershipType}
              onChange={handleChange}
              required
              className="p-3 text-sm rounded-md border border-gray-300 bg-white focus:ring-2 outline-none appearance-none focus:ring-[#ffc001]"
            >
              <option value="" disabled>
                Välj ditt paket
              </option>
              <option value="TaxiPro S">TaxiPro S</option>
              <option value="TaxiPro M">TaxiPro M</option>
              <option value="TaxiPro L">TaxiPro L</option>
              <option value="Obegränsad">Obegränsad</option>
            </select>
          </div>

          {/* Betalningsmetod */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Betalningsmetod
            </label>
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              className="p-3 text-sm rounded-md border border-gray-300 bg-white focus:ring-2 outline-none appearance-none focus:ring-[#ffc001]"
            >
              <option value="Månadsfaktura">Månadsfaktura</option>
              <option value="Kvartalsfaktura (5 % rabatt)">
                Kvartalsfaktura (5 % rabatt)
              </option>
              <option value="Halvårsfaktura (10% rabatt)">
                Halvårsfaktura (10% rabatt)
              </option>
            </select>
          </div>

          <div className="lg:col-span-3">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Meddelande
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 text-sm rounded-md border border-gray-300 bg-white focus:ring-2 outline-none appearance-none focus:ring-[#ffc001]"
              placeholder="Skriv ett meddelande..."
              spellCheck="false"
            />
          </div>

          {/* Terms checkbox */}
          <div className="lg:col-span-3 flex flex-col gap-1">
            <label className="inline-flex items-center cursor-pointer select-none text-sm text-gray-800">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={form.acceptTerms}
                onChange={handleChange}
              />
              <span className="custom-checkbox ml-2">
                <svg viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>

              <span className="ml-3">
                Jag har tagit del av och godkänner Taxi Pro i Sverige AB:s{" "}
                <Link
                  to="/termsconditions"
                  onClick={saveFormBeforeNavigate}
                  className="text-[#ffc001] font-semibold hover:underline"
                >
                  allmänna villkor
                </Link>{" "}
                och{" "}
                <Link
                  to="/privacypolicy"
                  onClick={saveFormBeforeNavigate}
                  className="text-[#ffc001] font-semibold hover:underline"
                >
                  integritetspolicy
                </Link>
              </span>
            </label>
            {termsError && <p className="text-sm text-red-600">{termsError}</p>}
          </div>

          {/* Newsletter checkbox */}
          <div className="lg:col-span-3 flex items-center gap-3">
            <label className="inline-flex items-center cursor-pointer select-none text-sm text-gray-800">
              <input
                type="checkbox"
                name="receiveNews"
                checked={form.receiveNews}
                onChange={handleChange}
              />
              <span className="custom-checkbox ml-2">
                <svg viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="ml-3">
                Jag vill ta emot nyhetsbrev från Taxi Pro i Sverige AB...
              </span>
            </label>
          </div>

          {/* Submit button */}
          <div className="lg:col-span-3">
            <button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-md transition transform hover:scale-105 focus:outline-none"
              style={{
                backgroundColor: "#ffc001",
                borderColor: "#ffc001",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e6ac00")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#ffc001")}
            >
              Skicka
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
