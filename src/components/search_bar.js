import React, { Component} from 'react'; 

// functional component
// const SearchBar = () => {
// 	return <input />;
// };

// class component
class SearchBar extends Component {
	//define state in a class component
	constructor(props) {
		//because Component already has a constructor function
		super(props);

		this.state = { term: '' };
	}

	onInputChange = (event) => {
		this.setState({ term: event.target.value })
		this.props.onSearchTermChange(this.state.term)
	}

	render() {
		return (
			<div className="search-bar">
			<input 
				value={this.state.term}
				onChange={this.onInputChange} />
			</div>
		);
	}
}

export default SearchBar;