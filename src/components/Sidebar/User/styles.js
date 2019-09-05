import styled from 'styled-components';
import { flex, below, boxShadows, transitions } from 'styles';

const UserAvatar = styled.img`
    border-radius: 100%;
    width: 2.5rem;
    height: 2.5rem;

    box-shadow: ${boxShadows['sm']};
    border: 1px solid ${({ theme }) => theme.border};
    ${transitions['borderColor']};

    ${below['md']`
        display: none;
    `}
`;

const UserData = styled.div`
    h2 {
        font-weight: bold;
        font-size: 1rem;
        letter-spacing: -0.01em;
        margin-bottom: 0.25rem;
        padding-top: 0.25rem;
    }

    p {
        font-size: 0.75rem;
    }
`;

const UserWrap = styled.div`
    margin-bottom: 1.5rem;
    ${flex.horizontal}
    ${flex.centerHorizontalV}

    ${UserAvatar} {
        margin-right: 1rem;
    }
`;

UserWrap.Avatar = UserAvatar;
UserWrap.Data = UserData;

export default UserWrap;
