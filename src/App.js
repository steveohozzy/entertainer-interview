import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Plp from "./routes/plp/Plp";
import Checkout from "./routes/checkout/Checkout";
import Cart from "./routes/cart/Cart";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/category/*" element={<Plp />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
