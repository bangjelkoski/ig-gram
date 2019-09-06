import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Card from 'components/Card';
import User from 'components/User';
import Comment from './Comment';
import Heart from './Heart';
import PostWrap from './styles';

class Post extends Component {
    state = {
        liked: Math.random() >= 0.5,
        totalLikes: this.props.likes_count,
    };

    handleToggleLiked() {
        this.setState(previousState => ({
            liked: !previousState.liked,
            totalLikes: previousState.liked ? previousState.totalLikes - 1 : previousState.totalLikes + 1,
        }));
    }

    render() {
        const { caption, image, comments, user } = this.props;

        return (
            <PostWrap>
                <Fade bottom>
                    <Card marginless={true}>
                        <PostWrap.Title>
                            <User {...user} marginless={true} />
                        </PostWrap.Title>

                        <PostWrap.Image src={image} alt={caption} />

                        <PostWrap.LikesWrap>
                            <Heart liked={this.state.liked} toggleLiked={() => this.handleToggleLiked()} />
                            <strong>{`${this.state.totalLikes} likes`}</strong>
                        </PostWrap.LikesWrap>

                        <PostWrap.CaptionWrap>{caption}</PostWrap.CaptionWrap>

                        {comments && comments.length > 0 ? (
                            <PostWrap.CommentsWrap>
                                {comments.map(comment => (
                                    <Comment key={`comment-${comment.id}`} user={user} comment={comment} />
                                ))}
                            </PostWrap.CommentsWrap>
                        ) : null}
                    </Card>
                </Fade>
            </PostWrap>
        );
    }
}

export default Post;
