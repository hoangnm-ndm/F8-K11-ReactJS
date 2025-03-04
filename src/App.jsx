import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import Header from "./layouts/Header";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/product-detail/:id" element={<ProductDetailPage />} />
				{/* //parameters */}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default App;

// Đặt logic xử lý hàm khi ấn nút ở trong HomePage.jsx vào trong App.jsx
