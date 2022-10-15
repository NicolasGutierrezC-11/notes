import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//importamos los comp creados
import Formulario from "./components/Formulario";
import Cupo from "./components/Cupo";
import Home from "./components/home";
import NavBarExample from "./layouts/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarExample />}>
            <Route index element={<Home />} />
            <Route path="Formulario" element={<Formulario />} />
            <Route path="Cupo" element={<Cupo />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
