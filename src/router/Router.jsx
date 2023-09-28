import { createHashRouter } from "react-router-dom";
import Login from "../pages/Login";
import CadFarmacias from "../pages/CadFarmacias";
import CadMedicamentos from "../pages/CadMedicamentos";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import ListaFarmacias from "../pages/ListaFarmacias";
import MedicamentoCard from "../pages/MedicamentoCard";
import { Home } from "../pages/Home";

export const router = createHashRouter([
    {
        index: true,
        element: <Home />,
        errorElement:<ErrorPage/>,
    },
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/farmacias",
                element: <CadFarmacias/>,
            },
            {
                path: "/medicamentos",
                element: <CadMedicamentos/>,
            },
            {
                path: "/lista-farmacia",
                element: <ListaFarmacias/>,
            },
            {
                path: "/lista-medicamento",
                element: <MedicamentoCard/>,
            },
        ],
    }
])