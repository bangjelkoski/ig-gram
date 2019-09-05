import React from 'react';
import Fade from 'react-reveal/Fade';
import Card from 'components/Card';
import User from 'components/User';
import PostWrap from './styles';

const Post = function(props) {
    const { caption, image } = props;

    return (
        <PostWrap>
            <Fade bottom>
                <Card marginless={true}>
                    <PostWrap.Title>
                        <User {...props.user} marginless={true} />
                    </PostWrap.Title>
                    <PostWrap.Image src={image} alt={props.caption} />
                    <PostWrap.CaptionWrap>{caption}</PostWrap.CaptionWrap>
                </Card>
            </Fade>
        </PostWrap>
    );
};

export default Post;
