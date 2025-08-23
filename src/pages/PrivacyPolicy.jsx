import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
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
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 pt-24 sm:pt-28 md:pt-32 pb-16 flex flex-col items-center gap-12">
          <motion.div
            className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 tracking-wide text-center"
              style={{ color: "#ffc001" }}
            >
              Integritetspolicy
              <span
                className="block h-1 w-20 sm:w-24 rounded-full mt-2 sm:mt-3 mx-auto"
                style={{ backgroundColor: "#ffc001" }}
              ></span>
            </h1>

            {/* Full Text */}
            <div className="text-gray-700 text-base sm:text-lg leading-relaxed sm:leading-relaxed space-y-6">
              <p>
                <strong style={{ color: "#ffc001" }}>Allmänt</strong><br />
                I vår integritetspolicy förklarar vi hur och varför Taxi pro i Sverige AB behandlar dina personuppgifter och vilka rättigheter du som registrerad (person vars personuppgifter vi behandlar) har enligt dataskyddsförordningen (GDPR). Vi hoppas att du ska känna dig trygg med vår personuppgiftsbehandling och ber dig läsa igenom denna policy noggrant för att se hur dina personuppgifter behandlas och skyddas. För det fall du skulle ha frågor om vår personuppgiftshantering eller vilja utöva någon av dina rättigheter hittar du våra kontaktuppgifter längst ner i denna policy.
                <br />
                Personuppgiftsansvarig är Taxi pro i Sverige AB med organisationsnummer 559437–3622.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Vilka personuppgifter behandlar vi?</strong><br />
                De personuppgifter som vi behandlar om dig ifall du skapar ett konto hos oss är: namn, organisationsnummer, e-postadress, telefonnummer, samt inloggningsuppgifter som du väljer när du skapar ditt konto.
                <br />
                Om du lägger ut en annons på vår portal behandlar vi även de uppgifter som du anger i annonsen.
                <br />
                Betalning för vår tjänst sker genom faktura som skickas med Taxi pro i Sverige AB som betalningsmottagare.
                <br />
                Betalning för vår tjänst sker genom vår fatureringsleverantör XX som då kommer att behandla ditt tidigare nämnda kontaktuppgifter.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Varför behandlar vi dina personuppgifter och med vilken rättslig grund?</strong><br />
                Vi behandlar dina personuppgifter för att kunna tillhandahålla vår tjänst och uppfylla det avtal vi ingår med dig när du skapar ett konto på vår plattform.
                <br />
                Vi kan också behandla dina personuppgifter i syfte att uppfylla rättsliga förpliktelser. Det kan avse lagstiftning gällande bokföring eller för att kunna förebygga och utreda eventuella brott eller intrång som sker vid användande av appen. Vi kan också komma att behandla personuppgifter för att försvara eller fastställa rättsliga anspråk.
                <br />
                Vi behandlar även personuppgifter med grund i vårt berättigade intresse. När vi använder oss av vårt berättigade intresse så gör vi en intresseavvägning mellan vårt intresse av att behandla dina personuppgifter och det intrång som behandlingen utgör för dig som registrerad. Du har möjlighet att invända mot sådan behandling av dina personuppgifter som grundas på vårt berättigade intresse. Mer information om din rätt att invända och utöva dina rättigheter hittar du under avsnittet ”Dina rättigheter” nedan.
                <br />
                Vi använder berättigat intresse som grund för behandling när vi använder personuppgifter för att föra statistik och analysera hur vår tjänst används. Detta gör vi för att anpassa vår tjänst så att den blir så enkel som möjlig för våra användare att använda.
                <br />
                Vi kan komma att behandla dina personuppgifter i direktmarknadsföringssyfte. Detta gör vi endast ifall du samtyckt till behandlingen genom att på ett tydligt sätt bekräfta att du vill ta del av nyhetsbrev och erbjudanden. Du kan alltid återkalla ditt samtycke genom att avregistrera dig från framtida marknadsföring genom att klicka på en länk som finns i alla våra marknadsföringsutskick.
                <br />
                Om du avregistrerar dig och återkallar ditt samtycke kommer vi omedelbart upphöra att använda dina personuppgifter i direktmarknadsföringssyfte.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Hur skyddar vi dina personuppgifter?</strong><br />
                För Taxi pro i Sverige AB är det viktigt att du känner dig säker med hur dina personuppgifter behandlas. För att skydda dina personuppgifter från otillåten användning och obehörig åtkomst har vi implementerat lämpliga tekniska och organisatoriska åtgärder.
                <br />
                Alla medarbetare på Taxi pro i Sverige AB har tydliga instruktioner när det kommer till hur dina personuppgifter hanteras.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Vilka delar vi dina personuppgifter med?</strong><br />
                Taxi pro i Sverige AB kan komma att dela dina personuppgifter med tredje part. Dessa tredje parter agerar personuppgiftsbiträden till oss vilket innebär att de behandlar dina personuppgifter utifrån ändamål som vi har bestämt och enligt våra instruktioner. Vi säkerställer alltid att samtliga personuppgiftsbiträden till oss har implementerat lämpliga tekniska och organisatoriska åtgärder och garanterar att dina personuppgifter behandlas på ett säkert sätt. Våra personuppgiftsbiträden är företag som biträder oss med lagring och förvaring av personuppgifter.
                <br />
                Taxi pro i Sverige AB eftersträvar alltid att dina personuppgifter behandlas inom EU/EES. Ifall vi skulle behandla dina personuppgifter i ett land utanför EU/EES, ett tredje land, så garanterar vi dig att sådan behandling endast sker ifall skyddsnivån är minst densamma som om personuppgifterna skulle behandlas inom EU/EES. Detta säkerställs genom att vi endast behandlar personuppgifter i länder som EU-kommissionen meddelat håller en adekvat skyddsnivå alternativt att vi i avtal med respektive personuppgiftsbiträde i tredje land lämnats säkerhet om att skyddsnivån är sådan att den är minst likvärdig med den som gäller inom EU/EES.
                <br />
                Dina personuppgifter kan även komma att delas med myndighet ifall det är nödvändigt för att uppfylla en rättslig förpliktelse eller för att vi ska kunna försvara eller fastställa ett rättsligt anspråk.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Hur länge sparas dina personuppgifter?</strong><br />
                Taxi pro i Sverige AB sparar aldrig dina personuppgifter längre än vad som krävs för att vi ska kunna uppfylla det aktuella avtalet med dig som användare av vår tjänst eller för att vi ska kunna uppfylla rättsliga förpliktelser som åvilar oss alternativt försvara eller fastställa rättsliga anspråk. Behandlar vi dina personuppgifter med grund i vårt berättigade intresse så sparar vi aldrig personuppgifter för sådana ändamål i längre än 24 månader från det att vi samlade in personuppgifterna.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Dina rättigheter</strong><br />
                Du som registrerad (en person vars personuppgifter vi behandlar) har flera rättigheter vad gäller behandlingen av dina personuppgifter. Nedan följer en genomgång av vilka rättigheter som du kan utöva enligt dataskyddsförordningen (GDPR).
                <br />
                För att vi ska kunna tillgodose din begäran om du vill utöva någon av dina rättigheter kan vi komma att kräva att du legitimerar dig på ett lämpligt sätt för att säkerställa att vi inte lämnar ut personuppgifter till en obehörig person.
                <br />
                Längst ner i denna policy hittar du våra kontaktuppgifter som du kan använda dig av ifall du vill utöva någon av rättigheterna eller om du har frågor kring får personuppgiftshantering.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Tillgång till personuppgifter</strong><br />
                <br />
                <strong style={{ color: "#ffc001" }}>Rättelse och radering</strong><br />
                Du har rätt att få dina personuppgifter rättade ifall vi har felaktiga personuppgifter om dig samt rätt att komplettera ofullständiga personuppgifter om dig.
                <br />
                Du kan också begära att vi ska radera dina personuppgifter. Vid en sådan begäran raderar vi samtliga personuppgifter om dig, med undantag av sådana uppgifter som vi är skyldiga att spara på grund av att vi måste uppfylla en rättslig förpliktelse eller personuppgifter som behövs för att vi ska kunna försvara ett rättsligt anspråk.
                <br />
                Tänk på att radering av personuppgifter kan innebära att du inte kan använda dig av våra tjänster.
                <br />
                <strong style={{ color: "#ffc001" }}>Dataportabilitet</strong><br />
                Under vissa omständigheter har du rätt att få de uppgifter vi behandlar om dig i ett allmänt, skriftligt, maskinläsbart, och strukturerat format. Denna rättighet avser personuppgifter som du själv lämnat till oss ifall den rättsliga grunden för personuppgiftsbehandlingen stöds på ditt samtycke eller för att fullgöra avtal med dig.
                <br />
                <strong style={{ color: "#ffc001" }}>Begränsning av behandling</strong><br />
                Du kan, om vissa förutsättningar gäller, begära att vi ska begränsa behandlingen av dina personuppgifter. Om du begär detta kommer vi att begränsa användningen av dina personuppgifter. Tänk på att begränsning av dina personuppgifter kan innebära att du vi inte kan utföra vissa tjänster.
                <br />
                <strong style={{ color: "#ffc001" }}>Rätt att göra invändningar</strong><br />
                Du har rätt att invända mot behandling av personuppgifter som utförs av oss med stöd av vårt berättigade intresse. Vid invändning beträffande direktmarknadsföring upphör vi alltid omedelbart att behandla dina personuppgifter för detta ändamål.
                <br />
                <strong style={{ color: "#ffc001" }}>Rätt att inge klagomål</strong><br />
                Om du anser att vi har behandlat dina personuppgifter på ett felaktigt eller olagligt sätt har du rätt att inge klagomål till Integritetsskyddsmyndigheten. På Integritetsskyddsmyndighetens hemsida kan du läsa mer om personuppgiftsbehandling och hur du går tillväga för att inge ett klagomål.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Kontaktuppgifter</strong><br />
                Om du vill utöva någon av rättigheterna ovan eller har frågor om vår behandling av personuppgifter är du välkommen att höra av dig till{" "}
                <a
                  href="mailto:info@taxipro.se"
                  className="text-[#ffc001] font-semibold hover:underline"
                >
                  info@taxipro.se
                </a>
                . För att försäkra oss om att vi endast lämnar ut personuppgifter till rätt person kan vi komma att kräva att du legitimerar dig på ett lämpligt sätt för att vi ska kunna tillgodose din begäran.
              </p>

              <p>
                <strong style={{ color: "#ffc001" }}>Ändringar i integritetspolicy</strong><br />
                Taxi pro i Sverige AB kan komma att göra ändringar och uppdateringar i denna integritetspolicy. Skulle ändringarna vara av större betydelse och antas påverka dig som registrerad kommer vi att skicka ut ett e-postmeddelande till dig om ändringarna i god tid innan det att policyn uppdateras. Du hittar alltid vår gällande integritetspolicy i vår app.
              </p>

              <p>
                Datum då policyn senast reviderades: 2025-08-20
              </p>
            </div>

            {/* Back button */}
            <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
              <Link
                to="/"
                state={{ scrollToRegister: true }}
                className="px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold text-white transition transform hover:scale-105"
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

export default PrivacyPolicy;
