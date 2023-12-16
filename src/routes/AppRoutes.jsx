import { Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  Login,
  MerchantDetail,
  MerchantList,
  ProductDetail,
  ProductList,
  Register,
  UserProfile,
  NotFound,
  ResetPassword,
} from "../views";
import RootLayout from "../layouts/RootLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset" element={<ResetPassword />} />
      </Route>

      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="explores" element={<Explore />} />

        <Route path="merchants">
          {/* <Route index element={<MerchantList />} /> */}
          <Route path=":id" element={<MerchantDetail />} />
        </Route>

        <Route path="products">
          {/* <Route index element={<ProductList />} /> */}
          <Route path=":id" element={<ProductDetail />} />
        </Route>

        <Route path="users/:id" element={<UserProfile />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
