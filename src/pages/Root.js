import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import PagesRepositorySearch from './Repository/Search/Search'

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={PagesRepositorySearch} />
            </Switch>
        </Router>
    )
}

export default Root;