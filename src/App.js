import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CheckoutLayout from "./components/layout/CheckoutLayout";
import Plp from "./routes/plp/Plp";
import Checkout from "./routes/checkout/Checkout";
import Cart from "./routes/cart/Cart";
import ProductDetails from "./routes/pdp/ProductDetails";
import Home from "./routes/home/Home";
import Account from "./routes/account/Account";
import HomeTabs from "./routes/home/HomeTabs";
import Wishlist from "./routes/wishlist/Wishlist";
import Events from "./routes/events/Events";
import SearchResults from "./routes/search/Search";
import Brands from "./routes/brandsPage/Brands";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tabs" element={<HomeTabs />} />
        <Route path="/category/*" element={<Plp />} />
        <Route path="/search/:id" element={<SearchResults />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/events" element={<Events />} />
        <Route path="/brands/*" element={<Brands />} />
      </Route>
      <Route path="/" element={<CheckoutLayout />}>
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
