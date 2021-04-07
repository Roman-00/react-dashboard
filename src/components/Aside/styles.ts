import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    padding-left: 20px;
    background-color: ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.white}
`

export const Header = styled.header`
    display: flex;
    align-items: center; 

    height: 70px;
`;

export const Title = styled.h3`
    margin-left: 10px;
    color: ${props => props.theme.colors.white};
`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;

    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;
    margin: 7px 0;
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    > svg {
        margin-right: 5px;
        font-size: 18px;
    }
`;