import React, { useMemo } from 'react';

import emojis from '../../utils/emojis';
import { Toggle } from '../Toggle/Toggle';

import { Container, Profile, Welcome, UserName } from './styles';


const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length)
        return emojis[indice];
    }, []);

    return (
        <Container>
            <Toggle />
            <Profile>
                <Welcome>Привет, {emoji}</Welcome>
                <UserName>Роман Васин</UserName>
            </Profile>
        </Container>
    );
};

export { MainHeader };