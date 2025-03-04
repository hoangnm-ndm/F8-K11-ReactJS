import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<>
			<header>
				<div className="logo">
					<img
						width={40}
						src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvkfVc3qX1xVVO0Yu5Vi9L_v5aGy_tZon8uORJ9fetFaOTzdxsavRWhNAnZ2-yhcI2l045q1pM0zKrdInDEZQUow"
						alt=""
					/>
				</div>
				<nav>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/shop">Shop</NavLink>
						</li>
						<li>
							<NavLink to="/categories">Category</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
