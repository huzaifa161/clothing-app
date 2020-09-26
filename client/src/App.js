import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard/Dashboard';

import './App.css';
import './styles/style.css';
import './styles/brand.css';
import AddBrand from './components/admin/Brand/AddBrand';
import EditBrand from './components/admin/Brand/EditBrand';
import BrandList from './components/admin/Brand/BrandList';

import CollectionList from './components/admin/Collection/CollectionList';
import AddCollection from './components/admin/Collection/AddCollection';
const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/dashboard/brands' component={BrandList} />
            <Route path='/dashboard/add-brand' component={AddBrand} />
            <Route path='/dashboard/brands/:id/edit' component={EditBrand} />
            <Route exact path='/dashboard/collections' component={CollectionList} />
            <Route path='/dashboard/add-collection' component={AddCollection} />
       </Switch>
    )
}

export default App;