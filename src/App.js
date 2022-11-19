import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Base from "./Components/Layouts/Base";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";

function App() {
  return <div>
   <BrowserRouter>
   <Base>
   <Routes>
   <Route index path="/" element={<Home/>}/>
  
   </Routes>
   </Base>
   </BrowserRouter>
  </div>;
}

export default App;
