//(book) is just an object with a title
export function selectBook(book) {
	//selectBook is an ActionCreator, needs to retun an action
	//an object with a type property
	return {
		type: 'BOOK_SELECTED', 
		payload: book
	};
}
//action that is triggered by this needs to run through all of our reducers
//action creator needs to be wired up to redux
//select book action needs to be binding to bookList component