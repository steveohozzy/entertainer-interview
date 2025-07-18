import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CheckoutLayout from "./components/layout/CheckoutLayout";
import Plp from "./routes/plp/Plp";
import Checkout from "./routes/checkout/Checkout";
import Cart from "./routes/cart/Cart";
import ProductDetails from "./routes/pdp/ProductDetails";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/category/*" element={<Plp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Route>
      <Route path="/" element={<CheckoutLayout />}>
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
