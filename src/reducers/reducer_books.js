//application state is generated by reducer functions.
//the books reducer is just the array of books below
//this reducer is combined in index.js

export default function() {
	return [
		{title: 'Javascript: The Good Parts', pages: 101},
		{title: 'Harry Potter', pages: 300},
		{title: 'The Dark Tower', pages: 150},
		{title: 'Eloquent Ruby', pages: 20}
	];
}
