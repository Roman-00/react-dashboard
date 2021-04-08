import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import { AppRoutes } from '../routes/app.routes';

const Routes: React.FC = () => (
    <Router>
        <AppRoutes/>
    </Router>
)

export { Routes };