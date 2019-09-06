import React from 'react';
import Fade from 'react-reveal/Fade';
import Card from 'components/Card';
import User from 'components/User';
import Comment from './Comment';
import PostWrap from './styles';

const Post = function(props) {
    const { caption, image, comments } = props;

    return (
        <PostWrap>
            <Fade bottom>
                <Card marginless={true}>
                    <PostWrap.Title>
                        <User {...props.user} marginless={true} />
                    </PostWrap.Title>
                    <PostWrap.Image src={image} alt={props.caption} />
                    <PostWrap.CaptionWrap>{caption}</PostWrap.CaptionWrap>
                    {comments && comments.length > 0 ? (
                        <PostWrap.CommentsWrap>
                            {comments.map(comment => (
                                <Comment key={`comment-${comment.id}`} user={props.user} comment={comment} />
                            ))}
                        </PostWrap.CommentsWrap>
                    ) : null}
                </Card>
            </Fade>
        </PostWrap>
    );
};

export default Post;
