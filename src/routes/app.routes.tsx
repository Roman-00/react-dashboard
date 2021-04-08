import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';
import { Dashboard } from '../Pages/Dashboard/index';
import { List } from '../Pages/List/index';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/list/:type" component={List}/>
        </Switch>
    </Layout>
);

export { AppRoutes };