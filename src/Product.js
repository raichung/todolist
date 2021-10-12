import React from "react"

function Product(props) {
	return (
		<div>
			<h2>{props.stuff.name}</h2>
			<p>${props.stuff.price} - {props.stuff.description}</p>
		</div>
	)
}

export default Product