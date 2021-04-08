import React from 'react';

import { SelectInput } from '../../components/SelectInput/SelectInput';
import { ContentHeader } from '../../components/ContentHeader/ContentHeader';

import { Container } from './styles';

const Dashboard: React.FC = () => {
    
    const options = [
        {value: 'Анна', label: 'Анна'},
        {value: 'Роман', label: 'Роман'},
        {value: 'Елена', label: 'Елена'}
    ]

    return (
        <Container>
             <ContentHeader title="Панель" lineColor="#f7931b">
                <SelectInput options={options}/>
             </ContentHeader>
        </Container>    
    );
}

export { Dashboard };