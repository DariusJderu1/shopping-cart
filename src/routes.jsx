import App from "./components/App.jsx";
import Home from "./components/app/Home.jsx";
import Shop from "./components/app/Shop.jsx";
import Cart from "./components/app/Cart.jsx";
import ErrorPage from "./components/app/ErrorPage.jsx";
import ProductDetails from "./components/app/ProductDetails.jsx";

const routes = [

    {
        path: "/",
        element: <App />,
        children: [

            { 
                index: true, 
                element: <Home /> 
            },

            { 
                path: "shop", 
                element: <Shop /> 
            },

            { 
                path: "shop/:productId", 
                element: <ProductDetails /> 
            },

            { 
                path: "cart", 
                element: <Cart /> 
            },
        ],
        errorElement: <ErrorPage />
    }
];

export default routes;