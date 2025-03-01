import React from "react";
import ProductItem from "../components/ui/ProductItem";
import data from "../data";

function ShopPage() {
	console.log(data);

	// Các hooks cần được sử dụng trong function component
	return (
		<div>
			{
				// Hiển thị danh sách sản phẩm
				<ProductItem />
			}
		</div>
	);
}

export default ShopPage;

// Xây dựng ShopPage component hiển thị danh sách sản phẩm từ data trên
/**
 * Khi ấn vào nút đổi layout có thể chuyển đổi giữa 2 layout:
 * - Layout 1: Hiển thị sản phẩm theo dạng danh sách
 * - Layout 2: Hiển thị sản phẩm theo dạng grid
 *
 * Mỗi sản phẩm có đầy đủ thông tin cơ bản như tên, giá, nút xem chi tiết.
 */
