import styled from 'styled-components';

const PostWrap = styled.div`
    margin-bottom: 1rem;
`;

const TitleWrap = styled.div`
    padding: 1rem;
`;

const Image = styled.img`
    width: 100%;
`;

const CaptionWrap = styled.div`
    padding: 1rem;
`;

PostWrap.Title = TitleWrap;
PostWrap.Image = Image;
PostWrap.CaptionWrap = CaptionWrap;

export default PostWrap;
