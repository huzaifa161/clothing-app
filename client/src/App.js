import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard/Dashboard';

import './App.css';
import './styles/style.css';
import AddBrand from './components/admin/Brand/AddBrand';
import AddCollection from './components/admin/Collection/AddCollection';
const App = () => {
    return (
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/dashboard/add-brand' component={AddBrand} />
                <Route path='/dashboard/add-collection' component={AddCollection} />
        </Switch>
    )
}

export default App;