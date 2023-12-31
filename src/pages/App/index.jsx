import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShopCartProvider } from "../../context";
import { Home } from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import "./App.css";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShopCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShopCartProvider>
  );
};

export default App;
