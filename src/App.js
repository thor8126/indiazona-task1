import { Route, Routes } from "react-router-dom";

import Test from "./pages/Test/Test";
import AdminLayout from "./layouts/AdminLayout";
import OrderTracking from "./pages/OrderTracking/OrderTracking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="" element={<Test />} />
        <Route path="/tracking" element={<OrderTracking />} />
      </Route>
    </Routes>
  );
}

export default App;
