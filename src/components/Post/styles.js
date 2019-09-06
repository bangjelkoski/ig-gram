import styled from 'styled-components';
import { transitions, flex } from 'styles';

const PostWrap = styled.div`
    margin-bottom: 1rem;
`;

const TitleWrap = styled.div`
    padding: 0.5rem 1rem;
`;

const Image = styled.img`
    width: 100%;
`;

const CaptionWrap = styled.div`
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
`;

const LikesWrap = styled.div`
    ${flex.horizontal};
    ${flex.centerHorizontalV};
    padding: 0.5rem 1rem 0;
    font-size: 0.9rem;

    strong {
        font-weight: bold;
        padding-top: 0.2rem;
    }
`;

const CommentsWrap = styled.div`
    padding: 1rem 1rem 0;
    border-top: 1px solid ${({ theme }) => theme.border};
    ${transitions['borderColor']};
`;

PostWrap.Title = TitleWrap;
PostWrap.Image = Image;
PostWrap.CaptionWrap = CaptionWrap;
PostWrap.LikesWrap = LikesWrap;
PostWrap.CommentsWrap = CommentsWrap;

export default PostWrap;
