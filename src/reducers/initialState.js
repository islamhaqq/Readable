const initialState = {
	posts: {
		byId: {
			post1: {
				id: 'post1',
				title: 'The Benjamin Franklin method...',
				author: 'syedaman',
				body: 'this is my post body...',
				voteScore: 198,
				isDeleted: false,
				timestamp: Date.now(),
				comments: ['comment1', 'comment2'],
			},
			post2: {
				id: 'post2',
				title: 'JEYAH!!!!',
				author: 'jamaicanman',
				body: 'rasta man...',
				voteScore: 25,
				isDeleted: false,
				timestamp: Date.now(),
				comments: ['comment3'],
			},
		},
		allIds: ['post1', 'post2'],
	},
	comments: {
		byId: {
			comment1: {
				author: 'tabtilachowdhury',
				id: 'comment1',
				body: 'this is my comment body...',
				voteScore: 50,
				isDeleted: false,
				timestamp: Date.now(),
			},
			comment2: {
				author: 'asdads',
				id: 'comment2',
				body: 'this is my another comment body...',
				voteScore: 61,
				isDeleted: false,
				timestamp: Date.now(),
			},
			comment3: {
				author: 'asdads',
				id: 'comment3',
				body: 'this is my another comment body...',
				voteScore: 61,
				isDeleted: false,
				timestamp: Date.now(),
			},
		},
		allIds: ['comment1', 'comment2', 'comment3'],
	},
};

export default initialState;
