import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;

    .tag-filter {
        margin: 0 10px;
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.colors.white};
        transition: opacity .3s;

        :hover {
            opacity: .7;
        }

    }

    .tag-filter-expense::after {
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
    }

    .tag-filter-income::after {
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.success};
    }
`;