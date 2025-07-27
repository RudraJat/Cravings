import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart"
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Payment from "./components/Payment";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Footer from "./components/Footer.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="min-h-screen flex flex-col">
  <Header />
  <main className="flex-grow">
    <Outlet />
  </main>
  <div className="mt-5"></div>
  <Footer />
</div>
</Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurantMenu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/payment",
        element: <Payment />,
      }
    ],
    errorElement: <Error />,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />);
