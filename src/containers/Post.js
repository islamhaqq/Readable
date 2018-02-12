import React, { Component } from 'react';

class Post extends Component {
	render() {
		return (
			<div class="post">
				<h1 class="post-tile">Post Title</h1>
				<p class="post-body">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia
					libero a est rhoncus, ac scelerisque arcu euismod. Suspendisse
					potenti. Morbi et cursus enim, at ullamcorper lacus. Suspendisse eu
					eleifend mauris, at varius sem. Fusce nunc eros, ullamcorper sed diam
					non, vulputate cursus ex. Etiam ullamcorper enim urna, at ullamcorper
					sapien dapibus vel. Ut interdum libero vitae rutrum tempus. Aliquam
					eleifend urna elit, quis mattis diam ornare ut. Integer hendrerit
					aliquet quam eu efficitur. Donec ac felis nibh. Curabitur nec lorem
					sit amet nibh dapibus pulvinar sed eu tellus. Donec lacinia
					consectetur ultricies. Aenean blandit, tellus auctor fringilla
					viverra, magna tellus cursus lectus, in volutpat odio est laoreet
					augue.
				</p>
				<span post-vote-score>1</span>
				<div class="comment-section">
					<h2 class="comment-section-header">Comments</h2>
					<ul class="comment-section-comment-list">
						<li class="comment">
							<h6 class="comment-author">Comment Author</h6>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
