// src/App.jsx
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import AboutUs from './pages/Aboutus';
import Services from './pages/Services';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
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
