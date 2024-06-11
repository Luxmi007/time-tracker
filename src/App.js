import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage />}/>

    <Footer/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
