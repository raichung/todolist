import React from "react"

function Joke(props) {
	return (
		<div>
			<h3 style= {{display: !props.ques && "none"}}>Question: {props.ques}</h3>
			<h3 style= {{color: !props.ques && "#888888"}}>Answer: {props.ans}</h3>
			<hr/>
		</div>
	)
}

export default Joke