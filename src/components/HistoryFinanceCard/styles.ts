import styled from 'styled-components';

interface ITagProps {
    color: string;
}

export const Container = styled.li`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 10px 0;
    padding: 12px 10px;

    background-color: ${props => props.theme.colors.tertiary};
    list-style: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s; 

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding-left: 10px;
    }

    > div span {
        font-size: 18px;
        font-weight: 500;
    }
`;

export const Tag = styled.div<ITagProps>`
    position: absolute;
    left: 0;

    width: 10px;
    height: 30px;

    background-color: ${props => props.color};
`;