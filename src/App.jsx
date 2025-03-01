import "./App.css";
import Button from "./components/common/Button";
import HomePage from "./pages/HomePage";

function App() {
	console.log("app");
	return (
		<>
			<HomePage />
		</>
	);
}

export default App;

// Đặt logic xử lý hàm khi ấn nút ở trong HomePage.jsx vào trong App.jsx
