import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsConditions = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfdfb] text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        className={`flex-grow transition-opacity duration-1000 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full px-4 sm:px-10 lg:px-20 py-16 pt-32 pb-16 flex flex-col items-center justify-between gap-12">
          <motion.div
            className="w-full max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <h1
              className="text-5xl font-extrabold mb-12 tracking-wide text-center"
              style={{ color: "#ffc001" }}
            >
              Allmänna villkor
              <span
                className="block h-1 w-24 rounded-full mt-4 mx-auto"
                style={{ backgroundColor: "#ffc001" }}
              ></span>
            </h1>

            {/* Full Text */}
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
              <p>
                <strong style={{ color: "#ffc001" }}>Allmänt</strong><br />
                Dessa allmänna villkor gäller för Taxi pro i Sverige AB med organisationsnummer 559437–3622, hädanefter benämnt “Taxi pro i Sverige” eller “vi”.
                <br />
                Taxi Pro är en mobilapplikation som möjliggör administrering och koordinering av taxiverksamhet. Appen finns tillgänglig för nedladdning på IOS och Google Play. För att använda vår applikation ska du ha fyllt 18 år och ha accepterat de villkor som gäller vid användning av mobilapplikationen. Denna mobilapplikation är kostnadsfri.
                <br />
                Taxi Pro finns även som en webbapplikation och hemsidan nås då via taxipro.se. För att få tillgång till denna sida krävs ett abonnemang. Aktuella abonnemangsformer och priser finns på vår hemsida.
                <br />
                Mobilapplikationen och webbapplikationen benämns nedan gemensamt som ”Appen”.
                <br />
                När du skapar ett konto på Taxi Pro måste du också acceptera vår integritetspolicy där vi förklarar hur vi behandlar dina personuppgifter. Här hittar du vår integritetspolicy.
                <br />
                Se till att du läser igenom dessa allmänna villkor innan du använder Appen och hör av dig till oss om du skulle ha några frågor avseende dessa villkor. Kontaktuppgifter hittar du längst ner i de allmänna villkoren.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Mina sidor</strong><br />
                Taxi Pro erbjuder användaren att lagra information om sitt taxibolag i Appen under Mina Sidor. Här kan användaren själv fylla i uppgifter om förare, registreringsnummer, körjournaler, betalningsinformation, bilder mm. Användaren ansvarar själv för alla uppgifter som lagras på Appen via Mina Sidor och att användaren har tillåtelse att dela information med Taxi Pro.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Chattkommunikation via Taxi Pro Home</strong><br />
                Taxi Pro erbjuder användare att kommunicera med varandra i under en chattfunktion benämnd Taxi Pro Home. Här kan användare via egna gruppchatter kommunicera med varandra. Användaren förbinder sig att inte kränka andra användare, publicera felaktigheter, uttala sig etniskt kränkande, sexuellt kränkande eller agera trakasserande på så sätt att detta kränker andra användare av applikationen.
                <br />
                Taxi Pro frånskriver sig allt ansvar för det som skrivs av användare.
                <br />
                Taxi Pro har möjlighet att stänga av användare ifall användare agerar på ett sätt som strider mot Taxi Pros riktlinjer och dessa allmänna villkor.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Annonsering i Appen</strong><br />
                Genom Taxi Pros webbapplikation har du som taxibolag även möjlighet att lägga ut en annons då du söker chaufförer. Du som annonsör kommer att utforma din annons på egen hand. För att annonsera behöver du skapa ett konto på Taxi Pro och får därefter mata in de uppgifter som behövs för din annons.
                <br />
                När du har fyllt i de uppgifter som krävs så klarmarkerar du annonsen som då läggs upp Taxi Pro under våra aktiva annonser.
                <br />
                Annonsen får inte innehålla något material som är felaktigt, vilseledande, olagligt eller kränkande och du som användare tar ansvar för informationen och dess riktighet.
                <br />
                Taxi Pro tar inte ansvar för de överenskommelser som sker mellan chaufför och taxibolag och är på inget sätt att anse som en arbetsgivare. Eventuella avtal och överenskommelser sker mellan tidigare nämnda parter.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Missbruk vid användning av appen</strong><br />
                Taxi Pro har möjlighet att plocka ned annons ifall den är utformad på ett sätt som strider mot Taxi Pros riktlinjer och dessa allmänna villkor. Taxi Pro kan därtill omedelbart stänga av en användare som bryter mot dessa allmänna villkor eller som gör intrång i tredje mans rättigheter.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Immateriella rättigheter</strong><br />
                Taxi Pro äger de immateriella rättigheterna hänförliga till Appen, detta innefattar men inte begränsat till patent, upphovsrätt, varumärken och know-how. Du som användare får inte ändra eller använda något material i strid mot de av oss tillhörande immateriella rättigheterna. Detta innefattar, men är inte begränsat till, att skapa en liknande plattform med de av Taxi pro ägda immateriella rättigheterna.
                <br />
                Inget i användarvillkoren ska tolkas som att i ovan punkt nämnda rättigheter eller del därav övergår till användaren som brukar Taxi Pros applikationer.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Abonnemang</strong><br />
                Taxi Pro erbjuder olika abonnemang vilka ändras från tid till annan. Uppdaterad information om de olika abonnemangen tillhandahålls av Taxi Pro på vår hemsida. Tjänsten som tillhandahålls till dig beror på vilket abonnemang du har registrerat dig för.
                <br />
                Uppsägningstiden för tjänsten är 1 månad om inte Användaren avtalat om annat med Taxi pro.
                <br />
                Taxi Pro förbehåller sig rätten att ta bort eller ändra funktioner i sina befintliga abonnemang. Ändringar av ett abonnemang kan grundas på olika faktorer, t.ex. för att förbättra/underhålla tjänsten, följa rättighetsinnehavares krav, följa juridiska eller tekniska krav.
                <br />
                Om du avslutar ditt abonnemang kommer det att löpa ut vid slutet av din nuvarande betalningsperiod.
                <br />
                Taxi Pro kan säga upp abonnemanget med omedelbar verkan när som helst och utan föregående meddelande förutsatt att du inte följer dessa allmänna villkor eller tillämpliga lagar, regler eller förordningar, eller om du på annat sätt använder Appen på ett bedrägligt sätt eller på ett sätt som kan orsaka en skada för Taxi Pro eller tredje part.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Betalning för användande av webbapplikationen</strong><br />
                Betalning för ditt abonnemang sker i enlighet med vid var tid gällande pris för ditt abonnemang.
                <br />
                Taxi Pro fakturerar dig månadsvis i enlighet med din valda abonnemangsmodell och pengarna ska var taxi Pro tillhanda inom 30 dagar från fakturans datum. Vid utebliven eller försenad betalning förbehåller sig Taxi Pro rätten att påföra dröjsmålsränta enligt lag.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Ansvar</strong><br />
                Taxi Pro är endast en tjänst som möjliggör administration och koordination av taxitjänster samt tillhandahållande av annonsplats för försäljning av fordon. Notera att Taxi Pro inte äger eller är innehavare av de fordon som det annonseras för i Appen.
                <br />
                Taxi Pro kan inte hållas ansvarig för utformningen av en annons eller eventuella felaktigheter eller vilseledande information som lämnas i en annons och kan heller inte hållas ansvarig för fel eller brister avseende själva fordonet. Du som användare ansvarar för att du har de eventuella tillstånd och godkännanden som krävs för att skapa ett konto och sälja fordonen samt inte gör intrång i tredje mans rättigheter.
                <br />
                Taxi pro är aldrig part i det avtal som träffas mellan annonsör och köpare av ett fordon och kan därför inte stå till svars för eventuella fel eller avtalsbrott som begås i relationen mellan parterna. Användaren ansvarar på egen hand för korrekt hantering av eventuella skattekonsekvenser som uppkommer till följd av köp.
                <br />
                Taxi Pro ansvarar inte för fel eller störningar i Appen som gör att innehåll visas felaktigt eller inte alls. Vi ansvarar inte heller för skador eller fel i Appen som uppkommer till följd av händelser som inträffar utom vår kontroll eller force majeure.
                <br />
                Från tid till annan kan vi komma att behöva göra underhåll för att åtgärda eventuella buggar eller störningar i Appen. Under denna tid kan vissa av Appens funktioner fungera sämre. Vi förbehåller oss rätten att göra sådant underhåll utan ersättningsförpliktelse för oss. Vi kommer i möjligaste mån göra dessa typer av underhåll på tider som påverkar dig som användare så lite som möjligt.
                <br />
                Du som användare av tjänsten förbinder dig att hålla Taxi Pro skadelös för samtliga skador som uppkommit till följd av att den av dig utformade annonsen gjort intrång i rättigheter som tillhör tredje man eller på annat sätt givit upphov till skada.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Personuppgifter</strong><br />
                Taxi Pro behandlar dina personuppgifter när du använder Appen och skapar ett konto hos oss. I vår integritetspolicy kan du läsa mer om hur vi behandlar dina personuppgifter och i vilka syften dina personuppgifter används.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Reklamation</strong><br />
                Om du tycker att det varit något fel på tjänsten har du rätt att reklamera tjänsten under tre år från dagen då tjänsten utfördes.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Tillämplig lag och tvist</strong><br />
                Svensk lag ska gälla vid tillämpning och tolkning av dessa allmänna villkor. Du har rätt att få tvist prövad av Allmänna reklamationsnämnden om nämnden finner sig behörig och lämplig att pröva frågan alternativt av svensk allmän domstol.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Ändringar av dessa villkor</strong><br />
                Taxi Pro kan komma att ändra dessa allmänna villkor från tid till annan. Om ändringarna är av större betydelse för dig som använder tjänsten kommer vi höra av oss till dig i god tid innan ändringen sker på den e-postadress som du uppgivit när du skapat konto hos oss. Du hittar alltid våra gällande allmänna villkor i appen.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Kontaktuppgifter</strong><br />
                Taxi pro i Sverige AB organisationsnummer 559437–3622. E-postadress: <a href="mailto:info@taxipro.se" className="text-[#ffc001] font-semibold hover:underline">info@taxipro.se</a>
                <br /> <br></br>
                Datum då villkoren senast reviderades: 2025-08-20
              </p>
            </div>

            {/* Back button */}
            <div className="mt-12 flex justify-center">
              <Link
                to="/"
                state={{ scrollToRegister: true }}
                className="px-8 py-3 rounded-md font-semibold text-white transition transform hover:scale-105"
                style={{
                  backgroundColor: "#ffc001",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                Tillbaka till registrering
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsConditions;





// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const TermsConditions = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     setVisible(true);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-[#fdfdfb] text-gray-800">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <main
//         className={`flex-grow transition-opacity duration-1000 ease-in-out ${
//           visible ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 pt-24 sm:pt-28 md:pt-32 pb-16 flex flex-col items-center gap-12">
//           <motion.div
//             className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {/* Title */}
//             <h1
//               className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 tracking-wide text-center"
//               style={{ color: "#ffc001" }}
//             >
//               Allmänna villkor
//               <span
//                 className="block h-1 w-20 sm:w-24 rounded-full mt-2 sm:mt-3 mx-auto"
//                 style={{ backgroundColor: "#ffc001" }}
//               ></span>
//             </h1>

//             {/* Full Text */}
//             <div className="text-gray-700 text-base sm:text-lg leading-relaxed sm:leading-relaxed space-y-6">
//               <p>
//                 <strong style={{ color: "#ffc001" }}>Allmänt</strong><br />
//                 Dessa allmänna villkor gäller för Taxi pro i Sverige AB med organisationsnummer 559437–3622, hädanefter benämnt “Taxi pro i Sverige” eller “vi”.
//                 <br />
//                 Taxi Pro är en mobilapplikation som möjliggör administrering och koordinering av taxiverksamhet. Appen finns tillgänglig för nedladdning på IOS och Google Play. För att använda vår applikation ska du ha fyllt 18 år och ha accepterat de villkor som gäller vid användning av mobilapplikationen. Denna mobilapplikation är kostnadsfri.
//                 <br />
//                 Taxi Pro finns även som en webbapplikation och hemsidan nås då via taxipro.se. För att få tillgång till denna sida krävs ett abonnemang. Aktuella abonnemangsformer och priser finns på vår hemsida.
//                 <br />
//                 Mobilapplikationen och webbapplikationen benämns nedan gemensamt som ”Appen”.
//                 <br />
//                 När du skapar ett konto på Taxi Pro måste du också acceptera vår integritetspolicy där vi förklarar hur vi behandlar dina personuppgifter. Här hittar du vår integritetspolicy.
//                 <br />
//                 Se till att du läser igenom dessa allmänna villkor innan du använder Appen och hör av dig till oss om du skulle ha några frågor avseende dessa villkor. Kontaktuppgifter hittar du längst ner i de allmänna villkoren.
//               </p>

//               <p>
//                 <strong style={{ color: "#ffc001" }}>Mina sidor</strong><br />
//                 Taxi Pro erbjuder användaren att lagra information om sitt taxibolag i Appen under Mina Sidor. Här kan användaren själv fylla i uppgifter om förare, registreringsnummer, körjournaler, betalningsinformation, bilder mm. Användaren ansvarar själv för alla uppgifter som lagras på Appen via Mina Sidor och att användaren har tillåtelse att dela information med Taxi Pro.
//               </p>

//               <p>
//                 <strong style={{ color: "#ffc001" }}>Chattkommunikation via Taxi Pro Home</strong><br />
//                 Taxi Pro erbjuder användare att kommunicera med varandra i under en chattfunktion benämnd Taxi Pro Home. Här kan användare via egna gruppchatter kommunicera med varandra. Användaren förbinder sig att inte kränka andra användare, publicera felaktigheter, uttala sig etniskt kränkande, sexuellt kränkande eller agera trakasserande på så sätt att detta kränker andra användare av applikationen.
//                 <br />
//                 Taxi Pro frånskriver sig allt ansvar för det som skrivs av användare.
//                 <br />
//                 Taxi Pro har möjlighet att stänga av användare ifall användare agerar på ett sätt som strider mot Taxi Pros riktlinjer och dessa allmänna villkor.
//               </p>

//               <p>
//                 <strong style={{ color: "#ffc001" }}>Annonsering i Appen</strong><br />
//                 Genom Taxi Pros webbapplikation har du som taxibolag även möjlighet att lägga ut en annons då du söker chaufförer. Du som annonsör kommer att utforma din annons på egen hand. För att annonsera behöver du skapa ett konto på Taxi Pro och får därefter mata in de uppgifter som behövs för din annons.
//                 <br />
//                 När du har fyllt i de uppgifter som krävs så klarmarkerar du annonsen som då läggs upp Taxi Pro under våra aktiva annonser.
//                 <br />
//                 Annonsen får inte innehålla något material som är felaktigt, vilseledande, olagligt eller kränkande och du som användare tar ansvar för informationen och dess riktighet.
//                 <br />
//                 Taxi Pro tar inte ansvar för de överenskommelser som sker mellan chaufför och taxibolag och är på inget sätt att anse som en arbetsgivare. Eventuella avtal och överenskommelser sker mellan tidigare nämnda parter.
//               </p>

//               <p>
//                 <strong style={{ color: "#ffc001" }}>Missbruk vid användning av appen</strong><br />
//                 Taxi Pro har möjlighet att plocka ned annons ifall den är utformad på ett sätt som strider mot Taxi Pros riktlinjer och dessa allmänna villkor. Taxi Pro kan därtill omedelbart stänga av en användare som bryter mot dessa allmänna villkor eller som gör intrång i tredje mans rättigheter.
//               </p>

//               <p>
//                 <strong style={{ color: "#ffc001" }}>Immateriella rättigheter</strong><br />
//                 Taxi Pro äger de immateriella rättigheterna hänförliga till Appen, detta innefattar men inte begränsat till patent, upphovsrätt, varumärken och know-how. Du som användare får inte ändra eller använda något material i strid mot de av oss tillhörande immateriella rättigheterna. Detta innefattar, men är inte begränsat till, att skapa en liknande plattform med de av Taxi pro ägda immateriella rättigheterna.
//                 <br />
//                 Inget i användarvillkoren ska tolkas som att i ovan punkt nämnda rättigheter eller del därav övergår till användaren som brukar Taxi Pros applikationer.
//               </p>

//               <p>
//                 <strong style={{ color: "#ffc001" }}>Abonnemang</strong><br />
//                 Taxi Pro erbjuder olika abonnemang vilka ändras från tid till annan. Uppdaterad information om de olika abonnemangen tillhandahålls av Taxi Pro på vår hemsida. Tjänsten som tillhandahålls till dig beror på vilket abonnemang du har registrerat dig för.
//                 <br />
//                 Uppsägningstiden för tjänsten är 1 månad om inte Användaren avtalat om annat med Taxi pro.
//                 <br />
//                 Taxi Pro förbehåller sig rätten att ta bort eller ändra funktioner i sina befintliga abonnemang. Ändringar av ett abonnemang kan grundas på olika faktorer, t.ex. för att förbättra/underhålla tjänsten, följa rättighetsinnehavares krav, följa juridiska eller tekniska krav.
//                 <br />
//                 Om du avslutar ditt abonnemang kommer det att löpa ut vid slutet av din nuvarande betalningsperiod.
//                 <br />
//                 Taxi Pro kan säga upp abonnemanget med omedelbar verkan när som helst och utan föregående meddelande förutsatt att du inte följer dessa allmänna villkor eller tillämpliga lagar, regler eller förordningar, eller om du på annat sätt använder Appen på ett bedrägligt sätt eller på ett sätt som kan orsaka en skada för Taxi Pro eller tredje part.
//               </p>

//               <p>
//                 <strong style={{ color: "#ffc001" }}>Betalning för användande av webbapplikationen</strong><br />
//                 Betalning för ditt abonnemang sker i enlighet med vid var tid gällande pris för ditt abonnemang.
//                 <br />
//                 Taxi Pro fakturerar dig månadsvis i enlighet med din valda abonnemangsmodell och pengarna ska var taxi Pro tillhanda inom 30 dagar från fakturans datum. Vid utebliven eller försenad betalning förbehåller sig Taxi Pro rätten att påföra dröjsmålsränta enligt lag.
//               </p>

//               <p>
//                 <strong style={{ color: "#ffc001" }}>Ansvar</strong><br />
//                 Taxi Pro är endast en tjänst som möjliggör administration och koordination av taxitjänster samt tillhandahållande av annonsplats för försäljning av fordon. Notera att Taxi Pro inte äger eller är innehavare av de fordon som det annonseras för i Appen.
//                 <br />
//                 Taxi Pro kan inte hållas ansvarig för utformningen av en annons eller eventuella felaktigheter eller vilseledande information som lämnas i en annons och kan heller inte hållas ansvarig för fel eller brister avseende själva fordonet. Du som användare ansvarar för att du har de eventuella tillstånd och godkännanden som krävs för att skapa ett konto och sälja fordonen samt inte gör intrång i tredje mans rättigheter.
//                 <br />
//                 Taxi pro är aldrig part i det avtal som träffas mellan annonsör och köpare av ett fordon och kan därför inte stå till svars för eventuella fel eller avtalsbrott som begås i relationen mellan parterna. Användaren ansvarar på egen hand för korrekt hantering av eventuella skattekonsekvenser som uppkommer till följd av köp.
//                 <br />
//                 Taxi Pro ansvarar inte för fel eller störningar i Appen som gör att innehåll visas felaktigt eller inte alls. Vi ansvarar inte heller för skador eller fel i Appen som uppkommer till följd av händelser som inträffar utom vår kontroll eller force majeure.
//                 <br />
//                 Från tid till annan kan vi komma att behöva göra underhåll för att åtgärda eventuella buggar eller störningar i Appen. Under denna tid kan vissa av Appens funktioner fungera sämre. Vi förbehåller oss rätten att göra sådant underhåll utan ersättningsförpliktelse för oss. Vi kommer i möjligaste mån göra dessa typer av underhåll på tider som påverkar dig som användare så lite som möjligt.
//                 <br />
//                 Du som användare av tjänsten förbinder dig att hålla Taxi Pro skadelös för samtliga skador som uppkommit till följd av att den av dig utformade annonsen gjort intrång i rättigheter som tillhör tredje man eller på annat sätt givit upphov till skada.
//               </p>

//               <p>
//                 <strong style={{ color: "#ffc001" }}>Personuppgifter</strong><br />
//                 Taxi Pro behandlar dina personuppgifter när du använder Appen och skapar ett konto hos oss. I vår integritetspolicy kan du läsa mer om hur vi behandlar dina personuppgifter och i vilka syften dina personuppgifter används.
//               </p>

//               <p>
//                 <strong style={{ color: "#ffc001" }}>Reklamation</strong><br />
//                 Om du tycker att det varit något fel på tjänsten har du rätt att reklamera tjänsten under tre år från dagen då tjänsten utfördes.
//               </p>

//               <p>
//                 <strong style={{ color: "#ffc001" }}>Tillämplig lag och tvist</strong><br />
//                 Svensk lag ska gälla vid tillämpning och tolkning av dessa allmänna villkor. Du har rätt att få tvist prövad av Allmänna reklamationsnämnden om nämnden finner sig behörig och lämplig att pröva frågan alternativt av svensk allmän domstol.
//               </p>

//               <p>
//                 <strong style={{ color: "#ffc001" }}>Ändringar av dessa villkor</strong><br />
//                 Taxi Pro kan komma att ändra dessa allmänna villkor från tid till annan. Om ändringarna är av större betydelse för dig som använder tjänsten kommer vi höra av oss till dig i god tid innan ändringen sker på den e-postadress som du uppgivit när du skapat konto hos oss. Du hittar alltid våra gällande allmänna villkor i appen.
//               </p>

//               <p>
//                 <strong style={{ color: "#ffc001" }}>Kontaktuppgifter</strong><br />
//                 Taxi pro i Sverige AB organisationsnummer 559437–3622. E-postadress: <a href="mailto:info@taxipro.se" className="text-[#ffc001] font-semibold hover:underline">info@taxipro.se</a>
//                 <br /><br />
//                 Datum då villkoren senast reviderades: 2025-08-20
//               </p>
//             </div>

//             {/* Back button */}
//             <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
//               <Link
//                 to="/"
//                 state={{ scrollToRegister: true }}
//                 className="px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold text-white transition transform hover:scale-105"
//                 style={{
//                   backgroundColor: "#ffc001",
//                   boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                 }}
//               >
//                 Tillbaka till registrering
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default TermsConditions;



