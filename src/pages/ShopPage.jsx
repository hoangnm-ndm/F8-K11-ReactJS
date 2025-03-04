import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShopPage() {
	const [products, setProducts] = useState([]);
	async function fetchProducts() {
		const res = await fetch("http://localhost:3000/products");
		const data = await res.json();
		setProducts(data);
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	/**
	 * dependencies:
	 * 1. undefined: không khác gì không dùng useEffect -> Sai
	 * 2. []: chỉ gọi callback 1 lần sau khi component được mount
	 * 3. [dependence]: gọi lại callback mỗi khi có ít nhất 1 dependence thay đổi
	 */
	return (
		<div>
			<h1>Hot sale 50%</h1>
			{products.length != 0
				? products.map((item) => (
						<div key={item.id}>
							<h2>{item.title}</h2>
							<p>Price: {item.price}</p>
							<Link to={`/product-detail/${item.id}`}>Xem chi tiet</Link>
						</div>
				  ))
				: "Không có sản phẩm nào!"}
		</div>
	);
}

export default ShopPage;
