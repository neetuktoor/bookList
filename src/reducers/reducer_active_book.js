//state arguemtn is not application state, only
//the state this reducer is responsible for
//es6 syntax: if argument is undefined return as null
export default function(state = null, action) {
	//look at actions type, if it matches, return new state
	switch(action.type) {
		case 'BOOK_SELECTED':
		return action.payload; // return the selected book
	}

	//if we dont care about current action, pass state back through
	return state;

}