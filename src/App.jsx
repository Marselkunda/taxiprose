// src/App.jsx
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
      </Routes>
    </>
  );
}

export default App;


// import { Routes, Route } from 'react-router-dom';

// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Services from './pages/Services';
// import Fleet from './pages/Fleet';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/aboutus" element={<AboutUs />} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/fleet" element={<Fleet />} />
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />
//     </Routes>
//   );
// }

// export default App;
