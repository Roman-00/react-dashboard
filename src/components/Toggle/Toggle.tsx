import React from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => (

    <Container>
        <ToggleLabel>Светлая</ToggleLabel>
        <ToggleSelector
            checked
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() => console.log('mudou')}
        />
        <ToggleLabel>Темная</ToggleLabel>
    </Container>

)

export { Toggle };