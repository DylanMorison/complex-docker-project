import React, { Component } from "react";
import axios from "axios";

export default class Fib extends Component {
	state = {
		seenIndexes: [],
		values: {},
		index: ""
	};

	componentDidMount() {
		this.fetchValues();
		this.fetchIndexes();
	}

	async fetchValues() {
		const values = await axios.get("/api/values/current");
		this.setState({ values: values.data });
	}

	async fetchIndexes() {
		const seenIndexes = await axios.get("/api/values/all");
		this.setState({
			seenIndexes: seenIndexes.data
		});
	}

	renderSeenIndexes() {
		return this.state.seenIndexes.map(({ number }) => number).join(", ");
	}

    renderValues() {
        
    }

	render() {
		return (
			<div>
				<form>
					<label>Enter your index:</label>
					<input type="text" />
					<button>Submit</button>
				</form>

				<h3>Indexes I have seen:</h3>
				{this.renderSeenIndexes()}
				<h3>Calculated Values:</h3>
				{this.renderValues()}
			</div>
		);
	}
}
