import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Search from './pages/Search';
import { useDispatch } from 'react-redux';
import { getItemSummariesAsync } from './modules/library';
import ItemPage from './pages/ItemPage';

export function AppRoute() {
  return (
    <Switch>
      <Route exact path={['/', '/search']}>
        <Search />
      </Route>
      <Route exact path="/item/:id">
        <ItemPage data-testid="item-page" />
      </Route>
    </Switch>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemSummariesAsync.request());
  });

  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
