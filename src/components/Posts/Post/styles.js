import styled from 'styled-components';
import { transitions } from 'styles';

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
    padding: 1rem 1rem 0.5rem;
    font-size: 0.9rem;
`;

const CommentsWrap = styled.div`
    padding: 1rem 1rem 0;
    border-top: 1px solid ${({ theme }) => theme.border};
    ${transitions['borderColor']};
`;

PostWrap.Title = TitleWrap;
PostWrap.Image = Image;
PostWrap.CaptionWrap = CaptionWrap;
PostWrap.CommentsWrap = CommentsWrap;

export default PostWrap;
