import App from "./components/App.jsx";
import Home from "./components/app/Home.jsx";

const routes = [

    {
        path: "/",
        element: <App />,
        children: [

            { index: true, element: <Home /> },
        ]
    }
];

export default routes;