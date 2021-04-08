import React from 'react';
import { useMemo } from 'react';

import { ContentHeader } from '../../components/ContentHeader/ContentHeader';
import { SelectInput } from '../../components/SelectInput/SelectInput';
import { HistoryFinanseCard } from '../../components/HistoryFinanceCard/HistoryFinanseCard';

import { Container, Content, Filters } from './styles';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

const List: React.FC<IRouteParams> = ({ match }) => {

    const { type } = match.params;
    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Доход' : 'Расход'
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#e7931b' : '#e44c4e'
    }, [type]);

    const options = [
        {value: 'Hello', label: 'Hello'},
        {value: 'Riki', label: 'Riki'},
        {value: 'Tiki', label: 'tiki'}
    ];
    
    const months = [
        {value: 2021, label: 2021},
        {value: 2020, label: 2020},
        {value: 2019, label: 2019}
    ];

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={options}/>
                <SelectInput options={months}/>
             </ContentHeader>

             <Filters>
                 <button type="button" className="tag-filter tag-filter-expense">Расход</button>
                 <button type="button" className="tag-filter tag-filter-income">Доход</button>
             </Filters>

             <Content>
                <HistoryFinanseCard 
                    cardColor="#313851"
                    tagColor="#e44c4e"
                    title="Счет за свет"
                    subtitle="27/07/2021"
                    amount="R$ 130,00"
                />
             </Content>
        </Container>    
    );
}

export { List };