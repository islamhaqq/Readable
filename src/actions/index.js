export const UPVOTE_POST_ACTION_TYPE = 'UPVOTE_POST';

export function upvotePost(postId) {
	return {
		type: UPVOTE_POST_ACTION_TYPE,
		payload: {
			postId,
		},
	};
}
