import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.Fragment>
		<App />
	</React.Fragment>
);

//
/**
 * JSX = Javascript XML
 * JSX không phải là chuỗi, không phải là HTML,mà là một định dạng, 1 cú pháp giúp xây dựng giao diện người dùng dễ dàng hơn.
 * Component là hàm hỗ trợ xây dựng 1 phần giao diện. Bắt buộc phải viết theo PascalCase
 * props = properties là một đối tượng chứa nhiều thông tin cần truyền {}
 */
