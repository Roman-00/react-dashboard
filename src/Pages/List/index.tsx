import React from 'react';
import { useMemo, useState, useEffect } from 'react';

import { ContentHeader } from '../../components/ContentHeader/ContentHeader';
import { SelectInput } from '../../components/SelectInput/SelectInput';
import { HistoryFinanseCard } from '../../components/HistoryFinanceCard/HistoryFinanseCard';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import { Container, Content, Filters } from './styles';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormated: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);

    const { type } = match.params;
    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Доход' : 'Расход'
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#e7931b' : '#e44c4e'
    }, [type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    },[]);

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

    useEffect(() => {
        const response = listData.map(item => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dataFormated: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
            }
        })
        setData(response);
    },[]);

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
                {
                    data.map(item => (
                        <HistoryFinanseCard
                            key={item.id} 
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dataFormated}
                            amount={item.amountFormatted}
                        />
                    ))
                }
             </Content>
        </Container>    
    );
}

export { List };