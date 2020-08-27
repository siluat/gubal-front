import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Search from './pages/Search';
import { useDispatch } from 'react-redux';
import { getItemSummariesAsync } from './modules/library';
import ItemPage from './pages/ItemPage';
import MainPage from './pages/MainPage';

export function AppRoute() {
  return (
    <Switch>
      <Route exact path={['/', '/search', '/search/:searchKeyword']}>
        <Search />
      </Route>
      <Route exact path="/item/:id">
        <ItemPage data-testid="item-page" />
      </Route>
      <Route exact path="/main" component={MainPage} />
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
