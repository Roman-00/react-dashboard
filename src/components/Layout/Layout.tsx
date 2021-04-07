import React from 'react';

import { Grid } from './styles';

import { MainHeader } from '../MainHeader/MainHeader';
import { Aside } from '../Aside/Aside';
import { Content } from '../Content/Content';


const Layout: React.FC = () => {
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content />
        </Grid>
    );
};

export { Layout };