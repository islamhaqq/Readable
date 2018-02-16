const initialState = {
	posts: [
		{
			id: 'post1',
			title:
				'The Benjamin Franklin method for learning more from programming books',
			author: 'syedaman',
			body: 'this is my post body...',
			points: 198,
			isDeleted: false,
			timestamp: Date.now(),
			comments: [],
		},
	],
	comments: [
		{
			author: 'tabtilachowdhury',
			timestamp: Date.now(),
			id: 'comment1',
			body: 'this is my comment body...',
			points: 50,
			isDeleted: false,
			timestamp: Date.now(),
		},
		{
			author: 'asdads',
			timestamp: Date.now(),
			id: 'comment2',
			body: 'this is my another comment body...',
			points: 61,
			isDeleted: false,
			timestamp: Date.now(),
		},
	],
};

export default initialState;
