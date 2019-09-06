import styled from 'styled-components';
import { flex } from 'styles';

const CommentWrap = styled.div`
    width: 100%;
    margin-bottom: 0.5rem;
    ${flex.horizontal}

    h4 {
        font-weight: bold;
        font-size: 0.9rem;
        margin-right: 0.5rem;
    }

    p {
        font-size: 0.85rem;
    }
`;

export default CommentWrap;
