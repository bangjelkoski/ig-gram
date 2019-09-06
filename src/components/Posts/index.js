import React, { Component } from 'react';
import Post from 'components/Post';
import allPosts from 'data/posts';
import users from 'data/users';
import comments from 'data/comments';
import commentPost from 'data/comment_post';
import { randomize } from 'utils/random';

class Posts extends Component {
    /**
     * Prevent the component to update on theme
     * change, because we dont want to get new
     * data but the keep the old one
     */
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        const posts = randomize(allPosts, 20);
        posts.map(post => {
            post.user = users.find(user => user.id === post.user_id);

            const commentIds = commentPost.filter(comment => comment.post_id === post.id);
            post.comments = commentIds.map(comment => {
                const result = comments.find(c => c.id === comment.comment_id);
                result.user = users.find(user => user.id === comment.user_id);
                return result;
            });

            return post;
        });

        return <div>{posts && posts.length && posts.map(post => <Post key={`post-${post.id}`} {...post} />)}</div>;
    }
}

export default Posts;
