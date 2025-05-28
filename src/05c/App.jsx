import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductsbyID from "./pages/ProductsbyID";

export default function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product">
                    <Route path=":id" element={<ProductsbyID />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
