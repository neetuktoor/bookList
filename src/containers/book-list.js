import React, {Component} from 'react';
//imports connect function from react-redux, first step in making it a continer
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
//function that ensures actions flows through all reducers, takes the
//return value from import {selectBook}
import {bindActionCreators} from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li
					 key={book.title}
					 onClick={() => this.props.selectBook(book)}
					 className="list-group-item">{book.title}</li>
			);
		});
	}

	render () {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

//take application state (array of book and active books) as argument
//glue between react and redux
function mapStatetoProps(state) {
//whatever is returned will show up as props inside of BookList
	return {
		//whatever is returned showed up as props inside if container
		//books reducer returning array of books
		books: state.books
	};
}

//Anything returned from this fucntion will end
//up as props on the bookLits container
function mapDispatchToProps(dispatch) {
	//whenever selectBook(action) is called, result should be passed
	//to all reducers
	//action is dispatched by app
	return bindActionCreators({selectBook: selectBook}, dispatch)
}

//connect takes function and component and produces cntainer
//container aware of state contained that is redux
//state returns an object that is available to us as this.props
//this booklist is then rendered in index.js
export default connect(mapStatetoProps, mapDispatchToProps)(BookList);
//promote booklist from a component to a container - it needs to
//know about this new dispatch method, selectBook, make it available
//as a prop