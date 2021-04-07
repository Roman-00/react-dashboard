import React from 'react';

import LogoImg from '../../assets/logo.svg';
import { MdDashboard, MdArrowUpward, MdArrowDownward, MdExitToApp } from 'react-icons/md';

import { Container, Header, Title, LogImg, MenuContainer, MenuItemLink } from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={LogoImg} alt="Logo App Money Dashboard"/>
                <Title>App Money</Title>
            </Header>

            <MenuContainer>

                <MenuItemLink href="#">
                    <MdDashboard />
                    Панель
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowUpward />
                    Доход
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowDownward />
                    Расход
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp />
                    Выйти
                </MenuItemLink>

            </MenuContainer>
        </Container>
    );
}

export { Aside };