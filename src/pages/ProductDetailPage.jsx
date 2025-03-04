import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<div>
			<h1>Chi tiet san pham</h1>
			{id}
		</div>
	);
};

export default ProductDetailPage;
