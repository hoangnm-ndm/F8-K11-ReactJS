import React, { useState } from "react";

const data = [
	{
		id: 1,
		name: "Hoang",
		age: 33,
	},
	{
		id: 2,
		name: "Hoa",
		age: 34,
	},
];

function HomePage() {
	const [show, setShow] = useState(false);
	function handleClick() {
		setShow(!show);
	}

	return (
		<div>
			<button onClick={handleClick}>{show ? "Hidden" : "Show"}</button>
			<div className="infor"></div>
			{show &&
				data.map((item) => (
					<div key={item.id}>
						<h2>{item.name}</h2>
						<p>{item.age}</p>
					</div>
				))}

			<Button size="small" variant="primary" onClick={() => console.log("click")}>
				Click me
			</Button>

			<Button size="medium" variant="secondary" onClick={() => console.log("show more")}>
				show more
			</Button>

			<Button size="big" variant="primary" onClick={() => console.log("call me")}>
				call me
			</Button>
		</div>
	);
}

const a = [1, 2, 3] + [4, 5, 6];
// 1,2,34,5,6

export default HomePage;
