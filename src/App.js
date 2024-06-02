import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = () => {
  return <h1>Home Page</h1>;
};
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage />}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
